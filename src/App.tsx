import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import DentalBridgesCrownsPage from "./pages/DentalBridgesCrownsPage";
import ConservativeDentistryPage from "./pages/ConservativeDentistryPage";
import DenturesPage from "./pages/DenturesPage";
import PreventiveDentistryPage from "./pages/PreventiveDentistryPage";
import InvisalignPage from "./pages/InvisalignPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/services/dental-bridges-crowns" element={<PageTransition><DentalBridgesCrownsPage /></PageTransition>} />
          <Route path="/services/conservative-dentistry" element={<PageTransition><ConservativeDentistryPage /></PageTransition>} />
          <Route path="/services/dentures" element={<PageTransition><DenturesPage /></PageTransition>} />
          <Route path="/services/preventive-dentistry" element={<PageTransition><PreventiveDentistryPage /></PageTransition>} />
          <Route path="/services/invisalign" element={<PageTransition><InvisalignPage /></PageTransition>} />
          <Route path="/services/:slug" element={<PageTransition><ServicePage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
