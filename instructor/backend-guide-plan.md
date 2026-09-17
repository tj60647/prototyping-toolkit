# TLDR Part 2 (Add a Backend) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Part 2 to the TLDR (steps 14–18: keys on the server, database, Google sign-in, file storage, limits), plus five detailed guides that follow those steps word for word. Make Part 1's Gemini-specific wording general.

**Architecture:** The site is VitePress. Pages come only from `guides/`, and `.vitepress/guides.ts` lists every guide (file, address, short name, exact first heading, Previous/Next). The build check in `.vitepress/config.ts` fails when a guide file and that list disagree. This plan adds a second check to the same function: every prompt in the TLDR must appear, word for word, in some other guide. That check is the test harness for every writing task.

**Tech Stack:** VitePress 1.6, TypeScript config, Markdown guides, Vercel (deploys from GitHub; `main` is production).

**Spec:** `instructor/backend-guide-design.md`. Read it before starting. This plan argues from it.

## Global Constraints

- Publish only by committing and pushing to GitHub. Never deploy with Vercel CLI.
- Presentation changes go in `.vitepress/`, never in guide Markdown.
- `instructor/` is never part of the website.
- The TLDR is the outline. Each detailed guide uses the TLDR's step number, heading and prompt, and adds only explanation, a checkpoint, troubleshooting and tips.
- Prompts name no framework and no AI service. Gemini and Vite appear only as examples.
- Step 16 offers Google sign-in only, through Neon's shared credentials.
- Installs are "for all my projects".
- One Neon project per app.
- Writing style: plain words for non-experts, short sentences, no jargon without a definition in "Words You'll See".
- After a push to `main`: confirm the deployment for that commit is READY, then load the production pages signed out.

---

## File Structure

| File | Change | Responsibility |
|---|---|---|
| `.vitepress/config.ts` | Modify | Add a TLDR-prompt check to `checkGuides()`; add a "Part 2: Backend" sidebar group |
| `.vitepress/guides.ts` | Modify | Five new guide entries; `put-it-to-work` gets `next: 'protect-your-keys'` |
| `guides/tldr.md` | Modify | "Part 1" and "Part 2" headings; steps 14–18 |
| `guides/protect-your-keys-tutorial.md` | Create | Step 14 |
| `guides/database-tutorial.md` | Create | Step 15 |
| `guides/sign-in-tutorial.md` | Create | Step 16 |
| `guides/file-storage-tutorial.md` | Create | Step 17 |
| `guides/limits-tutorial.md` | Create | Step 18 |
| `guides/put-it-to-work-tutorial.md` | Modify | "What's Next" points to Part 2 |
| `guides/run-your-project-tutorial.md` | Modify | General "API key" wording |
| `guides/setup-sequence.md` | Modify | Part 2 rows in the sequence and checkpoint tables; general glossary wording |
| `instructor/backend-guide-design.md` | Modify | Record the answers to the pre-writing checks |
| `instructor/tutorial-audit.md` | Modify | Record the decision and the dry-run results |

---

### Task 1: Answer the spec's open checks

The answers decide wording in Tasks 4–7. Don't write guides before this task is done.

**Files:**
- Modify: `instructor/backend-guide-design.md` (the "Checks before or while writing" section)

**Interfaces:**
- Produces: a filled-in "Answers" list that Tasks 4–7 read. Each item has one of the values named below.

- [ ] **Step 1: Vercel Blob private files.** Fetch `https://vercel.com/docs/vercel-blob.md` (or the HTML page if `.md` fails). Search for "private". Record `BLOB_PRIVATE=yes` if private stores or private access are available on the Hobby plan, otherwise `BLOB_PRIVATE=no`.
- [ ] **Step 2: Neon tools install for all projects.** Fetch `https://neon.com/docs/cli/plugins.md` and `https://neon.com/docs/cli/skills.md`. For Claude Code and for Codex, record:
  - the exact command that installs Neon's tools globally;
  - whether a restart is needed.

  Record as `NEON_INSTALL_CLAUDE=<command>`, `NEON_INSTALL_CODEX=<command>`, `NEON_RESTART=yes|no`.
