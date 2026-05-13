# Vibe Coding Dashboard · Florencia Falco

Este archivo es el contexto del proyecto para Claude Code. Leelo completo antes de tocar código.

---

## 1. Qué es este proyecto

Un dashboard web público y estático que documenta el recorrido autodidacta de Florencia Falco (docente de Ciencias de la Computación en Uruguay) a través del sílabos público del curso **Vibe Coding (T564A)** dictado por Karen Brennan en la Harvard Graduate School of Education en otoño de 2025.

El dashboard NO es una plataforma de curso. Es una bitácora pública que muestra:
- Las 6 semanas del módulo
- El progreso de Flo semana a semana
- Las reflexiones, lecturas, herramientas y proyectos de cada semana
- Links a los posts de LinkedIn donde Flo documenta el proceso

El dashboard se publica en **GitHub Pages** y se acompaña de una serie de posts semanales en LinkedIn (lunes a las 10 AM, durante 6 semanas, arrancando el lunes 18 de mayo de 2026).

## 2. Qué NO es este proyecto

- NO tiene backend ni base de datos
- NO tiene login ni autenticación
- NO acepta comentarios de visitantes
- NO tiene formulario de contacto, newsletter, ni mailing
- NO tiene analytics visibles para el usuario
- NO permite que otros usuarios registren su propio progreso
- NO sube archivos desde la UI (los archivos se commitean al repo)

Si en algún momento aparece la tentación de agregar algo de la lista de arriba, la respuesta es no. El scope está cerrado.

## 3. Stack técnico

- **HTML + CSS + JavaScript vanilla.** Sin frameworks.
- **GitHub Pages** para hosting.
- **Una sola página** (`index.html`).
- **Contenido en JSON** (`data.json` o similar) para que Flo pueda editar las semanas sin tocar HTML.
- **Imágenes/capturas** en una carpeta `/assets/` commiteadas al repo.

No usar: React, Vue, Tailwind via CDN, ningún build step, ningún backend, ninguna base de datos.

## 4. Identidad de marca

- **Color primario (Azul night):** `#1A385E`
- **Colores secundarios pastel:** lavanda y menta (definir tonos en CSS variables)
- **Tipografías:** DK Rotorua para títulos (cargar via Google Fonts o similar; si no está disponible, usar una serif/display alternativa), Raleway para body (Google Fonts)
- **Arquetipos de marca:** "La Amiga + La Sabia" — el tono visual es cálido, accesible, profesional, sin ser corporativo

## 5. Estructura de la página

### 5.1 Header
- Título: **"Vibe Coding · Recorrido autodidacta"** (ES) / **"Vibe Coding · A self-directed journey"** (EN)
- Subtítulo: **"Siguiendo el sílabos público de T564A (HGSE, Karen Brennan)"** (ES) / **"Following the public syllabus of T564A (HGSE, Karen Brennan)"** (EN)
- Nombre de Flo + link a su LinkedIn
- Toggle de idioma ES/EN (ver sección 8)
- Badge de progreso: **"X de 6 semanas completadas"** / **"X of 6 weeks completed"**

### 5.2 Sección "Sobre este proyecto" / "About this project"
Dos párrafos cortos. Versión ES:

> Este sitio documenta mi recorrido autodidacta por el sílabos público del módulo **Vibe Coding (T564A)** dictado por la profesora Karen Brennan en la Harvard Graduate School of Education en otoño de 2025.
>
> No estoy matriculada en Harvard. Estoy recorriendo el sílabos público por mi cuenta, leyendo los textos asignados, construyendo los proyectos semanales y compartiendo mis reflexiones en LinkedIn. Todo el crédito del diseño curricular corresponde a Karen Brennan y Jacob Wolf (HGSE).

Versión EN equivalente.

Links debajo:
- 📄 Sílabos original (PDF) → link al PDF
- 📰 Artículo del Harvard Gazette → link al artículo
- 🔗 LinkedIn de Flo → link

### 5.3 Sección "Las 6 semanas" / "The 6 weeks"

