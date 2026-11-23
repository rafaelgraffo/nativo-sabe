import { createContext, useContext } from "react";
import {
  Camera,
  Coffee,
  Compass,
  CupSoda,
  Fish,
  MapPin,
  Store,
  Wine,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { isSupabaseConfigured, supabase } from "../lib/supabase";
import {
  categories as fallbackCategories,
  places as fallbackPlaces,
  type Category,
  type CategoryId,
  type Place,
} from "./places";

type CategoryRow = {
  id: string;
  name: string;
  short_description: string;
  icon: string | null;
  sort_order: number | null;
};

type PlaceRow = {
  id: string;
  name: string;
  category_id: string;
  kind: string;
  description: string;
  location: string;
  contact: string | null;
  is_example: boolean;
  sort_order: number | null;
};

export type CatalogData = {
  categories: Category[];
  places: Place[];
};

export type Catalog = CatalogData & {
  categoryName: (id: string) => string;
  getCategory: (id: string) => Category | undefined;
  getPlace: (id: string) => Place | undefined;
};

const categoryIcons: Record<string, LucideIcon> = {
  Camera,
  Coffee,
  Compass,
  CupSoda,
  Fish,
  Store,
  Wine,
  Wrench,
};

const bySortOrder = (
  a: { sort_order: number | null },
  b: { sort_order: number | null },
) => (a.sort_order ?? 0) - (b.sort_order ?? 0);

function mapCategory(row: CategoryRow): Category {
  return {
    id: row.id as CategoryId,
    name: row.name,
    shortDescription: row.short_description,
    icon: categoryIcons[row.icon ?? ""] ?? MapPin,
  };
}

function mapPlace(row: PlaceRow): Place {
  return {
    id: row.id,
    name: row.name,
    category: row.category_id as CategoryId,
    kind: row.kind,
    description: row.description,
    location: row.location,
    contact: row.contact ?? undefined,
    isExample: row.is_example,
  };
}

export function buildCatalog(data: CatalogData): Catalog {
  return {
    categories: data.categories,
    places: data.places,
    categoryName: (id) =>
      data.categories.find((category) => category.id === id)?.name ?? "Todos",
    getCategory: (id) =>
      data.categories.find((category) => category.id === id),
    getPlace: (id) => data.places.find((place) => place.id === id),
  };
}

export const initialCatalogData: CatalogData = {
  categories: fallbackCategories,
  places: fallbackPlaces,
};

export const CatalogContext = createContext<Catalog>(
  buildCatalog(initialCatalogData),
);

export function useCatalog() {
  return useContext(CatalogContext);
}

export async function loadCatalog(): Promise<CatalogData> {
  if (!isSupabaseConfigured || !supabase) return initialCatalogData;

  const [categoryResult, placeResult] = await Promise.all([
    supabase.from("categories").select("*").order("sort_order"),
    supabase.from("places").select("*").order("sort_order"),
  ]);

  if (categoryResult.error) throw categoryResult.error;
  if (placeResult.error) throw placeResult.error;

  return {
    categories: (categoryResult.data ?? [])
      .sort(bySortOrder)
      .map((row) => mapCategory(row as CategoryRow)),
    places: (placeResult.data ?? [])
      .sort(bySortOrder)
      .map((row) => mapPlace(row as PlaceRow)),
  };
}
