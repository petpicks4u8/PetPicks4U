import type { SocialPlatform } from "@/lib/types";

type IconProps = { className?: string };

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.77-1.77C18.27 5 12 5 12 5s-6.27 0-7.83.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.77 1.77C5.73 19 12 19 12 19s6.27 0 7.83-.43a2.5 2.5 0 0 0 1.77-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
    </svg>
  );
}

export const platformMeta: Record<SocialPlatform, { label: string; Icon: (p: IconProps) => React.JSX.Element }> = {
  tiktok: { label: "TikTok", Icon: TikTokIcon },
  instagram: { label: "Instagram", Icon: InstagramIcon },
  youtube: { label: "YouTube", Icon: YouTubeIcon },
};

/** Orange smile swoosh from the logo (a plain crescent — no arrowhead). */
export function Smile({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 200 22" preserveAspectRatio="none" className={className} aria-hidden>
      <path d="M3 4 C 58 19, 142 19, 197 3 C 150 23, 52 24, 3 4 Z" fill="currentColor" />
    </svg>
  );
}

/**
 * Wordmark matching the owner's logo: bold rounded "PetPicks4You" with an
 * orange 4 and an orange smile underneath.
 */
export function Logo({ className = "", size = "md" }: IconProps & { size?: "md" | "lg" }) {
  const text = size === "lg" ? "text-[2rem]" : "text-[1.5rem]";
  return (
    <span className={`relative inline-flex flex-col items-center pb-1.5 ${className}`}>
      <span className={`font-display ${text} leading-none font-black tracking-[-0.045em] text-ink`}>
        PetPicks<span className="text-brand">4</span>You
      </span>
      <Smile className="absolute -bottom-0.5 left-[8%] h-2 w-[84%] text-brand" />
    </span>
  );
}

/** Filled paw print used as scattered decoration (like the logo artwork). */
export function PawMark({ className = "", style }: IconProps & { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden>
      <ellipse cx="6.2" cy="9.2" rx="2.1" ry="2.6" transform="rotate(-18 6.2 9.2)" />
      <ellipse cx="10" cy="5.6" rx="2.1" ry="2.7" transform="rotate(-6 10 5.6)" />
      <ellipse cx="14.6" cy="5.6" rx="2.1" ry="2.7" transform="rotate(8 14.6 5.6)" />
      <ellipse cx="18.3" cy="9.4" rx="2.1" ry="2.6" transform="rotate(20 18.3 9.4)" />
      <path d="M12.3 10.6c-3.1 0-6.3 3.5-6.3 6.3 0 1.8 1.4 2.7 3 2.7 1.3 0 2.1-.7 3.3-.7s2 .7 3.3.7c1.6 0 3-.9 3-2.7 0-2.8-3.2-6.3-6.3-6.3Z" />
    </svg>
  );
}

/** Three little hand-drawn "excitement" dashes. */
export function Sparks({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={3.2} strokeLinecap="round" className={className} aria-hidden>
      <path d="M8 26 L3 30" />
      <path d="M14 16 L10 6" />
      <path d="M24 14 L30 5" />
    </svg>
  );
}
