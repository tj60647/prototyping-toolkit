# Installing Superpowers for Claude Code

*A setup guide for advanced students. Accurate as of September 2026. If something looks different, check the official page: https://github.com/obra/superpowers*

*This guide covers step 11 of the [TLDR](/tldr), with more explanation. It's optional; skip it unless you already have experience developing software and want a disciplined software-engineering assistant. It suits well-developed projects better than early prototyping.*

*Using Codex? Superpowers also works with Codex, but it installs differently and this guide doesn't cover it. See the Codex instructions at https://github.com/obra/superpowers.*

---

## What You Are Setting Up

Superpowers is a free plugin that gives Claude a strict, step-by-step way of working. Once installed, Claude doesn't jump straight into code. It:

1. **Brainstorms with you**, asking questions and offering alternatives.
2. **Writes a design** and shows it to you in short sections for approval.
3. **Plans the work** as a list of small tasks.
4. **Builds with tests first**, checking each piece works before moving on.
5. **Reviews its own work** before calling anything done.

It was designed for software engineering, so it favors careful, finished work over quick exploration. Expect it to:

- **Take longer** than plain Claude Code, and sometimes work on its own for a long stretch.
- **Use more of your plan's allowance.**
- **Follow its rules strictly.** Its test-first rule is firm: during a build, it may remove code that was written before its tests.

Try it when you want to take a prototype further, not for quick experiments, and see **Making It Prototyping-Friendly** below to tone it down.

---

## Words You'll See

- **Plugin:** an add-on that gives Claude new abilities.
- **Skill:** a set of instructions Claude follows for a particular kind of task.
- **Branch:** a separate line of work in Git, so changes don't affect your main version until you choose to combine them.
- **Test:** a small program that checks whether part of your project works as expected.

---

## Before You Start

This guide assumes:

- VS Code is open with your project folder open.
- The Claude Code extension is installed and you are signed in.
- Your project uses Git. Superpowers keeps its work on separate branches.

Not sure about Git? Ask Claude:

> Is this project folder set up as a Git repository? If not, explain what that means and set it up.

---

## Step 11: Optional: Try Superpowers

Send:

> Install Superpowers yourself for this project only. In Claude Code, run Claude Code's own command-line tool: claude plugin install superpowers@claude-plugins-official --scope local (if claude isn't found, use the program named in the CLAUDE_CODE_EXECPATH environment variable). Then tell me exactly what to restart, and don't start any other work.

Allow the install when Claude asks. Claude installs Superpowers for this project only, then tells you what to restart. Usually that's **Developer: Reload Window** from the Command Palette, followed by a new session. Then go to **Restart and check** below.

**If Claude can't install it,** install it yourself with the next two steps.

### Find Superpowers

1. In the Claude Code prompt box, type `/plugins` and press Enter. The **Manage plugins** window opens.
2. On the **Plugins** tab, search for **superpowers**.
3. Choose the plugin named exactly **superpowers**, described as a "core skills library", and click **Install**.

**Superpowers doesn't appear in the search?** Switch to the **Marketplaces** tab and add `obra/superpowers-marketplace`, or ask Claude: *"Add the obra/superpowers-marketplace marketplace and install superpowers@superpowers-marketplace for this project only."*

**Several plugins with similar names?** That marketplace also lists `superpowers-dev`, `superpowers-lab`, `superpowers-chrome` and others. They're separate add-ons, and `superpowers-dev` conflicts with the main plugin. Install only the one named exactly **superpowers**.

### Choose where it applies

Claude Code asks where to install the plugin. Choose **Install locally**, so you can try Superpowers on one project first.

| Choice | What it means |
|---|---|
| **Install for you** | Superpowers runs in every project you open. *Choose this later, once you've decided you like it.* |
| **Install for this project** | Superpowers runs for anyone who works on this project. |
| **Install locally** | Superpowers runs only for you, only in this project. *Recommended to start.* |

Superpowers changes how Claude works, so try it on one project before using it everywhere. Installing locally keeps your other projects working the way they do now, and doesn't change anything for classmates who share this project. If you like it, ask Claude to install it for all your projects instead. To pause it, see **Turning It Off** below.