- [ ] **Step 3: Settings onto Vercel.** Fetch `https://neon.com/docs/guides/vercel-overview.md`, and the Neon-managed integration page it links to. Record `VERCEL_SETTINGS=env-add` if the Neon-managed integration needs dashboard clicks, otherwise `VERCEL_SETTINGS=integration`.
- [ ] **Step 4: AI spending caps.** Search the web for "Gemini API spending cap", "OpenAI API usage limit" and "Anthropic API spend limit". Record, for each provider, whether a user can set a monthly cap, with the source link.
- [ ] **Step 5: Shared Google sign-in limits.** Fetch `https://neon.com/docs/auth/guides/setup-oauth.md` and `https://neon.com/docs/auth/production-checklist.md`. Record any limit beyond branding (user caps, rate limits) as `SHARED_GOOGLE_LIMITS=<text or none>`.
- [ ] **Step 6: Record the answers.** Under the checks list in the spec, add a section `## Answers (YYYY-MM-DD)` with one bullet per step above and its source link.
- [ ] **Step 7: Commit.**

```bash
git add instructor/backend-guide-design.md
git commit -m "Spec: record answers to the pre-writing checks"
```

---

### Task 2: Build check that TLDR prompts appear in the guides

**Files:**
- Modify: `.vitepress/config.ts` (the `checkGuides()` function, lines at the end of the file)

**Interfaces:**
- Produces: the build fails with `The TLDR prompt "<first 60 characters>…" isn't in any detailed guide.` when a TLDR prompt is missing from every other guide.

- [ ] **Step 1: Write the failing check.** Temporarily add this line to `guides/tldr.md`, right after step 13's prompt:

```markdown
    > This prompt exists only to test the build check.
```

- [ ] **Step 2: Run the build and confirm it still passes.** No check exists yet, so a pass here proves the test line currently gets through unnoticed.

Run: `npm run build`
Expected: `build complete`.

- [ ] **Step 3: Add the check.** In `.vitepress/config.ts`, at the end of `checkGuides()`, just before its closing brace, add:

```ts
  // Every prompt in the TLDR must appear word for word in a detailed guide,
  // so the two routes can't drift apart.
  const read = (file: string) => readFileSync(new URL(file, dir), 'utf8')
  const tldr = read('tldr.md')
  const others = files.filter((f) => f !== 'tldr.md').map(read)
  for (const [, prompt] of tldr.matchAll(/^\s*> (.+)$/gm)) {
    if (!others.some((text) => text.includes(prompt))) {
      throw new Error(`The TLDR prompt "${prompt.slice(0, 60)}…" isn't in any detailed guide.`)
    }
  }
```

- [ ] **Step 4: Run the build to confirm it fails.**

Run: `npm run build`
Expected: FAIL with `The TLDR prompt "This prompt exists only to test the build check.…" isn't in any detailed guide.`

- [ ] **Step 5: Remove the test line** from `guides/tldr.md`.
- [ ] **Step 6: Run the build to confirm it passes.**

Run: `npm run build`
Expected: `build complete`.

- [ ] **Step 7: Commit.**

```bash
git add .vitepress/config.ts
git commit -m "Build check: every TLDR prompt must appear in a detailed guide"
```

---

### Task 3: Make Part 1 general, and add the Part 2 skeleton

**Files:**
- Modify: `guides/run-your-project-tutorial.md`, `guides/setup-sequence.md`, `guides/tldr.md`, `guides/put-it-to-work-tutorial.md`

**Interfaces:**
- Produces:
  - TLDR headings `## Part 1: Set Up and Start Prototyping` and `## Part 2: Add a Backend`;
  - the Part 2 introduction paragraph;
  - Put It to Work's "What's Next" naming **Protecting Your API Keys** (no link yet, so the build stays green).

- [ ] **Step 1: General API-key wording** in `guides/run-your-project-tutorial.md`. Replace the paragraph starting "Your prototype uses Google's Gemini AI" and the one after it with:

```markdown
If your prototype uses an AI service or another paid API, it needs a secret **API key** to work. Your live site on Vercel already has it. To run your prototype on your own computer, your computer may need a copy of the key too. It goes in a file in your project called `.env.local`.

Settings stored like this, outside your code, are called **environment variables**. A Gemini key, for example, is usually named `GEMINI_API_KEY`.
```

In that guide's Troubleshooting, change the heading **The key downloaded empty.** and its first sentence to:

```markdown
**The key downloaded empty.**
Vercel sometimes hides key values so they can't be downloaded. Copy the key from the service that issued it instead. For a Gemini key, for example:
```

Keep the four numbered AI Studio steps below it. Change "Your Vercel project already has your Gemini API key. It does if the AI features on your live site work." to "Your Vercel project already has any API keys your app needs. It does if your live site works."

- [ ] **Step 2: General glossary** in `guides/setup-sequence.md`. Change `- **API key:** a secret code that lets your app use a service, such as Gemini.` to `- **API key:** a secret code that lets your app use a paid service, such as an AI model.` Make the same change in `guides/run-your-project-tutorial.md`.
- [ ] **Step 3: TLDR headings.** In `guides/tldr.md`, insert `## Part 1: Set Up and Start Prototyping` plus a blank line before the line starting `1. **Set up a folder`. After step 13's last paragraph, and before `**Stuck?**`, insert:

