import { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Compass,
  Utensils,
  Store,
  Waves,
  Menu,
  ArrowRight,
  Camera,
  MessageCircle,
} from "lucide-react";
import "./App.css";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const categories = [
  { name: "Praias e atrações", icon: Waves },
  { name: "Onde comer", icon: Utensils },
  { name: "Guias e passeios", icon: Compass },
  { name: "Comércio local", icon: Store },
];

const places = [
  {
    name: "Praia de Barra Grande",
    category: "Praias e atrações",
    description:
      "Um dos destinos turísticos conhecidos de Cajueiro da Praia.",
  },
  {
    name: "Cajueiro-Rei",
    category: "Praias e atrações",
    description:
      "Uma das referências naturais e turísticas do município.",
  },
  {
    name: "Praia da Barrinha",
    category: "Praias e atrações",
    description:
      "Uma das praias que fazem parte do litoral do município.",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredPlaces = useMemo(() => {
    return places.filter((place) => {
      const matchesSearch = place.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "Todos" ||
        place.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="app">
      {/* CABEÇALHO: Logo principal (quadrada) no canto superior esquerdo */}
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
          <a href="#explorar" onClick={() => setMenuOpen(false)}>
            Explorar
          </a>
          <a href="#categorias" onClick={() => setMenuOpen(false)}>
            Categorias
          </a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>
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
        {/* BANNER / LOGO HORIZONTAL: Logo abaixo da barra de navegação */}
        <div className="banner-container" style={{ width: "100%", padding: "1rem 2rem", textAlign: "center" }}>
          <img
            className="hero-horizontal-logo"
            src={asset("imagens/logo-horizontal.jpg")}
            alt="Nativo Sabe Banner"
            style={{ maxWidth: "100%", height: "auto", display: "block", margin: "0 auto" }}
          />
        </div>

        {/* APRESENTAÇÃO PRINCIPAL */}
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
              Descubra lugares, sabores, passeios e experiências locais.
              Encontre o que procura com a ajuda de quem conhece a região.
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
              Um guia local, simples e feito para facilitar sua descoberta.
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

        {/* CATEGORIAS */}
        <section className="categories section" id="categorias">
          <div className="section-heading">
            <div>
              <span className="eyebrow">GUIA LOCAL</span>
              <h2>O que você quer descobrir?</h2>
            </div>

            <p>
              Encontre opções para aproveitar melhor sua visita.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <button
                  className={`category-card ${
                    selectedCategory === category.name ? "selected" : ""
                  }`}
                  key={category.name}
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === category.name
                        ? "Todos"
                        : category.name
                    )
                  }
                >
                  <span className="category-icon">
                    <Icon size={25} />
                  </span>

                  <strong>{category.name}</strong>

                  <ArrowRight
                    size={18}
                    className="category-arrow"
                  />
                </button>
              );
            })}
          </div>
        </section>

        {/* EXPLORAR LUGARES */}
        <section className="explore section" id="explorar">
          <div className="section-heading">
            <div>
              <span className="eyebrow">PRIMEIROS DESTINOS</span>
              <h2>Conheça alguns lugares</h2>
            </div>

            <button
              className="clear-filter"
              onClick={() => {
                setSelectedCategory("Todos");
                setSearch("");
              }}
            >
              Limpar filtros
            </button>
          </div>

          <div className="filter-row">
            <button
              className={
                selectedCategory === "Todos"
                  ? "filter active"
                  : "filter"
              }
              onClick={() => setSelectedCategory("Todos")}
            >
              Todos
            </button>

            {categories.map((category) => (
              <button
                key={category.name}
                className={
                  selectedCategory === category.name
                    ? "filter active"
                    : "filter"
                }
                onClick={() =>
                  setSelectedCategory(category.name)
                }
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="places-grid">
            {filteredPlaces.map((place) => (
              <article className="place-card" key={place.name}>
                <div className="place-image">
                  <span>Local em validação</span>
                </div>

                <div className="place-info">
                  <span className="place-category">
                    {place.category}
                  </span>

                  <h3>{place.name}</h3>

                  <p>{place.description}</p>

                  <span className="pending">
                    <span />
                    Informações sendo verificadas
                  </span>
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

        {/* SOBRE O PROJETO */}
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

      {/* RODAPÉ */}
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
          Um guia local em construção, feito para valorizar a região.
        </p>

        <span className="footer-icons">
          <Camera size={19} />
          <MessageCircle size={19} />
        </span>
      </footer>
    </div>
  );
}

export default App;