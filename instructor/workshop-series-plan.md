# Plan: A Rough Idea Workshops

*Instructor document. Drafted 2026-09-16 from the "AI Workshop Series" slide deck. Not yet built. The decisions marked **Decide** need an answer first.*

## Goal

Build a site that holds a collection of workshops. The Prototyping Toolkit is one workshop in the collection, next to the others. Each workshop from the slide deck gets the same kind of pages the toolkit has:
- a start page;
- a TLDR;
- detailed guides that follow the TLDR step by step.

The site isn't tied to any school, and it uses the A Rough Idea design system.

## Shape

The root of the site is a container. It introduces A Rough Idea's workshops and links to each one. Each workshop is a self-contained section with its own start page, TLDR, guides and sidebar.

```text
/                          Workshops home: what the series is, how to use it, the sequence
/how-it-works/             1. How It Actually Works: The Context Completion Engine
/ai-as-material/           2. AI as a Material: Modeling Behavior
/ai-as-tool/               3. AI as a Tool: Generative Software
/sharing-prototypes/       4. Sharing AI Prototypes: A Production Pipeline
/toolkit/                  5. Augmenting AI Prototypes: The Prototyping Toolkit (today's site)
/presenting/               6. Presenting Your Prototypes and Process
/practice/                 Shared across workshops: process journal, design artifacts, evaluations
/glossary                  Words used across the series
/going-further/            Future quests: model cards, local models, LibreChat, promptfoo, training
/later/                    Placeholder for later workshops (see "Beyond the introductory sequence")
```

The home page shows the introductory sequence in order, 1 to 6. Every workshop page also works on its own, because people arrive from a QR code in the middle of the series.

### Decide 1: one site, or a hub plus separate sites

| Option | What it means | Cost |
|---|---|---|
| **A. One site, one repository (recommended)** | This repository becomes the collection. The toolkit guides move from `guides/` to `guides/toolkit/`. VitePress shows a different sidebar for each folder. | One move, with redirects. After that, theme, checks, search and deployment are shared. |
| B. A hub site that links out | A new small site at the root. The toolkit stays its own site. Each new workshop is its own repository and site. | Theme, `guides.ts` checks and search are copied into every site and drift apart. Search can't cross workshops. |

Option A is recommended. Either way, **existing addresses keep working**: the slide deck's QR code points to `prototypingtoolkit.aroughidea.com`, so that domain redirects `/x` to `/toolkit/x`.

### Decide 2: the root domain

Use `workshops.aroughidea.com` or `learn.aroughidea.com`. Short addresses such as `/1` to `/6` redirect to each workshop, for slides and QR codes.

## Principles

These carry over from the toolkit, plus two new ones.

