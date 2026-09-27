import type { Pet } from "@/lib/types";

/**
 * The cast. To add a new pet, copy the Goldie block, change the fields,
 * and set `published: true`. Pages, cards, search and the sitemap update
 * automatically.
 *
 * Images: drop files in /public/images/pets/<slug>/ and point `src` at them,
 * or use any https URL whose host is allowed in next.config.ts.
 */

const HF = "https://d8j0ntlcm91z4.cloudfront.net/user_3JsvAEVHlwuHHX05USDFI35FBsA";

export const pets: Pet[] = [
  {
    id: "goldie",
    slug: "goldie",
    name: "Goldie",
    species: "dog",
    breed: "Golden Retriever",
    pronouns: "he/him",
    bio: "English cream Golden Retriever. Professional toy tester, snack enthusiast and a surprisingly picky reviewer. Calls his humans Mom and Dad, and is only sometimes wrong.",
    shortBio: "Professional toy tester. Snack enthusiast.",
    profileImage: {
      // Owner-approved Goldie master (Higgsfield job 357ceade)
      src: `${HF}/hf_20260927_000740_357ceade-b12a-4fe3-a060-39574c6b30d9.png`,
      alt: "Goldie, a fluffy cream Golden Retriever with a green collar, smiling at the camera",
      width: 1536,
      height: 2752,
    },
    heroImage: {
      src: `${HF}/hf_20260927_000740_357ceade-b12a-4fe3-a060-39574c6b30d9.png`,
      alt: "Goldie sitting proudly in his bright living room",
      width: 1536,
      height: 2752,
    },
    personality: ["Friendly", "Curious", "Slightly spoiled", "Food-motivated", "Enrichment nerd"],
    socialLinks: [],
    featuredProducts: ["P003"],
    accent: "#F3EADB",
    published: true,
    order: 1,
  },
];
