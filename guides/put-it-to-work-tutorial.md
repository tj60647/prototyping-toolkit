# Put Your Setup to Work

*A first project for non-experts. Accurate as of September 2026.*

*Using Codex instead of Claude Code? The prompts work the same way. Read "Claude" as "Codex," and follow the **Using Codex** notes where the steps differ. Where this guide says to start a new session, start a new chat instead: click the new chat button at the top of the Codex panel.*

---

## What You'll Do

You've set up VS Code, Claude Code, GitHub, and Vercel. Now use them together on your own prototype, and notice how working this way feels. The task is a way to try the workflow; what you learn about the workflow matters as much as the result.

**Choose one** of these three options:

| Option | What you'll make |
|---|---|
| **A. A README** | A clear description of your project that appears on its GitHub page. |
| **B. A system diagram** | A picture of how your prototype and its AI agent work, for people who aren't technical. |
| **C. A design system update** | Your app restyled to follow the design language of another website. |

All three follow the same pattern:

1. Save a starting point.
2. Send Claude a prompt.
3. Review Claude's plan, then approve it.
4. Check the result yourself.
5. Publish it by pushing to GitHub.
6. Look back at how it went.

---

## Before You Start

This guide assumes:

- VS Code is open with your project folder open.
- The Claude Code extension is installed and you are signed in.
- Git and GitHub CLI are installed, and you're signed in to GitHub.
- Your project is connected to Vercel, and you publish by pushing to GitHub.
- **For Option C only:** Playwright is set up, so Claude can look at your app in a browser, and your API key is set up on your computer in `.env.local`.

Claude may start in **Plan mode**, where it describes what it will do and waits for your approval. That's what you want for this guide. Check the mode indicator at the bottom of the prompt box.

**Using Codex?** Keep the permission mode on **Ask for approval**. Because Codex changes files without asking, Step 1's save point matters even more.

---

## Words You'll See

- **Commit:** saving a snapshot of your project's files, with a short message about what changed.
- **Push:** sending your commits to GitHub. Pushing is what publishes your site.
- **Branch:** a separate line of work. Changes on a branch don't affect your live site until you merge them.
- **Merge:** bringing a branch's changes into your main line of work.
- **Preview link:** a temporary Vercel link that shows a branch before it goes live.
- **Explorer panel:** the list of your project's files and folders on the left side of VS Code. To open it, press `Cmd + Shift + E` on a Mac or `Ctrl + Shift + E` on Windows, or click the top icon in the left-hand bar.

---

## Step 1: Save a Starting Point

Before changing anything, save where you are, so you can always get back to it.

1. Start a new session: click the spark icon in the left-hand bar, then **New session**.
2. Send:

> Before we change anything, check whether I have unsaved changes. If I do, commit them with a clear message and push them to GitHub. Tell me what you did in plain language.

Allow the commands when Claude asks.

### Deciding whether to allow a command

Claude asks before running commands. Before you click allow:

- **Read Claude's explanation.** If there isn't one, ask: *"Explain that command in plain language first."*
- **Allow it** if it matches what you asked for.
- **Deny it and ask why** if it doesn't match what you asked for, or if it deploys with Vercel CLI.

---

## Step 2: Do Your Option

### Option A: Write a README

A **README** is the page people see first when they open your project on GitHub. Send:

> Write a README.md for this project's GitHub repository. The readers aren't technical: classmates, instructors, and future employers. Read the project first. Include what the prototype is and who it's for, a link to the live site, how to use it step by step, how it works in plain language (including what the AI part does and where it falls short), the tools used to make it, and anything that's unfinished. If a README.md already exists, keep anything important from it. Don't include API keys or other secrets. Don't invent features. If you're unsure about something, ask me.

Then:

1. **Review the plan** and approve it.
2. **Read the result.** Open `README.md` in the Explorer panel. To see it formatted, press `Cmd + Shift + V` on a Mac or `Ctrl + Shift + V` on Windows.
3. **Check the facts.** Claude may guess about things it can't see in the code. Fix anything wrong by telling Claude, for example: *"The app is for first-year students, not teachers. Update the README."*
4. **Publish it:** send *"Commit the README and push it to GitHub."*
5. **Look at it on GitHub.** Open your repository's page in the browser. The README appears below the list of files.

---

### Option B: Make a System Diagram

A **system diagram** shows how something works, not what it looks like. Send:

