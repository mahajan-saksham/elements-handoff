# Setup

## Prerequisites

- Node.js 20+ (`node --version`)
- Git (`git --version`)
- A terminal (Terminal.app, iTerm, Warp, VS Code terminal)

## Install and run

```bash
cd elements-handoff
npm install
npm run dev
```

Opens at `http://localhost:3000`.

| Page | URL |
|---|---|
| Homepage | `http://localhost:3000` |
| Quiz | `http://localhost:3000/quiz` |

## Deploy to Vercel

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/elements-handoff.git
   git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new), import the repo, click Deploy.

That's it — Vercel auto-detects Next.js. You get a `.vercel.app` URL to share.

## Working with Claude Code

Install:
```bash
npm install -g @anthropic-ai/claude-code
```

Start a session:
```bash
cd elements-handoff
claude
```

CLAUDE.md loads automatically. Brand bible and specs are in `.claude/docs/` — reference them in conversation with `@.claude/docs/01-brand-bible.md`.

## What's next (not yet built)

- **v1.0:** Shopify Buy Button on PDPs, first 3 Letter essays, AI Vaidya MVP
- **v2.0:** Headless Shopify cart, account dashboard, subscription, ritual tracker
- Product photography (see `image-prompts.json` for AI generation prompts)
- Domain + hosting configuration
