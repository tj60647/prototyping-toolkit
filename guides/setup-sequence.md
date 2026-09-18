# Setting Up Your Prototyping Toolkit

*The order to follow the setup guides in. Accurate as of September 2026.*

**This toolkit sets you up to prototype with a coding assistant, Claude Code or Codex, as a collaborator.** You explore ideas together: it proposes plans and handles the technical side of building, testing, fixing and publishing, and you decide what to make and what to try next. Start by getting your assistant running, then work through the rest of the setup together, one step at a time.

There are two ways through the setup. Both end in the same place.

- **For a quick run-through, follow the [TLDR](/tldr).** It's one page of short steps that you work through with your coding assistant. It links to the detailed guides if you get stuck.
- **For a deeper understanding, follow the detailed guides below, in order.** They explain what each tool is, why you need it, and how to check that it works.

---

## What You'll Have at the End

When you finish these guides, you'll have a working setup on your own computer:

- Your prototype's project open in **VS Code**.
- **A coding assistant**, Claude Code or Codex, working beside it, able to read your project, make changes, and run tools for you.
- Your work saved to **GitHub**, where your **Vercel** site picks it up and publishes it.
- Your prototype running on your computer, as well as online.
- Your assistant able to check your Vercel builds and test your prototype in a browser.
- Your assistant set up to explore ideas with you, rather than rushing to a finished product.

You don't need to know how to program to follow any of these guides.

---

## Before You Begin

You'll need:

- **A Mac or Windows computer** with **VS Code** installed, that you're allowed to install software on. Some school or work computers don't allow this. If yours doesn't, ask your IT help desk.
- **A GitHub account**, with your prototype's project already on GitHub.
- **A Vercel account**, with that GitHub project already connected to it.
- **An account for your coding assistant** (see "Choose Your Coding Assistant" below).
- **An internet connection.** The guides work offline, but installing and signing in don't.
- **Breaks are fine.** You can stop after any guide and pick up later.

---

## Choose Your Coding Assistant

These guides work with either of two coding assistants. Pick one.

| | **Claude Code** | **Codex** |
|---|---|---|
| Made by | Anthropic | OpenAI |
| Account you need | A Claude Pro plan, $20 a month. The free Claude plan doesn't include Claude Code. | A ChatGPT account. Codex is included with ChatGPT plans, including the free plan, which has lower limits. |
| Student offer | — | Verified university students in the US and Canada can claim $100 in Codex credits. |
| First guide | *Installing Claude Code in VS Code* | *Installing Codex in VS Code* |

The guides are written for Claude Code. If you choose Codex, the prompts work the same way: read "Claude" as "Codex," and follow the **Using Codex** notes where the steps differ.

---

## The Sequence

### Part 1: Set Up and Start Prototyping

Follow these guides in order, from top to bottom. Each one covers the same steps as the TLDR, with the same numbers and prompts, and adds explanation, a checkpoint and troubleshooting. **Superpowers** is optional; if you skip it, go straight to **Put It to Work**.

| TLDR steps | Guide | Full title | What it sets up |
|---|---|---|---|
| 1–4 | **Claude Code** or **Codex** | *Installing Claude Code in VS Code* or *Installing Codex in VS Code* | A folder for your projects, and your coding assistant installed, signed in and ready to help. Do only one. |
| 5–6 | **Git and GitHub** | *Setting Up Git and GitHub CLI* | Git and GitHub CLI, so your assistant can save your work to GitHub, and a copy of your GitHub project on your computer. |
| 7 | **Vercel** | *Managing Vercel Projects with Your Coding Assistant* | Vercel CLI, so your assistant can check your builds, plus a rule that it publishes only through GitHub. |
| 8 | **Run Your Project** | *Running Your Project on Your Computer* | Your prototype running on your computer, with a copy of your API key if it needs one. |
| 9 | **Playwright** | *Testing Your Prototype in a Browser with Playwright* | A browser your assistant can use to try out your prototype, starting with an audit of how it looks and works. |
| 10 | **Prototyping Assistant** | *Setting Up Your Coding Assistant for Prototyping* | A plan-first setup and an `AGENTS.md` instructions file, so your assistant explores ideas with you. |
| 11 | **Superpowers** | *Installing Superpowers for Claude Code* | *Optional, for students with software development experience.* A disciplined, step-by-step way of working, suited to well-developed projects more than early prototypes. |
| 12–13 | **Put It to Work** | *Put Your Setup to Work* | Everything together: your assistant writes a README, draws a system diagram, or restyles your app, you publish it, and you reflect on how the workflow went. |

