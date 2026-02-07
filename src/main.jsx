import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importamos las herramientas de ruta
import "./index.css";
import App from "./App.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import CafeView from "./views/CafeView.jsx";
import MaterialesView from "./views/MaterialesView.jsx";
import FerreteriaView from "./views/FerreteriaView.jsx";
import ConstruccionView from "./views/ConstruccionView.jsx"
import NosotrosView from "./views/NosotrosView.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/cafe" element={<CafeView />} />
        <Route path="/materiales" element={<MaterialesView />} />
        <Route path="/ferreteria" element={<FerreteriaView />} />
        <Route path="/construccion" element={<ConstruccionView />} />
        <Route path="/nosotros" element={<NosotrosView />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
