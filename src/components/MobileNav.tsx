import { Heart, Home, LayoutGrid } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function MobileNav() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const items = [
    {
      to: "/",
      label: "Início",
      icon: Home,
      active: isHome,
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
  ];

  return (
    <nav className="mobile-nav" aria-label="Navegação rápida">
      {items.map(({ to, label, icon: Icon, active }) => (
        <Link
          key={label}
          className={`mobile-nav-item${active ? " active" : ""}`}
          to={to}
          aria-current={active ? "page" : undefined}
        >
          <Icon size={20} strokeWidth={active ? 2.2 : 1.8} />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}
