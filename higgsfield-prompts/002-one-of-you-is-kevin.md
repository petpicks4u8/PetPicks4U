# Higgsfield Prompts: Video #002 "One of You Is Kevin"

Ready to paste. Checked against your Higgsfield account on 2026-09-26 (Plus plan, 1,010 credits). Credit costs below came from live cost checks, and nothing has been generated yet.

## Production method

Complicated scenes are split into simple steps, **still first, then motion**:

1. **Goldie Element.** Generate the master Goldie images (`characters/goldie/base-prompt.md` §4) and save the best one as a Higgsfield **Element** named `Goldie`.
2. **Product Element.** Upload the product reference photos (see `products/P001-hide-a-squirrel-xl.md`) and save them as an Element named `SquirrelTree`.
3. **Keyframes.** Generate one still per shot with **Nano Banana Pro** (supports Elements), 9:16, 2K. Approve each one with the continuity checklist before animating.
4. **Animate.** Feed each approved keyframe in as the **start frame**:
   - Low-motion shots → **Kling 3.0** (start frame, sound off)
   - Dog-and-product interaction shots → **Seedance 2.0** (start frame, plus Goldie and product as image references, audio off)
5. **Edit.** Trim, add the voiceover and sound effects in CapCut (see `videos/002-one-of-you-is-kevin/editing-plan.md`).

In the Higgsfield web app, type `@Goldie` / `@SquirrelTree` to insert an Element. When I run generation through the connected account, I insert them for you.

### Credit budget (live cost checks)
| Item | Unit cost | Qty (with retries) | Credits |
|---|---|---|---|
| Nano Banana Pro still, 2K | 2 | ~4 Goldie refs × 3 + 7 keyframes × 3 | ~66 |
| Kling 3.0 Pro, 5 s, sound off | 8.75 | 4 shots × 2 | ~70 |
| Seedance 2.0 std 720p, 5 s, audio off | 22.5 | 4 shots × 3 | ~270 |
| (draft option) Seedance 2.0 fast 720p | 12.5 | — | — |
| Kling 3.0 Std, 5 s, sound off | 7.5 | — | — |
| TTS lines (ElevenLabs via Higgsfield) | ~0.15 | ~20 takes | ~3 |
| **Estimated total** | | | **~400 of your 1,010** |

Tip: make drafts with Seedance **fast** mode, then re-run only the winners in std mode.

---

## Shared blocks (already built into every prompt below)

```
SUBJECT: @Goldie, large very pale cream / near-white English cream Golden Retriever, dark brown eyes, black nose, forest-green collar with round brass tag. Match the reference exactly.
PRODUCT: @SquirrelTree, soft brown plush tree-trunk dog toy with round holes, and small soft plush squirrel toys. Match the reference exactly.
SET: bright modern living room, light oak floorboards, round woven jute rug, cream linen sofa and fiddle-leaf fig softly blurred in the background, soft window daylight from camera-left.
REALISM: photorealistic, natural daylight, individual fur strands, realistic canine anatomy and weight, natural physics, true-to-life colour, shallow depth of field.
AVOID: extra legs or paws, malformed paws, extra tail, morphing, changing fur colour, golden/orange coat, cartoon look, duplicate dogs, duplicate or floating objects, product changing shape/colour/size, invented text or logos, background changes, flicker, human hands.
```

---

## KEYFRAMES (Nano Banana Pro · 9:16 · 2K · 2 credits each · generate 3 and pick the best)

### KF-A: The Lineup (Scenes 1 and 6)
```
Vertical 9:16 photograph, floor-level camera. Six small soft plush squirrel toys from @SquirrelTree sit upright in a neat evenly spaced straight row across a round woven jute rug, all facing the camera, sharp in the foreground. Directly behind the row, @Goldie — a large very pale cream, near-white English cream Golden Retriever with dark brown eyes, black nose and a forest-green collar with a round brass tag — lies flat in a sphinx pose, chin low, looking intently along the row of squirrels with a serious detective expression. The soft brown plush tree-trunk toy with round holes sits out of focus in the background. Bright modern living room, light oak floorboards, cream linen sofa and fiddle-leaf fig blurred behind, soft window daylight from the left. 35mm lens, shallow depth of field, photorealistic, individual fur strands, true-to-life colour. No text, no people, no hands, no extra objects.
```

