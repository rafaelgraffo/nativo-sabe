import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  buildCatalog,
  CatalogContext,
  initialCatalogData,
  loadCatalog,
  type CatalogData,
} from "./catalog";

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<CatalogData>(initialCatalogData);

  useEffect(() => {
    let cancelled = false;

    loadCatalog()
      .then((next) => {
        if (!cancelled) setData(next);
      })
      .catch((error) => {
        console.warn(
          "[Nativo Sabe] Supabase indisponível; usando catálogo local.",
          error,
        );
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(() => buildCatalog(data), [data]);

  return (
    <CatalogContext.Provider value={value}>{children}</CatalogContext.Provider>
  );
}
