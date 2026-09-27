/**
 * Core content types for PetPicks4U.
 *
 * Every page is generated from these shapes. Today the data lives in
 * `src/content/*.ts`; later a CMS or database can return the same shapes from
 * `src/lib/data.ts` without touching any page or component.
 */

export type SocialPlatform = "tiktok" | "instagram" | "youtube";

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  handle?: string;
}

export interface Pet {
  id: string;
  slug: string;
  name: string;
  species: "dog" | "cat" | "other";
  breed: string;
  /** he/him, she/her, they/them — used in copy so we never guess. */
  pronouns: string;
  /** One or two sentences for the pet page header. */
  bio: string;
  /** Short line for cards, e.g. "Professional toy tester. Snack enthusiast." */
  shortBio: string;
  profileImage: ImageAsset;
  heroImage: ImageAsset;
  personality: string[];
  socialLinks: SocialLink[];
  /** Product ids to pin to the top of this pet's picks, in order. */
  featuredProducts: string[];
  /** Soft card tint (any CSS colour). */
  accent: string;
  /** Hidden pets are kept in data but not shown anywhere. */
  published: boolean;
  /** Lower sorts first on the homepage. */
  order: number;
}

export type CategorySlug =
  | "toys"
  | "enrichment"
  | "feeding"
  | "walking"
  | "grooming"
  | "beds-comfort"
  | "travel"
  | "training"
  | "health-wellness"
  | "tech";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  brand?: string;
  description: string;
  /** The pet who reviews this product. */
  petId: string;
  category: CategorySlug;
  /** Secondary labels shown next to the category, e.g. "Mental Stimulation". */
  tags: string[];
  image: ImageAsset;
  galleryImages: ImageAsset[];
  /** Resolved from `src/content/affiliate-links.ts` — never hard-code in UI. */
  amazonUrl: string;
  featured: boolean;
  /** Currently appearing in our social videos. */
  trending: boolean;
  badge?: string;
  /** One-liner shown on cards. */
  shortVerdict: string;
  /** Pull-quote on the review page. */
  verdict: string;
  benefits: string[];
  bestFor: string[];
  thingsToKnow: string[];
  /** Extra search terms (what people type after seeing a video). */
  keywords: string[];
  /** ISO date, used for "Latest picks". */
  dateAdded: string;
  videoUrl?: string;
  socialPlatform?: SocialPlatform;
  /** Drafts stay in data (and the database CSV) but don't render. */
  published: boolean;
}

export interface ShortLink {
  /** petpicks4u.com/<code> */
  code: string;
  /** Canonical path to send people to. */
  target: string;
  /** Preset UTM tags (incoming query params override these). */
  utm?: Partial<Record<"source" | "medium" | "campaign" | "content" | "term", string>>;
  note?: string;
}

/** Tiny, serialisable record used by the client-side search. */
export interface SearchRecord {
  type: "product" | "pet";
  slug: string;
  href: string;
  title: string;
  subtitle: string;
  image: ImageAsset;
  haystack: string;
}
