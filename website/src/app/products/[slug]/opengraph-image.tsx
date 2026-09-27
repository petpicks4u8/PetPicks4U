import { getPetById, getProduct, getProducts } from "@/lib/data";
import { ogSize, renderOgCard } from "@/lib/og";

export const alt = "Product review on PetPicks4U";
export const size = ogSize;
export const contentType = "image/png";

export async function generateStaticParams() {
  return (await getProducts()).map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  const pet = product ? await getPetById(product.petId) : undefined;
  return renderOgCard({
    eyebrow: pet ? `Reviewed by ${pet.name}` : "PetPicks4U review",
    title: product?.shortName ?? "PetPicks4U",
    quote: product?.shortVerdict,
    photo: product?.image.src,
  });
}
