/**
 * Data access layer. Pages ONLY read content through these async functions.
 *
 * Swapping to a CMS/database later means reimplementing this file (e.g. fetch
 * from Sanity, Supabase, Airtable…) and returning the same types. No page or
 * component needs to change.
 */
import { cache } from "react";
import { categories } from "@/content/categories";
import { pets } from "@/content/pets";
import { products } from "@/content/products";
import type { Category, CategorySlug, Pet, Product, SearchRecord } from "./types";

const byNewest = (a: Product, b: Product) => b.dateAdded.localeCompare(a.dateAdded);

export const getPets = cache(async (): Promise<Pet[]> =>
  pets.filter((p) => p.published).sort((a, b) => a.order - b.order),
);

export const getPet = cache(async (slug: string): Promise<Pet | undefined> =>
  (await getPets()).find((p) => p.slug === slug),
);

export const getPetById = cache(async (id: string): Promise<Pet | undefined> =>
  (await getPets()).find((p) => p.id === id),
);

export const getProducts = cache(async (): Promise<Product[]> => {
  const livePetIds = new Set((await getPets()).map((p) => p.id));
  return products.filter((p) => p.published && livePetIds.has(p.petId)).sort(byNewest);
});

export const getProduct = cache(async (slug: string): Promise<Product | undefined> =>
  (await getProducts()).find((p) => p.slug === slug),
);

/** A pet's picks, with its `featuredProducts` pinned first. */
export async function getProductsForPet(pet: Pet): Promise<Product[]> {
  const list = (await getProducts()).filter((p) => p.petId === pet.id);
  const rank = (p: Product) => {
    const i = pet.featuredProducts.indexOf(p.id);
    return i === -1 ? Number.MAX_SAFE_INTEGER : i;
  };
  return list.sort((a, b) => rank(a) - rank(b));
}

export async function getTrendingProducts(): Promise<Product[]> {
  return (await getProducts()).filter((p) => p.trending);
}

export async function getLatestProducts(limit = 6): Promise<Product[]> {
  return (await getProducts()).slice(0, limit);
}

export async function getProductsInCategory(slug: CategorySlug): Promise<Product[]> {
  return (await getProducts()).filter((p) => p.category === slug);
}

export async function getRelatedProducts(product: Product, limit = 3): Promise<Product[]> {
  const all = (await getProducts()).filter((p) => p.id !== product.id);
  const score = (p: Product) => (p.petId === product.petId ? 2 : 0) + (p.category === product.category ? 1 : 0);
  return all.sort((a, b) => score(b) - score(a)).slice(0, limit);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

/** Only categories that actually have published products, in canonical order. */
export async function getActiveCategories(): Promise<(Category & { count: number })[]> {
  const list = await getProducts();
  return categories
    .map((c) => ({ ...c, count: list.filter((p) => p.category === c.slug).length }))
    .filter((c) => c.count > 0);
}

export async function getSearchIndex(): Promise<SearchRecord[]> {
  const [petList, productList] = await Promise.all([getPets(), getProducts()]);
  const petName = new Map(petList.map((p) => [p.id, p.name]));

  const petRecords: SearchRecord[] = petList.map((p) => ({
    type: "pet",
    slug: p.slug,
    href: `/pets/${p.slug}`,
    title: p.name,
    subtitle: `${p.breed} · ${p.shortBio}`,
    image: p.profileImage,
    haystack: [p.name, p.breed, p.species, ...p.personality].join(" "),
  }));

  const productRecords: SearchRecord[] = productList.map((p) => {
    const category = getCategory(p.category)?.name ?? "";
    const pet = petName.get(p.petId) ?? "";
    return {
      type: "product",
      slug: p.slug,
      href: `/products/${p.slug}`,
      title: p.name,
      subtitle: `${pet}’s pick · ${category}`,
      image: p.image,
      haystack: [p.name, p.shortName, p.brand, category, p.category, pet, ...p.tags, ...p.keywords, ...p.bestFor]
        .filter(Boolean)
        .join(" "),
    };
  });

  return [...productRecords, ...petRecords];
}

/** Quick-tap chips under the search box. */
export async function getSearchSuggestions(): Promise<string[]> {
  const [petList, productList, cats] = await Promise.all([getPets(), getProducts(), getActiveCategories()]);
  const words = [
    ...productList.slice(0, 3).map((p) => p.shortName.split(" ")[0]),
    ...petList.map((p) => p.name),
    ...cats.map((c) => c.name),
  ];
  return [...new Set(words)].slice(0, 6);
}
