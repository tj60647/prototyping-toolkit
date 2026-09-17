# Prototyping Toolkit

Setup guides for prototyping with a coding assistant, GitHub, and Vercel. They take a student from installing Claude Code or Codex in VS Code through to a first project that uses the whole setup.

**Live site:** https://prototypingtoolkit.aroughidea.com

## What's here

| Folder | Contents |
|---|---|
| `guides/` | The student guides, one Markdown file each. The website is built from this folder only. |
| `instructor/` | The instructor audit of the sequence. It is not on the website. |
| `.vitepress/` | The site: guide list and addresses (`guides.ts`), sidebar and Next/Previous buttons (`config.ts`), title links and prompt Copy buttons (`markdown.ts`, `theme/`). |

## Change a guide

1. Edit the file in `guides/`, or replace it with a new version under the same filename.
2. Commit and push to `main`. Vercel rebuilds the site from GitHub.

To add a guide, add its file to `guides/`, an entry to `.vitepress/guides.ts`, and a sidebar item in `.vitepress/config.ts`. The build stops with a message if a file isn't listed, or if a guide's first heading doesn't match its `title`.

## Run it locally

Requires Node.js.

```sh
npm install
npm run dev
```
