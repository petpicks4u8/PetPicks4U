import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Pet } from "@/lib/types";
import { SmartImage } from "./SmartImage";

/** Big, tappable character card — the first thing a TikTok visitor looks for. */
export function PetCard({ pet, pickCount, priority = false, index = 0 }: { pet: Pet; pickCount: number; priority?: boolean; index?: number }) {
  return (
    <Link
      href={`/pets/${pet.slug}`}
      className="rise group relative flex overflow-hidden rounded-[var(--radius-card)] shadow-soft ring-1 ring-line/60 transition-[transform,box-shadow] duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-lift active:scale-[0.99]"
      style={{ backgroundColor: pet.accent, "--d": index } as React.CSSProperties}
    >
      <div className="grid w-full sm:grid-cols-[46%_1fr]">
        <div className="relative aspect-[5/4] overflow-hidden sm:aspect-auto sm:min-h-80">
          <SmartImage
            src={pet.profileImage.src}
            alt={pet.profileImage.alt}
            fill
            priority={priority}
            sizes="(min-width: 640px) 280px, 92vw"
            className="object-cover object-[50%_30%] transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
            fallbackLabel={pet.name}
          />
        </div>
        <div className="flex flex-col justify-center gap-1 p-6 sm:p-8">
          <p className="text-sm font-medium text-muted">{pet.breed}</p>
          <h3 className="font-display text-4xl leading-none font-medium text-ink sm:text-5xl">{pet.name}</h3>
          <p className="mt-3 text-[0.98rem] leading-snug text-ink-soft">{pet.shortBio}</p>
          <span className="mt-5 inline-flex min-h-12 w-full whitespace-nowrap sm:w-fit justify-center items-center gap-2 rounded-full bg-ink px-5 text-[0.95rem] font-semibold text-paper shadow-soft transition-colors group-hover:bg-black">
            Shop {pet.name}’s Picks
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
          </span>
          <p className="mt-3 text-xs text-muted">
            {pickCount} {pickCount === 1 ? "pick" : "picks"} so far
          </p>
        </div>
      </div>
    </Link>
  );
}

/** Honest empty state: new characters are on the way. */
export function ComingSoonCard() {
  return (
    <div className="grain flex min-h-40 flex-col items-center justify-center rounded-[var(--radius-card)] border border-dashed border-sand px-6 py-10 text-center">
      <p className="font-display text-2xl text-ink">More pets are auditioning.</p>
      <p className="mt-2 max-w-xs text-sm text-muted">New characters join the cast soon. Goldie is being very professional about it.</p>
    </div>
  );
}
