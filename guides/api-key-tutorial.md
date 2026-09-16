# Using Your API Key on Your Computer

*A setup guide for non-experts. Accurate as of September 2026.*

*Using Codex instead of Claude Code? The prompts work the same way. Read "Claude" as "Codex," and follow the **Using Codex** notes where the steps differ. Where this guide says to start a new session, start a new chat instead: click the new chat button at the top of the Codex panel.*

---

## What You Are Setting Up

Your prototype uses Google's Gemini AI, and Gemini needs a secret **API key** to work. Your live site on Vercel already has this key, so it works online.

To run your prototype on your own computer, your computer needs a copy of the key too. It goes in a file in your project called `.env.local`.

Settings stored like this, outside your code, are called **environment variables**. Your Gemini key is one of them, usually named `GEMINI_API_KEY`.

**Keep the key secret:**

- Never paste it into Claude or anywhere else.
- Never put it on GitHub. The `.env.local` file stays on your computer only.

---

## Words You'll See

- **API key:** a secret code that lets your app use a service, such as Gemini.
- **Environment variable:** a setting kept outside your code. Your API key is one.
- **`.env.local`:** the file on your computer where your environment variables are kept.
- **`.gitignore`:** a list of files Git never saves or sends to GitHub.
- **Local address:** a web address, such as `http://localhost:5173`, that only works on your own computer.
- **Explorer panel:** the list of your project's files and folders on the left side of VS Code. To open it, press `Cmd + Shift + E` on a Mac or `Ctrl + Shift + E` on Windows, or click the top icon in the left-hand bar.

---

## Before You Start

This guide assumes:

- VS Code is open with your project folder open.
- The Claude Code extension is installed and you are signed in.
- Vercel CLI is installed, you're signed in to Vercel, and you know the name of your Vercel project.
- Your Vercel project already has your Gemini API key. It does if the AI features on your live site work.

---

## Step 1: Copy the Key from Vercel

Claude can copy the key from Vercel into your project without showing it. Replace `[your Vercel project name]` with your project's name, then send:

> Download this project's environment variables from my Vercel project, [your Vercel project name], into .env.local using Vercel CLI. Name the project in the command instead of linking this folder. If they're only set for production, download those. Don't show me any values. Then make sure .env.local is listed in .gitignore so it never goes to GitHub.

Allow the commands when Claude asks.

**Not sure whether to allow something?** Ask Claude to explain it in plain language first.

---

## Step 2: Check It Works

Send:

> Start my app on my computer and give me the local address.

Open that address in your browser and try a feature that uses AI. If it responds, your key is working.

When you're done, you can ask Claude: *"Stop the app."*

---

## Checkpoint

Before moving on, check that the key is in place and protected.

1. Start a new session: click the spark icon in the left-hand bar, then **New session**.
2. Send:

> Check that .env.local exists and list the variable names in it, without showing any values. Then confirm that Git ignores it.

**You should see:** a name such as `GEMINI_API_KEY`, and confirmation that Git ignores `.env.local`.

**If not:** see Troubleshooting below.

---

## Troubleshooting

**The key downloaded empty.**
Vercel sometimes hides key values so they can't be downloaded. Copy the key from Google AI Studio instead:

1. In your browser, go to **https://aistudio.google.com/apikey** and copy your key.
2. In VS Code, open `.env.local` from the Explorer panel, the list of files on the left. Files that start with a dot are listed with the others.
3. Find the line that starts with `GEMINI_API_KEY=` and paste your key right after the `=` sign, with no spaces.
4. Save the file.

**The app says the key is missing.**
Ask Claude to stop the app and start it again. The app only reads `.env.local` when it starts.

**Claude can't find your Vercel project.**
Ask: *"List my Vercel projects, including the ones in my teams."* Then send the Step 1 prompt again with the right name.

**I think my key was shared by accident.**
If the key ended up on GitHub or in a message, tell your instructor. You'll need a new key, and the old one should be deleted in Google AI Studio.

---

## Tips

- **You only do this once per project**, unless your key changes.
- **If your key changes,** update it in Vercel first, then repeat Step 1.

---

## Next

When this guide's checkpoint works, continue with **Testing Your Prototype in a Browser with Playwright**, so Claude can try out your prototype in a browser.