```markdown
## Part 2: Add a Backend

Your prototype will eventually need somewhere to keep data and files, and a way to stop strangers spending the budget behind its paid services. Do step 14 first. Do steps 15 to 17 when your prototype needs them, and step 18 after any of them. Everything here is free within each service's limits.
```

- [ ] **Step 4: Put It to Work's next step.** In `guides/put-it-to-work-tutorial.md`, replace the "What's Next" paragraph with:

```markdown
This is the last guide in Part 1. Use the same pattern for your own ideas: save a starting point, ask, review the plan, check the result, publish, and look back at how it went. Each time, add what you learn to `AGENTS.md`.

When your prototype needs to keep data, store files, or limit who can use it, continue with **Protecting Your API Keys** (TLDR step 14).
```

- [ ] **Step 5: Run the build.**

Run: `npm run build`
Expected: `build complete`. The Part 2 guides don't exist yet, and this task adds no link to one, so no dead link appears.

- [ ] **Step 6: Commit.**

```bash
git add guides/run-your-project-tutorial.md guides/setup-sequence.md guides/tldr.md guides/put-it-to-work-tutorial.md
git commit -m "Make API-key wording general; add TLDR Part 1 and Part 2 headings"
```

---

### Task 4: Step 14, keep your keys on the server

**Files:**
- Create: `guides/protect-your-keys-tutorial.md`
- Modify: `guides/tldr.md`, `.vitepress/guides.ts`, `.vitepress/config.ts`

**Interfaces:**
- Consumes:
  - the TLDR-prompt build check from Task 2;
  - the Part 2 heading from Task 3.
- Produces:
  - address `/protect-your-keys`;
  - `guides.ts` entry `{ file: 'protect-your-keys-tutorial.md', slug: 'protect-your-keys', name: 'Protect Your Keys', title: 'Protecting Your API Keys', prev: 'put-it-to-work', next: null }`, whose `next` becomes `'database'` in Task 5;
  - sidebar group `{ text: 'Part 2: Backend', items: [...] }`.

- [ ] **Step 1: Add step 14 to the TLDR** (the failing test). After the Part 2 introduction paragraph, add:

```markdown
14. **Keep your keys on the server.** A secret key the browser can see can be used by anyone.

    > Check whether any secret key this app uses — for an AI service or any other paid API — could ever reach the browser. Look at how this app is built and deployed, including any build settings that copy environment variables into browser code. If a key could reach the browser, move the calls that use it to server code and remove whatever copies it. Don't show me any key values.

    If the agent changed anything, ask it to run the app and check the AI features still work. [Key help](/protect-your-keys)
```

- [ ] **Step 2: Run the build to confirm it fails.**

Run: `npm run build`
Expected: FAIL. Either the TLDR-prompt check fails, or the dead link `/protect-your-keys` does.

- [ ] **Step 3: Write the guide** `guides/protect-your-keys-tutorial.md`:

```markdown
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
```

- [ ] **Step 4: Register the guide.**
  - In `.vitepress/guides.ts`, change the `put-it-to-work` entry's `next: null` to `next: 'protect-your-keys'`.
  - After that entry, add:

```ts
  {
    file: 'protect-your-keys-tutorial.md',
    slug: 'protect-your-keys',
    name: 'Protect Your Keys',
    title: 'Protecting Your API Keys',
    prev: 'put-it-to-work',
    // Filled in as the Part 2 guides are added.
    next: null,
  },
```

  - In `.vitepress/config.ts`, after the first sidebar group's closing `},` and before `{ text: 'Help', …`, add:

```ts
  { text: 'Part 2: Backend', items: [item('protect-your-keys')] },
```

- [ ] **Step 5: Run the build to confirm it passes.**

Run: `npm run build`
Expected: `build complete`.

- [ ] **Step 6: Commit.**

```bash
git add guides/protect-your-keys-tutorial.md guides/tldr.md .vitepress/guides.ts .vitepress/config.ts
git commit -m "TLDR step 14 and guide: keep your keys on the server"
```

---

### Task 5: Step 15, add a database

**Files:**
- Create: `guides/database-tutorial.md`
- Modify: `guides/tldr.md`, `.vitepress/guides.ts` (new entry; `protect-your-keys.next = 'database'`), `.vitepress/config.ts` (add `item('database')` to the Part 2 group)

