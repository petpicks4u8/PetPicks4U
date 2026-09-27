import type { ShortLink } from "@/lib/types";

/**
 * Memorable links for captions and bios: petpicks4u.com/<code>
 *
 * Every published pet and product ALSO gets an automatic short link
 * (petpicks4u.com/goldie, petpicks4u.com/snuffle-mat) — no need to list them.
 *
 * Use the entries below for links that should carry tracking, e.g. one bio
 * link per platform so we can tell TikTok traffic from Instagram traffic even
 * when the app hides the referrer. Anything the visitor already has in the
 * URL is kept; for a tag set in both places the preset below wins.
 */
export const shortLinks: ShortLink[] = [
  { code: "tt", target: "/", utm: { source: "tiktok", medium: "social", campaign: "bio" }, note: "TikTok bio link" },
  { code: "ig", target: "/", utm: { source: "instagram", medium: "social", campaign: "bio" }, note: "Instagram bio link" },
  { code: "yt", target: "/", utm: { source: "youtube", medium: "social", campaign: "bio" }, note: "YouTube bio / Shorts link" },
  {
    code: "v001",
    target: "/products/snuffle-mat",
    utm: { source: "tiktok", medium: "social", campaign: "video", content: "v001-bored-goldie" },
    note: "Video #001 — Bored Goldie (snuffle mat)",
  },
];
