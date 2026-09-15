# Installing Node.js

*A setup guide for non-experts. Accurate as of September 2026. If something looks different, check the official download page: https://nodejs.org/en/download*

*Using Codex instead of Claude Code? The prompts work the same way. Read "Claude" as "Codex," and follow the **Using Codex** notes where the steps differ. Where this guide says to start a new session, start a new chat instead: click the new chat button at the top of the Codex panel.*

---

## What You Are Setting Up

Node.js lets your computer run JavaScript programs outside a web browser. Many tools for building web projects depend on it.

Installing Node.js also gives you two commands you'll see Claude use:

- **`npm`** installs packages.
- **`npx`** runs a tool straight from the internet without installing it permanently.

Claude does most of the setup for you. You don't need to know how to program to follow this guide.

---

## Words You'll See

- **Package:** a ready-made piece of code that a project can use.
- **Version number:** a label like `v24.20.0` that shows which release of a program you have.
- **LTS:** "Long Term Support," the stable version most people should use.

---

## Before You Start

This guide assumes:

- VS Code is open with your project folder open.
- The Claude Code extension is installed and you are signed in.
- You can install software on your computer.

---

## Step 1: Check Whether You Already Have It

Send:

> Check whether Node.js is installed on this computer, and report its version number. On a Mac, also check for Homebrew. Don't install anything.

Claude will ask permission to run a few short commands. Read each one, then allow it.

**Not sure whether to allow something?** Ask Claude to explain it in plain language first. Deny anything that would delete files, use `sudo`, or change things outside your project folder.

If Claude reports a version number, Node.js is already installed. Skip to the Checkpoint.

**Using Codex?** Expect Codex to ask before it downloads anything from the internet in Step 2.

---

## Step 2: Have Claude Install It

Send:

> Install the LTS version of Node.js. On Windows, use winget. On a Mac, use Homebrew if it's installed. If you can't install it, tell me and I'll use the installer from nodejs.org. Before each command, explain in plain language what it does.

Allow each command when Claude asks. On Windows, if Windows asks whether to allow an app to make changes to your computer, click **Yes**.

### If Claude can't install it

This usually happens on a Mac without Homebrew. Use the regular installer instead:

1. In your web browser, go to **https://nodejs.org**
2. Download the **LTS** version. Avoid the version labeled **Current**. Choose the **installer** for your computer:
    - **Mac:** a file ending in `.pkg`
    - **Windows:** a file ending in `.msi`
3. Open the file you downloaded. Click **Continue** or **Next** through each screen and accept the defaults.
4. Enter your computer password if asked.
5. **Windows only:** if a screen offers to install "tools for native modules," leave that box **unchecked**.
6. Click **Close** or **Finish** when it's done.

---

## Step 3: Restart VS Code

VS Code and Claude only notice newly installed programs after VS Code restarts.

1. Quit VS Code completely. Closing a window isn't always enough, because VS Code can keep running in the background.
    - **Mac:** press `Cmd + Q`, or choose **Code → Quit Visual Studio Code** from the menu bar.
    - **Windows:** close every VS Code window, or choose **File → Exit**.
2. Open VS Code again. It usually reopens the folder you had open. If it doesn't, choose **File → Open Recent** and pick your folder.

---

## Checkpoint

Before moving on, check that Claude can use Node.js.

1. Start a new session: click the spark icon in the left-hand bar, then **New session**.
2. Send:

> Check that Node.js, npm, and npx all work. Report their version numbers.

**You should see:** three version numbers, such as `v24.20.0` for Node.js. Your numbers may be different.

**If not:** see Troubleshooting below.

---

## Troubleshooting

**Claude says Node.js isn't found right after installing it.**
Make sure you quit VS Code completely (Step 3) and started a new session. If that doesn't work, restart your computer.

**Claude reports "permission denied" or "EACCES" when installing a package.**
Don't let Claude fix this with `sudo`. Instead, ask: *"Change npm's settings so it can install packages without an administrator password."*

**I'm not sure which version I have, or I have an old one.**
Ask Claude: *"Which version of Node.js do I have, and is it an LTS version?"* To update, repeat Step 2.

**Something else went wrong.**
Copy the error message, paste it to Claude, and ask: *"Explain this error in plain language and tell me how to fix it."*

---

## Next

When this guide's checkpoint works, continue with **Managing Vercel Projects with Your Coding Assistant**, so Claude can publish through GitHub and check your builds.
