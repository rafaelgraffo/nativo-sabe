import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Search } from "lucide-react";
import { CategoryCard } from "../components/CategoryCard";
import { DonationSection } from "../components/DonationSection";
import { PlaceCard } from "../components/PlaceCard";
import { isExploreCategory, useCatalog } from "../data/catalog";
import { asset } from "../utils/asset";

export function LandingPage() {
  const { categories, places } = useCatalog();
  const catalogCategories = categories.filter(
    (category) => !isExploreCategory(category.id),
  );
  const exploreCategories = categories.filter((category) =>
    isExploreCategory(category.id),
  );
  const featuredPlaces = places.filter((place) => !place.isExample).slice(0, 3);

  return (
    <main>
      <div className="banner-container">
        <img
          className="hero-horizontal-logo"
          src={asset("imagens/logo-horizontal.jpg")}
          alt="Nativo Sabe — Guia local de Cajueiro da Praia"
        />
      </div>

      <section className="hero">
        <div className="hero-decoration" aria-hidden="true">
          <img
            className="hero-photo"
            src={asset("imagens/praia-barra-grande.jpg")}
            alt=""
          />
        </div>

        <div className="hero-content">
          <span className="eyebrow">
            <MapPin size={15} /> CAJUEIRO DA PRAIA · PIAUÍ
          </span>

          <h1>
            O melhor de Cajueiro da Praia,
            <span> quem sabe é quem é daqui.</span>
          </h1>

          <p>
            Onde comer, o que visitar, guias e prestadores de serviço da
            região. Tudo em um guia local, confiável e gratuito.
          </p>

          <div className="hero-actions">
            <Link className="hero-cta" to="/?section=explorar">
              <Search size={19} /> Explorar o guia <ArrowRight size={16} />
            </Link>
            <Link className="hero-secondary" to="/categorias">
              Ver categorias
            </Link>
          </div>

          <div className="hero-quick">
            <span>Atalhos:</span>
            <Link to="/categoria/comer">Onde comer</Link>
            <Link to="/categoria/acai-sorvetes">Açaí e sorvetes</Link>
            <Link to="/categoria/comercio">Comércio local</Link>
          </div>

          <div className="hero-note">
            <span className="note-dot" />
            Gratuito para visitantes e prestadores de serviço.
          </div>
        </div>

        <span className="hero-photo-tag">
          <MapPin size={13} /> Barra Grande · Piauí
        </span>
      </section>

      <section className="categories section" id="categorias">
        <div className="section-heading">
          <div>
            <span className="eyebrow">POR ONDE COMEÇAR</span>
            <h2>O que você procura?</h2>
          </div>

          <p>
            Escolha um tipo de lugar ou serviço para ver as opções do guia.
          </p>
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
      </section>

      <section className="explore section" id="explorar">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORAR</span>
            <h2>O que vale conhecer por aqui</h2>
          </div>

          <p>
            Escolha uma das áreas abaixo para descobrir os lugares e quem faz
            Cajueiro da Praia acontecer.
          </p>
        </div>

        <div className="category-grid">
          {exploreCategories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              count={places.filter((place) => place.category === category.id).length}
            />
          ))}
        </div>

        <Link className="explore-link" to="/categorias">
          Ver todas as categorias <ArrowRight size={16} />
        </Link>
      </section>

      {featuredPlaces.length > 0 && (
        <section className="featured section" id="destaques">
          <div className="section-heading">
            <div>
              <span className="eyebrow">DESTAQUES DO GUIA</span>
              <h2>Lugares que valem conhecer</h2>
            </div>
            <p>
              Um primeiro olhar sobre os destinos que contam a história da
              região.
            </p>
          </div>

          <div className="places-grid">
            {featuredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </section>
      )}

      <DonationSection />

      <section className="about" id="sobre">
        <div>
          <span className="eyebrow">A IDEIA DO NATIVO SABE</span>

          <h2>
            Ninguém conhece um lugar melhor do que quem vive nele.
          </h2>

          <p>
            São os moradores locais que guardam os melhores segredos sobre
            onde comer, onde ficar e o que explorar. Criamos a ponte entre a
            experiência de quem é da casa e a vontade de descobrir de quem
            visita.
          </p>

          <p>
            Foi a partir desse pensamento que o Nativo Sabe nasceu — feito
            por nativos, com o objetivo de divulgar e dinamizar o turismo
            local. O nosso projeto é mantido por donativos voluntários: se,
            de alguma forma, ele está a ser útil para ti, morador ou
            comerciante da região, ou para ti que nos estás a visitar,
            deixamos aqui o convite e o incentivo para doar e ajudar a manter
            a iniciativa viva.
          </p>

          <p>
            É motivo de muita alegria para nós, Rafael e Túlio, termos criado
            este projeto que há muito tempo se fazia necessário.
          </p>

          <p>
            A nossa embaixadora é a Dona Neda, da Barraca da Nêda — artesã
            renomada e figura queridíssima de Cajueiro, no Instagram{" "}
            <a
              className="about-link"
              href="https://www.instagram.com/barracadaneda/"
              target="_blank"
              rel="noreferrer"
            >
              @barracadaneda
            </a>
            .
          </p>

          <p>Muito obrigado pela tua visita. Volta sempre!</p>
        </div>

        <div className="about-mark">
          <img
            className="about-mark-image"
            src={asset("imagens/Nativo_manja.jpg")}
            alt="Nativo Sabe — quem é daqui, sabe"
          />
          <strong>Quem é daqui, sabe.</strong>
        </div>
      </section>
    </main>
  );
}
