import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-brass ${className}`}>{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  action,
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  action?: ReactNode;
  id?: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
      <div>
        {eyebrow && <Eyebrow className="mb-2">{eyebrow}</Eyebrow>}
        <h2 id={id} className="font-display text-[1.9rem] leading-[1.1] font-medium text-ink sm:text-4xl">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.98rem] font-semibold transition-[transform,background-color,box-shadow,color] duration-200 ease-out active:scale-[0.97] select-none";

export const buttonStyles = {
  primary: `${buttonBase} bg-forest text-paper shadow-soft hover:bg-forest-deep hover:shadow-lift`,
  secondary: `${buttonBase} bg-white/70 text-ink ring-1 ring-line hover:bg-white hover:ring-sand`,
  ghost: `${buttonBase} text-ink-soft hover:text-ink hover:bg-cream`,
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: keyof typeof buttonStyles }) {
  return <Link {...props} className={`${buttonStyles[variant]} ${className}`} />;
}

export function Tag({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "forest" | "brass" }) {
  const tones = {
    neutral: "bg-cream text-ink-soft",
    forest: "bg-forest-tint text-forest-deep",
    brass: "bg-brass-tint text-[#7a5a22]",
  };
  return <span className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium ${tones[tone]}`}>{children}</span>;
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-paper/90 px-3 py-1 text-[0.78rem] font-semibold text-ink shadow-soft backdrop-blur">
      <span className="text-brass" aria-hidden>
        ★
      </span>
      {children}
    </span>
  );
}
