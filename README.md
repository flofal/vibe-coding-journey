# Vibe Coding · Recorrido autodidacta

Dashboard estático y bilingüe (ES/EN) que documenta el recorrido de **Florencia Falco** por el plan de estudio público del módulo *Vibe Coding (T564A)* dictado por **Karen Brennan** en la Harvard Graduate School of Education (Fall 2025).

> No es una matriculación en Harvard. Es una bitácora pública de un recorrido autodidacta por un plan de estudio abierto. Todo el crédito del diseño curricular corresponde a Karen Brennan y Jacob Wolf (HGSE).

## Stack

HTML + CSS + JavaScript vanilla. Sin frameworks, sin build step, sin backend. Hosting: GitHub Pages.

## Estructura

```
/
├── index.html          ← Dashboard
├── sobre.html          ← Sobre este proyecto + Sobre mí
├── contacto.html       ← Email + LinkedIn
├── styles.css          ← compartido
├── script.js           ← compartido (inyecta navbar/footer como partials)
├── translations.js     ← strings fijas ES/EN
├── data.json           ← contenido editable de las 6 semanas
├── /assets/
│   ├── /fonts/         ← DK Rotorua (.otf)
│   ├── /logos/         ← logo de Flo
│   ├── /screenshots/   ← capturas de proyectos por semana
│   ├── favicon.svg
│   └── og-image.svg
├── CLAUDE.md           ← contexto del proyecto para Claude Code
└── README.md
```

## Cronograma

- **Semana 1** — lunes 18 mayo 2026 — Build something that... tells a story
- **Semana 2** — lunes 25 mayo 2026 — Build something that... makes your life easier
- **Semana 3** — lunes 1 junio 2026 — Build something that... sparks joy
- **Semana 4** — lunes 8 junio 2026 — Build something that... answers a question
- **Semana 5** — lunes 15 junio 2026 — Build something that... invites play
- **Semana 6** — lunes 22 junio 2026 — Build something that... feels like magic

Cada lunes a las 10:00 (UTC−3) se publica un post de LinkedIn que acompaña la actualización de la tarjeta correspondiente.

## Cómo editar el contenido

Toda la información variable vive en `data.json`. Para actualizar una semana:

1. Abrir `data.json`.
2. Buscar el objeto de la semana correspondiente (`"id": 1` a `"id": 6`).
3. Editar:
   - `status`: `"pending"`, `"in_progress"` o `"completed"`.
   - `tool`: herramienta usada (texto libre, ej: `"Replit"`, `"Claude Code"`).
   - `project.url`: URL del proyecto en vivo.
   - `project.embed`: `true` si el proyecto se puede embeber en iframe.
   - `project.screenshots`: lista de rutas a imágenes en `/assets/screenshots/`.
   - `reflection`: reflexión semanal de Flo (markdown plano).
   - `linkedinUrl`: link al post de LinkedIn.
   - `readings[].note`: reflexión breve sobre cada lectura.
4. Commit + push. GitHub Pages republica solo.

## Idiomas

ES por defecto. Toggle visible en el header. La elección se persiste en `localStorage`. Las reflexiones semanales quedan en español; si no hay versión EN, se muestra el ES con un disclaimer.

## Créditos

Plan de estudio original: **Karen Brennan & Jacob Wolf** · HGSE Fall 2025.
Diseño y desarrollo del dashboard: **Florencia Falco**.
