import type { SocialLink } from "@/lib/types";

export const site = {
  name: "PetPicks4You",
  tagline: "The internet’s favorite pets pick their favorite things.",
  motto: "Handpicked finds for happy pets",
  description:
    "Handpicked finds for happy pets. Find the products from our pets’ videos in two taps, with honest notes included.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://petpicks4u.com").replace(/\/$/, ""),
  /** Public contact address shown on /contact. Leave empty to hide. */
  contactEmail: "",
  /** Brand accounts. Leave url empty to hide an icon. */
  social: [
    { platform: "tiktok", url: "" },
    { platform: "instagram", url: "" },
    { platform: "youtube", url: "" },
  ] satisfies SocialLink[] as SocialLink[],
  disclosure: {
    short: "PetPicks4You may earn a commission when you buy through our links, at no extra cost to you.",
    amazon: "As an Amazon Associate, PetPicks4You earns from qualifying purchases.",
    ai: "Our pets are AI-generated characters. Their verdicts are for fun; the product notes are written by real humans.",
  },
};
