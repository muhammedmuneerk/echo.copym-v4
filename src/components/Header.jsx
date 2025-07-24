import React, { useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Navigation data with dropdown content
  const navigationData = {
    Products: [
      {
        title: "Tokenization Platform",
        description: "Transform real-world assets into blockchain tokens with our secure and compliant platform",
        path: "/tokenization",
        visual: (
          <div className="w-full h-48 bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 relative overflow-hidden border border-green-200">
            <div className="absolute top-4 left-4 text-xs text-green-700 font-medium">Asset Selection</div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-green-100">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-700 font-medium">Gold Reserve</span>
                </div>
                <div className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md font-medium">$500K</div>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-green-100">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-700 font-medium">Art Collection</span>
                </div>
                <div className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md font-medium">$1.2M</div>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-green-100">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-700 font-medium">Real Estate</span>
                </div>
                <div className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md font-medium">$2.8M</div>
              </div>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center text-green-700 text-xs font-medium">+</div>
                <div className="w-6 h-6 bg-green-300 rounded-full flex items-center justify-center text-green-700 text-xs font-medium">→</div>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-medium">RWA</div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Marketplace",
        description: "Trade tokenized assets in our secure and transparent marketplace with advanced analytics",
        path: "/marketplace",
        visual: (
          <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 relative overflow-hidden border border-blue-200">
            <div className="absolute top-4 left-4 text-xs text-blue-700 font-medium">Marketplace Dashboard</div>
            <div className="mt-8 flex h-full">
              {/* Sidebar */}
              <div className="w-2/5 pr-3">
                <div className="bg-white rounded-lg border border-blue-200 p-3 h-full">
                  <div className="text-xs text-blue-600 font-medium mb-2">Assets</div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-1 bg-blue-50 rounded border border-blue-200">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-xs text-gray-700">Gold</span>
                    </div>
                    <div className="flex items-center space-x-2 p-1 bg-blue-50 rounded border border-blue-200">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-gray-700">Real Estate</span>
                    </div>
                    <div className="flex items-center space-x-2 p-1 bg-blue-50 rounded border border-blue-200">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-xs text-gray-700">Art</span>
                    </div>
                    <div className="flex items-center space-x-2 p-1 bg-blue-50 rounded border border-blue-200">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-700">Commodities</span>
                    </div>
                    <div className="flex items-center space-x-2 p-1 bg-blue-50 rounded border border-blue-200">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-xs text-gray-700">Infrastructure</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="w-3/5 pl-3">
                <div className="bg-white rounded-lg border border-blue-200 p-3 h-full">
                  <div className="text-xs text-blue-600 font-medium mb-2">Featured NFTs</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-50 rounded border p-2">
                      <div className="w-full h-8 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded mb-2"></div>
                      <div className="text-xs text-gray-700 font-medium">Gold Reserve #42</div>
                      <div className="text-xs text-gray-500">RWA Collection</div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-blue-600 font-medium">2.45 ETH</span>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded border p-2">
                      <div className="w-full h-8 bg-gradient-to-r from-blue-200 to-blue-300 rounded mb-2"></div>
                      <div className="text-xs text-gray-700 font-medium">Luxury Villa #18</div>
                      <div className="text-xs text-gray-500">Real Estate</div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-blue-600 font-medium">8.2 ETH</span>
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded border p-2">
                      <div className="w-full h-8 bg-gradient-to-r from-purple-200 to-purple-300 rounded mb-2"></div>
                      <div className="text-xs text-gray-700 font-medium">Art Piece #7</div>
                      <div className="text-xs text-gray-500">Art Collection</div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-blue-600 font-medium">3.8 ETH</span>
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded border p-2">
                      <div className="w-full h-8 bg-gradient-to-r from-green-200 to-green-300 rounded mb-2"></div>
                      <div className="text-xs text-gray-700 font-medium">Solar Farm #12</div>
                      <div className="text-xs text-gray-500">Infrastructure</div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-blue-600 font-medium">15.5 ETH</span>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 p-2 bg-blue-50 rounded border border-blue-200">
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-blue-600 font-medium">Floor Price</div>
                      <div className="text-xs font-bold text-blue-800">2.45 ETH</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ],
    Services: [
      {
        title: "AccessPass",
        description: "Verified investor onboarding with comprehensive KYC/AML compliance and accreditation verification",
        visual: (
          <div className="w-full h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-xs text-emerald-600 font-semibold">Investor Verification</div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-emerald-700">KYC Status</span>
                <div className="px-2 py-1 bg-green-400 text-white text-xs rounded">Verified</div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-emerald-700">AML Check</span>
                <div className="px-2 py-1 bg-green-400 text-white text-xs rounded">Passed</div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-emerald-700">Accreditation</span>
                <div className="px-2 py-1 bg-green-400 text-white text-xs rounded">Approved</div>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-emerald-300 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "LaunchKit",
        description: "Comprehensive tools for tokenizing and managing assets with smart contract deployment",
        visual: (
          <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-xs text-blue-600 font-semibold">Asset Management</div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs">1</div>
                <div className="h-2 bg-blue-300 rounded flex-1"></div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white text-xs">2</div>
                <div className="h-2 bg-blue-300 rounded flex-1"></div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center text-white text-xs">3</div>
                <div className="h-2 bg-blue-200 rounded flex-1"></div>
              </div>
              <div className="mt-4 bg-blue-300 rounded-lg p-3">
                <div className="text-sm font-bold text-blue-800">Smart Contracts</div>
                <div className="text-xs text-blue-600">Deployed & Ready</div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Copym Agent (CmAI)",
        description: "Smart analytics and platform intelligence powered by advanced AI for optimal decision making",
        path: "/agent",
        visual: (
          <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 relative overflow-hidden border border-gray-200">
            <div className="absolute top-4 left-4 text-xs text-gray-600 font-semibold">AI Analytics</div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-700">Market Analysis</span>
                <div className="px-2 py-1 bg-green-400 text-white text-xs rounded">94%</div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-700">Risk Assessment</span>
                <div className="px-2 py-1 bg-green-400 text-white text-xs rounded">87%</div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-700">Predictions</span>
                <div className="px-2 py-1 bg-green-400 text-white text-xs rounded">91%</div>
              </div>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
              </div>
            </div>
          </div>
        )
      }
    ],
    Company: [
      {
        title: "About us",
        description: "Vision, team, and mission - discover the story behind our revolutionary approach to real-world asset tokenization",
        path: "/about",
        visual: (
          <div className="w-full h-48 bg-gradient-to-br from-teal-100 to-cyan-200 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-6 left-6">
              <div className="w-16 h-16 bg-teal-300 rounded-full opacity-60 relative">
                <div className="absolute inset-2 bg-teal-400 rounded-full"></div>
                <div className="absolute inset-4 bg-teal-500 rounded-full"></div>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 space-y-2">
              <div className="h-2 bg-teal-300 rounded w-20"></div>
              <div className="h-2 bg-teal-400 rounded w-16"></div>
              <div className="h-2 bg-teal-300 rounded w-12"></div>
            </div>
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
              <div className="w-12 h-12 border-4 border-teal-400 rounded-lg rotate-45"></div>
            </div>
          </div>
        )
      },
      {
        title: "Roadmap",
        description: "Explore our development timeline and upcoming features that will shape the future of RWA tokenization",
        path: "/roadmap",
        visual: (
          <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-xs text-purple-600 font-semibold">Development Timeline</div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="h-2 bg-purple-300 rounded flex-1"></div>
                <div className="text-xs text-purple-700 font-medium">Q1 2024</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="h-2 bg-purple-300 rounded flex-1"></div>
                <div className="text-xs text-purple-700 font-medium">Q2 2024</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-purple-300 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="h-2 bg-purple-200 rounded flex-1"></div>
                <div className="text-xs text-purple-600 font-medium">Q3 2024</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded flex-1"></div>
                <div className="text-xs text-gray-500 font-medium">Q4 2024</div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Contact",
        description: "Let's connect - reach out to our team for partnerships, support, or to learn more about our platform",
        path: "/contact",
        visual: (
          <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-xs text-blue-600 font-semibold">Get in Touch</div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="text-xs text-blue-700">hello@copym.ai</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="text-xs text-blue-700">+1 (555) 123-4567</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="text-xs text-blue-700">Support & Partnerships</div>
              </div>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
        )
      }
    ]
  };

  return (
    <>
      {/* Modern Clean Header with Glass Effect */}
      <header className="absolute top-0 inset-x-0 z-50 flex justify-center pointer-events-none">
        {/* Main header container with glass effect */}
        <div className="w-[98%] max-w-7xl pointer-events-auto px-8 py-4 bg-transparent rounded-2xl">
          
          <div className="flex items-center justify-between w-full">

            {/* Logo Only */}
            <Link to="/" className="flex items-center">
              <img
                src="/assets/copym/png/Copym-01-1.png"
                alt="COPYM"
                className="h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {Object.keys(navigationData).map((navItem, index) => (
                <div
                  key={navItem}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(navItem)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.button 
                    className={`flex items-center space-x-2 px-4 py-2 font-medium text-gray-700 hover:text-teal-600 transition-colors duration-200 rounded-lg ${
                      activeDropdown === navItem ? 'text-teal-600 bg-teal-50' : ''
                    }`}
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>{navItem}</span>
                    <motion.div
                      animate={{ 
                        rotate: activeDropdown === navItem ? 180 : 0 
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown className="w-4 h-4 text-teal-600" />
                    </motion.div>
                  </motion.button>
                </div>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-gray-700 hover:text-teal-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Dynamic Mega Menu */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            className="absolute top-24 left-0 right-0 z-40 px-4 md:px-0"
            initial={{ 
              opacity: 0, 
              y: -20
            }}
            animate={{ 
              opacity: 1, 
              y: 0
            }}
            exit={{ 
              opacity: 0, 
              y: -20
            }}
            transition={{ 
              duration: 0.3, 
              ease: "easeOut" 
            }}
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100 backdrop-blur-md rounded-2xl shadow-2xl border border-teal-100 p-8">
                <div className={`grid gap-8 ${navigationData[activeDropdown].length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                  {navigationData[activeDropdown].map((section, index) => (
                    <Link
                      key={index}
                      to={section.path}
                      className="block"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <motion.div
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-teal-100"
                        initial={{ 
                          opacity: 0, 
                          y: 30 
                        }}
                        animate={{ 
                          opacity: 1, 
                          y: 0 
                        }}
                        transition={{ 
                          delay: index * 0.1,
                          duration: 0.4,
                          ease: "easeOut"
                        }}
                        whileHover={{ y: -8, scale: 1.02 }}
                      >
                        {/* Visual Preview */}
                        <div className="mb-6 group-hover:scale-105 transition-transform duration-300">
                          {section.visual}
                        </div>
                        
                        {/* Content */}
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200 leading-tight">
                            {section.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {section.description}
                          </p>
                          
                          {/* Learn More Link */}
                          <motion.div 
                            className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium text-sm pt-2"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span>Learn more</span>
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed top-24 left-0 right-0 z-40 px-4 md:hidden">
          <div className="bg-white rounded-2xl shadow-xl py-4 px-6 space-y-4 text-center">
            {Object.keys(navigationData).map(navItem => (
              <div
                key={navItem}
                className="block text-gray-700 font-medium hover:text-teal-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {navItem}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Spacer to avoid content overlap (except on Home hero) */}
      {location.pathname !== "/" && (
        <div className="h-20 md:h-28" />
      )}
    </>
  );
}
