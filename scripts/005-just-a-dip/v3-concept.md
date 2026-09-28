# V005 v3: "Drinking Bowl". Full redesign (concept, awaiting owner approval)

> Owner brief (2026-09-28): retention first, selling second. Start at peak action. The voice is a relaxed, dry young guy, not squeaky. No "Step one", no feature reading, no salesperson CTA. Mango is the content and the product is the plot device.
> **Nothing has been generated for v3. It needs owner approval first.**

## 0. What was wrong with v2 ("Morning Dip")
| Problem | Why it hurt retention |
|---|---|
| Opened on Mango *standing beside* the bath | Frame 1 was static, so there was no reason to stop scrolling |
| "Morning routine… Step one… the dip" | Tutorial structure, so the viewer spots an ad in 3 seconds |
| Strictly linear (before → in → after → CTA) | No surprise, no open loop, nothing to wait for |
| "So refreshed" / "Clean. Fluffy. Ready for the day." | Reads like product benefits said by a mascot |
| Squeaky, pitched-up voice | "Cartoon bird" rather than a character, and it undercut the humour |
| Conventional end-card CTA as the last beat | The video ended on the ad, not on Mango |

## 1. Hook, tested

| # | Line | Verdict |
|---|---|---|
| A | "I was told this was a drinking bowl." | ✅ **Winner.** Instant incongruity against the visual chaos. It tells a mini story (he was *lied to*, or is lying), sets up the reveal, and allows a callback at the end |
| B | "Yeah… this got out of hand." | Good energy, but generic and it doesn't set up the product |
| C | "In my defense, it was already full." | Funny, but it needs a second to decode |
| D | "Nobody stopped me, so." | Strong attitude, but it leaves the viewer lost for the first 2 s |
| E | "This is my third one today." | Cute, but it reads as a routine, which is the old problem |

**Final hook:** Mango, mid-splash: *"I was told this was a drinking bowl."*

## 2. Script (~19.5 s)

| Time | Mango (VO) |
|---|---|
| 0.0–2.0 | *"I was told this was a drinking bowl."* |
| 2.0–5.0 | *"Anyway… it lives on my cage now."* |
| 5.0–12.0 | *(splash, no words)* … then over the outside shot: *"Floor stays dry. Nobody yells. Everybody wins."* |
| 12.0–16.0 | *(0.8 s pause)* … *"Very hydrated."* |
| 16.0–19.5 | *"Same time tomorrow."* (as he hops back in, which loops to the start) |

Five lines, about 40% talk and 60% water and reactions.

## 3. Voice direction (replaces Dylan + pitch-up completely)
- A young adult male, early to mid 20s. Medium-light but **natural pitch**, with **no pitch shifting** and no effects beyond a light room tone.
- **Relaxed, dry, slightly cocky.** He's narrating something ridiculous as if it's completely normal. Conversational, a little under-energised, with natural pauses and slightly clipped endings.
- Never performed, never "announcer", never excited. The humour comes from understatement: a tiny neon bird speaking like a guy on a couch.
- Engine: `text2speech_v2` / ElevenLabs.
- **Audition before locking:** Jasper, Cody, Evan and Archie (all young male presets). Each reads "I was told this was a drinking bowl." and "…Very hydrated." That's about 8 lines for about 1.5 credits. The owner picks, and the pick becomes Mango's permanent voice.

## 4. Storyboard

