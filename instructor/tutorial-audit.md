# Audit: Prototyping Toolkit Tutorial Sequence

*Instructor document. Updated September 2026.*

**Audience:** people new to VS Code, coding, coding assistants, and prototyping with code.
**Conditions:** taught in sequence in class; each guide must stand alone; students follow the documents offline.
**Scope:** the sequence guide and these guides, in order:

1. Claude Code **or** Codex
2. Git and GitHub
3. Node.js
4. Vercel
5. API Key
6. Playwright
7. Prototyping Assistant
8. Superpowers (optional, Claude Code only)
9. Homework

Students already have VS Code, so there's no VS Code guide.

---

## Overall Assessment

The sequence is ready for a dry run. Every open decision has been made. What remains is checking interface details on real Mac and Windows machines, especially for the new Codex path, which relies more on documentation than on hands-on confirmation.

**Strengths.**

- **Consistent shape.** Every guide follows the same pattern: what you're setting up, words you'll see, what you need, steps, a checkpoint, troubleshooting, tips, and what comes next.
- **The assistant does the work.** Once it's installed, the coding assistant does the technical work and students approve it. The terminal is only for signing in and linking, plus a password step on some Macs.
- **Safety is built in.** Secrets stay out of the chat, publishing only happens by pushing to GitHub, and students test only their own pages. Every guide explains how to decide whether to allow a command, and students learn to save a starting point before big changes.
- **Two assistants, one set of guides.** Claude Code and Codex students share every guide except the first. One instructions file, `AGENTS.md`, works for both.

**Main risks.**

- **Unconfirmed interface wording.** The screenshots were removed, so the guides depend on exact wording that hasn't been confirmed on a real machine.
- **The Codex path is the least tested.** See "Verify on a Class Machine."

---

## Decisions Made

| Issue | Decision | What changed |
|---|---|---|
| SkillUI in the homework | Allow it | The homework already notes that extraction tools come from independent developers. |
| Save points before the homework | Add them | The Vercel guide now tells students to commit before big changes. The Codex path teaches it from the start. |
| Incomplete "Before You Start" lists | Review and add | Git and GitHub, Vercel, and API Key now list everything their steps and checkpoints need. |
| Usage limits in class | Accept | No change to the guides. See "Suggestions for Teaching It." |
| VS Code's built-in AI (Copilot) | Hide it, but not as a step | Nothing in the setup depends on it, and as a step it asked students to hide a button they hadn't seen yet, next to an assistant they hadn't installed yet. Both install guides now carry it as a tip after the checkpoint, phrased as "if you find yourself clicking the wrong one." |
| Projects folder in the install guides | Move it to Git and GitHub | Installing an extension needs no folder open and signing in is account-level, so the folder was a false prerequisite in front of the whole guide. Keeping it at the end of the install guide still left students opening Projects, then replacing it with the project folder one guide later, with a trust prompt each time. It is now Step 1 of Git and GitHub, next to the clone that needs it. The install guides end when the assistant answers. |
| Codex | Add a Codex path | New "Installing Codex in VS Code" guide, plus "Using Codex" notes in the shared guides. |
| Instructions file | Use `AGENTS.md` | Instructions live in `AGENTS.md`. `CLAUDE.md` contains one line, `@AGENTS.md`, with a short explanation for students. |

---

## What Changed Since the First Review

**Structure**
- **No VS Code guide.** Both install guides cover only the assistant: install, open, sign in, try it, permissions. The Projects folder is Step 1 of Git and GitHub.
- **Two install guides.** Students choose "Installing Claude Code in VS Code" or "Installing Codex in VS Code." The sequence guide explains the choice, including the Codex student credits.
- **Neutral titles.** Three shared guides were renamed so they don't mention Claude:
  - "Managing Vercel Projects with Your Coding Assistant"
  - "Testing Your Prototype in a Browser with Playwright"
  - "Setting Up Your Coding Assistant for Prototyping"
- **New guides:** API Key (between Vercel and Playwright), and Homework (a README, a system diagram, or a design system update).
- **Names, not numbers.** The sequence guide lists guides by name, with a matching checkpoint table.

**Fixes**
- **One instructions file.** Instructions go in `AGENTS.md`, and `CLAUDE.md` imports it with `@AGENTS.md`. The Vercel publishing rule and the prototyping instructions sit side by side, and nothing is overwritten.
- **Plan-first instructions for both assistants.** The prototyping instructions now begin with "Before changing any files, describe your plan and wait for my approval." That covers Codex, which has no Plan mode setting.
- **The assistant installs the tools.** It installs Vercel CLI (Homebrew if present, otherwise npm without an administrator password) and Node.js (with the regular installer as a fallback).
- **Local runs have their key.** Playwright and the homework point to the API Key guide.
- **Publishing only through GitHub.** Students never deploy from VS Code.