**Interfaces:**
- Consumes: the Task 1 answers `NEON_INSTALL_CLAUDE`, `NEON_INSTALL_CODEX`, `NEON_RESTART` and `VERCEL_SETTINGS`.
- Produces: address `/database`; entry `{ file: 'database-tutorial.md', slug: 'database', name: 'Database', title: 'Adding a Database', prev: 'protect-your-keys', next: null }`, whose `next` becomes `'sign-in'` in Task 6.

- [ ] **Step 1: Add step 15 to the TLDR** (the failing test):

```markdown
15. **Add a database.** Do this when your prototype needs to remember things.

    > Install Neon's agent tools for all my projects, and sign me in to Neon: show me the web address and wait while I approve it. Then create a Neon project just for this app, and connect the app to it following Neon's instructions for this app's framework. Add the connection settings to this project on Vercel, copy them into .env.local without showing them, and keep them out of GitHub.

    New to Neon? Create an account on the sign-in page, with GitHub or Google. If you want search by meaning, also ask:

    > Turn on pgvector so this app can search by meaning.

    [Database help](/database)
```

- [ ] **Step 2: Run the build to confirm it fails** (missing prompt, or dead link `/database`).

Run: `npm run build`
Expected: FAIL.

- [ ] **Step 3: Write the guide** `guides/database-tutorial.md`:

```markdown
# Adding a Database

*A setup guide for non-experts. Accurate as of September 2026. If something looks different, check the official page: https://neon.com/docs/get-started/with-an-agent*

*This guide covers step 15 of the [TLDR](/tldr), with more explanation.*

*Using Codex instead of Claude Code? The prompts work the same way. Read "Claude" as "Codex." Where this guide says to start a new session, start a new chat instead.*

---

## What You Are Setting Up

A **database** lets your app remember things between visits: notes, saved items, chat history, anything your users create.

This guide uses **Neon**, which runs a kind of database called Postgres. Its free plan gives each app its own project, with room for 100 projects. A Neon database sleeps when nobody is using it and wakes up by itself on the next visit, so an app you demo once a fortnight still works.

Neon also has **agent tools** that let Claude create and manage your database for you. You install them once, and they work in all your projects.

Neon can also **search by meaning**, with an add-on called pgvector: for example, finding notes similar to one you're reading. You only need it if your app does that.

---

## Words You'll See

- **Database:** where your app keeps information between visits.
- **Neon project:** one app's database and its settings. Use a separate one for each app.
- **Connection settings:** the address and password your app uses to reach its database. They're secret.
- **pgvector:** an add-on that lets a database find items with similar meaning.

---

## Before You Start

- You finished step 14.
- You have a GitHub or Google account to sign in to Neon with.

---

## Step 15: Add a Database

Send:

> Install Neon's agent tools for all my projects, and sign me in to Neon: show me the web address and wait while I approve it. Then create a Neon project just for this app, and connect the app to it following Neon's instructions for this app's framework. Add the connection settings to this project on Vercel, copy them into .env.local without showing them, and keep them out of GitHub.

Then:

1. **Allow the installs.** Claude installs Neon's tools for all your projects.
2. **Sign in.** When Claude shows a web address, open it and sign in to Neon. New to Neon? Create an account there, with GitHub or Google. Do this straight away: the address only works for a short time.
3. **Review the plan.** Claude creates a Neon project named after your app, connects your app to it, and saves the connection settings on Vercel and in `.env.local`.

[If NEON_RESTART=yes, include this paragraph:] **If Claude can't find Neon's tools after installing them,** quit VS Code completely and open it again, start a new session, and send the prompt again.

[If VERCEL_SETTINGS=env-add, include this paragraph:] **About the settings on Vercel.** Claude adds them with Vercel's command-line tool. Vercel may hide their values afterwards, so they can't be read back. That's fine: your app on Vercel still uses them, and your computer has its own copy in `.env.local`.

### If you want search by meaning

Send:

> Turn on pgvector so this app can search by meaning.

---

## Checkpoint

1. Start a new session.
2. Send:

> Which Neon project is this app connected to? Check that the app can reach its database, both from my computer and on Vercel, without showing any connection settings.

**You should see:** the name of a Neon project for this app only, and confirmation that both connections work.

---

## Troubleshooting

**The sign-in address stopped working.**
Ask Claude: *"Start the Neon sign-in again."* Then open the new address straight away.

**Claude used an existing Neon project.**
Ask: *"Create a new Neon project just for this app and connect the app to that one instead."* Sharing a project between apps means a change in one can break the other.

**The app works on my computer but not on Vercel.**
Ask: *"Check that this project on Vercel has the database connection settings, then save my changes to GitHub so Vercel rebuilds."* Vercel only uses new settings after it rebuilds.

---

## Tips

- **One Neon project per app.** The free plan has room for 100.
- **Ask Claude to explain the tables it creates.** For example: *"Show me what this app stores, in plain language."*

---

## Next

Continue with **Adding Sign-In** (TLDR step 16) before you share an app that spends your budget.
```

