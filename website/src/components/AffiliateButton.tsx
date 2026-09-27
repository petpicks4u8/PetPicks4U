"use client";

import { ArrowUpRight, Clock } from "lucide-react";
import { isPlaceholderUrl } from "@/content/affiliate-links";
import { track } from "@/lib/analytics";

export type AffiliateContext = {
  product_id: string;
  product_name: string;
  product_slug: string;
  pet_id: string;
  pet_name: string;
  category: string;
};

/**
 * The "View on Amazon" button. The href is the untouched affiliate URL —
 * tracking happens in a beacon on click and never rewrites the link.
 */
export function AffiliateButton({
  url,
  context,
  placement,
  className = "",
  compact = false,
}: {
  url: string;
  context: AffiliateContext;
  placement: "hero" | "sticky" | "footer";
  className?: string;
  compact?: boolean;
}) {
  const base = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[transform,background-color,box-shadow] duration-200 ease-out select-none ${
    compact ? "min-h-12 px-6 text-[0.98rem]" : "min-h-14 px-8 text-[1.05rem]"
  }`;

  if (isPlaceholderUrl(url)) {
    return (
      <span
        aria-disabled="true"
        className={`${base} cursor-not-allowed bg-sand text-ink-soft ${className}`}
        title="The Amazon link for this product is being set up"
      >
        <Clock className="size-4.5" aria-hidden />
        Amazon link coming soon
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="sponsored noopener"
      onClick={() => track("affiliate_click", { ...context, destination: url, placement })}
      className={`${base} bg-forest text-paper shadow-soft hover:bg-forest-deep hover:shadow-lift active:scale-[0.97] ${className}`}
    >
      View on Amazon
      <ArrowUpRight className="size-5" aria-hidden />
    </a>
  );
}