> Make a system diagram that explains how my prototype and its AI agent work, for people who aren't technical. Read the project first. Save it as docs/system-diagram.md, with a Mermaid diagram and a short plain-language walkthrough underneath. Show where information comes in (such as what the user types), which parts always behave the same way and which parts use AI and can vary, what information the AI model is given and what it isn't, and what the user gets back. Use everyday words instead of technical terms, and keep the diagram to about 8 to 12 boxes. If something about how it works isn't clear from the code, ask me instead of guessing.

Then:

1. **Review the plan** and approve it.
2. **Read the walkthrough.** Open `docs/system-diagram.md` in the Explorer panel. VS Code may show the diagram as text rather than a picture. That's normal.
3. **Publish it:** send *"Commit the system diagram and push it to GitHub."*
4. **Look at it on GitHub.** Open your repository in the browser, then the `docs` folder, then `system-diagram.md`. GitHub draws the diagram automatically.
5. **Test it on a person.** Show it to someone who hasn't seen your project and ask them to explain it back to you. Where they get confused, ask Claude to simplify that part, then publish again.

**Optional:** send *"Add a link to the system diagram in the README."*

---

### Option C: Apply a Design System

This option restyles your app to follow the design language of another website. It's the biggest option: Claude analyzes the website, writes up its design rules, restyles your app, and then checks the result in a browser.

#### C1. Work on a branch (recommended)

A branch keeps your live site unchanged until you're happy with the result. Send:

> Create a new branch called design-system-update and switch to it. Explain in one or two sentences what that means.

#### C2. Send the prompt

Copy this prompt exactly and send it:

```
Use a design-system extraction or design-system reverse-engineering tool to analyze:
https://design.berkeley.edu/
Then update my existing application so that its visual design follows the design system you extracted.
Do not simply look at the reference site and imitate it by eye. Use an appropriate extraction tool or agent skill, such as SkillUI, a design-system extractor, or an equivalent tool that analyzes the site's actual CSS, DOM, components, and visual properties.
First, extract and document the site's design system, including as much of the following as the tool can reliably identify:

* color palette and semantic color roles
* typography, including font families, scale, weights, line heights, and hierarchy
* spacing and layout system
* grid, containers, and responsive breakpoints
* borders, radii, and shadows
* buttons, links, form controls, cards, navigation, and other recurring component patterns
* interaction states such as hover, focus, and active
* motion and transitions where relevant
* other recurring visual rules that contribute to the site's overall look and feel

Save the extracted design-system information in the project so it is available as an AI-legible reference for future work.
Next, apply that system to my application. Preserve the application's existing content, information architecture, functionality, and user flows. Change the presentation layer and component styling so that the application feels as though it belongs to the same design language as the reference site.
Translate the design system rather than copying the Berkeley site itself. Do not copy Berkeley text, photographs, logos, trademarks, or other site-specific content. Where my application contains components that do not exist on the reference site, infer an appropriate treatment from the extracted design system.
Reuse shared tokens and components rather than introducing one-off styles. Where appropriate, consolidate existing styles into reusable design tokens or shared components.
After implementation, run the application and visually inspect representative screens at desktop and mobile sizes. Fix obvious inconsistencies, regressions, contrast problems, overflow, and responsive-layout issues.
At the end, briefly report:

1. which extraction tool or skill you used;
2. what design-system artifacts it produced;
3. the major design rules you inferred;
4. which parts of the application you changed;
5. any aspects of the reference site's design that could not be reliably extracted or reproduced.
```

#### C3. What to expect

- **A plan first.** Claude describes its approach and waits. Check that the plan names an extraction tool, saves the design rules in your project, and keeps your app's content and features. Then approve it.
- **Requests to run a tool from the internet.** Claude will likely run an extraction tool such as SkillUI, which it downloads with a command starting with `npx`. That's expected. These tools come from independent developers, not from Anthropic. Allow it if it matches the plan.
- **Your app running on your computer.** Claude starts your app so it can look at it. This uses the API key in your `.env.local` file. Never paste the key into the chat.
- **Browser windows opening.** That's Playwright. Let Claude work without clicking in them.
- **A long run.** This can take a while and uses a lot of your plan's allowance. Check the **Usage** section in the Claude Code sidebar before you start. In Codex, type `/status`.

#### C4. Review the result

