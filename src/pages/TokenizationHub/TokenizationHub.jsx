import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Dashboard from "./sections/Dashboard";
import React, { useState } from 'react';
import CreateAssetModal from "./tokenizationDemo.jsx";
import { createTheme, ThemeProvider as BWThemeProvider } from '@mui/material/styles';

export default function TokenizationHub() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  const bwTheme = React.useMemo(() => createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#ffffff' },
      background: { default: '#000000', paper: '#000000' },
      text: { primary: '#ffffff', secondary: '#aaaaaa' },
    },
  }), []);

  return (
      <div className="min-h-screen bg-white">
        <Hero />
        <Features />
        <Dashboard />

        {/* Create Asset Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Create Your Own Asset</h2>
            <p className="text-xl text-gray-600 mb-8">Tokenize real-world or digital assets in a few easy steps.</p>
            <button
              onClick={openCreateModal}
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200"
            >
              Launch Creator
            </button>
          </div>
        </section>

        {/* Modal Drawer with black & white theme */}
        <BWThemeProvider theme={bwTheme}>
          <CreateAssetModal open={isCreateModalOpen} onClose={closeCreateModal} />
        </BWThemeProvider>
      </div>
  );
}