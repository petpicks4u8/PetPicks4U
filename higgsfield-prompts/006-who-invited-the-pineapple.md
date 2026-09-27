# Higgsfield Prompts: Video #006 "Who Invited the Pineapple?" (Mango #1)

Ready to paste. **Nothing has been generated and no credits have been spent.**
Credit costs are from the live checks on 2026-09-26 (see `002-one-of-you-is-kevin.md`) and should be re-checked before running.

## Production order (stills first, then motion; each ⏸ is an owner approval)

0. ⏸ **Owner:** confirm the product, upload the pineapple reference photos (`products/P011-planet-pleasures-pineapple.md` §6), and pick Mango's voice.
1. **Mango master image + 3 angles** (`characters/mango/MANGO_BASE_PROMPT.md` §5), then save the best as a character **Element `Mango`**.
2. **Product Element `Pineapple`** from your photos, with the main image first.
3. **Keyframes KF-A to KF-G** (Nano Banana Pro, 9:16, 2K, with `@Mango` + `@Pineapple` **plus the best 2–3 pineapple photos passed directly as image references**, because Elements only inject their first image).
4. ⏸ **Owner approves the stills.**
5. **Clips:** Kling 3.0 Pro for low motion; Seedance 2.0 (start frame + Mango and pineapple image refs, audio off) for interaction. Maximum **2 Seedance jobs at once**. Decline any preset the tool recommends that nobody asked for (`declined_preset_id`).
6. **TTS lines** (Mango voice + Maeve), then assemble the rough cut in the Higgsfield sandbox (as in `videos/001-.../assemble_v3.sh`), then the owner adds music and SFX in CapCut.

### Credit budget (estimate; not yet approved)
| Item | Unit | Qty (with retries) | Credits |
|---|---|---|---|
| Mango master + 3 angles (Nano Banana Pro 2K) | 2 | 4 × 3 | ~24 |
| Keyframes KF-A to KF-G | 2 | 7 × 3 | ~42 |
| Kling 3.0 Pro 5 s, sound off (SH01, 03, 06, 07) | 8.75 | 4 × 2 | ~70 |
| Seedance 2.0 std 720p 5 s (SH02, 04, 05) | 22.5 | 3 × 3 | ~203 |
| Voice auditions + TTS lines | ~0.15 | ~30 | ~5 |
| **Total (std)** | | | **~345** |
| *Drafting Seedance in **fast** mode (12.5) and re-running only winners in std* | | | *~270* |

---

## Shared blocks (already built into every prompt below)

```
CHARACTER: @Mango (match the reference exactly) — one adult Sun Conure, photorealistic real bird: golden-yellow crown, back and shoulders; orange-red face strongest around the eyes; warm orange chest and belly; folded wings yellow with green feathers and a green-then-deep-blue band along the lower edge; olive-green tail with blue tips; solid dark grey-black hooked beak; dark eye in a bare white-to-pale-grey eye ring; dark grey feet with two toes forward and two back gripping the perch. About 30 cm long including tail. Wings folded.
PRODUCT: @Pineapple (match the reference images exactly) — a small handmade pineapple-shaped bird toy about 18 cm tall, woven from dried palm-leaf strips in the exact colours and pattern of the reference, hanging on a short natural-fibre loop from a small stainless-steel hook. Same size as the bird's body. No text or logos.
ENVIRONMENT: natural-wood tabletop bird play stand on a light oak side table beside a large bright window, soft daylight from camera-left; behind, softly blurred, a bright modern living room with a cream linen sofa and light oak floor.
PHYSICS: realistic small-parrot movement — quick light head movements, feet stay gripping the perch, wings stay folded, beak opens and closes naturally; the woven toy has real light weight, sways gently on its loop and springs back; torn strips fall straight down.
REALISM: photorealistic macro wildlife photography, 85–100mm lens, individual feathers visible, realistic avian anatomy, true-to-life colour, shallow depth of field, natural breathing micro-movements.
CONTINUITY: same single bird, same colour pattern, beak and eye ring; same pineapple with identical shape, colours and size; same set and light as the start frame.
AVOID: malformed wings, extra wings, spread or flapping wings, malformed feet, extra toes or feet, human-like feet, human hands or fingers, morphing or melting beak, beak changing colour, teeth, lips, talking beak, green juvenile plumage, all-red face, missing eye ring, crest, cartoon or 3D look, plastic or fur-like feathers, unnatural feather movement, changing colours, duplicate birds, duplicate pineapples, product morphing or changing shape/colour/size, floating objects, impossible physics, invented text or logos, watermark, flicker, background changes.
```