6 tarjetas, una por semana. Cada tarjeta muestra en estado colapsado:
- Número de semana
- Título: **"Build something that..."** + el tema en español ("...cuenta una historia", "...te hace la vida más fácil", etc.)
- Estado: pendiente / en curso / completada (ES) — pending / in progress / completed (EN)
- Fecha tuya (lunes de cada semana, ver sección 9)

Al hacer click, la tarjeta expande y muestra:
- **Descripción del tema** (breve, tomada del sílabos)
- **Lecturas** (título, autor, año, sin link al PDF por copyright; espacio para reflexión breve de Flo sobre cada lectura)
- **Herramienta usada** (texto libre, ej: "Replit", "Claude Code", "Figma Make")
- **Proyecto creado:**
  - Link al proyecto en vivo (URL externa)
  - Iframe opcional si el proyecto es embebible
  - 1-3 capturas de pantalla (imágenes en `/assets/`)
- **Reflexión semanal** (texto largo de Flo, fusionando aprendizajes e insights)
- **Link al post de LinkedIn** correspondiente

Todo el contenido dinámico vive en `data.json` para que Flo edite sin tocar HTML.

### 5.4 Footer
- Crédito: "Sílabos original: Karen Brennan & Jacob Wolf · HGSE Fall 2025"
- Link al LinkedIn de Flo
- Año actual

## 6. Datos de las 6 semanas (contenido inicial)

Estos son los temas y lecturas del sílabos original. **Mantener los títulos "Build something that..." en inglés en ambos idiomas**, porque es el branding del curso.

### Semana 1 — Build something that... tells a story
- Tema (ES): "Cuenta una historia"
- Lecturas:
  - Turing, A. (1950). *Computing machinery and intelligence.* Mind, 59(236), 433–460.
  - Crawford, K. (2021). *Atlas of AI: Power, politics, and the planetary costs of artificial intelligence.* Yale University Press.

### Semana 2 — Build something that... makes your life easier
- Tema (ES): "Te hace la vida más fácil"
- Lecturas:
  - Wiener, N. (1950). *The human use of human beings: Cybernetics and society.* Houghton Mifflin.
  - Benjamin, R. (2019). *Race after technology: Abolitionist tools for the New Jim Code.* Polity Press.

### Semana 3 — Build something that... sparks joy
- Tema (ES): "Despierta alegría"
- Lecturas:
  - Licklider, J. C. R. (1960). *Man-computer symbiosis.* IRE Transactions on Human Factors in Electronics, HFE-1(1), 4–11.
  - Hayles, N. K. (2025). *Bacteria to AI: Human futures with our nonhuman symbionts.* University of Chicago Press.

### Semana 4 — Build something that... answers a question
- Tema (ES): "Responde una pregunta"
- Lecturas:
  - Weizenbaum, J. (1967). *Contextual understanding by computers.* Communications of the ACM, 10(8), 474–480.
  - Tarnoff, B. (2023). *Weizenbaum's nightmares: How the inventor of the first chatbot turned against AI.* The Guardian.

### Semana 5 — Build something that... invites play
- Tema (ES): "Invita a jugar"
- Lecturas:
  - Dreyfus, H. L. (1972). *What computers can't do: A critique of artificial reason.* Harper & Row.
  - Hao, K. (2025). *Empire of AI: Dreams and nightmares in Sam Altman's OpenAI.* Penguin Press.

### Semana 6 — Build something that... feels like magic
- Tema (ES): "Se siente como magia"
- Lecturas:
  - Minsky, M. L. (1982). *Why people think computers can't.* AI Magazine, 3(4), 3–15.
  - Epstein, Z., et al. (2023). *Art and the science of generative AI: A deeper dive.*

## 7. Estados de cada semana

Estados posibles:
- `pending` → Pendiente / Pending → color gris pastel
- `in_progress` → En curso / In progress → color lavanda
- `completed` → Completada / Completed → color menta o verde suave

Visualmente debe ser claro de un vistazo en qué semana está Flo.

## 8. Sistema de idioma ES/EN

