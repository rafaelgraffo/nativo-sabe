import { useMemo, useState } from "react";
import {
  ArrowRight,
  Camera,
  Compass,
  MapPin,
  Menu,
  MessageCircle,
  Search,
} from "lucide-react";
import { DonationSection } from "./components/DonationSection";
import {
  categories,
  categoryName,
  places,
  type CategoryId,
} from "./data/places";
import "./App.css";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

type SelectedCategory = CategoryId | "todos";

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<SelectedCategory>("todos");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredPlaces = useMemo(() => {
    const term = search.trim().toLowerCase();

    return places.filter((place) => {
      const matchesCategory =
        selectedCategory === "todos" ||
        place.category === selectedCategory;

      const matchesSearch =
        !term ||
        [place.name, place.kind, place.description, place.location]
          .join(" ")
          .toLowerCase()
          .includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  const selectCategory = (id: CategoryId) => {
    setSelectedCategory((current) => (current === id ? "todos" : id));
    document
      .getElementById("explorar")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <header className="header">
        <a className="brand" href="#">
          <img
            className="header-logo"
            src={asset("imagens/logo-principal.jpg")}
            alt="Nativo Sabe - O nativo conhece o caminho"
          />
        </a>

        <nav
          id="menu-principal"
          className={`desktop-nav${menuOpen ? " open" : ""}`}
        >
          <a href="#categorias" onClick={closeMenu}>
            Categorias
          </a>
          <a href="#explorar" onClick={closeMenu}>
            Explorar
          </a>
          <a href="#apoiar" onClick={closeMenu}>
            Apoiar
          </a>
          <a href="#sobre" onClick={closeMenu}>
            Sobre o projeto
          </a>
        </nav>

        <a className="header-link" href="#explorar">
          Encontrar lugares <ArrowRight size={16} />
        </a>

        <button
          className="mobile-menu"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu size={24} />
        </button>
      </header>

      <main>
        <div className="banner-container">
          <img
            className="hero-horizontal-logo"
            src={asset("imagens/logo-horizontal.jpg")}
            alt="Nativo Sabe — Guia local de Cajueiro da Praia"
          />
        </div>

        <section className="hero">
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

            <form
              className="search-box"
              onSubmit={(event) => {
                event.preventDefault();
                document
                  .getElementById("explorar")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Search size={21} />

              <input
                type="search"
                placeholder="O que você está procurando?"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />

              <button type="submit">Buscar</button>
            </form>

            <div className="hero-note">
              <span className="note-dot" />
              Gratuito para visitantes e prestadores de serviço.
            </div>
          </div>

          <div className="hero-decoration">
            <img
              className="hero-photo"
              src={asset("imagens/praia-barra-grande.jpg")}
              alt="Vista da Praia de Barra Grande, em Cajueiro da Praia"
            />
          </div>
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
            {categories.map((category) => {
              const Icon = category.icon;
              const count = places.filter(
                (place) => place.category === category.id,
              ).length;

              return (
                <button
                  className={`category-card ${
                    selectedCategory === category.id ? "selected" : ""
                  }`}
                  key={category.id}
                  type="button"
                  onClick={() => selectCategory(category.id)}
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
                </button>
              );
            })}
          </div>
        </section>

        <section className="explore section" id="explorar">
          <div className="section-heading">
            <div>
              <span className="eyebrow">RESULTADOS DO GUIA</span>
              <h2>
                {selectedCategory === "todos"
                  ? "Explore os lugares"
                  : categoryName(selectedCategory)}
              </h2>
            </div>

            <button
              className="clear-filter"
              type="button"
              onClick={() => {
                setSelectedCategory("todos");
                setSearch("");
              }}
            >
              Limpar filtros
            </button>
          </div>

          <div className="filter-row">
            <button
              className={
                selectedCategory === "todos" ? "filter active" : "filter"
              }
              type="button"
              onClick={() => setSelectedCategory("todos")}
            >
              Todos
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                className={
                  selectedCategory === category.id ? "filter active" : "filter"
                }
                type="button"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="places-grid">
            {filteredPlaces.map((place) => (
              <article className="place-card" key={place.id}>
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
                      <span className="verified">Informação do guia</span>
                    )}

                    {place.contact ? (
                      <a
                        className="contact-button"
                        href={`https://wa.me/${place.contact}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MessageCircle size={14} /> Contato
                      </a>
                    ) : (
                      <span className="contact-soon">Contato em breve</span>
                    )}
                  </div>
                </div>
              </article>
            ))}

            {filteredPlaces.length === 0 && (
              <div className="empty-state">
                <Search size={30} />
                <h3>Nenhum local encontrado</h3>

                <p>
                  Ainda estamos organizando as informações desta categoria.
                  Tente outra busca.
                </p>
              </div>
            )}
          </div>
        </section>

        <DonationSection />

        <section className="about" id="sobre">
          <div>
            <span className="eyebrow">A IDEIA DO NATIVO SABE</span>

            <h2>
              Ninguém conhece um lugar melhor do que quem vive nele.
            </h2>

            <p>
              São os moradores locais que guardam os melhores segredos sobre
              onde comer, se hospedar e o que explorar. Criamos a ponte entre a
              experiência de quem é da casa e a vontade de descobrir de quem
              visita.
            </p>
          </div>

          <div className="about-mark">
            <Compass size={58} strokeWidth={1.2} />
            <strong>Quem é daqui, sabe.</strong>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#">
          <span className="brand-icon">
            <MapPin size={21} />
          </span>

          <span>
            <strong>nativo sabe</strong>
            <small>Cajueiro da Praia – PI</small>
          </span>
        </a>

        <p>
          Guia local gratuito, feito para valorizar a região.
        </p>

        <a className="footer-support" href="#apoiar">
          <Camera size={17} /> Apoiar o projeto
        </a>
      </footer>
    </div>
  );
}

export default App;
