import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Compass, Heart, Info, LayoutGrid, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { asset } from "../utils/asset";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, search } = useLocation();
  const closeMenu = () => setMenuOpen(false);

  const isExplore = pathname === "/" && search.includes("section=explorar");

  const navItems = [
    {
      to: "/?section=explorar",
      label: "Explorar",
      icon: Compass,
      active: isExplore,
    },
    {
      to: "/categorias",
      label: "Categorias",
      icon: LayoutGrid,
      active: pathname === "/categorias",
    },
    {
      to: "/apoiar",
      label: "Doações",
      icon: Heart,
      active: pathname === "/apoiar",
    },
    {
      to: "/sobre",
      label: "Sobre",
      icon: Info,
      active: pathname === "/sobre",
    },
  ];

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
        aria-label="Menu principal"
      >
        {navItems.map(({ to, label, icon: Icon, active }) => (
          <Link
            key={label}
            className={`nav-link${active ? " active" : ""}`}
            to={to}
            onClick={closeMenu}
            aria-current={active ? "page" : undefined}
          >
            <Icon size={17} strokeWidth={2} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <ThemeToggle />

        <button
          className="mobile-menu"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu size={20} />
          <span>{menuOpen ? "Fechar" : "Menu"}</span>
        </button>
      </div>
    </header>
  );
}