### Part 2: Add a Backend (Advanced, Optional)

Come back to these when your idea needs a backend. Do step 14 first, then the others when your prototype needs them.

| TLDR steps | Guide | Full title | What it sets up |
|---|---|---|---|
| 14 | **Protect Your Keys** | *Protecting Your API Keys* | Secret keys kept in server code, away from the browser. |
| 15 | **Database** | *Adding a Database* | A Neon database for this app, and Neon's agent tools. |
| 16 | **Sign-In** | *Adding Sign-In* | Google sign-in, and an allow list of who can use the app. |
| 17 | **File Storage** | *Storing Files* | A private Vercel Blob store for uploads and images. |
| 18 | **Costs and Limits** | *Checking Your Costs and Limits* | How close each free plan is to its limit, and spending caps. |

---

## How the Guides Work

- **You and your assistant work together.** From the moment it's installed, it runs most commands for you, while you review, approve and steer. Claude asks before each one. Codex runs routine commands in your project without asking, so Codex users save a starting point before each task.
- **Your assistant sets things up.** It installs the tools and starts the GitHub and Vercel sign-ins, and you approve them in your browser. If an installer asks for your computer's password, it opens its own window for it.
- **Restarting VS Code fixes a lot.** VS Code only notices newly installed programs after you quit it completely and open it again. Closing a window isn't always enough. On a Mac, press `Cmd + Q`. On Windows, close every VS Code window or choose **File → Exit**.
- **Start a new session when a guide asks you to.** In Claude Code, click the spark icon in the left-hand bar, then **New session**. In Codex, click the new chat button at the top of the Codex panel.
- **Check before you allow.** If your assistant asks to run a command you're unsure about, ask for a plain-language explanation first.
- **Each guide ends with "Next,"** naming the guide that comes after it.
- **Your assistant installs Node.js when a step needs it.** Node.js is a tool many web projects run on. If that install fails, see **Installing Node.js**.

---

## Checkpoints

Each guide ends with a **Checkpoint** section. Don't move on until it works. Start a new session (or new chat in Codex) before each check. The prompts work in either assistant.

| After this guide | How to check | You should see |
|---|---|---|
| **Claude Code** or **Codex** | Send: *"Which folder are you working in?"* | A short reply that names your Projects folder. |
| **Git and GitHub** | Open your project folder. Send: *"What is this project? Explain it in plain language in a few sentences. Then confirm which GitHub account I'm signed in with, and which GitHub repository this folder is connected to."* | A description of your project, your GitHub username, and your repository's name. |
| **Vercel** | Send: *"Show the status of this Vercel project: its name, the latest deployment, whether it worked, and when it happened. Don't show any environment variable values. Then tell me how you'll publish my changes."* | Your latest deployment and whether it worked, and that your assistant will publish by pushing to GitHub. |
| **Run Your Project** | Send: *"Run my project on this computer and give me a link to open it. If .env.local exists, confirm that Git ignores it, without showing any values."* | A link that opens your app, with its AI features working. |
| **Playwright** | Send: *"Use Playwright to open [your Vercel link]. Take a screenshot and describe the page in two or three sentences."* | A browser window on your site, and a description that matches it. |
| **Prototyping Assistant** | Check that the mode indicator under the prompt box says **Plan** (Codex: **Ask for approval**). Send: *"What instructions are you following in this project?"* | The right mode, and a reply describing your `AGENTS.md` instructions. |
| **Superpowers** | Send: *"Which Superpowers skills do you have? Just list their names."* | Skills such as brainstorming, writing plans, and test-driven development. |
| **Put It to Work** | Send: *"Did Vercel's update work? Give me a link to the result."* | Your finished work on GitHub or on your site. |
| **Protect Your Keys** | Send: *"Open my live Vercel site and search the JavaScript files it sends to the browser for anything that looks like a secret key. Tell me only whether you found one, not what it is."* | No key found in the files your live site sends. |
| **Database** | Send: *"Which Neon project is this app connected to? Check that the app can reach its database, both from my computer and on Vercel, without showing any connection settings."* | A Neon project for this app only, and both connections working. |
| **Sign-In** | Open your main Vercel address in a private window and try a paid feature signed out, then signed in. | Refused when signed out; working when signed in with an allowed email. |
| **File Storage** | Sign in, upload a file, then look for it in your Vercel Blob store. | The file is listed; uploading while signed out is refused. |
| **Costs and Limits** | Send the step 18 prompt. | Which services could charge you, and each one's usage. |

