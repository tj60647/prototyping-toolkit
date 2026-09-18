# Setting Up Your Coding Assistant for Prototyping

*A setup guide for non-experts. Accurate as of September 2026. If a screen looks different, check the official guide: https://code.claude.com/docs/en/vscode-extension*

*This guide covers step 10 of the [TLDR](/tldr), with more explanation.*

*Using Codex instead of Claude Code? The prompts work the same way. Read "Claude" as "Codex," and follow the **Using Codex** notes where the steps differ. Where this guide says to start a new session, start a new chat instead: click the new chat button at the top of the Codex panel.*

---

## What You Are Setting Up

Out of the box, Claude Code behaves like an engineering assistant. It tends to jump straight to a finished-looking solution and polish it.

Prototyping is different. You are exploring: trying ideas, comparing directions, and learning what you actually want. This guide changes two things so Claude works that way with you:

- **Plan mode** makes Claude describe what it intends to do and wait for your approval before it changes anything.
- **An instructions file** gives Claude standing instructions for your project, so it treats the work as exploration rather than optimization.

Together, these turn each change into a short conversation: Claude proposes, you respond, and only then does anything happen.

---

## Words You'll See

- **Permission mode:** a setting that controls how much Claude asks before acting.
- **Plan mode:** the permission mode where Claude describes a plan and waits for your approval before changing anything.
- **`AGENTS.md`:** a file of standing instructions that coding assistants read at the start of every session.
- **`CLAUDE.md`:** Claude Code's instructions file. Yours contains one line, `@AGENTS.md`, so Claude reads `AGENTS.md` too.
- **Explorer panel:** the list of your project's files and folders on the left side of VS Code. To open it, press `Cmd + Shift + E` on a Mac or `Ctrl + Shift + E` on Windows, or click the top icon in the left-hand bar.

---

## Before You Start

This guide assumes:

- VS Code is open with your project folder open.
- The Claude Code extension is installed and you are signed in.

---

## Step 10: Set Up Your Agent for Prototyping

### Add your prototyping instructions

Your instructions go in `AGENTS.md`, a plain text file in your project that your assistant reads at the start of every session. Think of it as a briefing you only have to write once. If your project already has an `AGENTS.md`, Claude adds to it and keeps what's there. These instructions are for this project; the publishing rule from step 7 lives in your global instructions and applies everywhere.

**About `AGENTS.md` and `CLAUDE.md`.** `AGENTS.md` is a shared instructions file that many coding assistants read, including Codex. Claude Code reads a file called `CLAUDE.md` instead. Your `CLAUDE.md` only needs one line, `@AGENTS.md`, which tells Claude to read `AGENTS.md` as well. That way your instructions live in one place and work with either assistant.

Send:

> Add the prototyping instructions from https://prototypingtoolkit.aroughidea.com/prototyping-instructions.md to this project's AGENTS.md, and make sure CLAUDE.md reads them too. Keep any instructions already there.

Claude reads that file and adds the instructions shown below to your project.

#### The prototyping instructions

If Claude can't open web pages, copy this prompt and send it instead:

<<< @/public/prototyping-instructions.md{md}

If Claude asks permission to create or change the files, accept. Then check the Explorer panel, the list of your project's files on the left (`Cmd + Shift + E` on a Mac or `Ctrl + Shift + E` on Windows). You should see `AGENTS.md` and `CLAUDE.md`. Click `AGENTS.md` to read it.

This text is a starting point. You can edit the file yourself at any time, or ask Claude to change it.

**Want something more personal?** Instead of pasting the text above, try: *"Interview me about how I like to explore ideas, then propose a section for this prototype's AGENTS.md."*

### Know your settings

Three settings at the bottom of the prompt box change how your agent works:

| Setting | What it changes | Claude Code | Codex |
|---|---|---|---|
| **Permission mode** | How much it asks before acting | Click the mode. Use **Plan**: it describes a plan and waits for your OK. **Manual** asks before each edit. Avoid **Edit automatically** and **Auto** for now. | Click the permissions menu. Use **Ask for approval**. Avoid **Full access**. |
| **Model** | Which AI model answers | Click the model name, or type `/model`. | Click the model menu. |
| **Effort** | How long it thinks first. Higher is slower and uses more of your plan. | In the mode menu, or type `/effort`. | In the model menu. |

Leave the model and effort as they are unless a task is hard.

To make every new Claude Code session start in Plan mode:

1. Open VS Code settings. Press `Cmd + ,` on a Mac or `Ctrl + ,` on Windows.
2. In the search box at the top, type **Claude Code permission**.
3. Find **Initial Permission Mode** and change it to **plan**. Settings save automatically.

**When to switch modes.** Plan mode is best for anything new or uncertain. For tiny, obvious fixes, such as changing a word or a color, planning can feel slow, so switch to **Manual** for that change. New sessions always start back in Plan mode.

**Using Codex?** Codex has no Plan mode or startup setting. Your `AGENTS.md` instructions take its place: they ask Codex to describe its plan and wait for your approval.

### Start a new session and check

Claude only reads your instructions when a session starts. Start a new session (click the spark icon in the left-hand bar, then **New session**), then ask:

> What instructions are you following in this project?

It should mention both the prototyping instructions and the publishing rule from step 7.

---

## What a Planning Conversation Looks Like

Ask for something open-ended:

> I want the home page to feel more playful. What could we try?

Here is what should happen:

1. **Claude asks questions first**, such as what "playful" means to you.
2. **Claude proposes a plan**, ideally with a few directions to choose from. In Claude Code, the plan opens as its own document. In Codex, it appears in the chat.
3. **You respond to the plan.** You can add comments directly on the plan document, pick a direction, or ask for something different. Nothing has changed in your files yet.
4. **You approve**, and only then does Claude make the change.
5. **You look at the result** and decide what to try next.

If Claude skips the questions or offers only one idea, say so. That feedback is part of the process, and it may also tell you what to add to `AGENTS.md`.

---

## Checkpoint

Before moving on, check that both changes are working.

1. Start a new session: click the spark icon in the left-hand bar, then **New session**.
2. Look at the mode indicator at the bottom of the prompt box. It should say **Plan**. (Codex: it should say **Ask for approval**.)
3. Send:

> What instructions are you following in this project?

**You should see:** the prompt box set to **Plan** (or **Ask for approval** in Codex), and a reply that describes the points in your `AGENTS.md` file, such as offering 2–3 directions and explaining changes in plain language. If the file already had other instructions, such as the publishing rule from step 7, the reply should mention those too.

**If not:** make sure the **Initial Permission Mode** setting says **plan**, that `AGENTS.md` and `CLAUDE.md` are in the top level of your project, not inside another folder, and that `CLAUDE.md` contains `@AGENTS.md`. If instructions that were there before are missing, ask Claude to add them back.

---

## Tips

- **Planning uses more of your plan's allowance.** Check the **Usage** section in the Claude Code sidebar (the spark icon in the left-hand bar).
- **Edit `AGENTS.md` as you learn.** When Claude does something you don't want more than once, add a line about it. Start a new session afterward.
- **Keep `AGENTS.md` short.** A handful of clear instructions works better than a long list.
- **Rewind if needed.** In Claude Code, hover over an earlier message and click the **rewind** button to put your files back the way they were at that point. In Codex, ask it to go back to your last save point.

---

## Next

When this guide's checkpoint works, continue with **Installing Superpowers for Claude Code** (TLDR step 11, optional), or go straight to **Put Your Setup to Work** (TLDR steps 12–13).
