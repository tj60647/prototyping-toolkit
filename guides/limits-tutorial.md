# Checking Your Costs and Limits

*A setup guide for non-experts. Accurate as of September 2026.*

*This guide covers step 18 of the [TLDR](/tldr), with more explanation.*

*Using Codex instead of Claude Code? The prompts work the same way. Read "Claude" as "Codex." Where this guide says to start a new session, start a new chat instead.*

---

## What You Are Setting Up

Every service your app uses has limits. Here, "limits" means three different things:

- **Free plan limits:** how much a free plan includes each month, such as storage, downloads or computing time. Neon and Vercel stop or pause when you reach one; they don't start charging.
- **Spending:** paid services, like the AI service behind your API key, charge for each use. The only thing that stops a bill growing is a spending limit on your account.
- **Rate limits:** how many requests an API accepts per minute or per day. Going over makes requests fail for a while. It doesn't cost money, but your app stops working until the limit resets.

This step shows how close your app is to each limit, what happens when it gets there, and which ones could cost you money.

| Service | Free limit (September 2026) | At the limit |
|---|---|---|
| Neon | 0.5 GB of data and 100 hours of computing per project each month; 60,000 sign-in users a month | When you reach the compute-hours limit, Neon suspends the project until the next billing period or until you upgrade. When you reach the storage limit, changes that would add more data fail until you free space or upgrade. Neon doesn't charge for going over ([Neon free-plan limits](https://neon.com/faqs/free-plan-limits-and-quotas)) |
| Vercel hosting (free Hobby plan) | 100 GB of data transfer, 1 million function calls and 4 hours of CPU time a month, among others | The feature pauses until 30 days have passed. The free plan has no billing, so it can't charge you. It's for personal, non-commercial projects ([Vercel Hobby plan](https://vercel.com/docs/plans/hobby)) |
| Vercel Blob | 1 GB of storage and 10 GB of downloads a month | Blob stops working until the next month |
| Your AI service or other paid API | Depends on the service and your plan | Gemini, OpenAI and Anthropic all have a monthly spending limit on your account, and OpenAI and Anthropic let you set a lower one yourself; check your provider's billing settings ([Gemini](https://ai.google.dev/gemini-api/docs/billing), [OpenAI](https://help.openai.com/en/articles/9186755-managing-your-work-in-the-api-platform-with-projects), [Anthropic](https://platform.claude.com/docs/en/api/rate-limits)). Other services vary. |

---

## Words You'll See

- **Free plan limit:** how much a service lets you use without paying.
- **Spending cap:** a limit you set yourself, so a paid service stops before it costs more than you want.
- **Rate limit:** how many requests a service accepts in a minute or a day. Requests over the limit fail until it resets.

---

## Before You Start

- You finished at least one of steps 15 to 17.

---

## Step 18: Check Your Costs and Limits

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
