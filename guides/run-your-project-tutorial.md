# Running Your Project on Your Computer

*A setup guide for non-experts. Accurate as of September 2026.*

*This guide covers step 8 of the [TLDR](/tldr), with more explanation.*

*Using Codex instead of Claude Code? The prompts work the same way. Read "Claude" as "Codex," and follow the **Using Codex** notes where the steps differ. Where this guide says to start a new session, start a new chat instead: click the new chat button at the top of the Codex panel.*

---

## What You Are Setting Up

Your prototype already runs online on Vercel. Running it on your own computer lets you try changes before you publish them, and lets Claude test them in a browser.

Your prototype uses Google's Gemini AI, and Gemini needs a secret **API key** to work. Your live site on Vercel already has this key. To run your prototype on your own computer, your computer may need a copy of the key too. It goes in a file in your project called `.env.local`.

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

## Step 8: Run Your Project on This Computer

Start with what you want. Send:

> Run my project on this computer and give me a link to open it.

Claude may install what the project needs first. Allow the commands when it asks. **Not sure whether to allow something?** Ask Claude to explain it in plain language first.

Open the link and try a feature that uses AI. If it responds, your key is already in place. Skip to the Checkpoint.

If the app won't run at all, ask Claude to explain and fix the problem. If it's missing Node.js, see **Installing Node.js**.

### If an API Key Is Missing

If Claude says an API key is missing, or the AI features don't respond, Claude can copy the key from Vercel into your project without showing it. Replace `[Vercel project name]` with your project's name, then send:

> Copy my API key into .env.local from my Vercel project, [Vercel project name]. Name the project in the command instead of linking this folder. If the key isn't in the Development settings, use Production. Don't show me any values, and keep .env.local out of GitHub.

Then ask Claude to restart the app, and try the AI feature again. The app only reads `.env.local` when it starts.

If the key comes back empty, Vercel is hiding it. See "The key downloaded empty" under Troubleshooting.

When you're done, you can ask Claude: *"Stop the app."*

---

## Checkpoint

Before moving on, check that your project runs and any key is protected.

1. Start a new session: click the spark icon in the left-hand bar, then **New session**.
2. Send:

> Run my project on this computer and give me a link to open it. If .env.local exists, confirm that Git ignores it, without showing any values.

**You should see:** a link that opens your app, with its AI features working. If your project uses `.env.local`, confirmation that Git ignores it.

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
Ask: *"List my Vercel projects, including the ones in my teams."* Then send the API key prompt in Step 8 again with the right name.

**I think my key was shared by accident.**
If the key ended up on GitHub or in a message, tell your instructor. You'll need a new key, and the old one should be deleted in Google AI Studio.

---

## Tips

- **You only do this once per project**, unless your key changes.
- **If your key changes,** update it in Vercel first, then send the API key prompt in Step 8 again.

---

## Next

When this guide's checkpoint works, continue with **Testing Your Prototype in a Browser with Playwright** (TLDR step 9).
