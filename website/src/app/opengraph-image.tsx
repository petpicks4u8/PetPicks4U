import { site } from "@/content/site";
import { getPets } from "@/lib/data";
import { ogSize, renderOgCard } from "@/lib/og";

export const alt = `${site.name} — ${site.tagline}`;
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  const [star] = await getPets();
  return renderOgCard({ eyebrow: "Straight from the videos", title: site.tagline, photo: star?.heroImage.src });
}
