import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Features from "../pages/Features";
import Business from "../pages/Business";
import Guard from "../pages/Guard";
import Contact from "../pages/Contact";
import Documents from "../pages/Documents";
import LanguageSwitcher from "../components/LanguageSwitcher";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/business" element={<Business />} />
      <Route path="/guard" element={<Guard />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/language" element={<LanguageSwitcher />} />
    </Routes>
  );
}

export default AppRoutes;
