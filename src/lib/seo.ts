import { cities, objectives } from "./data";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const citySlugs = cities.map((city) => ({
  city,
  slug: slugify(city),
}));

export const objectiveSlugs = objectives.map((obj) => ({
  objective: obj,
  slug: slugify(obj),
}));

export function getCityBySlug(slug: string) {
  return citySlugs.find((c) => c.slug === slug);
}

export function getObjectiveBySlug(slug: string) {
  return objectiveSlugs.find((o) => o.slug === slug);
}

export { slugify };
