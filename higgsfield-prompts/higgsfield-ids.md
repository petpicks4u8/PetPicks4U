# Higgsfield IDs (PetPicks4U)

| Thing | ID |
|---|---|
| Workspace | 2e9cc405-a493-4b7a-ba71-4c351f7ee3ae |
| Project "PetPicks4U — V001 Snuffle Mat" | c9d65fe1-ea2b-4aec-a5dd-a9e89e91c273 (default folder same ID) |
| Element: SnuffleMat (prop) | dd6ee744-86ff-46b4-b1a2-9af14176a649 |
| Element: Goldie (character) | 743ced41-8284-4972-8b71-01bb96ca4509 — from owner-approved glam image C (job 357ceade) |
| Goldie voice (Desmond, preset) | 563f728c-e249-5a85-97ab-8461e8c09da6 |

## SnuffleMat reference images (uploaded by owner 2026-09-27, exact Amazon product)
0e61d531-0d60-426b-a5c1-aa401fc911b1 · cc8f61fb-af29-45bc-8b01-84fb92059aba · f3f60abf-8ec9-408d-9c25-3c791dca1bbf · 8e8d97af-d52a-4436-9808-1027149570cc · 7e768776-2d19-41b8-8b45-08b302020a5b · fd3c8983-81e3-490a-bfd7-8ebf175076dd

Rule: these images are the visual source of truth for the product. Prompts describe the mat only generically and defer to the references — no invented features.
Note: when the Element is used in a prompt, Higgsfield injected only the first reference image. For keyframes with Goldie, pass the best 2–3 mat images directly as image references as well.

---

## Mango (Sun Conure), added 2026-09-27. Nothing has been generated yet.
| Thing | ID |
|---|---|
| Element: Mango (character) | **d311ab53-bc2c-4a99-851d-d178fc7a6042** (owner-approved 2026-09-27, from master job ceff1fb7) |
| Mango master image job | ceff1fb7-9410-44c8-86c4-8db81e81fe69 |
| Element: Pineapple (prop, P011) | _TBD: create from the owner's reference photos, main image first_ |
| Mango voice (preset) | **Cody** 1ffcdbb3-078b-5491-959d-359e3021e917 via text2speech_v2 **minimax**, no pitch shift. CANON, locked 2026-09-28 (replaces Dylan) |
| Mom voice | Maeve `64cf4f1a-61c8-5938-9aea-83d12b2e1d13` (shared with Goldie videos) |

### Mango V005 "Just a Dip" (Colorday bath), 2026-09-27
| Thing | ID |
|---|---|
| Project "PetPicks4U — V005 Mango Bath" | 94e2c44b-301d-440d-b88b-042c13ed74db (default folder same ID) |
| Mango master portrait (candidate) | job ceff1fb7-9410-44c8-86c4-8db81e81fe69 |
| Colorday bath owner screenshots | 82c04915-0fbc-41a0-ab8d-cfaba30f6d9e · 8620b94e-665d-4f68-9be0-504b87341aa7 · 8fb984ce-f49c-4157-8c27-4d10b17113dd · 5be3dc1f-c0c7-4107-9ecc-d2ff4348169a · cf1f94cd-79f5-4e96-9633-109071b54a0e |
| Owner "video" upload | 6d00a4a3-1faf-48b9-9078-d7badea3e2cb, an HLS playlist (.m3u8), not a usable video |
Note: nano_banana_pro requests were served as nano_banana_2 on 2026-09-27.
| V005 final video (captioned) | media 837a1362-4154-4410-8dc1-df731638c07f |
| V005 final video (clean) | media 50d8b1c3-896a-4ccc-99d9-4387b104005f |

**Colorday bath prompt rule (owner, 2026-09-28):** it is a FULLY ENCLOSED clear box with a clear roof and walls on every side, hooked on the outside of the cage door, opening only into the cage. Never an open dish or bowl. Always anchor new stills to an approved still showing the bath (6b9f46da or 582280e3) plus the owner photos.
**Colorday bath logic (owner, 2026-09-28):** reproduce the product EXACTLY as in the owner photos (no added, removed or changed details) at the right proportions (listing: 13 × 11 × 8 in, SNIPPET). The bath hangs on the OUTSIDE of the cage over the open door, its open back side flush with the door opening, roof closed. The bird enters **only sideways through the cage door at bath-floor level, never from the top**.

**Caption style (owner, 2026-09-28):** sentence case with proper grammar; placed in the lower-middle safe zone (about 53–71% of frame height, centred, each line drawn separately so it's centred). Never at the top over the character, and never in the bottom ~28% or behind the right-side buttons. CTA text: "Get your bird a bath like mine! Link in bio."

### Mango V007 "Same Stick" (P019 CZWESTC natural perch set), 2026-10-01
Same Higgsfield project as V005 (94e2c44b).

| Thing | ID |
|---|---|
| P019 product hero crop (all 8 pieces) | 1a68d26a-dd7c-4a65-b0a3-168de03421d5 |
| P019 sizes graphic crop | dc2f3bee-1d13-45f5-9111-3833efd12a39 |
| P019 install / hardware crop | 4bf38c68-57b9-49c0-91e6-0f8199586490 |
| P019 bark close-up crop | b21c2615-ab04-4282-b4fa-994116aaa079 |
| Uncropped hero screenshot | d2f58154-89c4-4707-b766-479a87666103 |

The keyframes are in `videos/007-same-stick/generation-log.csv`.

**Upload route that works:**
1. Commit the file to the repo.
2. Run `media_import_url` on the raw.githubusercontent URL. Alternatively, the sandbox can curl it, crop it and PUT it.

Local PUT to upload.higgsfield.ai is blocked from this environment.
| V007 final v1 (captioned) | media c03367b9-8660-419f-9f93-d5e4c886196d |
| V007 final v1 (clean) | media 85eb26d7-7280-4f26-8619-db0c7077beb8 |
