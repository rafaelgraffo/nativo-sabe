import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getCategoryEmoji } from "../data/categoryEmoji";
import type { Category } from "../data/places";

type CategoryCardProps = {
  category: Category;
  count: number;
};

export function CategoryCard({ category, count }: CategoryCardProps) {
  return (
    <Link
      className={`category-card category-${category.id}`}
      to={`/categoria/${category.id}`}
    >
      <span className="category-body">
        <span className="category-emoji" aria-hidden="true">
          {getCategoryEmoji(category.id)}
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
      </span>
    </Link>
  );
}