---

## Words You'll See

- **`AGENTS.md`:** a file of standing instructions that coding assistants read at the start of every session.
- **API key:** a secret code that lets your app use a paid service, such as an AI model.
- **Branch:** a separate line of work in Git, so changes don't affect your main version until you merge them.
- **Build:** the step where Vercel turns your project's files into a working website.
- **`CLAUDE.md`:** Claude Code's instructions file. Your project's contains one line, `@AGENTS.md`, so Claude reads `AGENTS.md` too.
- **Global instructions:** an instructions file your assistant reads in every project. Claude Code's is `CLAUDE.md` in the `.claude` folder in your home folder; Codex's is `AGENTS.md` in the `.codex` folder. Your publishing rule goes there.
- **Chat:** Codex's name for a session.
- **Clone:** make a copy of a GitHub repository on your computer.
- **Command:** an instruction for your computer, usually typed in a terminal. Your assistant can run commands for you.
- **Command Palette:** a search box at the top of VS Code for finding any command by name. Press `Cmd + Shift + P` on a Mac or `Ctrl + Shift + P` on Windows, type part of the command's name, choose it from the list, and press Enter.
- **Commit:** save a snapshot of your project's files, with a short message about what changed.
- **Deploy:** put a version of your project online.
- **`.env.local`:** the file on your computer where your environment variables are kept.
- **Environment variable:** a setting kept outside your code, such as an API key.
- **Explorer panel:** the list of your project's files and folders on the left side of VS Code. To open it, press `Cmd + Shift + E` on a Mac or `Ctrl + Shift + E` on Windows, or click the top icon in the left-hand bar.
- **Extension:** an add-on that gives VS Code new features. Claude Code and Codex are extensions.
- **`.gitignore`:** a list of files Git never saves or sends to GitHub.
- **Local address:** a web address, such as `http://localhost:5173`, that only works on your own computer.
- **Merge:** bring a branch's changes into your main version.
- **`npm` and `npx`:** commands that come with Node.js. `npm` installs packages; `npx` runs a tool without installing it permanently.
- **Package:** a ready-made piece of code that a project can use.
- **Permission request:** your assistant asking before it changes a file or runs a command.
- **Plan mode:** a Claude Code setting where Claude describes a plan and waits for your approval before changing anything.
- **Plugin:** an add-on that gives your coding assistant new abilities.
- **Preview link:** a temporary Vercel link that shows a branch before it goes live.
- **Prompt:** a message you send to your coding assistant.
- **Push:** send your commits to GitHub. For your project, pushing is how you publish.
- **Repository:** a project tracked by Git. Your project on GitHub is a repository.
- **Session:** one conversation with your coding assistant. Codex calls it a chat.
- **Skill:** a set of instructions your assistant follows for a particular kind of task.
- **Terminal:** a panel at the bottom of VS Code where you type commands. To open it, choose **Terminal → New Terminal** from the menu bar. On a Mac, the menu bar is at the top of your screen; on Windows, it's at the top of the VS Code window.

---

## If You Get Stuck

1. **Quit VS Code completely and open it again.** On a Mac, press `Cmd + Q`. On Windows, choose **File → Exit**.
2. **Ask your assistant.** Copy the error message, paste it into the chat, and ask: *"Explain this error in plain language and tell me how to fix it."*
3. **Check the guide's Troubleshooting section.** Most guides have one near the end.
4. **Ask for help.** Bring the error message and the step you were on.
