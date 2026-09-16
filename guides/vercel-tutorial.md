# Managing Vercel Projects with Your Coding Assistant

*A setup guide for non-experts. Accurate as of September 2026. If something looks different, check the official page: https://vercel.com/docs/agent-resources/vercel-plugin*

*Using Codex instead of Claude Code? The prompts work the same way. Read "Claude" as "Codex," and follow the **Using Codex** notes where the steps differ. Where this guide says to start a new session, start a new chat instead: click the new chat button at the top of the Codex panel.*

---

## What You Are Setting Up

Two tools let Claude help you manage the prototypes you deploy on Vercel:

- **Vercel CLI** is Vercel's own command-line tool. It connects your computer to your Vercel account.
- **The Vercel plugin** teaches Claude how Vercel works and adds ready-made commands for common tasks.

Once both are set up, you can ask Claude to:

- Publish your changes by pushing them to GitHub.
- Check whether the build Vercel started after your push worked, and explain any errors.
- List and compare environment variables, such as API keys, without showing their values.

Publishing works the way it does now: your project on GitHub is already connected to Vercel, so every push to GitHub updates your site. You never deploy from VS Code.

---

## Words You'll See

- **Deploy:** put a version of your project online.
- **Build:** the step where Vercel turns your project's files into a working website. A build can succeed or fail.
- **Commit:** save a snapshot of your project's files, with a short message about what changed.
- **Push:** send your commits to GitHub. For your project, pushing is how you publish.
- **Environment variable:** a setting kept outside your code, such as an API key.
- **`AGENTS.md`:** a file of standing instructions that coding assistants read at the start of every session.
- **`CLAUDE.md`:** Claude Code's instructions file. Yours contains one line, `@AGENTS.md`, so Claude reads `AGENTS.md` too.

---

## Before You Start

This guide assumes:

- VS Code is open with a project that you already deploy on Vercel, through its connection to your GitHub repository.
- The Claude Code extension is installed and you are signed in.
- Node.js, Git, and GitHub CLI are installed.
- You have a Vercel account.

---

## Step 1: Have Claude Install Vercel CLI

Send:

> Install Vercel CLI. On a Mac, use Homebrew if it's installed. If it isn't, install it with npm in a way that doesn't need an administrator password. On Windows, use npm. Before each command, explain in plain language what it does.

Claude asks permission before each command. Read what it wants to run, then allow it.

**Not sure whether to allow something?** Ask Claude to explain it in plain language first.

When Claude is done:

1. Quit VS Code completely. Closing a window isn't always enough, because VS Code can keep running in the background.
    - **Mac:** press `Cmd + Q`, or choose **Code → Quit Visual Studio Code** from the menu bar.
    - **Windows:** close every VS Code window, or choose **File → Exit**.
2. Open VS Code again. It usually reopens the folder you had open. If it doesn't, choose **File → Open Recent** and pick your folder.
3. Start a new session: click the spark icon in the left-hand bar, then **New session**.
4. Send:

> Check that Vercel CLI works and tell me its version number.

---

## Step 2: Sign In to Vercel

Claude starts the sign-in, and you finish it in your browser. Send:

> Sign me in to Vercel CLI with vercel login. Show me the web address as soon as it appears, and wait while I approve it. Then list my Vercel projects and tell me which one this folder deploys to. Don't link this folder to Vercel.

Then:

1. Open the web address Claude gives you.
2. Sign in to Vercel if asked, and approve the request.
3. Go back to VS Code and tell Claude you're done.

**Do this straight away.** The sign-in address only works for a few minutes. If it stops working, ask Claude to start the sign-in again.

Write down the name of your Vercel project. You'll use it in Step 5.

---

## Step 3: Install the Vercel Plugin

1. In the Claude Code prompt box, type `/plugins` and press Enter. The **Manage plugins** window opens.
2. On the **Plugins** tab, search for **vercel**.
3. Choose the plugin published by Vercel and click **Install**.
4. When asked where to install it, choose **Install for you**, so it's available in all your Vercel projects.
5. A banner asks you to restart Claude Code. Click it.

The plugin only switches on its automatic Vercel guidance in projects it recognizes, so it stays out of the way elsewhere.

**Using Codex?** Skip the numbered steps above. Instead, send: *"Install the Vercel plugin for Codex by running `npx plugins add vercel/vercel-plugin`."* Allow it when Codex asks. Then quit VS Code completely and open it again.

---

## Step 4: Check That It Works

Start a new session (click the spark icon in the left-hand bar, then **New session**). Type `/` in the prompt box and look for commands from the Vercel plugin, such as **status**, **deploy**, and **env**. Their names may start with `vercel:` or `vercel-plugin:`.

Choose the **status** command and send it. Claude reports your project's recent deployments, environment variables (names only), and domains. If Claude asks which project, give it the name from Step 2.

The plugin also has a **deploy** command. You won't use it. The next step explains why.

