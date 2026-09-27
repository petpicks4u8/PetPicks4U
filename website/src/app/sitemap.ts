import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getActiveCategories, getPets, getProducts } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pets, products, categories] = await Promise.all([getPets(), getProducts(), getActiveCategories()]);
  const url = (path: string) => `${site.url}${path}`;
  return [
    { url: url("/"), changeFrequency: "daily", priority: 1 },
    { url: url("/pets"), changeFrequency: "weekly", priority: 0.8 },
    { url: url("/products"), changeFrequency: "daily", priority: 0.8 },
    ...pets.map((p) => ({ url: url(`/pets/${p.slug}`), changeFrequency: "weekly" as const, priority: 0.9 })),
    ...products.map((p) => ({ url: url(`/products/${p.slug}`), lastModified: p.dateAdded, changeFrequency: "weekly" as const, priority: 0.9 })),
    ...categories.map((c) => ({ url: url(`/categories/${c.slug}`), changeFrequency: "weekly" as const, priority: 0.6 })),
    ...["/about", "/affiliate-disclosure", "/privacy", "/contact"].map((p) => ({ url: url(p), priority: 0.3 })),
  ];
}
