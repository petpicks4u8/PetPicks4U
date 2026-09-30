import type { Product } from "@/lib/types";
import { affiliateLinks, AMAZON_AFFILIATE_URL } from "./affiliate-links";

/**
 * Every product the site knows about. `id` matches the product_id in
 * products/product-database.csv at the repo root.
 *
 * To add a product: copy a block, fill it in, add its Amazon link in
 * affiliate-links.ts, set `published: true`. Its review page, card, category,
 * search entry, short link and sitemap entry are all generated for you.
 *
 * Honesty rules (see CLAUDE.md): no health/efficacy promises, no prices,
 * benefits are phrased as Goldie's opinion, and "Things to know" is always
 * filled in with real limitations.
 */

const HF = "https://d8j0ntlcm91z4.cloudfront.net/user_3JsvAEVHlwuHHX05USDFI35FBsA";

const link = (id: string) => affiliateLinks[id] ?? AMAZON_AFFILIATE_URL;

export const products: Product[] = [
  {
    id: "P003",
    slug: "snuffle-mat",
    name: "AWOOF Snuffle Mat",
    shortName: "Snuffle Mat",
    brand: "AWOOF",
    description:
      "An interactive feeding and enrichment mat. Kibble or treats hide between soft fleece strips, so your dog sniffs and forages for them instead of finding them all at once.",
    petId: "goldie",
    category: "enrichment",
    tags: ["Mental Stimulation", "Feeding"],
    image: {
      // Owner-approved product render (Higgsfield job 7dde0302), made from the real listing photos
      src: `${HF}/hf_20260927_000405_7dde0302-833e-4cf5-92d5-c3335a11191a.png`,
      alt: "A fleece snuffle mat lying on a light oak floor with treats tucked between the strips",
      width: 1536,
      height: 2752,
    },
    galleryImages: [
      {
        src: `${HF}/hf_20260927_000405_7c58c999-40cc-4feb-ba77-781f2dfad74a.png`,
        alt: "Close view of the snuffle mat's fleece strips",
        width: 1536,
        height: 2752,
      },
    ],
    amazonUrl: link("P003"),
    featured: true,
    trending: true,
    badge: "Goldie’s Favorite",
    shortVerdict: "Finally, humans figured out how to make looking for food a sport.",
    verdict: "Finally, humans figured out how to make looking for food a sport. 10/10, would aggressively sniff again.",
    benefits: [
      "Gives a bored nose a real job",
      "Turns mealtime into a sniffing game",
      "Can slow down fast eaters",
      "A handy indoor activity for rainy days",
    ],
    bestFor: ["Bored dogs", "Fast eaters", "Rainy days", "Enrichment"],
    thingsToKnow: [
      "Supervise sniff time — fleece isn’t a chew toy, and determined chewers can pull strips loose.",
      "It’s enrichment, not a behaviour fix. If your dog shreds things when left alone, a trainer or vet is the right call.",
      "Sizes vary by listing. Big dogs like Goldie need a large mat.",
      "Crumbs collect in the fleece, so plan on regular washing (check the listing for care instructions).",
    ],
    keywords: ["snuffle", "sniff", "mat", "foraging", "slow feeder", "puzzle", "treats", "kibble", "bored", "awoof", "couch", "toilet paper"],
    dateAdded: "2026-09-27",
    // Paste the TikTok / Reel / Short URL here once video #001 is live:
    videoUrl: undefined,
    socialPlatform: "tiktok",
    published: true,
  },
  {
    id: "P001",
    slug: "hide-a-squirrel",
    name: "Outward Hound Hide-A-Squirrel XL",
    shortName: "Hide-A-Squirrel",
    brand: "Outward Hound",
    description:
      "A plush hide-and-seek puzzle: a tree trunk with removable squeaky squirrels that your dog pulls out one by one. Refill it in seconds and go again.",
    petId: "goldie",
    category: "toys",
    tags: ["Puzzle", "Plush", "Enrichment"],
    image: {
      src: "/images/placeholder-product.svg",
      alt: "Hide-A-Squirrel plush puzzle toy",
      width: 1200,
      height: 1500,
    },
    galleryImages: [],
    amazonUrl: link("P001"),
    featured: false,
    trending: false,
    shortVerdict: "One of you is Kevin. I will find out which.",
    verdict: "Six squirrels. One of them is definitely Kevin. I’m being thorough.",
    benefits: [
      "Hide-and-seek a dog understands instantly",
      "Great for pull-and-carry retriever types",
      "Quick for humans to reload",
    ],
    bestFor: ["Retrievers", "Gentle players", "Squirrel enthusiasts"],
    thingsToKnow: [
      "Plush — made for light chewers. Power chewers may shred squirrels quickly.",
      "Supervised play only. Toss any squirrel that’s lost its stuffing or squeaker.",
      "Some reviewers report not every squirrel squeaks.",
    ],
    keywords: ["squirrel", "kevin", "plush", "squeaky", "hide", "puzzle", "outward hound"],
    dateAdded: "2026-09-28",
    socialPlatform: "tiktok",
    // Draft: flip to true when video #002 is posted
    published: false,
  },
  {
    id: "P012",
    slug: "bird-bath",
    name: "Colorday Large Bird Bath for Cage",
    shortName: "Bird Bath",
    brand: "Colorday",
    description:
      "A clear bird bath that hangs on the open cage door, giving your bird a dedicated splash spot for bath time.",
    petId: "mango",
    category: "grooming",
    tags: ["Bath Time", "Cage Accessory"],
    image: {
      // Keyframe from video #005 (Higgsfield job e8b24280), made from the owner's listing screenshots
      src: `${HF}/hf_20260927_122705_e8b24280-d265-400f-b51a-849e4bb855e9.png`,
      alt: "Mango the Sun Conure peeking into a clear bird bath hanging on his cage door",
      width: 1536,
      height: 2752,
    },
    galleryImages: [
      {
        src: `${HF}/hf_20260927_122706_e6a051de-8356-48d4-9623-302f48993342.png`,
        alt: "Mango fluffed up after his bath, perched next to the clear bird bath",
        width: 1536,
        height: 2752,
      },
    ],
    amazonUrl: link("P012"),
    featured: true,
    trending: true,
    badge: "Mango’s Favorite",
    shortVerdict: "Morning routine. Step one: the dip.",
    verdict: "Step one… the dip. Clean. Fluffy. Ready for the day.",
    benefits: [
      "A splash spot of his very own, right at the cage door",
      "Clear walls, so you can watch the splashing",
      "Makes bath time part of the morning routine",
      "Big enough to actually splash in (the listing says “large”)",
    ],
    bestFor: ["Conures", "Birds who love a splash", "Morning routines"],
    thingsToKnow: [
      "Keep the water shallow and lukewarm, skip the soap, and always supervise bath time.",
      "Some birds are nervous of a new bath. Give it time — no forcing.",
      "Reviewers mention the hooks can be short, so check it fits your cage door.",
      "Water will travel. Put something absorbent underneath.",
    ],
    keywords: ["bath", "bird bath", "shower", "splash", "water", "conure", "parrot", "cage", "colorday", "dip", "morning"],
    dateAdded: "2026-09-27",
    // Paste the TikTok / Reel / Short URL here once video #005 is live:
    videoUrl: undefined,
    socialPlatform: "tiktok",
    published: true,
  },
  {
    id: "P011",
    slug: "water-fountain",
    name: "PETLIBRO Capsule Dog Water Fountain (2.1 gal, Anti-Splash)",
    shortName: "Water Fountain",
    brand: "PETLIBRO",
    description:
      "A 2.1-gallon (8 L) water fountain made for large dogs, with an anti-splash design, 5-layer filtration and a gentle whirlpool flow in the drinking plate.",
    petId: "goldie",
    category: "feeding",
    tags: ["Hydration", "Large Dogs"],
    image: {
      // Keyframe from video #003 (Higgsfield job 3d5a7e59), fountain matched to the owner's listing screenshots
      src: `${HF}/hf_20260927_153502_3d5a7e59-0e93-41a7-9870-48ea3caa7787.png`,
      alt: "Goldie happily drinking from a white PETLIBRO water fountain on a kitchen floor",
      width: 1536,
      height: 2752,
    },
    galleryImages: [
      {
        src: `${HF}/hf_20260927_153502_65d38468-c7d4-4082-b1ba-15e0f43a8886.png`,
        alt: "Close-up of the fountain's drinking plate with water swirling into a whirlpool",
        width: 1536,
        height: 2752,
      },
      {
        src: `${HF}/hf_20260927_153502_9a7900e7-7887-43de-ba77-fd5ce75aa9e2.png`,
        alt: "Goldie smiling next to his water fountain",
        width: 1536,
        height: 2752,
      },
    ],
    amazonUrl: link("P011"),
    featured: true,
    trending: true,
    badge: "Just Posted",
    shortVerdict: "Wait… Mom and Dad SIT there?! Toilet’s all yours.",
    verdict: "MY water swirls. I keep coming back for more. Fountain’s mine — toilet’s all yours.",
    benefits: [
      "Whirlpool flow — Goldie finds the swirl hard to ignore",
      "5-layer filtration (per the listing) catches fur and crumbs",
      "Anti-splash design, so fewer puddles around the bowl",
      "Big 2.1-gallon tank sized for large dogs",
    ],
    bestFor: ["Large dogs", "Messy drinkers", "Toilet-water enthusiasts"],
    thingsToKnow: [
      "Filters need replacing regularly and are sold separately — it isn’t maintenance-free.",
      "Hand-wash only. Don’t put it in the dishwasher.",
      "It’s plastic and needs a power outlet nearby.",
      "A fountain is a nicer water bowl, not a health fix. Ask your vet if your dog isn’t drinking enough.",
    ],
    keywords: ["fountain", "water", "drink", "bowl", "toilet", "petlibro", "whirlpool", "filter", "splash", "hydration", "fancy bathroom water"],
    dateAdded: "2026-09-30",
    // Paste the TikTok URL of video #003 here:
    videoUrl: undefined,
    socialPlatform: "tiktok",
    published: true,
  },
];