Before saving:
- resolve the two bracketed paragraphs using the Task 1 answers, deleting the bracketed instruction text;
- if `NEON_INSTALL_CODEX` differs from the Claude route, add a **Using Codex?** note after the numbered list, giving that command in words.

- [ ] **Step 4: Register the guide.**
  - In `.vitepress/guides.ts`, set the `protect-your-keys` entry's `next: 'database'`, and after it add:

```ts
  {
    file: 'database-tutorial.md',
    slug: 'database',
    name: 'Database',
    title: 'Adding a Database',
    prev: 'protect-your-keys',
    next: null,
  },
```

  - In `.vitepress/config.ts`, change the Part 2 group's `items` to `[item('protect-your-keys'), item('database')]`.

- [ ] **Step 5: Run the build to confirm it passes.**

Run: `npm run build`
Expected: `build complete`.

- [ ] **Step 6: Commit.**

```bash
git add guides/database-tutorial.md guides/tldr.md .vitepress/guides.ts .vitepress/config.ts
git commit -m "TLDR step 15 and guide: add a database with Neon's agent tools"
```

---

### Task 6: Step 16, add sign-in and choose who can use the app

**Files:**
- Create: `guides/sign-in-tutorial.md`
- Modify: `guides/tldr.md`, `.vitepress/guides.ts` (`database.next = 'sign-in'`; new entry), `.vitepress/config.ts` (add `item('sign-in')`)

**Interfaces:**
- Consumes: the Task 1 answer `SHARED_GOOGLE_LIMITS`.
- Produces: address `/sign-in`; entry `{ file: 'sign-in-tutorial.md', slug: 'sign-in', name: 'Sign-In', title: 'Adding Sign-In', prev: 'database', next: null }`, whose `next` becomes `'file-storage'` in Task 7.

- [ ] **Step 1: Add step 16 to the TLDR** (the failing test):

```markdown
16. **Add sign-in, and choose who can use the app.** Do this before you share an app that spends your budget.

    > Add Google sign-in with Neon Auth, following Neon's instructions for this app's framework. Add this app's Vercel web address to Neon Auth's trusted domains. Then make the server code that uses my paid API keys refuse any request unless the person is signed in and their email is in an ALLOWED_EMAILS setting on Vercel.

    Then add `ALLOWED_EMAILS` in your Vercel project's settings: the email addresses allowed to use the app, separated by commas. To let anyone with a Google account in, tell your agent instead. Test sign-in on your main Vercel address. [Sign-in help](/sign-in)
```

- [ ] **Step 2: Run the build to confirm it fails.**

Run: `npm run build`
Expected: FAIL.

- [ ] **Step 3: Write the guide** `guides/sign-in-tutorial.md`:

