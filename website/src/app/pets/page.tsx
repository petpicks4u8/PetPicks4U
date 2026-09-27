import type { Metadata } from "next";
import { getPets, getProducts } from "@/lib/data";
import { ComingSoonCard, PetCard } from "@/components/PetCard";
import { Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Meet the Pets",
  description: "The PetPicks4U cast — tap a pet to see every product they’ve reviewed.",
  alternates: { canonical: "/pets" },
};

export default async function PetsPage() {
  const [pets, products] = await Promise.all([getPets(), getProducts()]);
  return (
    <Container className="pt-10 sm:pt-16">
      <Eyebrow className="rise">The cast</Eyebrow>
      <h1 className="rise mt-2 font-display text-[2.6rem] leading-tight font-medium sm:text-6xl" style={{ "--d": 1 } as React.CSSProperties}>
        Meet the pets
      </h1>
      <p className="rise mt-3 max-w-lg text-ink-soft" style={{ "--d": 2 } as React.CSSProperties}>
        Every pet has opinions. Tap one to see everything they’ve picked.
      </p>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {pets.map((pet, i) => (
          <PetCard key={pet.id} pet={pet} index={i} priority={i === 0} pickCount={products.filter((p) => p.petId === pet.id).length} />
        ))}
        <ComingSoonCard />
      </div>
    </Container>
  );
}
