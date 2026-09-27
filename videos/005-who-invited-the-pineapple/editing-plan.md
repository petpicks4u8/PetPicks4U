# Video #005 "Who Invited the Pineapple?": Editing plan, first frame and performance hypothesis

Editor: a rough cut in the Higgsfield sandbox (the same ffmpeg method as `videos/001-.../assemble_v3.sh`), then you add music and SFX in CapCut. Project settings: 1080×1920, 30 fps.

## 1. Voice lines (Higgsfield TTS → `text2speech_v2` / ElevenLabs)

| ID | Speaker | Voice | Line | Direction |
|---|---|---|---|---|
| VO1 | Mango | **TBD (owner picks)** | "Excuse me." | Clipped, offended |
| VO2 | Mango | TBD | "…Who invited the pineapple?" | Rhetorical, a little outraged, quick |
| VO3 | Mom | Maeve `64cf4f1a-…` | "It's a toy, Mango. It's for you." | Warm, amused, patient |
| VO4 | Mango | TBD | "There's only one fruit in this house." | Firm, final |
| VO5 | Mango | TBD | "Under review." | Lower, suspicious |
| VO6 | Mango | TBD | "Crunch: excellent." | Pleased, quick, a tiny pause after "Crunch" |
| VO7 | Mom | Maeve | "Mango! That was brand new." | Mock-exasperated, laughing underneath |
| VO8 | Mango | TBD | "It's vintage now." | Flat, completely unbothered |
| VO9 | Mango | TBD | "More pineapples in my bio. …I'll handle them." | Relaxed, smug |

Generate 2–3 takes of each line, pick the punchiest, and export WAV. That's about 25 takes for roughly 4 credits.

## 2. Timeline

| Time | Beat | Clip (trim) | Audio | Captions / text | Edit notes |
|---|---|---|---|---|---|
| 0:00.0–0:03.0 | **HOOK** | SH01 (best 3.0 s, **starting just before the snap-turn**) | "Record-stop" tick on the turn · VO1 at 0:00.3 · VO2 at 0:01.3 | Auto-caption VO1 and VO2, large, centred slightly above the middle | **No fade-in.** Frame 1 is already the two-shot |
| 0:03.0–0:07.0 | **SETUP** | SH02 (4.0 s) | Music in at −20 dB (light tropical marimba/pluck) · VO3 at 0:03.2 · VO4 at 0:05.1 | VO3 in italic, a different colour for Mom · VO4 | Product clearly readable here |
| 0:07.0–0:09.5 | **CURIOSITY** | SH03 (2.5 s) | Music thins to one held note · feather rustle · VO5 at 0:07.6 | VO5 | 5% slow zoom |
| 0:09.5–0:12.5 | **DEMO** | SH04 (3.0 s) | **Big crisp CRUNCH/RIP** synced to the pull · music back | — | 105% punch-in on the crunch frame |
| 0:12.5–0:15.5 | **ESCALATION** | SH05 (3.0 s, speed ramp 1.0→1.25×) | Small crunch · "fwip" on the flick · VO6 at 0:13.2 | VO6 | Montage energy |
| 0:15.5–0:20.0 | **PUNCHLINE** | SH06 (4.5 s) | VO7 at 0:15.7 → **music cuts at 0:17.0** → **0.7 s of silence** → VO8 at 0:17.7 | VO7 (Mom style), VO8 | Hold on the stare; **no SFX in the silence** |
| 0:20.0–0:25.0 | **PAYOFF / CTA** | SH07 (5.0 s) | Music back, soft · "fluff" SFX on the floof · VO9 at 0:20.6 · button ending at 0:24.5 | Lower third **"Mango's pineapple 🍍 link in bio"** from 0:20.5 · small **"#ad · Amazon affiliate link · AI-generated video"** bottom corner from 0:20.5 to the end | The last head-turn loops into the SH01 snap-turn |

**Music:** a light tropical or marimba track from the platform's **commercial-use library** (TikTok Commercial Music Library, Instagram licensed audio, YouTube Audio Library). **No trending copyrighted songs**, because affiliate content is commercial.
**Conure sounds:** at most **one** short, realistic contact chirp, and only if it helps. Never screaming as a joke.
**Captions:** burned in, one line per card, at most about 5 words, white with a soft black shadow, placed in the upper-middle of the frame away from the platform UI.
**Don't over-edit:** no emoji stickers, no zoom on every line, no meme sounds. The silence before "It's vintage now." is the most important edit.

## 3. First frame / cover

| Element | Spec |
|---|---|
| Frame | SH01's first frame (KF-A), also exported as the cover |
| Mango | In profile, bright colours, about to turn, alert |
| Product | The pineapple at the same size and height as Mango, sharp and readable |
| Composition | Mango on the left third, the pineapple on the right third, negative space at the top for cover text |
| Cover text | **"who invited the pineapple?"** (lowercase, 2 lines, top third) |
| Curiosity | A bird and a pineapple, nose to nose, understood in under a second without sound |

## 4. Performance hypothesis
- **Why stop scrolling?** Saturated yellow and orange plus a colourful pineapple pops in any feed, and the snap-turn is a motion hook in frame 1.
- **Why keep watching?** "Who invited the pineapple?" poses a conflict (what will he do to it?), and the crunch pays it off at about 10 s.
- **Why share or comment?** "It's vintage now." is quotable and relatable, since every parrot owner has a destroyed toy. Pinned comment: "What has your bird 'renovated' lately?"
- **Why click?** The toy is shown doing exactly what it's for (shredding). It's cheap and consumable, and the CTA "More pineapples in my bio" frames it as a re-buy.
- **Biggest single weakness:** **SH04, the beak tug.** Beak-and-object contact is the least reliable thing for AI, and it's the product demo. The fallbacks are built in (strip already gripped, or strip already free). The second risk is **Mango being a brand-new character**, so the first video carries the whole personality introduction.

## 5. Clip-reuse variant (Concept E "Sound On 🔊", post 3–5 days later)
Re-cut SH03 + SH04 + SH05 + SH07 at a slower pace with **no VO**, crunch SFX pushed forward, and one text card: *"he's not destroying it. he's 'foraging.'"* Use a different cover frame (the KF-D macro) and a different caption. That makes it a new creative, not a repost.
