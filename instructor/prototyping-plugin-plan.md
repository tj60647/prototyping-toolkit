# Plan: A Prototyping Plugin

*Instructor document. Future work, drafted 2026-09-16. Nothing here is built yet.*

## Goal

Give students one install that makes their coding agent work the way the toolkit teaches: explore before building, try several directions, test in a browser, look back, and write up what they learned. Today these are prompts students paste (TLDR steps 9, 10 and 13). A plugin would turn them into skills the agent picks up on its own.

## Why not an existing package

Checked 2026-09-16:

- **Superpowers** (installed version 6.3.0) is built for finished software: full designs, plans, tests first, code review. Two parts suit prototyping:
  - Its brainstorming skill has a **spike** path for "can we…", "is it possible…" and "quick and dirty is fine" requests. It skips the design document, tries the idea as cheaply as possible, and reports a recommendation, with anything built labelled throwaway. A **new** project, though, always takes its heaviest path.
  - A **visual companion**: a local browser tab for mockups and side-by-side options during brainstorming. The skill calls it "still new and can be token-intensive".

  It makes no reports.
- **Community skills** cover pieces: a spike skill (dwayneparton), ADHD for generating many ideas in parallel (UditAkhourii), design skills for HTML prototypes. None was vetted, and none covers the whole loop.
- **Frontend Design** (Anthropic) improves how the interfaces the agent builds look, not how the agent explores.

## What the plugin contains

| Skill | Does | Comes from |
|---|---|---|
| `explore` | Asks what the student wants to learn, then offers 2–3 directions before changing anything | TLDR step 10 instructions |
| `spike` | Builds the smallest throwaway version that answers one question, and says what was learned | Superpowers' spike path, reworded for beginners |
| `try-it` | Runs the app, checks it with Playwright on computer and phone sizes, shows screenshots | TLDR steps 8–9 |
| `look-back` | Summarizes the session, answers the reflection questions, proposes `AGENTS.md` additions | TLDR step 13 |
| `report-page` | Writes the look-back, or a comparison of directions, as a readable page | The instructor's own `report-page` skill, adapted (below) |

Skills use the Agent Skills format (`SKILL.md` folders), so the same files can serve Claude Code and Codex.

## Adapting `report-page`

The instructor's skill (`~/.claude/skills/report-page`: `SKILL.md`, `shell.html`, `blocks.html`) was written for incident reports for engineers and colleagues. Changes before students use it:

1. **Audience and report types.** Replace incident, post-mortem and runbook framing with prototype reports: a session look-back, a comparison of 2–3 directions with screenshots, and a "what I learned" summary for the instructor. Keep the editorial rules that transfer: measure rather than estimate, name only real things, mark what wasn't checked, don't present unfinished work as done.
2. **Blocks.** Keep the timeline, evidence panel and steps blocks. Drop or hide the runbook table and causal chain. Add a side-by-side block for comparing directions with screenshots.
3. **Output.** The skill publishes a claude.ai artifact. Not every student will have that feature, and Codex has no equivalent. Default to a standalone HTML file in the project (`reports/`), which needs a full `<html>` wrapper around the shell, and offer an artifact only where it's available. Check which plans include artifacts.
4. **Review step.** The multi-reviewer adversarial pass is too heavy for students. Replace it with the checklist checks, run by the agent.
5. **Clean-up for a public repo.** Remove the provenance note that names a private repo path. Check both HTML files for anything else private. The files load IBM Plex from Google Fonts; keep or drop that for offline use.

## Distribution

- **Where:** a plugin folder in this repo, or a sibling repo such as `tj60647/prototyping-plugin`, with:
  - `.claude-plugin/plugin.json`
  - `.claude-plugin/marketplace.json`
  - `.codex-plugin/plugin.json`, as Superpowers does
  - a `skills/` folder
- **Install, Claude Code:** `/plugins` → **Marketplaces** → add the repo, then install. Same flow as the Superpowers guide.
- **Install, Codex:** confirm the current plugin install route before writing the guide.
- **Scope:** install **locally** on one project first, as with Superpowers, then **for you** once students like it.

## Changes to the guides

- **TLDR step 10:** replace the pasted instructions with "install the prototyping plugin", or keep both. *Decision needed.*
- **TLDR step 13:** "Look back at how it went" becomes a call to `look-back`, with `report-page` as the optional write-up.
- **Put Your Setup to Work:** the reflection can end with a report page.
- **Superpowers guide:** keep it as the optional heavier path. Point prototyping students to its spike path ("say *spike* or *quick and dirty is fine*").
- **Rule for all guide changes:** detailed guides keep the TLDR's step numbers, headings and prompts.

## Steps

1. **Decide** the open questions below.
2. **Build `explore`, `spike`, `try-it` and `look-back`** from the existing guide text. Check each triggers on the prompts students actually send.
3. **Adapt `report-page`** as above. Generate one sample report from a real prototype session and read it at phone and desktop widths, in both themes.
4. **Package** for Claude Code and Codex, and install from the repo on a clean account for each.
5. **Dry run** with a student-level user on one prototype, Mac and Windows: install, explore, spike, try-it, look-back, report.
6. **Update the TLDR first, then the matching guide steps.** Check the build, and that every TLDR prompt appears word for word in its guide.
7. **Record the decision** in `tutorial-audit.md`.

## Open decisions

- One plugin for all five skills, or `report-page` separate?
- Does the plugin replace the step 10 `AGENTS.md` instructions, or sit beside them?
- Report output: HTML file only, or artifact where available?
- Same repo or a sibling repo?
- Is Superpowers still recommended once this exists?

## Not yet checked

- Whether Codex reads the same `SKILL.md` files and plugin manifest the way Superpowers' `.codex-plugin` suggests.
- Which Claude plans include artifacts.
- Whether the Codex VS Code extension reads `~/.codex/AGENTS.md` (relevant to step 7 today).
