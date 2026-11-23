import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { CategoryCard } from "../components/CategoryCard";
import { useCatalog } from "../data/catalog";
import { otherCategories, primaryCategories } from "../data/categoryOrder";

export function CategoriesPage() {
  const { categories, places } = useCatalog();

  const featured = primaryCategories(categories);
  const others = otherCategories(categories);
  const countFor = (categoryId: string) =>
    places.filter((place) => place.category === categoryId).length;

  return (
    <main className="inner-page categories-page">
      <Link className="back-link" to="/">
        <ArrowLeft size={15} /> Voltar para o início
      </Link>

      <div className="page-heading">
        <span className="eyebrow">O GUIA</span>
        <h1>O que você procura?</h1>
        <p>
          Escolha uma das categorias abaixo para descobrir lugares, guias e
          serviços de Cajueiro da Praia.
        </p>
      </div>

      <section aria-label="Categorias em destaque">
        <div className="category-grid featured-grid">
          {featured.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              count={countFor(category.id)}
            />
          ))}
        </div>
      </section>

      {others.length > 0 && (
        <details className="more-options">
          <summary className="more-options-trigger">
            <span>Outros</span>
            <ChevronDown
              size={19}
              className="more-options-chevron"
              aria-hidden="true"
            />
          </summary>

          <div className="more-options-panel">
            <div className="category-grid">
              {others.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  count={countFor(category.id)}
                />
              ))}
            </div>
          </div>
        </details>
      )}
    </main>
  );
}
