import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Search, TrendingUp, ArrowRight, Building } from 'lucide-react';

const Flowchart = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { id: 1, title: "Login", icon: User },
    { id: 2, title: "Tokenize your asset", icon: Building },
    { id: 3, title: "List in marketplace", icon: Search },
    { id: 4, title: "Investors buy fractional shares", icon: TrendingUp }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
    hover: { y: -6, scale: 1.03, transition: { duration: 0.3 } }
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } }
  };

  const iconWrapper = (Icon) => (
    <div className="flex items-center justify-center w-10 h-10 rounded-full mb-4 bg-white/20">
      <Icon className="w-5 h-5 text-white" />
    </div>
  );

  const imageBlock = (src, label) => (
    <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-lg p-2 text-white">
      <img src={src} alt={label} className="w-full h-24 object-cover rounded-md mb-2" />
      <div className="text-xs opacity-80">{label}</div>
    </div>
  );

  const renderStepContent = (step) => {
    switch (step.id) {
      case 1:
        return (
          <div className="p-4">
            {iconWrapper(step.icon)}
            <h3 className="text-sm font-semibold text-white mb-3">Sign up / Log in</h3>
            {imageBlock("/assets/images/flowchart4.png", "Login Interface")}
          </div>
        );
      case 2:
        return (
          <div className="p-4">
            {iconWrapper(step.icon)}
            <h3 className="text-sm font-semibold text-white mb-3">Tokenize Asset</h3>
            {imageBlock("/assets/images/flowchart1.png", "Asset Tokenization")}
          </div>
        );
      case 3:
        return (
          <div className="p-4">
            {iconWrapper(step.icon)}
            <h3 className="text-sm font-semibold text-white mb-3">Marketplace Listing</h3>
            {imageBlock("/assets/images/flowchart2.png", "Marketplace")}
          </div>
        );
      case 4:
        return (
          <div className="p-4">
            {iconWrapper(step.icon)}
            <h3 className="text-sm font-semibold text-white mb-3">Fractional Ownership</h3>
            {imageBlock("/assets/images/flowchart5.png", "Fractional Investment")}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Flowchart />
  );
};

export default Flowchart;
