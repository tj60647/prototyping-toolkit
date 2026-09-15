# Setting Up Your Coding Assistant for Prototyping

*A setup guide for non-experts. Accurate as of September 2026. If a screen looks different, check the official guide: https://code.claude.com/docs/en/vscode-extension*

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

## Step 1: Make Plan Mode the Default

1. Open VS Code settings. Press `Cmd + ,` on a Mac or `Ctrl + ,` on Windows.
2. In the search box at the top, type **Claude Code permission**.
3. Find **Initial Permission Mode** and change it to **plan**.

Every new Claude Code session will now start in Plan mode. Settings save automatically.

**Using Codex?** Codex doesn't have this setting, so skip this step. The instructions in Step 2 ask Codex to describe its plan and wait for your approval before changing anything. Keep Codex's permission mode on **Ask for approval**.

---

## Step 2: Have Claude Write Your Instructions File

Your instructions go in `AGENTS.md`, a plain text file in your project that your assistant reads at the start of every session. Think of it as a briefing you only have to write once. You can ask Claude to write it for you. If your project already has an `AGENTS.md`, Claude adds to it and keeps what's there.

**About `AGENTS.md` and `CLAUDE.md`.** `AGENTS.md` is a shared instructions file that many coding assistants read, including Codex. Claude Code reads a file called `CLAUDE.md` instead. Your `CLAUDE.md` only needs one line, `@AGENTS.md`, which tells Claude to read `AGENTS.md` as well. That way your instructions live in one place and work with either assistant.

1. Start a new session so the Plan mode setting applies: click the **spark icon** (✱) in the left-hand bar, then **New session**.

2. Check the mode indicator at the bottom of the prompt box. It should say **Plan**. (Codex: skip this.)

3. Copy this prompt into the prompt box and send it:

```
Add this section to the AGENTS.md file in the top level of this project. Create the file if it doesn't exist. Keep everything already in the file.

# This is a prototype, not production software

I'm exploring ideas, not building a finished product.

- Before changing any files, describe your plan and wait for my approval.
- Before planning, ask what I'm trying to learn or try out.
- When there's a real design choice, offer 2–3 directions instead of one "best" solution.
- Keep changes small enough that I can see what each one did.
- Tell me what I should look at or click to see the change.
- Don't write automated tests unless I ask.
- Explain changes in plain language, without jargon.
- Speed and variety matter more than polish.

Then make sure a CLAUDE.md file exists in the top level of this project and contains the line @AGENTS.md. Add that line if it's missing, and keep anything else in the file.
```

4. In Plan mode, Claude describes what it plans to do and waits. This is your first plan to review. Read it, then approve it. (Codex makes this first change without a plan, because the new instructions only apply from the next chat.)
5. If Claude asks permission to create the file, accept.
6. Check the Explorer panel, the list of your project's files on the left. To open it, press `Cmd + Shift + E` on a Mac or `Ctrl + Shift + E` on Windows. You should see `AGENTS.md` and `CLAUDE.md` near the bottom of the list. Click `AGENTS.md` to read it.

This text is a starting point. You can edit the file yourself at any time, or ask Claude to change it. Because it's a file in your project, it's saved and shared along with everything else.

**Want something more personal?** Instead of pasting the text above, try: *"Interview me about how I like to explore ideas, then propose a section for this prototype's AGENTS.md."*

---

## Step 3: Start a New Session

Claude only reads your instructions when a session starts, so start a new session the same way you did in Step 2.

To confirm Claude read your file, ask:

> What instructions are you following in this project?

It should describe the points from your `AGENTS.md`.

---

## Step 4: Try a Planning Conversation

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

## Step 5: Know When to Switch Modes

Plan mode is best for anything new or uncertain. For tiny, obvious fixes, such as changing a word or a color, planning can feel slow.

Click the mode indicator at the bottom of the prompt box to switch:

| Mode | When to use it |
|---|---|
| **Plan** | New ideas, bigger changes, anything you're unsure about. *Your default.* |
| **Manual** | Small, clear tweaks. Claude still asks before editing each file. |
| **Edit automatically** | Avoid this for now. Claude changes files without asking. |

New sessions always start back in Plan mode.

**Using Codex?** Codex's modes are different. Keep **Ask for approval**, and avoid **Full access**. Your `AGENTS.md` instructions take the place of Plan mode.

---

## Checkpoint

Before moving on, check that both changes are working.

1. Start a new session: click the spark icon in the left-hand bar, then **New session**.
2. Look at the mode indicator at the bottom of the prompt box. It should say **Plan**. (Codex: it should say **Ask for approval**.)
3. Send:

> What instructions are you following in this project?

**You should see:** the prompt box set to **Plan** (or **Ask for approval** in Codex), and a reply that describes the points in your `AGENTS.md` file, such as offering 2–3 directions and explaining changes in plain language. If the file already had other instructions, such as how to publish your site, the reply should mention those too.

**If not:** make sure Step 1's setting says **plan**, that `AGENTS.md` and `CLAUDE.md` are in the top level of your project, not inside another folder, and that `CLAUDE.md` contains `@AGENTS.md`. If instructions that were there before are missing, ask Claude to add them back.

---

## Tips

- **Planning uses more of your plan's allowance.** Check the **Usage** section in the Claude Code sidebar (the spark icon in the left-hand bar).
- **Edit `AGENTS.md` as you learn.** When Claude does something you don't want more than once, add a line about it. Start a new session afterward.
- **Keep `AGENTS.md` short.** A handful of clear instructions works better than a long list.
- **Rewind if needed.** In Claude Code, hover over an earlier message and click the **rewind** button to put your files back the way they were at that point. In Codex, ask it to go back to your last save point.

---

## Next

When this guide's checkpoint works, continue with **Homework: Put Your Setup to Work**. Advanced users can first try **Installing Superpowers for Claude Code**, which is optional.
