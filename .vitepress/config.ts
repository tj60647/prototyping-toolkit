import { readdirSync, readFileSync } from 'node:fs'
import { defineConfig, type DefaultTheme } from 'vitepress'
import { markDark, markLight } from './brand'
import { guideBySlug, guides } from './guides'
import { promptCopyButtons, titleLinks } from './markdown'

const item = (slug: string, text = guideBySlug(slug).name): DefaultTheme.SidebarItem => ({
  text,
  link: `/${slug}`,
})

const sidebar: DefaultTheme.SidebarItem[] = [
  {
    items: [
      item(''),
      item('tldr'),
      { text: 'Claude Code or Codex', items: [item('claude-code'), item('codex')] },
      item('git-and-github'),
      item('vercel'),
      item('run-your-project'),
      item('playwright'),
      item('prototyping-assistant'),
      item('superpowers', 'Superpowers (optional)'),
      item('put-it-to-work'),
    ],
  },
  { text: 'Help', items: [item('nodejs')] },
]

checkGuides()

export default defineConfig({
  title: 'Prototyping Toolkit',
  description: 'Setup guides for prototyping with a coding assistant, GitHub, and Vercel.',
  lang: 'en-US',
  srcDir: 'guides',
  cleanUrls: true,
  // Short addresses for slides and links; the files keep their authored names.
  rewrites: Object.fromEntries(guides.map((g) => [g.file, `${g.slug || 'index'}.md`])),
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: markLight }]],
  markdown: {
    config(md) {
      md.use(titleLinks).use(promptCopyButtons)
    },
  },
  transformPageData(page) {
    const guide = guides.find((g) => g.file === page.filePath)
    if (!guide) return
    const nav = (slug: string | null) =>
      slug === null ? false : { text: guideBySlug(slug).name, link: `/${slug}` }
    page.frontmatter.prev = nav(guide.prev)
    page.frontmatter.next = nav(guide.next)
  },
  themeConfig: {
    logo: { light: markLight, dark: markDark, alt: 'A Rough Idea' },
    sidebar,
    outline: { level: [2, 3], label: 'On this page' },
    search: { provider: 'local' },
    docFooter: { prev: 'Previous guide', next: 'Next guide' },
  },
})

/** Stops the build when guides.ts, the guide files and the sidebar disagree. */
function checkGuides() {
  const dir = new URL('../guides/', import.meta.url)
  const files = readdirSync(dir).filter((f) => f.endsWith('.md')).sort()
  const listed = guides.map((g) => g.file).sort()
  if (files.join() !== listed.join()) {
    throw new Error(`guides/ has ${files.join(', ')}, but .vitepress/guides.ts lists ${listed.join(', ')}.`)
  }

  for (const g of guides) {
    const heading = readFileSync(new URL(g.file, dir), 'utf8').split(/\r?\n/, 1)[0]
    if (heading !== `# ${g.title}`) {
      throw new Error(`guides/${g.file} starts with "${heading}", but .vitepress/guides.ts expects "# ${g.title}".`)
    }
  }

  const links = (items: DefaultTheme.SidebarItem[]): string[] =>
    items.flatMap((i) => [...(i.link ? [i.link] : []), ...links(i.items ?? [])])
  const inSidebar = links(sidebar).sort()
  const expected = guides.map((g) => `/${g.slug}`).sort()
  if (inSidebar.join() !== expected.join()) {
    throw new Error(`The sidebar links ${inSidebar.join(', ')}, but the guides are ${expected.join(', ')}.`)
  }
}
