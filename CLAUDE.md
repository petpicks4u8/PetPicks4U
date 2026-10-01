# PetPicks4U — standing instructions for Claude

AI-generated pet videos (TikTok / Reels / Shorts) monetised with Amazon affiliate links. Entertainment first, product second. Owner is non-technical: handle the tech, explain only what they must do.

## Always read first
- `characters/goldie/character-bible.md` — Goldie: **male (he/him)**, extra-fluffy near-white English cream Golden Retriever, forest-green collar + brass tag, happy smile, bright inviting eyes (never sad). Friendly, casual, playful inner voice; calls owners "Mom and Dad".
- `higgsfield-prompts/higgsfield-ids.md` — reusable Higgsfield IDs (workspace, Goldie element, product elements).
- `products/product-database.csv` — every product ever researched + status. Never delete rows; change status.
- `NEW-PRODUCT-PLAYBOOK.md` — the step-by-step for a new product/video.
- `AD-MASTER-SYSTEM.md` — **when the owner pastes an Amazon link, that link IS the command**: run the full research → concept → script → prompts → QC workflow in that file (with its house adaptations: Amazon is blocked here, so say so and ask for screenshots/ASIN; stop points still apply).

## Locked assets (reuse, don't recreate)
- Goldie Higgsfield element: `743ced41-8284-4972-8b71-01bb96ca4509` (master image job `357ceade-b12a-4fe3-a060-39574c6b30d9`).
- Goldie voice: Benji preset `e6f9b893-51b1-51d3-afe9-9e0482cb7ac1` via `text2speech_v2` / `elevenlabs`. Owner (Mom) voice: Maeve `64cf4f1a-61c8-5938-9aea-83d12b2e1d13`.
- Proven pipeline: Nano Banana Pro keyframes (Goldie element + product element) → Kling 3.0 Pro for low-motion clips, Seedance 2.0 720p (start frame + Goldie/product image refs) for interaction → TTS lines → ffmpeg assembly in the Higgsfield sandbox (see `videos/001-not-supposed-to-do-that/assemble_v3.sh`) → owner adds music/SFX in CapCut.

## Website
- `website/` is the Next.js link-in-bio site, branded **PetPicks4You** (capital P, P, Y; orange "4"; orange smile under the wordmark — a plain crescent, never Amazon's arrow). Content lives only in `website/src/content/` (pets, products, affiliate-links, short-links). When a video goes live, set that product's `published: true` and `videoUrl`, and have the owner paste its affiliate link in `affiliate-links.ts`. Never invent affiliate links or show prices.

## Rules
- Never fabricate product data; label VERIFIED / SNIPPET / UNVERIFIED. amazon.com is blocked from this environment — use web search and ask the owner to confirm live numbers.
- Product reference photos from the owner are the source of truth; never invent product features.
- No efficacy/health promises (e.g. "stops chewing"); phrase benefits as Goldie's playful opinion. Always include #ad + "AI-generated" disclosure.
- Show the owner keyframe stills before spending on video clips, unless they say "go".
- Never spend beyond Higgsfield credits already in the account, buy anything, publish, or create affiliate links without explicit approval.
- Log every generation in the video's `generation-log.csv`. Commit and push work to the session's branch.
- Caption safe zone (1080x1920, TikTok/Reels/Shorts): keep all text inside x 60–940, y 230–1440 (avoid top tabs, right-side buttons, bottom description). Spoken captions ≈ y 1190 centred on x 500, one line per drawtext, ≤ ~20 characters per line; labels ≈ y 400; owner puts #ad / affiliate disclosure in the post caption (not burned into the video) — always remind them, and to switch on the platform AI-generated label. Reference: `videos/003-toilet-water/recaption_v5_safezone.sh`.
- Higgsfield quirks: decline unsolicited preset recommendations (`declined_preset_id`), Seedance allows ~2 concurrent jobs, elements only inject their first image.
