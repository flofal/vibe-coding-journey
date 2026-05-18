/* =========================================================
   Vibe Coding Dashboard — lógica compartida (3 páginas).

   - Inyecta navbar y footer como partials en cada página.
   - Aplica i18n a strings fijas.
   - Renderiza dashboard solo si los elementos existen.
   - Bind del toggle ES/EN con persistencia en localStorage.
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_LANG = "vc.lang";
  const SUPPORTED_LANGS = ["es", "en"];
  const DEFAULT_LANG = "es";
  const DAY_MS = 24 * 60 * 60 * 1000;

  const state = { lang: DEFAULT_LANG, data: null };

  /* ---------- Partials (navbar + footer compartidos) ---------- */

  const NAVBAR_HTML = `
    <a class="skip-link" href="#main" data-i18n="a11y.skip">Saltar al contenido</a>
    <nav class="navbar" role="navigation" aria-label="Navegación principal">
      <div class="navbar-inner">
        <a class="navbar-brand" href="index.html" aria-label="Florencia Falco — Inicio">
          <img class="navbar-logo" src="assets/logos/logo-ff.png" alt="Florencia Falco" />
        </a>

        <button type="button" class="nav-toggle" id="nav-toggle"
                aria-expanded="false" aria-controls="nav-menu" aria-label="Abrir menú">
          <span class="nav-toggle-bar" aria-hidden="true"></span>
          <span class="nav-toggle-bar" aria-hidden="true"></span>
          <span class="nav-toggle-bar" aria-hidden="true"></span>
        </button>

        <ul class="nav-menu" id="nav-menu">
          <li><a class="nav-link" href="index.html" data-page-link="dashboard" data-i18n="nav.dashboard">Dashboard</a></li>
          <li><a class="nav-link" href="sobre.html" data-page-link="sobre" data-i18n="nav.about">Sobre</a></li>
          <li><a class="nav-link" href="contacto.html" data-page-link="contacto" data-i18n="nav.contact">Contacto</a></li>
          <li class="nav-lang">
            <div class="lang-toggle" role="group" aria-label="Idioma">
              <button type="button" class="lang-btn" data-lang-set="es">ES</button>
              <span class="lang-sep" aria-hidden="true">|</span>
              <button type="button" class="lang-btn" data-lang-set="en">EN</button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  `;

  const FOOTER_HTML = `
    <footer class="site-footer" role="contentinfo">
      <div class="container footer-inner">
        <p class="footer-credit" data-i18n="footer.credit">
          Plan de estudio original: Karen Brennan &amp; Jacob Wolf · HGSE Fall 2025
        </p>
        <p class="footer-author">
          <span data-i18n="footer.author">Proyecto personal</span>
          - <span id="footer-year">2026</span>
        </p>
      </div>
    </footer>
  `;

  function mountPartials() {
    const navMount = document.getElementById("navbar-mount");
    if (navMount) navMount.innerHTML = NAVBAR_HTML;
    const footMount = document.getElementById("footer-mount");
    if (footMount) footMount.innerHTML = FOOTER_HTML;
  }

  function setActiveNavLink() {
    const page = document.body.dataset.page;
    document.querySelectorAll(".nav-link[data-page-link]").forEach(function (a) {
      a.classList.toggle("is-active", a.dataset.pageLink === page);
    });
  }

  /* ---------- Utilidades ---------- */

  function t(key, vars) {
    const dict = window.VC_TRANSLATIONS[state.lang] || {};
    let value = dict[key];
    if (value === undefined) value = (window.VC_TRANSLATIONS.es || {})[key];
    if (value === undefined) return key;
    if (vars && typeof value === "string") {
      Object.keys(vars).forEach(function (k) {
        value = value.replace(new RegExp("\\{" + k + "\\}", "g"), vars[k]);
      });
    }
    return value;
  }

  function escapeHtml(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function parseISODate(iso) {
    if (!iso) return null;
    const parts = iso.split("-");
    if (parts.length !== 3) return null;
    return new Date(parseInt(parts[0],10), parseInt(parts[1],10) - 1, parseInt(parts[2],10));
  }
  function startOfDay(d) { const x = new Date(d); x.setHours(0,0,0,0); return x; }

  function formatDateLong(isoDate) {
    const d = parseISODate(isoDate);
    if (!d) return "";
    const months = t("months.long");
    return t("date.format", {
      day: d.getDate(),
      month: Array.isArray(months) ? months[d.getMonth()] : "",
      year: d.getFullYear()
    });
  }

  function getInitialLang() {
    try {
      const saved = localStorage.getItem(STORAGE_LANG);
      if (saved && SUPPORTED_LANGS.indexOf(saved) !== -1) return saved;
    } catch (_) {}
    return DEFAULT_LANG;
  }
  function saveLang(lang) { try { localStorage.setItem(STORAGE_LANG, lang); } catch (_) {} }

  /* ---------- Aplicar strings fijas ---------- */

  function applyTranslations() {
    document.documentElement.lang = t("html.lang");
    document.documentElement.dataset.lang = state.lang;

    // Título de página por data-page
    const page = document.body.dataset.page;
    const titleKey = "meta.title." + (page || "dashboard");
    document.title = t(titleKey);
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t("meta.description"));

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      const target = btn.getAttribute("data-lang-set");
      const isActive = target === state.lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    const langGroup = document.querySelector(".lang-toggle");
    if (langGroup) langGroup.setAttribute("aria-label", t("nav.lang.aria"));
    const navToggle = document.getElementById("nav-toggle");
    if (navToggle) navToggle.setAttribute("aria-label", t("nav.toggle.aria"));
  }

  /* ---------- Featured week (dashboard) ---------- */

  function pickFeaturedWeek(weeks, today) {
    const inProgress = weeks.find(function (w) { return w.status === "in_progress"; });
    if (inProgress) return { state: "live", week: inProgress };

    const todayMs = startOfDay(today).getTime();

    for (let i = 0; i < weeks.length; i++) {
      const w = weeks[i];
      const d = parseISODate(w.date);
      if (!d) continue;
      const start = startOfDay(d).getTime();
      const end = start + 7 * DAY_MS;
      if (todayMs === start) return { state: "today", week: w };
      if (todayMs > start && todayMs < end) return { state: "live", week: w };
    }

    const future = weeks
      .filter(function (w) {
        const d = parseISODate(w.date);
        return d && startOfDay(d).getTime() > todayMs;
      })
      .sort(function (a, b) { return parseISODate(a.date) - parseISODate(b.date); });
    if (future.length) return { state: "upcoming", week: future[0] };

    return { state: "done", week: weeks[weeks.length - 1] };
  }

  function formatCountdown(targetISO, state_) {
    const target = parseISODate(targetISO);
    if (!target) return "";
    const diff = startOfDay(target).getTime() - startOfDay(new Date()).getTime();
    const days = Math.round(diff / DAY_MS);
    if (state_ === "today" || days === 0) return t("featured.countdown.now");
    if (days < 0) return "";
    if (days === 1) return t("featured.countdown.daysOne", { n: 1 });
    if (days <= 14) return t("featured.countdown.daysMany", { n: days });
    const weeks = Math.round(days / 7);
    return t("featured.countdown.weeks", { n: weeks });
  }

  function renderFeatured() {
    const card = document.getElementById("featured-card");
    if (!card || !state.data) return;

    const featured = pickFeaturedWeek(state.data.weeks, new Date());
    const w = featured.week;

    const eyebrowEl = document.getElementById("featured-eyebrow");
    const titleEl = document.getElementById("featured-title");
    const topicEl = document.getElementById("featured-topic");
    const weekEl = document.getElementById("featured-week");
    const dateText = document.querySelector("#featured-date span");
    const countdownEl = document.getElementById("featured-countdown");
    const openBtn = document.getElementById("featured-open");

    let eyebrowKey;
    switch (featured.state) {
      case "today": eyebrowKey = "featured.eyebrow.today"; break;
      case "live": eyebrowKey = "featured.eyebrow.live"; break;
      case "done": eyebrowKey = "featured.eyebrow.done"; break;
      default: eyebrowKey = "featured.eyebrow.upcoming";
    }
    if (eyebrowEl) eyebrowEl.textContent = t(eyebrowKey);

    if (featured.state === "done") {
      if (titleEl) titleEl.textContent = t("featured.done.title");
      if (topicEl) topicEl.textContent = t("featured.done.subtitle");
      if (weekEl) weekEl.textContent = "";
      if (dateText) dateText.textContent = "";
      if (countdownEl) countdownEl.textContent = "";
      if (openBtn) openBtn.style.display = "none";
    } else {
      if (weekEl) weekEl.textContent = t("weeks.week") + " " + w.id;
      if (titleEl) titleEl.textContent = w.title;
      if (topicEl) {
        const topic = (w.topic && w.topic[state.lang]) || (w.topic && w.topic.es) || "";
        topicEl.textContent = topic;
      }
      if (dateText) dateText.textContent = formatDateLong(w.date);
      if (countdownEl) countdownEl.textContent = formatCountdown(w.date, featured.state);
      if (openBtn) {
        openBtn.style.display = "";
        openBtn.onclick = function () { focusWeek(w.id); };
      }
    }
  }

  /* ---------- Progreso simple ---------- */

  function renderProgress() {
    if (!state.data) return;
    const subEl = document.getElementById("progress-sub");
    const pctEl = document.getElementById("progress-percent");
    const barEl = document.getElementById("progress-bar-fill");
    if (!subEl && !pctEl && !barEl) return;

    const total = 6;
    const completed = state.data.weeks.filter(function (w) {
      return w.status === "completed";
    }).length;
    const pct = Math.round((completed / total) * 100);

    if (subEl) subEl.textContent = t("progress.completedOf", { done: completed });
    if (pctEl) pctEl.textContent = pct + "%";
    if (barEl) {
      barEl.style.width = pct + "%";
      const wrap = barEl.parentElement;
      if (wrap) wrap.setAttribute("aria-valuenow", String(pct));
    }
  }

  /* ---------- Tarjetas expandibles ---------- */

  function renderWeeks() {
    const list = document.getElementById("week-list");
    if (!list || !state.data) return;
    list.innerHTML = "";

    state.data.weeks.forEach(function (w) {
      const li = document.createElement("li");
      li.className = "week-card";
      li.dataset.status = w.status || "pending";
      li.dataset.open = "false";
      li.dataset.weekId = String(w.id);
      li.id = "week-" + w.id;

      const summaryId = "week-summary-" + w.id;
      const detailsId = "week-details-" + w.id;
      const topic = (w.topic && w.topic[state.lang]) || (w.topic && w.topic.es) || "";

      li.innerHTML = `
        <button type="button" class="week-summary" id="${summaryId}"
                aria-expanded="false" aria-controls="${detailsId}">
          <span class="week-num">${w.id}<small>${escapeHtml(t("weeks.week"))}</small></span>
          <span class="week-info">
            <span class="week-title">${escapeHtml(w.title)}</span>
            <span class="week-topic">${escapeHtml(topic)}</span>
            <span class="week-date">${escapeHtml(t("weeks.published", { date: formatDateLong(w.date) }))}</span>
          </span>
          <span class="week-meta">
            <span class="week-status">${escapeHtml(t("status." + (w.status || "pending")))}</span>
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </button>
        <div class="week-details" id="${detailsId}" role="region" aria-labelledby="${summaryId}">
          <div class="week-details-inner">${renderWeekDetails(w)}</div>
        </div>
      `;

      const btn = li.querySelector(".week-summary");
      btn.addEventListener("click", function () { toggleCard(li); });
      btn.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleCard(li); }
      });

      list.appendChild(li);
    });
  }

  function renderWeekDetails(w) {
    const sections = [];

    const desc = (w.description && w.description[state.lang]) || (w.description && w.description.es) || "";
    if (desc) {
      sections.push(`
        <div class="week-section">
          <h4>${escapeHtml(t("card.description"))}</h4>
          <p>${escapeHtml(desc)}</p>
        </div>
      `);
    }

    if (w.readings && w.readings.length) {
      const items = w.readings.map(function (r) {
        const cite =
          `${escapeHtml(r.author || "")} (${escapeHtml(String(r.year || ""))}). ` +
          `<em>${escapeHtml(r.title || "")}</em>` +
          (r.source ? `. ${escapeHtml(r.source)}` : "") + ".";
        const note = r.note
          ? `<p class="reading-note">${escapeHtml(r.note)}</p>`
          : `<p class="reading-note">${escapeHtml(t("card.readingNote.empty"))}</p>`;
        return `<li class="reading"><p class="reading-cite">${cite}</p>${note}</li>`;
      }).join("");
      sections.push(`
        <div class="week-section">
          <h4>${escapeHtml(t("card.readings"))}</h4>
          <ul class="readings-list">${items}</ul>
        </div>
      `);
    }

    const toolHtml = w.tool && w.tool.trim()
      ? `<span class="tool-badge">${escapeHtml(w.tool)}</span>`
      : `<span class="tool-empty">${escapeHtml(t("card.tool.empty"))}</span>`;
    sections.push(`
      <div class="week-section">
        <h4>${escapeHtml(t("card.tool"))}</h4>
        ${toolHtml}
      </div>
    `);

    const proj = w.project || {};
    const projParts = [];
    if (proj.url) {
      projParts.push(`<a class="project-cta" href="${escapeHtml(proj.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("card.project.live"))} ↗</a>`);
      if (proj.embed) {
        projParts.push(`<iframe class="project-iframe" src="${escapeHtml(proj.url)}" loading="lazy" title="${escapeHtml(w.title)}"></iframe>`);
      }
    } else {
      projParts.push(`<span class="tool-empty">${escapeHtml(t("card.project.empty"))}</span>`);
    }
    if (proj.screenshots && proj.screenshots.length) {
      const imgs = proj.screenshots.map(function (s) {
        return `<img src="${escapeHtml(s)}" alt="${escapeHtml(w.title)} — screenshot" loading="lazy" />`;
      }).join("");
      projParts.push(`<div class="screenshots">${imgs}</div>`);
    }
    sections.push(`
      <div class="week-section">
        <h4>${escapeHtml(t("card.project"))}</h4>
        <div class="project-block">${projParts.join("")}</div>
      </div>
    `);

    const reflectionRaw = (w.reflection || "").trim();
    let reflectionHtml = "";
    if (!reflectionRaw) {
      reflectionHtml = `<p class="tool-empty">${escapeHtml(t("card.reflection.empty"))}</p>`;
    } else {
      reflectionHtml = reflectionRaw.split(/\n\s*\n/).map(function (p) {
        return `<p>${escapeHtml(p.trim()).replace(/\n/g, "<br>")}</p>`;
      }).join("");
      if (state.lang === "en") {
        reflectionHtml += `<p class="reflection-fallback-notice">${escapeHtml(t("card.reflection.fallbackNotice"))}</p>`;
      }
    }
    sections.push(`
      <div class="week-section reflection-block">
        <h4>${escapeHtml(t("card.reflection"))}</h4>
        ${reflectionHtml}
      </div>
    `);

    if (w.linkedinUrl) {
      sections.push(`
        <div class="week-section">
          <a class="linkedin-link" href="${escapeHtml(w.linkedinUrl)}" target="_blank" rel="noopener noreferrer">
            <span aria-hidden="true">🔗</span> ${escapeHtml(t("card.linkedin"))} ↗
          </a>
        </div>
      `);
    }

    return sections.join("");
  }

  function toggleCard(li) {
    const isOpen = li.dataset.open === "true";
    li.dataset.open = isOpen ? "false" : "true";
    const btn = li.querySelector(".week-summary");
    if (btn) btn.setAttribute("aria-expanded", isOpen ? "false" : "true");
  }

  function focusWeek(id) {
    const card = document.getElementById("week-" + id);
    if (!card) return;
    if (card.dataset.open !== "true") toggleCard(card);
    card.scrollIntoView({ behavior: "smooth", block: "start" });
    const btn = card.querySelector(".week-summary");
    if (btn) setTimeout(function () { btn.focus({ preventScroll: true }); }, 350);
  }

  /* ---------- Links externos (dashboard + sobre) ---------- */

  function applyExternalLinks() {
    if (!state.data || !state.data.links) return;

    const map = {
      "link-syllabus": state.data.links.syllabusPdf,
      "link-gazette": state.data.links.gazetteArticle,
      "hero-syllabus-link": state.data.links.syllabusPdf,
      "about-brennan-link": state.data.links.karenBrennanProfile
    };
    Object.keys(map).forEach(function (id) {
      const a = document.getElementById(id);
      if (!a) return;
      const url = map[id];
      if (url && url.trim()) {
        a.setAttribute("href", url);
        a.removeAttribute("aria-disabled");
      } else {
        a.setAttribute("href", "#");
        a.setAttribute("aria-disabled", "true");
        a.addEventListener("click", function (e) { e.preventDefault(); });
      }
    });

    const emailLink = document.getElementById("contact-email");
    if (emailLink && state.data.links.email) emailLink.setAttribute("href", "mailto:" + state.data.links.email);
    const linkedinLink = document.getElementById("contact-linkedin");
    if (linkedinLink && state.data.links.linkedin) linkedinLink.setAttribute("href", state.data.links.linkedin);
  }

  /* ---------- Idioma ---------- */

  function bindLangToggle() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const target = btn.getAttribute("data-lang-set");
        if (!target || target === state.lang) return;
        state.lang = target;
        saveLang(target);
        applyTranslations();
        renderDashboard();
      });
    });
  }

  /* ---------- Navbar móvil ---------- */

  function bindNav() {
    const toggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("nav-menu");
    if (!toggle || !menu) return;
    toggle.addEventListener("click", function () {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        if (menu.classList.contains("is-open")) {
          menu.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  /* ---------- Footer year ---------- */

  function setFooterYear() {
    const el = document.getElementById("footer-year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ---------- Render dashboard (gated) ---------- */

  function renderDashboard() {
    if (!state.data) return;
    renderFeatured();
    renderProgress();
    renderWeeks();
    applyExternalLinks();
  }

  /* ---------- Init ---------- */

  function loadData() {
    return fetch("data.json", { cache: "no-cache" })
      .then(function (res) {
        if (!res.ok) throw new Error("data.json no se pudo cargar (" + res.status + ")");
        return res.json();
      });
  }

  function needsData() {
    return !!document.getElementById("week-list")
        || !!document.getElementById("featured-card")
        || !!document.getElementById("progress-bar-fill")
        || !!document.getElementById("link-syllabus")
        || !!document.getElementById("hero-gazette-link")
        || !!document.getElementById("contact-email")
        || !!document.getElementById("contact-linkedin");
  }

  function init() {
    state.lang = getInitialLang();
    mountPartials();
    setActiveNavLink();
    setFooterYear();
    bindNav();
    bindLangToggle();
    applyTranslations();

    if (!needsData()) return;

    loadData()
      .then(function (data) {
        state.data = data;
        renderDashboard();
        // El email/linkedin viven en data.json pero también deben aplicarse en contacto/sobre
        applyExternalLinks();
      })
      .catch(function (err) {
        console.error(err);
        const list = document.getElementById("week-list");
        if (list) {
          list.innerHTML =
            '<li style="padding:1rem;color:#5D6B82;">No se pudo cargar el contenido. ' +
            'Si estás abriendo el archivo localmente, servilo con un servidor estático ' +
            '(por ejemplo <code>python3 -m http.server</code>) en vez de file://.</li>';
        }
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
