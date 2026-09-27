import { getPet, getPets } from "@/lib/data";
import { ogSize, renderOgCard } from "@/lib/og";

export const alt = "Pet profile on PetPicks4U";
export const size = ogSize;
export const contentType = "image/png";

export async function generateStaticParams() {
  return (await getPets()).map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pet = await getPet(slug);
  return renderOgCard({
    eyebrow: pet?.breed ?? "PetPicks4U",
    title: pet ? `${pet.name}’s Picks` : "PetPicks4U",
    quote: pet?.shortBio,
    photo: pet?.profileImage.src,
  });
}
