import type { Metadata } from "next";
import { site } from "@/content/site";
import { platformMeta } from "@/components/icons";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Say hi to the PetPicks4U team.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const socials = site.social.filter((s) => s.url);
  return (
    <ProsePage eyebrow="Contact" title="Say hi." intro="Questions, product suggestions, or a brand that wants to send Goldie something? We read everything.">
      {site.contactEmail ? (
        <p>
          Email us at <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </p>
      ) : (
        <p>The fastest way to reach us is a DM on any of our channels.</p>
      )}
      {socials.length > 0 && (
        <ul>
          {socials.map((s) => (
            <li key={s.platform}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {platformMeta[s.platform].label}
              </a>
            </li>
          ))}
        </ul>
      )}
      <p className="text-sm text-muted">Please note: we can’t help with Amazon orders — Amazon customer service handles those.</p>
    </ProsePage>
  );
}
