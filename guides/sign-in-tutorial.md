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

Google sign-in works straight away because it uses Neon's **shared credentials**. That's fine for a prototype, but Google's screen won't show your app's name, and Neon recommends replacing them before a real launch. To show your own app's name, you register your app with Google in Google Cloud Console, by hand; Claude can't do that part. Then ask Claude to add the credentials to Neon Auth.

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