```markdown
# Adding Sign-In

*A setup guide for non-experts. Accurate as of September 2026. If something looks different, check the official page: https://neon.com/docs/auth/overview*

*This guide covers step 16 of the [TLDR](/tldr), with more explanation.*

*Using Codex instead of Claude Code? The prompts work the same way. Read "Claude" as "Codex." Where this guide says to start a new session, start a new chat instead.*

---

## What You Are Setting Up

Once your app is online, anyone with the link can use it, and every use of a paid service spends your budget. **Sign-in** lets you decide who gets in.

This guide uses **Neon Auth**, which comes with the Neon project from step 15. People sign in with their Google account. Your app's server code then checks two things before it uses a paid service:

1. The person is signed in.
2. Their email address is on your **allow list**.

You decide who is on the list. It can be just you, a few testers, or anyone who signs in.

---

## Words You'll See

- **Sign-in:** proving who you are to an app, here with a Google account.
- **Allow list:** the email addresses allowed to use your app.
- **Trusted domain:** a web address Neon Auth is willing to send people back to after they sign in.
- **Shared credentials:** Neon's own registration with Google, which lets Google sign-in work without any setup from you.

---

## Before You Start

- You finished steps 14 and 15.
- You know which email addresses should be allowed in.

---

## Step 16: Add Sign-In, and Choose Who Can Use the App

Send:

> Add Google sign-in with Neon Auth, following Neon's instructions for this app's framework. Add this app's Vercel web address to Neon Auth's trusted domains. Then make the server code that uses my paid API keys refuse any request unless the person is signed in and their email is in an ALLOWED_EMAILS setting on Vercel.

Review Claude's plan, then approve it.

### Choose who can use the app

1. Open your project in the Vercel dashboard, then **Settings → Environment Variables**.
2. Add a variable named `ALLOWED_EMAILS`. For its value, type the allowed email addresses, separated by commas.
3. Save your changes to GitHub, so Vercel rebuilds with the new setting.

**Want anyone with a Google account to use it?** Tell Claude: *"Allow anyone who signs in, instead of checking ALLOWED_EMAILS."* Only do this if you're comfortable with strangers spending your budget.

### About Google's sign-in screen

Google sign-in works straight away because it uses Neon's **shared credentials**. That's fine for a prototype, but Google's screen won't show your app's name, and Neon recommends replacing them before a real launch. [If SHARED_GOOGLE_LIMITS is not "none", add one sentence stating the limit.] To show your own app's name, you register your app with Google in Google Cloud Console, by hand; Claude can't do that part. Then ask Claude to add the credentials to Neon Auth.

### About web addresses

Neon Auth only works on addresses in its trusted list. Your main Vercel address is on it. Vercel's preview addresses change with every update, so test sign-in on your main address.

---

## Checkpoint

1. Open your app's main Vercel address in a private browser window.
2. Try a feature that uses a paid service **without signing in**. It should refuse.
3. Sign in with an email on your allow list. The feature should work.
4. If you can, sign in with an email **not** on the list. It should refuse.

---

## Troubleshooting

**Sign-in fails with "invalid domain".**
The address you're on isn't trusted. Ask: *"Add this web address to Neon Auth's trusted domains: [the address]."* If you're on a preview address, use your main address instead.

**Sign-in works, but the app still refuses me.**
Check that `ALLOWED_EMAILS` has your exact email, and that you saved your changes to GitHub after adding it. Then ask Claude: *"I'm signed in as [email] but the app refuses me. Find out why."*

**Sign-in doesn't work on my computer.**
Ask: *"Allow localhost in Neon Auth for testing on my computer."*

---

## Tips

- **Test signed out after every big change.** It's the quickest way to know your budget is still protected.
- **Keep the list short.** Add people when they need access, and remove them when they're done.

---

## Next

Continue with **Storing Files** (TLDR step 17) if your app handles uploads or images, or with **Checking Your Limits** (TLDR step 18).
```

Before saving, resolve the bracketed sentence using `SHARED_GOOGLE_LIMITS`, and delete the bracket text.

- [ ] **Step 4: Register the guide.**
  - Set `database.next = 'sign-in'`.
  - Add the entry `{ file: 'sign-in-tutorial.md', slug: 'sign-in', name: 'Sign-In', title: 'Adding Sign-In', prev: 'database', next: null }`.
  - Change the Part 2 sidebar items to `[item('protect-your-keys'), item('database'), item('sign-in')]`.
- [ ] **Step 5: Run the build to confirm it passes.**

Run: `npm run build`
Expected: `build complete`.

- [ ] **Step 6: Commit.**

```bash
git add guides/sign-in-tutorial.md guides/tldr.md .vitepress/guides.ts .vitepress/config.ts
git commit -m "TLDR step 16 and guide: Google sign-in with an allow list"
```

---

### Task 7: Steps 17 and 18, store files and check your limits

**Files:**
- Create: `guides/file-storage-tutorial.md`, `guides/limits-tutorial.md`
- Modify: `guides/tldr.md`, `.vitepress/guides.ts`, `.vitepress/config.ts`

**Interfaces:**
- Consumes: the Task 1 answers `BLOB_PRIVATE` and the AI spending-cap findings.
- Produces:
  - `/file-storage`: `{ file: 'file-storage-tutorial.md', slug: 'file-storage', name: 'File Storage', title: 'Storing Files', prev: 'sign-in', next: 'limits' }`
  - `/limits`: `{ file: 'limits-tutorial.md', slug: 'limits', name: 'Limits', title: 'Checking Your Limits', prev: 'file-storage', next: null }`

- [ ] **Step 1: Add steps 17 and 18 to the TLDR** (the failing test):

```markdown
17. **Store files.** Do this when your app handles uploads or images. In your Vercel project, open **Storage** and create a **Blob** store for this project. Then ask:

    > Use this project's Vercel Blob store for [what the files are], following Vercel's instructions for this app's framework. Only let signed-in users upload.

    [File storage help](/file-storage)

18. **Check your limits.** Do this after any of steps 15 to 17.

    > Show me how much of each free plan this app uses: Neon, Vercel (including Blob), and any paid API it calls. Tell me what happens when each limit is reached, and whether any of them could charge me.

    [Limits help](/limits)
```