**Additions for novices**
- **Vocabulary:** a "Words You'll See" box in every guide, and a full glossary in the sequence guide.
- **Permission guidance:** "Deciding whether to allow something" in both install guides, with one-line reminders elsewhere.
- **VS Code basics in place:** the Explorer panel, Command Palette, terminal, and quitting VS Code are explained where they come up. "Using the Terminal" sections were added to the Git and GitHub and Vercel guides.
- **Save points:** the Vercel guide explains committing before big changes. For Codex students, the install guide and the Git and GitHub guide make it a habit.
- **"Next" sections:** each guide ends by naming the guide that follows.

**Removed**
- **Illustrations:** the simplified drawings weren't accurate enough.
- **Time estimates.**
- **Vercel preview deployments from VS Code.**

---

## How the Codex Path Works

**Only the first guide differs.** Codex students follow "Installing Codex in VS Code" instead of the Claude Code guide, then use the same guides as everyone else.

**Codex install guide contents,** in order:
- Installing the extension
- Opening it (right sidebar, or **Open Codex Sidebar** from the Command Palette) and signing in with ChatGPT
- Starting a new chat
- Claiming student credits
- Trying it
- Permission modes and save points
- Checkpoint and troubleshooting
- Tips, including hiding Copilot

**Shared guides.**
- **Top note:** each opens with an italic note telling Codex students to read "Claude" as "Codex," and how to start a new chat.
- **"Using Codex" notes** appear only where the steps differ:

| Guide | Codex difference |
|---|---|
| Git and GitHub | Codex asks before using the internet during installs. Save points start here. |
| Node.js | Codex asks before downloading anything. |
| Vercel | The plugin installs with `npx plugins add vercel/vercel-plugin`. The `/` menu check is skipped; the checkpoint covers it. |
| Playwright | Codex adds the Playwright MCP server to its own settings instead of using a plugin screen. |
| Prototyping Assistant | No Plan mode setting. `AGENTS.md` asks for a plan first. Keep **Ask for approval**. |
| Homework | Use `/status` for usage. Save points replace the rewind button. |
| Superpowers | Not covered for Codex; the guide points to the Superpowers instructions. |

**The key teaching difference.** In its default **Ask for approval** mode, Codex edits files and runs routine commands in the project without asking. It only asks before using the internet or going outside the project. For Codex students, Git save points are the main safety net, not permission prompts.

---

## Remaining Minor Items

- **Checking the Homebrew command:** the Git and GitHub guide asks Mac students to check the command against brew.sh, which is hard for this audience. Consider putting the exact command in your class materials.
- **The `.vercel` folder:** the Vercel guide says to leave it in place. Add a check that it's listed in `.gitignore`.
- **Superpowers and branches:** Superpowers can remove code written before its tests. Recommend a branch there, as the homework does.
- **Dates:** re-check every guide each term. The Node.js LTS version changes in late October 2026.

---

## Verify on a Class Machine

Check these on a fresh Mac account and a fresh Windows account before class.

**Both assistants**

| Guide | What to check |
|---|---|
| Git and GitHub | The **New Folder** button and home-folder shortcut in the Open Folder dialog, and that the assistant stays signed in when VS Code reloads to open the folder |
| Install guides (now a tip in both) | That `@id:chat.disableAIFeatures` hides Copilot without affecting Claude Code or Codex |
| Git and GitHub | The exact questions `gh auth login` asks with the flags given |
| Install guides | That the checkpoint prompt reads sensibly with no folder open, and that the assistant answers it |
| Vercel | The exact `vercel link` questions |
| API Key | Whether `vercel env pull` downloads the Gemini key, or Vercel hides its value |
| Playwright | The name of the folder Playwright saves screenshots in |
| Homework | That SkillUI runs through `npx` on both systems, where it writes files, and that its own `CLAUDE.md` stays inside its folder |
| Homework | How long Option C takes, and how much usage it consumes |

**Claude Code**

