import { Moon, Sun } from "lucide-react";
import { useTheme } from "../theme/themeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "Ativar modo dia" : "Ativar modo noite";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
      <span className="theme-toggle-label">Tema</span>
    </button>
  );
}
