# Video #001: Editing plan, first frame and performance hypothesis

Editor: CapCut. Project 1080×1920, 30 fps. Script: `scripts/001-not-supposed-to-do-that/script.md`.

## 1. Voice lines
Generate with Goldie's locked voice (see `characters/goldie/voice-profile.md`); the human line uses a different preset voice.

| ID | Speaker | Line | Direction |
|---|---|---|---|
| VO1 | Goldie | "Don't do it, Goldie." | Whispered self-talk, tense |
| VO2 | Goldie | "…Ugh. I'm not supposed to do that." | Deflated, long "ugh" |
| VO3 | Goldie | "This is different. The cushion started it." | Defensive, quick |
| VO4 | Human | "GOLDIE." | Sharp, off-screen |
| VO5 | Goldie | "Who? Never heard of him." | Innocent, light |
| VO6 | Goldie | "Look. I'm bored. And I have a very big nose." | Honest, dry |
| VO7 | Goldie | "Wait. Why does the grass smell like chicken?" | Suspicious, then curious |
| VO8 | Goldie | "Indoor grass. With snacks. Why wasn't I told." | Muffled, blissful (add a slight low-pass filter) |
| VO9 | Human | "…Goldie? Why is it so quiet?" | Suspicious, off-screen |
| VO10 | Goldie | "Busy." | Muffled, flat |
| VO11 | Goldie | "My indoor grass is in the bio. …The couch says you're welcome." | Relaxed, satisfied |

## 2. Timeline

| Time | Beat | Clip | Audio | Text | Notes |
|---|---|---|---|---|---|
| 0:00–0:03.0 | **HOOK** | SH01 | Room tone, tick-tock; VO1 at 0:00.4 | Caption VO1 | Starts on the frozen nose, no fade-in |
| 0:03.0–0:06.0 | **FAIL #1** | SH02 | "Rrrip" SFX over the cut; 0.6 s silence; VO2 at 0:03.8 | "attempt #1" at top left; caption VO2 | The silence before "Ugh" is the joke |
| 0:06.0–0:09.5 | **TEMPTATION #2** | SH03 | Fabric-stretch SFX; VO3 at 0:06.5 | "attempt #2"; caption | |
| 0:09.5–0:12.5 | **BUSTED** | SH04 | VO4 at 0:09.5 with a record-scratch; VO5 at 0:10.6 | Captions (human line in italics or another colour) | 110% snap-zoom on "GOLDIE" |
| 0:12.5–0:15.5 | **PROBLEM** | SH05 | Big-sigh SFX; soft music starts (−20 dB); VO6 at 0:13.0 | Caption | |
| 0:15.5–0:17.0 | **DISCOVERY a** | SH06a (head lift) | Sniff-sniff SFX; VO7 starts at 0:15.7 | Caption | |
| 0:17.0–0:18.5 | **DISCOVERY b** | SH06b (the mat) | VO7 continues; music lifts | Caption | First clear look at the product |
| 0:18.5–0:22.0 | **DEMO** | SH07 | Layered snuffle-snort ASMR SFX; VO8 at 0:19.3 | Caption | Let the snuffles breathe; don't cover them with music |
| 0:22.0–0:25.0 | **PAYOFF** | SH08 | Music dips; VO9 at 0:22.3; VO10 at 0:24.0 | Captions | "Busy." hits dry |
| 0:25.0–0:28.5 | **CTA** | SH09 | VO11 at 0:25.3; music button ending at 0:28.2; final tiny sniff | Lower third **"Goldie's snuffle mat 🌿 link in bio"**; small **"#ad · Amazon affiliate link · AI-generated video"** | Loops back to the nose at the roll |

**Music:** a light, playful track from each platform's commercial-use library. Don't use trending copyrighted songs; affiliate posts count as commercial.
**Captions:** burned in, max ~5 words per card, placed centre-upper to stay clear of the platform buttons.
**Don't over-edit:** the three pauses are the comedy (before "Ugh", after "GOLDIE", before "Busy"). Protect them.

## 3. First frame / cover
| Element | Spec |
|---|---|
| Frame | The first frame of SH01 (KF-1) |
| Goldie's expression | Frozen, eyes sliding to the camera, "caught" |
| Product position | Not in the first frame. The hook is the *problem*; the mat is the reveal |
| Composition | Goldie's nose and the hanging paper on the left-centre third; his side-eye in the upper third |
| Background | Clean white bathroom tiles, bright |
| Cover text | **"he knows he's not supposed to."** (lowercase, top third) |
| Why it's curious | Every dog owner recognises that exact moment before the toilet paper goes, and wants to see if he does it |

