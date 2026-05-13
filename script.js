/* =========================================================
   Vibe Coding Dashboard — lógica
   - Carga data.json
   - Renderiza tarjetas (Semana 0 + Semanas 1–6)
   - Toggle ES/EN con persistencia en localStorage
   - Expandir/colapsar tarjetas (click + teclado)
   - Navbar: menú móvil + scroll spy
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_LANG = "vc.lang";
  const SUPPORTED_LANGS = ["es", "en"];
  const DEFAULT_LANG = "es";

  const state = {
    lang: DEFAULT_LANG,
    data: null
  };

  // ---------- Utilidades ----------

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

  function formatDate(isoDate) {
    if (!isoDate) return "";
    const parts = isoDate.split("-");
    if (parts.length !== 3) return isoDate;
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const months = t("months.long");
    const monthName = Array.isArray(months) ? months[month] : "";
    return t("date.format", { day: day, month: monthName, year: year });
  }

  function getInitialLang() {
    try {
      const saved = localStorage.getItem(STORAGE_LANG);
      if (saved && SUPPORTED_LANGS.indexOf(saved) !== -1) return saved;
    } catch (_) {}
    return DEFAULT_LANG;
  }

  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_LANG, lang); } catch (_) {}
  }

  // ---------- Strings fijas ----------

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

  // ---------- Tarjetas semanales ----------

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
        <button
          type="button"
          class="week-summary"
          id="${summaryId}"
          aria-expanded="false"
          aria-controls="${detailsId}"
        >
          ${numberLabel}
          <span class="week-info">
            ${introTag}
            <span class="week-title">${escapeHtml(w.title)}</span>
            <span class="week-topic">${escapeHtml(topic)}</span>
            <span class="week-date">${escapeHtml(t("weeks.published", { date: formatDate(w.date) }))}</span>
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
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleCard(li);
        }
      });

      list.appendChild(li);
    });

    updateProgress();
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
      const paragraphs = reflectionRaw.split(/\n\s*\n/).map(function (p) {
        return `<p>${escapeHtml(p.trim()).replace(/\n/g, "<br>")}</p>`;
      }).join("");
      reflectionHtml = paragraphs;
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

  // ---------- Progreso ----------

  function updateProgress() {
    if (!state.data) return;
    const completed = state.data.weeks.filter(function (w) {
      return !w.isIntro && w.status === "completed";
    }).length;
    const el = document.getElementById("progress-text");
    if (el) el.textContent = t("progress.label", { done: completed });
    const badge = el ? el.closest(".progress-badge") : null;
    if (badge) badge.setAttribute("aria-label", t("progress.aria"));
  }

  // ---------- Links externos ----------

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
    if (emailLink && state.data.links.email) {
      emailLink.setAttribute("href", "mailto:" + state.data.links.email);
    }
    const linkedinLink = document.getElementById("contact-linkedin");
    if (linkedinLink && state.data.links.linkedin) {
      linkedinLink.setAttribute("href", state.data.links.linkedin);
    }
  }

  // ---------- Idioma ----------

  function bindLangToggle() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const target = btn.getAttribute("data-lang-set");
        if (!target || target === state.lang) return;
        state.lang = target;
        saveLang(target);
        applyTranslations();
        renderWeeks();
      });
    });
  }

  // ---------- Navbar: móvil + scroll spy ----------

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

    // Scroll spy
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

  // ---------- Footer year ----------

  function setFooterYear() {
    const el = document.getElementById("footer-year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  // ---------- Init ----------

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
        renderWeeks();
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
