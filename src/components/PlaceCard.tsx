import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { useCatalog } from "../data/catalog";
import type { Place } from "../data/places";

export function PlaceCard({ place }: { place: Place }) {
  const { categoryName } = useCatalog();

  return (
    <Link className="place-card" to={`/lugar/${place.id}`}>
      <div className="place-image">
        <span>{place.kind}</span>
      </div>

      <div className="place-info">
        <span className="place-category">
          {categoryName(place.category)}
        </span>

        <h3>{place.name}</h3>

        <p>{place.description}</p>

        <span className="place-location">
          <MapPin size={13} /> {place.location}
        </span>

        <div className="place-footer">
          {place.isExample ? (
            <span className="pending">
              <span />
              Exemplo em validação
            </span>
          ) : (
            <span className="verified">Essencial</span>
          )}

          <ArrowRight size={16} className="card-arrow" />
        </div>
      </div>
    </Link>
  );
}
