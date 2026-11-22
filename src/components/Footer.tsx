import { Link } from "react-router-dom";
import { MapPin, PiggyBank } from "lucide-react";

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

      <Link className="footer-support" to="/apoiar">
        <PiggyBank size={18} /> Fazer uma doação
      </Link>
    </footer>
  );
}
