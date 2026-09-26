# Goldie — Base Generation Prompt

Paste the **SUBJECT block** at the start of every Goldie prompt. Paste the **NEGATIVE block** at the end.
Every scene prompt in `higgsfield-prompts/` is built as:

```
[SUBJECT block] + [PRODUCT block] + [ACTION] + [ENVIRONMENT] + [CAMERA] + [REALISM] + [CONTINUITY] + [NEGATIVE block]
```

Once the Goldie reference image exists and is saved as a Higgsfield **Element** (see §4), the SUBJECT block becomes: `<Goldie element tag>, ` followed by the short version.

---

## 1. SUBJECT block — full (use for text-only generations and the master reference image)

```
SUBJECT: Goldie, a large adult English cream Golden Retriever, about 30 kg, healthy athletic build, deep chest. Very pale cream, almost white, thick fluffy double coat with soft wavy feathering on the chest, legs, belly and a long plumed tail; ears a slightly warmer cream. Broad gently domed head, short muzzle, dark brown almond-shaped expressive eyes with dark rims, solid black nose, black lips. Friendly, intelligent, slightly mischievous expression. Wearing a plain forest-green flat collar with a small round brass tag (no text).
```

## 2. SUBJECT block — short (use when the Goldie reference image / Element is attached)

```
SUBJECT: Goldie (match the reference image exactly) — large very pale cream / near-white English cream Golden Retriever, dark brown eyes, black nose, forest-green collar with round brass tag.
```

## 3. REALISM + NEGATIVE blocks

```
REALISM: Photorealistic, shot on a modern full-frame camera, natural soft daylight, individual fur strands visible, realistic canine anatomy, weight and gait, natural physics, subtle handheld feel, shallow depth of field, true-to-life colour.
```

```
AVOID: extra legs, extra paws, malformed or merged paws, extra tail, morphing body, changing fur colour, golden/orange/red coat, cartoon or 3D-animation look, anthropomorphic poses, standing on hind legs, human hands unless specified, duplicate dogs, duplicate or floating objects, product changing shape, size, or colour, invented text or logos, warped background, flickering, sudden background changes.
```

## 4. Master reference image (generate once, reuse forever)

Generate this first, pick the best result, and save it in Higgsfield as an Element named **Goldie**. Also download it to `characters/goldie/reference-images/goldie-master-front.png`.

- **Model:** Nano Banana Pro (`nano_banana_pro`), 2K, 9:16 — ~2 credits per image (checked 2026-09-26)
- **Prompt:**

```
Full-body photograph of Goldie, a large adult English cream Golden Retriever, about 30 kg, healthy athletic build, deep chest. Very pale cream, almost white, thick fluffy double coat with soft wavy feathering on the chest, legs, belly and a long plumed tail; ears a slightly warmer cream. Broad gently domed head, short muzzle, dark brown almond-shaped expressive eyes with dark rims, solid black nose, black lips. Wearing a plain forest-green flat collar with a small round brass tag. He sits calmly on light oak floorboards on a round woven jute rug in a bright modern living room with a cream linen sofa and a fiddle-leaf fig, soft window daylight from the left. Head slightly tilted, looking directly at the camera with a curious, knowing expression. Eye-level camera, 50mm lens, sharp focus on the eyes, photorealistic, individual fur strands, true-to-life colour. No text, no watermark.
```

Then generate **3 supporting angles** with the master image attached as a reference (so you have a 4-image set for the Element):
1. `Same dog, same collar, same room: side profile standing, full body, tail relaxed.`
2. `Same dog, same collar, same room: lying down on the jute rug, chin on front paws, looking up at camera.`
3. `Same dog, same collar, same room: close-up portrait, head tilt, ears perked.`

Approve only images that pass the continuity checklist in `character-bible.md` §8.
