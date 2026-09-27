"use client";

import Link from "next/link";
import { useDeferredValue, useId, useMemo, useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import type { SearchRecord } from "@/lib/types";
import { searchRecords } from "@/lib/search";
import { track } from "@/lib/analytics";
import { SmartImage } from "./SmartImage";

export function SearchPanel({
  records,
  suggestions,
  autoFocus = false,
  initialQuery = "",
  onNavigate,
  placeholder = "Try “snuffle”, “Goldie” or “toy”",
}: {
  records: SearchRecord[];
  suggestions: string[];
  autoFocus?: boolean;
  initialQuery?: string;
  onNavigate?: () => void;
  placeholder?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const deferred = useDeferredValue(query);
  const results = useMemo(() => searchRecords(records, deferred), [records, deferred]);
  const inputId = useId();
  const listId = useId();
  const hasQuery = deferred.trim().length > 0;

  return (
    <div>
      <label htmlFor={inputId} className="sr-only">
        Search products and pets
      </label>
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2 text-muted" aria-hidden />
        <input
          id={inputId}
          type="search"
          inputMode="search"
          enterKeyHint="search"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          autoFocus={autoFocus}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          aria-controls={listId}
          className="h-14 w-full rounded-full bg-white pr-12 pl-13 text-[1.05rem] text-ink shadow-soft ring-1 ring-line outline-none transition-shadow placeholder:text-muted/80 focus:ring-2 focus:ring-forest/50 focus-visible:outline-none [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute top-1/2 right-3 grid size-9 -translate-y-1/2 place-items-center rounded-full text-muted transition-colors hover:bg-cream hover:text-ink"
            aria-label="Clear search"
          >
            <X className="size-4.5" />
          </button>
        )}
      </div>

      {!hasQuery && suggestions.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setQuery(s)}
              className="min-h-10 rounded-full bg-white/70 px-4 text-sm font-medium text-ink-soft ring-1 ring-line transition-colors hover:bg-white hover:text-ink active:scale-[0.97]"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <div id={listId} aria-live="polite" className="mt-3">
        {hasQuery && results.length > 0 && (
          <ul className="animate-fade overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-line/70">
            {results.map((r) => (
              <li key={`${r.type}-${r.slug}`} className="border-b border-line/60 last:border-0">
                <Link
                  href={r.href}
                  onClick={() => {
                    track("search_select", { query: deferred.trim().slice(0, 80), result_type: r.type, result_slug: r.slug });
                    onNavigate?.();
                  }}
                  className="flex min-h-18 items-center gap-4 px-4 py-3 transition-colors hover:bg-paper active:bg-cream"
                >
                  <span className={`relative size-14 shrink-0 overflow-hidden bg-cream ${r.type === "pet" ? "rounded-full" : "rounded-2xl"}`}>
                    <SmartImage src={r.image.src} alt="" fill sizes="56px" className="object-cover object-[50%_30%]" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-semibold text-ink">{r.title}</span>
                    <span className="block truncate text-sm text-muted">{r.type === "pet" ? `Pet · ${r.subtitle}` : r.subtitle}</span>
                  </span>
                  <ArrowRight className="size-4.5 shrink-0 text-muted" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        )}
        {hasQuery && results.length === 0 && (
          <div className="animate-fade rounded-3xl bg-white/70 px-6 py-7 text-center ring-1 ring-line/70">
            <p className="font-display text-xl text-ink">No match for “{deferred.trim()}” yet.</p>
            <p className="mt-1 text-sm text-muted">Try the pet’s name, or what the product does (“mat”, “puzzle”, “ball”).</p>
            <Link href="/products" onClick={onNavigate} className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-semibold text-forest">
              Browse every pick <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
