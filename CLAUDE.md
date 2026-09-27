# PetPicks4U — standing instructions for Claude

AI-generated pet videos (TikTok / Reels / Shorts) monetised with Amazon affiliate links. Entertainment first, product second. Owner is non-technical: handle the tech, explain only what they must do.

## Always read first
- `characters/goldie/character-bible.md` — Goldie: **male (he/him)**, extra-fluffy near-white English cream Golden Retriever, forest-green collar + brass tag, happy smile, bright inviting eyes (never sad). Friendly, casual, playful inner voice; calls owners "Mom and Dad".
- `characters/mango/MANGO_CHARACTER_BIBLE.md` + `MANGO_BASE_PROMPT.md`: Mango, **male (he/him)** adult Sun Conure (yellow body, orange-red face and belly, green and blue wing edge, dark beak, pale eye ring). "Small bird. Massive confidence." Short, clipped, witty VO, never baby talk or screaming. Wings folded and feet on the perch in early videos, and the beak never lip-syncs. Bird-product safety screen in `research/2026-09-27-mango-first-product-research.md` §1. No Goldie + Mango crossover until both are visually consistent.
- `higgsfield-prompts/higgsfield-ids.md` — reusable Higgsfield IDs (workspace, Goldie element, product elements).
- `products/product-database.csv` — every product ever researched + status. Never delete rows; change status.
- `NEW-PRODUCT-PLAYBOOK.md` — the step-by-step for a new product/video.

## Locked assets (reuse, don't recreate)
- Goldie Higgsfield element: `743ced41-8284-4972-8b71-01bb96ca4509` (master image job `357ceade-b12a-4fe3-a060-39574c6b30d9`).
- Goldie voice: Benji preset `e6f9b893-51b1-51d3-afe9-9e0482cb7ac1` via `text2speech_v2` / `elevenlabs`. Owner (Mom) voice: Maeve `64cf4f1a-61c8-5938-9aea-83d12b2e1d13`.
- Mango voice: Dylan preset `b847bc29-f184-583a-8ad9-d1f1e16d1a60` via `seed_audio`, pitch_rate +5 (squeaky). Mango master portrait job `ceff1fb7-9410-44c8-86c4-8db81e81fe69` (pending owner approval as the Element).
- Proven pipeline: Nano Banana Pro keyframes (Goldie element + product element) → Kling 3.0 Pro for low-motion clips, Seedance 2.0 720p (start frame + Goldie/product image refs) for interaction → TTS lines → ffmpeg assembly in the Higgsfield sandbox (see `videos/001-not-supposed-to-do-that/assemble_v3.sh`) → owner adds music/SFX in CapCut.

## Rules
- Never fabricate product data; label VERIFIED / SNIPPET / UNVERIFIED. amazon.com is blocked from this environment — use web search and ask the owner to confirm live numbers.
- Product reference photos from the owner are the source of truth; never invent product features.
- No efficacy/health promises (e.g. "stops chewing"); phrase benefits as Goldie's playful opinion. Always include #ad + "AI-generated" disclosure.
- Show the owner keyframe stills before spending on video clips, unless they say "go".
- Never spend beyond Higgsfield credits already in the account, buy anything, publish, or create affiliate links without explicit approval.
- Log every generation in the video's `generation-log.csv`. Commit and push work to the session's branch.
- Higgsfield quirks: decline unsolicited preset recommendations (`declined_preset_id`), Seedance allows ~2 concurrent jobs, elements only inject their first image.
