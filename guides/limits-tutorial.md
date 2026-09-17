# Checking Your Limits

*A setup guide for non-experts. Accurate as of September 2026.*

*This guide covers step 18 of the [TLDR](/tldr), with more explanation.*

*Using Codex instead of Claude Code? The prompts work the same way. Read "Claude" as "Codex." Where this guide says to start a new session, start a new chat instead.*

---

## What You Are Setting Up

Everything in Part 2 is free within limits. This step shows how close your app is to each limit, and what happens when it gets there.

| Service | Free limit (September 2026) | At the limit |
|---|---|---|
| Neon | 0.5 GB of data and 100 hours of computing per project each month; 60,000 sign-in users a month | When you reach the compute-hours limit, Neon suspends the project until the next billing period or until you upgrade. When you reach the storage limit, changes that would add more data fail until you free space or upgrade. Neon doesn't charge for going over ([Neon free-plan limits](https://neon.com/faqs/free-plan-limits-and-quotas)) |
| Vercel Blob | 1 GB of storage and 10 GB of downloads a month | Blob stops working until the next month |
| Your AI service or other paid API | Depends on the service and your plan | Gemini, OpenAI and Anthropic all let you set a monthly spending limit in your account's billing settings ([Gemini](https://ai.google.dev/gemini-api/docs/billing), [OpenAI](https://help.openai.com/en/articles/9186755-managing-your-work-in-the-api-platform-with-projects), [Anthropic](https://platform.claude.com/docs/en/api/rate-limits)). Other services vary. |

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
