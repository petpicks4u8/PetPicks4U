# Goldie — Voice Profile

## Recommended workflow (all inside your existing Higgsfield Plus account)

1. **Generate Goldie's lines as audio separately** with Higgsfield **Text to Speech V2 → ElevenLabs engine** (`text2speech_v2`, `variant: elevenlabs`). Cost checked 2026-09-26: ~0.15 credits per short line — effectively free.
2. **Generate video clips silent** (sound off / `generate_audio: false`). This is cheaper and avoids the model inventing random barks or human speech.
3. **Combine in the editor** (CapCut is fine): place Goldie's lines over the clips as **internal-monologue voiceover**. Goldie's mouth does NOT lip-sync — he "thinks out loud." This is intentional:
   - Talking-dog lip-sync is the #1 thing that makes AI pet content look uncanny.
   - Voiceover-over-real-behaviour reads as funnier and more "real dog."
   - It keeps generation simple and reliable.

No separate voice service is required. If you ever outgrow the presets, ElevenLabs directly (paid) offers Voice Design from a text description — only consider that after the format is proven.

## Picking Goldie's voice (male) — your 5-minute task

Goldie's voice must be: **confident · calm · dry/sarcastic · warm · memorable.** Think "unbothered big guy who narrates his own bad decisions." Not hyperactive, cartoonish, childish, or cartoon-deep "movie trailer."

Honest note: this environment can't play or download the preview audio, so **I picked these from Higgsfield's male preset catalogue but have not heard them.** Your ear makes the final call. Preview links + voice IDs are in `voice-candidates.json`.

| Priority | Voice | Test whether it can do… |
|---|---|---|
| 1 | **Desmond** | Warm, mid-low, unhurried: the "calm big dog" baseline |
| 2 | **Arthur** | Dry deadpan, for "Who? Never heard of him." |
| 3 | **Harrison** | Confident and grounded |
| 4 | **Sterling** | "Busted but dignified" |
| 5 | **Gideon** | Lower-register deadpan |
| 6 | **Alistair** | Dry understatement |
| Alts | Holden · Brooks · Julian · Orion · Marcus · Bram | Try if none of the top 6 click |

**Human (off-screen owner) voice:** use a clearly different voice, e.g. Maeve or Vera (female), so viewers instantly know who's talking.

**Audition line** (use for every candidate):
> "…Ugh. I'm not supposed to do that."

Then: *"Who? Never heard of him."* — pick the voice where both lines make you laugh. Lock it below and never change it; the voice becomes part of the brand.

Option: tell me "run the voice auditions" and I'll generate those two lines in the top 6 voices through your Higgsfield account (~2 credits total) so you can compare them side by side.

## Locked settings (fill in once chosen)

```
Engine: text2speech_v2 / elevenlabs
Voice name: Desmond (LOCKED 2026-09-27 by owner)
Voice ID: 563f728c-e249-5a85-97ab-8461e8c09da6
Voice type: preset
Delivery notes: slow, dry, a beat of silence before punchlines; export WAV
```

## Direction tips
- Write pauses with an ellipsis or a new sentence: "Five more minutes. …Maybe six."
- Generate 2–3 takes per line and choose the driest.
- Keep lines under ~8 words.
