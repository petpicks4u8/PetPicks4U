# Product Research #1 — First Goldie Product

**Date:** 2026-09-26
**Question:** Which Amazon dog product should Goldie's first video feature?
**Categories checked:** automatic moving balls (QGI included), puzzle toys, snuffle mats, lick mats, treat-dispensing toys, automatic ball launchers, plush hide-and-seek puzzles, herding balls.

---

## How reliable is this data?

- **amazon.com could not be opened directly.** This research environment's network policy blocks it. Everything below comes from web search results and indexed pages.
- **VERIFIED** means the listing and ASIN were confirmed to exist on an amazon.com /dp/ URL.
- **SNIPPET** means the number came from an undated search-engine summary. It is probably roughly right but could be stale. Recheck it in a browser before you quote it anywhere.
- **UNVERIFIED** means I couldn't find it.
- I made up none of the figures below.

> ✅ **Your 2-minute check before publishing:** open the chosen Amazon listing and note today's price, star rating, review count, and "bought in past month" badge in `products/product-database.csv`.

---

## Candidate data

| # | Product | ASIN | Price | Rating / reviews | Demand signal | Large-dog fit | Status |
|---|---|---|---|---|---|---|---|
| 1 | **Outward Hound Hide-A-Squirrel XL** (plush trunk + 6 squeaky squirrels) | B005VS9WO6 ✅ | ~$21 (one retailer, SNIPPET); ~$30 (another, SNIPPET) | 4.6★ / 9,090 ratings on the Medium listing (SNIPPET; Amazon often shares ratings across sizes) | Long-running bestseller for Outward Hound; replacement squirrel packs rank ~#6K in Pet Supplies (SNIPPET) | XL trunk is 12.6"×7.1"×7.1" with 6 squirrels. Sized for big dogs | Selected |
| 2 | **QGI Interactive Dog Ball** (motion-activated random-path rolling ball with rope tail) | B0DK42TDSK ✅ (colour variants B0DK46SQV1, B0DSG6RGX6, B0DK44RD25) | ~$29 at a third-party store (SNIPPET); Amazon price UNVERIFIED | 4.1★ / 2,430 (SNIPPET) | "100+ bought in past month" (SNIPPET). BSR ~#122,007 Pet Supplies / #1,456 Dog Toy Balls (SNIPPET, multicolour variant). Has its own TikTok Shop page, and creators describe it as "the viral QGI ball" | ~3.1–3.85" ball. Marketed for S/M/L dogs but small beside a 30 kg Golden. "Not for aggressive chewers" | Backup #1 |
| 3 | **AWOOF Snuffle Mat** | B07N1JYYCW ✅ (larger: B09YXWCS2W, B08L7QYDGB) | UNVERIFIED | 4.2★ / 21,840 (SNIPPET) | BSR ~#2,533 Pet Supplies, #16 Dog Feeding Mats (SNIPPET). Strongest demand found | Fine, and bigger sizes exist | Backup #2 |
| 4 | Cheerble Wicked Ball AIR | B0DGPYDRSH ✅ | $44.99 (SNIPPET) | UNVERIFIED | Heavily promoted on TikTok. A Golden Retriever creator has posted with it | Dogs 35 lb+, 3.2" | Watchlist |
| 5 | PetDroid Interactive Dog Ball | B08C9PHWFC | ~$19.85 (SNIPPET) | 3.9★ / ~10–12K (SNIPPET, sources disagree) | Large review base | S/M/L | Watchlist (lower rating) |
| 6 | Jolly Pets Push-n-Play 14" herding ball | B000P72Z1U ✅ | UNVERIFIED | UNVERIFIED | Weak data | Excellent | Watchlist: very easy to render with AI |
| 7 | iFetch Too (auto ball launcher) | B0D7G196HB ✅ | UNVERIFIED (roughly $150+ category) | UNVERIFIED | Strong "wow" factor | Yes | Rejected for now: AI can't reliably render the ball flight and the dog returning it to the hopper |
| 8 | Nina Ottosson Dog Brick / Tornado | B0711Y9XTF / B07239T47Y ✅ | UNVERIFIED | UNVERIFIED | Known brand | Brick yes; Tornado small | Rejected for now: sliding and rotating parts plus small treats are unreliable in AI video |
| 9 | KONG Wobbler L / Starmark Bob-A-Lot | B003ALMW0M / B001JQLNB4 ✅ | ~$18 Walmart (SNIPPET) | 4.4★ / ~16.7K (SNIPPET, may be .ca) | Strong | Yes | Rejected for now: wobble physics and kibble particles |
| 10 | Hyper Pet / LickiMat XL lick mats | B088K1ZR34 / B09C1P2V9F ✅ | UNVERIFIED | 4.4★ / 12K+ (SNIPPET) | Strong | XL yes | Rejected for video #1: nothing visual happens in the first 1–3 s |

