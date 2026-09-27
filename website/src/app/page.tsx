import Link from "next/link";
import { ArrowDown, ArrowRight, PawPrint, Search, ShoppingCart } from "lucide-react";
import { site } from "@/content/site";
import {
  getActiveCategories,
  getCategory,
  getLatestProducts,
  getPets,
  getProducts,
  getSearchIndex,
  getSearchSuggestions,
  getTrendingProducts,
} from "@/lib/data";
import { ComingSoonCard, PetCard } from "@/components/PetCard";
import { ProductCard, ProductGrid } from "@/components/ProductCard";
import { SearchPanel } from "@/components/SearchPanel";
import { SmartImage } from "@/components/SmartImage";
import { JsonLd } from "@/components/JsonLd";
import { PawMark, Smile, Sparks } from "@/components/icons";
import { ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui";

export default async function HomePage() {
  const [pets, products, trending, latestAll, categories, records, suggestions] = await Promise.all([
    getPets(),
    getProducts(),
    getTrendingProducts(),
    getLatestProducts(6),
    getActiveCategories(),
    getSearchIndex(),
    getSearchSuggestions(),
  ]);
  const petById = new Map(pets.map((p) => [p.id, p]));
  const trendingIds = new Set(trending.map((p) => p.id));
  const latest = latestAll.filter((p) => !trendingIds.has(p.id));
  const [star, sidekick] = pets;
  const starPick = trending.find((p) => p.petId === star?.id) ?? products[0];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          url: site.url,
          description: site.description,
          potentialAction: {
            "@type": "SearchAction",
            target: `${site.url}/products?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }}
      />

      {/* HERO — echoes the logo artwork: big wordmark, orange smile, scattered paws */}
      <section className="relative overflow-hidden">
        <div className="grain pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <PawMark className="pointer-events-none absolute top-6 right-[6%] size-12 rotate-[18deg] text-brand/80 sm:size-16" />
        <PawMark className="pointer-events-none absolute bottom-10 left-[46%] hidden size-10 rotate-[-20deg] text-brand/40 lg:block" />
        <PawMark className="pointer-events-none absolute top-24 left-[2%] hidden size-9 rotate-[-25deg] text-brand/30 sm:block" />
        <Container className="relative grid items-center gap-10 pt-9 pb-8 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20 lg:pb-20">
          <div>
            <div className="rise relative inline-flex flex-col items-center">
              <Sparks className="absolute -top-5 -left-6 size-8 -rotate-12 text-brand sm:-left-8 sm:size-10" />
              <p className="font-display text-[3.1rem] leading-none font-black tracking-[-0.05em] text-ink sm:text-7xl lg:text-[5.2rem]">
                PetPicks<span className="text-brand">4</span>You
              </p>
              <Smile className="mt-1 h-4 w-[82%] text-brand sm:h-6" />
            </div>
            <p className="rise mt-4 text-[0.72rem] font-semibold tracking-[0.2em] text-ink-soft uppercase sm:text-sm sm:tracking-[0.32em]" style={{ "--d": 1 } as React.CSSProperties}>
              {site.motto}
            </p>
            <h1
              className="rise mt-7 font-display text-[2.05rem] leading-[1.08] text-ink sm:text-5xl"
              style={{ "--d": 2 } as React.CSSProperties}
            >
              The internet’s favorite pets pick their{" "}
              <em className="font-script text-[1.18em] leading-none font-bold text-brand-deep not-italic">favorite things.</em>
            </h1>
            <p
              className="rise mt-4 max-w-md text-[1.05rem] leading-relaxed text-ink-soft sm:text-lg"
              style={{ "--d": 2 } as React.CSSProperties}
            >
              Saw it on TikTok, Reels or Shorts? Tap the pet, find the product. Honest notes included.
            </p>
            <div className="rise mt-7 flex flex-wrap gap-3" style={{ "--d": 3 } as React.CSSProperties}>
              <ButtonLink href="#pets">
                Meet the Pets <ArrowDown className="size-4.5" aria-hidden />
              </ButtonLink>
              <ButtonLink href="#find" variant="secondary">
                Find a Product
              </ButtonLink>
            </div>
          </div>

          {star && (
            <div className="rise relative mx-auto hidden w-full max-w-sm lg:block" style={{ "--d": 2 } as React.CSSProperties}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[12rem] rounded-b-[2.5rem] bg-cream shadow-lift ring-1 ring-line/60">
                <SmartImage
                  src={star.heroImage.src}
                  alt={star.heroImage.alt}
                  fill
                  priority
                  sizes="384px"
                  className="object-cover object-[50%_25%]"
                  fallbackLabel={star.name}
                />
              </div>
              {sidekick && (
                <Link
                  href={`/pets/${sidekick.slug}`}
                  aria-label={`Meet ${sidekick.name}`}
                  className="absolute -right-8 bottom-16 size-36 overflow-hidden rounded-full bg-cream shadow-lift ring-[6px] ring-paper transition-transform hover:-translate-y-1"
                >
                  <SmartImage
                    src={sidekick.profileImage.src}
                    alt={sidekick.profileImage.alt}
                    fill
                    sizes="144px"
                    className="object-cover object-[50%_30%]"
                    fallbackLabel={sidekick.name}
                  />
                </Link>
              )}
              {starPick && (
                <Link
                  href={`/products/${starPick.slug}`}
                  className="absolute -bottom-6 -left-10 max-w-64 rounded-3xl bg-white/95 p-4 shadow-lift ring-1 ring-line/60 backdrop-blur transition-transform hover:-translate-y-0.5"
                >
                  <p className="text-xs font-semibold tracking-wide text-brand-deep uppercase">{star.name}’s verdict</p>
                  <p className="mt-1 font-script text-[1.4rem] leading-tight text-ink">“{starPick.shortVerdict}”</p>
                </Link>
              )}
            </div>
          )}
        </Container>
      </section>

      {/* WHO SENT YOU HERE? */}
      <section aria-labelledby="pets" className="scroll-mt-20">
        <Container className="pt-6 sm:pt-10">
          <SectionHeading id="pets" eyebrow="Meet the pets" title="Who sent you here?" />
          <div className="grid gap-5 lg:grid-cols-2">
            {pets.map((pet, i) => (
              <PetCard
                key={pet.id}
                pet={pet}
                index={i}
                priority={i === 0}
                pickCount={products.filter((p) => p.petId === pet.id).length}
              />
            ))}
            <ComingSoonCard />
          </div>
        </Container>
      </section>

      {/* SEEN IT IN A VIDEO? */}
      <section aria-labelledby="find" className="scroll-mt-20">
        <Container className="pt-16 sm:pt-24">
          <div className="rounded-[2rem] bg-ink px-5 py-9 text-paper sm:px-12 sm:py-14">
            <div className="mx-auto max-w-xl">
              <p className="text-[0.78rem] font-semibold tracking-[0.16em] text-brand uppercase">Seen something in one of our videos?</p>
              <h2 id="find" className="mt-2 font-display text-[2rem] leading-tight font-medium sm:text-[2.6rem]">
                Find the product.
              </h2>
              <p className="mt-2 mb-6 text-paper/75">Search by product, pet, or whatever you remember.</p>
              <SearchPanel records={records} suggestions={suggestions} />
            </div>
          </div>
        </Container>
      </section>

      {/* TRENDING */}
      {trending.length > 0 && (
        <section aria-labelledby="trending">
          <Container className="pt-16 sm:pt-24">
            <SectionHeading
              id="trending"
              eyebrow="Trending picks"
              title="Starring in our videos right now"
              action={
                <Link href="/products" className="hidden min-h-11 items-center gap-1.5 font-semibold text-brand-deep sm:inline-flex">
                  All picks <ArrowRight className="size-4" aria-hidden />
                </Link>
              }
            />
            <ProductGrid>
              {trending.map((p, i) => (
                <ProductCard key={p.id} product={p} pet={petById.get(p.petId)} category={getCategory(p.category)} index={i} />
              ))}
            </ProductGrid>
          </Container>
        </section>
      )}

      {/* LATEST */}
      {latest.length > 0 && (
        <section aria-labelledby="latest">
          <Container className="pt-16 sm:pt-24">
            <SectionHeading id="latest" eyebrow="Latest picks" title="Freshly sniffed" />
            <ProductGrid>
              {latest.map((p, i) => (
                <ProductCard key={p.id} product={p} pet={petById.get(p.petId)} category={getCategory(p.category)} index={i} />
              ))}
            </ProductGrid>
          </Container>
        </section>
      )}

      {/* CATEGORIES */}
      {categories.length > 0 && (
        <section aria-labelledby="categories">
          <Container className="pt-16 sm:pt-20">
            <h2 id="categories" className="mb-4 text-sm font-semibold text-muted">
              Browse by category
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/categories/${c.slug}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 font-medium text-ink shadow-soft ring-1 ring-line/60 transition-transform hover:-translate-y-0.5"
                >
                  {c.name} <span className="text-sm text-muted">{c.count}</span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* PHILOSOPHY */}
      <section aria-labelledby="philosophy">
        <Container className="pt-20 sm:pt-28">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <Eyebrow>Why PetPicks4You</Eyebrow>
              <h2 id="philosophy" className="mt-2 font-display text-[2rem] leading-tight font-medium sm:text-4xl">
                Fun videos. Useful picks. No nonsense.
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
                We find genuinely interesting things for pets, let our characters have fun with them, and give you one simple place to find
                what you saw.
              </p>
            </div>
            <ul className="grid gap-6 sm:grid-cols-3 lg:gap-8">
              {[
                { Icon: Search, title: "Carefully selected products", body: "Things earn a spot by being interesting, not because a brand asked. Every review lists the downsides too." },
                { Icon: PawPrint, title: "For all pets", body: "Dogs, birds, and more characters on the way. Each pet has their own picks." },
                { Icon: ShoppingCart, title: "Amazon affiliate", body: "Links may earn us a small commission. The price you pay never changes." },
              ].map(({ Icon, title, body }) => (
                <li key={title} className="flex gap-4 sm:flex-col sm:gap-0">
                  <span className="grid size-16 shrink-0 place-items-center rounded-full bg-white shadow-soft ring-1 ring-line/60">
                    <Icon className="size-6 text-ink" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[0.8rem] font-bold tracking-[0.18em] text-ink uppercase sm:mt-4">{title}</span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-muted">{body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