---

## KEYFRAMES (Nano Banana Pro · 9:16 · 2K · ~2 credits each · generate 3 and pick the best)

### KF-A: Two-shot, before the snap-turn (Scene 1)
```
Vertical 9:16 photograph. CHARACTER: @Mango, one adult Sun Conure — golden-yellow body, orange-red face and orange belly, folded wings with a green and deep-blue lower edge, olive-green blue-tipped tail, dark grey-black hooked beak, dark eye in a pale eye ring — perched in side profile on the left third of the frame on a natural wood perch, head turned away looking toward camera-left, relaxed. PRODUCT: @Pineapple, the woven palm-leaf pineapple bird toy exactly as in the reference images, hanging on a short loop from a small stainless-steel hook on the right third of the frame, at exactly the bird's head height, about one beak-length away; the toy and the bird's body are roughly the same size. ENVIRONMENT: natural-wood tabletop play stand beside a large bright window, soft daylight from the left, bright modern living room with a cream linen sofa softly blurred behind. CAMERA: eye level with the bird, tight two-shot, 100mm macro look, both subjects sharp, soft background. REALISM: photorealistic, individual feathers visible, true-to-life colour. Feet: dark grey, two toes forward and two back, gripping the perch. Wings folded. No text, no people, no hands, no other animals.
```

### KF-B: Wide establishing (Scene 2)
```
Vertical 9:16 photograph, medium-wide. A natural-wood tabletop bird play stand stands on a light oak side table beside a large bright window. @Mango, one adult Sun Conure (golden-yellow body, orange-red face, orange belly, green and blue wing edge, olive-green blue-tipped tail, dark hooked beak, pale eye ring), perches at the LEFT end of the horizontal perch, standing tall, chest out, looking toward the right. At the RIGHT end, @Pineapple — the woven palm-leaf pineapple bird toy exactly as in the reference images — hangs on a short loop from a small stainless-steel hook, clearly visible and in focus. The bird and the toy are about the same size. Behind, softly blurred: a bright modern living room with a cream linen sofa and light oak floor. Camera slightly below the bird's eye level, static composition. Photorealistic, soft window daylight from the left, true-to-life colour. Feet gripping the perch, two toes forward and two back. Wings folded. No text, no people, no hands.
```

### KF-C: Head tilt at the weave (Scene 3)
```
Vertical 9:16 close-up photograph. The head and chest of @Mango, one adult Sun Conure — orange-red face, pale bare eye ring, dark eye, dark grey-black hooked beak, golden-yellow crown, orange chest — fill the left half of the frame; his head is tilted about 45 degrees so one eye looks closely at the woven palm-leaf surface of @Pineapple, which fills the right half of the frame exactly as in the reference images, texture razor sharp. Curious, suspicious, focused expression. Soft window daylight from the left, background living room completely blurred. 100mm macro lens look, shallow depth of field, individual feathers and palm-leaf fibres visible, true-to-life colour. Feet out of frame. No text, no hands.
```