- **The TLDR is the outline.** A workshop's detailed guides use the same numbers, headings and prompts as its TLDR, and add only explanation, checkpoints, troubleshooting and tips. The build check that every TLDR prompt appears in a guide applies to each workshop.
- **The assistant is a collaborator.** This applies wherever the site describes AI tools (see the toolkit's thesis statement).
- **Say what happens.** Don't tell readers what they don't need.
- **Plain, current American English.** No jargon without a "Words You'll See" entry.
- **Not tied to a school (new).** See "Removing institution details" below.
- **One voice for learners, another for facilitators (new).** Pages address the learner. Room setup, timings, headcounts and materials go in `instructor/`, which is never built into the site.

## Page pattern for a workshop

Every workshop has the same parts. Workshops 1 to 4 and 6 are about ideas and practice, not setup, so their TLDR is a short sequence of activities rather than install steps.

1. **Start page:** the thesis for this workshop, what you'll make or understand, what to bring, how long it takes, and the two routes (TLDR or the detailed guides).
2. **TLDR:** numbered activities, each with the link or prompt to use and one "check" line.
3. **Detailed guides.** The talk is presented as short, readable explainers with the demo links, and the hands-on parts as step-by-step guides. Each guide has:
   - what this is;
   - words you'll see;
   - before you start;
   - the steps, matching the TLDR;
   - a checkpoint;
   - troubleshooting;
   - reflect;
   - next.
4. **Practice:** what to do before the next workshop, replacing "Homework" as the toolkit did with "Put Your Setup to Work". It ends with journal prompts and links to `/practice/journal`.
5. **Going further:** optional links at the end.

`guides.ts` gains a `workshop` field. The sidebar, previous/next links and the build check are grouped by workshop, and previous/next never cross between workshops, except the "next workshop" link at the end of each.

## The workshops

The content comes from the deck. Every claim marked *(verify)* is checked against its source before it is published.

### 1. How It Actually Works: The Context Completion Engine

- **Thesis:** an LLM predicts the next token from the context, over and over. Almost everything an AI product does is decided by what goes into that context.
- **TLDR activities:**
  1. **Play the next-word game.** Use LLM Explorables, [completions](https://llmexplorables.aroughidea.com/completions/). The recap: context → predict → stop? → append.
  2. **See why it isn't random.** Use the [temperature](https://llmexplorables.aroughidea.com/temperature/) demo. Randomness is a setting someone chose, and it's usually hidden. The note that newer reasoning models manage temperature on the provider's side, with links, is marked *(verify)* and kept dated.
  3. **See that tokens aren't words.** Use the OpenAI tokenizer and the Explorables [tokens](https://llmexplorables.aroughidea.com/tokens/) and [tokens-by-model](https://llmexplorables.aroughidea.com/tokens-by-model/) demos.
  4. **Name the design surfaces:** system instructions, parameters, model, knowledge and tools, with the agent-flow diagram.
  5. **Play in Agent Studio.** In [Agent Studio](https://agentstudio.aroughidea.com), start bare, add a system instruction, change the temperature, add knowledge, standardize your questions, and compare models.
  6. **Reflect:** what surprised you, what broke, and what the context made possible.
- **Before you start:** your own material to test with (a résumé PDF, a short statement of your goals, a paragraph about something you're good at, one about a hobby, and five getting-to-know-you questions).
- **Practice:** keep iterating and journaling, try other agent sandboxes, and watch the 3Blue1Brown video, ideally with others.
- **Guides:** "The Next-Token Loop", "Temperature and Sampling", "Tokens and Vocabularies", "The Design Surfaces", "Using Agent Studio".

### 2. AI as a Material: Modeling Behavior

- **Thesis:** the designer's goals haven't changed, but the material has. Designing an agent means designing its behavior.
- **TLDR activities:**
  1. **Learn how a model is made:** pretraining, fine-tuning and RLHF, with example datasets (Common Crawl, FineWeb, RedPajama, OASST1, Alpaca, HH-RLHF).
  2. **Compare other kinds of models:** reasoning, world, embodied and action models, and what each one learns to predict.
  3. **Bodystorm a letter-writing assistant.** In groups of 3 or 4 (user, assistant, one or two observers), take 10 minutes. The user reveals a new note at minute 5 and a new constraint at minute 8.
  4. **Debrief** with the reflection questions: done, scope, "assistant or chatbot", and who owns the assistant.
  5. **Write a role card:** purpose, behavioral rules, boundaries, what it doesn't do, knowledge, inputs and outputs.
  6. **Test the role in Agent Studio:** the role card goes into the system instructions, and up to one page goes into knowledge.
  7. **Sort each sentence into the right place** with the diagnostic checklist: system instructions, knowledge base, or design documentation.
- **Practice:** iterate the role card at least three times, keeping a system card and a test script for each version.
- **Guides:** "How a Language Model Gets Made", "Bodystorming an Agent", "Writing a Role Card", "Testing a Role in Agent Studio", "Is This in the Right Place?" (the checklist).
- **Printables:** the role card template, a sample goal card and sample rough user notes. They're published as pages that print cleanly, so groups without the physical kit can still run the exercise.
- **Fix from the deck:** on the reasoning-models slide, the "Paper" and "Dataset" labels are swapped.

### 3. AI as a Tool: Generative Software

- **Thesis:** a vibe-coding tool is a chatbot whose output is code, sent to something that runs it. You steer it the way you'd sketch: with intent, revising as you go.
- **TLDR activities:**
  1. **Read what "vibe coding" means,** a term Karpathy coined in 2025.
  2. **Revisit the next-token loop with a code prompt,** comparing chatbot text with a running app.
  3. **Look under the hood** of a generated artifact in ChatGPT Canvas and the Agent Studio vibe-coding demo.
  4. **Build a basic app with no AI features in Google AI Studio,** for example a camera obscura explainer. Use a personal Google account if your school account blocks AI Studio.
  5. **Ask AI Studio for a letter-writing assistant with no guidance, then again with your design intent, a user journey, your role card as system instructions, a test script, and a system diagram behind an info button.**
  6. **Revise it through conversation** at least three times.
- **Practice:** try a different design goal.
- **Guides:** "What Vibe Coding Is", "Chatbots and Vibe-Coding Tools", "Building in AI Studio", "Giving AI Studio Your Design".

### 4. Sharing AI Prototypes: A Production Pipeline

- **Thesis:** a prototype others can open changes the conversation. The pipeline is AI Studio → GitHub → Vercel → the world.
- **TLDR activities:**
  1. **Create accounts** for GitHub and Vercel.
  2. **Publish from AI Studio to a new GitHub repository.**
  3. **Import the repository into Vercel and deploy it.**
  4. **Open the address signed out,** and have someone else try it.
  5. **Revise:** describe a change, save to GitHub, Vercel redeploys, refresh.
  6. **Get an API key.** Path A is the free tier, Path B is prepaid with automatic reload off. Student AI subscriptions don't include an API key *(verify)*. Check the rate limits.
  7. **Add the key as a Vercel environment variable, then redeploy,** using the variable name AI Studio names. Link to the toolkit's "Protect Your Keys" guide, because a Vercel variable alone doesn't keep a key off the browser.
  8. **Swap and share.**
- **Practice:** publish the basic app, then the agent. Record the address, the key path, and any differences between AI Studio and Vercel.
- **Guides:** "Creating Your Accounts", "Publishing from AI Studio to GitHub", "Deploying to Vercel", "Getting an API Key", "Adding Your Key to Vercel", "When It Works in AI Studio but Not on Vercel".
- **Screenshots:** the deck's annotated screenshots are retaken on a neutral account, with no team names, other projects or personal usernames.

### 5. Augmenting AI Prototypes: The Prototyping Toolkit

- **This workshop is the current site,** moved to `/toolkit/`. Its start page gains one paragraph linking back to workshop 4, whose AI Studio → GitHub → Vercel prototype is what the toolkit clones.
- **Update the deck to match the site:** the deck's "Tutorial Sequence" slide still lists Node.js and the API key as separate steps. The site now covers Node.js on a help page and the API key in "Run Your Project".

### 6. Presenting Your Prototypes and Process

- **Thesis:** account for what you built and what it taught you.
- **TLDR activities:**
  1. **Build a deck of up to 7 slides:** process and iteration, the final prototype with a demo link, the outcome, reflections, screenshots and a system diagram. Optionally add a 2 to 3 minute demo video.
  2. **Present for 3 minutes,** discuss for 3 minutes, and hand over within 1 minute.
  3. **Discuss as a group:** themes, insights and next steps.
  4. **Recap the series.**
  5. **Look back through the three frames:** AI as a tool, as a material, and as a medium.
- **Guides:** "Building Your Case-Study Deck", "Presenting and Giving Feedback", "The Series in Review".
- **Facilitator-only (in `instructor/`):** how to split groups and rooms.

### Shared pages

- **Process journal** (`/practice/journal`): dated entries, at least one per workshop; text and images; system diagrams; and a note about choosing a format an AI tool can read ("machine-accessible").
- **Design artifacts** (`/practice/design-artifacts`): design intent, the system (role) card, the system diagram, and evaluations ("design quals").
- **Testing your AI prototype** (`/practice/evaluations`): the deck refers to a reading of this name that isn't in the deck. **Decide 3:** publish that reading here, or link to it. Minimum evaluations are a boundary test, a role-handoff test (for multi-agent systems), and a constraint stress test.
- **Glossary:** built from each guide's "Words You'll See".
- **Going further:** the five future quests (model cards, Ollama, LibreChat, promptfoo, training a small model), npxskillui, and Playwright.

## Removing institution details

These parts of the deck don't carry over:
- the student roster (never published);
- the group name ("Hufflestuff");
- room numbers;
- the Mentimeter editing link;
- "an account that is not UC Berkeley" (becomes "a personal account, if your school's account blocks the tool");
- semester dates and the week grid (sessions are numbered, not dated);
- the "sit at tables by operating system" and headcount instructions (these go to facilitator notes).

These are replaced:
- **Toolkit restyle example:** step 12 of the toolkit TLDR and "Put Your Setup to Work" use `https://design.berkeley.edu/` as the restyle example. It becomes a neutral, stable design system, for example the A Rough Idea design system's public page (*verify its address*), or "a website whose design you like".
- **Education offers:** "check with your school's IT help desk" stays generic.

These deck items are left out:
- **Dated "this week in AI" slides:** Fable 5.1, Muse Spark 1.3, Gemini 3.8 Flash, OpenAI's research-acceleration report, the connectome, the Cybernetic Forests glossary. They go stale quickly and aren't needed to follow the workshops. **Decide 4:** leave them out, or keep a dated "In the news" note in each workshop that instructors refresh.
- **Third-party imagery:** Minions, the cat meme and product screenshots. The Cybernetic Forests glossary and "Models Don't Go Rogue" become plain links in "Going further".

## Theme

The site uses the A Rough Idea design system (`~/repos/aroughidea-design-system`):
- monochrome;
- the Inter typeface;
- no decorative color accents;
- the mark already used by this site.

The deck's yellow-on-aerial-map look belongs to the slides, not the site. **Decide 5:** whether the root home may use one image (for example the aerial map) as a hero image. The design system's "no decorative accents" rule suggests it shouldn't.

The theme stays in `.vitepress/`, as today. Tokens are copied from the design system's `tokens.css`, rather than loaded from its site.

## Build order

Each phase is its own pull request and deploys independently.

1. **Restructure.**
   - Move the guides to `guides/toolkit/`, add the `workshop` field to `guides.ts`, and use a sidebar for each folder.
   - Add the root home and redirects, including `prototypingtoolkit.aroughidea.com/*` → `/toolkit/*`.
   - Extend the build checks to each workshop.
   - **Check:** every existing toolkit address still resolves, both signed out and through the old domain.
2. **Shared pages:** journal, design artifacts, evaluations, glossary, going further.
3. **Workshop 1.**
4. **Workshop 2,** with printables.
5. **Workshop 3.**
6. **Workshop 4,** with retaken screenshots.
7. **Workshop 6,** and the root home's full sequence.
8. **Remove institution details from the toolkit** (the restyle example), and apply the brand token pass.
9. **Instructor notes** in `instructor/`: a facilitator guide for each workshop with timings, materials, room setup and the bodystorming kit.

Each phase is checked the same way:
- `npm run build` passes, including the TLDR prompt checks;
- every page loads signed out on the production address;
- every new page has been read end to end at phone width.

## Beyond the introductory sequence

The deck also contains two later workshops: "AI as Design Material: Where the Design Decisions Are" (critique of the design surfaces) and "Agentic System Design". They get a `/later/` placeholder that describes each in two sentences. They're planned separately, once their decks are complete.

## Out of scope for now

- Accounts, progress tracking or submissions. The site stays static.
- Translating the site.
- Hosting the Agent Studio or LLM Explorables tools. The site only links to them.
