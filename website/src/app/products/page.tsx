import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { getActiveCategories, getPets, getProducts, getSearchIndex, getSearchSuggestions } from "@/lib/data";
import { ProductCard, ProductGrid } from "@/components/ProductCard";
import { SearchPanel } from "@/components/SearchPanel";
import { UrlSearch } from "@/components/UrlSearch";
import { Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "All Picks",
  description: "Every product our pets have reviewed — searchable by product, pet or category.",
  alternates: { canonical: "/products" },
};

export default async function ProductsPage() {
  const [products, pets, categories, records, suggestions] = await Promise.all([
    getProducts(),
    getPets(),
    getActiveCategories(),
    getSearchIndex(),
    getSearchSuggestions(),
  ]);
  const petById = new Map(pets.map((p) => [p.id, p]));

  return (
    <Container className="pt-10 sm:pt-16">
      <Eyebrow className="rise">All picks</Eyebrow>
      <h1 className="rise mt-2 font-display text-[2.6rem] leading-tight font-medium sm:text-6xl" style={{ "--d": 1 } as React.CSSProperties}>
        Everything they’ve picked
      </h1>

      <div className="rise mt-6 max-w-xl" style={{ "--d": 2 } as React.CSSProperties}>
        <Suspense fallback={<SearchPanel records={records} suggestions={suggestions} />}>
          <UrlSearch records={records} suggestions={suggestions} />
        </Suspense>
      </div>

      {categories.length > 1 && (
        <nav aria-label="Categories" className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-white px-5 font-medium text-ink shadow-soft ring-1 ring-line/60"
            >
              {c.name} <span className="text-sm text-muted">{c.count}</span>
            </Link>
          ))}
        </nav>
      )}

      <div className="mt-10">
        {products.length > 0 ? (
          <ProductGrid>
            {products.map((p, i) => (
              <ProductCard
                key={p.id}
                product={p}
                pet={petById.get(p.petId)}
                category={categories.find((c) => c.slug === p.category)}
                index={i}
                priority={i < 2}
              />
            ))}
          </ProductGrid>
        ) : (
          <p className="text-muted">The first picks are on their way.</p>
        )}
      </div>
    </Container>
  );
}
