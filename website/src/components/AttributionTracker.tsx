"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/analytics";

/** Records where this visit came from (utm tags, TikTok/IG in-app browser, referrer). */
export function AttributionTracker() {
  useEffect(() => {
    try {
      captureAttribution();
    } catch {
      // never block rendering
    }
  }, []);
  return null;
}
