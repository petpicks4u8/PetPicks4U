# V005 "Morning Dip": audio mix v2 (music + SFX + natural voice)

Owner asked for music and sound effects and a less robotic voice (2026-09-27).

## Voice
- Re-recorded with **text2speech_v2 / ElevenLabs**, **Dylan** preset (b847bc29-f184-583a-8ad9-d1f1e16d1a60). This replaces seed_audio, which sounded robotic.
- Post-processing: rubberband pitch ×1.12 (about +2 semitones) with formants preserved, so it's a little squeaky without sounding chipmunk-like. Also a highpass at 90 Hz, light compression and a small room echo (aecho 0.8:0.5:30:0.12).
- Jobs: 3698853e (Mmm… morning routine) · 0c0f7613 (Step one… the dip) · 439c176e (Ahhhh… so refreshed) · 4fb0a414 (Clean. Fluffy. Ready for the day!)

## Music (both free for commercial use, no attribution legally required)
| Version | Track | Licence | Source |
|---|---|---|---|
| A (recommended) | "Beach", Loyalty Freak Music | **CC0** | https://commons.wikimedia.org/wiki/File:Loyalty_Freak_Music_-_08_-_Beach.ogg |
| B | "Lofi music 001", Luisalvaz | **CC0** | https://commons.wikimedia.org/wiki/File:Lofi_music_001.wav |

The music is ducked under the voice (sidechain), fades in over 0.8 s and fades out from 18.3 s. The final mix is normalised to -14 LUFS, the TikTok, Reels and Shorts target.

## Sound effects (public domain)
- Splash: "Bathtub water splashes" (PD): https://commons.wikimedia.org/wiki/File:Bathtub_water_splashes.ogg. A gentle splash runs 4.3–7.5 s and a full splash 7.4–11.6 s.
- Drips: "Emptying syringe in water slow" (PD): https://commons.wikimedia.org/wiki/File:Emptying_syringe_in_water_slow.ogg. Drips land at 0.1 s, 12.6 s and 14.2 s.

## Outputs (Higgsfield media)
- **A, Beach (captioned):** f6abe310-7715-4a86-9d2d-ca545bfde931
- **B, Lo-fi (captioned):** c570f70b-a89d-4ef2-b718-cc44790a2ecb
- Video track reused from v1 captioned (837a1362). Caption 1 still reads "Morning routine." (the VO now says "Mmm… morning routine.").

## v3 (owner: "only keep the splash inside the bath")
- Removed the drips (0.1, 12.6, 14.2 s) and the gentle dip splash (4.3–7.5 s).
- Kept **only** the full bath splash at 7.4–11.6 s. Voice and music are unchanged.
- **A, Beach (captioned):** d25de6e6-4e31-48cf-a000-2c7a20135099
- **B, Lo-fi (captioned):** eb343b19-63e0-4f4e-96ad-2f00ec60cdd6

## v4, FINAL candidate (owner picked the Lo-fi version and asked for quieter music and splash)
- Music: Lo-fi, volume 0.35 → **0.25** (about −3 dB). Splash: 3.2 → **2.0** (about −4 dB). Voice unchanged; overall mix still normalised to −14 LUFS.
- **Lo-fi v4 (captioned):** f8d2573c-15e2-4647-b261-7d4ec095953d
