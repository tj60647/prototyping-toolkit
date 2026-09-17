# Design: TLDR Part 2, Add a Backend

*Instructor document. Design approved in conversation on 2026-09-16; not yet built.*

## Goal

Students' prototypes will need somewhere to keep data and files, and a way to stop strangers spending the budget behind the app's paid API keys. Add a second part to the TLDR that covers these, for any framework and any AI service or paid API, at no cost within free plans.

## Decisions

- **Stack: Neon for the database and sign-in, Vercel Blob for files.** Compared on 2026-09-16:
  - **Supabase** does all three in one service, but its free plan allows only 2 active projects and pauses a project after 7 days without use, which breaks occasional demos.
  - **A separate sign-in service** (Auth.js with a GitHub sign-in app) means the most setup and the most secrets.
  - **Neon's free plan** allows 100 projects that wake by themselves when used.
  - **Neon's own file storage** is a public beta in one region (`us-east-2`), so files go to Vercel Blob, which has a hard free cap on Vercel's free plan.
- **One Neon project per app**, so a credential change in one app can't break another.
- **Shape:** the TLDR page gains a Part 2 with steps 14–18. Each step gets a detailed guide that follows the TLDR step for step: same numbers, headings and prompts, plus explanation, a checkpoint and troubleshooting.
- **No assumptions about the app.** Prompts name no framework and no AI service. The agent works out what the app uses and follows the provider's official instructions for it. Examples (Gemini, Vite) appear only as examples.
- **Who can use an app is the student's choice.** The guide shows how to restrict it, not whom to allow.

## Background checks behind the design

- **Keys and the browser:** a variable set in the Vercel dashboard is available both while the site is built and to server code. Build tools can copy it into the JavaScript the browser downloads; AI Studio's Vite apps, for example, include a `define` block that does this. Three of the instructor's AI Studio apps have that block but don't use it in browser code, and their built files contain no key. The risk is latent: a later change can expose the key without warning.
- **Neon Auth** (managed Better Auth; Neon's docs call it beta on the roadmap page and generally available elsewhere):
  - **Setup:** enabled in the Neon dashboard. For a React app, it needs the `@neondatabase/neon-js` package and the `VITE_NEON_AUTH_URL` setting, which is a web address, not a secret.
  - **Sign-in methods:** Google, GitHub and Vercel sign-in work with Neon's shared developer credentials. Email and password needs your own email service for verification links.
  - **Trusted domains:** the app's web address must be on the list, or sign-in fails with "invalid domain".
  - **No built-in allow-list.** Server code verifies the sign-in token against `<auth URL>/.well-known/jwks.json` (EdDSA). The token carries `email` and lasts 15 minutes.
- **Free plans:**
  - **Neon:** 0.5 GB per project, 100 compute-hours per project a month, 60,000 sign-in users a month.
  - **Vercel Blob on Vercel's free plan:** 1 GB of storage and 10 GB of transfer a month. It stops at the limit rather than charging.

## Part 2 steps

Every prompt below goes into the TLDR as written. Each detailed guide uses the same prompt.

### 14. Keep your keys on the server

**For:** everyone. It comes first because sign-in protects nothing while a key can reach the browser.

> Check whether any secret key this app uses — for an AI service or any other paid API — could ever reach the browser. Look at how this app is built and deployed, including any build settings that copy environment variables into browser code. If a key could reach the browser, move the calls that use it to server code and remove whatever copies it. Don't show me any key values.

The guide explains why a key the browser can see is usable by anyone, and gives the Vite `define` block as one example.

### 15. Add a database

**For:** apps that must remember things.

- **In the Vercel dashboard:** **Storage** → create a **Neon** database for this project only.
- **Then send:**

> Connect this app to its Neon database, following Neon's instructions for this app's framework. Copy the connection settings into .env.local without showing them, and keep them out of GitHub.

- **Optional follow-up:**

> Turn on pgvector so this app can search by meaning.

### 16. Add sign-in, and choose who can use the app

**For:** any app you share that spends your budget.

> Add sign-in with Neon Auth using Google or GitHub accounts, following Neon's instructions for this app's framework. Add this app's Vercel web address to Neon Auth's trusted domains. Then make the server code that uses my paid API keys refuse any request unless the person is signed in and their email is in an ALLOWED_EMAILS setting on Vercel.

- **Who gets in:** the student sets `ALLOWED_EMAILS` in the Vercel dashboard, or tells the agent to allow anyone who signs in.
- **Trusted domains:** the guide explains that preview addresses change on every deploy, so sign-in is tested on the main address.

### 17. Store files

**For:** apps that handle uploads or images.

- **In the Vercel dashboard:** **Storage** → create a **Blob** store for this project.
- **Then send:**

> Use this project's Vercel Blob store for [what the files are], following Vercel's instructions for this app's framework. Only let signed-in users upload.

### 18. Check your limits

**For:** everyone who did steps 15–17.

> Show me how much of each free plan this app uses: Neon, Vercel (including Blob), and any paid API it calls. Tell me what happens when each limit is reached, and whether any of them could charge me.

## Detailed guides

| Steps | Guide | Address |
|---|---|---|
| 14 | Protecting Your API Keys | `/protect-your-keys` |
| 15 | Adding a Database | `/database` |
| 16 | Adding Sign-In | `/sign-in` |
| 17 | Storing Files | `/file-storage` |
| 18 | Checking Your Limits | `/limits` |

Each follows the existing guide layout:
- what you're setting up;
- words you'll see;
- before you start;
- the step, with the same heading and prompt as the TLDR;
- a checkpoint;
- troubleshooting;
- tips;
- next.

They join `guides.ts`, the sidebar (a **Part 2: Backend** group), and the start page's sequence table with their TLDR step numbers.

## Changes to Part 1

- *Running Your Project on Your Computer*: "your app's API key (for example, a Gemini key)" instead of assuming Gemini; `GEMINI_API_KEY` and the Google AI Studio fallback become examples.
- Start page word list: the same.
- TLDR: a short Part 2 introduction saying steps 15–17 are "when your prototype needs it".

## Checks before or while writing

- Whether Vercel Blob offers private files on the free plan. If not, step 17 says files are public by address and the guide explains what that means.
- Whether the variables Vercel sets for a Neon database can be downloaded with `vercel env pull`, or are hidden like other secret variables. This decides the fallback in step 15.
- Whether the Vercel-created Neon project gives the student access to Neon Auth in the Neon dashboard.
- Whether major AI providers let students set a spending cap, for step 18.
- Whether Neon's shared Google/GitHub sign-in credentials are acceptable for student prototypes; Neon's production checklist says to replace them before launch. Decide what the guide says.

## Testing

- `npm run build` passes, and every TLDR prompt appears word for word in its guide.
- A dry run on one real prototype, ideally not a Vite or Gemini one, following Part 2 as a student would. Check that:
  - a key never reaches the built files;
  - signed-out requests to the paid API are refused;
  - an email missing from `ALLOWED_EMAILS` is refused;
  - an upload lands in Blob.
- After publishing: the new pages load signed out.

## Out of scope

- Row-level security, roles, organizations and payments.
- Neon Functions, Neon Object Storage and Neon's AI Gateway (all beta).
- Moving existing apps off other databases.
