// Strings fijas del UI en español e inglés.
// Las reflexiones, lecturas y "Build something that..." NO se traducen acá
// (ver CLAUDE.md §8). Si una key falta en EN, hace fallback a ES.

const translations = {
  es: {
    "html.lang": "es",
    "a11y.skip": "Saltar al contenido",

    "meta.title.dashboard": "Vibe Coding · Recorrido autodidacta · Florencia Falco",
    "meta.title.sobre": "Sobre · Vibe Coding · Florencia Falco",
    "meta.title.contacto": "Contacto · Vibe Coding · Florencia Falco",
    "meta.description":
      "Bitácora pública del recorrido autodidacta de Florencia Falco por el plan de estudio público de Vibe Coding (T564A), HGSE, Karen Brennan, Fall 2025.",

    "nav.dashboard": "Dashboard",
    "nav.about": "Sobre",
    "nav.contact": "Contacto",
    "nav.toggle.aria": "Abrir o cerrar el menú",
    "nav.lang.aria": "Cambiar idioma",

    "hero.title": "Estoy estudiando <span class=\"hero-title-accent\">Vibe Coding</span> en <span class=\"hero-title-accent\">Harvard</span>",
    "hero.photo.caption": "Imagen compuesta · montaje",
    "hero.subtitle":
      "(de forma autodidacta, siguiendo el plan de estudio público del curso T564A de Karen Brennan en la Harvard Graduate School of Education)",
    "hero.badge.notEnrolled": "No matriculada",
    "hero.badge.publicSyllabus": "Plan de estudio público",
    "hero.badge.personal": "Recorrido personal",
    "hero.description":
      "Durante seis semanas voy a leer los textos del plan de estudio, construir los proyectos semanales y compartir cada lunes una nueva reflexión. Una bitácora honesta del recorrido, abierta a quien quiera leerla.",
    "hero.cta.seeWeeks": "Ver las 6 semanas",
    "hero.cta.gazette": "Leer el artículo del Harvard Gazette",
    "hero.credit.text":
      "Plan de estudio diseñado por <strong>Karen Brennan</strong> y Jacob Wolf · HGSE Fall 2025",
    "hero.credit.link": "Ver plan de estudio original",

    "featured.eyebrow.upcoming": "PRÓXIMA SEMANA",
    "featured.eyebrow.today": "HOY ARRANCA",
    "featured.eyebrow.live": "EN CURSO",
    "featured.eyebrow.done": "RECORRIDO COMPLETO",
    "featured.openWeek": "Abrir semana",
    "featured.countdown.daysOne": "EN {n} DÍA",
    "featured.countdown.daysMany": "EN {n} DÍAS",
    "featured.countdown.now": "HOY",
    "featured.countdown.weeks": "EN {n} SEMANAS",
    "featured.done.title": "Recorrido completo",
    "featured.done.subtitle":
      "Las 6 semanas del plan de estudio están publicadas. Gracias por acompañar.",

    "progress.title": "Mi progreso",
    "progress.completedOf": "{done} de 6 semanas completadas",

    "weeks.heading": "Las 6 semanas",
    "weeks.lead":
      "Cada lunes, una semana nueva. Hacé click en una tarjeta para ver lecturas, herramienta usada, proyecto y reflexión.",
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

    "page.sobre.title": "Sobre.",
    "page.sobre.lead": "El proyecto y quién soy.",
    "about.project.heading": "Sobre este proyecto",
    "about.project.p1":
      "Este sitio documenta mi recorrido autodidacta por el plan de estudio público del módulo <strong>Vibe Coding (T564A)</strong> dictado por la profesora Karen Brennan en la Harvard Graduate School of Education en otoño de 2025.",
    "about.project.p2":
      "No estoy matriculada en Harvard. Estoy recorriendo el plan de estudio público por mi cuenta, leyendo los textos asignados, construyendo los proyectos semanales y compartiendo mis reflexiones en LinkedIn. Todo el crédito del diseño curricular corresponde a Karen Brennan y Jacob Wolf (HGSE).",
    "about.me.heading": "Sobre mí",
    "about.me.p1":
      "Soy <strong>Florencia Falco</strong>, profesora de Ciencias de la Computación y coordinadora de tecnología. Trabajo en un colegio privado en Montevideo y en un centro educativo que acompaña a jóvenes en contextos de vulnerabilidad socioeconómica.",
    "about.me.p2":
      "Hace algunos años pasé de la educación inicial a la programación y la robótica, y desde entonces no paré de buscar formas de enseñar tecnología que sean significativas, accesibles y honestas con el contexto en el que trabajo.",
    "about.me.p3":
      "Me metí en este recorrido autodidacta porque el curso de Karen Brennan toca exactamente las preguntas que me hago todos los días: <em>¿cómo creamos con IA en lugar de solo consumirla?</em> <em>¿Qué cambia cuando la programación deja de ser una barrera técnica y se vuelve una conversación?</em> <em>¿Cómo llevamos esto al aula sin perder lo crítico?</em>",
    "about.me.p4":
      "Si sos docente y estás en el mismo lugar que yo —con ganas de avanzar pero sin saber por dónde empezar—, este espacio es para vos.",
    "about.link.syllabus": "Plan de estudio original (PDF)",
    "about.link.gazette": "Artículo del Harvard Gazette",

    "page.contacto.title": "Contacto.",
    "page.contacto.lead":
      "¿Sos docente, te resuenan estas preguntas, o querés sumarte a la conversación? Escribime.",
    "contact.email.label": "Escribime",
    "contact.linkedin.label": "LinkedIn",

    "footer.credit":
      "Plan de estudio original: Karen Brennan & Jacob Wolf · HGSE Fall 2025",
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

    "meta.title.dashboard": "Vibe Coding · A self-directed journey · Florencia Falco",
    "meta.title.sobre": "About · Vibe Coding · Florencia Falco",
    "meta.title.contacto": "Contact · Vibe Coding · Florencia Falco",
    "meta.description":
      "Public log of Florencia Falco's self-directed journey through the public syllabus of Vibe Coding (T564A), HGSE, Karen Brennan, Fall 2025.",

    "nav.dashboard": "Dashboard",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.toggle.aria": "Open or close the menu",
    "nav.lang.aria": "Change language",

    "hero.title": "I'm studying <span class=\"hero-title-accent\">Vibe Coding</span> at <span class=\"hero-title-accent\">Harvard</span>",
    "hero.photo.caption": "Composite photo · montage",
    "hero.subtitle":
      "(on my own, following the public syllabus of T564A, taught by Karen Brennan at the Harvard Graduate School of Education)",
    "hero.badge.notEnrolled": "Not enrolled",
    "hero.badge.publicSyllabus": "Public syllabus",
    "hero.badge.personal": "Personal journey",
    "hero.description":
      "For six weeks I'll read the assigned texts, build the weekly projects, and share a new reflection every Monday. An honest log of the journey, open to whoever wants to read it.",
    "hero.cta.seeWeeks": "See the 6 weeks",
    "hero.cta.gazette": "Read the Harvard Gazette article",
    "hero.credit.text":
      "Syllabus designed by <strong>Karen Brennan</strong> and Jacob Wolf · HGSE Fall 2025",
    "hero.credit.link": "View original syllabus",

    "featured.eyebrow.upcoming": "UP NEXT",
    "featured.eyebrow.today": "STARTS TODAY",
    "featured.eyebrow.live": "IN PROGRESS",
    "featured.eyebrow.done": "JOURNEY COMPLETE",
    "featured.openWeek": "Open week",
    "featured.countdown.daysOne": "IN {n} DAY",
    "featured.countdown.daysMany": "IN {n} DAYS",
    "featured.countdown.now": "TODAY",
    "featured.countdown.weeks": "IN {n} WEEKS",
    "featured.done.title": "Journey complete",
    "featured.done.subtitle":
      "All 6 syllabus weeks are published. Thanks for following along.",

    "progress.title": "My progress",
    "progress.completedOf": "{done} of 6 weeks completed",

    "weeks.heading": "The 6 weeks",
    "weeks.lead":
      "A new week every Monday. Click a card to see readings, the tool used, the project, and the weekly reflection.",
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

    "page.sobre.title": "About.",
    "page.sobre.lead": "The project and who I am.",
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

    "page.contacto.title": "Contact.",
    "page.contacto.lead":
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
