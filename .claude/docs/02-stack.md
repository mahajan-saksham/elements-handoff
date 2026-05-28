# Stack and Technical Decisions

## Committed stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 15 (App Router) | React fluency for vibe coding; SSR + RSC for editorial pages; scales to full app without re-platforming |
| UI | React 19 | Concurrent features benefit animations; latest stable |
| Language | TypeScript | Catches silent bugs; types on all props/public functions |
| Styling | Tailwind 4 | `@theme` CSS variables hold brand tokens directly; utility classes vibe-code faster than custom CSS |
| Animations | Motion (latest) | THE React animation library; declarative; Claude-fluent |
| Smooth scroll | Lenis | One init line in root layout; premium feel |
| Hosting | Vercel | Zero-config Next.js deploy |
| Ecom backend | Shopify Storefront API | v1.0+ only; Razorpay/Cashfree native |
| OMS (Q-comm sync) | Unicommerce or Easyecom | v2.0+ only; syncs Shopify ↔ Blinkit/Zepto/Instamart/Amazon |
| LLM (AI Vaidya) | Claude API | v2.0; best conversational quality for the brand bar |
| Email | Beehiiv or ConvertKit | Letter + waitlist; pick before v0.1 |

If anything else is suggested — Astro, Pages Router, Tailwind 3, GSAP, Locomotive Scroll, Three.js — stop. Stack is decided.

## Folder structure (target)

```
elements/
├── app/
│   ├── layout.tsx                    # Root layout (fonts, nav, footer, Lenis init)
│   ├── page.tsx                      # Homepage (composes 10 acts)
│   ├── globals.css                   # Tailwind import + @theme tokens + base
│   │
│   ├── quiz/
│   │   ├── page.tsx                  # Quiz entry (Direction 3)
│   │   └── result/page.tsx           # Quiz result (Direction 2)
│   │
│   ├── products/
│   │   └── [slug]/page.tsx           # PDP template (Direction 2)
│   │
│   ├── elements/
│   │   └── [slug]/page.tsx           # Element deep-dive (Direction 3)
│   │
│   ├── letter/
│   │   ├── page.tsx                  # Letter index
│   │   └── [slug]/page.tsx           # Essay (Direction 1)
│   │
│   ├── about/page.tsx                # Manifesto (Direction 1)
│   ├── vaidya/page.tsx               # Vaidya bio (Direction 1)
│   ├── waitlist/page.tsx             # Email capture
│   │
│   └── api/
│       ├── waitlist/route.ts         # Email signup
│       ├── cart/route.ts             # Shopify cart create (v1.0+)
│       └── vaidya/route.ts           # AI Vaidya chat (v2.0+)
│
├── components/
│   ├── chrome/
│   │   ├── Announcement.tsx
│   │   ├── Nav.tsx
│   │   ├── ElementalBar.tsx
│   │   └── Footer.tsx
│   │
│   ├── homepage/
│   │   ├── 01-Hero.tsx
│   │   ├── 02-Problem.tsx
│   │   ├── 03-Pancha.tsx
│   │   ├── 04-Quiz.tsx
│   │   ├── 05-Wedge.tsx
│   │   ├── 06-Collection.tsx
│   │   ├── 07-Vaidya.tsx
│   │   ├── 08-Science.tsx
│   │   ├── 09-Letter.tsx
│   │   └── 10-Founder.tsx
│   │
│   ├── shared/
│   │   ├── PillCard.tsx
│   │   ├── ElementBadge.tsx
│   │   ├── BrandMark.tsx
│   │   ├── FloatingProduct.tsx
│   │   └── Citation.tsx
│   │
│   └── interactive/
│       ├── QuizFlow.tsx              # 7-question state machine
│       ├── BarChart.tsx              # Elemental profile chart
│       ├── VaidyaFAB.tsx             # Floating button (v2.0)
│       └── CartDrawer.tsx            # v1.0+
│
├── lib/
│   ├── shopify.ts                    # Storefront API client (v1.0+)
│   ├── pancha.ts                     # Element scoring + recommendations
│   ├── vaidya.ts                     # Claude API + RAG (v2.0+)
│   └── animations.ts                 # Motion variants used across components
│
├── public/
│   ├── fonts/                        # Self-hosted if not Google Fonts
│   └── images/                       # Lab reports, photography
│
├── .claude/docs/
├── CLAUDE.md
├── README.md
├── SETUP.md
├── next.config.js
├── package.json
├── tsconfig.json
└── .env.local                        # API keys, gitignored
```

