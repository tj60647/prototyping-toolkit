# Setting Up Git and GitHub CLI

*A setup guide for non-experts. Accurate as of September 2026. If something looks different, check the official page: https://cli.github.com*

*Using Codex instead of Claude Code? The prompts work the same way. Read "Claude" as "Codex," and follow the **Using Codex** notes where the steps differ. Where this guide says to start a new session, start a new chat instead: click the new chat button at the top of the Codex panel.*

---

## What You Are Setting Up

Two tools let Claude save your work and connect it to your GitHub account:

- **Git** keeps a history of every version of your project.
- **GitHub CLI**, also called **`gh`**, connects your computer to your GitHub account.

With both installed, you can ask Claude to save your changes, create a GitHub repository, or publish updates, all in plain language. At the end of this guide, Claude brings a copy of your GitHub project onto your computer.

Claude does most of the setup for you. You'll use the terminal once, to sign in to GitHub.

---

## Words You'll See

- **Repository:** a project tracked by Git. Your project on GitHub is a repository.
- **Clone:** make a copy of a GitHub repository on your computer.
- **Commit:** save a snapshot of your project's files, with a short message about what changed.
- **Push:** send your commits to GitHub.
- **Terminal:** a panel at the bottom of VS Code where you type commands. To open it, choose **Terminal → New Terminal** from the menu bar. On a Mac, the menu bar is at the top of your screen; on Windows, it's at the top of the VS Code window.
- **Explorer panel:** the list of your project's files and folders on the left side of VS Code. To open it, press `Cmd + Shift + E` on a Mac or `Ctrl + Shift + E` on Windows, or click the top icon in the left-hand bar.

---

## Before You Start

This guide assumes:

- VS Code is open, and the Claude Code extension is installed and you are signed in.
- You have a GitHub account, and your prototype's project is already on GitHub.
- You can install software on your computer. Some school or work computers don't allow this. If yours doesn't, ask your IT help desk.
- On a Mac, you know your computer's login password. You may need it to install Homebrew.

---

## Using the Terminal

A few things to know before you type in the terminal:

- **Paste a command** with `Cmd + V` on a Mac or `Ctrl + V` on Windows, then press Enter to run it.
- **You can't click to move the cursor.** Use the arrow keys instead.
- **When a command asks a question,** use the arrow keys to pick an answer and press Enter.
- **A command is finished** when the terminal shows a new, empty line ready for typing.
- **To stop a command that seems stuck,** press `Ctrl + C`. This is the same on a Mac.

---

## Step 1: Make a Folder for Your Projects

Claude works on the files in whichever folder VS Code has open, and at the end of this guide it copies your project into that folder. So start by making one place to keep your projects.

Put it in your home folder rather than Documents or Desktop, which are often synced by iCloud Drive or OneDrive. Syncing can interfere with your projects.

1. In VS Code, choose **File → Open Folder…**
2. Go to your home folder.
    - **Mac:** press `Cmd + Shift + H`. It's the folder with a house icon and your name.
    - **Windows:** it's `C:\Users\` followed by your name.
3. Click **New Folder**, name it `Projects`, and confirm.
4. Select the `Projects` folder and click **Open** (on Windows, **Select Folder**).
5. If VS Code asks **"Do you trust the authors of the files in this folder?"**, click **Yes, I trust the authors**. Claude doesn't work in Restricted Mode.

Already have a folder for your projects? Open that one instead.

VS Code reloads when it opens a folder. You stay signed in. Claude can make folders and copy projects into them, but choosing which folder VS Code has open is the part it can't do for you, so it's always **File → Open Folder…**

---

## Step 2: Check What You Already Have

Ask Claude:

> Check whether Git and GitHub CLI (gh) are installed on this computer. On a Mac, also check for Homebrew. Just report what you find. Don't install anything.

Claude will ask permission to run a few short commands. Read each one, then allow it.

**Not sure whether to allow something?** Ask Claude to explain it in plain language first. Deny anything that would delete files, use `sudo`, or change things outside your project folder.

**Using Codex?** Codex runs routine commands without asking, but it asks before using the internet or changing things outside your project folder. Installing programs does both, so expect Codex to ask during Step 3.

If Git and GitHub CLI are both installed, skip to Step 5.

---

## Step 3: Have Claude Install What's Missing

Send:

> Install whatever is missing from Git and GitHub CLI. On Windows, use winget. On a Mac, use Homebrew for GitHub CLI. Before each command, explain in plain language what it does. Tell me whenever you need me to do something.

Claude asks permission before each command. Read what it wants to run, then allow it.

Along the way, you may need to help:

- **Windows:** if Windows asks whether to allow an app to make changes to your computer, click **Yes**.
- **Mac, installing Git:** if a window offers to install "command line developer tools," click **Install**. Wait for it to finish, then tell Claude.
- **Mac, no Homebrew:** Homebrew is a free tool for installing software on a Mac, and GitHub CLI needs it. Installing it asks for your computer password, which Claude can't type for you. See below.

### Mac only: installing Homebrew yourself

If Claude says Homebrew is missing, send:

> Give me the official Homebrew install command from brew.sh and tell me what to expect. I'll run it in the terminal myself.

Then:

