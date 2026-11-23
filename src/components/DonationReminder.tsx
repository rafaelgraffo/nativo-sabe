import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, X } from "lucide-react";

const STORAGE_KEY = "nativo-sabe-donation-reminder";
const DELAY_MS = 60_000;
const PAGE_LIMIT = 4;

function storageAvailable() {
  try {
    return typeof window !== "undefined" && !!window.sessionStorage;
  } catch {
    return false;
  }
}

export function DonationReminder() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const visitedPages = useRef(new Set<string>());
  const triggered = useRef(false);

  const show = useCallback(() => {
    if (triggered.current) return;

    if (storageAvailable()) {
      try {
        if (window.sessionStorage.getItem(STORAGE_KEY)) return;
        window.sessionStorage.setItem(STORAGE_KEY, "shown");
      } catch {
        // Segue sem persistir se o armazenamento estiver bloqueado.
      }
    }

    triggered.current = true;
    setVisible(true);
  }, []);

  const dismiss = useCallback(() => {
    if (storageAvailable()) {
      try {
        window.sessionStorage.setItem(STORAGE_KEY, "dismissed");
      } catch {
        // Nada a fazer se o armazenamento estiver bloqueado.
      }
    }

    triggered.current = true;
    setVisible(false);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(show, DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [show]);

  useEffect(() => {
    visitedPages.current.add(pathname);

    if (visitedPages.current.size >= PAGE_LIMIT) {
      show();
    }
  }, [pathname, show]);

  if (!visible) return null;

  return (
    <aside
      className="donation-reminder"
      role="dialog"
      aria-modal="false"
      aria-labelledby="donation-reminder-message"
    >
      <button
        className="reminder-close"
        type="button"
        onClick={dismiss}
        aria-label="Fechar aviso de doação"
      >
        <X size={18} />
      </button>

      <span className="reminder-icon" aria-hidden="true">
        <Heart size={22} />
      </span>

      <p className="reminder-message" id="donation-reminder-message">
        Se nosso projeto ajudou você, que tal nos ajudar com uma doação? A
        equipe Nativo agradece!
      </p>

      <div className="reminder-actions">
        <Link
          className="reminder-primary"
          to="/apoiar"
          onClick={dismiss}
        >
          <Heart size={16} /> Fazer uma doação
        </Link>

        <button className="reminder-secondary" type="button" onClick={dismiss}>
          Agora não
        </button>
      </div>
    </aside>
  );
}
