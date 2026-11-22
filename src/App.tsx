import { Link, Navigate, Route, Routes } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollToTop } from "./components/ScrollToTop";
import { AboutPage } from "./pages/AboutPage";
import { CategoriesPage } from "./pages/CategoriesPage";
import { CategoryPage } from "./pages/CategoryPage";
import { DonationPage } from "./pages/DonationPage";
import { LandingPage } from "./pages/LandingPage";
import { PlacePage } from "./pages/PlacePage";
import "./App.css";

function NotFound() {
  return (
    <main className="inner-page">
      <div className="page-heading">
        <h1>Página não encontrada</h1>
        <Link className="back-link" to="/">
          <ArrowLeft size={15} /> Voltar para o início
        </Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/categorias" element={<CategoriesPage />} />
        <Route path="/categoria/:categoryId" element={<CategoryPage />} />
        <Route path="/lugar/:placeId" element={<PlacePage />} />
        <Route path="/apoiar" element={<DonationPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>

      <Footer />
    </div>
  );
}
