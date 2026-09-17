# Installing Claude Code in VS Code

*A setup guide for non-experts. Accurate as of September 2026. If a screen looks different, check the official guide: https://code.claude.com/docs/en/vscode-extension*

*This guide covers steps 1–4 of the [TLDR](/tldr), with more explanation. Using Codex instead? Follow "Installing Codex in VS Code" and skip this guide.*

---

## What You Are Setting Up

Claude Code is an AI coding assistant made by Anthropic. It runs inside VS Code as a chat panel next to your files. It can read your project, suggest changes, and make edits. It asks your permission first.

You don't need to know how to program to follow this guide.

---

## Words You'll See

- **Extension:** an add-on that gives VS Code new features. Claude Code is one.
- **Prompt:** a message you send to Claude.
- **Session:** one conversation with Claude. You can start a fresh one at any time.
- **Permission request:** Claude asking before it changes a file or runs a command.
- **Command:** an instruction for your computer, usually typed in a terminal. Claude can run commands for you.
- **Command Palette:** a search box at the top of VS Code for finding any command by name. Press `Cmd + Shift + P` on a Mac or `Ctrl + Shift + P` on Windows, type part of the command's name, choose it from the list, and press Enter.

---

## Before You Start

You need:

- **VS Code, installed and up to date.** On a Mac, go to **Code → Check for Updates**. On Windows, go to **Help → Check for Updates**.
- **A Claude account that includes Claude Code.** Check your student access in Step 3 before buying a plan.

---

## Step 1: Set Up a Folder for Your Projects

Claude works on the files in whichever folder VS Code has open, so start by making one place to keep your projects. Your project goes inside it later.

Put it in your home folder rather than Documents or Desktop, which are often synced by iCloud Drive or OneDrive. Syncing can interfere with your projects.

- **Mac:** open **Finder** and press `Cmd + Shift + H` to go to your home folder, the one with a house icon and your name. Choose **File → New Folder**, and name it `Projects`.
- **Windows:** open **File Explorer**, type `%USERPROFILE%` in the address bar, and press Enter to go to your home folder. Choose **New → Folder**, and name it `Projects`.

Already have a folder for your projects? Use that one instead. Whichever folder you use, the rest of these guides call it your **Projects folder**, whatever its name really is.

---

## Step 2: Open Your Projects Folder in VS Code

1. Open VS Code and choose **File → Open Folder…**
2. Select your Projects folder and click **Open** (on Windows, **Select Folder**).
3. If VS Code asks **"Do you trust the authors of the files in this folder?"**, click **Yes, I trust the authors**. Claude Code doesn't work otherwise.

Claude can make folders and copy projects into them, but choosing which folder VS Code has open is the part it can't do for you, so it's always **File → Open Folder…**

---

## Step 3: Choose and Install Your Agent

### Check your student access

