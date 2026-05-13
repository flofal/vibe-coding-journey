/* =========================================================
   Vibe Coding Dashboard — lógica
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_LANG = "vc.lang";
  const SUPPORTED_LANGS = ["es", "en"];
  const DEFAULT_LANG = "es";
  const DAY_MS = 24 * 60 * 60 * 1000;

  const state = { lang: DEFAULT_LANG, data: null };

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
    // Construyo como local 00:00 para evitar shift de timezone
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

  function formatDateShort(isoDate) {
    const d = parseISODate(isoDate);
    if (!d) return "";
    const months = t("months.short");
    const days = t("weekdays.short");
    return t("date.format.short", {
      day: d.getDate(),
      month: Array.isArray(months) ? months[d.getMonth()] : "",
      weekday: Array.isArray(days) ? days[d.getDay()] : ""
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

  /* ---------- Strings fijas ---------- */

  function applyTranslations() {
    document.documentElement.lang = t("html.lang");
    document.documentElement.dataset.lang = state.lang;

    document.title = t("meta.title");
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

  /* ---------- Hero card dinámico ---------- */

  function pickFeaturedWeek(weeks, today) {
    // Si hay alguna en in_progress, esa
    const inProgress = weeks.find(function (w) { return w.status === "in_progress"; });
    if (inProgress) return { state: "live", week: inProgress };

    const todayMs = startOfDay(today).getTime();

    // Si hoy cae dentro de la ventana [date, date+7) de alguna semana
    for (let i = 0; i < weeks.length; i++) {
      const w = weeks[i];
      const d = parseISODate(w.date);
      if (!d) continue;
      const start = startOfDay(d).getTime();
      const end = start + 7 * DAY_MS;
      if (todayMs === start) return { state: "today", week: w };
      if (todayMs > start && todayMs < end) return { state: "live", week: w };
    }

    // Próxima con fecha futura
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
    if (state_ === "today" || days === 0) return t("hero.countdown.now");
    if (days < 0) return "";
    if (days === 1) return t("hero.countdown.daysOne", { n: 1 });
    if (days <= 14) return t("hero.countdown.daysMany", { n: days });
    const weeks = Math.round(days / 7);
    return t("hero.countdown.weeks", { n: weeks });
  }

  function renderHeroCard() {
    if (!state.data) return;
    const featured = pickFeaturedWeek(state.data.weeks, new Date());
    const w = featured.week;

    const card = document.getElementById("hero-card");
    const eyebrowEl = document.getElementById("hero-card-eyebrow");
    const titleEl = document.getElementById("hero-card-title");
    const topicEl = document.getElementById("hero-card-topic");
    const weekEl = document.getElementById("hero-card-week");
    const dateEl = document.getElementById("hero-card-date");
    const dateText = dateEl ? dateEl.querySelector("span") : null;
    const countdownEl = document.getElementById("hero-card-countdown");
    const openBtn = document.getElementById("hero-card-open");

    if (!card || !w) return;

    let eyebrowKey;
    switch (featured.state) {
      case "today": eyebrowKey = "hero.eyebrow.today"; break;
      case "live": eyebrowKey = "hero.eyebrow.live"; break;
      case "done": eyebrowKey = "hero.eyebrow.done"; break;
      default: eyebrowKey = "hero.eyebrow.upcoming";
    }
    if (eyebrowEl) eyebrowEl.textContent = t(eyebrowKey);

    if (featured.state === "done") {
      if (titleEl) titleEl.textContent = t("hero.heading.done");
      if (topicEl) topicEl.textContent = t("hero.subtitle.done");
      if (weekEl) weekEl.textContent = "";
      if (dateText) dateText.textContent = "";
      if (countdownEl) countdownEl.textContent = "";
    } else {
      if (weekEl) {
        weekEl.textContent = w.isIntro
          ? t("weeks.intro.tag")
          : t("weeks.week") + " " + w.id;
      }
      if (titleEl) titleEl.textContent = w.title;
      if (topicEl) {
        const topic = (w.topic && w.topic[state.lang]) || (w.topic && w.topic.es) || "";
        topicEl.textContent = topic;
      }
      if (dateText) dateText.textContent = formatDateLong(w.date);
      if (countdownEl) countdownEl.textContent = formatCountdown(w.date, featured.state);
    }

    if (openBtn) {
      openBtn.onclick = function () {
        if (featured.state === "done") return;
        focusWeek(w.id);
      };
    }
  }

  /* ---------- Card "Tu recorrido" ---------- */

  function renderJourney() {
    if (!state.data) return;
    const weeks = state.data.weeks;
    const realWeeks = weeks.filter(function (w) { return !w.isIntro; });
    const completed = realWeeks.filter(function (w) { return w.status === "completed"; }).length;

    // Semana actual (la primera no completada y no intro)
    let current = realWeeks.findIndex(function (w) { return w.status !== "completed"; });
    if (current === -1) current = realWeeks.length; // todo completo
    else current = current + 1; // 1-indexed para mostrar

    const pct = Math.round((completed / 6) * 100);

    const titleEl = document.querySelector(".journey-title [data-i18n]");
    if (titleEl) titleEl.textContent = t("journey.weekOf", { current: Math.max(1, Math.min(6, current)) });

    const subEl = document.querySelector("#journey-sub [data-i18n]");
    if (subEl) subEl.textContent = t("journey.completedOf", { done: completed });

    const pctEl = document.getElementById("journey-percent");
    if (pctEl) pctEl.textContent = pct + "%";

    const bar = document.getElementById("journey-bar-fill");
    if (bar) bar.style.width = pct + "%";
    const wrap = bar ? bar.parentElement : null;
    if (wrap) wrap.setAttribute("aria-valuenow", String(pct));

    // Grid mini-cards: 7 (Sem 0 + 1..6)
    const grid = document.getElementById("journey-grid");
    if (!grid) return;
    grid.innerHTML = "";
    weeks.forEach(function (w) {
      const status = w.isIntro ? "intro" : (w.status || "pending");
      const tile = document.createElement("a");
      tile.className = "journey-tile";
      tile.href = "#week-summary-" + w.id;
      tile.dataset.status = status;
      tile.setAttribute("role", "listitem");

      const numLabel = w.isIntro
        ? t("weeks.intro.tag")
        : (t("weeks.week").toUpperCase().slice(0, 1) + w.id);
      const stateLabel = w.isIntro
        ? t("journey.tile.intro")
        : status === "completed" ? t("journey.tile.completed")
        : status === "in_progress" ? t("journey.tile.current")
        : t("journey.tile.pending");

      tile.innerHTML = `
        <span class="journey-tile-head">
          <span class="journey-tile-num">${escapeHtml(numLabel)}</span>
          <span class="journey-tile-icon" aria-hidden="true">${tileIcon(status)}</span>
        </span>
        <span class="journey-tile-label">${escapeHtml(stateLabel)}</span>
      `;
      tile.addEventListener("click", function (e) {
        e.preventDefault();
        focusWeek(w.id);
      });
      grid.appendChild(tile);
    });
  }

  function tileIcon(status) {
    if (status === "completed") {
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`;
    }
    if (status === "in_progress" || status === "intro") {
      return `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"/></svg>`;
    }
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>`;
  }

  /* ---------- Sidebar cronograma ---------- */

  function renderSchedule() {
    if (!state.data) return;
    const list = document.getElementById("schedule-list");
    if (!list) return;
    list.innerHTML = "";

    state.data.weeks.forEach(function (w) {
      const item = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "schedule-item";
      btn.dataset.status = w.isIntro ? "intro" : (w.status || "pending");

      const title = w.isIntro
        ? t("weeks.intro.tag")
        : t("weeks.week") + " " + w.id;
      const topic = (w.topic && w.topic[state.lang]) || (w.topic && w.topic.es) || "";

      btn.innerHTML = `
        <span class="schedule-item-date">${escapeHtml(formatDateShort(w.date))}</span>
        <span class="schedule-item-title">${escapeHtml(title)}</span>
        <span class="schedule-item-topic">${escapeHtml(topic)}</span>
      `;
      btn.addEventListener("click", function () { focusWeek(w.id); });
      item.appendChild(btn);
      list.appendChild(item);
    });
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

      const introTag = w.isIntro
        ? `<span class="intro-tag">${escapeHtml(t("weeks.intro.tag"))}</span>`
        : "";

      const numberLabel = w.isIntro
        ? `<span class="week-num">0<small>${escapeHtml(t("weeks.intro.tag"))}</small></span>`
        : `<span class="week-num">${w.id}<small>${escapeHtml(t("weeks.week"))}</small></span>`;

      const topic = (w.topic && w.topic[state.lang]) || (w.topic && w.topic.es) || "";

      li.innerHTML = `
        <button type="button" class="week-summary" id="${summaryId}"
                aria-expanded="false" aria-controls="${detailsId}">
          ${numberLabel}
          <span class="week-info">
            ${introTag}
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
    } else if (!w.isIntro) {
      sections.push(`
        <div class="week-section">
          <h4>${escapeHtml(t("card.readings"))}</h4>
          <p class="tool-empty">${escapeHtml(t("card.readings.empty"))}</p>
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
    if (btn) {
      setTimeout(function () { btn.focus({ preventScroll: true }); }, 350);
    }
  }

  /* ---------- Links externos ---------- */

  function applyExternalLinks() {
    if (!state.data || !state.data.links) return;
    const map = {
      "link-syllabus": state.data.links.syllabusPdf,
      "link-gazette": state.data.links.gazetteArticle
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
        renderAll();
      });
    });
  }

  /* ---------- Navbar + scroll spy ---------- */

  function bindNav() {
    const toggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("nav-menu");
    if (toggle && menu) {
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

    const sections = ["dashboard", "sobre", "contacto"]
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const linkMap = {};
    document.querySelectorAll(".nav-link[href^='#']").forEach(function (a) {
      const id = a.getAttribute("href").slice(1);
      linkMap[id] = a;
    });

    const observer = new IntersectionObserver(function (entries) {
      let topMost = null;
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (!topMost || entry.boundingClientRect.top < topMost.boundingClientRect.top) {
            topMost = entry;
          }
        }
      });
      if (topMost) {
        Object.keys(linkMap).forEach(function (id) {
          linkMap[id].classList.toggle("is-active", id === topMost.target.id);
        });
      }
    }, { rootMargin: "-30% 0px -55% 0px", threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ---------- Footer year ---------- */

  function setFooterYear() {
    const el = document.getElementById("footer-year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ---------- Render orquestador ---------- */

  function renderAll() {
    renderHeroCard();
    renderJourney();
    renderSchedule();
    renderWeeks();
  }

  /* ---------- Init ---------- */

  function loadData() {
    return fetch("data.json", { cache: "no-cache" })
      .then(function (res) {
        if (!res.ok) throw new Error("data.json no se pudo cargar (" + res.status + ")");
        return res.json();
      });
  }

  function init() {
    state.lang = getInitialLang();
    setFooterYear();
    bindLangToggle();
    bindNav();
    applyTranslations();

    loadData()
      .then(function (data) {
        state.data = data;
        applyExternalLinks();
        renderAll();
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
