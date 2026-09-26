# Goldie — Voice Profile

## Recommended workflow (all inside your existing Higgsfield Plus account)

1. **Generate Goldie's lines as audio separately** with Higgsfield **Text to Speech V2 → ElevenLabs engine** (`text2speech_v2`, `variant: elevenlabs`). Cost checked 2026-09-26: ~0.15 credits per short line — effectively free.
2. **Generate video clips silent** (sound off / `generate_audio: false`). This is cheaper and avoids the model inventing random barks or human speech.
3. **Combine in the editor** (CapCut is fine): place Goldie's lines over the clips as **internal-monologue voiceover**. Goldie's mouth does NOT lip-sync — she "thinks out loud." This is intentional:
   - Talking-dog lip-sync is the #1 thing that makes AI pet content look uncanny.
   - Voiceover-over-real-behaviour reads as funnier and more "real dog."
   - It keeps generation simple and reliable.

No separate voice service is required. If you ever outgrow the presets, ElevenLabs directly (paid) offers Voice Design from a text description — only consider that after the format is proven.

## Picking the voice (your 5-minute task)

Goldie's voice must be: confident · calm · dry/sarcastic · warm · memorable. Not hyperactive, cartoonish, childish.

Listen to these Higgsfield preset voices (open Higgsfield → Audio/Voice, or the preview links in `voice-candidates.json`) and pick one. Shortlist based on role fit — **I could not audition them myself**, so your ear decides:

| Priority | Voice | Why try it |
|---|---|---|
| 1 | Maeve | Female preset — test for low, dry, unhurried delivery |
| 2 | Vera | Female preset — test for calm, confident tone |
| 3 | Helena | Female preset — test for warm, mature register |
| 4 | Nadine | Female preset — alternative |
| Male alt | Desmond / Arthur / Holden | Only if you decide Goldie should read male |

**Audition line** (paste into TTS for each candidate):
> "Yes. I heard you. …I've chosen not to."

Pick the one that makes you smile on the pause. Then record the choice below and never change it.

## Locked settings (fill in once chosen)

```
Engine: text2speech_v2 / elevenlabs
Voice name: ________
Voice ID: ________
Voice type: preset
Delivery notes: slow, dry, a beat of silence before punchlines; export WAV
```

## Direction tips
- Write pauses with an ellipsis or a new sentence: "Five more minutes. …Maybe six."
- Generate 2–3 takes per line and choose the driest.
- Keep lines under ~8 words.