- [ ] **Step 2: Run the build to confirm it fails.**

Run: `npm run build`
Expected: FAIL.

- [ ] **Step 3: Write** `guides/file-storage-tutorial.md`:

```markdown
# Storing Files

*A setup guide for non-experts. Accurate as of September 2026. If something looks different, check the official page: https://vercel.com/docs/vercel-blob*

*This guide covers step 17 of the [TLDR](/tldr), with more explanation.*

*Using Codex instead of Claude Code? The prompts work the same way. Read "Claude" as "Codex." Where this guide says to start a new session, start a new chat instead.*

---

## What You Are Setting Up

Databases are good at text and numbers, not at files. **Vercel Blob** stores files your app handles, such as uploaded photos or generated images, in your Vercel account. On Vercel's free plan it includes 1 GB of storage and 10 GB of downloads a month, and it stops at the limit instead of charging you.

[If BLOB_PRIVATE=yes:] Files can be private, so only your app can read them. [If BLOB_PRIVATE=no:] Anyone who has a file's web address can open it, so don't store anything private there.

---

## Words You'll See

- **Blob:** a stored file.
- **Blob store:** the place on Vercel where your app's files are kept.
- **Upload:** sending a file from someone's computer to your app.

---

## Before You Start

- You finished steps 14 to 16, so only signed-in users can upload.

---

## Step 17: Store Files

1. Open your project in the Vercel dashboard, then **Storage**.
2. Click **Create**, choose **Blob**, and connect it to this project.
3. Send, replacing `[what the files are]`, for example with "photos people upload":

> Use this project's Vercel Blob store for [what the files are], following Vercel's instructions for this app's framework. Only let signed-in users upload.

Review Claude's plan, then approve it. Save your changes to GitHub when it works on your computer.

---

## Checkpoint

1. On your app's main Vercel address, sign in and upload a file.
2. In the Vercel dashboard, open **Storage**, then your Blob store. The file should be listed.
3. Sign out and try to upload. It should refuse.

---

## Troubleshooting

**Uploads work on my computer but not on Vercel.**
Ask: *"Check that this project on Vercel is connected to the Blob store, then save my changes to GitHub so Vercel rebuilds."*

**Claude says the Blob token is missing on my computer.**
Ask: *"Copy this project's Blob settings from Vercel into .env.local without showing them."*

---

## Tips

- **Limit file sizes.** Ask Claude to reject files over a size you choose, so one upload can't use your whole allowance.

---

## Next

Continue with **Checking Your Limits** (TLDR step 18).
```

Resolve the bracketed `BLOB_PRIVATE` sentence and delete the bracket text.

- [ ] **Step 4: Write** `guides/limits-tutorial.md`:

```markdown
# Checking Your Limits

*A setup guide for non-experts. Accurate as of September 2026.*

*This guide covers step 18 of the [TLDR](/tldr), with more explanation.*

*Using Codex instead of Claude Code? The prompts work the same way. Read "Claude" as "Codex." Where this guide says to start a new session, start a new chat instead.*

---

## What You Are Setting Up

Everything in Part 2 is free within limits. This step shows how close your app is to each limit, and what happens when it gets there.

| Service | Free limit (September 2026) | At the limit |
|---|---|---|
| Neon | 0.5 GB of data and 100 hours of computing per project each month; 60,000 sign-in users a month | The free plan stops; it doesn't charge |
| Vercel Blob | 1 GB of storage and 10 GB of downloads a month | Blob stops working until the next month |
| Your AI service or other paid API | Depends on the service and your plan | [From Task 1 Step 4: one sentence per provider on spending caps, with its link] |

---

## Words You'll See

- **Free plan limit:** how much a service lets you use without paying.
- **Spending cap:** a limit you set yourself, so a paid service stops before it costs more than you want.

---

## Before You Start

- You finished at least one of steps 15 to 17.

---

## Step 18: Check Your Limits

Send:

> Show me how much of each free plan this app uses: Neon, Vercel (including Blob), and any paid API it calls. Tell me what happens when each limit is reached, and whether any of them could charge me.

Claude reports each service's usage. For anything that could charge you, ask Claude how to set a spending cap, and set it yourself in that service's website.

---

## Checkpoint

You can answer three questions: which of your services could charge you, whether each has a cap, and where to check each one's usage.

---

## Tips

- **Check again before sharing your app widely.** More users means more use.
- **Sign-in is your best protection.** Keep the allow list from step 16 short.

---

## Next

This is the last guide in Part 2. When your app needs something new, ask your agent, and follow the same pattern: check, plan, build, test, and look back.
```

