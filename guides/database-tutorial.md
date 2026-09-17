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

**If Claude can't find Neon's tools after installing them,** quit VS Code completely and open it again, start a new session, and send the prompt again.

**About the settings on Vercel.** Claude adds them with Vercel's command-line tool. Vercel may hide their values afterwards, so they can't be read back. That's fine: your app on Vercel still uses them, and your computer has its own copy in `.env.local`.

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
