import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-24 text-center sm:py-32">
      <p className="font-display text-7xl text-brass">404</p>
      <h1 className="mt-4 font-display text-4xl font-medium">Goldie sniffed everywhere.</h1>
      <p className="mx-auto mt-3 max-w-sm text-ink-soft">This page isn’t here. The product you saw probably is, though.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/#pets">Meet the Pets</ButtonLink>
        <ButtonLink href="/products" variant="secondary">
          Browse all picks
        </ButtonLink>
      </div>
    </Container>
  );
}
