// Strings fijas del UI en español e inglés.
// Las reflexiones, lecturas y "Build something that..." NO se traducen acá
// (ver CLAUDE.md §8). Si una key falta en EN, se hace fallback a ES.

const translations = {
  es: {
    "html.lang": "es",
    "a11y.skip": "Saltar al contenido",
    "meta.title": "Vibe Coding · Recorrido autodidacta · Florencia Falco",
    "meta.description":
      "Bitácora pública del recorrido autodidacta de Florencia Falco por el sílabos público de Vibe Coding (T564A), HGSE, Karen Brennan, Fall 2025.",

    "header.title": "Vibe Coding",
    "header.subtitle": "Recorrido autodidacta",
    "header.context": "Siguiendo el sílabos público de T564A · HGSE · Karen Brennan",
    "header.author": "Florencia Falco",
    "header.langToggle.aria": "Cambiar idioma",
    "header.lang.es": "ES",
    "header.lang.en": "EN",

    "progress.label": "{done} de 6 semanas completadas",
    "progress.aria": "Progreso del recorrido",

    "about.heading": "Sobre este proyecto",
    "about.p1":
      "Este sitio documenta mi recorrido autodidacta por el sílabos público del módulo <strong>Vibe Coding (T564A)</strong> dictado por la profesora Karen Brennan en la Harvard Graduate School of Education en otoño de 2025.",
    "about.p2":
      "No estoy matriculada en Harvard. Estoy recorriendo el sílabos público por mi cuenta, leyendo los textos asignados, construyendo los proyectos semanales y compartiendo mis reflexiones en LinkedIn. Todo el crédito del diseño curricular corresponde a Karen Brennan y Jacob Wolf (HGSE).",
    "about.link.syllabus": "Sílabos original (PDF)",
    "about.link.gazette": "Artículo del Harvard Gazette",
    "about.link.linkedin": "LinkedIn de Flo",

    "weeks.heading": "Las 6 semanas",
    "weeks.intro.tag": "Presentación",
    "weeks.week": "Semana",
    "weeks.expand.aria": "Expandir o colapsar la semana",
    "weeks.published": "Publicación: {date}",

    "status.pending": "Pendiente",
    "status.in_progress": "En curso",
    "status.completed": "Completada",

    "card.description": "Tema",
    "card.readings": "Lecturas",
    "card.readings.empty": "Esta semana no tiene lecturas asignadas.",
    "card.tool": "Herramienta usada",
    "card.tool.empty": "Aún sin definir.",
    "card.project": "Proyecto",
    "card.project.live": "Ver proyecto en vivo",
    "card.project.empty": "Proyecto en construcción.",
    "card.reflection": "Reflexión semanal",
    "card.reflection.empty": "Reflexión pendiente.",
    "card.reflection.fallbackNotice":
      "Reflexión disponible en español — usa el traductor del navegador si lo necesitás.",
    "card.linkedin": "Leer el post en LinkedIn",
    "card.readingNote.empty": "Sin nota todavía.",

    "footer.credit":
      "Sílabos original: Karen Brennan & Jacob Wolf · HGSE Fall 2025",
    "footer.author": "Diseño y desarrollo: Florencia Falco",

    "months.long": [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ],
    "date.format": "{day} de {month} de {year}"
  },

  en: {
    "html.lang": "en",
    "a11y.skip": "Skip to main content",
    "meta.title": "Vibe Coding · A self-directed journey · Florencia Falco",
    "meta.description":
      "Public log of Florencia Falco's self-directed journey through the public syllabus of Vibe Coding (T564A), HGSE, Karen Brennan, Fall 2025.",

    "header.title": "Vibe Coding",
    "header.subtitle": "A self-directed journey",
    "header.context": "Following the public syllabus of T564A · HGSE · Karen Brennan",
    "header.author": "Florencia Falco",
    "header.langToggle.aria": "Change language",
    "header.lang.es": "ES",
    "header.lang.en": "EN",

    "progress.label": "{done} of 6 weeks completed",
    "progress.aria": "Journey progress",

    "about.heading": "About this project",
    "about.p1":
      "This site documents my self-directed journey through the public syllabus of <strong>Vibe Coding (T564A)</strong>, taught by Professor Karen Brennan at the Harvard Graduate School of Education in Fall 2025.",
    "about.p2":
      "I am not enrolled at Harvard. I am working through the public syllabus on my own — reading the assigned texts, building the weekly projects, and sharing my reflections on LinkedIn. All credit for the curriculum design belongs to Karen Brennan and Jacob Wolf (HGSE).",
    "about.link.syllabus": "Original syllabus (PDF)",
    "about.link.gazette": "Harvard Gazette article",
    "about.link.linkedin": "Flo's LinkedIn",

    "weeks.heading": "The 6 weeks",
    "weeks.intro.tag": "Kickoff",
    "weeks.week": "Week",
    "weeks.expand.aria": "Expand or collapse this week",
    "weeks.published": "Published: {date}",

    "status.pending": "Pending",
    "status.in_progress": "In progress",
    "status.completed": "Completed",

    "card.description": "Topic",
    "card.readings": "Readings",
    "card.readings.empty": "No readings assigned this week.",
    "card.tool": "Tool used",
    "card.tool.empty": "Not defined yet.",
    "card.project": "Project",
    "card.project.live": "View live project",
    "card.project.empty": "Project under construction.",
    "card.reflection": "Weekly reflection",
    "card.reflection.empty": "Reflection pending.",
    "card.reflection.fallbackNotice":
      "Reflection available in Spanish — use your browser's translator if needed.",
    "card.linkedin": "Read the LinkedIn post",
    "card.readingNote.empty": "No note yet.",

    "footer.credit":
      "Original syllabus: Karen Brennan & Jacob Wolf · HGSE Fall 2025",
    "footer.author": "Design & development: Florencia Falco",

    "months.long": [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ],
    "date.format": "{month} {day}, {year}"
  }
};

window.VC_TRANSLATIONS = translations;
