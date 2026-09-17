# TLDR: Set Up and Start Prototyping

Do one step at a time. Send the messages in the boxes to your **agent**: the AI helper you'll install in VS Code. The help links are there if you get stuck.

This assumes your project is already on GitHub and Vercel already updates its website automatically when you save changes to GitHub.

## Part 1: Set Up and Start Prototyping

1. **Set up a folder for your projects.** In Finder (Mac) or File Explorer (Windows), create a folder called `Projects` in your home folder. Avoid Documents and Desktop, which iCloud Drive or OneDrive may sync. If you already have a folder for your projects, use that one.

2. **Open your projects folder in VS Code.** Open VS Code, then use **File → Open Folder…** to open the folder from step 1. If VS Code asks whether you trust the authors, click **Yes, I trust the authors**. Your agent won't work otherwise.

3. **Choose and install your agent.** Pick **Codex** by OpenAI or **Claude Code** by Anthropic.

   **Check student access using your edu email before buying a plan.** For Codex, follow [Codex for Students](https://learn.chatgpt.com/community/students) to create or sign in to your ChatGPT account and verify your student status. For Claude Code, check [your edu account's Claude access](https://support.claude.com/en/articles/11139144-use-claude-for-education-at-your-university) and ask your school's IT help desk whether it includes Claude Code.

   In VS Code, click **Extensions** (the four-squares icon on the left). Search for your chosen agent, click **Install**, open its chat panel, and sign in.

   **For more information about accounts, installation, and signing in, see the [Codex tutorial](/codex) or the [Claude Code tutorial](/claude-code).**

4. **Ask your agent where it is.**

   > Which folder are you working in?

   Check that it names the folder you just opened.

5. **Ask it to list your GitHub projects.**

   > Show me my projects on GitHub.

   If it can't:

   > Install what you need to connect to GitHub, for all my projects. Then sign me in with GitHub CLI: show me the one-time code and web address, and wait while I approve it. Then set up Git to use this sign-in, and set my Git name and GitHub no-reply email if they aren't set.

   Open the address, enter the code, and approve. **Do it straight away:** the code expires after about 15 minutes. Then ask to see your projects again. [GitHub help](/git-and-github)

6. **Open one project on your computer.** Replace `[project name]` with a name from your GitHub list:

   > Clone my GitHub project called [project name] into this folder (make a copy connected to GitHub). If it's already here, use that copy. Tell me which folder to open in VS Code.

   Open that folder using **File → Open Folder…**, and trust it if asked. Then start a new chat with your agent. From here on, you work inside this project folder.

7. **Ask it to list your Vercel projects.**

   > Show me my projects on Vercel.

   If it can't:

   > Install what you need to connect to Vercel, for all my projects. Then sign me in: show me the web address, and wait while I approve it.

   Open the address and approve. **Do it straight away:** it only works for a few minutes. Then ask to see your projects again.

   Then tell your agent how you publish. You do this once, and it applies to all your projects:

   > Add this rule to your global instructions, the file you read in every project: ~/.claude/CLAUDE.md for Claude Code, or ~/.codex/AGENTS.md for Codex. Create the file if it doesn't exist, and keep anything already in it: "Never deploy with Vercel CLI. To publish, commit and push to GitHub."

   [Vercel help](/vercel)

8. **Run your project on this computer.**

   > Run my project on this computer and give me a link to open it.

   Open the link and try your app. If it won't run, ask the agent to explain and fix the problem. [Setup help](/nodejs)

   If the agent says an API key is missing, or the AI features don't respond, ask:

   > Copy my API key into .env.local from this project's Vercel project. If the key isn't in the Development settings, use Production. Don't show me any values, and keep .env.local out of GitHub.

   Then try your app again. If the key comes back empty, Vercel is hiding it: copy it from Google AI Studio instead. [API key help](/run-your-project)

9. **Ask for a UI audit.** This checks how your app looks and how easy it is to use.

   > Use Playwright to audit my app on computer and phone screens, using the Laws of UX (https://lawsofux.com/) as your reference. Show me what's confusing, hard to read, or difficult to use, with screenshots, and name the law each problem relates to. Suggest the three most useful improvements. Don't change anything yet.

   If the agent says it doesn't have Playwright, ask:

   > If you don't have Playwright browser tools, help me set them up for all my projects. In Claude Code, walk me through installing Microsoft's Playwright plugin from /plugins, choosing Install for you. In Codex, add the Playwright MCP server (npx @playwright/mcp@latest) to my global Codex settings yourself. Then tell me exactly what to restart before I ask for the audit again.

   Follow its steps, restart, then ask for the audit again. [Playwright help](/playwright)

10. **Set up your agent for prototyping.** `AGENTS.md` holds instructions for future chats. `CLAUDE.md` tells Claude Code to read them too.

    > Read the section at https://prototyping-toolkit.vercel.app/prototyping-assistant#add-your-prototyping-instructions. Add the prototyping instructions from its copyable prompt to this project's AGENTS.md and make sure CLAUDE.md reads them too. Keep any instructions already there.

    Three settings at the bottom of the prompt box change how your agent works:

    | Setting | What it changes | Claude Code | Codex |
    |---|---|---|---|
    | **Permission mode** | How much it asks before acting | Click the mode. Use **Plan**: it describes a plan and waits for your OK. **Manual** asks before each edit. Avoid **Edit automatically** and **Auto** for now. | Click the permissions menu. Use **Ask for approval**. Avoid **Full access**. |
    | **Model** | Which AI model answers | Click the model name, or type `/model`. | Click the model menu. |
    | **Effort** | How long it thinks first. Higher is slower and uses more of your plan. | In the mode menu, or type `/effort`. | In the model menu. |

    Leave the model and effort as they are unless a task is hard. To make every new Claude Code chat start in Plan mode, open VS Code settings (`Cmd + ,` on a Mac, `Ctrl + ,` on Windows), search for **Claude Code permission**, and set **Initial Permission Mode** to **plan**.

    Then start a new chat and ask:

    > What instructions are you following in this project?

    It should mention both the prototyping instructions and the publishing rule from step 7. [Full setup guide](/prototyping-assistant)

11. **Optional: try Superpowers.** Skip this unless you already have experience developing software and want a disciplined software-engineering assistant in Claude Code. Superpowers suits well-developed projects better than early prototyping. If you try it, start with one project; if you like it, you can install it for all your projects later.

    > Help me install Superpowers for this project only, and show me how to use it.

    [Superpowers help](/superpowers)

12. **Put your setup to work.** Choose one task: describe your project, draw how it works, or change how it looks. Use the matching prompt in [Put Your Setup to Work](/put-it-to-work). First, ask:

    > Save the current version so we can go back to it. Then help me plan this task.

    Agree on the plan, let the agent work, and check the result yourself. When you're happy:

    > Save my changes to GitHub. Check that Vercel's update worked and give me a link to the result.

    Open the link and check it yourself. For a project description or diagram, look on GitHub.

13. **Look back at how it went.** Ask:

    > Look back over this chat. Summarize what I asked for, what you did, where you guessed, and where I corrected you.

    Then think about what you'd do differently next time, and add anything useful to `AGENTS.md`. [Questions to reflect on](/put-it-to-work#step-13-look-back-at-how-it-went)

## Part 2: Add a Backend

Your prototype will eventually need somewhere to keep data and files, and a way to stop strangers spending the budget behind its paid services. Do step 14 first. Do steps 15 to 17 when your prototype needs them, and step 18 after any of them. Everything here is free within each service's limits.

14. **Keep your keys on the server.** A secret key the browser can see can be used by anyone.

    > Check whether any secret key this app uses — for an AI service or any other paid API — could ever reach the browser. Look at how this app is built and deployed, including any build settings that copy environment variables into browser code. If a key could reach the browser, move the calls that use it to server code and remove whatever copies it. Don't show me any key values.

    If the agent changed anything, ask it to run the app and check the AI features still work. [Key help](/protect-your-keys)

15. **Add a database.** Do this when your prototype needs to remember things.

    > Install Neon's agent tools for all my projects, and sign me in to Neon: show me the web address and wait while I approve it. Then create a Neon project just for this app, and connect the app to it following Neon's instructions for this app's framework. Add the connection settings to this project on Vercel, copy them into .env.local without showing them, and keep them out of GitHub.

    New to Neon? Create an account on the sign-in page, with GitHub or Google. If you want search by meaning, also ask:

    > Turn on pgvector so this app can search by meaning.

    [Database help](/database)

16. **Add sign-in, and choose who can use the app.** Do this before you share an app that spends your budget.

    > Add Google sign-in with Neon Auth, following Neon's instructions for this app's framework. Add this app's Vercel web address to Neon Auth's trusted domains. Then make the server code that uses my paid API keys refuse any request unless the person is signed in and their email is in an ALLOWED_EMAILS setting on Vercel.

    Then add `ALLOWED_EMAILS` in your Vercel project's settings: the email addresses allowed to use the app, separated by commas. To let anyone with a Google account in, tell your agent instead. Then ask your agent to save your changes to GitHub. Test sign-in on your main Vercel address. [Sign-in help](/sign-in)

17. **Store files.** Do this when your app handles uploads or images. In your Vercel project, open **Storage** and create a **Blob** store for this project, with its access set to **Private**. Then ask:

    > Use this project's Vercel Blob store for [what the files are], following Vercel's instructions for this app's framework. Only let signed-in users upload, and keep the files private unless I say otherwise.

    [File storage help](/file-storage)

18. **Check your limits.** Do this after any of steps 15 to 17.

    > Show me how much of each free plan this app uses: Neon, Vercel (including Blob), and any paid API it calls. Tell me what happens when each limit is reached, and whether any of them could charge me.

    [Limits help](/limits)

**Stuck?** If your agent can't find something it just installed, quit VS Code completely (`Cmd + Q` on a Mac, **File → Exit** on Windows) and open it again. Otherwise, tell your agent what happened and ask: “Help me fix this. Give me one step at a time.”
