# Testing Your Prototype in a Browser with Playwright

*A setup guide for non-experts. Accurate as of September 2026. If something looks different, check the official page: https://github.com/microsoft/playwright-mcp*

*Using Codex instead of Claude Code? The prompts work the same way. Read "Claude" as "Codex," and follow the **Using Codex** notes where the steps differ. Where this guide says to start a new session, start a new chat instead: click the new chat button at the top of the Codex panel.*

---

## What You Are Setting Up

Claude writes code, but it can't see what that code looks like in a browser. **Playwright**, a free tool from Microsoft, fixes that. With the Playwright plugin, Claude can:

- Open your prototype in a browser window you can watch.
- Click buttons, fill in forms, and move through pages like a visitor would.
- Take screenshots and describe what it sees.
- Read error messages from the page that you'd normally never notice.
- Check how your prototype looks at phone size.

---

## Words You'll See

- **Plugin:** an add-on that gives Claude new abilities.
- **Local address:** a web address, such as `http://localhost:5173`, that shows your prototype running on your own computer.
- **Browser console:** a hidden panel in the browser where pages report errors.
- **Screenshot:** a picture of what's on the screen.

---

## Before You Start

This guide assumes:

- VS Code is open with your project folder open.
- The Claude Code extension is installed and you are signed in.
- Node.js is installed.
- Your prototype is published on Vercel, and you have its link.
- Google Chrome is installed. Playwright uses it by default.
- To test your prototype on your computer (Step 4), your API key is set up on your computer in a file called `.env.local`.

---

## Step 1: Install the Playwright Plugin

1. In the Claude Code prompt box, type `/plugins` and press Enter. The **Manage plugins** window opens.
2. On the **Plugins** tab, search for **playwright**.
3. Choose the plugin from Microsoft and click **Install**.
4. When asked where to install it, choose **Install for you**, so it works in all your projects.
5. A banner asks you to restart Claude Code. Click it.

**Using Codex?** Skip the numbered steps above. Instead, send: *"Add the Playwright MCP server to my Codex settings, using the command npx @playwright/mcp@latest. Tell me which file you changed."* Codex asks before changing a settings file outside your project; allow it. Then quit VS Code completely and open it again.

---

## Step 2: Check That It Works

Start a new session (click the spark icon in the left-hand bar, then **New session**) and send:

> Do you have Playwright browser tools available? Answer in one sentence.

Claude should say yes. If it doesn't, see Troubleshooting below.

---

## Step 3: Try It on a Live Page

Pick any page you've already published, such as your prototype's Vercel link, and send:

> Use Playwright to open [paste your link here]. Take a screenshot and describe what you see in two or three sentences.

Claude asks permission before each browser action. Read what it wants to do, then allow it.

**Not sure whether to allow something?** Ask Claude to explain it in plain language first. Deny anything that would delete files, use `sudo`, or change things outside your project folder.

A separate browser window opens. A bar at the top says it's being controlled by automated software. That's Claude. You can watch, but avoid clicking in the window while Claude works.

---

## Step 4: Test Your Prototype on Your Computer

To test changes before publishing them, your prototype needs to run on your computer first. If it uses an AI API key, that key needs to be in your project's `.env.local` file. Claude can set up the rest. Send:

> Start this project on my computer so I can test it. If it needs setup first, do that and explain each step in plain language. Tell me the local address when it's running.

Claude may run a few commands. Allow each one when it asks. When it gives you an address such as `http://localhost:5173`, send:

> Use Playwright to open that address. Click through the main features, take screenshots, and tell me about anything that looks broken or any errors on the page.

---

## Step 5: Build It into How You Work

Here are some checks to try:

| To check this | Send this |
|---|---|
| A visitor's journey | *"Use Playwright to go through these steps as a first-time visitor: [list the steps]. Screenshot each step and tell me where it gets confusing or breaks."* |
| Phone size | *"Use Playwright to view the home page at phone size (390 by 844 pixels). Screenshot it and tell me what doesn't fit."* |
| Hidden errors | *"Open the page with Playwright and report any errors in the browser console, in plain language."* |
| A change you just made | *"Take a screenshot before and after your change so I can compare them."* |

---

## Stay Safe

- **Test your own prototypes.** Point Playwright at pages you made or trust.
- **Don't sign in to personal accounts** in the Playwright browser. It keeps its own saved logins between sessions.
- **Don't give Claude your passwords.** If a test needs a login, use a made-up test account.
- **Keep test files out of GitHub.** If screenshot files or a folder like `.playwright-mcp` appear in your project, ask: *"Add the Playwright output folder to .gitignore."*

---

## Checkpoint

Before moving on, check that Claude can use the browser.

1. Start a new session: click the spark icon in the left-hand bar, then **New session**.
2. Send:

> Use Playwright to open [paste your Vercel link here]. Take a screenshot and describe the page in two or three sentences.

**You should see:** a separate browser window open on your site, and a short description from Claude that matches what's on the page.

**If not:** see Troubleshooting below.

---

## Troubleshooting

**Claude says it doesn't have Playwright tools.**
Make sure you restarted Claude Code and started a new session. Then type `/plugins` and check that the Playwright plugin's toggle is on. **Using Codex?** Ask: *"Check that the Playwright MCP server is in your settings."* Then restart VS Code.

**Claude says a browser is missing.**
Install Google Chrome, or ask Claude: *"Install the browser Playwright needs."*

**"Browser is already in use."**
Another Claude session is using the Playwright browser. Close that session, or ask Claude to close the browser, then try again.

**The page is blank or won't load.**
If you're testing on your computer, the project may have stopped running. Ask: *"Is my project still running? If not, start it again and give me the address."*

**Something else went wrong.**
Copy the error message, paste it to Claude, and ask: *"Explain this error in plain language and tell me how to fix it."*

---

## Tips

- **Browser testing uses a lot of your plan's allowance.** Each page Claude reads adds up. Ask for focused checks rather than "test everything," and keep an eye on the **Usage** section in the Claude Code sidebar (the spark icon in the left-hand bar).
- **Turn it off when you don't need it.** Type `/plugins` and switch the Playwright plugin's toggle off. Switch it back on when you're ready to test. In Codex, ask it to turn the Playwright MCP server off or on in its settings.
- **For advanced users.** Microsoft also offers **Playwright CLI**, a lighter version designed for coding assistants that uses less of your allowance. It takes a few terminal commands to set up: https://github.com/microsoft/playwright-cli

---

## Next

When this guide's checkpoint works, continue with **Setting Up Your Coding Assistant for Prototyping**, so Claude explores ideas with you before changing anything.
