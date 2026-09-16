# TLDR: Set Up and Start Prototyping

Do one step at a time. Send the messages in the boxes to your **agent**: the AI helper you'll install in VS Code. The help links are there if you get stuck.

This assumes your project is already on GitHub and Vercel already updates its website automatically when you save changes to GitHub.

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

   > Install what you need to connect to GitHub. Then sign me in with GitHub CLI: show me the one-time code and web address, and wait while I approve it. Then set up Git to use this sign-in, and set my Git name and GitHub no-reply email if they aren't set.

   Open the address, enter the code, and approve. **Do it straight away:** the code expires after about 15 minutes. Then ask to see your projects again. [GitHub help](/git-and-github)

6. **Open one project on your computer.** Replace `[project name]` with a name from your GitHub list:

   > Copy my GitHub project called [project name] into this folder. If it's already here, use that copy. Tell me which folder to open in VS Code.

   Open that folder using **File → Open Folder…**, and trust it if asked. Then start a new chat with your agent. From here on, you work inside this project folder.

7. **Ask it to list your Vercel projects.**

   > Show me my projects on Vercel.

   If it can't:

   > Install what you need to connect to Vercel. Then sign me in: show me the web address, and wait while I approve it.

   Open the address and approve. **Do it straight away:** it only works for a few minutes. Then ask to see your projects again, and note the name of the one your site uses.

   Then tell your agent how you publish. Replace `[Vercel project name]` with that name:

   > Add this rule to this project's AGENTS.md, creating the file if it doesn't exist: "Never deploy with Vercel CLI or the Vercel plugin's deploy command. To publish, commit and push to GitHub. This folder's Vercel project is [Vercel project name]. Don't link this folder with vercel link; name the project in each Vercel CLI command instead." Then make sure CLAUDE.md exists and contains the line @AGENTS.md.

   [Vercel help](/vercel)

8. **Run your project on this computer.**

   > Run my project on this computer and give me a link to open it.

   Open the link and try your app. If it won't run, ask the agent to explain and fix the problem. [Setup help](/nodejs)

   If the agent says an API key is missing, or the AI features don't respond, ask:

   > Copy my API key into .env.local from my Vercel project, [Vercel project name]. Name the project in the command instead of linking this folder. If the key isn't in the Development settings, use Production. Don't show me any values, and keep .env.local out of GitHub.

   Then try your app again. If the key comes back empty, Vercel is hiding it: copy it from Google AI Studio instead. [API key help](/api-key)

9. **Ask for a UI audit.** This checks how your app looks and how easy it is to use.

   > Use Playwright to audit my app on computer and phone screens. Show me what's confusing, hard to read, or difficult to use, with screenshots. Suggest the three most useful improvements. Don't change anything yet.

   If Playwright isn't available, ask the agent to help you install it, then ask for the audit again. [Playwright help](/playwright)

10. **Set up your agent for prototyping.** `AGENTS.md` holds instructions for future chats. `CLAUDE.md` tells Claude Code to read them too.

    > Read this guide: https://prototyping-toolkit.vercel.app/prototyping-assistant. Add its full prototyping instructions to this project's AGENTS.md and make sure CLAUDE.md reads them too. Keep any instructions already there.

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

11. **Optional: try Superpowers.** Skip this unless you want extra help structuring your work in Claude Code.

    > Help me install Superpowers and show me how to use it.

    [Superpowers help](/superpowers)

12. **Put your setup to work.** Choose one task: describe your project, draw how it works, or change how it looks. Use the matching prompt in [Put Your Setup to Work](/put-it-to-work). First, ask:

    > Save the current version so we can go back to it. Then help me plan this task.

    Agree on the plan, let the agent work, and check the result yourself. When you're happy:

    > Save my changes to GitHub. Check that Vercel's update worked and give me a link to the result.

    Open the link and check it yourself. For a project description or diagram, look on GitHub.

13. **Look back at how it went.** Ask:

    > Look back over this chat. Summarize what I asked for, what you did, where you guessed, and where I corrected you.

    Then think about what you'd do differently next time, and add anything useful to `AGENTS.md`. [Questions to reflect on](/put-it-to-work#reflect-on-your-workflow)

**Stuck?** If your agent can't find something it just installed, quit VS Code completely (`Cmd + Q` on a Mac, **File → Exit** on Windows) and open it again. Otherwise, tell your agent what happened and ask: “Help me fix this. Give me one step at a time.”
