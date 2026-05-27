// Traducciones ES/EN — todos los strings del proyecto.
// Para agregar un idioma: copiar el bloque y traducir cada key.
// HTML inline (<br>, <em>, <mark>, <strong>) se preserva: el sistema usa innerHTML.

const T = {
  es: {
    // === TOPBAR ===
    'topbar.eyebrow': 'Proyecto Semana 1',
    'topbar.title': 'Una clase en 2030',
    'topbar.dashboard': '↗ Ir al dashboard',

    // === HOME ===
    'home.eyebrow': 'Proyecto · Semana 1 · Vibecoding',
    'home.title': 'Una clase en<br><em>2030</em>',
    'home.intro': 'Te invito a entrar a una clase del 2030 y mirar dos historias que pasan el mismo lunes. Elegí desde dónde mirar.',
    'home.sofia.label': 'Estudiante',
    'home.sofia.desc': 'Sexto grado. Hoy presenta el proyecto que nació de una curiosidad propia.',
    'home.tomas.label': 'Docente',
    'home.tomas.desc': 'Termina la jornada. Va a la reunión que antes no existía.',

    // === SOFÍA · 1 ===
    'sofia1.eyebrow': 'Lunes · 6:00 AM · La habitación de Sofía',
    'sofia1.title': 'Sofía abre los ojos<br><em>antes del despertador</em>',
    'sofia1.p1': 'Es lunes. <mark>Hoy es el día</mark>. Hace un mes que viene preparando su proyecto y por fin lo va a mostrar a la clase.',
    'sofia1.p2': 'Tiene <mark>diez años</mark>. Cursa sexto. Y todavía no terminó de entender por qué a sus padres les cuesta tanto creer lo que les cuenta cuando vuelve de la escuela.',
    'sofia1.widget.q': '¿En qué está pensando ahora?',
    'sofia1.btn.inicio': 'En cómo va a empezar',
    'sofia1.btn.farero': 'En la cara del farero de Cabo Polonio',
    'sofia1.btn.drexler': 'En los 12 segundos de Drexler',
    'sofia1.thought.empty': 'Tocá una idea de la izquierda y asomate a lo que está pensando.',
    'sofia1.thought.inicio': 'Por Colonia. El faro desde la rambla, la escalera de caracol, lo de la base cuadrada del convento. Ahí me empezó la pregunta. Si arranco por ahí, lo demás se ordena solo.',
    'sofia1.thought.farero': 'Cuando le conté lo del primer farero siciliano puso una cara que no le había visto en todo el rato. Como si supiera la historia pero la hubiera estado guardando. Eso lo quiero contar.',
    'sofia1.thought.drexler': 'Doce segundos. Es exactamente el tiempo entre un destello y el siguiente en Cabo Polonio. Lo quiero dejar para el final. Que cuando lo cuente, el silencio dure justo lo que tiene que durar.',
    'sofia1.img.alt': 'Sofía despertándose en su habitación, antes del despertador',

    // === SOFÍA · 2 ===
    'sofia2.eyebrow': 'El proyecto',
    'sofia2.title': 'Una pregunta<br>que <em>se siguió</em>',
    'sofia2.p1': 'Su proyecto empezó hace un mes, <mark>un fin de semana en Colonia</mark>. Vio el faro desde la rambla, subió la escalera de caracol y se quedó mirando un rato largo. Cuando bajó tenía una pregunta sin terminar de formar: <em>¿cuántos faros hay en Uruguay, y por qué cada uno está donde está?</em>',
    'sofia2.p2': 'En la escuela tienen un tiempo cada mes para seguir una pregunta así. <mark>No una pregunta del programa, una propia</mark>. Sofía agarró la suya y la siguió hasta acá.',
    'sofia2.panel.eyebrow': 'El recurso que construyó',
    'sofia2.panel.title': 'Siete faros del Uruguay.<br>Tocá cada uno.',
    'sofia2.panel.hint': 'Esto es lo que va a mostrar hoy en clase. Cada faro tiene una historia que ella descubrió.',
    'sofia2.faro.empty': '<strong>Siete faros, siete historias.</strong> Tocá cualquiera del mapa. El orden lo elegís vos.',
    'sofia2.panel.foot': '<strong>Lo construyó ella</strong> con ayuda de IA durante un mes. La curiosidad fue suya. Las preguntas también.',
    'sofia2.map.alt': 'Mapa interactivo de los 7 faros del Uruguay',

    // === SOFÍA · 3 ===
    'sofia3.eyebrow': '7:45 AM · Camino a la escuela',
    'sofia3.title': 'Lleva más de lo<br>que entró <em>en el mapa</em>',
    'sofia3.p1': 'A las ocho menos cuarto sale para la escuela. Lleva el proyecto cargado en la tablet y <mark>un cuaderno pequeño</mark> donde anotó cosas que no entró en el mapa: la cara del farero de Cabo Polonio cuando le contó del primer farero siciliano, la voz de la autora del libro que le respondió un mail, el momento en que entendió por qué Drexler eligió esos doce segundos.',
    'sofia3.p2': 'Su maestro la va a escuchar. Sus compañeros también, aunque cada uno trae algo distinto: una investiga sobre las palomas mensajeras, otro está estudiando por qué las olas siempre llegan paralelas a la orilla. <mark>Cada proyecto nació de una pregunta propia</mark>.',
    'sofia3.p3': 'Sofía no sabe todavía que lo que está aprendiendo de verdad no son los faros. Es algo más: <mark>que su curiosidad es algo que puede seguir</mark>.',

    // === TOMÁS · 1 ===
    'tomas1.eyebrow': 'Lunes · 15:40 · Después de clase',
    'tomas1.title': 'Tomás camina<br>hacia la sala<br><em>de profesores</em>',
    'tomas1.p1': 'Es lunes y los lunes a las cuatro hay coordinación. <mark>Lo nuevo no es la reunión. Lo nuevo es de qué hablan</mark>.',
    'tomas1.antes.eyebrow': 'Antes · hace cinco años',
    'tomas1.antes.title': 'Esta hora era para terminar el papeleo',
    'tomas1.antes.text': 'Corregir lo que no había llegado a corregir en la semana. Cargar notas. Preparar la planificación. Una mesa larga con todos los profes haciendo lo mismo, en silencio, cada uno en lo suyo. Salían cansados y sin haberse hablado.',
    'tomas1.ahora.eyebrow': 'Ahora · 2030',
    'tomas1.ahora.title': 'Esta hora es para hablar de los gurises',
    'tomas1.ahora.text': 'Lo administrativo lo hace la IA, en segundo plano, mientras enseñan. Lo que queda es esta hora. Lo que queda es lo que importa: contarse qué pasó hoy, qué les sorprendió, qué les costó acompañar, qué proyecto está despegando, qué chico necesita otra cosa.',

    // === TOMÁS · 2 ===
    'tomas2.eyebrow': 'Lo que cambió de fondo',
    'tomas2.title': 'Hoy Tomás llega<br>con algo <em>para contar</em>',
    'tomas2.p1': 'Sofía presentó el proyecto de los faros y lo que mostró superó lo que él esperaba. Pero no es eso lo que más le quedó. Le quedó la <mark>cara de los demás chicos</mark> mientras la escuchaban. Le quedó la pregunta que hizo Mateo al final, que se nota que llevaba pensando hace rato. Le quedó algo del clima del aula que quiere poder nombrar bien para contarles.',
    'tomas2.p2': 'La docencia, que durante décadas fue <mark>una de las profesiones más solitarias</mark> que existen, dejó de serlo. No porque haya menos trabajo. Porque alguien le devolvió a Tomás y a sus colegas la <mark>posibilidad de mirar lo que hacen, juntos</mark>.',

    // === FINAL ===
    'final.eyebrow': 'Una pregunta',
    'final.question': '¿Tus estudiantes<br>consumen IA,<br>o <em>crean</em> con ella?',
    'final.back': 'Volver a las historias',

    // === NAVEGACIÓN ===
    'nav.back.home': '← Volver al inicio',
    'nav.back': '← Volver',
    'nav.continue': 'Continuar historia →',
    'nav.end': 'Ver el final →',

    // === FOOTER ===
    'foot': 'Proyecto Semana 1 · Curso T564A Vibe Coding — Karen Brennan (Harvard) · Por <strong>Florencia Falco</strong> · 2026',

    // === FAROS (nombre + detalle por idioma) ===
    'faro.cerro.name': 'Faro del Cerro · Montevideo',
    'faro.cerro.detail': 'Es el primero del Río de la Plata. La Corona Española lo ordenó en 1799 y lo encendieron por primera vez el 4 de abril de 1802 con veinte luces. Cuando empecé a investigar no sabía esto: que casi todos los faros del país le siguen a este.',
    'faro.colonia.name': 'Faro de Colonia del Sacramento',
    'faro.colonia.detail': 'Lo construyeron sobre las ruinas de un convento jesuita del siglo XVII. Por eso parte de la base es cuadrada y no redonda como los otros. Desde 1997 funciona con energía solar. Es el primero que vi, y el que empezó todo esto.',
    'faro.puntadeleste.name': 'Faro de Punta del Este',
    'faro.puntadeleste.detail': 'Lo construyeron primero en la Isla de Lobos en 1858 y lo trasladaron a la península dos años después. Lo hicieron con ceniza volcánica traída desde Roma, más dura que el cemento. Por eso sigue intacto.',
    'faro.lapaloma.name': 'Faro de Cabo de Santa María · La Paloma',
    'faro.lapaloma.detail': 'La primera torre se cayó en 1872 antes de inaugurarse, y murieron varios obreros. Empezaron de nuevo. El día que lo encendieron, el 1° de septiembre de 1874, es también la fecha oficial en que nació el balneario.',
    'faro.puntacarretas.name': 'Faro de Punta Brava · Punta Carretas',
    'faro.puntacarretas.detail': 'Le dicen Punta Brava por la cantidad de naufragios que hubo en esa zona. Desde 1948 alterna un destello blanco y uno rojo cada diez segundos, para que los marinos puedan distinguirlo de los demás faros de la costa.',
    'faro.joseignacio.name': 'Faro de José Ignacio',
    'faro.joseignacio.detail': 'Este faro fue antes que el pueblo. Lo construyeron en una zona donde no había casi nada, y con los años el balneario fue creciendo a su alrededor. A veces los lugares aparecen porque alguien decide poner ahí una luz.',
    'faro.cabopolonio.name': 'Faro de Cabo Polonio',
    'faro.cabopolonio.detail': 'El primer farero fue Pedro Grupillo, un capitán siciliano que se fue a vivir adentro del faro. Y Jorge Drexler le escribió una canción que se llama 12 segundos de oscuridad: ese es exactamente el tiempo entre un destello y el siguiente. Cuando lo escuché por primera vez después de visitarlo, entendí.'
  },

  en: {
    // === TOPBAR ===
    'topbar.eyebrow': 'Week 1 Project',
    'topbar.title': 'A Classroom in 2030',
    'topbar.dashboard': '↗ Go to dashboard',

    // === HOME ===
    'home.eyebrow': 'Project · Week 1 · Vibe Coding',
    'home.title': 'A Classroom<br>in <em>2030</em>',
    'home.intro': "Come into a 2030 classroom and watch two stories that happen on the same Monday. You choose where to watch from.",
    'home.sofia.label': 'The student',
    'home.sofia.desc': "Sixth grade. Today she's presenting the project that started from her own curiosity.",
    'home.tomas.label': 'The teacher',
    'home.tomas.desc': "End of the school day. He's heading to the meeting that didn't used to exist.",

    // === SOFÍA · 1 ===
    'sofia1.eyebrow': "Monday · 6:00 AM · Sofía's bedroom",
    'sofia1.title': 'Sofía opens her eyes<br><em>before the alarm</em>',
    'sofia1.p1': "It's Monday. <mark>Today's the day</mark>. She's been preparing her project for a month and now she finally gets to show it to the class.",
    'sofia1.p2': "She's <mark>ten years old</mark>. Sixth grade. And she still hasn't quite figured out why her parents find it so hard to believe what she tells them when she gets home from school.",
    'sofia1.widget.q': "What is she thinking about right now?",
    'sofia1.btn.inicio': "About how she'll begin",
    'sofia1.btn.farero': "About the Cabo Polonio keeper's face",
    'sofia1.btn.drexler': "About Drexler's 12 seconds",
    'sofia1.thought.empty': "Tap an idea on the left and peek at what she's thinking.",
    'sofia1.thought.inicio': "Colonia first. The lighthouse from the promenade, the spiral staircase, the square base from the old convent. That's where the question started. If I start there, the rest falls into place on its own.",
    'sofia1.thought.farero': "When I told him about the first Sicilian keeper he made a face I hadn't seen the whole time we were talking. Like he'd known the story but had been keeping it. I want to tell that part.",
    'sofia1.thought.drexler': "Twelve seconds. That's exactly how long it takes between one flash and the next at Cabo Polonio. I want to save it for the end. So when I tell it, the silence lasts exactly as long as it needs to.",
    'sofia1.img.alt': 'Sofía waking up in her bedroom before the alarm',

    // === SOFÍA · 2 ===
    'sofia2.eyebrow': 'The project',
    'sofia2.title': 'A question<br>she <em>followed</em>',
    'sofia2.p1': "Her project started a month ago, <mark>on a weekend in Colonia</mark>. She saw the lighthouse from the promenade, climbed the spiral staircase and stood there looking for a long while. When she came down she had a half-formed question: <em>how many lighthouses are there in Uruguay, and why is each one where it is?</em>",
    'sofia2.p2': "At school they have time set aside each month to follow a question like that. <mark>Not a question from the syllabus, one of their own</mark>. Sofía picked up hers and followed it all the way here.",
    'sofia2.panel.eyebrow': 'The resource she built',
    'sofia2.panel.title': 'Seven Uruguayan lighthouses.<br>Tap each one.',
    'sofia2.panel.hint': "This is what she's going to show in class today. Each lighthouse has a story she found.",
    'sofia2.faro.empty': '<strong>Seven lighthouses, seven stories.</strong> Tap any one on the map. The order is up to you.',
    'sofia2.panel.foot': '<strong>She built it herself</strong>, with AI helping, over the course of a month. The curiosity was hers. So were the questions.',
    'sofia2.map.alt': "Interactive map of Uruguay's 7 lighthouses",

    // === SOFÍA · 3 ===
    'sofia3.eyebrow': '7:45 AM · On the way to school',
    'sofia3.title': "She's carrying more<br>than fits <em>on the map</em>",
    'sofia3.p1': "At a quarter to eight she leaves for school. She has the project loaded on her tablet and <mark>a small notebook</mark> where she wrote down things that didn't fit on the map: the face of the Cabo Polonio lighthouse keeper when she told him about the first Sicilian keeper, the voice of the book's author who answered her by email, the moment she understood why Drexler chose those twelve seconds.",
    'sofia3.p2': "Her teacher is going to listen to her. So are her classmates, even though each one is bringing something different: one is researching carrier pigeons, another is studying why waves always reach the shore parallel to it. <mark>Every project started from a question of their own</mark>.",
    'sofia3.p3': "Sofía doesn't know yet that what she's really learning isn't the lighthouses. It's something else: <mark>that her curiosity is something she can keep following</mark>.",

    // === TOMÁS · 1 ===
    'tomas1.eyebrow': 'Monday · 3:40 PM · After class',
    'tomas1.title': 'Tomás walks<br>toward the<br><em>staff room</em>',
    'tomas1.p1': "It's Monday and Mondays at four there's coordination. <mark>What's new isn't the meeting. What's new is what they talk about</mark>.",
    'tomas1.antes.eyebrow': 'Before · five years ago',
    'tomas1.antes.title': 'This hour was for finishing paperwork',
    'tomas1.antes.text': "Grading what hadn't been graded that week. Entering marks. Preparing the next lesson plan. A long table with all the teachers doing the same thing, in silence, each in their own corner. They'd leave tired and without having spoken to each other.",
    'tomas1.ahora.eyebrow': 'Now · 2030',
    'tomas1.ahora.title': 'This hour is for talking about the kids',
    'tomas1.ahora.text': "The admin work is handled by AI in the background while they teach. What's left is this hour. What's left is what matters: telling each other what happened today, what surprised them, what was hard to accompany, which project is taking off, which kid needs something else.",

    // === TOMÁS · 2 ===
    'tomas2.eyebrow': 'What changed underneath',
    'tomas2.title': 'Today Tomás arrives<br>with something <em>to share</em>',
    'tomas2.p1': "Sofía presented the lighthouse project, and what she showed went beyond what he was expecting. But that's not what stayed with him most. What stayed was the <mark>faces of the other kids</mark> while they listened. The question Mateo asked at the end — you could tell he'd been working on it for a while. Something about the feel of the room that he wants to be able to name properly when he tells the others.",
    'tomas2.p2': "Teaching, which for decades was <mark>one of the loneliest professions there is</mark>, stopped being that. Not because there's less work. Because someone gave Tomás and his colleagues back the <mark>chance to look at what they're doing, together</mark>.",

    // === FINAL ===
    'final.eyebrow': 'A question',
    'final.question': 'Do your students<br>consume AI,<br>or do they <em>create</em> with it?',
    'final.back': 'Back to the stories',

    // === NAVEGACIÓN ===
    'nav.back.home': '← Back to start',
    'nav.back': '← Back',
    'nav.continue': 'Continue →',
    'nav.end': 'See the ending →',

    // === FOOTER ===
    'foot': 'Week 1 Project · Course T564A Vibe Coding — Karen Brennan (Harvard) · By <strong>Florencia Falco</strong> · 2026',

    // === FAROS (name + detail per language) ===
    'faro.cerro.name': 'Cerro Lighthouse · Montevideo',
    'faro.cerro.detail': "It's the first lighthouse on the Río de la Plata. The Spanish Crown ordered it in 1799 and they lit it for the first time on April 4th, 1802, with twenty lights. I didn't know this when I started: almost every lighthouse in the country follows from this one.",
    'faro.colonia.name': 'Colonia del Sacramento Lighthouse',
    'faro.colonia.detail': "They built it on the ruins of a 17th-century Jesuit convent. That's why part of the base is square instead of round like the others. Since 1997 it runs on solar power. It's the first one I saw, and the one that started all of this.",
    'faro.puntadeleste.name': 'Punta del Este Lighthouse',
    'faro.puntadeleste.detail': "They built it first on Isla de Lobos in 1858 and moved it to the peninsula two years later. They made it with volcanic ash brought from Rome, harder than cement. That's why it's still intact.",
    'faro.lapaloma.name': 'Cabo de Santa María Lighthouse · La Paloma',
    'faro.lapaloma.detail': "The first tower collapsed in 1872 before it could be inaugurated, and several workers died. They started again. The day they lit it — September 1st, 1874 — is also the official birthday of the town.",
    'faro.puntacarretas.name': 'Punta Brava Lighthouse · Punta Carretas',
    'faro.puntacarretas.detail': "They call it Punta Brava because of all the shipwrecks that happened in this area. Since 1948 it alternates a white flash and a red one every ten seconds, so sailors can tell it apart from the other lighthouses on the coast.",
    'faro.joseignacio.name': 'José Ignacio Lighthouse',
    'faro.joseignacio.detail': "This lighthouse came before the town. They built it in an area where there was almost nothing, and over the years the resort grew up around it. Sometimes places appear because someone decides to put a light there.",
    'faro.cabopolonio.name': 'Cabo Polonio Lighthouse',
    'faro.cabopolonio.detail': "The first keeper was Pedro Grupillo, a Sicilian captain who went to live inside the lighthouse. And Jorge Drexler wrote a song about it called 12 Seconds of Darkness: that's exactly the time between one flash and the next. When I listened to it for the first time after visiting, I understood."
  }
};

// === API ===

function t(key) {
  const lang = document.documentElement.lang || 'es';
  return (T[lang] && T[lang][key]) || (T.es && T.es[key]) || '';
}

function setLang(lang) {
  if (!T[lang]) lang = 'es';
  document.documentElement.lang = lang;
  try { localStorage.setItem('semana1.lang', lang); } catch (e) {}

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    el.alt = t(el.dataset.i18nAlt);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  // Re-renderizar paneles dinámicos si están abiertos
  const activeFaro = document.querySelector('.faro-marker.active');
  if (activeFaro && typeof renderFaroPanel === 'function') {
    renderFaroPanel(activeFaro.dataset.id);
  }
  const activeThought = document.querySelector('#scene-sofia-1 .widget-btn.active');
  if (activeThought && typeof renderThoughtPanel === 'function') {
    renderThoughtPanel(activeThought.dataset.id);
  }
}

// Inicializar idioma al cargar
(function initLang() {
  let saved = 'es';
  try { saved = localStorage.getItem('semana1.lang') || 'es'; } catch (e) {}
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setLang(saved));
  } else {
    setLang(saved);
  }
})();
