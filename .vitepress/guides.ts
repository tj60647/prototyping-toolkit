// The one list of guides. The web addresses, the sidebar names, the title
// links and the Next/Previous buttons all come from here, and the build fails
// if this list and the files in guides/ disagree.

export interface Guide {
  /** The file in guides/, named as authored. */
  file: string
  /** Web address without the leading slash. The home page is ''. */
  slug: string
  /** Short name, as the sequence guide's tables use it. */
  name: string
  /** The guide's first heading, exactly. */
  title: string
  /**
   * Slugs for the Previous and Next buttons, or null for none. They follow
   * each guide's own "Next" section rather than the sidebar order.
   */
  prev: string | null
  next: string | null
}

export const guides: Guide[] = [
  {
    file: 'setup-sequence.md',
    slug: '',
    name: 'Start here',
    title: 'Setting Up Your Prototyping Toolkit',
    // Students choose Claude Code or Codex here, so there is no single next guide.
    prev: null,
    next: null,
  },
  {
    file: 'claude-code-vscode-tutorial.md',
    slug: 'claude-code',
    name: 'Claude Code',
    title: 'Installing Claude Code in VS Code',
    prev: '',
    next: 'git-and-github',
  },
  {
    file: 'codex-vscode-tutorial.md',
    slug: 'codex',
    name: 'Codex',
    title: 'Installing Codex in VS Code',
    prev: '',
    next: 'git-and-github',
  },
  {
    file: 'github-tools-tutorial.md',
    slug: 'git-and-github',
    name: 'Git and GitHub',
    title: 'Setting Up Git and GitHub CLI',
    // Reached from either install guide, so neither is "previous".
    prev: null,
    next: 'nodejs',
  },
  {
    file: 'nodejs-install-tutorial.md',
    slug: 'nodejs',
    name: 'Node.js',
    title: 'Installing Node.js',
    prev: 'git-and-github',
    next: 'vercel',
  },
  {
    file: 'vercel-tutorial.md',
    slug: 'vercel',
    name: 'Vercel',
    title: 'Managing Vercel Projects with Your Coding Assistant',
    prev: 'nodejs',
    next: 'api-key',
  },
  {
    file: 'api-key-tutorial.md',
    slug: 'api-key',
    name: 'API Key',
    title: 'Using Your API Key on Your Computer',
    prev: 'vercel',
    next: 'playwright',
  },
  {
    file: 'playwright-tutorial.md',
    slug: 'playwright',
    name: 'Playwright',
    title: 'Testing Your Prototype in a Browser with Playwright',
    prev: 'api-key',
    next: 'prototyping-assistant',
  },
  {
    file: 'prototyping-assistant-tutorial.md',
    slug: 'prototyping-assistant',
    name: 'Prototyping Assistant',
    title: 'Setting Up Your Coding Assistant for Prototyping',
    prev: 'playwright',
    // Superpowers is optional, so the main path goes straight to Homework.
    next: 'homework',
  },
  {
    file: 'superpowers-tutorial.md',
    slug: 'superpowers',
    name: 'Superpowers',
    title: 'Installing Superpowers for Claude Code',
    prev: 'prototyping-assistant',
    next: 'homework',
  },
  {
    file: 'homework-tutorial.md',
    slug: 'homework',
    name: 'Homework',
    title: 'Homework: Put Your Setup to Work',
    prev: 'prototyping-assistant',
    next: null,
  },
]

export function guideBySlug(slug: string): Guide {
  const guide = guides.find((g) => g.slug === slug)
  if (!guide) throw new Error(`No guide with the address "/${slug}".`)
  return guide
}
