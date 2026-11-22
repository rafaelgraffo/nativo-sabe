import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { PlaceCard } from "../components/PlaceCard";
import {
  categoryName,
  getCategory,
  places,
  type CategoryId,
} from "../data/places";

export function CategoryPage() {
  const { categoryId = "" } = useParams();
  const category = getCategory(categoryId);
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("todos");

  const locations = useMemo(() => {
    const fromCategory = places.filter(
      (place) => place.category === categoryId,
    );
    return [...new Set(fromCategory.map((place) => place.location))].sort();
  }, [categoryId]);

  const results = useMemo(() => {
    const term = search.trim().toLowerCase();

    return places
      .filter((place) => place.category === categoryId)
      .filter(
        (place) =>
          selectedLocation === "todos" ||
          place.location === selectedLocation,
      )
      .filter(
        (place) =>
          !term ||
          [place.name, place.kind, place.description, place.location]
            .join(" ")
            .toLowerCase()
            .includes(term),
      )
      .sort(
        (a, b) =>
          Number(Boolean(a.isExample)) - Number(Boolean(b.isExample)),
      );
  }, [categoryId, search, selectedLocation]);

  if (!category) {
    return (
      <main className="inner-page">
        <div className="page-heading">
          <h1>Categoria não encontrada</h1>
          <Link className="back-link" to="/">
            <ArrowLeft size={15} /> Voltar para o início
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="inner-page catalog-page">
      <Link className="back-link" to="/">
        <ArrowLeft size={15} /> Voltar para o início
      </Link>

      <div className="page-heading">
        <span className="eyebrow">{category.shortDescription}</span>
        <h1>{categoryName(categoryId as CategoryId)}</h1>
        <p>
          {results.length} {results.length === 1 ? "opção encontrada" : "opções encontradas"}
        </p>
      </div>

      <div className="catalog-controls">
        <label className="catalog-search">
          <Search size={19} />
          <input
            type="search"
            placeholder="Buscar nesta categoria..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>

        <div className="filter-row location-row">
          <span className="filter-label">Por bairro:</span>

          <button
            className={
              selectedLocation === "todos" ? "filter active" : "filter"
            }
            type="button"
            onClick={() => setSelectedLocation("todos")}
          >
            Todos
          </button>

          {locations.map((location) => (
            <button
              key={location}
              className={
                selectedLocation === location ? "filter active" : "filter"
              }
              type="button"
              onClick={() => setSelectedLocation(location)}
            >
              {location}
            </button>
          ))}
        </div>
      </div>

      <div className="places-grid">
        {results.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}

        {results.length === 0 && (
          <div className="empty-state">
            <Search size={30} />
            <h3>Nenhum lugar encontrado</h3>
            <p>Tente outra busca ou outro bairro.</p>
          </div>
        )}
      </div>
    </main>
  );
}