Replace the bracketed table cell with the Task 1 Step 4 findings, and delete the bracket text.

- [ ] **Step 5: Register both guides.**
  - Set `sign-in.next = 'file-storage'`.
  - Add the `file-storage` and `limits` entries from the Interfaces above.
  - Change the Part 2 sidebar items to `[item('protect-your-keys'), item('database'), item('sign-in'), item('file-storage'), item('limits')]`.
- [ ] **Step 6: Run the build to confirm it passes.**

Run: `npm run build`
Expected: `build complete`.

- [ ] **Step 7: Commit.**

```bash
git add guides/file-storage-tutorial.md guides/limits-tutorial.md guides/tldr.md .vitepress/guides.ts .vitepress/config.ts
git commit -m "TLDR steps 17-18 and guides: file storage and limits"
```

---

### Task 8: Start page and audit

**Files:**
- Modify: `guides/setup-sequence.md`, `instructor/tutorial-audit.md`

- [ ] **Step 1: Add a Part 2 sequence table** to `guides/setup-sequence.md`, after the existing sequence table:

```markdown
### Part 2: Add a Backend

Do step 14 first, then the others when your prototype needs them.

| TLDR steps | Guide | Full title | What it sets up |
|---|---|---|---|
| 14 | **Protect Your Keys** | *Protecting Your API Keys* | Secret keys kept in server code, away from the browser. |
| 15 | **Database** | *Adding a Database* | A Neon database for this app, and Neon's agent tools. |
| 16 | **Sign-In** | *Adding Sign-In* | Google sign-in, and an allow list of who can use the app. |
| 17 | **File Storage** | *Storing Files* | A Vercel Blob store for uploads and images. |
| 18 | **Limits** | *Checking Your Limits* | How close each free plan is to its limit, and spending caps. |
```

- [ ] **Step 2: Add Part 2 checkpoint rows** at the end of the checkpoint table:

```markdown
| **Protect Your Keys** | Send: *"Build this app the way Vercel does, then search the built files for anything that looks like a secret key. Tell me only whether you found one, not what it is."* | No key found in the built files. |
| **Database** | Send: *"Which Neon project is this app connected to? Check that the app can reach its database, both from my computer and on Vercel, without showing any connection settings."* | A Neon project for this app only, and both connections working. |
| **Sign-In** | Open your main Vercel address in a private window and try a paid feature signed out, then signed in. | Refused when signed out; working when signed in with an allowed email. |
| **File Storage** | Sign in, upload a file, then look for it in your Vercel Blob store. | The file is listed; uploading while signed out is refused. |
| **Limits** | Send the step 18 prompt. | Which services could charge you, and each one's usage. |
```

If any checkpoint wording changed while writing Tasks 4–7, copy the final wording from the guide.
- [ ] **Step 3: Record the decision** in `instructor/tutorial-audit.md`: a Decisions row, "Backend (TLDR Part 2)", pointing to `backend-guide-design.md`, and a "Verify on a class machine" row listing the dry-run checks from the spec's Testing section.
- [ ] **Step 4: Run the build.**

Run: `npm run build`
Expected: `build complete`.

- [ ] **Step 5: Commit.**

```bash
git add guides/setup-sequence.md instructor/tutorial-audit.md
git commit -m "Start page and audit: TLDR Part 2"
```

---

### Task 9: Dry run, review, publish

- [ ] **Step 1: Dry run** on one real prototype, ideally not Vite and not Gemini, in a new branch of that prototype's repo. Follow TLDR steps 14–18 exactly as a student would. Record in `instructor/tutorial-audit.md`:
  - (a) no key in the built files;
  - (b) a signed-out request to the paid API is refused;
  - (c) an email not on `ALLOWED_EMAILS` is refused;
  - (d) an upload lands in Blob;
  - (e) any prompt that needed rewording, with the rewording applied to **both** the TLDR and its guide.
- [ ] **Step 2: Build again** after any rewording.

Run: `npm run build`
Expected: `build complete`.

- [ ] **Step 3: Open a pull request** from `backend-guide` to `main`, and wait for Vercel's preview check to pass. Ask the instructor to review before merging.
- [ ] **Step 4: After the merge:**
  - confirm the production deployment for the merge commit is READY;
  - load `/tldr`, `/protect-your-keys`, `/database`, `/sign-in`, `/file-storage` and `/limits` signed out, and check each returns 200.
