import type { ReactNode } from "react";
import { Container, Eyebrow } from "./ui";

/** Simple, readable layout for About / Privacy / Disclosure pages. */
export function ProsePage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <Container className="pt-10 sm:pt-16">
      <div className="mx-auto max-w-2xl">
        <Eyebrow className="rise">{eyebrow}</Eyebrow>
        <h1 className="rise mt-2 font-display text-[2.5rem] leading-tight font-medium sm:text-6xl" style={{ "--d": 1 } as React.CSSProperties}>
          {title}
        </h1>
        {intro && (
          <p className="rise mt-5 text-lg leading-relaxed text-ink-soft" style={{ "--d": 2 } as React.CSSProperties}>
            {intro}
          </p>
        )}
        <div className="rise mt-10 space-y-5 text-[1.02rem] leading-relaxed text-ink-soft [&_a]:font-medium [&_a]:text-forest [&_a]:underline [&_a]:underline-offset-2 [&_h2]:pt-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-ink" style={{ "--d": 3 } as React.CSSProperties}>
          {children}
        </div>
      </div>
    </Container>
  );
}
