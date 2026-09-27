import Link from "next/link";
import { site } from "@/content/site";
import { Logo, platformMeta } from "./icons";
import { Container } from "./ui";

const LINKS = [
  { href: "/pets", label: "Pets" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
];

export function SiteFooter() {
  const socials = site.social.filter((s) => s.url);
  return (
    <footer className="mt-24 border-t border-line/70 bg-cream/60">
      <Container className="py-12 sm:py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">{site.tagline}</p>
            {socials.length > 0 && (
              <div className="mt-5 flex gap-2">
                {socials.map(({ platform, url }) => {
                  const { label, Icon } = platformMeta[platform];
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`PetPicks4U on ${label}`}
                      className="grid size-11 place-items-center rounded-full bg-white text-ink shadow-soft ring-1 ring-line transition-transform hover:-translate-y-0.5"
                    >
                      <Icon className="size-5" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-1 sm:gap-x-14">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="flex min-h-11 items-center text-[0.95rem] text-ink-soft transition-colors hover:text-ink">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 space-y-2 border-t border-line/70 pt-6 text-xs leading-relaxed text-muted">
          <p>
            {site.disclosure.short} {site.disclosure.amazon}{" "}
            <Link href="/affiliate-disclosure" className="underline underline-offset-2 hover:text-ink">
              Learn more
            </Link>
          </p>
          <p>{site.disclosure.ai}</p>
          <p>© {new Date().getFullYear()} PetPicks4U. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.</p>
        </div>
      </Container>
    </footer>
  );
}