## Coding conventions

- **Components**: function components with TypeScript props, destructured in signature.
- **Server vs Client**: Server Components default in `app/`. `'use client'` only when needed (forms, animations, useState/useEffect).
- **State**: useState/useReducer for local. Zustand if global state is needed. No Redux.
- **Styling**: Tailwind utility classes for layout/spacing/colors. Custom CSS in `globals.css` for typography rules and complex keyframe animations.
- **File naming**: kebab-case files (`pill-card.tsx`), PascalCase component exports (`PillCard`).
- **Component naming**: descriptive (`HeroSection`, not `Section1`).
- **No barrel exports**: no `index.ts` re-exports. Direct imports only.
- **No premature abstractions**: inline first, extract when used 3+ times.
- **Comments**: explain *why*, not *what*. A comment justifying a non-obvious design tradeoff is welcome. A comment describing what a function does is noise.
- **TypeScript strict**: recommended. If off, still type all props and public functions.

## Tailwind 4 `@theme` tokens

Paste this verbatim into `app/globals.css`:

```css
@import "tailwindcss";

@theme {
  /* foundations */
  --color-butter: #F7F2E6;
  --color-cream: #FBF8F0;
  --color-cocoa: #2A1F18;
  --color-forest: #0C3530;
  --color-ink: #2A2118;
  --color-bone: #F2EDE3;
  --color-bone-desat: #B8C9C0;

  /* accents */
  --color-sienna: #C4541E;
  --color-saffron: #F0B947;
  --color-marigold: #F2C557;

  /* pancha — solids */
  --color-akasha: #5B4E7A;
  --color-vayu: #6A8AA8;
  --color-agni: #C4541E;
  --color-jala: #2E7A75;
  --color-prithvi: #6B7A3D;

  /* pancha — washes (50% tints) */
  --color-akasha-wash: #DCD2EA;
  --color-vayu-wash: #D2E2E8;
  --color-agni-wash: #F5D3A8;
  --color-jala-wash: #C7DDDA;
  --color-prithvi-wash: #DCE3CE;

  /* auxiliary */
  --color-walnut: #6B5F47;
  --color-stone: #E5DEC9;
  --color-sand: #D9CFBC;
  --color-brick: #9C3A1A;
  --color-moss: #4A6B3A;

  /* typography */
  --font-sans: "Inter", system-ui, sans-serif;
  --font-serif: "Cormorant Garamond", Georgia, serif;
  --font-mono: "IBM Plex Mono", "SF Mono", Menlo, monospace;

  /* radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 14px;
  --radius-xl: 16px;
  --radius-pill: 999px;
}
```

Every color above is now usable in Tailwind as `bg-butter`, `text-ink`, `border-stone`, `text-sienna`, etc.

## Animation philosophy

Motion serves hierarchy, never decoration. Brand bible Section 7.1 calls for "balance over emphasis" — animations must reinforce that, not fight it.

| Pattern | Implementation | Notes |
|---|---|---|
| Page load stagger | Motion `initial`/`animate` with `staggerChildren: 0.04` | Hero text word-by-word; italic accent delayed 200ms |
| Scroll reveal | Motion `whileInView` with `once: true` | Pancha and SKU cards fade up on viewport entry |
| Parallax | Motion `useScroll` + `useTransform` | Wordmark furniture drifts at 0.3x scroll speed |
| Page transitions | Next.js View Transitions API | Smooth fade between routes |
| Quiz progression | Motion layout + spring `stiffness: 120, damping: 22` | Bar chart grows from 0 to value over ~1.2s |
| Hover micro | CSS transitions, 200ms | Pill cards `translateY(-2px)`, dots `scale(1.15)` |
| Floating product bob | CSS keyframes, 4s infinite ease-in-out | `translateY 0 to -4px` |
| Orbital rotate | CSS keyframes, 60s linear infinite | `rotate(360deg)` |
| Compass dot pulse | CSS keyframes, 3s infinite | `opacity 0.6 to 1.0` |
| Smooth scroll | Lenis default config | One init line in root layout |

**Performance budget:**
- Homepage total weight: under 250KB
- JS bundle: under 80KB
- LCP under 2s on Bengaluru 4G median

**Don'ts:**
- No GSAP (Motion handles everything we need)
- No Three.js or React Three Fiber (no 3D in v0.x)
- No Locomotive Scroll (use Lenis)
- No autoplay video on homepage
- No animation on the LCP element (hero headline must paint immediately)
