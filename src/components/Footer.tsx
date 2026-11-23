import { Link } from "react-router-dom";
import { MapPin, MessageCircle, PiggyBank } from "lucide-react";

const WHATSAPP_URL = `https://wa.me/5586988769284?text=${encodeURIComponent(
  "Olá! Conheci o Nativo Sabe e gostaria de entrar em contato.",
)}`;

export function Footer() {
  return (
    <footer className="footer">
      <Link className="brand footer-brand" to="/">
        <span className="brand-icon">
          <MapPin size={21} />
        </span>

        <span>
          <strong>Nativo Sabe</strong>
          <small>Cajueiro da Praia - PI</small>
        </span>
      </Link>

      <p>
        Todos os direitos reservados à Rafael e Túlio, nativos que uniram
        forças para criar o projeto.
      </p>

      <div className="footer-links">
        <Link className="footer-support" to="/apoiar">
          <PiggyBank size={18} /> Fazer uma doação
        </Link>

        <a
          className="footer-support"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={18} /> Fale Conosco
        </a>
      </div>
    </footer>
  );
}
