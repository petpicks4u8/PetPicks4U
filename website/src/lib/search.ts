import type { SearchRecord } from "./types";

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

/**
 * Tiny instant search. Every word typed must appear somewhere in the record;
 * title hits and word-start hits rank higher. Plenty fast for hundreds of
 * products — swap for a hosted index only if the catalogue gets huge.
 */
export function searchRecords(records: SearchRecord[], query: string, limit = 8): SearchRecord[] {
  const terms = normalize(query).split(" ").filter(Boolean);
  if (terms.length === 0) return [];

  const scored: { r: SearchRecord; score: number }[] = [];
  for (const r of records) {
    const title = ` ${normalize(r.title)}`;
    const hay = ` ${normalize(`${r.title} ${r.subtitle} ${r.haystack}`)}`;
    let score = 0;
    let ok = true;
    for (const t of terms) {
      if (!hay.includes(t)) {
        ok = false;
        break;
      }
      score += 1;
      if (hay.includes(` ${t}`)) score += 1;
      if (title.includes(t)) score += 3;
      if (title.includes(` ${t}`)) score += 1;
    }
    if (ok) scored.push({ r, score: score + (r.type === "product" ? 0.5 : 0) });
  }
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.r);
}
