import React from 'react';
import Header from './components/Header';
import Hero from './pages/HomePage/sections/Hero';
import Dashboard from './pages/HomePage/sections/Dashboard';
import Footer from './components/Footer';
import TokenizationHub from './pages/TokenizationHub/TokenizationHub';
import Marketplace from './pages/Marketplace/Marketplace';
import HomePage from './pages/HomePage/HomePage';
import AgentPage from './pages/AgentPage/AgentPage';
import ScrollToTop from "./components/ScrollToTop";
import { Box } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import Roadmap from './pages/Roadmap/Roadmap';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();

  return (
<<<<<<< HEAD
    <Box className="min-h-screen relative bg-white text-text-primary overflow-x-hidden">
=======
    <Box className="min-h-screen relative bg-green-50 text-text-primary overflow-x-hidden">
>>>>>>> a7afdf58e958e0339079f6843983480c20c346c2
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