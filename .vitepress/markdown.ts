import type { MarkdownRenderer } from 'vitepress'
import { guides } from './guides'

type Token = ReturnType<MarkdownRenderer['parse']>[number]

const byTitle = new Map(guides.map((g) => [g.title, g]))
const quotedTitle = new RegExp(
  `"(${guides.map((g) => g.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})"`,
  'g',
)

/**
 * Links a guide's full title to that guide wherever the text names it in
 * *italics*, **bold** or "quotes", which is how the guides refer to each
 * other. Headings, existing links and a page's own title are left alone.
 */
export function titleLinks(md: MarkdownRenderer) {
  md.core.ruler.push('guide_title_links', (state) => {
    const here = state.env.relativePath.replace(/(^|\/)index\.md$/, '').replace(/\.md$/, '')
    const text = (content: string): Token => Object.assign(new state.Token('text', '', 0), { content })
    const link = (slug: string, title: string): Token[] => {
      const open = new state.Token('link_open', 'a', 1)
      open.attrs = [['href', `/${slug}`]]
      return [open, text(title), new state.Token('link_close', 'a', -1)]
    }

    state.tokens.forEach((block, i) => {
      if (block.type !== 'inline' || !block.children) return
      if (state.tokens[i - 1]?.type === 'heading_open') return

      const children: Token[] = []
      let linkDepth = 0
      block.children.forEach((token, k, all) => {
        if (token.type === 'link_open') linkDepth++
        if (token.type === 'link_close') linkDepth--
        if (linkDepth > 0 || token.type !== 'text') return void children.push(token)

        // *Title* or **Title**
        const guide = byTitle.get(token.content)
        const before = all[k - 1]?.type
        if (
          guide &&
          guide.slug !== here &&
          (before === 'em_open' || before === 'strong_open') &&
          all[k + 1]?.type === before.replace('_open', '_close')
        ) {
          return void children.push(...link(guide.slug, guide.title))
        }

        // "Title" inside a longer sentence
        let rest = 0
        for (const match of token.content.matchAll(quotedTitle)) {
          const target = byTitle.get(match[1])!
          if (target.slug === here) continue
          const start = match.index! + 1
          children.push(text(token.content.slice(rest, start)), ...link(target.slug, target.title))
          rest = start + match[1].length
        }
        children.push(rest ? text(token.content.slice(rest)) : token)
      })
      block.children = children
    })
  })
}

/**
 * Every quoted block in the guides is a prompt to send to the coding
 * assistant, so each one gets a Copy button. theme/index.ts handles the click.
 */
export function promptCopyButtons(md: MarkdownRenderer) {
  md.renderer.rules.blockquote_open = (tokens, idx, options, _env, self) => {
    tokens[idx].attrJoin('class', 'prompt')
    return (
      self.renderToken(tokens, idx, options) +
      '<button type="button" class="prompt-copy">Copy<span class="visually-hidden"> prompt</span></button>\n'
    )
  }
}
