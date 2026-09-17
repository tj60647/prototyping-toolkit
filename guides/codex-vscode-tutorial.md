# Installing Codex in VS Code

*A setup guide for non-experts. Accurate as of September 2026. If a screen looks different, check the official guide: https://developers.openai.com/codex/ide*

*This guide covers steps 1–4 of the [TLDR](/tldr), with more explanation. Using Claude Code instead? Follow "Installing Claude Code in VS Code" and skip this guide.*

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

You need:

- **VS Code, installed and up to date.** On a Mac, go to **Code → Check for Updates**. On Windows, go to **Help → Check for Updates**.
- **A ChatGPT account.** Codex is included with ChatGPT plans, including the free plan, which has lower limits. Check your student access in Step 3 before buying a plan.

---

## Step 1: Set Up a Folder for Your Projects

Codex works on the files in whichever folder VS Code has open, and it won't answer until a folder is open. So start by making one place to keep your projects. Your project goes inside it later.

Put it in your home folder rather than Documents or Desktop, which are often synced by iCloud Drive or OneDrive. Syncing can interfere with your projects.

- **Mac:** open **Finder** and press `Cmd + Shift + H` to go to your home folder, the one with a house icon and your name. Choose **File → New Folder**, and name it `Projects`.
- **Windows:** open **File Explorer**, type `%USERPROFILE%` in the address bar, and press Enter to go to your home folder. Choose **New → Folder**, and name it `Projects`.

Already have a folder for your projects? Use that one instead. Whichever folder you use, the rest of these guides call it your **Projects folder**, whatever its name really is.

---

## Step 2: Open Your Projects Folder in VS Code

1. Open VS Code and choose **File → Open Folder…**
2. Select your Projects folder and click **Open** (on Windows, **Select Folder**).
3. If VS Code asks **"Do you trust the authors of the files in this folder?"**, click **Yes, I trust the authors**. Codex doesn't work otherwise.

Codex can make folders and copy projects into them, but choosing which folder VS Code has open is the part it can't do for you, so it's always **File → Open Folder…**

---

## Step 3: Choose and Install Your Agent

### Check your student access

**Check student access using your edu email before buying a plan.** Follow [Codex for Students](https://learn.chatgpt.com/community/students) to create or sign in to your ChatGPT account and verify your student status. OpenAI has offered verified university students in the United States and Canada Codex credits, which let you keep using Codex after you reach your plan's usage limits.

### Install the extension

1. Click **Extensions**, the four-squares icon in the left-hand bar. You can also press `Cmd + Shift + X` on a Mac or `Ctrl + Shift + X` on Windows.
2. Search for **Codex**.
3. Choose **Codex – OpenAI's coding agent**, published by **OpenAI**.
4. Click **Install**.

You only do this once. The extension is then available in every VS Code window and project, and each chat works on the folder that's open.

### Open its chat panel and sign in

1. Look for the Codex icon in the sidebar on the **right** side of the window, and click it. If you don't see it, open the Command Palette, type **Open Codex Sidebar**, and press Enter.
2. Choose to sign in with your **ChatGPT account**.
3. Your browser opens. Log in to ChatGPT and approve the connection.
4. Go back to VS Code. You should now see a prompt box in the Codex panel.

**Starting a new chat.** You sometimes need a fresh chat, for example after changing a setting. Click the new chat button at the top of the Codex panel, or press `Cmd + N` on a Mac or `Ctrl + N` on Windows while the Codex panel is selected.

---

## Step 4: Ask Your Agent Where It Is

Send:

> Which folder are you working in?

Check that it names the folder you opened in Step 2. If the send button is greyed out with **"Please open a folder or workspace to continue"**, go back to Step 2.

---

## About Permissions and Save Points

Below the prompt box is a **permission mode** control. Keep it on **Ask for approval**: Codex edits files and runs routine commands in your project folder on its own, and asks before using the internet or going outside your project folder. Avoid **Full access**, which lets Codex change any file on your computer and use the internet without asking. *Setting Up Your Coding Assistant for Prototyping* (TLDR step 10) explains the other settings.

After each task, Codex lists the files it changed. Read the summary, and look at any file you're unsure about.

When Codex does ask before acting:

- **Read Codex's explanation.** If there isn't one, ask: *"Explain that in plain language first."*
- **Allow it** if it matches what you asked for.
- **Deny it and ask why** if it doesn't match what you asked for.
- **When in doubt, deny.** Codex will explain or suggest another way.

Because Codex doesn't ask before changing your files, save a starting point before each task. Once your project is on your computer (TLDR step 6), send this before any change:

> Save a checkpoint of my project with Git, so we can go back to this version if the next change goes wrong. Tell me in one sentence what you saved.

If a change goes wrong, you can ask Codex to go back to that save point.

---

## Checkpoint

Before moving on, check that Codex is working.

1. Start a new chat: click the new chat button at the top of the Codex panel.
2. Send:

> Which folder are you working in?

**You should see:** a short reply in the Codex panel that names your Projects folder.

**If not:** see Troubleshooting below.

---

## Troubleshooting

**The Codex icon is missing.**
Open the Command Palette, type **Open Codex Sidebar**, and press Enter. If nothing happens, open the Command Palette again and run **Developer: Reload Window**. Also check that the folder isn't in Restricted Mode: if VS Code asks whether you trust the authors of the folder, click **Yes, I trust the authors**.

**I can't send a message: "Please open a folder or workspace to continue."**
Codex needs a folder open. Choose **File → Open Folder…** and open your Projects folder (Step 2).

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

When this guide's checkpoint works, continue with **Setting Up Git and GitHub CLI** (TLDR steps 5–6).
