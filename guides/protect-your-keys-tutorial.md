# Protecting Your API Keys

*A setup guide for non-experts. Accurate as of September 2026.*

*This guide covers step 14 of the [TLDR](/tldr), with more explanation.*

*Using Codex instead of Claude Code? The prompts work the same way. Read "Claude" as "Codex." Where this guide says to start a new session, start a new chat instead.*

---

## What You Are Setting Up

Paid services, such as AI models, use a secret **API key** to know who to charge. Anyone who has your key can spend your budget.

Your app's code runs in two places:

- **The browser**, on the computer of whoever visits your site. Anything sent there can be read by that visitor.
- **The server**, on Vercel. Visitors can't see what's there.

A key is only safe on the server. Setting it in the Vercel dashboard isn't enough on its own. Vercel gives the key to your app while it builds the site, and some build settings copy it into the files sent to the browser. Apps exported from Google AI Studio, for example, include a setting like this in a file called `vite.config.ts`. It's harmless until some browser code uses the key, and nothing warns you when that happens.

This step checks your app and fixes it if needed. Do it before adding sign-in (step 16): sign-in protects nothing while the key can reach the browser.

---

## Words You'll See

- **API key:** a secret code that lets your app use a paid service.
- **Browser code:** the part of your app that runs on a visitor's computer.
- **Server code:** the part of your app that runs on Vercel, out of visitors' sight. On Vercel it's often called a **function**.
- **Environment variable:** a setting kept outside your code, such as an API key.

---

## Before You Start

- Your project is open in VS Code, and you finished Part 1 of the TLDR.
- Your project is on Vercel.

---

## Step 14: Keep Your Keys on the Server

Send:

> Check whether any secret key this app uses — for an AI service or any other paid API — could ever reach the browser. Look at how this app is built and deployed, including any build settings that copy environment variables into browser code. If a key could reach the browser, move the calls that use it to server code and remove whatever copies it. Don't show me any key values.

Claude reads your project and reports what it found. There are three likely outcomes:

- **Nothing to fix.** Your keys are only used in server code. You're done with this step.
- **A setting copies a key but nothing uses it.** Claude removes the setting, so a later change can't expose the key.
- **Browser code uses a key.** Claude moves those calls into server code and changes the browser code to ask the server instead. This is a bigger change, so review Claude's plan before approving it.

If Claude changed anything, ask it to run the app and check the AI features still work. Then save your changes to GitHub.

---

## Checkpoint

1. Start a new session.
2. Send:

> Build this app the way Vercel does, then search the built files for anything that looks like a secret key. Tell me only whether you found one, not what it is.

**You should see:** Claude reports that no key was found in the built files.

---

## Troubleshooting

**The AI features stopped working after the change.**
Ask: *"The AI features stopped working after you moved the key to server code. Find out why and fix it."* On your computer, the server code may need the app started a different way; ask Claude how to run it now.

**Claude found a key in the built files.**
Ask Claude to fix it and check again. Then treat the key as exposed if your site was ever published with it: create a new key with the service that issued it, update it on Vercel, and delete the old one.

---

## Tips

- **Check again after big changes.** Adding a new AI feature is the most likely way to expose a key again.
- **Never paste a key into the chat.** Claude doesn't need to see it to move it.

---

## Next

Continue with **Adding a Database** (TLDR step 15) when your prototype needs to remember things.
