# Memory — seguimiento del proyecto

Registro de decisiones y cambios sobre `app/page.tsx` (home) para retomar el trabajo sin perder contexto.

## Estado actual

`app/page.tsx` está compuesto por 3 secciones apiladas, cada una `width: 100vw` y `min-height: 450px`:

1. **Hero** — `height: 100vh`, `background-color: #fbcfe8`.
   - Contiene un `div` interior centrado (horizontal y vertical), `width: 1200px` (con `max-width: 100%` para no desbordar en móvil), `height: 100%`, `background-color: #fae8ff`.
2. **Sección 2** — `height: 50vh`, `background-color: #fff1f2`.
3. **Sección 3** — `height: 50vh`, `background-color: #831843`.

Todos los estilos están inline (`style={{...}}`), sin clases de Tailwind. El contenido original del starter (texto Lorem ipsum, botón, toggle dark mode) fue eliminado.

## Historial de cambios

- Commit `2211410`: texto del `<h1>` cambiado de "Vito gilipollas" a "Viva la amistad" (antes de vaciar la página).
- Home reescrita como bloque de color 100vw/100vh (`#fbcfe8`), eliminando todo el contenido anterior.
- Añadida sección debajo: 100vw / 50vh, `#fff1f2`.
- Añadida tercera sección: 100vw / 50vh, `#831843` (hecho directamente en el editor, fuera de esta conversación).
- Aplicado `min-height: 450px` a las tres secciones.
- Añadido div centrado de 1200px (`#fae8ff`) dentro del hero.
- Añadido párrafo Lorem Ipsum dentro del div de 1200px, centrado con `flex` (`align-items`/`justify-content: center`).
- Párrafo con `font-size: 30px`, `text-align: center`, `line-height: 1em`.
- Fuente por defecto del proyecto cambiada a Pixelify Sans (`app/layout.tsx`, variable `--font-sans`, reemplaza a Inter).

- Fondo del hero: shader "wave-1" (dithering animado). El registro de 21st.dev
  (`https://21st.dev/r/designali-in/wave-1`) ahora exige autenticación y no se
  pudo instalar vía `shadcn add`; en su lugar se identificó que el componente
  es un wrapper sobre `Dithering` de `@paper-design/shaders-react` (props
  `shape`, `type`, `colorBack`, `colorFront`, `pxSize`, `speed` coinciden
  exactamente). Se instaló `@paper-design/shaders-react` (npm, sin
  autenticación) y se creó `components/ui/dithering-shader.tsx` como wrapper
  `DitheringShader` con los valores por defecto del demo (`shape="wave"`,
  `type="8x8"`, `colorBack="#001122"`, `colorFront="#ff0088"`, `pxSize={3}`,
  `speed={0.6}`). Montado en el hero (`app/page.tsx`) como capa
  `position: absolute; inset: 0; zIndex: 0; pointerEvents: none` detrás del
  contenido (que pasó a `zIndex: 1`). El hero ganó `position: relative` +
  `overflow: hidden` para contener la capa del shader.
- El párrafo Lorem Ipsum del hero pasó a `color: #ffffff` para mantenerse
  legible sobre el fondo oscuro del shader (antes heredaba el `--foreground`
  casi negro del tema).
- Verificado visualmente con un dev server + Playwright headless (instalado
  temporalmente con `--no-save`, luego desinstalado; no quedó en
  package.json/lockfile): el shader renderiza y anima correctamente, sin
  errores de consola.

## Pendiente / por decidir

- Contenido real de las secciones 2 y 3 (aún son bloques de color vacíos).
- Si el div de 1200px del hero debe tener una altura fija en vez de `100%`.
- Migrar estilos inline a clases Tailwind/CSS si se quiere mantener consistencia con el resto del proyecto (shadcn + Tailwind).
- Los colores/velocidad del shader (`colorBack`, `colorFront`, `pxSize`,
  `speed`) son un punto de partida; podría ajustarse la paleta para que
  combine mejor con el resto de la página (actualmente rosa/pink `#831843`
  en la sección 3).