**Affiliate economics:** Amazon Associates pays about **3% on Pet Products**. The cookie lasts 24 hours, and items added to the cart in that window count if bought within about 90 days. Both figures come from third-party 2026 summaries (SNIPPET), so confirm them in Associates Central.
- A ~$21–30 toy earns about **$0.65–0.90 per sale.** Per-product revenue is small. This business makes money on **volume and whole-cart purchases**, since Amazon pays on everything in the cart and not just our product.
- That supports picking products on **content potential and conversion ease** (a cheap impulse buy) rather than on price.

---

## Scorecard (1–5, AI feasibility weighted ×2)

| Criterion | Hide-A-Squirrel XL | QGI Ball | AWOOF Snuffle Mat |
|---|---|---|---|
| Demand | 5: ~9K ratings, a perennial seller | 3: 2.4K reviews, "100+/mo", BSR ~122K | 5: ~21.8K reviews, BSR ~2.5K |
| Visual hook (1–3 s) | 4: squirrel heads peeking from a tree; the dog pulls one out | 5: a ball moving by itself | 2: a nose in fleece, subtle |
| Goldie compatibility | 5: sized for large dogs; Goldens are retrievers | 3: small ball next to a 30 kg dog | 4 |
| Content potential | 5: squirrels = Goldie's nemesis "Kevin", plus lineups, evictions, hide-and-seek, "counting" | 4: chase, ambush, "it's alive" | 3 |
| Problem/solution | 4: boredom, prey drive, enrichment | 4: boredom, indoor exercise | 4: fast eating, boredom |
| Virality | 4: character comedy | 5: novelty | 2 |
| Purchase intent | 4: cheap, cute, instantly "my dog would love that" | 4 | 3 |
| Affiliate fit | 4: impulse price | 4 | 4 |
| **AI feasibility (×2)** | **4 ×2 = 8**: soft plush forgives deformation, and one simple action per clip | **2 ×2 = 4**: a self-propelled object on a random path, a flailing rope tail, and a fast chase all raise the risk of floating, teleporting or morphing | **5 ×2 = 10**: trivial physics |
| **Total** | **43** | **36** | **37** |

---

## Decision: Outward Hound Hide-A-Squirrel XL (B005VS9WO6)

**Why it wins**
1. **It fits Goldie's character perfectly.** The bible already gives Goldie a squirrel nemesis called "Kevin", and this product is literally a tree full of squirrels. The comedy writes itself, so the video is entertainment first and ad second.
2. **It's the most forgiving product for AI generation.** It's soft plush with no motors, no projectiles and no small parts moving on their own. Each shot is one action: look, sniff, pull, carry, lie down.
3. **Demand is proven.** It has thousands of ratings, it's a multi-year Outward Hound staple, and it's a cheap impulse buy.
4. **It gives us many videos:** the lineup interrogation, the eviction, the squirrel census, the "they came back" refill, Goldie's review, and more.

**Why not QGI first:** The QGI ball has the strongest novelty hook, but it's the riskiest product to render convincingly. A 3" ball moving by itself in random directions with a rope tail, chased by a large dog, is exactly the kind of motion that makes current AI video float, teleport or morph. Its demand signal is also weaker (a BSR around 122K). **It stays the leading candidate for video #2 or #3**, once we've proven Goldie's consistency pipeline on an easier product. When we do it, shoot the ball mostly stationary and twitching, not in a full chase.

