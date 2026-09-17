# Setting Up Git and GitHub CLI

*A setup guide for non-experts. Accurate as of September 2026. If something looks different, check the official page: https://cli.github.com*

*This guide covers steps 5–6 of the [TLDR](/tldr), with more explanation.*

*Using Codex instead of Claude Code? The prompts work the same way. Read "Claude" as "Codex," and follow the **Using Codex** notes where the steps differ. Where this guide says to start a new session, start a new chat instead: click the new chat button at the top of the Codex panel.*

---

## What You Are Setting Up

Two tools let Claude save your work and connect it to your GitHub account:

- **Git** keeps a history of every version of your project.
- **GitHub CLI**, also called **`gh`**, connects your computer to your GitHub account.

With both installed, you can ask Claude to save your changes, create a GitHub repository, or publish updates, all in plain language. At the end of this guide, Claude brings a copy of your GitHub project into your Projects folder.

Claude does the setup for you. To sign in, you approve a one-time code in your browser. The only time you might type in the terminal is to install Homebrew on a Mac.

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

- VS Code is open with your Projects folder open, and the Claude Code extension is installed and you are signed in.
- You have a GitHub account, and your prototype's project is already on GitHub.
- You can install software on your computer. Some school or work computers don't allow this. If yours doesn't, ask your IT help desk.
- On a Mac, you know your computer's login password. You may need it to install Homebrew.

---

## Using the Terminal

You only need this if your Mac needs Homebrew (see Step 5). A few things to know before you type in the terminal:

- **Paste a command** with `Cmd + V` on a Mac or `Ctrl + V` on Windows, then press Enter to run it.
- **You can't click to move the cursor.** Use the arrow keys instead.
- **When a command asks a question,** use the arrow keys to pick an answer and press Enter.
- **A command is finished** when the terminal shows a new, empty line ready for typing.
- **To stop a command that seems stuck,** press `Ctrl + C`. This is the same on a Mac.

---

## Step 5: Ask It to List Your GitHub Projects

Start with what you want, and let Claude find out what's missing. Send:

> Show me my projects on GitHub.

Claude will ask permission to run a few short commands. Read each one, then allow it. **Not sure whether to allow something?** Ask Claude to explain it in plain language first.

If Claude lists your projects, everything is already set up. Skip to Step 6.

### If It Can't

If Claude couldn't list your projects, send:

> Install what you need to connect to GitHub. Then sign me in with GitHub CLI: show me the one-time code and web address, and wait while I approve it. Then set up Git to use this sign-in, and set my Git name and GitHub no-reply email if they aren't set.

Claude installs **Git** and **GitHub CLI** if they're missing, then starts the sign-in. Git labels every saved version with a name and email; the no-reply address keeps your personal email private.

**Using Codex?** Codex runs routine commands without asking, but it asks before using the internet or changing things outside your project folder. Installing programs does both, so expect Codex to ask here.

#### While Claude installs

You may need to help:

- **Windows:** if Windows asks whether to allow an app to make changes to your computer, click **Yes**.
- **Mac, installing Git:** if a window offers to install "command line developer tools," click **Install**. Wait for it to finish, then tell Claude.
- **Mac, no Homebrew:** Homebrew is a free tool for installing software on a Mac, and GitHub CLI may need it. Installing it asks for your computer password, which Claude can't type for you. See below.

**If Claude can't find a program it just installed,** quit VS Code completely and open it again. VS Code only notices new programs after a restart.

1. **Mac:** press `Cmd + Q`. **Windows:** close every VS Code window, or choose **File → Exit**.
2. Open VS Code again. If it doesn't reopen your folder, choose **File → Open Recent** and pick it.
3. Start a new session (click the spark icon in the left-hand bar, then **New session**; in Codex, click the new chat button) and send the prompt above again.

#### Mac only: installing Homebrew yourself

If Claude says Homebrew is missing, send:

> Give me the official Homebrew install command from brew.sh and tell me what to expect. I'll run it in the terminal myself.

Then:

1. Check that the command matches the one on **https://brew.sh**. It's a good habit before running any command you didn't write.
2. Open the terminal: choose **Terminal → New Terminal** from the menu at the top of your screen.
3. Paste the command and press Enter.
4. When asked for your password, type your Mac login password and press Enter. **Nothing appears as you type.** That's normal.
5. Press Enter again if it asks you to continue, then wait for it to finish.
6. Go back to Claude and send:

> Homebrew has finished installing. Complete its setup steps, then carry on connecting me to GitHub.

#### Signing in

When Claude shows you a **one-time code** and a web address, usually **https://github.com/login/device**:

1. Copy the code.
2. Open the address, sign in to GitHub if asked, enter the code, and approve the request.
3. Go back to VS Code and tell Claude you're done.

**Do this straight away.** The code expires after about 15 minutes. If it does, ask Claude to start the sign-in again for a new code.

When Claude has finished, ask again:

> Show me my projects on GitHub.

---

## Step 6: Open One Project on Your Computer

Making a copy of a GitHub project on your computer is called **cloning**. Replace `[project name]` with a name from your GitHub list, then send:

> Copy my GitHub project called [project name] into this folder. If it's already here, use that copy. Tell me which folder to open in VS Code.

Allow the commands when Claude asks. Claude puts the project in its own folder inside your Projects folder.

Then open your project in VS Code:

1. Choose **File → Open Folder…**
2. Open your Projects folder, select the project folder Claude named, and click **Open** (on Windows, **Select Folder**).
3. If VS Code asks **"Do you trust the authors of the files in this folder?"**, click **Yes, I trust the authors**. It's your own project.
4. VS Code reloads. Your project's files appear in the Explorer panel, the list of files on the left. If you don't see it, press `Cmd + Shift + E` on a Mac or `Ctrl + Shift + E` on Windows.

Then start a new session (click the spark icon in the left-hand bar, then **New session**). From here on, you work inside this project folder. Open it whenever you work on your project.

**Using Codex?** Codex changes files without asking first, so make save points a habit starting now. Before each task, send: *"Save the current version so we can go back to it."*

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
Quit VS Code completely, open it again, and start a new session (see Step 5). If that doesn't work, restart your computer.

**Windows: Claude says winget isn't available.**
Ask Claude: *"winget isn't available. Tell me where to download the regular installers for Git and GitHub CLI."* Download and open each one, and accept the defaults.

**Mac: Claude says the brew command isn't found after installing Homebrew.**
Ask Claude: *"Homebrew is installed but the brew command isn't found. Complete Homebrew's setup steps."* Then restart VS Code.

**The one-time code expired.**
Ask Claude: *"The code expired. Start the GitHub sign-in again."* Then enter the new code straight away.

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

When this guide's checkpoint works, continue with **Managing Vercel Projects with Your Coding Assistant** (TLDR step 7).
