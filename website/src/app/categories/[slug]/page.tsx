import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import type { CategorySlug } from "@/lib/types";
import { getActiveCategories, getCategory, getPets, getProductsInCategory } from "@/lib/data";
import { ProductCard, ProductGrid } from "@/components/ProductCard";
import { Container, Eyebrow } from "@/components/ui";

export const dynamicParams = false;

/** Only categories with products get a page. */
export async function generateStaticParams() {
  return (await getActiveCategories()).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/categories/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.name} picks`,
    description: category.description,
    alternates: { canonical: `/categories/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: PageProps<"/categories/[slug]">) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const [products, pets, all] = await Promise.all([getProductsInCategory(slug as CategorySlug), getPets(), getActiveCategories()]);
  const petById = new Map(pets.map((p) => [p.id, p]));

  return (
    <Container className="pt-4 sm:pt-8">
      <Link href="/products" className="-ml-2 inline-flex min-h-11 items-center gap-1 rounded-full px-2 text-sm font-medium text-ink-soft hover:text-ink">
        <ChevronLeft className="size-4" aria-hidden /> All picks
      </Link>
      <Eyebrow className="rise mt-4">Category</Eyebrow>
      <h1 className="rise mt-2 font-display text-[2.6rem] leading-tight font-medium sm:text-6xl" style={{ "--d": 1 } as React.CSSProperties}>
        {category.name}
      </h1>
      <p className="rise mt-3 max-w-lg text-ink-soft" style={{ "--d": 2 } as React.CSSProperties}>
        {category.description}
      </p>

      {all.length > 1 && (
        <nav aria-label="Other categories" className="-mx-5 mt-6 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
          {all.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              aria-current={c.slug === category.slug ? "page" : undefined}
              className={`inline-flex min-h-11 shrink-0 items-center rounded-full px-5 font-medium ring-1 ${
                c.slug === category.slug ? "bg-forest text-paper ring-forest" : "bg-white text-ink ring-line/60"
              }`}
            >
              {c.name}
            </Link>
          ))}
        </nav>
      )}

      <div className="mt-10">
        <ProductGrid>
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} pet={petById.get(p.petId)} category={category} index={i} priority={i < 2} />
          ))}
        </ProductGrid>
      </div>
    </Container>
  );
}
