import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SecurityIcon from '@mui/icons-material/Security';
import { Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

const TechnologyStackSection = () => {
  const features = [
    {
      title: 'Multi-Chain Infrastructure',
      desc: 'Seamlessly operate across Ethereum, Polygon, Solana, and more.',
      icon: <DeviceHubIcon fontSize="medium" className="text-blue-500 transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-x-12 hover:rotate-12" />,
    },
    {
      title: 'Smart Contract Transparency',
      desc: 'Open, optimized, and audit-ready smart contracts.',
      icon: <VisibilityIcon fontSize="medium" className="text-blue-500 transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-x-12 hover:rotate-12" />,
    },
    {
      title: 'Flexible Wallet Options',
      desc: 'Choose MPC custody or full wallet control securely.',
      icon: <AccountBalanceWalletIcon fontSize="medium" className="text-blue-500 transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-x-12 hover:rotate-12" />,
    },
    {
      title: 'Enterprise-Grade Security',
      desc: 'Regular audits, GDPR compliance, and best-in-class standards.',
      icon: <SecurityIcon fontSize="medium" className="text-blue-500 transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-x-12 hover:rotate-12" />,
    },
  ];

  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 2000); // 2 seconds per feature
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full px-6 py-24 bg-green-50 overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="brand-section-title bg-clip-text">
          Unified Access to All Major Blockchains
        </h2>
        <p className="text-gray-600 mb-10">
          Fast, secure, and adaptable infrastructure.
        </p>

        {/* Feature with slide animation */}
        <div className="relative h-44 w-full flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full flex flex-col items-center text-center px-4"
            >
              <Box
                className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center text-2xl card-icon"
                sx={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(5px)",
                  boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
                }}
              >
                {features[currentFeature].icon}
              </Box>
              <h4 className="brand-card-title text-gray-800 mb-1">
                {features[currentFeature].title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {features[currentFeature].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Lottie Animation */}
        <div className="flex items-center justify-center w-full">
          <Player
            autoplay
            loop
            src="/assets/lottie/Crypto%20chains/Crypto%20chains.json"
            style={{ height: "350px", width: "350px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;
