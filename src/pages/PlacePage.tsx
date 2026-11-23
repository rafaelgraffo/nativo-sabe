import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { useCatalog } from "../data/catalog";

export function PlacePage() {
  const { placeId = "" } = useParams();
  const { categoryName, getPlace } = useCatalog();
  const place = getPlace(placeId);

  if (!place) {
    return (
      <main className="inner-page">
        <div className="page-heading">
          <h1>Lugar não encontrado</h1>
          <Link className="back-link" to="/">
            <ArrowLeft size={15} /> Voltar para o início
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="inner-page detail-page">
      <Link className="back-link" to="/">
        <ArrowLeft size={15} /> Voltar para o início
      </Link>

      <div className="detail-card">
        <div className="detail-image">
          <span>{place.kind}</span>
        </div>

        <div className="detail-content">
          <span className="eyebrow">{categoryName(place.category)}</span>
          <h1>{place.name}</h1>

          <span className="place-location">
            <MapPin size={14} /> {place.location}
          </span>

          <p>{place.description}</p>

          <div className="detail-meta">
            {place.isExample ? (
              <span className="pending">
                <span />
                Exemplo em validação
              </span>
            ) : (
              <span className="verified">Essencial</span>
            )}
          </div>

          {place.contact && (
            <a
              className="pix-button detail-contact"
              href={`https://wa.me/${place.contact}`}
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp <ArrowRight size={16} />
            </a>
          )}

          <p className="detail-note">
            As informações deste guia estão sendo organizadas com a ajuda de
            quem é da região.
          </p>
        </div>
      </div>
    </main>
  );
}
