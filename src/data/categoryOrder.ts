import type { Category } from "./places";

export const PRIMARY_CATEGORY_IDS: Category["id"][] = [
  "pontos-turisticos",
  "comer",
  "guias",
  "acai-sorvetes",
];

export const OTHER_CATEGORY_IDS: Category["id"][] = [
  "comercio",
  "servicos",
  "deposito-bebidas",
  "pescados-frutos-do-mar",
];

function categoriesInOrder(categories: Category[], ids: Category["id"][]) {
  return ids.flatMap((id) =>
    categories.filter((category) => category.id === id),
  );
}

export function primaryCategories(categories: Category[]) {
  return categoriesInOrder(categories, PRIMARY_CATEGORY_IDS);
}

export function otherCategories(categories: Category[]) {
  const selected = categoriesInOrder(categories, OTHER_CATEGORY_IDS);
  const selectedIds = new Set(selected.map((category) => category.id));

  const upcoming = categories.filter(
    (category) =>
      !PRIMARY_CATEGORY_IDS.includes(category.id) &&
      !selectedIds.has(category.id),
  );

  return [...selected, ...upcoming];
}
