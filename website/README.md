# PetPicks4You website

The link-in-bio site. Someone sees Goldie on TikTok, taps the bio link, taps Goldie, taps the product, then taps **View on Amazon**.

Stack: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4 + lucide icons. There's no database: every page is generated from the files in `src/content/`.

---

## Everyday tasks (owner)

| I want to… | Edit this file |
|---|---|
| Paste a real Amazon affiliate link | `src/content/affiliate-links.ts` (replace `AMAZON_AFFILIATE_URL` for that product) |
| Add a product | `src/content/products.ts` (copy a block, set `published: true`) |
| Add a new pet | `src/content/pets.ts` (copy Goldie's block) |
| Add the video link to a product | `videoUrl` on the product in `products.ts` |
| Make a caption short link | `src/content/short-links.ts` |
| Add our TikTok/IG/YouTube accounts | `social` in `src/content/site.ts` |

Until a product has a real affiliate link, its button shows **"Amazon link coming soon"** instead of a broken link.

### Short links for captions and bios
Every pet and product gets one automatically:
- `petpicks4u.com/goldie` goes to Goldie's page
- `petpicks4u.com/snuffle-mat` goes to the snuffle mat review

Tracked links, set up in `short-links.ts`:
- `petpicks4u.com/tt`, `/ig`, `/yt`: one bio link per platform, so we can tell where visitors came from even when the app hides it.
- `petpicks4u.com/v001`: the snuffle-mat review, tagged as video #001.

**Use `/tt` as the TikTok bio link, `/ig` for Instagram, and `/yt` for YouTube.**

---

## Click tracking

Every **View on Amazon** tap sends an `affiliate_click` event with `product_id`, `product_name`, `pet_id`, `pet_name`, `category`, `destination`, `page`, `placement`, `source`, the `utm_*` tags and `platform`. Other events are `video_click`, `search_select` and `session_start` (where a visit came from).

Tracking never changes the Amazon URL. The link goes to Amazon exactly as pasted.

Where events go:
1. **Server log.** Always on. In Vercel, go to Logs and search `pp_event`.
2. **Google Analytics 4.** Set `NEXT_PUBLIC_GA_ID=G-XXXXXXX` in the hosting settings.
3. **Google Tag Manager / Plausible.** Picked up automatically if installed.

To keep events long-term (e.g. "Goldie + enrichment + TikTok gets the most clicks"), forward them to a database in `src/app/api/track/route.ts`.

---

## Images
Goldie and the snuffle mat use the owner-approved Higgsfield renders, loaded from Higgsfield's CDN (allowed in `next.config.ts`). For long-term safety, download them into `public/images/...` and change the `src` paths in `pets.ts` and `products.ts`. If an image can't load, the site shows a soft branded placeholder rather than a broken image.

## Deploying (recommended: Vercel, free tier)
1. Go to vercel.com, choose **Add New Project**, import this GitHub repo, and set **Root Directory** to `website`.
2. Add the environment variable `NEXT_PUBLIC_SITE_URL=https://petpicks4u.com` (and optionally `NEXT_PUBLIC_GA_ID`).
3. Deploy, then connect the domain under **Settings → Domains**.

## Developer notes
- `npm run dev` / `npm run build` / `npm run lint`
- Pages read content only through `src/lib/data.ts`. To move to a CMS, reimplement those functions and return the same types (`src/lib/types.ts`).
- Categories only appear once they contain a published product.
- SEO: per-page metadata, canonical URLs, generated OpenGraph share cards, Product/Review/Breadcrumb JSON-LD, sitemap.xml and robots.txt.
- Compliance: Amazon Associates statement in the footer, on every product page and at `/affiliate-disclosure`. No prices are displayed. The AI-character disclosure is on the pet pages, the product pages and the About page.
