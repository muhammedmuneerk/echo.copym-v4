import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import { motion, AnimatePresence } from 'framer-motion';

const SecurityFeaturesSection = () => {
  const features = [
    {
      title: 'MPC Wallets',
      desc: 'No single point of failure—keys split securely.',
      icon: <VpnKeyIcon fontSize="medium" className="text-blue-500" />,
    
    },
    {
      title: 'On‑Chain Transparency',
      desc: 'Immutable audit trails for every transaction.',
      icon: <VisibilityIcon fontSize="medium" className="text-blue-500" />,
     
    },
    {
      title: 'Encrypted Data',
      desc: 'AES‑level protection in transit and at rest.',
      icon: <LockIcon fontSize="medium" className="text-blue-500" />,
     
    },
    {
      title: 'Permissioned Access',
      desc: 'Only verified users can transact.',
      icon: <VerifiedUserIcon fontSize="medium" className="text-blue-500" />,
     
    },
    {
      title: 'Compliance‑Ready',
      desc: 'Built‑in KYC/AML integration.',
      icon: <FactCheckIcon fontSize="medium" className="text-blue-500" />,
     
    },
    {
      title: 'High Availability',
      desc: 'Backups and failover for uptime.',
      icon: <CloudDoneIcon fontSize="medium" className="text-blue-500" />,
     
    },
  ];

  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full px-6 py-12 bg-green-50 overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="brand-section-title bg-clip-text">
          Enterprise-Grade Web3 Security
        </h2>
        <p className="text-gray-600 mb-10">
          Secure your assets with institutional-grade protections you can trust.
        </p>

          {/* Animated Feature Text */}
        <div className="relative h-32 mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeature}
             initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }} 
              transition={{ duration: 0.6 }}
              className="absolute w-full"
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="mb-2">{features[currentFeature].icon}</div>
                <h4 className="brand-card-title text-gray-600 mb-1">
                  {features[currentFeature].title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {features[currentFeature].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
         {/* Lottie Animation */}
        <div className="flex items-center justify-center w-full">
          <Player
            autoplay
            loop
            src="/assets/lottie/CyberSecurity%20Net%20lock/CyberSecurity%20Net%20lock.json"
            style={{ height: '450px', width: '450px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default SecurityFeaturesSection;