**Using Codex?** The Vercel commands may not appear in a `/` menu. Skip this check. The Checkpoint at the end of this guide checks the same thing with a plain request.

---

## Step 5: Keep Publishing Through GitHub

Your site updates whenever you push to GitHub. That keeps one simple rule: what's on GitHub is what's live. Deploying from VS Code would skip GitHub and break that rule.

Tell Claude about this once, so it remembers in every session. Replace `[your Vercel project name]` with the name from Step 2, then send:

> Add this rule to the AGENTS.md file in this project, and create the file if it doesn't exist: "Never deploy with Vercel CLI or the Vercel plugin's deploy command. To publish, commit the changes and push them to GitHub. Vercel deploys automatically from GitHub. This folder's Vercel project is [your Vercel project name]. Don't link this folder with vercel link; name the project in each Vercel CLI command instead." Then make sure a CLAUDE.md file exists in the top level of this project and contains the line @AGENTS.md.

**About `AGENTS.md` and `CLAUDE.md`.** `AGENTS.md` is a shared instructions file that many coding assistants read, including Codex. Claude Code reads a file called `CLAUDE.md` instead. Your `CLAUDE.md` only needs one line, `@AGENTS.md`, which tells Claude to read `AGENTS.md` as well. That way your instructions live in one place and work with either assistant.

When you're ready to publish a change, send:

> Commit my changes with a clear message and push them to GitHub.

**Save a starting point before big changes.** Before you ask for a big change, send: *"Commit my current work with a clear message."* Committing saves a snapshot on your computer without publishing it. If the change goes wrong, you can ask Claude to go back to that snapshot.

---

## Step 6: Use It Day to Day

Here are some prompts to try:

| To do this | Send this |
|---|---|
| Publish a change | *"Commit my changes with a clear message and push them to GitHub."* |
| Check the build after a push | *"I just pushed to GitHub. Did Vercel's build work? If it failed, explain the error in plain language."* |
| See your environment variables | *"List the environment variable names for this Vercel project. Don't show any values."* |
| Find a missing variable | *"Compare the environment variables my code uses with the ones set on Vercel."* |

### Keep secret values out of the chat

When you need to add an API key, don't paste the key into Claude. Instead, ask:

> I need to add my API key to Vercel as an environment variable. Tell me the variable name my code expects and how to add it in the Vercel dashboard.

Then add the variable yourself in the Vercel dashboard, following Claude's steps. That way, the key never enters the chat.

If Claude ever downloads your environment variables to a file such as `.env.local`, ask:

> Make sure `.env.local` and other files with secrets are listed in `.gitignore`, so they never go to GitHub.

---

## Checkpoint

Before moving on, check that Claude can see your Vercel project and knows how to publish.

1. Start a new session: click the spark icon in the left-hand bar, then **New session**.
2. Send:

> Show the status of this Vercel project: its name, the latest deployment, whether it worked, and when it happened. Don't show any environment variable values. Then tell me how you'll publish my changes.

**You should see:**

- Your Vercel project's name and its most recent deployment.
- Whether that deployment worked.
- An answer saying Claude will publish by committing and pushing to GitHub.

**If not:** see Troubleshooting below.

---

## Troubleshooting

**"vercel" is not found or not recognized.**
Quit VS Code completely and open it again. If that doesn't work, ask Claude: *"Vercel CLI was installed but the vercel command isn't found. Fix it."* Then restart VS Code again.

**Claude can't find your Vercel project.**
Ask: *"List my Vercel projects, including the ones in my teams."* Pick the one your site uses. If it isn't listed, check that you signed in to the Vercel account that owns it.

**The sign-in address stopped working.**
Ask Claude: *"Start the Vercel sign-in again."* Then open the new address straight away.

**The Vercel commands don't appear.**
Make sure you restarted Claude Code and started a new session. Then type `/plugins` and check that the Vercel plugin's toggle is on.

**Claude wants to deploy with Vercel CLI.**
Deny the request and say: *"Don't deploy. Commit and push to GitHub instead."* Then check that the rule from Step 5 is in `AGENTS.md`, and that `CLAUDE.md` contains `@AGENTS.md`.

**Something else went wrong.**
Copy the error message, paste it to Claude, and ask: *"Explain this error in plain language and tell me how to fix it."*

---

## Tips

- **Give the build time.** Vercel needs a moment to build your site after you push. If Claude says the build is still running, ask again shortly.
- **You only sign in once.** Sign-in and the plugin work across all your projects.
- **Usage data.** The plugin sends Vercel a daily usage ping and the names of its skills when they're used. It doesn't send your prompts, files, or project names. To turn this off, ask Claude how to set `VERCEL_PLUGIN_TELEMETRY` to `off` on your computer.

---

## Next

When this guide's checkpoint works, continue with **Using Your API Key on Your Computer**, so your prototype can run on your computer as well as online.
