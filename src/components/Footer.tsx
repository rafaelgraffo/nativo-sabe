import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, PiggyBank } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import {
  WHATSAPP_CONTACT_LABEL,
  WHATSAPP_CONTACT_URL,
} from "../data/contact";

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
        <Link className="footer-action footer-action-donate" to="/apoiar">
          <span className="footer-action-icon">
            <PiggyBank size={20} />
          </span>

          <span className="footer-action-text">
            <strong>Fazer uma doação</strong>
            <small>Ajude a manter o guia gratuito</small>
          </span>

          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>

        <a
          className="footer-action footer-action-contact"
          href={WHATSAPP_CONTACT_URL}
          target="_blank"
          rel="noreferrer"
        >
          <span className="footer-action-icon">
            <WhatsAppIcon size={20} />
          </span>

          <span className="footer-action-text">
            <strong>{WHATSAPP_CONTACT_LABEL}</strong>
            <small>Converse com a equipe no WhatsApp</small>
          </span>

          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