1. **Read Claude's report.** It lists the tool it used, the files it created, the design rules it found, what it changed, and what it couldn't reproduce.
2. **Look at your app yourself.** Ask: *"Give me the local address so I can open my app in my own browser."* Try it at full width, then make the window narrow to see the phone layout.
3. **Click through everything.** Your app should still do everything it did before.
4. **Check for copied content.** There should be no Berkeley logos, photographs, or text in your app. If there are, ask Claude to remove them.
5. **Check the fonts.** Some sites use fonts that need a paid license. If Claude's report mentions one, send: *"Replace that font with a similar free font, and note the substitution in the design-system files."*

To fix something, describe it plainly: *"The buttons on the results page don't match the rest. Fix them using the design system."*

#### C5. Publish

1. Send: *"Commit these changes with a clear message and push the branch to GitHub."*
2. Vercel builds a **preview link** for the branch. Send: *"Did the Vercel build for this branch work? Give me the preview link."*
3. Open the preview link and check it one more time.
4. When you're happy, send: *"Merge the design-system-update branch into main and push it to GitHub."* Your live site updates.

**Skipped the branch?** Your changes go live as soon as you push, so do C4 carefully before publishing.

---

## Checkpoint

Before you call it done, check that your work is published.

1. Send:

> Did the Vercel build for my latest push work? Give me the link where I can see the result.

2. Open the link, or your repository's page on GitHub for Options A and B.

**You should see:**

- **Option A:** your new README on your repository's GitHub page.
- **Option B:** your diagram drawn as a picture in `docs/system-diagram.md` on GitHub.
- **Option C:** your restyled app on your live site, or on the preview link if you haven't merged yet.

---

## Reflect on Your Workflow

The setup is done once. The workflow is what you'll repeat on every idea, so take a few minutes to look at how it went.

Start by asking Claude for a record of the session:

> Look back over this session. Summarize what I asked for, what you did, where you guessed, and where I corrected you.

Then think about these questions. Writing a sentence or two for each makes the answers easier to use next time.

- **Asking.** Did your first prompt say what you meant? What would you say differently now?
- **Planning.** Did Claude's plan match what you wanted? What did you change before approving it?
- **Accuracy.** What did Claude get right? Where did it guess or get something wrong, and how did you notice?
- **Control.** When did you allow, deny, or redirect Claude? Would you give it more or less freedom next time?
- **Checking.** How did you check the result: on your computer, with Playwright, or on GitHub or Vercel? What would you check sooner next time?
- **Save points.** Did you need to go back to one? If you did, was it easy?
- **Cost.** How much of your plan's allowance did the task use? Was it worth it?

For Option C, a before-and-after screenshot of one screen and Claude's final report make the comparison easier.

### Turn what you learned into instructions

If Claude did something you don't want again, or you had to repeat yourself, add it to `AGENTS.md` so the next session starts better. For example:

> Add this to AGENTS.md: "Ask me who the page is for before changing its wording."

Start a new session afterward, so Claude reads the updated file.

---

## Troubleshooting

**Claude stopped because I reached my usage limit.**
Wait for the limit to reset. The **Usage** section in the Claude Code sidebar shows when. In Codex, type `/status`. If you have student credits, Codex can use them to keep going. Then start a new session and send: *"Continue the work from my last session. Check the project's current state first."*

**My app won't start on my computer.**
Ask: *"Explain in plain language why the app won't start, and what you need from me."* If the problem is a missing API key, set up your key in `.env.local` first, then try again.

**The Vercel build failed after I pushed.**
Ask: *"The Vercel build failed. Explain the error in plain language and fix it."* Then push again.

**I don't like the result and want to start over.**
If you used a branch, send: *"Switch back to main and delete the design-system-update branch."* Your live site was never changed. Otherwise, ask Claude to go back to your last save point, and read its explanation carefully before allowing it. In Claude Code, you can also hover over an earlier message and click the **rewind** button.

**Something else went wrong.**
Copy the error message, paste it to Claude, and ask: *"Explain this error in plain language and tell me how to fix it."*

---

## Tips

- **Read before you approve.** Claude's plan is your best chance to catch a misunderstanding.
- **Claude can be wrong.** It sometimes guesses. Check anything that matters.
- **Keep the design files.** In Option C, Claude saves the design rules in your project. Mention them in future requests, for example: *"Add a settings page that follows our design-system files."*

---

## What's Next

This is the last guide. You now have a complete setup for prototyping with Claude. Use the same pattern for your own ideas: save a starting point, ask, review the plan, check the result, publish, and look back at how it went. Each time, add what you learn to `AGENTS.md`.
