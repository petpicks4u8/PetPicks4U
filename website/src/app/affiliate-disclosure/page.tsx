import type { Metadata } from "next";
import { site } from "@/content/site";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How PetPicks4U earns money through affiliate links, including the Amazon Associates program.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <ProsePage eyebrow="Transparency" title="Affiliate disclosure" intro={site.disclosure.short}>
      <h2>Amazon Associates</h2>
      <p>
        <strong>{site.disclosure.amazon}</strong> PetPicks4U is a participant in the Amazon Services LLC Associates Program, an affiliate
        advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
      </p>
      <h2>What that means for you</h2>
      <ul>
        <li>When you tap “View on Amazon” and buy something, we may earn a small commission.</li>
        <li>You pay the same price you would otherwise. The commission comes from Amazon, not from you.</li>
        <li>Links to Amazon are marked as sponsored, and our videos include #ad where relevant.</li>
        <li>Brands don’t pay us to be included, and we write about downsides as well as upsides.</li>
      </ul>
      <h2>Prices</h2>
      <p>
        We don’t list prices on this site because they change often. The current price and availability are always shown on Amazon at the
        time you visit.
      </p>
      <h2>AI-generated characters</h2>
      <p>{site.disclosure.ai}</p>
    </ProsePage>
  );
}
