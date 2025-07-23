import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  BarChart3, 
  PieChart, 
  Wallet, 
  Shield, 
  Zap,
  Home,
  Building2,
  Palette,
  Coins,
  Leaf,
  Gem,
  Activity,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Star,
  Clock,
  Target,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  Settings,
  Bell,
  User,
  Search,
  Filter,
  Grid,
  List,
  RefreshCw,
  Play,
  Pause,
  Volume2,
  Wifi,
  Battery,
  Signal,
  BarChart,
  LineChart,
  CreditCard,
  Lock,
  Unlock,
  Key,
  QrCode,
  Send,
  RotateCcw,
  History,
  Bookmark,
  Share,
  Download,
  Upload,
  Copy,
  Edit,
  Trash2,
  MoreHorizontal,
  Calendar,
  Timer,
  AlertTriangle,
  Info,
  HelpCircle,
  ExternalLink,
  Maximize2,
  Minimize2,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  MousePointer,
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight
} from 'lucide-react';
import gsap from 'gsap';

export default function MarketplacePreview() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Track scroll progress and update animation steps
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1 && latest < 0.9) {
      setIsSticky(true);
      setIsAtEnd(false);
      // Map scroll progress to animation steps (0-6 for 6 devices + content)
      const step = Math.floor((latest - 0.1) / 0.8 * 7);
      setCurrentStep(Math.min(step, 6));
    } else {
      setIsSticky(false);
      if (latest <= 0.1) {
        setCurrentStep(0);
        setIsAtEnd(false);
      }
      if (latest >= 0.9) {
        setCurrentStep(6);
        setIsAtEnd(true);
      }
    }
  });

  return (
    <div ref={containerRef} className="relative" style={{ height: '400vh' }}>
      <section
        className={`w-full bg-green-50 overflow-hidden transition-all duration-300 ${
          isSticky 
            ? 'fixed top-0 left-0 right-0 min-h-[700px]' 
            : isAtEnd 
              ? 'absolute bottom-0 left-0 right-0 min-h-[700px]' 
              : 'relative min-h-[700px]'
          }`}
        style={{ zIndex: isSticky ? 50 : 'auto' }}
      >
        <div className="w-full h-full px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="relative w-full max-w-7xl px-6">
            {/* Main Heading */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: currentStep >= 0 ? 1 : 0,
                y: currentStep >= 0 ? 0 : 30
              }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="brand-section-title text-4xl md:text-5xl font-bold bg-clip-text mb-4">
                <span className='text-[#255f99]'>Marketplace Preview </span>
                
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience our revolutionary platform with AI-powered trading, secure staking, and seamless P2P transactions
              </p>
            </motion.div>

            {/* Animated Devices Preview */}
            <DevicesShowcase currentStep={currentStep} />

            {/* CTA Button */}
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: currentStep >= 6 ? 1 : 0,
                y: currentStep >= 6 ? 0 : 50
              }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                onClick={() => navigate("/marketplace")}
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white btn-gradient rounded-lg"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}



