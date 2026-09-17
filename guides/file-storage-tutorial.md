# Storing Files

*A setup guide for non-experts. Accurate as of September 2026. If something looks different, check the official page: https://vercel.com/docs/vercel-blob*

*This guide covers step 17 of the [TLDR](/tldr), with more explanation.*

*Using Codex instead of Claude Code? The prompts work the same way. Read "Claude" as "Codex." Where this guide says to start a new session, start a new chat instead.*

---

## What You Are Setting Up

Databases are good at text and numbers, not at files. **Vercel Blob** stores files your app handles, such as uploaded photos or generated images, in your Vercel account. On Vercel's free plan it includes 1 GB of storage and 10 GB of downloads a month, and it stops at the limit instead of charging you.

The prompt below keeps your files private, so only your app can read them. If you want files anyone can open, such as images on a public page, say so instead.

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

### Create a Blob store on Vercel

1. Go to [vercel.com](https://vercel.com), sign in, and open your project.
2. In the project's sidebar, open **Storage**.
3. Select **Create Database**, choose **Blob**, then select **Continue**.
4. Set the access to **Private**. Private files can only be read by your app. **Public** files can be opened by anyone who has their web address.
5. Give it a name, such as your app's name, and select **Create a new Blob store**.
6. When asked which environments to include, keep **Production** and **Preview**, and also tick **Development**, so the store works on your computer too.

Vercel then opens the store's page and adds its settings to your project automatically.

### Connect your app to it

Send, replacing `[what the files are]`, for example with "photos people upload":

> Use this project's Vercel Blob store for [what the files are], following Vercel's instructions for this app's framework. Only let signed-in users upload, and keep the files private unless I say otherwise.

Review Claude's plan, then approve it. Save your changes to GitHub when it works on your computer.

---

## Checkpoint

1. On your app's main Vercel address, sign in and upload a file.
2. In your Vercel project, open **Storage** in the sidebar, then your Blob store. The file should be listed.
3. Sign out and try to upload. It should refuse.
4. Copy a file's web address from the Blob store and open it in a private browser window. A private file shouldn't open.

---

## Troubleshooting

**Uploads work on my computer but not on Vercel.**
Ask: *"Check that this project on Vercel is connected to the Blob store, then save my changes to GitHub so Vercel rebuilds."*

**Claude says the Blob token is missing on my computer.**
Your store may not include the **Development** environment. In your Vercel project, open **Storage**, then your Blob store, then its **Projects** tab. Open the menu (**⋯**) next to your project, choose **Update Project Connection**, and tick **Development**. Then ask: *"Copy this project's Blob settings from Vercel into .env.local without showing them."*

**I can't find Storage.**
Make sure you've opened your **project**, not your account's overview page: the sidebar with **Storage** appears once a project is open.

---

## Tips

- **Limit file sizes.** Ask Claude to reject files over a size you choose, so one upload can't use your whole allowance.

---

## Next

Continue with **Checking Your Limits** (TLDR step 18).
