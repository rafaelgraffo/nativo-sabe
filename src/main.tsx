import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { CatalogProvider } from "./data/CatalogProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CatalogProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </CatalogProvider>
  </StrictMode>,
);