const devices = [
  {
    key: "desktop",
    src: "/assets/Images/devices/device-desktop.png",
    alt: "Desktop",
    style: {
      width: 386,
      left: "50%",
      bottom: 16,
      zIndex: 1, // Desktop at the back
      marginLeft: -193,
      final: { x: 0, y: 0 },
      initial: { x: 0, y: -400 },
      delay: 0,
    },
  },
  {
    key: "laptop",
    src: "/assets/Images/devices/device-laptop.png",
    alt: "Laptop",
    style: {
      width: 355,
      left: "13%",
      bottom: 0,
      zIndex: 5, // Laptop in front of desktop, behind tablet
      final: { x: 0, y: 0 },
      initial: { x: -500, y: 200 },
      delay: 0.3,
    },
  },
  {
    key: "ipad",
    src: "/assets/Images/devices/device-ipad.png",
    alt: "iPad",
    style: {
      width: 155,
      left: "62%",
      bottom: 24,
      zIndex: 2, // iPad in front of desktop
      final: { x: 0, y: 0 },
      initial: { x: 400, y: 200 },
      delay: 0.15,
    },
  },
  {
    key: "iphone",
    src: "/assets/Images/devices/device-iphone.png",
    alt: "iPhone",
    style: {
      width: 92,
      left: "77%",
      bottom: 0,
      zIndex: 3, // iPhone in front of iPad
      final: { x: 0, y: 0 },
      initial: { x: 600, y: 400 },
      delay: 0.45,
    },
  },
  {
    key: "phone",
    src: "/assets/Images/devices/device-phone.png",
    alt: "Phone",
    style: {
      width: 170,
      left: "85%",
      bottom: 8,
      zIndex: 4, // Phone in front of iPhone
      final: { x: 0, y: 0 },
      initial: { x: 400, y: 400 },
      delay: 0.75,
    },
  },
  {
    key: "tablet",
    src: "/assets/Images/devices/device-tablet.png",
    alt: "Tablet",
    style: {
      width: 195,
      left: 0,
      bottom: -8,
      zIndex: 6, // Tablet in front of everything
      final: { x: 0, y: 0 },
      initial: { x: -400, y: 400 },
      delay: 0.6,
    },
  },
];

