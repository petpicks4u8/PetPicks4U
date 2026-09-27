import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };

/** Fetch a photo for the share card; if it can't be reached, the card still renders. */
async function loadPhoto(src?: string): Promise<string | undefined> {
  if (!src?.startsWith("http")) return undefined;
  try {
    const res = await fetch(src, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return undefined;
    const type = res.headers.get("content-type") ?? "image/png";
    if (!/png|jpe?g/.test(type)) return undefined;
    const buf = Buffer.from(await res.arrayBuffer());
    return `data:${type};base64,${buf.toString("base64")}`;
  } catch {
    return undefined;
  }
}

/** Branded share card used for WhatsApp / iMessage / X / Instagram DM previews. */
export async function renderOgCard({
  eyebrow,
  title,
  quote,
  photo,
}: {
  eyebrow: string;
  title: string;
  quote?: string;
  photo?: string;
}) {
  const image = await loadPhoto(photo);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#fcf8f2", color: "#161412" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 64px 56px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <div style={{ fontSize: 44, fontWeight: 800, display: "flex", letterSpacing: -1.5 }}>
              PetPicks<span style={{ color: "#f5891f" }}>4</span>You
            </div>
            <svg width="250" height="18" viewBox="0 0 200 22" style={{ marginLeft: 14, marginTop: -2 }}>
              <path d="M3 4 C 58 19, 142 19, 197 3 C 150 23, 52 24, 3 4 Z" fill="#f5891f" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 24, letterSpacing: 4, textTransform: "uppercase", color: "#f5891f", fontWeight: 700 }}>{eyebrow}</div>
            <div style={{ fontSize: title.length > 28 ? 60 : 76, fontWeight: 700, lineHeight: 1.05, marginTop: 14, letterSpacing: -1.5 }}>{title}</div>
            {quote && (
              <div style={{ fontSize: 32, lineHeight: 1.3, marginTop: 24, color: "#4a433b", fontStyle: "italic", maxWidth: 640 }}>{`“${quote}”`}</div>
            )}
          </div>
          <div style={{ fontSize: 24, color: "#7a7166", display: "flex" }}>{site.url.replace(/^https?:\/\//, "")}</div>
        </div>
        {image ? (
          <div style={{ width: 430, height: "100%", display: "flex", padding: 28 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="" width={374} height={574} style={{ width: 374, height: 574, objectFit: "cover", borderRadius: 40 }} />
          </div>
        ) : (
          <div style={{ width: 300, height: "100%", display: "flex", background: "#f5891f" }} />
        )}
      </div>
    ),
    ogSize,
  );
}
