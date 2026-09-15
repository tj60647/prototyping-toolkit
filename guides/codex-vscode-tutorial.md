# Installing Codex in VS Code

*A setup guide for non-experts. Accurate as of September 2026. If a screen looks different, check the official guide: https://developers.openai.com/codex/ide*

*Using Claude Code instead? Follow "Installing Claude Code in VS Code" and skip this guide.*

---

## What You Are Setting Up

Codex is an AI coding assistant made by OpenAI. It runs inside VS Code as a chat panel next to your files. It can read your project, make changes, and run commands for you.

One thing to know from the start: **Codex changes files in your project without asking first.** It does ask before using the internet or touching anything outside your project folder. Because of this, you'll get in the habit of saving a starting point before each task, so you can always go back.

You don't need to know how to program to follow this guide.

---

## Words You'll See

- **Extension:** an add-on that gives VS Code new features. Codex is one.
- **Prompt:** a message you send to Codex.
- **Chat:** one conversation with Codex. You can start a fresh one at any time. Other guides may call this a **session**.
- **Permission mode:** a setting that controls what Codex can do without asking.
- **Command:** an instruction for your computer, usually typed in a terminal. Codex can run commands for you.
- **Command Palette:** a search box at the top of VS Code for finding any command by name. Press `Cmd + Shift + P` on a Mac or `Ctrl + Shift + P` on Windows, type part of the command's name, choose it from the list, and press Enter.
- **Save point:** a saved snapshot of your project (a "commit") that you can go back to.

---

## Before You Start

This guide assumes:

- VS Code is installed, up to date, and open. To update it, go to **Code → Check for Updates** on a Mac or **Help → Check for Updates** on Windows.
- You have a **ChatGPT account**. Codex is included with ChatGPT plans, including the free plan, which has lower limits.

You don't need a project or a folder open to install Codex. The next guide sets up a folder for your projects.

---

## Step 1: Install the Extension

1. Open the Extensions view. Press `Cmd + Shift + X` on a Mac or `Ctrl + Shift + X` on Windows. You can also click the four-squares icon in the left-hand bar.
2. Search for **Codex**.
3. Choose **Codex – OpenAI's coding agent**, published by **OpenAI**.
4. Click **Install**.

You only do this once. The extension is then available in every VS Code window and project, and each chat works on the folder that's open.

---

## Step 2: Open Codex and Sign In

1. Look for the Codex icon in the sidebar on the **right** side of the window, and click it. If you don't see it, open the Command Palette, type **Open Codex Sidebar**, and press Enter.
2. Choose to sign in with your **ChatGPT account**.
3. Your browser opens. Log in to ChatGPT and approve the connection.
4. Go back to VS Code. You should now see a prompt box in the Codex panel.

**Starting a new chat.** You sometimes need a fresh chat, for example after changing a setting. Click the new chat button at the top of the Codex panel, or press `Cmd + N` on a Mac or `Ctrl + N` on Windows while the Codex panel is selected.

---

## Step 3: Claim Your Student Credits (If Eligible)

OpenAI offers verified university students in the United States and Canada $100 in Codex credits. The credits let you keep using Codex after you reach your plan's usage limits.

1. In your browser, go to **https://chatgpt.com/codex/students**
2. Sign in with your ChatGPT account.
3. Verify that you're a student, using your university email address.

The credits are added to your ChatGPT account automatically. Skip this step if it doesn't apply to you.

---

## Step 4: Try It

Start with a prompt that doesn't change anything:

> In plain language, what can you help me with while I build a prototype in VS Code? Keep it short.

---

## Step 5: Understand Permissions

Below the prompt box is a **permission mode** control. It has three choices:

| Mode | What happens |
|---|---|
| **Ask for approval** | Codex edits files and runs routine commands in your project folder on its own. It asks before using the internet or going outside your project folder. *Keep this one.* |
| **Approve for me** | Codex decides on its own whether to allow those requests. |
| **Full access** | Codex can change any file on your computer and use the internet without asking. *Avoid this.* |

After each task, Codex lists the files it changed. Read the summary, and look at any file you're unsure about.

### Deciding whether to allow something

When Codex does ask, check before you allow:

- **Read Codex's explanation.** If there isn't one, ask: *"Explain that in plain language first."*
- **Allow it** if it matches what you asked for.
- **Deny it and ask why** if it would delete files, uses `sudo`, or changes things outside your project folder.
- **When in doubt, deny.** Codex will explain or suggest another way.

### Save points

Because Codex doesn't ask before changing your files, save a starting point before each task. Once Git is set up on your computer (that's the next guide), send this before any change:

> Commit my current work with a clear message.

If a change goes wrong, you can ask Codex to go back to that save point.

---

## Checkpoint

Before moving on, check that Codex is working.

1. Start a new chat: click the new chat button at the top of the Codex panel.
2. Send:

> Say hello, and tell me in one sentence what you can help me with.

**You should see:** a short reply in the Codex panel. That is all this guide sets out to do: Codex installed, signed in, and answering.

**If not:** see Troubleshooting below.

---

## Troubleshooting

**The Codex icon is missing.**
Open the Command Palette, type **Open Codex Sidebar**, and press Enter. If nothing happens, open the Command Palette again and run **Developer: Reload Window**. Also check that the folder isn't in Restricted Mode: if VS Code asks whether you trust the authors of the folder, click **Yes, I trust the authors**.

**The browser didn't open when I tried to sign in.**
Run **Developer: Reload Window** from the Command Palette, then try signing in again.

**Windows: Codex asks to set something up first.**
Codex uses a protected area on Windows, called a sandbox, to run commands safely. If it asks to set this up, follow its prompts.

**Codex doesn't respond.**
Check your internet connection, then start a new chat.

**Typing `codex` in the terminal says "command not found".**
This is normal. The extension doesn't install the terminal version, and you don't need it.

---

## Tips

- **Hide VS Code's built-in AI.** VS Code has its own AI assistant, GitHub Copilot, whose icons sit near Codex's. If you find yourself clicking the wrong one, hide it: open VS Code settings with `Cmd + ,` on a Mac or `Ctrl + ,` on Windows, type `@id:chat.disableAIFeatures` in the search box, and check the box next to the setting that appears. This hides VS Code's own AI features only. It doesn't affect the Codex extension.
- **Check your usage.** Type `/status` in the prompt box to see your account and usage. If you claimed student credits, your balance appears on your ChatGPT usage page.
- **Privacy.** OpenAI may use your Codex chats to improve its models unless you turn this off in ChatGPT's **Data controls** settings.

---

## Next

When this guide's checkpoint works, continue with **Setting Up Git and GitHub CLI**, where you make a folder for your projects, and Codex connects your computer to GitHub and brings your project into it.
