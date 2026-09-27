import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertCircle, Check, ChevronLeft } from "lucide-react";
import { site } from "@/content/site";
import { getCategory, getPetById, getProduct, getProducts, getRelatedProducts } from "@/lib/data";
import { AffiliateButton, type AffiliateContext } from "@/components/AffiliateButton";
import { StickyCta } from "@/components/StickyCta";
import { WatchVideoLink } from "@/components/WatchVideoLink";
import { ProductCard, ProductGrid } from "@/components/ProductCard";
import { SmartImage } from "@/components/SmartImage";
import { JsonLd } from "@/components/JsonLd";
import { Badge, Container, Tag } from "@/components/ui";

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getProducts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return {};
  const pet = await getPetById(product.petId);
  const title = pet ? `${product.name} — ${pet.name}’s review` : product.name;
  const description = `${pet ? `${pet.name}’s` : "The"} verdict: “${product.shortVerdict}” ${product.description}`.slice(0, 200);
  return {
    title,
    description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title, description, url: `/products/${product.slug}`, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line/80 py-8">
      <h2 className="mb-4 font-display text-[1.55rem] font-medium text-ink">{title}</h2>
      {children}
    </section>
  );
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();
  const [pet, related] = await Promise.all([getPetById(product.petId), getRelatedProducts(product)]);
  const category = getCategory(product.category);
  const petName = pet?.name ?? "Our pet";
  const images = [product.image, ...product.galleryImages];

  const ctx: AffiliateContext = {
    product_id: product.id,
    product_name: product.name,
    product_slug: product.slug,
    pet_id: product.petId,
    pet_name: petName,
    category: product.category,
  };

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              name: product.name,
              ...(product.brand && { brand: { "@type": "Brand", name: product.brand } }),
              description: product.description,
              image: images.map((i) => (i.src.startsWith("http") ? i.src : `${site.url}${i.src}`)),
              category: category?.name,
              review: {
                "@type": "Review",
                name: `${petName}’s verdict`,
                reviewBody: product.verdict,
                author: { "@type": "Organization", name: site.name, url: site.url },
                datePublished: product.dateAdded,
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Pets", item: `${site.url}/pets` },
                ...(pet ? [{ "@type": "ListItem", position: 2, name: `${pet.name}’s Picks`, item: `${site.url}/pets/${pet.slug}` }] : []),
                { "@type": "ListItem", position: pet ? 3 : 2, name: product.shortName, item: `${site.url}/products/${product.slug}` },
              ],
            },
          ],
        }}
      />

      <Container className="pt-3 sm:pt-6">
        <Link
          href={pet ? `/pets/${pet.slug}` : "/products"}
          className="-ml-2 inline-flex min-h-11 items-center gap-1 rounded-full px-2 text-sm font-medium text-ink-soft hover:text-ink"
        >
          <ChevronLeft className="size-4" aria-hidden /> {pet ? `${pet.name}’s Picks` : "All picks"}
        </Link>

        <div className="mt-2 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
          {/* Images */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
              {images.map((img, i) => (
                <div
                  key={img.src}
                  className={`rise relative aspect-square shrink-0 sm:aspect-[4/5] snap-center overflow-hidden rounded-[2rem] bg-cream ring-1 ring-line/60 ${
                    images.length > 1 ? "w-[86%] sm:w-full" : "w-full"
                  } ${i > 0 ? "lg:hidden" : ""}`}
                >
                  <SmartImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 1024px) 540px, 90vw"
                    className="object-cover"
                    fallbackLabel={product.shortName}
                  />
                  {i === 0 && product.badge && (
                    <div className="absolute top-4 left-4">
                      <Badge>{product.badge}</Badge>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {images.length > 1 && (
              <div className="mt-3 hidden gap-3 lg:grid lg:grid-cols-4">
                {images.slice(1).map((img) => (
                  <div key={img.src} className="relative aspect-square overflow-hidden rounded-2xl bg-cream ring-1 ring-line/60">
                    <SmartImage src={img.src} alt={img.alt} fill sizes="130px" className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Review */}
          <article>
            {pet && (
              <Link href={`/pets/${pet.slug}`} className="rise inline-flex items-center gap-2.5 rounded-full bg-white/80 py-1 pr-4 pl-1 ring-1 ring-line/70">
                <span className="relative size-8 overflow-hidden rounded-full bg-cream">
                  <SmartImage src={pet.profileImage.src} alt="" fill sizes="32px" className="object-cover object-[50%_28%]" />
                </span>
                <span className="text-sm font-medium text-ink-soft">
                  Reviewed by <span className="text-ink">{pet.name}</span>
                </span>
              </Link>
            )}
            <h1 className="rise mt-4 font-display text-[2.4rem] leading-[1.05] font-medium text-ink sm:text-5xl" style={{ "--d": 1 } as React.CSSProperties}>
              {product.name}
            </h1>
            <div className="rise mt-3 flex flex-wrap gap-2" style={{ "--d": 1 } as React.CSSProperties}>
              {category && (
                <Link href={`/categories/${category.slug}`}>
                  <Tag tone="forest">{category.name}</Tag>
                </Link>
              )}
              {product.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            <figure className="rise relative mt-7 rounded-[1.75rem] bg-brass-tint/70 px-6 pt-6 pb-5" style={{ "--d": 2 } as React.CSSProperties}>
              <span className="absolute -top-3 left-5 font-display text-6xl leading-none text-brass/70" aria-hidden>
                “
              </span>
              <figcaption className="text-xs font-semibold tracking-[0.14em] text-[#7a5a22] uppercase">{petName}’s verdict</figcaption>
              <blockquote className="mt-2 font-display text-[1.45rem] leading-snug text-ink italic sm:text-[1.65rem]">{product.verdict}</blockquote>
            </figure>

            <p className="rise mt-6 text-[1.05rem] leading-relaxed text-ink-soft" style={{ "--d": 3 } as React.CSSProperties}>
              {product.description}
            </p>

            <div id="primary-cta" className="rise mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={{ "--d": 3 } as React.CSSProperties}>
              <AffiliateButton url={product.amazonUrl} context={ctx} placement="hero" className="w-full sm:w-auto" />
              {product.videoUrl && (
                <WatchVideoLink url={product.videoUrl} platform={product.socialPlatform} productId={product.id} petId={product.petId} />
              )}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              #ad · {site.disclosure.amazon} Prices and availability are on Amazon.{" "}
              <Link href="/affiliate-disclosure" className="underline underline-offset-2">
                Disclosure
              </Link>
            </p>

            <div className="mt-8">
              <Section title={`Why ${petName} likes it`}>
                <ul className="space-y-3">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-[1.02rem] text-ink-soft">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-forest-tint text-forest">
                        <Check className="size-3.5" strokeWidth={3} aria-hidden />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Best for">
                <div className="flex flex-wrap gap-2">
                  {product.bestFor.map((b) => (
                    <Tag key={b} tone="brass">
                      {b}
                    </Tag>
                  ))}
                </div>
              </Section>

              {product.thingsToKnow.length > 0 && (
                <Section title="Things to know">
                  <ul className="space-y-3">
                    {product.thingsToKnow.map((t) => (
                      <li key={t} className="flex gap-3 text-[0.98rem] leading-relaxed text-ink-soft">
                        <AlertCircle className="mt-0.5 size-5 shrink-0 text-muted" aria-hidden />
                        {t}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              <div className="rounded-3xl bg-white/70 p-5 ring-1 ring-line/70">
                <p className="font-semibold text-ink">Ready when you are.</p>
                <p className="mt-1 mb-4 text-sm text-muted">Check sizes, price and delivery on Amazon.</p>
                <AffiliateButton url={product.amazonUrl} context={ctx} placement="footer" compact className="w-full sm:w-auto" />
              </div>
              <p className="mt-4 text-xs text-muted">{site.disclosure.ai}</p>
            </div>
          </article>
        </div>

        {related.length > 0 && (
          <section className="pt-20">
            <h2 className="mb-6 font-display text-[1.9rem] font-medium">More picks</h2>
            <ProductGrid>
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} category={getCategory(p.category)} index={i} />
              ))}
            </ProductGrid>
          </section>
        )}
      </Container>

      <StickyCta watchId="primary-cta" url={product.amazonUrl} context={ctx} title={product.shortName} />
    </>
  );
}
