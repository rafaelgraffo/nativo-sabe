import { useLayoutEffect, useMemo, useState, type ReactNode } from "react";
import {
  ThemeContext,
  type Theme,
  type ThemeContextValue,
} from "./themeContext";

const STORAGE_KEY = "nativo-sabe-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "dark" || saved === "light" ? saved : "light";
  } catch {
    return "light";
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Navegação privada pode bloquear localStorage; o tema ainda funciona.
    }
  }, [theme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((current) => (current === "dark" ? "light" : "dark")),
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
