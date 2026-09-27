"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { PawPrint } from "lucide-react";

type Props = Omit<ImageProps, "onLoad" | "onError"> & { fallbackLabel?: string };

/**
 * next/image with a soft shimmer while loading and a branded fallback if the
 * file can't be reached — so a missing photo never looks broken.
 * Parent must be `relative` with a size (we always use `fill`).
 */
export function SmartImage({ fallbackLabel, className = "", alt, ...props }: Props) {
  const [state, setState] = useState<"loading" | "loaded" | "error">("loading");

  if (state === "error") {
    return (
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-cream via-paper to-brand-tint text-muted"
      >
        <PawPrint className="size-8 text-brand" strokeWidth={1.5} aria-hidden />
        {fallbackLabel && <span className="font-display text-lg text-ink-soft">{fallbackLabel}</span>}
      </div>
    );
  }

  return (
    <>
      {state === "loading" && <div className="img-skeleton absolute inset-0" aria-hidden />}
      <Image
        {...props}
        alt={alt}
        onLoad={() => setState("loaded")}
        onError={() => setState("error")}
        className={`${className} transition-opacity duration-500 ${state === "loaded" ? "opacity-100" : "opacity-0"}`}
      />
    </>
  );
}
