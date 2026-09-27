import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "About",
  description: "PetPicks4You makes short, funny pet videos and gives you one simple place to find the products in them.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <ProsePage
      eyebrow="About"
      title="Pets with opinions."
      intro="PetPicks4You makes short, funny videos starring a small cast of pets — and gives you one simple place to find the things they play with."
    >
      <h2>How it works</h2>
      <p>
        You see Goldie wrestle a snuffle mat on TikTok. You tap the link in our bio. You tap Goldie. There’s the mat, a short honest review,
        and a link to Amazon. That’s it — two or three taps, no maze.
      </p>
      <h2>How we pick products</h2>
      <p>
        We look for things that are genuinely interesting for pets: enrichment, clever toys, everyday gear that makes life a bit better.
        Every review includes <strong>Things to know</strong> — the honest downsides and who a product is <em>not</em> for.
        We don’t make health promises, and we don’t show prices that might be out of date.
      </p>
      <h2>About our pets</h2>
      <p>
        {site.disclosure.ai} We say so in every video, too. Goldie can’t actually hold a shopping bag; his verdicts are comedy, the product
        notes are real.
      </p>
      <h2>How we make money</h2>
      <p>
        {site.disclosure.short} {site.disclosure.amazon} Read the full <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
      </p>
    </ProsePage>
  );
}
