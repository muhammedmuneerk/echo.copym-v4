import React from 'react';
import Header from './components/Header';
import Hero from './pages/HomePage/sections/Hero';
import MarketplacePreview from './pages/HomePage/sections/MarketplacePreview';
import Footer from './components/Footer';
import TokenizationHub from './pages/TokenizationHub/TokenizationHub';
import Marketplace from './pages/Marketplace/Marketplace';
import HomePage from './pages/HomePage/HomePage';
import AgentPage from './pages/AgentPage/AgentPage';
import ScrollToTop from "./components/ScrollToTop";
import { Box } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import Roadmap from './pages/Roadmap/Roadmap';


function App() {
  const location = useLocation();

  return (
    <Box className="min-h-screen relative bg-blue-100 text-text-primary overflow-x-hidden">
      <ScrollToTop />
      {location.pathname !== "/agent" && <Header />}
      <main className="relative z-20 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/tokenization" element={<TokenizationHub />} />
          <Route path="/agent" element={<AgentPage />} />
        </Routes>
      </main>
      {location.pathname !== "/agent" && <Footer />}
    </Box>
  );
}

export default App;