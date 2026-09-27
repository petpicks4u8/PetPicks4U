"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import type { SearchRecord } from "@/lib/types";
import { Logo } from "./icons";
import { SearchPanel } from "./SearchPanel";

const NAV = [
  { href: "/pets", label: "Pets" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

export function SiteHeader({ records, suggestions }: { records: SearchRecord[]; suggestions: string[] }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close overlays when navigating.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setSearchOpen(false);
  }

  useEffect(() => {
    const open = menuOpen || searchOpen;
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line/50 bg-paper/80 backdrop-blur-xl backdrop-saturate-150">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="PetPicks4U home" className="-ml-1 rounded-full p-1">
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                  isActive(item.href) ? "bg-cream text-ink" : "text-ink-soft hover:bg-cream/70 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="ml-2 inline-flex h-10 items-center gap-2 rounded-full bg-white/70 pr-3 pl-4 text-sm text-muted ring-1 ring-line transition-colors hover:bg-white hover:text-ink"
            >
              <Search className="size-4" aria-hidden />
              Find a product
              <kbd className="rounded-md bg-cream px-1.5 py-0.5 font-sans text-[0.7rem] text-muted">⌘K</kbd>
            </button>
          </nav>

          <div className="flex items-center gap-1 md:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="grid size-11 place-items-center rounded-full text-ink transition-colors active:bg-cream"
              aria-label="Search products"
            >
              <Search className="size-5.5" />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="grid size-11 place-items-center rounded-full text-ink transition-colors active:bg-cream"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="size-5.5" /> : <Menu className="size-5.5" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-30 animate-fade bg-paper/97 backdrop-blur-xl md:hidden">
          <nav aria-label="Mobile" className="flex flex-col px-5 pt-6">
            {[{ href: "/", label: "Home" }, ...NAV, { href: "/affiliate-disclosure", label: "Affiliate disclosure" }].map(
              (item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rise flex min-h-16 items-center border-b border-line/70 font-display text-3xl text-ink"
                  style={{ "--d": i } as React.CSSProperties}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}

      {searchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Find a product"
          className="fixed inset-0 z-50 animate-fade bg-ink/25 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setSearchOpen(false)}
        >
          <div className="h-full overflow-y-auto bg-paper px-5 pt-5 pb-10 sm:mx-auto sm:mt-24 sm:h-auto sm:max-h-[75vh] sm:max-w-xl sm:rounded-[2rem] sm:p-6 sm:shadow-lift">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-display text-2xl text-ink">Seen it in a video?</p>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="grid size-11 place-items-center rounded-full text-ink-soft transition-colors hover:bg-cream"
                aria-label="Close search"
              >
                <X className="size-5.5" />
              </button>
            </div>
            <SearchPanel records={records} suggestions={suggestions} autoFocus onNavigate={() => setSearchOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
