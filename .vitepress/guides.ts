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
    file: 'tldr.md',
    slug: 'tldr',
    name: 'TLDR',
    title: 'TLDR: Set Up and Start Prototyping',
    prev: '',
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
    next: 'vercel',
  },
  {
    file: 'nodejs-install-tutorial.md',
    slug: 'nodejs',
    name: 'Node.js',
    title: 'Installing Node.js',
    // A help page, not a TLDR step, so it sits outside the Previous/Next chain.
    prev: null,
    next: null,
  },
  {
    file: 'vercel-tutorial.md',
    slug: 'vercel',
    name: 'Vercel',
    title: 'Managing Vercel Projects with Your Coding Assistant',
    prev: 'git-and-github',
    next: 'run-your-project',
  },
  {
    file: 'run-your-project-tutorial.md',
    slug: 'run-your-project',
    name: 'Run Your Project',
    title: 'Running Your Project on Your Computer',
    prev: 'vercel',
    next: 'playwright',
  },
  {
    file: 'playwright-tutorial.md',
    slug: 'playwright',
    name: 'Playwright',
    title: 'Testing Your Prototype in a Browser with Playwright',
    prev: 'run-your-project',
    next: 'prototyping-assistant',
  },
  {
    file: 'prototyping-assistant-tutorial.md',
    slug: 'prototyping-assistant',
    name: 'Prototyping Assistant',
    title: 'Setting Up Your Coding Assistant for Prototyping',
    prev: 'playwright',
    // Superpowers is optional, so the main path goes straight to Put It to Work.
    next: 'put-it-to-work',
  },
  {
    file: 'superpowers-tutorial.md',
    slug: 'superpowers',
    name: 'Superpowers',
    title: 'Installing Superpowers for Claude Code',
    prev: 'prototyping-assistant',
    next: 'put-it-to-work',
  },
  {
    file: 'put-it-to-work-tutorial.md',
    slug: 'put-it-to-work',
    name: 'Put It to Work',
    title: 'Put Your Setup to Work',
    prev: 'prototyping-assistant',
    next: 'protect-your-keys',
  },
  {
    file: 'protect-your-keys-tutorial.md',
    slug: 'protect-your-keys',
    name: 'Protect Your Keys',
    title: 'Protecting Your API Keys',
    prev: 'put-it-to-work',
    next: 'database',
  },
  {
    file: 'database-tutorial.md',
    slug: 'database',
    name: 'Database',
    title: 'Adding a Database',
    prev: 'protect-your-keys',
    next: 'sign-in',
  },
  {
    file: 'sign-in-tutorial.md',
    slug: 'sign-in',
    name: 'Sign-In',
    title: 'Adding Sign-In',
    prev: 'database',
    next: null,
  },
]

export function guideBySlug(slug: string): Guide {
  const guide = guides.find((g) => g.slug === slug)
  if (!guide) throw new Error(`No guide with the address "/${slug}".`)
  return guide
}
