import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp() {
    if (typeof window !== 'undefined') window.addEventListener('click', copyPrompt)
  },
} satisfies Theme

// The Copy buttons are rendered into each prompt by .vitepress/markdown.ts.
async function copyPrompt(event: MouseEvent) {
  const button = (event.target as Element | null)?.closest?.('button.prompt-copy')
  if (!button) return
  const parts = [...button.parentElement!.children].filter((el) => el !== button) as HTMLElement[]

  try {
    await navigator.clipboard.writeText(parts.map((el) => el.innerText.trim()).join('\n\n'))
    show(button, 'Copied', 'Prompt copied.')
  } catch {
    // No clipboard access, so select the prompt for an ordinary copy instead.
    const range = document.createRange()
    range.setStartBefore(parts[0])
    range.setEndAfter(parts[parts.length - 1])
    getSelection()?.removeAllRanges()
    getSelection()?.addRange(range)
    show(button, 'Selected', 'Prompt selected. Press Ctrl+C, or Cmd+C on a Mac, to copy it.')
  }
}

function show(button: Element, label: string, announcement: string) {
  let status = document.getElementById('prompt-copy-status')
  if (!status) {
    status = Object.assign(document.createElement('div'), {
      id: 'prompt-copy-status',
      className: 'visually-hidden',
    })
    status.setAttribute('role', 'status')
    document.body.append(status)
  }
  status.textContent = announcement
  button.firstChild!.textContent = label
  setTimeout(() => (button.firstChild!.textContent = 'Copy'), 2000)
}
