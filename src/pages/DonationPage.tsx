import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { DonationSection } from "../components/DonationSection";

export function DonationPage() {
  return (
    <main className="inner-page donation-page">
      <Link className="back-link" to="/">
        <ArrowLeft size={15} /> Voltar para o início
      </Link>

      <DonationSection />
    </main>
  );
}