### Restart and check

1. Restart the way Claude told you, or click the restart banner if one appears.
2. Start a new session: click the spark icon in the left-hand bar, then **New session**.

### See how to use it

In the new session, send the prompt below. Claude should first list skills such as brainstorming, writing plans, and test-driven development.

> Which Superpowers skills do you have? In plain language, tell me when I'd use each one. Then help me try the brainstorming skill on one small idea for this project: ask me one question at a time, keep the design to about a page, and stop after the design so I can decide what to do next.

As the workflow unfolds:

- **Answer its questions one at a time.** They help it understand what you want.
- **Read the design sections carefully.** This is your main chance to shape the result.
- **Decide whether to continue.** After the design, you choose whether Superpowers plans and builds it. You can stop after brainstorming if the design is all you wanted.

Superpowers saves its designs and plans as files in your project, so you can read them later.

---

## Making It Prototyping-Friendly

Superpowers is built for finished software: full designs, long plans, and tests before every piece of code. Your project is a prototype, where speed and trying several directions matter more. Superpowers' own rules say your instructions files come first, so a few lines in your project's `AGENTS.md` tone it down.

Copy this prompt and send it:

```
Add this section to this project's AGENTS.md, and keep everything already in the file.

## Using Superpowers on this prototype

- Use brainstorming to explore ideas, and offer 2–3 directions.
- Keep designs to about a page, and plans to five tasks or fewer.
- Skip test-driven development and automated tests unless I ask.
- Never delete code because it has no tests.
- After the design, stop and ask me before planning or building.
```

Then start a new session, so Claude reads the new section.

Brainstorming is the most useful part for prototyping. When that's all you want, say so: *"Just brainstorm with me. Don't plan or build."*

If Superpowers still pushes for tests or long plans, remind it: *"This is a prototype. Follow the Superpowers section in AGENTS.md."*

---

## Staying in Control

- **Check before you allow.** Superpowers runs many commands. If you're unsure about one, ask Claude to explain it first.
- **Check your usage.** Click the spark icon in the left-hand bar and look at the **Usage** section.
- **Ask where it is.** If it's been working a while, ask: *"Summarize what you've done so far and what's left."*
- **Say what you want.** You can still redirect it, for example: *"This is a prototype. Keep the plan to five tasks or fewer."*
- **Rewind if needed.** Hover over an earlier message and click the **rewind** button to put your files back the way they were at that point.

---

## Turning It Off

1. Type `/plugins` in the prompt box.
2. Find **superpowers** in the installed list at the top.
3. Switch its toggle off, or uninstall it.
4. Restart Claude Code when the banner asks.

---

## Checkpoint

Before moving on, check that Superpowers is active.

1. Start a new session: click the spark icon in the left-hand bar, then **New session**.
2. Send:

> Which Superpowers skills do you have? Just list their names.

**You should see:** a list that includes skills such as brainstorming, writing plans, and test-driven development.

**If not:** see Troubleshooting below.

---

## Troubleshooting

**Two Superpowers plugins are installed.**
Type `/plugins` and look at the installed list. Keep the one named exactly **superpowers** and uninstall the other, then restart Claude Code.

**Claude doesn't seem to use Superpowers.**
Make sure you restarted Claude Code and started a new session. Then type `/plugins` and check that its toggle is on.

**It keeps asking about tests or branches I don't understand.**
Ask: *"Explain what you're asking in plain language before I answer."*

**It's doing much more than I wanted.**
Stop it and ask for a summary. Then describe a smaller goal, or turn Superpowers off for this project.

---

## Tips

- **Privacy note.** Superpowers has an optional visual companion for brainstorming. When used, it loads a logo from its maker's website, which reports the Superpowers version. It doesn't send anything about your project.
- **Read the design documents.** They're a clear record of what you decided and why, and they're useful when explaining your prototype to others.

---

## Next

When this guide's checkpoint works, continue with **Put Your Setup to Work** (TLDR steps 12–13).
