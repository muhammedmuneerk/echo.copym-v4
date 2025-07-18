import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Search, 
  CreditCard, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  Building,
  Euro,
  DollarSign,
  Coins
} from 'lucide-react';

const Flowchart = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
  {
    id: 1,
      title: "Login",
      icon: User,
      content: {
        type: "form",
        email: "alexander@example.com",
        buttonText: "Continue",
        socialOptions: ["Google", "MetaMask", "WalletConnect"]
      }
  },
  {
    id: 2,
      title: "Tokenize your asset",
      icon: Building,
      content: {
        type: "tokenization",
        assetName: "Premium Office Building",
        assetType: "Real Estate",
        value: "$2,500,000",
        tokenCount: "10,000",
        tokenValue: "$250",
        features: [
          "Legal Compliance",
          "Smart Contract",
          "Digital Ownership"
        ]
      }
  },
  {
    id: 3,
      title: "List in marketplace",
      icon: Search,
      content: {
        type: "marketplace",
        assetName: "Premium Office Building",
        totalTokens: "10,000",
        availableTokens: "7,000",
        pricePerToken: "$250",
        status: "Live",
        metrics: {
          totalValue: "$2.5M",
          tokensSold: "3,000",
          remainingTokens: "7,000"
        }
      }
  },
  {
    id: 4,
      title: "Investors buy fractional shares",
      icon: TrendingUp,
      content: {
        type: "investment",
        assetName: "Premium Office Building",
        pricePerToken: "$250",
        availableTokens: "7,000",
        totalValue: "$2.5M",
        soldPercentage: 30,
        buttonText: "Buy 10 Tokens"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  const renderStepContent = (step) => {
    switch (step.id) {
      case 1:
        return (
          <div className="p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <step.icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Sign up/Log in</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-400 to-green-400 rounded-lg p-4 text-white">
                <img 
                  src="/assets/images/flowchart4.png" 
                  alt="Login Interface" 
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <div className="text-sm opacity-90">Login Interface</div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-green-600 transition-all duration-300">
                Continue
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <step.icon className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Tokenize Asset</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-400 to-green-400 rounded-lg p-4 text-white">
                <img 
                  src="/assets/images/flowchart1.png" 
                  alt="Tokenization Process" 
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <div className="text-sm opacity-90">Asset Tokenization</div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-green-600 transition-all duration-300">
                Tokenize Now
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <step.icon className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Marketplace Listing</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-400 to-blue-400 rounded-lg p-4 text-white">
                <img 
                  src="/assets/images/flowchart2.png" 
                  alt="Marketplace Interface" 
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-90">Marketplace</div>
                  </div>
                  <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Live</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300">
                View Listing
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mb-4">
              <step.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Investors buy fractional shares</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-400 to-blue-400 rounded-lg p-4 text-white">
                <img 
                  src="/assets/images/flowchart5.png" 
                  alt="Fractional Ownership" 
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <div className="text-sm opacity-90">Fractional Investment</div>
              </div>
              <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300">
                Buy 10 Tokens
              </button>
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
            Tokenize your real-world assets and list them in our marketplace in just 4 simple steps
          </p>
        </motion.div>
      </div>

      {/* Flowchart */}
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
                  <div className="flex-1">
                    {renderStepContent(step)}
                  </div>
                  <div className="px-6 pb-4">
                    <div className="text-sm text-gray-500 text-center">
                      {step.id} {step.title}
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