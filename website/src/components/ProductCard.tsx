import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Category, Pet, Product } from "@/lib/types";
import { SmartImage } from "./SmartImage";
import { Badge } from "./ui";

export function ProductCard({
  product,
  pet,
  category,
  priority = false,
  index = 0,
}: {
  product: Product;
  pet?: Pet;
  category?: Category;
  priority?: boolean;
  index?: number;
}) {
  const meta = [category?.name, ...product.tags.slice(0, 1)].filter(Boolean).join(" • ");
  return (
    <Link
      href={`/products/${product.slug}`}
      className="rise group flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-soft ring-1 ring-line/60 transition-[transform,box-shadow] duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-lift active:scale-[0.99]"
      style={{ "--d": index } as React.CSSProperties}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <SmartImage
          src={product.image.src}
          alt={product.image.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw"
          className="object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
          fallbackLabel={product.shortName}
        />
        {product.badge && (
          <div className="absolute top-4 left-4">
            <Badge>{product.badge}</Badge>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {pet && (
          <p className="mb-2 text-sm font-medium text-brand-deep">
            {pet.name}’s pick
          </p>
        )}
        <h3 className="font-display text-[1.45rem] leading-tight font-medium text-ink">{product.shortName}</h3>
        {meta && <p className="mt-1 text-sm text-muted">{meta}</p>}
        <p className="mt-4 flex-1 font-script text-[1.45rem] leading-tight text-ink-soft">
          “{product.shortVerdict}”
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-brand-deep">
          See {pet ? `${pet.name}’s` : "the"} review
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}

export function ProductGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">{children}</div>;
}