**Confidence:** Moderate-high (about 70%). Demand and fit are clear. The main uncertainty is live Amazon price and ratings, which you need to confirm.

**Drawbacks**
- It isn't new or "viral-novel". Many people already know it, which cuts both ways: it builds trust but brings less surprise. The comedy has to supply the novelty.
- Plush toys are rated for **light chewers**, and reviews report some dogs shredding the squirrels quickly.
- Only some squirrels squeak, according to some reviews (SNIPPET).

**Safety considerations (keep in captions and replies)**
- For supervised play, and not for aggressive chewers. Remove damaged squirrels and loose stuffing or squeakers.
- Don't claim it's durable, indestructible, calming, or vet-recommended.

---

## Backups

**Backup #1: QGI Interactive Dog Ball (B0DK42TDSK).** It's touch-activated, rolls on a random path for about 3 minutes, has 2 speeds and USB-C charging. The rating is 4.1★ from about 2.4K reviews (SNIPPET). Best "it's alive" hook, but the hardest to generate. Planned for video #2 or #3.

**Backup #2: AWOOF Snuffle Mat (B07N1JYYCW).** It has the strongest demand data at 4.2★ from about 21.8K reviews, and it's the easiest to generate. Its weakness is that it isn't very visual, so it needs a strong caption or dialogue hook.

---

## Sources
- Hide-A-Squirrel XL listing: https://www.amazon.com/Outward-Hound-Squirrel-Plush-Puzzle/dp/B005VS9WO6
- Hide-A-Squirrel Large listing and reviews: https://www.amazon.com/Squirrel-Interactive-Puzzle-Outward-Hound/dp/B000NV8940 · https://www.amazon.com/gp/aw/reviews/B000NV8940
- Medium rating (4.6★ / 9,090, SNIPPET): https://www.amazon.com/gp/customer-reviews/R3RJ49YJ8CGQVI
- XL dimensions and price (SNIPPET): https://www.walmart.com/ip/Outward-Hound-Hide-A-Squirrel-Brown-XL/170854409 · https://www.chewy.com/outward-hound-hide-squirrel-squeaky/dp/113785
- Durability review notes: https://www.sheknows.com/living/articles/2840855/outward-hound-hide-a-squirrel-dog-toy/
- QGI listings: https://www.amazon.com/QGI-Interactive-Automatic-Motion-Activated-Stimulation/dp/B0DK42TDSK · https://www.amazon.com/QGI-Interactive-Trajectory-Automatic-Activated/dp/B0DK44RD25
- QGI on TikTok: https://shop.tiktok.com/us/pdp/qgi-interactive-dog-ball-with-rope-automatic-moving-toy-for-all-dogs/1730490040946496195 · https://www.tiktok.com/@chelsbars/video/7526652515635547423
- QGI material note: https://animalspick.com/interactive-dog-balls/
- Cheerble comparison: https://cheerble.com/blogs/cheerble-blog/wicked-ball-comparison-which-cheerble-ball-is-right-for-your-pet · Golden Retriever creator video: https://www.tiktok.com/@daisythegoldiee/video/7482423404868488503
- Moving-ball durability complaints: https://www.chewy.com/cheerble-wicked-ball-automatic/product-reviews/352546 · https://www.caninejournal.com/wicked-ball-reviews/
- AWOOF: https://www.amazon.com/dp/B07N1JYYCW
- PetDroid: https://www.sheknows.com/living/articles/1234876561/petdroid-interactive-dog-ball-amazon/
- iFetch Too: https://www.amazon.com/iFetch-Automatic-Launcher-Outdoor-Standard/dp/B0D7G196HB
- Commission and cookie (third-party): https://getlasso.co/amazon-affiliate-commission-rate/ · https://azonpress.com/amazon-affiliate-cookie-duration/
- TikTok Shop category pages: https://shop.tiktok.com/us/k/dog-ball-that-moves-on-its-own · https://shop.tiktok.com/us/k/best-dog-interactive-toys
