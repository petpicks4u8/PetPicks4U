# PetPicks4U

Entertaining AI-generated pet videos first, and product discovery through Amazon affiliate links second.
Star: **Goldie** (he/him), an English cream Golden Retriever. Weaknesses: toilet paper and couch cushions. Nemesis: **Kevin**, a squirrel.

## Status (2026-09-26)
- **Video #001 "I'm Not Supposed to Do That"** (AWOOF Snuffle Mat): scripted, prompted and captioned, and **ready to generate**.
- **Video #002 "One of You Is Kevin"** (Outward Hound Hide-A-Squirrel XL): script ready, queued next.
- Goldie is **male (he/him)**. His voice is still to be chosen: see `characters/goldie/voice-profile.md`.

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
