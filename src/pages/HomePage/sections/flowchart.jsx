import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Search,
  CreditCard,
  TrendingUp,
  ArrowRight,
  Building
} from 'lucide-react';

const Flowchart = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Login",
      icon: User,
      content: { type: "form" }
    },
    {
      id: 2,
      title: "Tokenize your asset",
      icon: Building,
      content: { type: "tokenization" }
    },
    {
      id: 3,
      title: "List in marketplace",
      icon: Search,
      content: { type: "marketplace" }
    },
    {
      id: 4,
      title: "Investors buy fractional shares",
      icon: TrendingUp,
      content: { type: "investment" }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
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

  const renderStepContent = (step) => {
    const iconWrapper = (Icon, bgColor, iconColor) => (
      <div className={`flex items-center justify-center w-12 h-12 rounded-full mb-4 ${bgColor}`}>
        <Icon className={`w-7 h-7 ${iconColor}`} />
      </div>
    );

    const imageBlock = (src, label) => (
      <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-xl p-4 text-white">
        <img src={src} alt={label} className="w-full h-32 object-cover rounded-md mb-3" />
        <div className="text-sm opacity-90">{label}</div>
      </div>
    );

    const button = (text) => (
      <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-300">
        {text}
      </button>
    );

    switch (step.id) {
      case 1:
        return (
          <div className="p-6">
            {iconWrapper(User, "bg-blue-100", "text-blue-600")}
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Sign up / Log in</h3>
            <div className="space-y-4">
              {imageBlock("/assets/images/flowchart4.png", "Login Interface")}
              {button("Continue")}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="p-6">
            {iconWrapper(Building, "bg-green-100", "text-green-600")}
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Tokenize Asset</h3>
            <div className="space-y-4">
              {imageBlock("/assets/images/flowchart1.png", "Asset Tokenization")}
              {button("Tokenize Now")}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="p-6">
            {iconWrapper(Search, "bg-green-100", "text-green-600")}
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Marketplace Listing</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-500 to-blue-500 rounded-xl p-4 text-white">
                <img src="/assets/images/flowchart2.png" alt="Marketplace" className="w-full h-32 object-cover rounded-md mb-3" />
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">Marketplace</span>
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">Live</span>
                </div>
              </div>
              {button("View Listing")}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="p-6">
            {iconWrapper(TrendingUp, "bg-gradient-to-br from-green-500 to-blue-500", "text-white")}
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Fractional Ownership</h3>
            <div className="space-y-4">
              {imageBlock("/assets/images/flowchart5.png", "Fractional Investment")}
              {button("Buy 10 Tokens")}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tokenize your real-world assets and list them in our marketplace in just 4 simple steps.
          </p>
        </motion.div>
      </div>

      {/* Flowchart Steps */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="w-full lg:w-56 flex-shrink-0"
                onClick={() => setActiveStep(index)}
              >
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer h-full min-h-[350px] flex flex-col">
                  <div className="flex-1">{renderStepContent(step)}</div>
                  <div className="px-6 pb-4">
                    <div className="text-sm text-gray-500 text-center">
                      Step {step.id}: {step.title}
                    </div>
                  </div>
                </div>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  variants={arrowVariants}
                  className="hidden lg:flex items-center justify-center text-blue-500"
                >
                  <ArrowRight className="w-8 h-8" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      {/* Mobile Steps Indicator */}
      <div className="flex justify-center mt-8 lg:hidden">
        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === activeStep ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flowchart;
