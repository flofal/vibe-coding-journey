# CLAUDE.md — Una clase en 2030

Archivo de contexto para Claude Code. Lee esto antes de hacer cualquier cambio en este proyecto.

---

## Qué es este proyecto

Proyecto de la **Semana 1** del curso **T564A Vibe Coding EDU** de Karen Brennan (Harvard).
Consigna: crear un proyecto que cuente una historia.

**Concepto:** *Una clase en 2030.* Sitio web interactivo donde el visitante elige ser Sofía (alumna, 6to grado) o Tomás (docente), recorre una escena breve desde esa perspectiva, y ambos caminos terminan en una pregunta común.

**Audiencia:** directores de escuela en Uruguay y América Latina.
**Apuesta narrativa:** mostrar que más tecnología en el aula puede generar más vínculo humano, no menos.
**Eje filosófico:** de consumidores a creadores.
**Pregunta final que cierra todo:** *¿Tus estudiantes consumen IA, o crean con ella?*

---

## Autora

Florencia Falco. Docente de Computer Science en Uruguay, formadora de profes en tecnología.
Marca: **Tech para Profes**.

---

## Stack técnico

- HTML5 + CSS3 + JavaScript vanilla. **Sin frameworks.** No introducir React, Vue, Tailwind ni ningún build step.
- Un solo archivo: `una-clase-en-2030.html`.
- Fuentes: Google Fonts (Fraunces + Raleway). No agregar más fuentes sin avisar.
- Responsive mobile-first.
- Sin dependencias externas más allá de Google Fonts.

---

## Identidad de marca — RESPETAR SIN EXCEPCIONES

### Paleta de colores (oficial Tech para Profes)
- Azul night: `#1A385E` (principal)
- Lavanda: `#D7CAFF`
- Verde tecno: `#017361` (acento principal)
- Menta: `#E1FDCB`
- Blanco humo: `#F5F5F5` (fondo)

**No introducir colores fuera de esta paleta.** Si necesitás un gris o un tono neutro, usá los que ya están definidos como variables CSS (`--tinta`, `--gris-suave`).

### Tipografía
- **Display (titulares):** DK Rotora (está en la raíz de la carpeta).
- **Body (cuerpo de texto):** Raleway.
- No cambiar a Inter, Roboto, Space Grotesk, Montserrat ni a fuentes "modernas genéricas".

---

## Voz — LO MÁS IMPORTANTE DE ESTE ARCHIVO

La voz del proyecto es **La Amiga + La Sabia**: cálida, directa, accesible, par a par.

### Está prohibido (sin excepción):

- Jerga corporativa de IA: "sinergia", "co-diseño", "co-piloto", "manifiesto", "ecosistema", "empoderar", "transformar", "potenciar", "disrupción", "innovación", "vanguardia", "paradigma"
- Frases de venta o slogan: "la IA como aliada para...", "diseñar artefactos significativos", "experiencias significativas"
- Anglicismos innecesarios: "stakeholders", "mindset", "skills", "engagement"
- Lenguaje de demo de IA: "Nano Banana", "está generando...", "asistente inteligente", "co-piloto digital"
- Diminutivos excesivos o frases edulcoradas
- Frases de auto-ayuda docente: "la magia de aprender", "el poder de la curiosidad"
- "Me dirijo a usted" (forma redactada que Florencia rechaza)
- Emojis decorativos en cuerpo de texto (en navegación o estados, ok si son sutiles)

### Sí va:
- Frases concretas con verbos de acción y detalles específicos (no abstracciones)
- Uruguayismos cuando corresponda: "gurises", "mate", "ómnibus"
- Tuteo (no "vos" si el destinatario es internacional, pero sí en contexto uruguayo cuando aporta)
- Honestidad sobre lo que pasa: si un docente está cansado, está cansado, no "transitando un momento desafiante"

---

## Personajes y escenas

### Sofía
- 10 años, 6to grado
- Hoy presenta su proyecto: una ruta interactiva de los 7 faros principales del Uruguay
- El proyecto nació de una curiosidad genuina (un finde en Colonia, vio el faro)
- Construyó el recurso ella, con ayuda de IA, durante un mes
- Cada estudiante del aula tiene un proyecto distinto (ABP potenciado con IA)
- **Tono:** voz de una niña que se sigue a sí misma, no una "alumna ejemplar"

### Tomás
- Docente
- Escena: después de clase, camina hacia la coordinación semanal
- **Línea de contraste obligatoria:** mostrar el "antes" (esa hora era para corregir, papeleo, en silencio) y el "ahora" (es para encontrarse con colegas, hablar de los gurises)
- **Tono:** alguien que recuperó algo que había perdido, no alguien que descubrió una herramienta