### KF-B: Discovery (Scene 2)
```
Vertical 9:16 photograph at dog eye-level, medium-wide. A soft brown plush tree-trunk dog toy from @SquirrelTree stands on a round woven jute rug with three plush squirrel heads poking out of its round holes. @Goldie — a large very pale cream, near-white English cream Golden Retriever with dark brown eyes, black nose and forest-green collar with round brass tag — stands beside it on the right, head tilted about 30 degrees, ears perked, curious and suspicious. Bright modern living room, light oak floorboards, cream linen sofa and fiddle-leaf fig softly blurred behind, soft window daylight from the left. Photorealistic, natural fur texture, realistic anatomy, true-to-life colour. No text, no people.
```

### KF-C: The Sniff (Scene 3)
```
Vertical 9:16 close-up photograph, side angle. The black nose and muzzle of @Goldie — a very pale cream, near-white English cream Golden Retriever — pushed gently into one round hole of a soft brown plush tree-trunk dog toy (@SquirrelTree); the plush fabric dents softly around his nose. A small plush squirrel's bushy tail pokes out of a neighbouring hole. Whiskers visible, eyes half-closed in concentration. Shallow depth of field, soft window daylight, jute rug and light oak floor blurred below. Photorealistic, individual fur strands. No text.
```

### KF-D: Suspect One (Scene 4)
```
Vertical 9:16 photograph, medium close-up, front three-quarter view at dog eye-level. @Goldie — a large very pale cream, near-white English cream Golden Retriever with dark brown eyes, black nose, forest-green collar with round brass tag — holds one small soft plush squirrel toy gently in his mouth, head slightly raised, pleased expression, right next to the soft brown plush tree-trunk dog toy (@SquirrelTree) on a jute rug; two other squirrel heads still poke out of the trunk's holes. Bright living room, soft window daylight from the left. Photorealistic, realistic soft retriever mouth, natural fur. No text.
```

### KF-E: Victory Trot (Scene 5)
```
Vertical 9:16 photograph, low front angle. @Goldie — a large very pale cream, near-white English cream Golden Retriever with forest-green collar and round brass tag — walks proudly toward the camera across light oak floorboards with one small soft plush squirrel toy held gently in his mouth, head high, tail up mid-wag, mid-stride. Behind him, softly blurred, the brown plush tree-trunk toy (@SquirrelTree) on the jute rug. Bright modern living room, soft daylight. Photorealistic, natural gait, four legs clearly visible. No text.
```

### KF-F: The Guard (Scene 7)
```
Vertical 9:16 photograph, close-medium, front, dog eye-level. @Goldie — a large very pale cream, near-white English cream Golden Retriever with dark brown eyes, black nose, forest-green collar with round brass tag — lies on a round woven jute rug with ONE small soft plush squirrel toy held gently between his two front paws, chin slightly lowered, looking directly into the lens with a calm, knowing, slightly smug expression. Several other plush squirrels blurred in the background. Soft window daylight. Photorealistic, correct paw anatomy, natural fur. No text.
```

### KF-G: CTA Wide (Scene 8)
```
Vertical 9:16 photograph, wide, camera about one metre high angled slightly down. @Goldie — a large very pale cream, near-white English cream Golden Retriever with forest-green collar — lies relaxed on a round woven jute rug, chin resting on one small plush squirrel toy, content, eyes half-closed. Beside him, fully visible and in focus, the empty soft brown plush tree-trunk dog toy (@SquirrelTree) with its round holes; five more plush squirrels scattered casually around him on the rug. Bright modern living room, light oak floor, cream linen sofa and fiddle-leaf fig, soft window daylight from the left. Leave clear empty space in the lower third of the frame. Photorealistic, true-to-life colour. No text.
```

---

## VIDEO CLIPS (9:16 · 5 s · silent)

### SH01: Lineup hook · Kling 3.0 Pro · start frame = KF-A
```
Locked-off floor-level shot with a very slow push-in. The large very pale cream Golden Retriever lies perfectly still in a sphinx pose behind the row of plush squirrels; only his dark brown eyes move slowly from left to right along the row, one ear flicks once. The plush squirrels do not move. Calm, suspenseful, photorealistic, natural subtle breathing. Keep the dog's appearance, the number of squirrels and the background exactly as in the start frame. No morphing, no extra objects, no camera shake.
```

