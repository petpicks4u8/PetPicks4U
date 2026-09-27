# Mango: Base Generation Prompt

This is the reusable visual foundation for every Mango generation. Every scene prompt in `higgsfield-prompts/` is built like this:

```
[SUBJECT] + [PRODUCT] + [ACTION] + [ENVIRONMENT] + [CAMERA] + [PHYSICS] + [REALISM] + [CONTINUITY] + [AVOID]
```

Once the Mango Element exists (§5), the SUBJECT block shrinks to `@Mango` + the short version.
**Checked against:** `MANGO_CHARACTER_BIBLE.md` v1.0.

---

## 1. SUBJECT, full version (for text-only generations and the master image)

```
SUBJECT: Mango, a single adult Sun Conure parrot (Aratinga solstitialis), photorealistic real bird. Small parrot, about 30 cm long including a long tapered tail, compact round chest, large head, short neck. Plumage: bright golden-yellow crown, nape, back and shoulders; rich orange to orange-red face, strongest around the eyes and cheeks; warm orange chest and belly blending into yellow; folded wings yellow on top with green feathers mixed in and a band of green then deep blue flight feathers along the lower wing edge; olive-green tail with blue tips. Solid dark grey-black strongly hooked beak. Dark brown, almost black eyes inside a bare white-to-pale-grey eye ring. Dark grey scaly legs and zygodactyl feet, two toes forward and two back, dark curved claws, gripping the perch. Healthy, tidy, glossy natural feathers with visible feather edges and soft chest down. Alert, bright, confident, curious expression. No collar, no band, no accessories.
```

## 2. SUBJECT, short version (use when the Mango Element or reference image is attached)

```
SUBJECT: @Mango (match the reference exactly) — one adult Sun Conure: golden-yellow body, orange-red face and orange belly, green-and-blue wing edge, olive-green blue-tipped tail, dark hooked beak, dark eye with pale eye ring, dark grey feet with two toes forward and two back. Wings folded.
```

## 3. ENVIRONMENT: "Mango's corner" (default set)

```
ENVIRONMENT: A natural-wood tabletop bird play stand on a light oak side table beside a large bright window; soft natural daylight from camera-left. Behind, softly out of focus: a bright modern living room with a cream linen sofa, light oak floor and a tall green plant far in the background. Clean, calm, uncluttered, warm neutral colour.
```

## 4. PHYSICS, REALISM, CONTINUITY and AVOID blocks

```
PHYSICS: Realistic small-parrot movement: quick, light, precise head movements; body weight settles on the perch; feet stay gripping the perch unless stated; wings stay folded against the body; beak opens and closes naturally, the lower beak moving; objects react with real weight — soft materials bend and spring back, torn pieces fall straight down under gravity.
```

```
REALISM: Photorealistic wildlife/macro photography look, shot on a full-frame camera with a 100mm macro or 85mm lens, natural soft daylight, individual feathers and feather edges visible, realistic avian anatomy, true-to-life colour, shallow depth of field, subtle natural micro-movements and breathing.
```

```
CONTINUITY: Same single Sun Conure in every shot — identical colour pattern, beak shape, eye ring and size; same product with identical shape, colours and proportions; same set and lighting as the start frame.
```

```
AVOID: malformed wings, extra wings, spread or flapping wings, malformed feet, extra toes, extra feet, three-toed or human-like feet, human hands, fingers, morphing or melting beak, beak changing colour or shape, teeth, lips, mouth-like beak, talking or lip-syncing beak, green juvenile plumage, all-red face, blue eyes, missing eye ring, crest, cartoon, 3D animation, plastic or fur-like feathers, unnatural feather movement, changing colours, duplicate birds, product morphing or changing shape, colour or size, floating objects, impossible physics, invented text or logos, watermark, flicker, background changes.
```

---

## 5. Master reference image (generate once and reuse forever)

This is the equivalent of Goldie's master job `357ceade`. It's the first paid step, so it needs your go-ahead.

- **Model:** Nano Banana Pro (`nano_banana_pro`), 2K, 9:16. It cost about 2 credits per image on 2026-09-26.
- **Generate 4, pick the best,** then save it in Higgsfield as an **Element named `Mango`** (a character) and record the ID in `higgsfield-prompts/higgsfield-ids.md`.
- Higgsfield Elements only inject their **first image**, so the chosen master must be a clean, full-body, side-three-quarter view.

**Master prompt**
```
Photorealistic full-body portrait of Mango, a single adult Sun Conure parrot (Aratinga solstitialis), perched on a natural wood perch of a tabletop bird play stand beside a bright window. Three-quarter side view facing camera-left, head turned toward the camera, whole bird in frame from beak to tail tip. Small parrot, about 30 cm long including a long tapered tail, compact round chest, large head. Plumage: bright golden-yellow crown, nape, back and shoulders; rich orange to orange-red face, strongest around the eyes and cheeks; warm orange chest and belly blending into yellow; folded wings yellow on top with green feathers mixed in and a band of green then deep blue flight feathers along the lower wing edge; olive-green tail with blue tips. Solid dark grey-black hooked beak, closed. Dark brown almost black eye inside a bare white-to-pale-grey eye ring. Dark grey scaly feet gripping the perch, two toes forward and two toes back, dark claws. Wings folded. Healthy, glossy, tidy natural feathers. Alert, bright, confident, curious expression. Background: softly blurred bright modern living room with a cream linen sofa and light oak floor, soft natural daylight from the left. 100mm macro lens look, sharp focus on the eye, shallow depth of field, true-to-life colour. No text, no watermark, no people, no hands, no other animals.
```

**Three supporting angles** (attach the approved master as the image reference):
1. `Same bird, same perch, same room: straight-on front view, facing the camera, head slightly tilted, both eyes visible.`
2. `Same bird, same perch, same room: extreme close-up portrait of the head in side profile, eye ring and hooked beak sharp.`
3. `Same bird, same perch, same room: back three-quarter view showing folded wings with the green-and-blue edge and the olive-green blue-tipped tail.`

Approve only images that pass the continuity checklist in `MANGO_CHARACTER_BIBLE.md` §10. Save the approved files to `characters/mango/reference-images/` and log the job IDs in the first Mango video's `generation-log.csv`.

---

## 6. Model choice for Mango (same pipeline as Goldie)

| Shot type | Model | Why |
|---|---|---|
| Keyframes / stills | **Nano Banana Pro**, 9:16, 2K, with the `@Mango` Element and product images | Strongest identity and product fidelity |
| Low-motion clips (head turn, tilt, stare, floof) | **Kling 3.0 Pro**, start frame, sound off | Cheaper and very stable on small motion |
| Beak-and-object interaction (tug, flick, sidestep) | **Seedance 2.0**, 720p, start frame + Mango and product image refs, audio off | Better contact physics |
| Drafts | Seedance 2.0 **fast** | About half the credits; re-run winners in std |

**Parrot-specific tip:** in video prompts, describe **what the head and beak do** and state that **"the feet stay gripping the perch and the wings stay folded"**. Leaving the feet and wings unmentioned invites the model to animate them, and that is where the anatomy breaks.
