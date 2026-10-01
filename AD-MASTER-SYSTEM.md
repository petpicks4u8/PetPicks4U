# Amazon Product → Ad: Master System (owner's standing brief, 2026-10-01)

**Trigger:** the owner pastes an Amazon product link (amazon.com, amzn.to, link.amazon …). That link alone means: run this whole workflow. Don't wait to be told "research this" or "make an ad".

**Core principle: ENTERTAIN FIRST. SELL SECOND.** It should feel like a funny, cute, relatable or satisfying pet video, not an AI ad. The pet is the star; the product is part of the situation.

Order of work, with no jumping straight to a script:
**ACCESS → RESEARCH → UNDERSTAND → VISUAL REFERENCES → CUSTOMER INSIGHT → CHARACTER → CONCEPT → SCRIPT → GENERATION PROMPTS → QUALITY CHECK.**

---

## House adaptations (how this brief works in our setup)

These apply on top of the brief and follow `CLAUDE.md`:

1. **Amazon is blocked from this environment.** Neither the link nor amazon.com can be opened here. So:
   - First say plainly that the listing can't be opened.
   - If the link is a short link (amzn.to / link.amazon), ask which product it is, or for the ASIN.
   - Research through web search (manufacturer site, Chewy, Walmart, reviews, Reddit, the brand's TikTok).
   - Ask the owner for screenshots of the main image, the gallery, "About this item", the specs, the price, stars and review count, plus 1–3 customer photos.
   - Label every fact VERIFIED / SNIPPET / UNVERIFIED. **Never fill a gap by guessing.**
2. **Visual library:** product images come from the owner's screenshots, uploaded to Higgsfield as a prop Element with the hero image first (elements only inject their first image). Save them to `products/P0XX-reference/` for **private reference only**. Never repost listing photos publicly or on the website, and never edit them or strip trademarks.
3. **Characters:**
   - **Goldie** (the brief spells it "Goldey"; the locked spelling is **Goldie**): `characters/goldie/character-bible.md`.
   - **Mango**: Sun Conure, Higgsfield element `d311ab53-bc2c-4a99-851d-d178fc7a6042` (bible: `characters/mango/`).
   - **Sukar**, the cat, **doesn't exist yet**. For a cat product, propose creating Sukar first (character bible, master image, voice) and get the owner's OK before spending credits.
   - Never force a character onto a product that doesn't fit.
4. **Stop points (⏸) still apply:** owner approves the product and the concept → keyframe stills → owner approves the stills → clips. Never spend credits beyond the balance, buy anything, publish, or create affiliate links without approval.
5. **Prices:** OK to note in research. **Never** put prices in videos, captions or on the website.
6. **Claims:** only what the listing or manufacturer actually states. No health, efficacy or safety promises ("non-toxic", "vet-approved", "makes him drink more"). Benefits are the pet's playful opinion. Every package includes **Things to know**: the honest limitations.
7. **Disclosure:** the owner puts **#ad** and the Amazon affiliate wording in the post caption and switches on the platform's **AI-generated** label. Always remind them. Burned-in captions stay inside the safe zone (see `CLAUDE.md`).
8. **Flag before building:** if the product is poor, misleading, unsafe for the animal, badly reviewed or a bad fit for PetPicks4You, say so and recommend an alternative *before* writing the ad. Never sacrifice trust for a sale.
9. **Website:** add the product to `website/src/content/products.ts` with `published: false`. When the video goes live, set it to `true` and add `videoUrl` and the owner's affiliate link.
10. **Logging:** product → `products/product-database.csv` (+ product card `products/P0XX-*.md`), research → `research/`, script → `scripts/`, prompts → `higgsfield-prompts/`, captions → `captions/`, every generation → that video's `generation-log.csv`. Commit and push.

---

## Target markets & competitor research (owner direction, 2026-10-01)

The owner brings a promising product; **Claude does the full research.** Every product gets both checks below **before** concepts are written.

**Target markets:**
- 🇺🇸 **USA**: amazon.com
- 🇦🇪 **UAE**: amazon.ae
- 🇸🇦 **Saudi Arabia**: amazon.sa
- 🇰🇼 Kuwait, 🇶🇦 Qatar, 🇧🇭 Bahrain and 🇴🇲 Oman: check which Amazon store actually delivers there (e.g. amazon.ae / amazon.sa cross-border, or amazon.com international shipping), and confirm it per product. Never assume.

### A · Availability check (per market)
For the exact product (and the right size/variant), record per market:
- Is it listed?
- Is it sold/shipped by Amazon or by a third party?
- Does it ship there, and roughly how fast?
- Rating and review count on *that* store (reviews differ by store)
- Price (research only)
- Any voltage/plug, size or regulatory issue: e.g. US 110 V plugs vs Gulf 220–240 V with UK-style Type G plugs in the UAE, Qatar, Bahrain and Kuwait.

Amazon is blocked from this environment. Use web search snippets, the brand's regional sites and distributors, then mark each cell VERIFIED / SNIPPET / UNVERIFIED. **Ask the owner to open the product on amazon.ae and amazon.sa from their phone and screenshot the price/stars/"deliver to" line** for anything unconfirmed.

### B · Competitor research (per market)
- Find **3–5 direct alternatives** (same job, same animal and size).
- Compare them on: rating, review count, *repeated* praise/complaints, price, availability in each market, build/materials, safety notes, and how well each would show on video.
- **Recommend the best product per market.** If a competitor beats the owner's pick, or the owner's pick isn't sold or shipped in the Gulf, say so clearly and suggest the swap (or a Gulf-market alternative) **before** making the ad.
- Prefer one product that's available in all target markets, so one video works everywhere. If that isn't possible, name a US pick and a Gulf pick that look similar enough for the same video.

### Output: add to the Product Summary
| Market | Listed? | Sold/shipped by | Delivers? | Rating (reviews) | Price (research only) | Notes | Confidence |
|---|---|---|---|---|---|---|---|

followed by a short competitor table and a one-line verdict: **"Go with X for USA + Gulf"**, or **"Swap to Y because…"**.

### Affiliate links per market
Amazon's affiliate programmes are separate per store. A **US Associates link earns only on amazon.com**. The UAE (amazon.ae) and Saudi (amazon.sa) need their own Associates sign-ups and their own links. Keep one link per market in `analytics/affiliate-links.csv`. The website can then send each visitor to their own country's store once the Gulf links exist.

---

## Phase checklist

**1 · Identify:** (then run *Target markets & competitor research* above)  exact name, brand, category, intended animal, price (research only), main function, key features, materials, size/dimensions, variants, how it's used, the problem it solves, what's visually interesting, limitations/requirements. Look past the title.

**2 · Deep research:** listing, description, bullets, specs, manufacturer info, reviews (repeated praise *and* repeated complaints), Q&A, reliable external sources. What is it actually useful for? Why would an owner want it? What makes someone stop scrolling, or say "my pet needs that"? Never invent a feature, spec, safety claim or capability.

**3 · Visual library:** hero image, multiple angles, in-use shots, scale, accessories/components, lifestyle shots of it working. Enough for the generator to reproduce the real product.

**4 · Customer:** who owns this animal, what annoys them, what would make them laugh, what makes them picture *their* pet using it. Pick the strongest emotional angle ("my dog would absolutely do this", "that's actually genius", "look how happy that bird is"). No fake urgency.

**5 · Character:** dog → Goldie, bird → Mango, cat → Sukar (once created). Behaves like a real pet with personality.

**6 · Angle:** generate several angles internally and pick the best on naturalness, entertainment, product visibility, instant comprehension, relatability, humour, emotion, scroll-stop and AI-feasibility. Build it around **something happening**, not "Introducing the amazing…".

**7 · Script rules:** short, natural sentences; reactions; situational comedy. No corporate language, feature dumps, fake enthusiasm, "buy now", "revolutionary", "game-changing", "must-have" or "transform your pet's life". **Show, don't tell.**

**8 · First 2 seconds:** an immediate visual or verbal hook (curiosity, comedy, relatable problem, or opening on the pet already interacting). No logos, intros or setup.

**9 · Show, don't tell:** the benefit is understood visually (Goldie obsessed with the flowing water, not "provides circulating water").

**10 · Final package:**
- **Product summary:** product, brand, animal, primary purpose, key features, strongest selling point, drawbacks/limitations, best customer, best visual feature.
- **Creative strategy:** character, customer problem/desire, angle, hook, why it feels natural, how the product appears.
- **Video structure (9:16):** shot by shot, each with duration, visual, character action, camera, dialogue/VO, on-screen text, product visibility and transition. Optimised for Reels, TikTok and Shorts.

**11 · Generation prompts:** production-ready for our pipeline (Nano Banana Pro keyframes with the character and product elements, then Kling 3.0 Pro for low motion and Seedance 2.0 for interaction). Lock character and product consistency. Describe animal, product, environment, lighting, camera position and movement, animal movement, interaction, expression, realism and timing. Realistic pet behaviour; avoid AI-style exaggeration unless it's deliberately comic.

**12 · Voice:** an internet character, not a salesperson. Never a spec list. Short, funny, memorable (e.g. "Yeah… I'm not going back to the bowl." / Owner: "He's had this for two days." / "And I've evolved.").

**13 · Caption:** continues the joke, with emojis, one natural benefit, a soft CTA ("linked in our bio") and relevant hashtags. Never dropshipping spam. Includes #ad.

**14 · Quality control** (all must pass before delivery):
- **Product accuracy:** did I understand it?
- **Claim accuracy:** nothing invented?
- **Visual accuracy:** will the generated product look like what arrives?
- **Naturalness:** is it entertaining even if nobody buys?
- **Robot test:** does any line sound like an AI ad? If so, rewrite it.
- **Sales test:** is the use clear without a lecture?
- **PetPicks4You test:** is the pet the star?
- **Scroll test:** do the first 2 seconds stop the scroll?
- **Trust test:** is every claim grounded in available information?

**Goal reaction:** "😂 I need this for my pet." Never "I'm watching an ad."