### SH02: Discovery · Seedance 2.0 (std or fast, 720p) · start frame = KF-B · image refs = Goldie, SquirrelTree
```
Static medium-wide shot at dog eye-level. The large very pale cream Golden Retriever standing beside the plush tree-trunk toy slowly tilts his head to one side, ears perk up, he leans in slightly toward the squirrel heads poking out of the holes, then tilts his head the other way. Realistic canine movement, natural weight shift, tail gives a slow uncertain wag. The plush toy stays still and keeps its exact shape and colour. Photorealistic, soft daylight, no camera movement, no morphing, no extra dogs or objects.
```

### SH03: The Sniff · Seedance 2.0 · start frame = KF-C · image refs = Goldie, SquirrelTree
```
Static close-up. The dog's black nose pushes gently a little deeper into the round hole of the soft plush tree-trunk toy, nostrils flare as he sniffs rapidly, whiskers twitch, the plush fabric dents softly and springs back. The squirrel tail in the neighbouring hole stays in place. Photorealistic, shallow depth of field, natural physics, no morphing, no change to the toy.
```

### SH04: Suspect One · Seedance 2.0 · start frame = KF-D · image refs = Goldie, SquirrelTree
```
Static medium close-up. Holding the small plush squirrel gently in his mouth, the large very pale cream Golden Retriever takes one step back from the plush tree-trunk toy and lifts his head proudly, tail wagging, looking satisfied. The squirrel stays held in his mouth the whole time, the tree-trunk toy wobbles slightly and settles, the other squirrel heads stay in their holes. Realistic retriever soft-mouth carry, natural movement, photorealistic. No duplicate squirrels, no floating objects, no morphing.
```
*Stretch goal (try once and keep only if it's clean): start from KF-B with this prompt instead: "…he pushes his nose into a hole, grips a plush squirrel and pulls it out of the trunk…". If it glitches, use the version above.*

### SH05: Victory Trot · Seedance 2.0 · start frame = KF-E · image refs = Goldie, SquirrelTree
```
Low front static shot. The large very pale cream Golden Retriever trots happily toward the camera across the light oak floor carrying one plush squirrel toy gently in his mouth, head high, ears bouncing, tail wagging, natural four-legged gait, and slows to a stop close to the lens. The background living room and the plush tree-trunk toy stay unchanged. Photorealistic, realistic paw placement and weight, no extra legs, no morphing, the squirrel stays in his mouth.
```

### SH06: The Side-Eye · Kling 3.0 Pro · start frame = KF-A
```
Locked-off floor-level shot, no camera movement. The large very pale cream Golden Retriever lies still in a sphinx pose behind the row of plush squirrels. After a moment, without moving his head, his eyes slowly slide sideways to look directly into the camera lens and hold there — a deadpan side-eye. One slow blink. Nothing else moves. Photorealistic, subtle, natural. Keep the squirrels, the dog and the background exactly as in the start frame.
```

### SH07: The Guard · Kling 3.0 Pro · start frame = KF-F
```
Static close-medium shot with a very slow push-in. The large very pale cream Golden Retriever lies with one plush squirrel between his front paws, looking straight into the lens; he gives one slow, deliberate blink and slightly lowers his chin over the squirrel, protective. Subtle breathing, ears relax. Photorealistic, correct paw anatomy, the squirrel keeps its shape, no morphing.
```

### SH08: CTA Wide · Kling 3.0 Pro · start frame = KF-G
```
Static wide shot. The large very pale cream Golden Retriever lying on the jute rug lets out a slow contented sigh, his ribcage rising and falling, then settles his chin more comfortably onto the plush squirrel; his tail thumps softly twice on the rug. The plush tree-trunk toy and the scattered squirrels stay perfectly still. Peaceful, cozy, photorealistic, soft daylight. No camera movement, no morphing, no extra objects.
```

---

## Approval checklist for every clip
- [ ] Goldie is pale cream / near-white, has a green collar, 4 legs, 1 tail
- [ ] The product keeps the same shape and colour and the squirrels don't multiply or vanish
- [ ] No floating objects and no background jumps
- [ ] The trimmed usable section is at least as long as the "Used length" in the shot list
- [ ] Save the approved file as `videos/002-one-of-you-is-kevin/clips/SH0X_v#.mp4` and log it in `generation-log.csv`