### KF-D: Beak gripping a strip (Scene 4)
```
Vertical 9:16 tight close-up photograph, side angle. The dark grey-black hooked beak of @Mango, one adult Sun Conure (orange-red face, pale eye ring, golden-yellow head), is gently gripping the loose end of ONE palm-leaf strip on the woven surface of @Pineapple, exactly as in the reference images; the strip is slightly lifted away from the weave. Intent, focused eye. The toy hangs on its short loop from a small stainless-steel hook. Soft daylight, blurred living-room background. Macro lens look, realistic beak anatomy — upper beak hooked over the lower, strip held between them — individual feathers and fibres visible. Feet out of frame. No text, no hands.
```

### KF-E: Strip in beak, side (Scene 5)
```
Vertical 9:16 medium close-up photograph. @Mango, one adult Sun Conure (golden-yellow body, orange-red face and orange belly, green and blue wing edge, dark hooked beak, pale eye ring), perched on a natural wood perch, holding ONE short torn palm-leaf strip, about 8 cm long, crosswise in his beak, pleased and energetic. Beside him, @Pineapple — the woven palm-leaf pineapple toy exactly as in the reference images — hangs from its short loop on a stainless-steel hook with one small frayed spot where a strip was pulled out. Soft window daylight, blurred bright living room. Photorealistic, feet gripping the perch with two toes forward and two back, wings folded. No text, no hands.
```

### KF-F: Front-on stare (Scene 6, the punchline)
```
Vertical 9:16 photograph, centred, eye level. @Mango, one adult Sun Conure (golden-yellow crown, orange-red face, pale eye rings, dark eyes, orange chest, dark hooked beak), faces the camera straight on, perfectly still, looking directly into the lens with a calm, completely unbothered, confident expression, holding ONE short torn palm-leaf strip crosswise in his beak. Just behind his shoulder, slightly out of focus, @Pineapple — the woven palm-leaf pineapple toy exactly as in the reference images — with a small frayed patch. Soft window daylight, blurred living room. Photorealistic, symmetrical composition, both eyes visible, feet gripping the perch, wings folded. No text, no hands.
```

### KF-G: Proud beside the pineapple (Scene 7, the CTA)
```
Vertical 9:16 photograph, medium shot, camera at perch height. @Mango, one adult Sun Conure (golden-yellow body, orange-red face, orange belly, green and blue wing edge, olive-green blue-tipped tail, dark hooked beak, pale eye ring), stands proudly on the natural-wood perch, chest out, right next to @Pineapple, which hangs from its short loop on a small stainless-steel hook and is still clearly and fully recognisable as the woven palm-leaf pineapple toy from the reference images, with just a few loose frayed strips on one side. Two or three torn palm-leaf strips lie on the light oak table below the perch. Bright window daylight, softly blurred modern living room with a cream linen sofa. Leave clean empty space in the lower third of the frame. Photorealistic, feet gripping the perch with two toes forward and two back, wings folded. No text, no people, no hands.
```

---

## VIDEO CLIPS (9:16 · 5 s · silent · sound off / `generate_audio: false`)

### SH01: The Snap-Turn · Kling 3.0 Pro · start frame = KF-A
```
CHARACTER: the same adult Sun Conure from the start frame, identical colours, beak and eye ring.
PRODUCT: the same woven palm-leaf pineapple toy, unchanged, hanging still.
ACTION: the parrot, looking away to the left, quickly swivels his head round to face the pineapple toy and freezes, staring at it; his head and neck feathers lift very slightly. That is the only action.
ENVIRONMENT: unchanged window perch and blurred living room.
CAMERA: locked-off eye-level two-shot, no camera movement.
PHYSICS: quick, light, bird-like head movement with a sharp stop; body stays still; feet stay gripping the perch; wings stay folded; the toy turns at most a degree on its loop.
REALISM: photorealistic macro, natural feather detail, soft daylight.
CONTINUITY: keep the bird, the toy and the background exactly as in the start frame.
AVOID: morphing beak, extra wings, wing movement, foot movement, extra toes, human hands, product changing shape or colour, duplicate objects, flicker, cartoon look, talking beak.
```

