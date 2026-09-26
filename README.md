# PetPicks4U

Entertaining AI-generated pet videos first, and product discovery through Amazon affiliate links second.
Star: **Goldie**, an English cream Golden Retriever. Current nemesis: **Kevin**, a squirrel.

## Status (2026-09-26)
**Video #001 "One of You Is Kevin"** has been researched, scripted, prompted and captioned, and is **ready to generate**.
- Product: Outward Hound Hide-A-Squirrel XL (ASIN B005VS9WO6)
- Backups: QGI Interactive Dog Ball (B0DK42TDSK) and AWOOF Snuffle Mat (B07N1JYYCW)

## Where things live
| Folder | What's in it |
|---|---|
| `research/` | Dated research reports, plus the winning-hooks library |
| `products/` | `product-database.csv` (master list with status: selected, backup, watchlist or rejected), plus one card per product and reference images |
| `characters/goldie/` | Character bible, base generation prompt, voice profile and candidates, reference images |
| `scripts/` | Concepts and full scripts for each video |
| `higgsfield-prompts/` | Ready-to-paste keyframe and video prompts for each video |
| `videos/` | Editing plan, generation log and approved clips for each video |
| `captions/` | Platform captions, hashtags, pinned comment and disclosure for each video |
| `analytics/` | Performance tracker, how to diagnose results, affiliate links, content calendar |
| `templates/` | Blank templates for new products, videos, prompts and captions |
| `archive/` | Retired material. Nothing valuable gets deleted; it moves here |

## Workflow for each video
1. Research the product → `research/` and `product-database.csv`
2. Write 5 concepts, rank them, pick one → `scripts/<video>/concepts.md`
3. Script and shot list → `scripts/<video>/script.md`
4. Keyframe and video prompts → `higgsfield-prompts/`
5. Generate: stills first, then motion; log every run in `generation-log.csv`
6. Edit following `editing-plan.md`, then captions
7. Publish (you do this), then fill in `performance-tracker.csv` at 48 hours and 7 days
8. Diagnose with `analytics/README.md` and feed the lessons into the next concept
