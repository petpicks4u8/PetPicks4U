/**
 * ─────────────────────────────────────────────────────────────
 *  AMAZON AFFILIATE LINKS — the ONLY place affiliate URLs live.
 * ─────────────────────────────────────────────────────────────
 *
 * How to add a real link:
 *   1. In Amazon Associates (SiteStripe), copy the "Text" link for the product.
 *      It looks like https://www.amazon.com/dp/B07N1JYYCW?tag=yourtag-20
 *   2. Paste it below, replacing AMAZON_AFFILIATE_URL for that product.
 *   3. Commit. Every button on the site updates automatically.
 *
 * While a product still says AMAZON_AFFILIATE_URL, the site shows a calm
 * "Amazon link coming soon" state instead of a broken button.
 *
 * Keys are product ids from `products.ts`.
 */

export const AMAZON_AFFILIATE_URL = "AMAZON_AFFILIATE_URL";

export const affiliateLinks: Record<string, string> = {
  // AWOOF Snuffle Mat — pick the LARGE listing (see products/P003-awoof-snuffle-mat.md)
  P003: AMAZON_AFFILIATE_URL,
  // Outward Hound Hide-A-Squirrel XL (draft until video #002 is live)
  P001: AMAZON_AFFILIATE_URL,
};

export function isPlaceholderUrl(url: string | undefined): boolean {
  return !url || url === AMAZON_AFFILIATE_URL || !/^https:\/\//.test(url);
}