### SH02: The Sidestep · Seedance 2.0 (std, or fast for drafts, 720p) · start frame = KF-B · image refs = Mango master, Pineapple main image
```
CHARACTER: the same adult Sun Conure — golden-yellow body, orange-red face, green and blue wing edge, olive-green tail, dark hooked beak, pale eye ring.
PRODUCT: the same woven palm-leaf pineapple toy hanging at the right end of the perch, perfectly still and unchanged.
ACTION: the parrot shuffles sideways along the wooden perch toward the pineapple toy with two or three small, careful side-steps, then stops and puffs his chest out, facing it.
ENVIRONMENT: the same natural-wood play stand, window light and blurred living room.
CAMERA: static medium-wide shot, slightly below the bird's eye level, no camera movement.
PHYSICS: a realistic parrot side-step — one dark grey zygodactyl foot (two toes forward, two back) lifts and re-grips the perch at a time, the body stays level, wings stay folded, the tail stays behind the perch; weight shifts naturally.
REALISM: photorealistic, natural feather movement, soft daylight.
CONTINUITY: same bird, same toy, same set as the start frame.
AVOID: flying, hopping into the air, wing flapping, extra wings, extra feet or toes, malformed feet, feet merging with the perch, human hands, product morphing, duplicate birds, floating objects, background change, flicker, cartoon look.
```
*Fallback (if the feet break): the same prompt with this ACTION instead: "the parrot stays in place, bobs his head twice and leans his whole body toward the pineapple toy, chest out; feet do not move."*

### SH03: "Under review." · Kling 3.0 Pro · start frame = KF-C
```
CHARACTER: the same Sun Conure head and chest as the start frame.
PRODUCT: the same woven palm-leaf surface, unchanged and still.
ACTION: keeping his head tilted so one eye looks at the weave, the parrot slowly leans in a little closer, then holds, blinking once. One slow, suspicious inspection move only.
ENVIRONMENT: unchanged, soft blurred background.
CAMERA: static close-up with a very slow push-in of about 5 percent.
PHYSICS: smooth, small, precise head movement; body still; wings folded; beak stays closed.
REALISM: photorealistic macro, individual feathers and palm fibres sharp.
CONTINUITY: identical bird and texture to the start frame.
AVOID: morphing beak, beak opening, teeth, extra eyes, eye ring disappearing, product morphing, flicker, cartoon look.
```

### SH04: The Tug · Seedance 2.0 · start frame = KF-D · image refs = Mango master, Pineapple main + weave close-up
```
CHARACTER: the same adult Sun Conure — orange-red face, pale eye ring, dark grey-black hooked beak.
PRODUCT: the same woven palm-leaf pineapple toy hanging from a short loop on a stainless-steel hook.
ACTION: gripping the end of one palm-leaf strip in his beak, the parrot pulls his head back firmly two or three times; the single strip stretches, bends and peels partly away from the weave.
ENVIRONMENT: unchanged window perch, blurred background.
CAMERA: static tight side-angle close-up; the bird's feet are out of frame.
PHYSICS: the beak keeps a firm hold of the same strip the whole time; the pineapple toy sways gently toward the bird with each pull and swings back on its loop; the weave dents where the strip is pulled; only that one strip moves; no other pieces appear.
REALISM: photorealistic macro, realistic beak — hooked upper mandible over the lower — dry natural palm-leaf texture.
CONTINUITY: same bird, same toy colours and shape as the start frame.
AVOID: beak morphing or melting, beak passing through the strip, extra strips appearing, strip changing colour, the toy changing shape or colour, the toy detaching and floating, human hands, wings appearing in frame, flicker, cartoon look.
```
*Fallback: start from KF-E instead (strip already torn free in his beak) with the ACTION "the parrot pulls his head back once with the strip, as if it has just come free, then holds it."*

