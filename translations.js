// Strings fijas del UI en español e inglés.
// Las reflexiones, lecturas y "Build something that..." NO se traducen acá
// (ver CLAUDE.md §8). Si una key falta en EN, hace fallback a ES.

const translations = {
  es: {
    "html.lang": "es",
    "a11y.skip": "Saltar al contenido",

    "meta.title": "Vibe Coding · Recorrido autodidacta · Florencia Falco",
    "meta.description":
      "Bitácora pública del recorrido autodidacta de Florencia Falco por el sílabos público de Vibe Coding (T564A), HGSE, Karen Brennan, Fall 2025.",

    "nav.dashboard": "Dashboard",
    "nav.about": "Sobre",
    "nav.contact": "Contacto",
    "nav.toggle.aria": "Abrir o cerrar el menú",
    "nav.lang.aria": "Cambiar idioma",

    "greeting.title": "Vibe Coding.",
    "greeting.sub": "Bitácora autodidacta · 2026",

    "hero.eyebrow.upcoming": "PRÓXIMA SEMANA",
    "hero.eyebrow.today": "HOY ARRANCA",
    "hero.eyebrow.live": "EN CURSO",
    "hero.eyebrow.done": "RECORRIDO COMPLETO",
    "hero.openWeek": "Abrir semana",
    "hero.viewSchedule": "Ver cronograma",
    "hero.countdown.daysOne": "EN {n} DÍA",
    "hero.countdown.daysMany": "EN {n} DÍAS",
    "hero.countdown.hoursOne": "EN {n} HORA",
    "hero.countdown.hoursMany": "EN {n} HORAS",
    "hero.countdown.now": "HOY",
    "hero.countdown.weeks": "EN {n} SEMANAS",
    "hero.heading.done": "Recorrido completo",
    "hero.subtitle.done": "Las 6 semanas del sílabos están publicadas. Gracias por acompañar.",

    "journey.eyebrow": "TU RECORRIDO",
    "journey.weekOf": "Semana {current} de 6",
    "journey.preStart": "Empieza el 25 de mayo",
    "journey.completedOf": "{done} de 6 completadas",
    "journey.tile.completed": "Completada",
    "journey.tile.current": "En curso",
    "journey.tile.pending": "Próximamente",
    "journey.tile.intro": "Presentación",

    "schedule.heading": "Cronograma",
    "schedule.viewWeek": "Ver",

    "weeks.heading": "Las semanas",
    "weeks.lead":
      "Cada lunes, una semana nueva. Hacé click en una tarjeta para ver lecturas, herramienta usada, proyecto y reflexión.",
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

    "about.heading": "Sobre",
    "about.project.heading": "Sobre este proyecto",
    "about.project.p1":
      "Este sitio documenta mi recorrido autodidacta por el sílabos público del módulo <strong>Vibe Coding (T564A)</strong> dictado por la profesora Karen Brennan en la Harvard Graduate School of Education en otoño de 2025.",
    "about.project.p2":
      "No estoy matriculada en Harvard. Estoy recorriendo el sílabos público por mi cuenta, leyendo los textos asignados, construyendo los proyectos semanales y compartiendo mis reflexiones en LinkedIn. Todo el crédito del diseño curricular corresponde a Karen Brennan y Jacob Wolf (HGSE).",

    "about.me.heading": "Sobre mí",
    "about.me.p1":
      "Soy <strong>Florencia Falco</strong>, profesora de Ciencias de la Computación y coordinadora de tecnología. Trabajo en un colegio privado en Montevideo y en un centro educativo que acompaña a jóvenes en contextos de vulnerabilidad socioeconómica.",
    "about.me.p2":
      "Hace algunos años pasé de la educación inicial a la programación y la robótica, y desde entonces no paré de buscar formas de enseñar tecnología que sean significativas, accesibles y honestas con el contexto en el que trabajo.",
    "about.me.p3":
      "Me metí en este recorrido autodidacta porque el curso de Karen Brennan toca exactamente las preguntas que me hago todos los días: <em>¿cómo creamos con IA en lugar de solo consumirla?</em> <em>¿Qué cambia cuando la programación deja de ser una barrera técnica y se vuelve una conversación?</em> <em>¿Cómo llevamos esto al aula sin perder lo crítico?</em>",
    "about.me.p4":
      "Si sos docente y estás en el mismo lugar que yo —con ganas de avanzar pero sin saber por dónde empezar—, este espacio es para vos.",

    "about.link.syllabus": "Sílabos original (PDF)",
    "about.link.gazette": "Artículo del Harvard Gazette",

    "contact.heading": "Contacto",
    "contact.lead":
      "¿Sos docente, te resuenan estas preguntas, o querés sumarte a la conversación? Escribime.",
    "contact.email.label": "Escribime",
    "contact.linkedin.label": "LinkedIn",

    "footer.credit":
      "Sílabos original: Karen Brennan & Jacob Wolf · HGSE Fall 2025",
    "footer.author": "Diseño y desarrollo: Florencia Falco",

    "months.long": [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ],
    "months.short": [
      "ene", "feb", "mar", "abr", "may", "jun",
      "jul", "ago", "sep", "oct", "nov", "dic"
    ],
    "weekdays.short": ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    "date.format": "{day} de {month} de {year}",
    "date.format.short": "{weekday} {day} {month}"
  },

  en: {
    "html.lang": "en",
    "a11y.skip": "Skip to main content",

    "meta.title": "Vibe Coding · A self-directed journey · Florencia Falco",
    "meta.description":
      "Public log of Florencia Falco's self-directed journey through the public syllabus of Vibe Coding (T564A), HGSE, Karen Brennan, Fall 2025.",

    "nav.dashboard": "Dashboard",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.toggle.aria": "Open or close the menu",
    "nav.lang.aria": "Change language",

    "greeting.title": "Vibe Coding.",
    "greeting.sub": "A self-directed log · 2026",

    "hero.eyebrow.upcoming": "UP NEXT",
    "hero.eyebrow.today": "STARTS TODAY",
    "hero.eyebrow.live": "IN PROGRESS",
    "hero.eyebrow.done": "JOURNEY COMPLETE",
    "hero.openWeek": "Open week",
    "hero.viewSchedule": "View schedule",
    "hero.countdown.daysOne": "IN {n} DAY",
    "hero.countdown.daysMany": "IN {n} DAYS",
    "hero.countdown.hoursOne": "IN {n} HOUR",
    "hero.countdown.hoursMany": "IN {n} HOURS",
    "hero.countdown.now": "TODAY",
    "hero.countdown.weeks": "IN {n} WEEKS",
    "hero.heading.done": "Journey complete",
    "hero.subtitle.done": "All 6 syllabus weeks are published. Thanks for following along.",

    "journey.eyebrow": "YOUR JOURNEY",
    "journey.weekOf": "Week {current} of 6",
    "journey.preStart": "Starts May 25",
    "journey.completedOf": "{done} of 6 completed",
    "journey.tile.completed": "Completed",
    "journey.tile.current": "In progress",
    "journey.tile.pending": "Coming soon",
    "journey.tile.intro": "Kickoff",

    "schedule.heading": "Schedule",
    "schedule.viewWeek": "View",

    "weeks.heading": "The weeks",
    "weeks.lead":
      "A new week every Monday. Click a card to see readings, tools, the project, and the weekly reflection.",
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

    "about.heading": "About",
    "about.project.heading": "About this project",
    "about.project.p1":
      "This site documents my self-directed journey through the public syllabus of <strong>Vibe Coding (T564A)</strong>, taught by Professor Karen Brennan at the Harvard Graduate School of Education in Fall 2025.",
    "about.project.p2":
      "I am not enrolled at Harvard. I am working through the public syllabus on my own — reading the assigned texts, building the weekly projects, and sharing my reflections on LinkedIn. All credit for the curriculum design belongs to Karen Brennan and Jacob Wolf (HGSE).",

    "about.me.heading": "About me",
    "about.me.p1":
      "I'm <strong>Florencia Falco</strong>, a Computer Science teacher and technology coordinator. I work at a private school in Montevideo, Uruguay, and at an educational center supporting young people in contexts of socioeconomic vulnerability.",
    "about.me.p2":
      "A few years ago I moved from early childhood education into programming and robotics, and ever since I haven't stopped looking for ways to teach technology that are meaningful, accessible, and honest about the context I work in.",
    "about.me.p3":
      "I started this self-directed journey because Karen Brennan's course touches exactly the questions I ask myself every day: <em>how do we create with AI instead of only consuming it?</em> <em>What changes when programming stops being a technical barrier and becomes a conversation?</em> <em>How do we bring this into the classroom without losing the critical lens?</em>",
    "about.me.p4":
      "If you're a teacher in the same place I am — eager to move forward but unsure where to start — this space is for you.",

    "about.link.syllabus": "Original syllabus (PDF)",
    "about.link.gazette": "Harvard Gazette article",

    "contact.heading": "Get in touch",
    "contact.lead":
      "Are you a teacher, do these questions resonate, or do you want to join the conversation? Write me.",
    "contact.email.label": "Write me",
    "contact.linkedin.label": "LinkedIn",

    "footer.credit":
      "Original syllabus: Karen Brennan & Jacob Wolf · HGSE Fall 2025",
    "footer.author": "Design & development: Florencia Falco",

    "months.long": [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ],
    "months.short": [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    "weekdays.short": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    "date.format": "{month} {day}, {year}",
    "date.format.short": "{weekday} {month} {day}"
  }
};

window.VC_TRANSLATIONS = translations;