### Pregunta final
*¿Tus estudiantes consumen IA, o crean con ella?*

No reformularla. No agregarle subtítulo. No convertirla en cuestionario, dropdown, formulario, auto-diagnóstico ni "manifiesto pedagógico". Va sola.

---

## Datos verificados de los 7 faros (no inventar)

Estos datos fueron verificados con fuentes uruguayas (Wikipedia, Intendencias, sitios oficiales). Si se modifican textos sobre los faros, mantener los datos correctos:

| Faro | Año | Dato clave |
|---|---|---|
| Cerro de Montevideo | 1804 | Primer faro del Río de la Plata |
| Colonia del Sacramento | 1857 | Sobre ruinas de un convento jesuita, base parcialmente cuadrada |
| Punta del Este | 1860 | Ceniza volcánica traída de Roma, más duro que el cemento |
| Cabo de Santa María (La Paloma) | 1874 | Primera torre se derrumbó en 1872, fecha = nacimiento del balneario |
| Punta Carretas / Punta Brava | 1876 | Destellos blanco y rojo alternados desde 1948 |
| José Ignacio | 1877 | El balneario nació alrededor del faro |
| Cabo Polonio | 1881 | Inspiró "12 segundos de oscuridad" de Jorge Drexler; primer farero siciliano |

---

## Reglas para Claude Code — LEER ANTES DE CADA CAMBIO

### Lo que SÍ tenés que hacer
1. **Preguntá antes de actuar** si la instrucción es ambigua. No asumas qué cambio quiere Florencia.
2. **Cambiá solo lo que se te pide.** No reescribas secciones que funcionan.
3. **Si encontrás algo mejorable que no se te pidió,** mencionalo al final, no lo modifiques.
4. **Respetá el alcance.** Este es un proyecto de semana 1, no la versión 5.0.
5. **Cuando edites, mostrame qué cambió.** Diff claro, no "rehice todo".

### Lo que NO tenés que hacer
1. **No agregues features no pedidas.** Nada de auto-diagnósticos, formularios, tests, modales de bienvenida, sistemas de scoring.
2. **No cambies la paleta de colores** aunque te parezca "más moderna".
3. **No introduzcas frameworks ni librerías.** Vanilla JS, vanilla CSS.
4. **No inventes datos.** Si te falta un dato histórico, pedímelo. No completes con plausibles.
5. **No reformules la voz.** Si Florencia escribió una frase, esa frase queda salvo que ella misma la cambie.
6. **No agregues secciones nuevas** sin acuerdo previo.
7. **No expandas el alcance.** Si te piden cambiar un color, cambiá un color, no rediseñes el CSS entero.

### Patrón de comportamiento de la IA que estamos vigilando
En iteraciones anteriores con otros modelos pasó esto: cada cambio chico expandía el proyecto, sumaba jerga, agregaba "valor" inventado (paneles de diagnóstico, manifiestos, frases de demo de IA). Esa expansión sin permiso es exactamente lo que **no queremos** acá.

Si te encontrás pensando "ya que estoy le agrego...", **frená y preguntá primero**.

---

## Tareas pendientes conocidas

- [ ] Probar en mobile real y ajustar el SVG del mapa si queda chico
- [ ] Decidir si reemplazar Fraunces por DK Rotorua (fuente de marca, no en Google Fonts)
- [ ] Revisar lectura en voz alta de los textos de Sofía — pueden estar largos
- [ ] Decidir si las descripciones de cada faro suenan "demasiado adultas" para una nena de 10 años
- [ ] Compartir el proyecto (GitHub Pages u otro hosting)
- [ ] Escribir la reflexión de la semana 1 para LinkedIn

---

## Para la reflexión final del curso

Florencia está documentando este proceso para una serie pública en LinkedIn. Tres puntos que ya identificó como aprendizajes de esta semana:

1. **La IA ayuda a pensar mejor, no piensa por una.** Las preguntas ordenan el pensamiento, no reemplazan la idea.
2. **La pregunta es una intervención.** La IA no es neutral aunque solo pregunte.
3. **Si no se la frena, la IA expande el alcance.** Cada iteración tiende a sumar jerga y "valor inventado". Mantener la voz propia requiere intervención activa y constante.

Estos aprendizajes son del proyecto. No tienen que aparecer en el HTML, pero orientan el espíritu del trabajo.

---

## Contacto con la autora

Florencia Falco
Tech para Profes
Uruguay