### SH05: The Flick · Seedance 2.0 · start frame = KF-E · image refs = Mango master, Pineapple main image
```
CHARACTER: the same adult Sun Conure holding one short torn palm-leaf strip in his beak.
PRODUCT: the same woven pineapple toy beside him with one small frayed spot, unchanged otherwise.
ACTION: with one quick sideways flick of his head, the parrot tosses the torn strip away; it tumbles down out of the bottom of the frame; he immediately turns his head back toward the pineapple, keen.
ENVIRONMENT: unchanged window perch, blurred living room.
CAMERA: static medium close-up.
PHYSICS: one fast, natural head flick; the strip releases from the beak and falls under gravity, turning once as it drops; feet stay gripping the perch; wings stay folded; the pineapple barely moves.
REALISM: photorealistic, natural feather movement.
CONTINUITY: same bird and same toy as the start frame.
AVOID: the strip floating or flying upward, the strip multiplying, beak morphing, wing flapping, extra wings, extra feet, human hands, product morphing, flicker, cartoon look.
```

### SH06: The Stare · Kling 3.0 Pro · start frame = KF-F
```
CHARACTER: the same adult Sun Conure, facing the camera, a short palm-leaf strip held in his beak.
PRODUCT: the same pineapple toy, slightly out of focus behind his shoulder, unchanged.
ACTION: the parrot stays perfectly still, looking straight into the lens; after a moment he slowly tilts his head about 30 degrees to one side and holds that tilt, unbothered. One slow head tilt only.
ENVIRONMENT: unchanged.
CAMERA: locked-off, eye level, centred, no movement.
PHYSICS: subtle breathing, one slow smooth head tilt, the strip stays held in the beak the whole time, feet still, wings folded.
REALISM: photorealistic, sharp eyes and eye rings, true-to-life colour.
CONTINUITY: identical bird, strip and background to the start frame.
AVOID: dropping the strip, beak morphing, talking beak, extra eyes, face distortion, wing movement, human hands, flicker, cartoon look.
```

### SH07: The Floof · Kling 3.0 Pro · start frame = KF-G
```
CHARACTER: the same adult Sun Conure standing proudly on the perch.
PRODUCT: the same pineapple toy, still fully recognisable, hanging still; the torn strips on the table stay where they are.
ACTION: the parrot fluffs up all his body feathers in one proud whole-body puff, gives a quick natural shake-out, the feathers settle smooth again, and at the very end he turns his head to look at the pineapple.
ENVIRONMENT: unchanged window perch, blurred living room.
CAMERA: static medium shot with a very slow push-in; keep the lower third of the frame clear.
PHYSICS: realistic parrot feather-fluff and shake — the feathers lift and settle, the body stays on the perch, feet keep gripping it, wings stay folded against the body during the shake.
REALISM: photorealistic, individual feathers moving naturally, soft daylight.
CONTINUITY: same bird colours, same pineapple, same debris, same set.
AVOID: wings opening, extra wings, flying, feet leaving the perch, extra feet, fur-like or melting feathers, colour change, product morphing, new debris appearing, human hands, flicker, cartoon look.
```
*Fallback: ACTION "the parrot stands proudly, chest out, then turns his head to look at the pineapple" (no floof).*

---

## Approval checklist for every still and clip
- [ ] Passes `characters/mango/MANGO_CHARACTER_BIBLE.md` §10: yellow and orange colours, two folded wings, correct zygodactyl feet, dark beak not morphing, pale eye ring
- [ ] The pineapple matches the owner's reference photos (shape, colours, size about equal to Mango's body) and there's only ever one
- [ ] No floating strips, no strips multiplying, no background jumps
- [ ] The trimmed usable section is at least as long as the "Used" length in the shot list
- [ ] Save as `videos/006-who-invited-the-pineapple/clips/SH0X_v#.mp4` and log it in `generation-log.csv`
