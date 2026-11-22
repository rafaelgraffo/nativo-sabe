import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const section = new URLSearchParams(search).get("section");

    if (section) {
      requestAnimationFrame(() => {
        const element = document.getElementById(section);

        if (!element) return;

        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0, top);
      });
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}
