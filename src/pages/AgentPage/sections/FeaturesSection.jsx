import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SmartToy,
  Verified,
  Percent,
  Security,
  Assessment,
  CheckCircle,
  PsychologyAlt,
  Analytics,
  Bolt,
  Shield,
  WorkspacePremium,
  VerifiedUser,
  AccountBalanceWallet,
  CompareArrows,
  ShowChart,
  Timeline,
  Dashboard,
  Language,
  MyLocation,
  PhoneAndroid,
  Handshake,
  BarChart,
  Extension,
  Help,
  Settings,
  Notifications,
  Star,
  Favorite,
  Share,
  Download,
  Upload,
  Refresh,
  PlayArrow,
  Pause,
  Stop,
  SkipNext,
  SkipPrevious,
  VolumeUp,
  VolumeOff,
  Fullscreen,
  FullscreenExit,
  ZoomIn,
  ZoomOut,
  FilterList,
  Sort,
  Search,
  Clear,
  Add,
  Remove,
  Edit,
  Delete,
  Save,
  Cancel,
  Close,
  Menu,
  MoreVert,
  ExpandMore,
  ExpandLess,
  KeyboardArrowUp,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Home,
  Business,
  School,
  Work,
  Apartment,
  Storefront,
  Factory,
  LocalShipping,
  Inventory,
  Assessment as AssessmentIcon,
  TrendingUp,
  TrendingDown,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  VerifiedUser as VerifiedUserIcon,
  AccountBalance,
  MonetizationOn,
  PsychologyAlt as PsychologyAltIcon,
  Bolt as BoltIcon,
  Shield as ShieldIcon,
  Analytics as AnalyticsIcon,
  Dashboard as DashboardIcon,
  CompareArrows as CompareArrowsIcon,
  ShowChart as ShowChartIcon,
  Timeline as TimelineIcon,
  Assessment as AssessmentIconAlt,
  AccountBalanceWallet as AccountBalanceWalletIcon,
  VerifiedUser as VerifiedUserIconAlt,
  Security as SecurityIconAlt,
  CorporateFare,
  Architecture,
  PrecisionManufacturing,
  Science,
  Biotech,
  Psychology,
  School as SchoolIcon,
  Work as WorkIcon,
  BusinessCenter,
  Apartment as ApartmentIcon,
  Storefront as StorefrontIcon,
  Factory as FactoryIcon,
  LocalShipping as LocalShippingIcon,
  Inventory as InventoryIcon,
  Assessment as AssessmentIconAlt2,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Speed as SpeedIconAlt,
  Security as SecurityIconAlt2,
  VerifiedUser as VerifiedUserIconAlt2,
  AccountBalance as AccountBalanceIcon,
  MonetizationOn as MonetizationOnIcon,
  PsychologyAlt as PsychologyAltIconAlt,
  Bolt as BoltIconAlt,
  Shield as ShieldIconAlt,
  Analytics as AnalyticsIconAlt,
  Dashboard as DashboardIconAlt,
  CompareArrows as CompareArrowsIconAlt,
  ShowChart as ShowChartIconAlt,
  Timeline as TimelineIconAlt,
  Assessment as AssessmentIconAlt3,
  AccountBalanceWallet as AccountBalanceWalletIconAlt,
  VerifiedUser as VerifiedUserIconAlt3,
  Security as SecurityIconAlt3,
  MyLocation as MyLocationIcon,
  PhoneAndroid as PhoneAndroidIcon,
  Language as LanguageIcon,
  Public,
  Handshake as HandshakeIcon,
  BarChart as BarChartIcon,
  Token,
  Extension as ExtensionIcon,
  RocketLaunch,
  Help as HelpIcon
} from '@mui/icons-material';

const FeaturesSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null);
  const [isDemoRunning, setIsDemoRunning] = useState(false);
  const [aiProcessing, setAIProcessing] = useState(false);
  const [demoResults, setDemoResults] = useState(null);
  const scrollContainerRef = useRef(null);

  const features = [
    {
      id: 1,
      icon: <SmartToy sx={{ fontSize: 32, color: '#4ade80' }} />,
      title: 'AI-Powered Asset Intelligence',
      description: 'Advanced AI algorithms analyze 10,000+ data points to verify asset authenticity and predict market performance',
      color: '#4ade80',
      demo: {
        type: 'asset-analysis',
        title: 'Asset Intelligence Demo',
        description: 'Watch AI analyze a luxury watch collection in real-time',
        data: {
          assetName: 'Rolex Submariner Collection',
          analysisTime: '2.3 seconds',
          dataPoints: '12,847',
          confidence: '94.2%',
          prediction: '+15.3% in 12 months'
        }
      }
    },
    {
      id: 2,
      icon: <Token sx={{ fontSize: 32, color: '#f59e0b' }} />,
      title: 'Instant Tokenization Engine',
      description: 'Convert real-world assets into blockchain tokens in under 3 minutes with AI-powered smart contracts',
      color: '#f59e0b',
      demo: {
        type: 'tokenization',
        title: 'Tokenization Demo',
        description: 'See how AI tokenizes a $500K asset in real-time',
        data: {
          assetValue: '$500,000',
          tokenizationTime: '2.7 minutes',
          tokensCreated: '5,000',
          blockchain: 'Ethereum',
          gasUsed: '0.023 ETH'
        }
      }
    },
    {
      id: 3,
      icon: <Security sx={{ fontSize: 32, color: '#ef4444' }} />,
      title: 'AI Fraud Detection System',
      description: 'Multi-layered AI security with 99.7% fraud detection accuracy and real-time threat monitoring',
      color: '#ef4444',
      demo: {
        type: 'security',
        title: 'Security Demo',
        description: 'Watch AI detect and prevent fraud attempts',
        data: {
          threatsDetected: '1,247',
          falsePositives: '0.3%',
          responseTime: '0.8 seconds',
          protectionLevel: '99.7%'
        }
      }
    },
    {
      id: 4,
      icon: <PsychologyAlt sx={{ fontSize: 32, color: '#3b82f6' }} />,
      title: 'Predictive Portfolio AI',
      description: 'AI predicts market trends with 23% better accuracy than traditional methods and optimizes your portfolio',
      color: '#3b82f6',
      demo: {
        type: 'prediction',
        title: 'Prediction Demo',
        description: 'See AI predict market movements with high accuracy',
        data: {
          accuracy: '87.3%',
          predictions: '1,234',
          successRate: '89.2%',
          timeHorizon: '6 months'
        }
      }
    }
  ];

  // Touch handlers for swipe functionality
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && activeStep < 4) {
      setActiveStep(activeStep + 1);
    }
    if (isRightSwipe && activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 4) + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Demo Functions
  const runFeatureDemo = async (feature) => {
    setActiveFeature(feature);
    setIsDemoRunning(true);
    setAIProcessing(true);
    setDemoResults(null);

    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 2000));
    
    setAIProcessing(false);
    setDemoResults(feature.demo.data);
    
    // Auto-hide demo after 5 seconds
    setTimeout(() => {
      setIsDemoRunning(false);
      setActiveFeature(null);
      setDemoResults(null);
    }, 5000);
  };

  return (
    <section
      id="features"
      className="relative overflow-hidden py-12 md:py-20"
      style={{
        background: 'black'
      }}
    >
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(74, 222, 128, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="brand-section-title mb-6 text-white flex items-center justify-center">
            <SmartToy sx={{ mr: 2, fontSize: '2rem', color: '#4ade80' }} />
            CopymAgent AI Capabilities
          </h2>
          <p className="brand-description max-w-3xl mx-auto text-gray-300">
            Experience the power of advanced AI technology revolutionizing real-world asset investment
          </p>
        </motion.div>

        {/* Mobile Swipeable Container */}
        <div className="md:hidden">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 px-4 pb-4" style={{ width: 'max-content' }}>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center relative transition-all duration-300 ease-out hover:-translate-y-2.5 group min-w-[280px] max-w-[280px]"
                >
                  {/* Feature Icon */}
                  <div className="mb-6 relative z-30 transition-all duration-300 ease-out group-hover:scale-110 flex-shrink-0">
                    <div className="filter drop-shadow-md transition-all duration-300 ease-out group-hover:scale-110">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Feature Content */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 rounded-2xl p-6 relative transition-all duration-300 ease-out group-hover:border-current group-hover:shadow-xl group-hover:shadow-black/30 group-hover:-translate-y-1.5 w-full h-full flex flex-col justify-between">
                    <div>
                      <h3 className="brand-card-title mb-3 leading-tight text-white min-h-[3rem] flex items-center justify-center">
                        {feature.title}
                      </h3>
                      <p className="brand-description text-gray-300 min-h-[4.5rem] flex items-center justify-center">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Demo Button */}
                    <button
                      onClick={() => runFeatureDemo(feature)}
                      className="mt-4 w-full bg-gradient-to-r from-green-400 to-green-600 text-black py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      Try Demo
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Mobile Pagination Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {[1, 2, 3, 4].map((step) => (
              <button
                key={step}
                onClick={() => setActiveStep(step)}
                className={`w-3 h-3 rounded-full border-2 border-gray-500 cursor-pointer transition-all duration-300 ease-out hover:scale-110 ${
                  step === activeStep
                    ? 'bg-green-400 border-green-400 shadow-lg shadow-green-400/50 scale-125'
                    : 'hover:bg-green-400 hover:border-green-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Timeline Container */}
        <div className="hidden md:block relative max-w-6xl mx-auto py-8 md:py-16">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded transform -translate-y-1/2 z-10" />

          {/* Timeline Progress */}
          <div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded transform -translate-y-1/2 z-20 transition-all duration-2000 ease-in-out shadow-lg shadow-green-400/30"
            style={{ width: `${(activeStep / 4) * 100}%` }}
          />

          {/* Timeline Features */}
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 z-30">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col items-center text-center relative transition-all duration-300 ease-out hover:-translate-y-2.5 group h-full"
              >
                {/* Feature Icon */}
                <div className="mb-6 relative z-30 transition-all duration-300 ease-out group-hover:scale-110 flex-shrink-0">
                  <div className="filter drop-shadow-md transition-all duration-300 ease-out group-hover:scale-110">
                    {feature.icon}
                  </div>
                </div>

                {/* Feature Content */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 rounded-2xl p-6 relative transition-all duration-300 ease-out group-hover:border-current group-hover:shadow-xl group-hover:shadow-black/30 group-hover:-translate-y-1.5 w-full h-full flex flex-col justify-between">
                  <div>
                    <h3 className="brand-card-title mb-3 leading-tight text-white min-h-[3rem] flex items-center justify-center">
                      {feature.title}
                    </h3>
                    <p className="brand-description text-gray-300 min-h-[4.5rem] flex items-center justify-center">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Demo Button */}
                  <button
                    onClick={() => runFeatureDemo(feature)}
                    className="mt-4 w-full bg-gradient-to-r from-green-400 to-green-600 text-black py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Try Demo
                  </button>
                </div>

                {/* Feature Connector */}
                <div
                  className="absolute top-10 left-1/2 w-0.5 h-10 bg-gradient-to-b from-current to-transparent transform -translate-x-1/2 opacity-60 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:h-12"
                  style={{ color: feature.color }}
                />
              </motion.div>
            ))}
          </div>

          {/* Desktop Timeline Progress Indicators */}
          <div className="flex justify-center gap-4 mt-8 md:mt-12">
            {[1, 2, 3, 4].map((step) => (
              <button
                key={step}
                onClick={() => setActiveStep(step)}
                className={`w-3 h-3 rounded-full border-2 border-gray-500 cursor-pointer transition-all duration-300 ease-out hover:scale-110 ${
                  step === activeStep
                    ? 'bg-green-400 border-green-400 shadow-lg shadow-green-400/50 scale-125'
                    : 'hover:bg-green-400 hover:border-green-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Interactive Demo Modal */}
        <AnimatePresence>
          {isDemoRunning && activeFeature && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8 max-w-md w-full"
              >
                <div className="text-center">
                  <div className="mb-4">
                    {activeFeature.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{activeFeature.demo.title}</h3>
                  <p className="text-gray-300 text-sm mb-6">{activeFeature.demo.description}</p>
                  
                  {aiProcessing ? (
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                      <p className="text-green-400 text-sm">AI Processing...</p>
                    </div>
                  ) : demoResults ? (
                    <div className="space-y-3">
                      {Object.entries(demoResults).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center p-2 bg-gray-800 rounded-lg">
                          <span className="text-gray-400 text-sm capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </span>
                          <span className="text-green-400 font-semibold">{value}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  
                  <button
                    onClick={() => setIsDemoRunning(false)}
                    className="mt-6 w-full bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-all"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* AI Accuracy Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10 md:mt-16"
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-6 md:py-8 px-4 md:px-8 rounded-2xl text-lg md:text-xl font-semibold max-w-xl md:max-w-4xl mx-auto shadow-2xl shadow-green-500/30 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>')`
              }}
            />
            <h3 className="relative z-10">
              CopymAgent AI has achieved 23% better accuracy in predicting asset appreciation vs traditional market analysis tools.
            </h3>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection; 