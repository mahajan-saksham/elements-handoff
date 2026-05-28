# elements by vaidyam

Clinical Ayurveda D2C brand. Pre-launch. Bengaluru.

Next.js 15 website with homepage, Pancha quiz (12 questions, dosha-to-element scoring), and product collection.

## Quick start

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`. Quiz at `/quiz`.

## What's built

- **Homepage** — 7 sections: Hero, Concerns, How It Works, Coffee Wedge, Collection (6 SKUs), Trust + Vaidya, Founder Letter
- **Pancha quiz** — 12 questions (7 prakriti + 5 vikriti), V/P/K dosha scoring with sama baseline prior, element projection, personalized ritual recommendations with citations
- **Chrome** — announcement bar, nav, elemental bar, footer, quiz FAB

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind 4 with `@theme` CSS variables
- Vercel (hosting)

## Project structure

```
app/
  layout.tsx              root layout (fonts, nav, footer)
  page.tsx                homepage (7 sections)
  globals.css             tailwind + brand tokens
  quiz/page.tsx           pancha quiz (intro → 12 questions → results)

components/
  chrome/                 announcement, nav, footer, elemental-bar, quiz-fab
  homepage/               01-hero through 08-founder-letter
  shared/                 product-placeholder, brand-mark
  interactive/            email-capture

lib/
  pancha.ts               quiz data, scoring engine, product recommendations

.claude/docs/             brand bible, stack spec, homepage spec (reference only)
```

## Deploying

Push to GitHub and import at [vercel.com/new](https://vercel.com/new). Auto-detects Next.js, no config needed.

## Working with Claude Code

```bash
npm install -g @anthropic-ai/claude-code
cd elements-handoff
claude
```

CLAUDE.md loads automatically every session. Brand bible and specs are in `.claude/docs/` — reference with `@.claude/docs/01-brand-bible.md` in conversation.
