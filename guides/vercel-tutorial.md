# Managing Vercel Projects with Your Coding Assistant

*A setup guide for non-experts. Accurate as of September 2026. If something looks different, check the official page: https://vercel.com/docs/cli*

*This guide covers step 7 of the [TLDR](/tldr), with more explanation.*

*Using Codex instead of Claude Code? The prompts work the same way. Read "Claude" as "Codex," and follow the **Using Codex** notes where the steps differ. Where this guide says to start a new session, start a new chat instead: click the new chat button at the top of the Codex panel.*

---

## What You Are Setting Up

**Vercel CLI** is Vercel's own command-line tool. It connects your computer to your Vercel account, so you can ask Claude to:

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
- **Global instructions:** a file of standing instructions your assistant reads at the start of every session, in every project.

---

## Before You Start

This guide assumes:

- VS Code is open with your project folder open, and the project already deploys on Vercel through its connection to your GitHub repository.
- The Claude Code extension is installed and you are signed in.
- Git and GitHub CLI are installed.
- You have a Vercel account.

---

## Step 7: Ask It to List Your Vercel Projects

Start with what you want, and let Claude find out what's missing. Send:

> Show me my projects on Vercel.

Claude asks permission before each command. Read what it wants to run, then allow it. **Not sure whether to allow something?** Ask Claude to explain it in plain language first.

If Claude lists your projects, you're already set up. Skip to "Tell Claude How You Publish" below.

### If It Can't

If Claude couldn't list your projects, send:

> Install what you need to connect to Vercel, for all my projects. Then sign me in: show me the web address, and wait while I approve it.

Claude installs Vercel CLI if it's missing, along with Node.js if that's missing too, then starts the sign-in.

**If Claude can't find a program it just installed,** quit VS Code completely and open it again. On a Mac, press `Cmd + Q`. On Windows, close every VS Code window, or choose **File → Exit**. Then start a new session and send the prompt again.

When Claude shows you a web address:

1. Open it.
2. Sign in to Vercel if asked, and approve the request.
3. Go back to VS Code and tell Claude you're done.

**Do this straight away.** The address only works for a few minutes. If it stops working, ask Claude to start the sign-in again.

When Claude has finished, ask again:

> Show me my projects on Vercel.

### Tell Claude How You Publish

Your site updates whenever you push to GitHub. That keeps one simple rule: what's on GitHub is what's live. Deploying from VS Code would skip GitHub and break that rule.

Check that your site's project is in the list. Then tell Claude how you publish. You do this once, and it applies to all your projects. Send:

> Add this rule to your global instructions, the file you read in every project: ~/.claude/CLAUDE.md for Claude Code, or ~/.codex/AGENTS.md for Codex. Create the file if it doesn't exist, and keep anything already in it: "Never deploy with Vercel CLI. To publish, commit and push to GitHub."

Claude writes the rule down once, in the instructions file it reads in every project, so it remembers the rule in every session.

Claude works out which Vercel project belongs to this folder from your GitHub repository, and may link the folder to its Vercel project. Linking adds a small `.vercel` folder that Git ignores.

**About global instructions.** Each assistant reads one instructions file in every project, as well as any in the project itself. Claude Code's is `CLAUDE.md` in the `.claude` folder in your home folder; Codex's is `AGENTS.md` in the `.codex` folder. Rules about how you work, like this one, belong there. Instructions about one project go in that project's `AGENTS.md` (TLDR step 10).

---

## Using It Day to Day

Here are some prompts to try:

| To do this | Send this |
|---|---|
| Save a starting point before a big change | *"Save a checkpoint of my project with Git, so we can go back to this version if the next change goes wrong. Tell me in one sentence what you saved."* |
| Publish a change | *"Save my changes to GitHub. Check that Vercel's update worked and give me a link to the result."* |
| Check the build after a push | *"Did Vercel's update work? If it failed, explain the error in plain language."* |
| See your environment variables | *"List the environment variable names for my Vercel project. Don't show any values."* |
| Find a missing variable | *"Compare the environment variables my code uses with the ones set on Vercel."* |

### Keep secret values out of the chat

When you need to add an API key, don't paste the key into Claude. Instead, ask:

> I need to add my API key to Vercel as an environment variable. Tell me the variable name my code expects and how to add it in the Vercel dashboard.

Then add the variable yourself in the Vercel dashboard, following Claude's steps. That way, the key never enters the chat.

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

**Claude doesn't know which Vercel project to use.**
Tell Claude the name of your Vercel project, from the list in Step 7.

**Claude wants to deploy with Vercel CLI.**
Deny the request and say: *"Don't deploy. Save my changes to GitHub instead."* Then ask: *"What does your global instructions file say about publishing?"* If the rule from Step 7 is missing, send the Step 7 prompt again.

**Something else went wrong.**
Copy the error message, paste it to Claude, and ask: *"Explain this error in plain language and tell me how to fix it."*

---

## Tips

- **Give the build time.** Vercel needs a moment to build your site after you push. If Claude says the build is still running, ask again shortly.
- **You only sign in once.** Your sign-in works across all your projects.
- **Usage data.** Vercel CLI sends Vercel anonymous usage data. To turn this off, ask Claude: *"Turn off Vercel CLI telemetry."*

---

## Next

When this guide's checkpoint works, continue with **Running Your Project on Your Computer** (TLDR step 8).
