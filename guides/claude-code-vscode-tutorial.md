# Installing Claude Code in VS Code

*A setup guide for non-experts. Accurate as of September 2026. If a screen looks different, check the official guide: https://code.claude.com/docs/en/vscode-extension*

*Using Codex instead? Follow "Installing Codex in VS Code" and skip this guide.*

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

This guide assumes VS Code is installed and open. Claude Code works on the files in whichever folder is open, so Step 1 sets up a folder for your projects.

You need:

- **VS Code, up to date.** On a Mac, go to **Code → Check for Updates**. On Windows, go to **Help → Check for Updates**.
- **A paid Claude account.** Claude Pro costs $20 a month and includes Claude Code. You don't need an API key. The free Claude plan does not include Claude Code.

---

## Step 1: Open Your Projects Folder

Keep all your projects in one folder. Put it in your home folder rather than Documents or Desktop, which are often synced by iCloud Drive or OneDrive. Syncing can interfere with your projects.

1. In VS Code, choose **File → Open Folder…**
2. Go to your home folder.
    - **Mac:** press `Cmd + Shift + H`. It's the folder with a house icon and your name.
    - **Windows:** it's `C:\Users\` followed by your name.
3. Click **New Folder**, name it `Projects`, and confirm.
4. Select the `Projects` folder and click **Open** (on Windows, **Select Folder**).
5. If VS Code asks **"Do you trust the authors of the files in this folder?"**, click **Yes, I trust the authors**.

Already have a folder for your projects? Open that one instead.

---

## Step 2: Install the Extension

1. Open the Extensions view. Press `Cmd + Shift + X` on a Mac or `Ctrl + Shift + X` on Windows. You can also click the four-squares icon in the left-hand bar.
2. Search for **Claude Code**.
3. Choose the one published by **Anthropic**, which has a verified checkmark.
4. Click **Install**.

You only do this once. The extension is then available in every VS Code window and project, and each session works on the folder that's open.

If nothing appears after you install it, reload VS Code:

1. Open the Command Palette, a search box for VS Code's commands: press `Cmd + Shift + P` on a Mac or `Ctrl + Shift + P` on Windows.
2. Type **Reload Window**, choose **Developer: Reload Window** from the list, and press Enter. VS Code refreshes without closing.

---

## Step 3: Open Claude Code

An orange **spark** icon (✱) marks Claude Code. The easiest way to open it is to click the orange spark in the top-right corner of the window, just below the title bar. It appears whenever a file or the Welcome tab is open.

You can also open it in these ways:

- Click the spark icon in the left-hand bar. This opens the Claude Code sidebar.
- Open the Command Palette and type **Claude Code**.

**Starting a new session.** Each conversation with Claude is called a **session**. You sometimes need a fresh one, for example after changing a setting. To start one, click the spark icon in the left-hand bar, then **New session**. Keep the **Local** tab selected. **Web** is for sessions you started on claude.ai.

---

## Step 4: Sign In

1. Click **Sign in** in the Claude Code panel.
2. Your browser opens. Log in to your Claude account and approve the connection.
3. Go back to VS Code. You should now see a prompt box.

To check which account you're signed in with, click the spark icon in the left-hand bar. Your email appears under **Account**.

A **Learn Claude Code** checklist appears after you sign in. Click **Show me** on each item for a guided tour of the basics, or close it and carry on with this guide.

If you later see **"Not logged in · Please run /login"**, run **Developer: Reload Window** from the Command Palette.

---

## Step 5: Try It

Start with a prompt that doesn't change anything:

> In plain language, what can you help me with while I build a prototype in VS Code? Keep it short.

A few tips for when your project is open:

- To point Claude at a specific file, type `@` followed by part of the file's name.
- Highlight text in a file, and Claude will see your selection automatically.
- To start a new line without sending, press `Shift + Enter`.

---

## Step 6: Understand Permissions

When Claude wants to change a file, it shows the original and the proposed change side by side. You can **accept**, **reject**, or tell it what to do instead.

The mode indicator at the bottom of the prompt box controls how much Claude asks first. Click it to switch modes:

| Mode | What happens |
|---|---|
| **Manual** | Asks before editing files and running most commands. *Start here.* |
| **Plan** | Describes what it intends to do and waits for your approval. |
| **Edit automatically** | Makes edits without asking. |

Stay in **Manual** for now. The *Setting Up Your Coding Assistant for Prototyping* guide later switches you to **Plan**.

If an edit goes wrong, hover over an earlier message and click the **rewind** button. This puts your files back the way they were at that point.

### Deciding whether to allow something

Claude asks before running commands. You don't need to understand every command, but check before you allow it:

- **Read Claude's explanation.** If there isn't one, ask: *"Explain that in plain language first."*
- **Allow it** if it matches what you asked for.
- **Deny it and ask why** if it would delete files, uses `sudo`, or changes things outside your project folder.
- **When in doubt, deny.** Claude will explain or suggest another way.

---

## Checkpoint

Before moving on, check that Claude Code is working.

1. Start a new session: click the spark icon in the left-hand bar, then **New session**.
2. Send:

> Say hello, and tell me the name of the folder you're working in.

**You should see:** a short reply that names the folder open in VS Code, such as your Projects folder.

**If not:** see Troubleshooting below.

---

## Troubleshooting

**The spark icon is missing.**
Open any file, and look again in the top-right corner. You can also click the spark icon in the left-hand bar, or open the Command Palette and type **Claude Code**. If it's still missing, run **Developer: Reload Window**. Also check that the folder isn't in Restricted Mode: if VS Code asks whether you trust the authors of the folder, click **Yes, I trust the authors**. Claude Code doesn't work in Restricted Mode.

**The extension won't install.**
Update VS Code, then try again. You can also install it from the Marketplace page: https://marketplace.visualstudio.com/items?itemName=anthropic.claude-code

**Claude doesn't respond.**
Check your internet connection, then start a new session.

**Typing `claude` in the terminal says "command not found".**
This is normal. The extension doesn't install the terminal version, and you don't need the terminal version to use the extension.

---

## Tips

- **Hide VS Code's built-in AI.** VS Code has its own AI assistant, GitHub Copilot, whose icons sit right next to Claude's. If you find yourself clicking the wrong one, hide it: open VS Code settings with `Cmd + ,` on a Mac or `Ctrl + ,` on Windows, type `@id:chat.disableAIFeatures` in the search box, and check the box next to the setting that appears. This hides VS Code's own AI features only. It doesn't affect the Claude Code extension.
- **Check your usage.** Click the spark icon in the left-hand bar. The **Usage** section shows how much of your plan you've used and when it resets. **Session (5hr)** is a five-hour usage window, and **Weekly** covers seven days. When a bar fills up, you wait for it to reset.

---

## Next

When this guide's checkpoint works, continue with **Setting Up Git and GitHub CLI**, where Claude connects your computer to GitHub and brings your project onto your computer.