## 4. Performance hypothesis
- **Why stop scrolling?** A universally recognisable "uh oh" moment (dog vs. toilet paper) plus a dog talking himself out of it.
- **Why keep watching?** Will he do it? Yes, and the fail is funny. Then a second temptation, which escalates. "I'm bored and I have a very big nose" sets up the question of what fixes it.
- **Why share or comment?** Owners tag friends whose dog does this, share "my dog's toilet paper crimes" stories, and quote "Who? Never heard of him."
- **Why click?** The video names the real cause (boredom plus a nose), shows a simple cheap fix working, and ends on the couch surviving. The link feels like help, not a sales pitch.
- **Biggest weakness:** **the product arrives late (at 0:17).** The first half is all problem. If viewers leave early, they never see the mat. Mitigations: keep scenes 1–5 tight (cut to 13 s if they drag), and consider a variant B that flashes the mat for 0.5 s in the hook. Secondary risk: viewers may read it as "the mat stops destructive behaviour", so the captions frame it as enrichment for a bored nose.

## 5. Quality gate before publishing
1. Watch the first 2 s muted on a phone. Is it clear what's happening?
2. Entertainment or ad? The product must not appear before ~0:15.
3. Does every clip pass the approval checklist?
4. Is the mat clearly visible and recognisable in SH06b and SH09?

## 6. Rough cut v1 (built 2026-09-27)
Assembled automatically by `assemble_rough_cut.sh` (clips + Desmond/Maeve voice lines + burned captions + #ad/AI disclosure). Final length 30.0 s — timings shifted slightly from §2 to fit the real voice-line lengths (scene 8 = 22.0–25.8, scene 9 = 25.8–30.0).
- Captioned: https://d2ol7oe51mr4n9.cloudfront.net/user_3JsvAEVHlwuHHX05USDFI35FBsA/451b0623-b5d4-434f-a3b7-0fa87481fb1c.mp4
- Clean (voice only, for CapCut): https://d2ol7oe51mr4n9.cloudfront.net/user_3JsvAEVHlwuHHX05USDFI35FBsA/c85d244d-11ba-497b-9bc9-805771974efb.mp4

**Not yet in the rough cut (add in CapCut):** music bed, sound effects (tick-tock, "rrrip", record scratch, sniffs/snuffles, final sniff). Higgsfield has no general music/SFX generator — use CapCut's / TikTok's commercial sound library.

## 7. v2 "Bored Goldie" cut (2026-09-27) — CURRENT
Natural rewrite (`scripts/001-not-supposed-to-do-that/script-v2-natural.md`), Goldie voiced by **Benji**, owner by Maeve. Same 9 clips; built by `assemble_v2.sh`. 32.1 s.
- Captioned: https://d2ol7oe51mr4n9.cloudfront.net/user_3JsvAEVHlwuHHX05USDFI35FBsA/d2d3ff8f-bd50-4d39-942a-9653e43203ac.mp4
- Clean (voice only, for CapCut): https://d2ol7oe51mr4n9.cloudfront.net/user_3JsvAEVHlwuHHX05USDFI35FBsA/381ef70c-0a7f-40a9-8b53-91709b7e7fbd.mp4
Still to add in CapCut: music bed + SFX (paper rip ~4.6s, record scratch on "GOLDIE!" 11.3s, sniffs 16–23s).

## 8. v3 cut (2026-09-27) — CURRENT
Owner changes: couch cushion visibly ripped (with fluff on Goldie's nose in the "Wasn't me" shot); snuffle-mat scenes now playful — pawing/digging and a play-bow pounce; new closing CTA line. Built by `assemble_v3.sh`, 33.4 s.
- Captioned: https://d2ol7oe51mr4n9.cloudfront.net/user_3JsvAEVHlwuHHX05USDFI35FBsA/8bcc51d6-b869-4b40-8962-0d66da25cbb7.mp4
- Clean (voice only, for CapCut): https://d2ol7oe51mr4n9.cloudfront.net/user_3JsvAEVHlwuHHX05USDFI35FBsA/0138e1eb-442c-4bff-9673-a5ad39b7c66e.mp4
Closing line: "With this in the house, who needs the couch? Get one for your pup — it's in my bio!" (worded as Goldie's playful opinion rather than a promise that the mat stops chewing).
