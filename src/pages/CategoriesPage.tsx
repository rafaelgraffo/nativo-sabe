import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCatalog } from "../data/catalog";

export function CategoriesPage() {
  const { categories, places } = useCatalog();

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
        {categories.map((category) => {
          const Icon = category.icon;
          const count = places.filter(
            (place) => place.category === category.id,
          ).length;

          return (
            <Link
              className="category-card"
              key={category.id}
              to={`/categoria/${category.id}`}
            >
              <span className="category-icon">
                <Icon size={25} />
              </span>

              <span className="category-text">
                <strong>{category.name}</strong>
                <small>{category.shortDescription}</small>
              </span>

              <span className="category-footer">
                <span className="category-count">
                  {count} {count === 1 ? "opção" : "opções"}
                </span>
                <ArrowRight size={18} className="category-arrow" />
              </span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
