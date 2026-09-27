"use client";

import { useEffect, useState } from "react";
import { isPlaceholderUrl } from "@/content/affiliate-links";
import { AffiliateButton, type AffiliateContext } from "./AffiliateButton";

/**
 * Mobile-only bar that slides up once the main "View on Amazon" button has
 * scrolled out of view. `watchId` is the id of the element to observe.
 */
export function StickyCta({
  watchId,
  url,
  context,
  title,
}: {
  watchId: string;
  url: string;
  context: AffiliateContext;
  title: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById(watchId);
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [watchId]);

  if (isPlaceholderUrl(url)) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-line/70 bg-paper/90 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl transition-transform duration-300 ease-[var(--ease-out-soft)] md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
      inert={!visible}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-ink">{title}</p>
          <p className="truncate text-xs text-muted">#ad · Opens Amazon</p>
        </div>
        <AffiliateButton url={url} context={context} placement="sticky" compact className="shrink-0" />
      </div>
    </div>
  );
}
