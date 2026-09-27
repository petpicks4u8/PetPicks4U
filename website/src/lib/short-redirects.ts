/**
 * Builds the short caption links (petpicks4u.com/goldie, /snuffle-mat, /tt …)
 * as real HTTP redirects at build time — instant, even inside the TikTok
 * in-app browser. Wired up in next.config.ts. Relative imports only, because
 * next.config can't resolve the "@/..." alias.
 *
 * The visitor's own ?utm_… tags are kept automatically.
 */
import { pets } from "../content/pets";
import { products } from "../content/products";
import { shortLinks } from "../content/short-links";

const RESERVED = new Set(["pets", "products", "categories", "about", "contact", "privacy", "affiliate-disclosure", "api", "_next", "images"]);

export function buildShortRedirects() {
  const seen = new Set<string>();
  const out: { source: string; destination: string; permanent: false }[] = [];
  const add = (code: string, destination: string) => {
    const key = code.toLowerCase();
    if (RESERVED.has(key) || seen.has(key)) return;
    seen.add(key);
    out.push({ source: `/${key}`, destination, permanent: false });
  };

  for (const l of shortLinks) {
    const utm = new URLSearchParams();
    for (const [k, v] of Object.entries(l.utm ?? {})) if (v) utm.set(`utm_${k}`, v);
    add(l.code, utm.size ? `${l.target}?${utm}` : l.target);
  }
  for (const p of pets) if (p.published) add(p.slug, `/pets/${p.slug}`);
  for (const p of products) if (p.published) add(p.slug, `/products/${p.slug}`);
  return out;
}
