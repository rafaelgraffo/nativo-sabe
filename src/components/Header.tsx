import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu } from "lucide-react";
import { asset } from "../utils/asset";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <Link className="brand" to="/" onClick={closeMenu}>
        <img
          className="header-logo"
          src={asset("imagens/logo-principal.jpg")}
          alt="Nativo Sabe - O nativo conhece o caminho"
        />
      </Link>

      <nav
        id="menu-principal"
        className={`desktop-nav${menuOpen ? " open" : ""}`}
      >
        <Link to="/categorias" onClick={closeMenu}>
          Categorias
        </Link>
        <Link to="/apoiar" onClick={closeMenu}>
          Doações
        </Link>
        <Link to="/sobre" onClick={closeMenu}>
          Sobre o projeto
        </Link>
      </nav>

      <Link className="header-link" to="/categorias">
        Ver guia <ArrowRight size={16} />
      </Link>

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
  );
}
