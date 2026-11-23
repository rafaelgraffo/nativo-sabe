import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CategoryCard } from "../components/CategoryCard";
import { isExploreCategory, useCatalog } from "../data/catalog";

export function CategoriesPage() {
  const { categories, places } = useCatalog();
  const catalogCategories = categories.filter(
    (category) => !isExploreCategory(category.id),
  );

  return (
    <main className="inner-page">
      <Link className="back-link" to="/">
        <ArrowLeft size={15} /> Voltar para o início
      </Link>

      <div className="page-heading">
        <span className="eyebrow">O GUIA</span>
        <h1>O que você procura?</h1>
        <p>Escolha um tipo de lugar ou serviço para ver as opções.</p>
      </div>

      <div className="category-grid">
        {catalogCategories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            count={places.filter((place) => place.category === category.id).length}
          />
        ))}
      </div>
    </main>
  );
}
