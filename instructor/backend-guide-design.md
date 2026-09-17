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
- **A Neon account and Neon's agent tools, not a Vercel-managed database.** The student signs in to Neon with GitHub or Google, and the agent installs Neon's command-line tool, plugin or skills, and MCP server for all projects. The agent can then create the project, turn on sign-in and add trusted domains itself. A database created through Vercel's Marketplace can't use `neon login` (Neon: "the `neon login` command won't work since the account is Vercel-managed"), so the agent tools would need a Neon API key, and first-time Marketplace terms may need the dashboard.
- **Google sign-in only.** It works with Neon's shared credentials and no setup; GitHub and Vercel sign-in need the student's own OAuth app.
- **Shape:** the TLDR page gains a Part 2 with steps 14–18. Each step gets a detailed guide that follows the TLDR step for step: same numbers, headings and prompts, plus explanation, a checkpoint and troubleshooting.
- **No assumptions about the app.** Prompts name no framework and no AI service. The agent works out what the app uses and follows the provider's official instructions for it. Examples (Gemini, Vite) appear only as examples.
- **Who can use an app is the student's choice.** The guide shows how to restrict it, not whom to allow.

## Background checks behind the design

- **Keys and the browser:** a variable set in the Vercel dashboard is available both while the site is built and to server code. Build tools can copy it into the JavaScript the browser downloads; AI Studio's Vite apps, for example, include a `define` block that does this. Three of the instructor's AI Studio apps have that block but don't use it in browser code, and their built files contain no key. The risk is latent: a later change can expose the key without warning.
- **Neon Auth** (managed Better Auth; Neon's docs call it beta on the roadmap page and generally available elsewhere):
  - **Setup:** the agent can do it from the command line: `neon neon-auth enable`, `neon neon-auth domain add`, `neon neon-auth domain allow-localhost enable`. For a React app, it needs the `@neondatabase/neon-js` package and the `VITE_NEON_AUTH_URL` setting, which is a web address, not a secret.
  - **Sign-in methods:** "Google OAuth is enabled by default with shared credentials for development and testing." "GitHub and Vercel OAuth require custom credentials and are not available with shared credentials." Email and password needs your own email service for verification links.
  - **Shared Google credentials:** fine for a prototype, but the consent screen is generic (Neon: it "can look generic or confusing"). Your own Google OAuth client is set up by hand in Google Cloud Console, with redirect URI `{NEON_AUTH_BASE_URL}/callback/google` and a published, verified consent screen for production. An agent can't do that part.
  - **Trusted domains:** the app's web address must be on the list, or sign-in fails with "invalid domain".
  - **No built-in allow-list** for Google sign-in (the command-line tool can disable email-and-password sign-up, but not restrict Google). Server code verifies the sign-in token against `<auth URL>/.well-known/jwks.json` (EdDSA). The token carries `email` and lasts 15 minutes.
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

> Install Neon's agent tools for all my projects, and sign me in to Neon: show me the web address and wait while I approve it. Then create a Neon project just for this app, and connect the app to it following Neon's instructions for this app's framework. Add the connection settings to this project on Vercel, copy them into .env.local without showing them, and keep them out of GitHub.

- **Sign-in:** a student without a Neon account creates one on the sign-in page, with GitHub or Google.
- **Restart:** after the tools install, the agent may need a new session, or VS Code a restart, to see them. The guide says so.
- **Vercel settings:** if the agent uses `vercel env add`, the guide notes that Vercel then hides Production and Preview values for good unless `--no-sensitive` is passed. That's acceptable for a database address only the deployed app reads.

- **Optional follow-up:**

> Turn on pgvector so this app can search by meaning.

### 16. Add sign-in, and choose who can use the app

**For:** any app you share that spends your budget.

> Add Google sign-in with Neon Auth, following Neon's instructions for this app's framework. Add this app's Vercel web address to Neon Auth's trusted domains. Then make the server code that uses my paid API keys refuse any request unless the person is signed in and their email is in an ALLOWED_EMAILS setting on Vercel.

- **Who gets in:** the student sets `ALLOWED_EMAILS` in the Vercel dashboard, or tells the agent to allow anyone who signs in.
- **Trusted domains:** the guide explains that preview addresses change on every deploy, so sign-in is tested on the main address.
- **Shared credentials:** the guide says that Google sign-in works immediately using Neon's shared credentials, which is fine for a prototype, but the Google screen won't show the app's name. For a public app, the student registers their own Google sign-in app in Google Cloud Console, by hand, and the agent adds the credentials with `neon neon-auth oauth-provider update`.

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
- How Neon's tools install for all projects in Claude Code and in Codex (`neon plugins --agent <agent>`, or skills plus the MCP server), and whether a restart is needed.
- Whether the agent should put settings on Vercel with `vercel env add` or through Neon's own Vercel integration, and whether the Neon-managed integration needs dashboard steps.
- Whether major AI providers let students set a spending cap, for step 18.
- Whether the free plan limits shared Google sign-in in any way beyond branding.

## Answers (2026-09-16)

- **Step 1 — Vercel Blob private files:** `BLOB_PRIVATE=yes`. Vercel's docs describe private stores as a normal store option — "Private Blob stores require authentication for all read and write operations, ensuring files are only accessible to authenticated requests" — and name only minimum SDK/CLI versions, never a pricing-plan restriction. Since the docs don't say which plans have it, this is recorded as available with that uncertainty flagged. Source: [Private Storage](https://vercel.com/docs/vercel-blob/private-storage).
- **Step 2 — Neon tools install for all projects:** `NEON_INSTALL_CLAUDE=neon plugins --agent claude-code --global -y`, `NEON_INSTALL_CODEX=neon plugins --agent codex --global -y`, `NEON_RESTART=yes`. The CLI reference itself doesn't mention a restart (it only says `--global` "installs user-level" so the tools travel to every project), but Neon's own walkthrough does: "just install the Neon plugin and restart Claude Code. That's it." Sources: [CLI: plugins](https://neon.com/docs/cli/plugins), [Getting Started with Claude Skills](https://neon.com/blog/getting-started-with-claude-skills).
- **Step 3 — Settings onto Vercel:** `VERCEL_SETTINGS=env-add`, chosen because the Neon-managed integration needs dashboard clicks, not because `env-add` is otherwise preferred. Connecting it means "Vercel Marketplace → Connectable Accounts → 'Neon'", then clicking **Install** and completing an "Integrate Neon" dialog in the Vercel UI — there's no CLI/API path to the same result. Sources: [Vercel overview](https://neon.com/docs/guides/vercel-overview), [Neon-Managed Integration](https://neon.com/docs/guides/neon-managed-vercel-integration).
- **Step 4 — AI spending caps:** all three let a user cap monthly spend.
  - **Gemini:** yes — "Each tier has a maximum monthly spend limit," enforced at the billing-account level (Tier 1 ≈ $250/month), and the account pauses until the next cycle once it's reached. Source: [Gemini API billing](https://ai.google.dev/gemini-api/docs/billing).
  - **OpenAI:** yes — a project's Settings → Limits page sets a "Monthly spend limit"; it's a soft alert by default, but "a spend limit can monitor spend without enforcement, or you can enforce it as a hard limit so API requests fail after spend reaches the limit." Source: [Managing projects in the API platform](https://help.openai.com/en/articles/9186755-managing-your-work-in-the-api-platform-with-projects).
  - **Anthropic:** yes — each usage tier carries a monthly spend cap (Start tier $500), and "You can also set your own spend limit below your tier's cap to control costs" from Settings → Billing in the Claude Console. Source: [Rate limits](https://platform.claude.com/docs/en/api/rate-limits).
- **Step 5 — Shared Google sign-in limits:** `SHARED_GOOGLE_LIMITS=none`. Neon's OAuth setup and production-checklist pages describe only a branding difference — "Google OAuth is enabled by default with shared credentials for development and testing," and without your own app the consent screen "can look generic or confusing" — with no user cap, rate limit or quota mentioned anywhere on either page. Sources: [Set up OAuth](https://neon.com/docs/auth/guides/setup-oauth), [Production checklist](https://neon.com/docs/auth/production-checklist).

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
