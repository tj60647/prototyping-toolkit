// A Rough Idea brand mark, from aroughidea-design-system/assets/favicon.svg.
// Inlined as data URIs so the site needs no public folder.

const mark = (paper: string, ink: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">` +
  `<rect x="3" y="3" width="58" height="58" fill="${paper}" stroke="${ink}" stroke-width="4"/>` +
  `<path d="M14 48L32 12L50 48H42L32 28L22 48H14Z" fill="${ink}"/>` +
  `<rect x="28" y="31" width="8" height="17" fill="${ink}"/>` +
  `</svg>`

const dataUri = (svg: string) => `data:image/svg+xml,${encodeURIComponent(svg)}`

/** Black on white: the design system's own favicon, and the logo on light pages. */
export const markLight = dataUri(mark('white', 'black'))

/** White on black, so the logo stays visible on dark pages. */
export const markDark = dataUri(mark('black', 'white'))