**Check student access using your edu email before buying a plan.** Check [your edu account's Claude access](https://support.claude.com/en/articles/11139144-use-claude-for-education-at-your-university), and ask your school's IT help desk whether it includes Claude Code.

Otherwise, you need a paid plan: Claude Pro costs $20 a month and includes Claude Code. The free Claude plan does not. You don't need an API key.

### Install the extension

1. Click **Extensions**, the four-squares icon in the left-hand bar. You can also press `Cmd + Shift + X` on a Mac or `Ctrl + Shift + X` on Windows.
2. Search for **Claude Code**.
3. Choose the one published by **Anthropic**, which has a verified checkmark.
4. Click **Install**.

You only do this once. The extension is then available in every VS Code window and project, and each session works on the folder that's open.

If nothing appears after you install it, reload VS Code: open the Command Palette, type **Reload Window**, choose **Developer: Reload Window**, and press Enter.

### Open its chat panel

An orange **spark** icon (✱) marks Claude Code. Click the orange spark in the top-right corner of the window, just below the title bar. It appears whenever a file or the Welcome tab is open.

You can also click the spark icon in the left-hand bar, which opens the Claude Code sidebar, or open the Command Palette and type **Claude Code**.

**Starting a new session.** Each conversation with Claude is called a **session**. You sometimes need a fresh one, for example after changing a setting. To start one, click the spark icon in the left-hand bar, then **New session**. Keep the **Local** tab selected. **Web** is for sessions you started on claude.ai.

### Sign in

1. Click **Sign in** in the Claude Code panel.
2. Your browser opens. Log in to your Claude account and approve the connection.
3. Go back to VS Code. You should now see a prompt box.

To check which account you're signed in with, click the spark icon in the left-hand bar. Your email appears under **Account**.

A **Learn Claude Code** checklist appears after you sign in. Click **Show me** on each item for a guided tour of the basics, or close it and carry on.

---

## Step 4: Ask Your Agent Where It Is

Send:

> Which folder are you working in?

Check that it names the folder you opened in Step 2.

A few tips for sending prompts:

- To point Claude at a specific file, type `@` followed by part of the file's name.
- Highlight text in a file, and Claude will see your selection automatically.
- To start a new line without sending, press `Shift + Enter`.

---

## About Permission Requests

When Claude wants to change a file, it shows the original and the proposed change side by side. You can **accept**, **reject**, or tell it what to do instead. When it wants to run a command, it asks first.

- **Read Claude's explanation.** If there isn't one, ask: *"Explain that in plain language first."*
- **Allow it** if it matches what you asked for.
- **Deny it and ask why** if it doesn't match what you asked for.
- **When in doubt, deny.** Claude will explain or suggest another way.

The mode at the bottom of the prompt box controls how much Claude asks first. Leave it as it is for now. *Setting Up Your Coding Assistant for Prototyping* (TLDR step 10) explains the modes and sets the one to use.

If an edit goes wrong, hover over an earlier message and click the **rewind** button. This puts your files back the way they were at that point.

---

## Checkpoint

Before moving on, check that Claude Code is working.

1. Start a new session: click the spark icon in the left-hand bar, then **New session**.
2. Send:

> Which folder are you working in?

**You should see:** a short reply in the Claude Code panel that names your Projects folder.

**If not:** see Troubleshooting below.

---

## Troubleshooting

**The spark icon is missing.**
Open any file, and look again in the top-right corner. You can also click the spark icon in the left-hand bar, or open the Command Palette and type **Claude Code**. If it's still missing, run **Developer: Reload Window**. Also check that the folder isn't in Restricted Mode: if VS Code asks whether you trust the authors of the folder, click **Yes, I trust the authors**.

**The extension won't install.**
Update VS Code, then try again. You can also install it from the Marketplace page: https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code

**Claude doesn't respond.**
Check your internet connection, then start a new session.

**"Not logged in · Please run /login".**
Run **Developer: Reload Window** from the Command Palette.

**Typing `claude` in the terminal says "command not found".**
This is normal. The extension doesn't install the terminal version, and you don't need the terminal version to use the extension.

---

## Tips

- **Hide VS Code's built-in AI.** VS Code has its own AI assistant, GitHub Copilot, whose icons sit right next to Claude's. If you find yourself clicking the wrong one, hide it: open VS Code settings with `Cmd + ,` on a Mac or `Ctrl + ,` on Windows, type `@id:chat.disableAIFeatures` in the search box, and check the box next to the setting that appears. This hides VS Code's own AI features only. It doesn't affect the Claude Code extension.
- **Check your usage.** Click the spark icon in the left-hand bar. The **Usage** section shows how much of your plan you've used and when it resets. **Session (5hr)** is a five-hour usage window, and **Weekly** covers seven days. When a bar fills up, you wait for it to reset.

---

## Next

When this guide's checkpoint works, continue with **Setting Up Git and GitHub CLI** (TLDR steps 5–6).