- **Idioma por defecto:** ES
- **Toggle visual:** botón en el header (algo simple, dos botones "ES | EN" o un switch)
- **Persistencia:** guardar elección en `localStorage` para que recuerde en próxima visita
- **Qué se traduce:**
  - Todos los textos fijos del UI (headers, labels, botones, estados, "Sobre este proyecto")
  - Los temas en español ("Cuenta una historia" ↔ se oculta y queda solo el "tells a story" en inglés)
- **Qué NO se traduce:**
  - El contenido dinámico de las reflexiones semanales de Flo (queda solo en español)
  - Los títulos "Build something that..." (quedan en inglés siempre, son branding)
  - Los nombres de las lecturas (quedan en su idioma original)

**Implementación sugerida:** un objeto JS `translations = { es: {...}, en: {...} }` con todas las strings fijas indexadas por key. Función `t(key)` que devuelve la versión actual.

En modo EN, si una reflexión semanal está vacía en inglés, mostrar el texto en español con un disclaimer pequeño: *"Reflection available in Spanish — use your browser's translator if needed."*

## 9. Fechas

Cronograma planificado (lunes de cada semana, publicación del post):

- **Semana 1:** lunes 18 de mayo de 2026 (10 AM)
- **Semana 2:** lunes 25 de mayo de 2026
- **Semana 3:** lunes 1 de junio de 2026
- **Semana 4:** lunes 8 de junio de 2026
- **Semana 5:** lunes 15 de junio de 2026
- **Semana 6:** lunes 22 de junio de 2026

(Nota: La Semana 1 técnicamente es la presentación del proyecto, no la primera semana de Karen. Confirmar con Flo si quiere una "Semana 0" separada o si la presentación va integrada en la Semana 1.)

## 10. Estructura de archivos esperada

```
/
├── index.html
├── styles.css
├── script.js
├── data.json           ← contenido editable de las 6 semanas
├── translations.js     ← strings fijas ES/EN
├── /assets/
│   ├── /screenshots/   ← capturas de proyectos por semana
│   ├── favicon.ico
│   └── og-image.png    ← preview para cuando se comparte el link
├── README.md
└── CLAUDE.md           ← este archivo
```

## 11. SEO y metadatos

- Meta description en ES y EN
- Open Graph tags para que cuando se comparta en LinkedIn/WhatsApp se vea bien (título, descripción, imagen)
- Favicon
- Idioma del HTML: `lang="es"` por defecto, cambia con el toggle

## 12. Accesibilidad mínima

- Contraste WCAG AA mínimo
- Tarjetas expandibles accesibles con teclado (enter/space)
- Labels descriptivos en el toggle de idioma y en el estado de cada semana
- Imágenes con `alt`

## 13. Prioridades de desarrollo

Si el tiempo es limitado, este es el orden:

1. Estructura HTML + CSS con la marca aplicada
2. Las 6 tarjetas semanales con contenido del sílabos (estado inicial: todas pendientes)
3. Sistema de expandir/colapsar tarjetas
4. Toggle ES/EN funcionando para textos fijos
5. Renderizado desde `data.json` para que Flo edite sin tocar HTML
6. Estados visuales por semana (pending/in progress/completed)
7. Soporte para iframes y screenshots en cada semana
8. SEO + Open Graph
9. Pulido visual y accesibilidad

## 14. Lo que importa más que el código

Este dashboard es parte de una estrategia de marca y posicionamiento profesional. Más importante que cualquier feature técnico:

- Debe **verse profesional y curado**, no improvisado
- Debe **transmitir credibilidad** a directores de colegios que entren desde LinkedIn
- Debe **dejar claro que Flo recorre el sílabos por cuenta propia**, no que está matriculada en Harvard (transparencia total)
- Debe **dar crédito visible a Karen Brennan** sin que parezca sponsoreado

Si una decisión de diseño o código va contra alguno de esos cuatro puntos, repensarla.

---

**Última actualización del documento:** 13 de mayo de 2026
**Autora del proyecto:** Florencia Falco
**Inspirado en:** Karen Brennan, *Vibe Coding T564A*, HGSE Fall 2025