1. Check that the command matches the one on **https://brew.sh**. It's a good habit before running any command you didn't write.
2. Open the terminal: choose **Terminal → New Terminal** from the menu at the top of your screen.
3. Paste the command and press Enter.
4. When asked for your password, type your Mac login password and press Enter. **Nothing appears as you type.** That's normal.
5. Press Enter again if it asks you to continue, then wait for it to finish.
6. Go back to Claude and send:

> Homebrew has finished installing. Complete its setup steps, then install GitHub CLI.

---

## Step 4: Restart VS Code

VS Code and Claude only notice newly installed programs after VS Code restarts.

1. Quit VS Code completely. Closing a window isn't always enough, because VS Code can keep running in the background.
    - **Mac:** press `Cmd + Q`, or choose **Code → Quit Visual Studio Code** from the menu bar.
    - **Windows:** close every VS Code window, or choose **File → Exit**.
2. Open VS Code again. It usually reopens the folder you had open. If it doesn't, choose **File → Open Recent** and pick your folder.
3. Start a new session: click the spark icon in the left-hand bar, then **New session**.
4. Send:

> Check that git and gh both work now.

**Using Codex?** Start a new chat instead: click the new chat button at the top of the Codex panel.

---

## Step 5: Sign In to GitHub

This is the one step you do in the terminal yourself, because it asks you questions and waits for you along the way.

1. Open the terminal: choose **Terminal → New Terminal** from the menu. On a Mac, the menu is at the top of your screen.
2. Paste this and press Enter:

```
gh auth login --hostname github.com --git-protocol https --web
```

3. If asked **"Authenticate Git with your GitHub credentials?"**, choose **Yes** and press Enter.
4. The terminal shows a **one-time code**. Copy it or write it down.
5. Press Enter. Your browser opens a GitHub page.
6. Sign in to GitHub if asked, enter the code, and approve the request.
7. Go back to VS Code. The terminal should say you're logged in.

---

## Step 6: Finish Setup with Claude

Git labels every saved version with your name and email. Claude can set these up from your GitHub account. Send:

> Check that I'm signed in to GitHub. Then, if my Git name and email aren't set, set them from my GitHub account. Use my GitHub no-reply email address so my personal email stays private.

Allow the commands when Claude asks. Then try:

> List my GitHub repositories.

If Claude shows your repositories, everything is working.

---

## Step 7: Bring Your Project onto Your Computer

Making a copy of a GitHub project on your computer is called **cloning**. Claude can do it for you. Send:

> Clone my GitHub repository called [your project name] into this folder. If you're not sure which one I mean, list my repositories and ask me.

Allow the commands when Claude asks. Claude creates a new folder for the project inside your Projects folder.

Then open your project in VS Code:

1. Choose **File → Open Folder…**
2. Open your Projects folder, select the new project folder, and click **Open** (on Windows, **Select Folder**).
3. If VS Code asks **"Do you trust the authors of the files in this folder?"**, click **Yes, I trust the authors**. It's your own project.
4. VS Code reloads. Your project's files appear in the Explorer panel, the list of files on the left. If you don't see it, press `Cmd + Shift + E` on a Mac or `Ctrl + Shift + E` on Windows.

From now on, open this folder whenever you work on your project. Then do the checkpoint below.

**Using Codex?** Codex changes files without asking first, so make save points a habit starting now. Before each task, send: *"Commit my current work with a clear message."*

---

## Checkpoint

Before moving on, check that your project, Git, and GitHub are all connected.

1. Look at the top of the Explorer panel (`Cmd + Shift + E` on a Mac or `Ctrl + Shift + E` on Windows). It should show your project's name, not your Projects folder.
2. Start a new session: click the spark icon in the left-hand bar, then **New session**.
3. Send:

> What is this project? Explain it in plain language in a few sentences. Then confirm which GitHub account I'm signed in with, and which GitHub repository this folder is connected to.

**You should see:** a plain-language description of your project, your GitHub username, and your repository's name.

**If not:** see Troubleshooting below.

---

## Troubleshooting

**Claude says a program isn't found right after installing it.**
Restart VS Code (Step 4) and start a new session. If that doesn't work, restart your computer.

**Windows: Claude says winget isn't available.**
Ask Claude: *"winget isn't available. Tell me where to download the regular installers for Git and GitHub CLI."* Download and open each one, and accept the defaults.

**Mac: Claude says the brew command isn't found after installing Homebrew.**
Ask Claude: *"Homebrew is installed but the brew command isn't found. Complete Homebrew's setup steps."* Then restart VS Code.

**The one-time code expired.**
Run the `gh auth login` command again to get a new code.

**Claude can't find my repository.**
Ask Claude to list your repositories and pick the right one. If it isn't listed, make sure you signed in to the GitHub account that owns it.

**Claude doesn't seem to know about my project after I opened it.**
Start a new session. Each session works on the folder that was open when it started.

**Something else went wrong.**
Copy the error message, paste it to Claude, and ask: *"Explain this error in plain language and tell me how to fix it."*

---

## Tips

- **You only do this once per computer.** Git and GitHub CLI work in every project afterward.
- **Check your sign-in any time.** Ask Claude, *"Am I signed in to GitHub?"*
- **Signing out.** Ask Claude, *"Sign me out of GitHub CLI."*

---

## Next

When this guide's checkpoint works, continue with **Installing Node.js**, which many web tools need.
