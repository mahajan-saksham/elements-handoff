# elements by vaidyam — Claude Code project

This is the operational rules file for working on the elements by vaidyam codebase.
Read this on every session. For deep references, see @.claude/docs/.

## Project summary

Clinical Ayurveda D2C + Q-commerce brand, pre-launch, based in Bengaluru.
Building a brand-led website (Next.js) + Pancha quiz + 6 PDPs + Letter editorial.
Post-v0.1, adds Shopify cart and (v2.0) an AI Vaidya.
Primary persona: Bengaluru Burnout — 32-year-old metro tech worker, 50% acquisition weight.

## Tech stack — LOCKED, no alternatives

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind 4 (with @theme CSS variables)
- Motion (animation library — formerly Framer Motion)
- Lenis (smooth scroll)
- Vercel (hosting)
- Shopify Storefront API (v1.0+ only — not in v0.1)
- Claude API for AI Vaidya (v2.0+ only)

If you find yourself suggesting Astro, Pages Router, Tailwind 3, GSAP, Locomotive Scroll, Three.js, or any other framework — STOP. Re-read this section. The stack is decided.

## Phased launch — do not skip phases

- **v0.1 (target week 6):** homepage + quiz UI + 6 PDPs + Letter shell + waitlist + Q-comm redirects. No Shopify, no AI Vaidya.
- **v1.0 (target week 10):** Shopify Buy Button integration, first 3 Letter essays, AI Vaidya MVP.
- **v2.0 (target week 14+):** headless Shopify cart, account dashboard, subscription, ritual tracker.

## Cardinal brand rules — ABSOLUTE

1. **"elements" is always lowercase.** Logo, headlines, mid-sentence, anywhere. Never "Elements" with capital E.
2. **Italic-keyword pattern is the brand's typographic signature.** Inter (sans) headline + ONE Cormorant Garamond italic word in Sienna (#C4541E). Always switch typefaces — never italicize Inter, always switch to Cormorant. One italic per headline maximum.
3. **One Saffron CTA per page maximum.** Saffron = #F0B947. Rounded rectangle (radius 8px), never pill.
4. **Sentence case everywhere.** No Title Case on buttons, headers, labels, anything. Mono UPPERCASE eyebrows are a separate register and are fine.
5. **Element washes (50% tints) are card backgrounds — NEVER the solid element colors.** Solids only as small accents (8–14px dots, icons, italic accent text).
6. **Black is never #000000.** Use Ink (#2A2118) or Cocoa (#2A1F18).
7. **Direction 3 is master.** Direction 1 reserved for /about, /letter/[slug], /vaidya, /manifesto pages only. Direction 2 reserved for /products/[slug] and /quiz/result only. NEVER use D1 or D2 on the homepage.
8. **Every clinical claim gets a citation** in IBM Plex Mono caption style with study details (author, journal year;vol(issue):pages, sample size, p-value).
9. **Banned words in copy:** wellness (as lead claim), pure, clean, natural (as lead), ancient wisdom, time-honored, harness, unlock, mother nature, sacred, journey, glow, radiant, boost, holistic, detox, mindful, game-changer, revolutionary.
10. **No emoji** in body copy or headlines.

## What's locked vs open

LOCKED (do not invent alternatives):
- Tech stack (above)
- Brand bible (@.claude/docs/01-brand-bible.md)
- 10-act homepage structure (@.claude/docs/03-homepage.md)
- 6 SKU lineup with element tags (brand bible Section 5)
- Direction 3 visual language (brand bible Section 7)
- Persona priorities (brand bible Section 4)
- Phased launch sequence (above)

OPEN (do NOT invent answers — ask the founder):
- Pancha quiz: 7 questions, scoring matrix, recommendation engine, Vaidya interpretation templates
- Vaidya content corpus (Dr. Anjali Iyer is a PLACEHOLDER identity until the real Vaidya is hired)
- Final homepage copy (all currently placeholder — see @.claude/docs/03-homepage.md)
- Domain name (working hypothesis: elementsbyvaidyam.com — not registered)
- Hero SKU launch unit (single sachet ₹99 vs 7-pack ₹399 vs 30-pack ₹999)
- Founder identity in copy (currently "the founder")

See @.claude/docs/04-decisions-needed.md for full open list.

## Working preferences

- Discuss approach before executing. Tell me what you'll do, then do it.
- Ask before generating more than 10 files in one turn.
- When proposing UI: describe structure precisely first, then code.
- Be specific, not abstract. Concrete values over descriptions.
- Push back if I'm contradicting the brand bible. Quote it back.
- Length is fine when content earns it. Comprehensive over summary.
- If you find a contradiction in these docs, flag it. Do not silently resolve it.

## File organization (target — most not yet generated)

```
elements/
├── CLAUDE.md                  ← this file
├── README.md                  ← human setup
├── SETUP.md                   ← claude code installation
├── .claude/docs/              ← reference docs
├── app/                       ← Next.js App Router (to be generated)
├── components/                ← React components (to be generated)
├── lib/                       ← utilities (to be generated)
├── public/                    ← static assets (to be generated)
└── styles/                    ← CSS (to be generated)
```

Right now only the docs exist. Code structure gets generated in the first build session.

## Reference docs

- @.claude/docs/01-brand-bible.md — full brand bible from the founder (THE source of truth)
- @.claude/docs/02-stack.md — folder structure, animation philosophy, coding conventions
- @.claude/docs/03-homepage.md — 10-act spec with current placeholder copy
- @.claude/docs/04-decisions-needed.md — what's still open
- @.claude/docs/homepage-reference-v0.2.html — visual reference (open in browser to see the design)

When making brand/visual decisions → read the bible first.
When making code/structure decisions → read 02-stack.md.
When working on the homepage → reference both 03-homepage.md AND the v0.2 HTML.

## When uncertain

For "should I do X?" — ask the founder. Especially:
- Anything in the OPEN list above
- Any deviation from the locked tech stack
- Any new visual treatment not described in the bible
- Any new page or route not in the homepage spec or the brand bible's IA (bible Section 10.4)
