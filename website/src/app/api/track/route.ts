/**
 * First-party event collector. Events arrive via navigator.sendBeacon.
 *
 * V1 writes one JSON line per event to the server log (visible in your
 * hosting dashboard, e.g. Vercel → Logs, filter "pp_event"). To keep history
 * long-term, forward `record` to a database or analytics tool here —
 * nothing on the client needs to change.
 */

const ALLOWED = new Set(["affiliate_click", "video_click", "search_select", "session_start"]);
const MAX_FIELD = 300;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }
  if (typeof body.event !== "string" || !ALLOWED.has(body.event)) {
    return new Response(null, { status: 400 });
  }

  const record: Record<string, string | number | boolean> = {};
  for (const [k, v] of Object.entries(body).slice(0, 30)) {
    if (typeof v === "string") record[k.slice(0, 40)] = v.slice(0, MAX_FIELD);
    else if (typeof v === "number" || typeof v === "boolean") record[k.slice(0, 40)] = v;
  }
  record.country = request.headers.get("x-vercel-ip-country") ?? "";
  record.ua_mobile = /Mobi|Android|iPhone/i.test(request.headers.get("user-agent") ?? "");

  console.log(`pp_event ${JSON.stringify(record)}`);
  return new Response(null, { status: 204 });
}
