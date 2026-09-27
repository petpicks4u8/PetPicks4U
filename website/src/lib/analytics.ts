"use client";

/**
 * First-party analytics helpers.
 *
 * Every event is sent to:
 *   • window.dataLayer   (Google Tag Manager, if installed)
 *   • window.gtag        (GA4, if NEXT_PUBLIC_GA_ID is set)
 *   • window.plausible   (Plausible, if installed)
 *   • /api/track         (our own endpoint via sendBeacon — works with no vendor at all)
 *
 * Attribution (utm_* tags, platform, video) is captured once per visit on
 * landing and attached to every event, so an Amazon click can be traced back
 * to the TikTok/Reel/Short that sent the visitor.
 */

export type Attribution = {
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
  platform: string;
  landing_page: string;
  referrer: string;
};

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, opts?: { props?: Params }) => void;
  }
}

const KEY = "pp_attribution";

function detectPlatform(source: string, referrer: string, ua: string): string {
  const s = `${source} ${referrer}`.toLowerCase();
  if (/tiktok|bytedance|musical_ly/.test(s) || /BytedanceWebview|musical_ly|TikTok/i.test(ua)) return "tiktok";
  if (/instagram|\big\b/.test(s) || /Instagram/i.test(ua)) return "instagram";
  if (/youtube|youtu\.be|\byt\b/.test(s)) return "youtube";
  if (/facebook|fb\b/.test(s) || /FBAN|FBAV/i.test(ua)) return "facebook";
  if (/google|bing|duckduckgo/.test(s)) return "search";
  return referrer ? "referral" : "direct";
}

function safeStorage(): Storage | null {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

/** Call once on every page load; keeps the first tagged touch of the visit. */
export function captureAttribution(): Attribution {
  const store = safeStorage();
  const url = new URL(window.location.href);
  const q = url.searchParams;
  const incoming = {
    source: q.get("utm_source") ?? q.get("src") ?? "",
    medium: q.get("utm_medium") ?? "",
    campaign: q.get("utm_campaign") ?? "",
    content: q.get("utm_content") ?? q.get("v") ?? "",
    term: q.get("utm_term") ?? "",
  };

  const existingRaw = store?.getItem(KEY);
  const existing = existingRaw ? (JSON.parse(existingRaw) as Attribution) : null;
  const hasNewTags = Object.values(incoming).some(Boolean);
  if (existing && !hasNewTags) return existing;

  const referrer = document.referrer && !document.referrer.startsWith(window.location.origin) ? document.referrer : "";
  const attribution: Attribution = {
    ...incoming,
    platform: detectPlatform(incoming.source, referrer, navigator.userAgent),
    landing_page: url.pathname,
    referrer,
  };
  store?.setItem(KEY, JSON.stringify(attribution));
  if (!existing) track("session_start", {});
  return attribution;
}

export function getAttribution(): Partial<Attribution> {
  const raw = safeStorage()?.getItem(KEY);
  return raw ? (JSON.parse(raw) as Attribution) : {};
}

export function track(event: string, params: Params) {
  if (typeof window === "undefined") return;
  const a = getAttribution();
  const payload: Params = {
    ...params,
    page: params.page ?? window.location.pathname,
    source: a.source || a.platform,
    utm_source: a.source,
    utm_medium: a.medium,
    utm_campaign: a.campaign,
    utm_content: a.content,
    platform: a.platform,
    landing_page: a.landing_page,
  };

  try {
    (window.dataLayer ??= []).push({ event, ...payload });
    window.gtag?.("event", event, payload);
    window.plausible?.(event, { props: payload });
    const body = JSON.stringify({ event, ts: new Date().toISOString(), ...payload });
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/track", new Blob([body], { type: "application/json" }));
    } else {
      void fetch("/api/track", { method: "POST", body, keepalive: true, headers: { "content-type": "application/json" } });
    }
  } catch {
    // Analytics must never break the page or block the click.
  }
}
