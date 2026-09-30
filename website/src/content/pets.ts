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
    featuredProducts: ["P011", "P003"],
    accent: "#F3EADB",
    published: true,
    order: 1,
  },
  {
    id: "mango",
    slug: "mango",
    name: "Mango",
    species: "bird",
    breed: "Sun Conure",
    pronouns: "he/him",
    bio: "Sun Conure. Small bird, massive confidence. Quietly certain the whole house belongs to him, and personally inspects every new object that dares to arrive.",
    shortBio: "Small bird. Massive confidence.",
    profileImage: {
      // Owner-approved Mango master (Higgsfield job ceff1fb7, element d311ab53)
      src: `${HF}/hf_20260927_122545_ceff1fb7-9410-44c8-86c4-8db81e81fe69.png`,
      alt: "Mango, a bright yellow and orange Sun Conure, perched on a wooden branch",
      width: 1536,
      height: 2752,
    },
    heroImage: {
      src: `${HF}/hf_20260927_122545_ceff1fb7-9410-44c8-86c4-8db81e81fe69.png`,
      alt: "Mango the Sun Conure perched by the living-room window",
      width: 1536,
      height: 2752,
    },
    personality: ["Curious", "Bold", "Nosy", "A little dramatic", "Self-appointed inspector"],
    socialLinks: [],
    featuredProducts: ["P012"],
    accent: "#FDE8CC",
    published: true,
    order: 2,
  },
];