function DevicesShowcase({ currentStep }) {
  // Screen content configurations for each device
  const screenConfigs = {
    desktop: {
      step: 2,
      bgColor: "rgba(255, 255, 255, 0.95)",
      content: "dashboard"
    },
    laptop: {
      step: 3,
      bgColor: "rgba(255, 255, 255, 0.95)",
      content: "trading"  
    },
    ipad: {
      step: 4,
      bgColor: "rgba(255, 255, 255, 0.95)",
      content: "portfolio"
    },
    tablet: {
      step: 4,
      bgColor: "rgba(255, 255, 255, 0.95)",
      content: "staking"
    },
    iphone: {
      step: 5,
      bgColor: "rgba(255, 255, 255, 0.95)",
      content: "wallet"
    },
    phone: {
      step: 5,
      bgColor: "rgba(255, 255, 255, 0.95)",
      content: "mobile"
    }
  };

  // Function to render realistic screen content with actual UI components
  const renderScreenContent = (contentType, isLarge = false) => {
    const baseSize = isLarge ? 'text-xs' : 'text-xs';
    
    switch (contentType) {
      case "dashboard":
        return (
          <div className="w-full h-full bg-white text-gray-900 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-2 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-xs font-bold text-gray-900">Copym Dashboard</div>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <div className="text-xs text-green-600 font-semibold">$124,567.89</div>
                </div>
              </div>
            </div>
            
            {/* Main Layout */}
            <div className="flex h-full">
              {/* Left Panel - Asset Categories */}
              <div className="w-1/3 p-2 border-r border-gray-200 bg-gray-50/50">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-semibold text-gray-700 flex items-center">
                    <BarChart3 className="w-3 h-3 mr-1" />
                    Categories
                  </div>
                  <Activity className="w-3 h-3 text-blue-600" />
                </div>
                
                <div className="space-y-1">
                  {[
                    { icon: <Gem className="w-3 h-3" />, color: 'yellow', bg: 'bg-yellow-100', border: 'border-yellow-200' },
                    { icon: <Building2 className="w-3 h-3" />, color: 'blue', bg: 'bg-blue-100', border: 'border-blue-200' },
                    { icon: <Palette className="w-3 h-3" />, color: 'purple', bg: 'bg-purple-100', border: 'border-purple-200' },
                    { icon: <Coins className="w-3 h-3" />, color: 'green', bg: 'bg-green-100', border: 'border-green-200' },
                    { icon: <Zap className="w-3 h-3" />, color: 'orange', bg: 'bg-orange-100', border: 'border-orange-200' },
                    { icon: <Gem className="w-3 h-3" />, color: 'red', bg: 'bg-red-100', border: 'border-red-200' }
                  ].map((category, i) => (
                    <div key={i} className={`${category.bg} p-2 rounded-lg border ${category.border} hover:shadow-sm transition-all duration-200 cursor-pointer`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className={`text-${category.color}-600`}>{category.icon}</div>
                          <div className="flex-1 bg-gray-200 h-2 rounded-full">
                            <div className={`bg-${category.color}-500 h-2 rounded-full`} style={{width: `${60 + Math.random() * 40}%`}}></div>
                          </div>
                        </div>
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Portfolio Chart */}
                <div className="mt-3 bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs font-semibold text-gray-700 flex items-center">
                      <LineChart className="w-3 h-3 mr-1" />
                      Portfolio
                    </div>
                    <TrendingUp className="w-3 h-3 text-green-600" />
                  </div>
                  <div className="flex items-end justify-between h-6 space-x-1">
                    {Array.from({length: 12}).map((_, i) => (
                      <div 
                        key={i}
                        className={`flex-1 rounded-sm transition-all duration-300 ${
                          Math.random() > 0.6 ? 'bg-green-500' : Math.random() > 0.3 ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                        style={{
                          height: `${20 + Math.random() * 80}%`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Panel - NFT-like Assets Grid */}
              <div className="w-2/3 p-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-semibold text-gray-700 flex items-center">
                    <Grid className="w-3 h-3 mr-1" />
                    Assets (42)
                  </div>
                  <div className="flex items-center space-x-1">
                    <Filter className="w-3 h-3 text-gray-500" />
                    <Search className="w-3 h-3 text-gray-500" />
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-1 h-full overflow-hidden">
                  {[
                    { icon: <Building2 className="w-4 h-4" />, bg: 'bg-gradient-to-br from-yellow-400 to-yellow-500' },
                    { icon: <Home className="w-4 h-4" />, bg: 'bg-gradient-to-br from-blue-400 to-blue-500' },
                    { icon: <Zap className="w-4 h-4" />, bg: 'bg-gradient-to-br from-green-400 to-green-500' },
                    { icon: <Palette className="w-4 h-4" />, bg: 'bg-gradient-to-br from-purple-400 to-purple-500' },
                    { icon: <Gem className="w-4 h-4" />, bg: 'bg-gradient-to-br from-orange-400 to-orange-500' },
                    { icon: <Gem className="w-4 h-4" />, bg: 'bg-gradient-to-br from-red-400 to-red-500' },
                    { icon: <Star className="w-4 h-4" />, bg: 'bg-gradient-to-br from-pink-400 to-pink-500' },
                    { icon: <Building2 className="w-4 h-4" />, bg: 'bg-gradient-to-br from-indigo-400 to-indigo-500' },
                    { icon: <Zap className="w-4 h-4" />, bg: 'bg-gradient-to-br from-teal-400 to-teal-500' },
                    { icon: <Leaf className="w-4 h-4" />, bg: 'bg-gradient-to-br from-cyan-400 to-cyan-500' },
                    { icon: <Leaf className="w-4 h-4" />, bg: 'bg-gradient-to-br from-lime-400 to-lime-500' },
                    { icon: <Activity className="w-4 h-4" />, bg: 'bg-gradient-to-br from-amber-400 to-amber-500' }
                  ].map((asset, i) => (
                    <div key={i} className={`${asset.bg} p-2 rounded-lg text-center shadow-sm border border-white/30 hover:shadow-md transition-all duration-200 cursor-pointer relative group`}>
                      <div className="absolute top-1 right-1">
                        <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                      </div>
                      <div className="text-white mb-2 flex justify-center">{asset.icon}</div>
                      <div className="flex justify-center space-x-1 mb-2">
                        {Array.from({length: 3}).map((_, j) => (
                          <div key={j} className="w-1 h-1 bg-white/60 rounded-full"></div>
                        ))}
                      </div>
                      <div className="w-full bg-white/20 h-1 rounded-full">
                        <div className="bg-white h-1 rounded-full" style={{width: `${40 + Math.random() * 50}%`}}></div>
                      </div>
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-200"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case "trading":
        return (
          <div className="w-full h-full bg-white text-gray-900 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-2 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-xs font-bold text-gray-900">P2P Trading</div>
                </div>
                <div className="flex items-center space-x-1">
                  <Activity className="w-3 h-3 text-green-600" />
                  <div className="text-xs bg-green-600 px-2 py-0.5 rounded-full text-white font-semibold">LIVE</div>
                </div>
              </div>
            </div>
            
            {/* Trading Interface */}
            <div className="p-2 space-y-2">
              {/* Price Ticker */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-2 rounded-lg border border-blue-200 shadow-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <div className="flex space-x-1">
                        {Array.from({length: 4}).map((_, i) => (
                          <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        ))}
                      </div>
                      <div className="w-12 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-1">
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-green-600" />
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-xs font-semibold text-gray-700 flex items-center">
                    <BarChart3 className="w-3 h-3 mr-1" />
                    Price Chart
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-end justify-between h-4 space-x-0.5">
                  {Array.from({length: 16}).map((_, i) => (
                    <div 
                      key={i}
                      className={`flex-1 rounded-sm transition-all duration-300 ${
                        Math.random() > 0.7 ? 'bg-green-500' : Math.random() > 0.4 ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                      style={{
                        height: `${15 + Math.random() * 85}%`,
                        animationDelay: `${i * 0.05}s`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Order Book */}
              <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    <List className="w-3 h-3 text-gray-700" />
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  <RefreshCw className="w-3 h-3 text-gray-500 animate-spin" style={{animationDuration: '2s'}} />
                </div>
                <div className="space-y-1">
                  {/* Sell Orders */}
                  {Array.from({length: 3}).map((_, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-8 h-2 bg-red-200 rounded-full">
                          <div className="w-6 h-2 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        {Array.from({length: 3}).map((_, j) => (
                          <div key={j} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  ))}
                  {/* Spread */}
                  <div className="border-t border-gray-300 my-1 py-1">
                    <div className="flex justify-center">
                      <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-green-500 rounded-full"></div>
                    </div>
                  </div>
                  {/* Buy Orders */}
                  {Array.from({length: 3}).map((_, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-8 h-2 bg-green-200 rounded-full">
                          <div className="w-5 h-2 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        {Array.from({length: 3}).map((_, j) => (
                          <div key={j} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buy/Sell Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xs py-2 rounded-lg font-bold flex items-center justify-center space-x-1 transition-all duration-200 shadow-sm">
                  <Plus className="w-3 h-3" />
                  <span>BUY</span>
                </button>
                <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-xs py-2 rounded-lg font-bold flex items-center justify-center space-x-1 transition-all duration-200 shadow-sm">
                  <Minus className="w-3 h-3" />
                  <span>SELL</span>
                </button>
              </div>
            </div>
          </div>
        );
      
      case "portfolio":
        return (
          <div className="w-full h-full bg-white text-gray-900 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-2 border-b border-gray-200">
              <div className="text-center space-y-2">
                <div className="flex justify-center space-x-1">
                  <PieChart className="w-4 h-4 text-blue-600" />
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="w-20 h-3 bg-gray-800 rounded-full mx-auto"></div>
                <div className="w-16 h-2 bg-green-400 rounded-full mx-auto"></div>
              </div>
            </div>
            
            {/* Pie Chart Simulation */}
            <div className="p-2">
              <div className="relative w-16 h-16 mx-auto mb-3">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 42 42">
                  <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#e5e7eb" strokeWidth="3"/>
                  <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#10b981" strokeWidth="3" 
                    strokeDasharray="40 100" strokeDashoffset="0"/>
                  <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#3b82f6" strokeWidth="3" 
                    strokeDasharray="30 100" strokeDashoffset="-40"/>
                  <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#f59e0b" strokeWidth="3" 
                    strokeDasharray="20 100" strokeDashoffset="-70"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Asset Breakdown */}
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-green-50 p-2 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <Building2 className="w-3 h-3 text-green-600" />
                    <div className="w-12 h-2 bg-green-300 rounded-full"></div>
                  </div>
                  <div className="w-8 h-2 bg-gray-800 rounded-full"></div>
                </div>
                <div className="flex justify-between items-center bg-blue-50 p-2 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <Gem className="w-3 h-3 text-blue-600" />
                    <div className="w-10 h-2 bg-blue-300 rounded-full"></div>
                  </div>
                  <div className="w-6 h-2 bg-gray-800 rounded-full"></div>
                </div>
                <div className="flex justify-between items-center bg-yellow-50 p-2 rounded-lg border border-yellow-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <Zap className="w-3 h-3 text-yellow-600" />
                    <div className="w-8 h-2 bg-yellow-300 rounded-full"></div>
                  </div>
                  <div className="w-4 h-2 bg-gray-800 rounded-full"></div>
                </div>
              </div>

              {/* Performance Chart */}
              <div className="mt-3 bg-gray-50 p-2 rounded-lg border border-gray-200">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <BarChart3 className="w-3 h-3 text-gray-600" />
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-end justify-between h-6 space-x-1">
                  {Array.from({length: 7}).map((_, i) => (
                    <div 
                      key={i}
                      className="bg-green-500 flex-1 rounded-t transition-all duration-300"
                      style={{
                        height: `${30 + Math.random() * 70}%`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case "staking":
        return (
          <div className="w-full h-full bg-white text-gray-900 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-2 border-b border-gray-200">
              <div className="text-center space-y-2">
                <div className="flex justify-center space-x-2">
                  <Target className="w-4 h-4 text-green-600" />
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="w-16 h-3 bg-green-500 rounded-full mx-auto"></div>
                <div className="flex justify-center space-x-1">
                  {Array.from({length: 5}).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-green-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Staking Stats */}
            <div className="p-2 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-50 p-2 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <Coins className="w-3 h-3 text-gray-600" />
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  </div>
                  <div className="w-12 h-2 bg-gray-800 rounded-full mx-auto"></div>
                </div>
                <div className="bg-green-50 p-2 rounded-lg border border-green-200">
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <TrendingUp className="w-3 h-3 text-green-600" />
                    <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="w-10 h-2 bg-green-600 rounded-full mx-auto"></div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="bg-gray-200 rounded-full h-3 relative overflow-hidden">
                <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-1000" style={{width: '68%'}}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              </div>
              
              <div className="flex justify-center space-x-1">
                <Clock className="w-3 h-3 text-gray-500" />
                <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
              </div>

              {/* Rewards History */}
              <div className="bg-gray-50 p-2 rounded-lg border border-gray-200">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <History className="w-3 h-3 text-gray-600" />
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-1">
                  {Array.from({length: 3}).map((_, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-6 h-1 bg-gray-300 rounded-full"></div>
                      </div>
                      <div className="w-8 h-1 bg-green-400 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xs py-2 rounded-lg font-bold flex items-center justify-center space-x-1 shadow-sm">
                <Plus className="w-3 h-3" />
                <div className="w-8 h-1 bg-white/60 rounded-full"></div>
              </button>
            </div>
          </div>
        );
      
      case "wallet":
        return (
          <div className="w-full h-full bg-white text-gray-900 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-2 border-b border-gray-200">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Wallet className="w-4 h-4 text-blue-600" />
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                <div className="w-20 h-3 bg-gray-800 rounded-full mx-auto"></div>
                <div className="flex items-center justify-center space-x-2">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <div className="w-16 h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Wallet Assets */}
            <div className="p-2 space-y-2">
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-2 rounded-lg border border-orange-200 shadow-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <Coins className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <div className="w-12 h-2 bg-orange-300 rounded-full"></div>
                      <div className="w-8 h-1 bg-orange-200 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1 items-end">
                    <div className="w-8 h-2 bg-gray-800 rounded-full"></div>
                    <div className="w-12 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-2 rounded-lg border border-blue-200 shadow-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Gem className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <div className="w-10 h-2 bg-blue-300 rounded-full"></div>
                      <div className="w-6 h-1 bg-blue-200 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1 items-end">
                    <div className="w-6 h-2 bg-gray-800 rounded-full"></div>
                    <div className="w-10 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-2 rounded-lg border border-green-200 shadow-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Activity className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <div className="w-14 h-2 bg-green-300 rounded-full"></div>
                      <div className="w-10 h-1 bg-green-200 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1 items-end">
                    <div className="w-10 h-2 bg-gray-800 rounded-full"></div>
                    <div className="w-6 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs py-2 rounded-lg font-bold flex items-center justify-center space-x-1 shadow-sm">
                  <Send className="w-3 h-3" />
                  <span>Send</span>
                </button>
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs py-2 rounded-lg font-bold flex items-center justify-center space-x-1 shadow-sm">
                  <Download className="w-3 h-3" />
                  <span>Receive</span>
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs py-2 rounded-lg font-bold flex items-center justify-center space-x-1 shadow-sm">
                  <RotateCcw className="w-3 h-3" />
                  <span>Swap</span>
                </button>
              </div>
            </div>
          </div>
        );
      
      case "mobile":
        return (
          <div className="w-full h-full bg-white text-gray-900 overflow-hidden">
            {/* Status Bar */}
            <div className="flex justify-between items-center p-2 text-xs bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
              <div className="flex items-center space-x-1">
                <Signal className="w-3 h-3 text-gray-600" />
                <span className="text-gray-900 font-medium">9:41</span>
              </div>
              <div className="flex items-center space-x-1">
                <Wifi className="w-3 h-3 text-gray-600" />
                <Battery className="w-4 h-4 text-gray-600" />
              </div>
            </div>
            
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 border-b border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Wallet className="w-4 h-4 text-blue-600" />
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                <div className="w-24 h-3 bg-green-500 rounded-full mx-auto mb-2"></div>
                <div className="flex items-center justify-center space-x-2">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <div className="w-16 h-2 bg-green-300 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="p-2 space-y-2">
              {/* Active Trade Card */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg border border-purple-200 shadow-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Activity className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 font-medium">Active Trades</div>
                      <div className="text-sm font-bold text-gray-900">BTC/USD</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-green-600" />
                      <div className="text-xs text-green-600 font-semibold">+2.3%</div>
                    </div>
                    <div className="text-sm font-bold text-gray-900">$43,250</div>
                  </div>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-semibold text-gray-700 flex items-center">
                    <BarChart3 className="w-3 h-3 mr-1" />
                    Price Chart
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-end justify-between h-6 space-x-0.5">
                  {Array.from({length: 12}).map((_, i) => (
                    <div 
                      key={i}
                      className={`flex-1 rounded-sm transition-all duration-300 ${
                        Math.random() > 0.6 ? 'bg-green-500' : Math.random() > 0.3 ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                      style={{
                        height: `${20 + Math.random() * 80}%`,
                        animationDelay: `${i * 0.08}s`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs py-2 rounded-lg font-bold flex items-center justify-center space-x-1 shadow-sm">
                  <ArrowUpRight className="w-3 h-3" />
                  <span>Buy</span>
                </button>
                <button className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs py-2 rounded-lg font-bold flex items-center justify-center space-x-1 shadow-sm">
                  <ArrowDownRight className="w-3 h-3" />
                  <span>Sell</span>
                </button>
              </div>

              {/* Quick Actions */}
              <div className="flex justify-between">
                <button className="flex items-center space-x-1 text-xs text-gray-600">
                  <History className="w-3 h-3" />
                  <span>History</span>
                </button>
                <button className="flex items-center space-x-1 text-xs text-gray-600">
                  <Settings className="w-3 h-3" />
                  <span>Settings</span>
                </button>
                <button className="flex items-center space-x-1 text-xs text-gray-600">
                  <Bell className="w-3 h-3" />
                  <span>Alerts</span>
                </button>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div
      className="devices_MMUi flex justify-center items-center"
      style={{
        position: "relative",
        width: "100%",
        minHeight: 420,
        height: 420,
        maxWidth: 900,
        margin: "0 auto",
        marginTop: "0px", // moved up from 40px
        background: "transparent",
        borderRadius: 32,
        overflow: "visible",
      }}
    >
      {devices.map((device) => {
        const style = {
          position: "absolute",
          width: device.style.width,
          top: device.style.top,
          left: device.style.left,
          right: device.style.right,
          bottom: device.style.bottom,
          zIndex: device.style.zIndex,
          marginLeft: device.style.marginLeft,
          pointerEvents: "none",
        };

        return (
          <motion.div
            key={device.key}
            className="device-anim"
            style={style}
            initial={{
              opacity: 0,
              x: device.style.initial.x,
              y: device.style.initial.y,
              scale: 0.8,
            }}
            animate={{
              opacity: currentStep >= 1 ? 1 : 0, // All devices appear when section is active
              x: currentStep >= 1 ? device.style.final.x : device.style.initial.x,
              y: currentStep >= 1 ? device.style.final.y : device.style.initial.y,
              scale: currentStep >= 1 ? 1 : 0.8,
            }}
            transition={{
              duration: 0.9,
              delay: device.style.delay, // Use original staggered delays for assembly
              type: "spring",
              stiffness: 60,
            }}
          >
            <div className="relative">
              <img
                src={device.src}
                alt={device.alt}
                style={{ width: "100%", height: "auto", display: "block" }}
              />

              {/* Screen Content Overlay - Realistic interface designs */}
              {screenConfigs[device.key] && currentStep >= screenConfigs[device.key].step && (
                    <motion.div
                  key={`${device.key}-screen`}
                  className="absolute overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                      style={{
                    // Precise screen positioning for each device type
                    ...(device.key === "desktop" && {
                      top: "8%",
                      left: "8%", 
                      right: "8%",
                      bottom: "20%",
                      borderRadius: "2px",
                    }),
                    ...(device.key === "laptop" && {
                      top: "12%",
                      left: "12%",
                      right: "12%", 
                      bottom: "18%",
                      borderRadius: "4px",
                    }),
                    ...(device.key === "ipad" && {
                      top: "8%",
                      left: "8%",
                      right: "8%",
                      bottom: "8%",
                      borderRadius: "12px",
                    }),
                    ...(device.key === "tablet" && {
                      top: "6%",
                      left: "6%",
                      right: "6%",
                      bottom: "6%",
                      borderRadius: "12px",
                    }),
                    ...(device.key === "iphone" && {
                      top: "12%",
                      left: "12%",
                      right: "12%",
                      bottom: "12%",
                      borderRadius: "16px",
                    }),
                    ...(device.key === "phone" && {
                      top: "8%",
                      left: "8%",
                      right: "8%",
                      bottom: "8%",
                      borderRadius: "16px",
                    }),
                    background: screenConfigs[device.key].bgColor,
                        backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: device.key === "desktop" || device.key === "laptop" 
                      ? "inset 0 0 20px rgba(0, 0, 0, 0.3)" 
                      : "inset 0 0 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {renderScreenContent(
                    screenConfigs[device.key].content,
                    device.key === "desktop" || device.key === "laptop"
                  )}
                    </motion.div>
              )}
            </div>
          </motion.div>
        );
      })}

      {/* Final lift-up animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          y: currentStep >= 6 ? -50 : 0,
          scale: currentStep >= 6 ? 0.95 : 1,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}