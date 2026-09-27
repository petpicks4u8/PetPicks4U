import type { Category } from "@/lib/types";

/**
 * All categories the site understands. A category only appears in the UI once
 * at least one published product uses it — so it's safe to list them all here.
 */
export const categories: Category[] = [
  { slug: "toys", name: "Toys", description: "Squeaky, chewy, rolly things our pets can't stop talking about." },
  { slug: "enrichment", name: "Enrichment", description: "Puzzles and sniff games that give a busy brain a job." },
  { slug: "feeding", name: "Feeding", description: "Bowls, mats and feeders that make mealtime more interesting." },
  { slug: "walking", name: "Walking", description: "Leashes, harnesses and everything for the best part of the day." },
  { slug: "grooming", name: "Grooming", description: "Brushes and bath-time gear for keeping the fluff fabulous." },
  { slug: "beds-comfort", name: "Beds & Comfort", description: "Beds, blankets and nap spots worth defending." },
  { slug: "travel", name: "Travel", description: "Car seats, carriers and road-trip essentials." },
  { slug: "training", name: "Training", description: "Tools that make learning new tricks a little easier." },
  { slug: "health-wellness", name: "Health & Wellness", description: "Everyday care products. Always check with your vet." },
  { slug: "tech", name: "Tech", description: "Cameras, trackers and gadgets for the modern pet household." },
];
