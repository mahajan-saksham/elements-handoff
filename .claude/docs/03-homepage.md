# Homepage — current build (7 sections)

The homepage is a long-scroll editorial in 7 sections, structured as a 3-act marketing arc.

## Structure

| Act | Section | Component | Surface |
|---|---|---|---|
| I — The Problem | Hero | `01-hero.tsx` | Butter |
| | Concerns | `02-concerns.tsx` | Butter |
| | How It Works | `03-how-it-works.tsx` | Cream |
| II — The Solution | Coffee Wedge | `04-wedge.tsx` | Dark gradient (Cocoa → amber) |
| | Collection | `06-collection.tsx` | Butter |
| III — The Proof | Trust + Vaidya | `07-trust.tsx` | Cream |
| | Founder + Letter | `08-founder-letter.tsx` | Butter |

Composed in `app/page.tsx`. Pancha section (`05-pancha.tsx`) exists as a file but is not imported — kept for potential `/elements` page use.

## Chrome (every page)

- Announcement bar (Marigold)
- Nav (Butter, sticky) — brand mark + "elements" wordmark, Cart pill
- Elemental bar (6px, 5 element colors)
- Footer (Cocoa) — 4-column grid, elemental bar, Q-comm pills
- Quiz FAB (fixed bottom-right)

## Key visual patterns

- Two-card hero: quiz card (left, gradient vayu→akasha) + collection card (right, warm gradient)
- Shadow elevation instead of borders on cards
- Gradient backgrounds on hero cards
- `rounded-[20px]` on all cards
- Pill CTAs with shadow
- One Saffron CTA per viewport
- Product photo placeholders (swap to `<Image>` when photography arrives)
- No italic-keyword pattern — colored `<span>` accent words in Inter instead

## Quiz

Full 12-question quiz at `/quiz` with:
- 7 prakriti (constitution) + 5 vikriti (current state) questions
- V/P/K dosha scoring → element projection with sama baseline prior (1.5)
- 3 result profiles (vata/pitta/kapha) with personalized product recommendations
- Confidence-scored inferences, citations, disclaimer
- All client-side, deterministic, no backend needed
