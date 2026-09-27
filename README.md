# PetPicks4U

Entertaining AI-generated pet videos first, and product discovery through Amazon affiliate links second.
Stars:
- **Goldie** (he/him), an English cream Golden Retriever. Weaknesses: toilet paper and couch cushions. Nemesis: **Kevin**, a squirrel.
- **Mango** (he/him), a Sun Conure. Small bird, massive confidence. Everything in the house is his. Rivals: any other fruit. *(Added 2026-09-27.)*

## Status (2026-09-26)
- **Video #001 "Bored Goldie"** (AWOOF Snuffle Mat): **v2 rough cut done** (32 s, Benji voice). Needs music + SFX in CapCut, then owner posts. See `videos/001-not-supposed-to-do-that/editing-plan.md` §7.
- **Video #002 "One of You Is Kevin"** (Outward Hound Hide-A-Squirrel XL): script ready, queued next.
- **Video #006 "Who Invited the Pineapple?"** (Mango #1, Planet Pleasures Pineapple Foraging Toy): researched, safety-checked and scripted, with prompts and captions ready. Waiting on the owner for product reference photos, a live Amazon check and Mango's voice pick. See `research/2026-09-27-mango-first-product-research.md`.
- Goldie is **male (he/him)**. His voice is locked: **Benji** (Higgsfield preset `e6f9b893-51b1-51d3-afe9-9e0482cb7ac1`), friendly and casual.

## Where things live
| Folder | What's in it |
|---|---|
| `research/` | Dated research reports, plus the winning-hooks library |
| `products/` | `product-database.csv` (master list with status: selected, backup, watchlist or rejected), plus one card per product and reference images |
| `characters/goldie/` | Character bible, base generation prompt, voice profile and candidates, reference images |
| `characters/mango/` | Mango's character bible (`MANGO_CHARACTER_BIBLE.md`), base generation prompt (`MANGO_BASE_PROMPT.md`), reference images |
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