| # | Time | Shot | Camera | Mango | Product visible as |
|---|---|---|---|---|---|
| 1 | 0.0–2.0 | **ECU splash, peak action on frame 1** | Very close, subtle handheld, slightly off-centre | Soaked, wings flapping in the water, head dunking, droplets hitting the lens side of the clear wall | Water running down the transparent walls |
| 2 | 2.0–5.0 | **Pull-back reveal** | Handheld pull-back about 40 cm, a quick drift | Still splashing, then pauses and looks at camera on "Anyway…" | The clear box hooked onto the open cage door, the cage around it |
| 3 | 5.0–7.0 | **Entry** | Side-on from outside | Hops from the cage perch through the doorway into the bath | Easy access from inside the cage |
| 4 | 7.0–9.0 | **Dunk and turn** | Close, punch-in on the dunk | Full-body dunk, turns around in place, shakes | Enough room to turn |
| 5 | 9.0–12.0 | **Contained chaos** | Wider, the lower half of frame shows the dry table/floor under the cage | Splashing inside; outside is calm and dry | Water stays in the box |
| 6 | 12.0–16.0 | **Payoff: soaked puffball** | Static, slightly low, micro push-in on "hydrated" | Drenched, spiky, fluffed, dead-eyed satisfied stare at camera, one droplet falls | The bath softly in the background |
| 7 | 16.0–19.5 | **Loop-out** | Static medium | A full-body shake-out, then a casual hop back toward/into the bath | The full product in frame for the CTA text |

**Asset plan:** 7 new keyframes using the Mango Element `d311ab53` and the bath photos. Shots 1–5 on Seedance 2.0 (action), shots 6–7 on Kling 3.0 Pro. The old SH03 splash and SH04 damp perch are fallbacks only.
Estimated cost: about 130 credits for a first pass, up to about 200 with retries (677 available).

## 5. On-screen captions (short, lowercase, only where they help)
| Time | Caption |
|---|---|
| 0.2–2.0 | **"i was told this was a drinking bowl"** (large) |
| 2.2–5.0 | "it lives on my cage now" |
| 9.3–12.0 | "floor stays dry." |
| 13.2–16.0 | **"very hydrated."** (large, alone) |
| 16.2–19.5 | small: "Mango's bath 🛁 link in bio" · "#ad · Amazon affiliate · AI-generated" |

## 6. Sound
- **0.0 s:** no music. It opens on a loud, crisp, close splash (ASMR water) so the hook is the sound as well as the picture.
- **2.0 s:** a light lo-fi bed fades in underneath at a low level.
- **Contained chaos:** splash stays in the foreground, music stays low.
- **12.0 s:** music **cuts to silence** for the pause, with only one drip. "Very hydrated." lands in near-silence.
- **16.0 s:** music back, a quick shake-off spray sound, and a splash on the hop back in that matches the opening, so the loop is seamless.
- Water sounds only. No meme SFX, no record scratch, no boings. Music and SFX stay CC0/PD.

## 7. CTA
- **On screen only (from 16.2 s):** "Mango's bath 🛁 link in bio", plus the small disclosure line.
- **Mango's last line stays in character:** "Same time tomorrow." He never mentions buying, links or Amazon.
- Post caption: *"he was told it was a drinking bowl 🛁 · #ad bath linked in bio (Amazon affiliate) · AI-generated"*
- Pinned comment: *"what did YOUR bird turn into a bathtub? 👇 (keep water shallow + always supervise)"*

## 8. Why this retains better
1. **Frame 1 is motion + water + colour.** The scroll stops before the brain registers "ad".
2. **The hook is a mini story with an open loop**: who told him that, and is he lying? It's worth watching the reveal to find out.
3. **Every product benefit is shown, not said**: the clear walls, the cage mount, the room to turn, the dry floor and the easy entry.
4. **The only benefit Mango speaks about is framed as social comedy** ("Nobody yells"), not as a spec.
5. **A payoff with a callback** ("drinking bowl" → "very hydrated") rewards anyone who watched to the end.
6. **The silence before the punchline** is a retention spike, because viewers wait for the line.
7. **It loops.** He hops back in, and that matches the opening splash, which drives rewatches, and rewatches are the strongest algorithm signal.
8. **The character is consistent.** The dry, cocky Mango can carry the pineapple video and every future product in the same voice.

## Safety notes (unchanged)
Shallow lukewarm water, the bird enters by himself, no soap, supervision noted in the pinned comment. The "drinking bowl" joke is Mango's character, not advice.
