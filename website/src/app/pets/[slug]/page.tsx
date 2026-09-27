import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { site } from "@/content/site";
import { getCategory, getPet, getPets, getProductsForPet } from "@/lib/data";
import { ProductCard, ProductGrid } from "@/components/ProductCard";
import { SmartImage } from "@/components/SmartImage";
import { JsonLd } from "@/components/JsonLd";
import { platformMeta } from "@/components/icons";
import { Container, Tag } from "@/components/ui";

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getPets()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/pets/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const pet = await getPet(slug);
  if (!pet) return {};
  const title = `${pet.name}’s Picks`;
  const description = `${pet.name} the ${pet.breed}. ${pet.shortBio} Every product ${pet.name} has reviewed, in one place.`;
  return {
    title,
    description,
    alternates: { canonical: `/pets/${pet.slug}` },
    openGraph: { title: `${title} · ${site.name}`, description, url: `/pets/${pet.slug}`, type: "profile" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function PetPage({ params }: PageProps<"/pets/[slug]">) {
  const { slug } = await params;
  const pet = await getPet(slug);
  if (!pet) notFound();
  const picks = await getProductsForPet(pet);
  const socials = pet.socialLinks.filter((s) => s.url);
  const [pronoun] = pet.pronouns.split("/");

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Pets", item: `${site.url}/pets` },
            { "@type": "ListItem", position: 2, name: pet.name, item: `${site.url}/pets/${pet.slug}` },
          ],
        }}
      />
      <section style={{ backgroundColor: pet.accent }} className="relative overflow-hidden">
        <div className="grain pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <Container className="relative pt-4 pb-10 sm:pt-8 sm:pb-16">
          <Link href="/pets" className="-ml-2 inline-flex min-h-11 items-center gap-1 rounded-full px-2 text-sm font-medium text-ink-soft hover:text-ink">
            <ChevronLeft className="size-4" aria-hidden /> All pets
          </Link>
          <div className="mt-3 grid items-center gap-7 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-12 lg:grid-cols-[minmax(0,20rem)_1fr]">
            <div className="rise relative mx-auto aspect-square w-44 overflow-hidden rounded-full bg-cream shadow-lift ring-4 ring-paper sm:mx-0 sm:w-full">
              <SmartImage
                src={pet.profileImage.src}
                alt={pet.profileImage.alt}
                fill
                priority
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 240px, 176px"
                className="object-cover object-[50%_28%]"
                fallbackLabel={pet.name}
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="rise text-sm font-medium text-muted" style={{ "--d": 1 } as React.CSSProperties}>
                {pet.breed}
              </p>
              <h1
                className="rise font-display text-6xl leading-none font-medium text-ink sm:text-7xl"
                style={{ "--d": 1 } as React.CSSProperties}
              >
                {pet.name}
              </h1>
              <p className="rise mx-auto mt-4 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft sm:mx-0" style={{ "--d": 2 } as React.CSSProperties}>
                {pet.bio}
              </p>
              <div className="rise mt-5 flex flex-wrap justify-center gap-2 sm:justify-start" style={{ "--d": 3 } as React.CSSProperties}>
                {pet.personality.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              {socials.length > 0 && (
                <div className="mt-5 flex justify-center gap-2 sm:justify-start">
                  {socials.map((s) => {
                    const { Icon, label } = platformMeta[s.platform];
                    return (
                      <a
                        key={s.platform}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white/80 px-4 text-sm font-medium text-ink ring-1 ring-line"
                      >
                        <Icon className="size-4" /> {s.handle ?? label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <Container className="pt-12 sm:pt-16">
        <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
          <h2 className="font-display text-[2rem] leading-tight font-medium sm:text-4xl">{pet.name}’s Picks</h2>
          <p className="text-sm text-muted">
            {picks.length} {picks.length === 1 ? "pick" : "picks"}
          </p>
        </div>
        {picks.length > 0 ? (
          <ProductGrid>
            {picks.map((p, i) => (
              <ProductCard key={p.id} product={p} pet={pet} category={getCategory(p.category)} index={i} priority={i < 2} />
            ))}
          </ProductGrid>
        ) : (
          <div className="grain rounded-[var(--radius-card)] border border-dashed border-sand px-6 py-14 text-center">
            <p className="font-display text-2xl">{pet.name} is still testing.</p>
            <p className="mt-2 text-muted">First picks land with {pronoun === "they" ? "their" : pronoun === "she" ? "her" : "his"} first video.</p>
          </div>
        )}
        <p className="mt-10 text-center text-xs text-muted">{site.disclosure.ai}</p>
      </Container>
    </>
  );
}
