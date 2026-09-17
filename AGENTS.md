# Working agreements

## Project reference

- GitHub: `tj60647/prototyping-toolkit` (public).
- Live site: https://prototypingtoolkit.aroughidea.com. Use this address in guides, prompts and checks, not the `vercel.app` one.
- Vercel: team `aroughidea`, project `prototyping-toolkit`, deployed from the GitHub repository. `main` is production; other branches get preview deployments. `.vercel/project.json` is local and ignored.
- A VitePress static site with no runtime dependencies. Pages come only from `guides/`; `instructor/` and top-level files are never built.
- `.vitepress/guides.ts` is the one list of guides: file, address, short name, exact title, and Previous/Next targets.

## Rules

- Never deploy with Vercel CLI or the Vercel plugin's deploy command. To publish, commit and push to GitHub.
- Keep presentation changes in `.vitepress/`, not in the guide Markdown.
- `instructor/` is public on GitHub, but never add it to the website.

## Checks

- `npm run build` fails on a dead internal link, a guide file missing from `guides.ts`, or a first heading that doesn't match its `title`.
- After a push, confirm the deployment for that commit reached READY, then load https://prototypingtoolkit.aroughidea.com signed out. Students must get the page, not a Vercel login.