| Guide | What to check |
|---|---|
| Claude Code | Wording of the permission buttons, and whether an "allow for this session" option appears |
| Claude Code, Prototyping Assistant | How a plan is approved, and whether Claude still asks before each edit afterward |
| Git and GitHub | Whether Claude can run `winget` installs and start Apple's developer tools installer |
| Node.js, Vercel | Whether Claude can install Node.js and Vercel CLI as described |
| Vercel, Playwright, Superpowers | The `/plugins` window: tab names, install-location choices, restart banner, and publishers |
| Vercel | Whether the plugin's commands start with `vercel:` or `vercel-plugin:` |
| Prototyping Assistant | The exact label and value of the **Initial Permission Mode** setting |
| Prototyping Assistant | That `CLAUDE.md` with `@AGENTS.md` loads the instructions (the checkpoint shows this) |

**Codex**

| Guide | What to check |
|---|---|
| Codex | The extension's name in the Marketplace, where its icon appears, and the sign-in button wording |
| Codex | The new chat button, and whether `Cmd + N` / `Ctrl + N` starts a new chat |
| Codex | The permission mode names below the prompt box, and what Codex asks before |
| Codex | Whether `/status` shows usage in the extension |
| Codex | The student credits page and verification steps |
| Codex | Windows sandbox setup on first use |
| Git and GitHub, Node.js | Whether Codex can run `winget` and Homebrew installs, and when it asks |
| Vercel | Whether `npx plugins add vercel/vercel-plugin` installs the plugin for the Codex extension |
| Playwright | Whether Codex can add the Playwright MCP server to its settings, and whether the extension picks it up after a restart |
| Prototyping Assistant | Whether Codex follows "describe your plan and wait for my approval" reliably, or whether the extension now has a plan mode |
| Homework | Whether the design system prompt works as well with Codex |

---

## Guide-by-Guide Status

| Guide | Status | What's left |
|---|---|---|
| Sequence | Ready | — |
| Claude Code | Ready, needs testing | Permission wording. Now covers only the assistant: the Projects folder moved to Git and GitHub, hiding Copilot moved to Tips, the terminal dropped from the vocabulary box, the onboarding-checklist detour cut. |
| Codex | New, needs testing | Most interface details are from documentation. Matches the Claude Code guide: install first, Copilot in Tips, student credits after sign-in, no Projects folder step. |
| Git and GitHub | Ready, needs testing | Homebrew is the hardest moment for Mac users. Now opens by making the Projects folder, so its steps renumbered to 1-7. |
| Node.js | Ready, needs testing | Confirm installs on both systems and both assistants |
| Vercel | Ready, needs testing | Codex plugin install; `.vercel` check |
| API Key | Ready, needs testing | Confirm the key can be downloaded from Vercel |
| Playwright | Ready, needs testing | Codex settings path |
| Prototyping Assistant | Ready, needs testing | Codex plan-first behavior; no Troubleshooting section |
| Superpowers | Ready (optional, Claude Code) | Recommend a branch |
| Homework | Ready | — |

---

## Suggestions for Teaching It

**Before class.** Send a checklist a few days ahead:

- VS Code installed
- a GitHub account with the prototype's repository, already connected to Vercel
- **either** an active Claude Pro plan **or** a ChatGPT account, with student credits claimed if eligible
- permission to install software
- Google Chrome
- operating system updates done
- knowing their computer password
- a laptop charger

Students who arrive without accounts will stall at the first or second guide.

**Choosing assistants.** Two assistants means two sets of screens. Ask students to choose before class so you know the split.
- **Group by assistant** for the install guide and the prototyping guide.
- **Have a TA** who knows Codex.
- **Remind Codex students often:** save a starting point before each task.

**Usage limits.** Both assistants have usage limits.
- **Demonstrate Playwright once** rather than having everyone run long checks at the same time.
- **Check usage before Homework Option C.** Claude students use the **Usage** section in the sidebar; Codex students type `/status`.
- **Codex student credits** extend usage past the plan's limits.

**Pacing.** The install guide and the Git and GitHub guide vary the most between Mac and Windows, and include the Homebrew password step. Give them their own session, with a TA ready for Homebrew. The rest go faster once the assistant is doing the work. The Vercel guide has two sign-in steps in the terminal.

**Grouping by system.** Within each assistant group, seat Mac and Windows users separately for the first two guides.

**Dry run.** Before the first class, have someone who didn't write the guides follow them offline on fresh Mac and Windows accounts, once with each assistant, and time each guide.

---

## Recommended Next Steps

1. **Work through "Verify on a Class Machine,"** starting with the Codex items.
2. **Fix the remaining minor items.**
3. **Do timed dry runs** on fresh Mac and Windows accounts, once with Claude Code and once with Codex.
