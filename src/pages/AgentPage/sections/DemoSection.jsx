import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SmartToy,
  Token,
  Storefront,
  Psychology,
  Assessment,
  Verified,
  Speed,
  Diamond,
  AccountBalance,
  MonetizationOn,
  Analytics,
  TrendingUp,
  Security,
  CheckCircle,
  Warning,
  Timer,
  FlashOn,
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
  Storefront as StorefrontIcon,
  Factory,
  LocalShipping,
  Inventory,
  Assessment as AssessmentIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown,
  Speed as SpeedIcon,
  Security as SecurityIcon,
  VerifiedUser as VerifiedUserIcon,
  AccountBalance as AccountBalanceIcon,
  MonetizationOn as MonetizationOnIcon,
  PsychologyAlt,
  Bolt,
  Shield,
  Group,
  Public,
  RocketLaunch,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Timer as TimerIcon,
  FlashOn as FlashOnIcon,
  WorkspacePremium as WorkspacePremiumIcon,
  VerifiedUser as VerifiedUserIconAlt,
  AccountBalanceWallet as AccountBalanceWalletIcon,
  CompareArrows as CompareArrowsIcon,
  ShowChart as ShowChartIcon,
  Timeline as TimelineIcon,
  Dashboard as DashboardIcon,
  Language as LanguageIcon,
  MyLocation as MyLocationIcon,
  PhoneAndroid as PhoneAndroidIcon,
  Handshake as HandshakeIcon,
  BarChart as BarChartIcon,
  Extension as ExtensionIcon,
  Help as HelpIcon,
  LocalBar
} from '@mui/icons-material';

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState('tokenization');
  const [tokenizationProgress, setTokenizationProgress] = useState(0);
  const [isTokenizing, setIsTokenizing] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [aiAnalysis, setAIAnalysis] = useState(null);
  const [portfolioData, setPortfolioData] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiRecommendations, setAIRecommendations] = useState([]);
  const [marketData, setMarketData] = useState(null);
  const [userProfile, setUserProfile] = useState({
    riskTolerance: 'moderate',
    investmentGoals: 'growth',
    timeHorizon: '5-10 years',
    preferredAssets: ['real-estate', 'luxury-goods']
  });

  const progressRef = useRef(null);

  const demoAssets = [
    {
      id: 'luxury-watch-001',
      name: 'Rolex Submariner Collection',
      type: 'Luxury Watch',
      value: 500000,
      change: '+12.5%',
      risk: 'Low',
      aiScore: 87,
      description: 'Premium timepiece collection with strong historical performance',
      tokenPrice: 100,
      availableTokens: 5000,
      marketCap: 500000,
      volume24h: 25000,
      holders: 1250,
      sentiment: 'bullish',
      recommendation: 'Strong Buy',
      confidence: 94,
      image: '/assets/Images/luxury-watch.jpg',
      blockchain: 'Ethereum',
      smartContract: '0x1234...5678',
      verificationStatus: 'verified',
      insurance: 'insured',
      storage: 'Swiss vault',
      authenticity: 'certified'
    },
    {
      id: 'real-estate-001',
      name: 'Manhattan Commercial Property',
      type: 'Real Estate',
      value: 2500000,
      change: '+8.2%',
      risk: 'Medium',
      aiScore: 92,
      description: 'Prime location commercial real estate with stable income',
      tokenPrice: 100,
      availableTokens: 25000,
      marketCap: 2500000,
      volume24h: 125000,
      holders: 3200,
      sentiment: 'bullish',
      recommendation: 'Buy',
      confidence: 89,
      image: '/assets/Images/apartment-complex.png',
      blockchain: 'Polygon',
      smartContract: '0xabcd...efgh',
      verificationStatus: 'verified',
      insurance: 'insured',
      storage: 'Digital registry',
      authenticity: 'certified'
    },
    {
      id: 'art-collection-001',
      name: 'Modern Art Portfolio',
      type: 'Fine Art',
      value: 750000,
      change: '+15.3%',
      risk: 'High',
      aiScore: 78,
      description: 'Curated collection of contemporary artworks',
      tokenPrice: 100,
      availableTokens: 7500,
      marketCap: 750000,
      volume24h: 45000,
      holders: 890,
      sentiment: 'neutral',
      recommendation: 'Hold',
      confidence: 76,
      image: '/assets/Images/digital-art-collection-1.png',
      blockchain: 'Ethereum',
      smartContract: '0x9876...5432',
      verificationStatus: 'verified',
      insurance: 'insured',
      storage: 'Climate-controlled facility',
      authenticity: 'certified'
    },
    {
      id: 'wine-collection-001',
      name: 'Bordeaux Wine Collection',
      type: 'Wine Investment',
      value: 300000,
      change: '+6.8%',
      risk: 'Medium',
      aiScore: 84,
      description: 'Premium vintage wines with appreciation potential',
      tokenPrice: 100,
      availableTokens: 3000,
      marketCap: 300000,
      volume24h: 18000,
      holders: 650,
      sentiment: 'bullish',
      recommendation: 'Buy',
      confidence: 82,
      image: '/assets/Images/wine-collection.jpg',
      blockchain: 'Polygon',
      smartContract: '0xdcba...1234',
      verificationStatus: 'verified',
      insurance: 'insured',
      storage: 'Temperature-controlled cellar',
      authenticity: 'certified'
    }
  ];

  const demoData = {
    selectedAsset: 'luxury-watch-001',
    assetValue: 500000,
    portfolioValue: 1250000,
    predictionAccuracy: 94
  };

  // Tokenization Process
  const startTokenization = async (asset) => {
    setIsTokenizing(true);
    setSelectedAsset(asset);
    setTokenizationProgress(0);

    const steps = [
      { name: 'Asset Verification', duration: 2000 },
      { name: 'Smart Valuation', duration: 1500 },
      { name: 'Blockchain Deployment', duration: 2500 },
      { name: 'Token Generation', duration: 1000 },
      { name: 'Market Listing', duration: 1500 }
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, steps[i].duration));
      setTokenizationProgress(((i + 1) / steps.length) * 100);
    }

    setIsTokenizing(false);
    // Generate AI analysis after tokenization
    generateAIAnalysis(asset);
  };

  // AI Analysis Generation
  const generateAIAnalysis = async (asset) => {
    setIsAnalyzing(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setAIAnalysis({
      technicalAnalysis: {
        trend: 'bullish',
        support: asset.value * 0.95,
        resistance: asset.value * 1.15,
        rsi: 65,
        macd: 'positive',
        volume: 'increasing'
      },
      fundamentalAnalysis: {
        marketCap: asset.marketCap,
        peRatio: 15.2,
        growthRate: 12.5,
        dividendYield: 3.2,
        debtRatio: 0.25
      },
      sentimentAnalysis: {
        social: 'positive',
        news: 'neutral',
        institutional: 'bullish',
        retail: 'positive'
      },
      riskAssessment: {
        marketRisk: asset.risk === 'Low' ? 'Low' : asset.risk === 'Medium' ? 'Medium' : 'High',
        liquidityRisk: 'Low',
        regulatoryRisk: 'Low',
        technologyRisk: 'Low'
      },
      recommendations: [
        'Consider increasing position size by 20%',
        'Monitor market sentiment for optimal entry points',
        'Diversify across similar asset classes',
        'Set stop-loss at 5% below current value'
      ]
    });
    
    setIsAnalyzing(false);
  };

  // Portfolio Analysis
  const analyzePortfolio = async () => {
    setIsAnalyzing(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setPortfolioData({
      totalValue: 1250000,
      totalReturn: 23.5,
      monthlyReturn: 8.7,
      riskScore: 65,
      diversification: 85,
      assetAllocation: [
        { name: 'Real Estate', percentage: 40, value: 500000, change: '+12.3%' },
        { name: 'Luxury Goods', percentage: 30, value: 375000, change: '+15.7%' },
        { name: 'Fine Art', percentage: 20, value: 250000, change: '+8.2%' },
        { name: 'Wine Investment', percentage: 10, value: 125000, change: '+6.8%' }
      ],
              performance: {
          'vsS&P500': '+15.2%',
          'vsRealEstate': '+8.7%',
          'vsArtMarket': '+12.3%',
          'volatility': 'Low'
        }
    });
    
    setIsAnalyzing(false);
  };

  // Market Data Simulation
  useEffect(() => {
    const updateMarketData = () => {
      setMarketData({
        totalMarketCap: 16500000000,
        dailyVolume: 125000000,
        activeAssets: 1250,
        averageReturn: 18.7,
        marketSentiment: 'bullish',
        trendingAssets: demoAssets.slice(0, 3)
      });
    };

    updateMarketData();
    const interval = setInterval(updateMarketData, 5000);
    return () => clearInterval(interval);
  }, []);

  // AI Recommendations
  useEffect(() => {
    const generateRecommendations = () => {
      setAIRecommendations([
        {
          type: 'buy',
          asset: demoAssets[0],
          reason: 'Strong fundamentals and positive market sentiment',
          confidence: 94,
          expectedReturn: 15.2
        },
        {
          type: 'hold',
          asset: demoAssets[2],
          reason: 'Wait for better entry point',
          confidence: 76,
          expectedReturn: 8.5
        },
        {
          type: 'sell',
          asset: demoAssets[3],
          reason: 'Consider profit taking',
          confidence: 82,
          expectedReturn: -2.1
        }
      ]);
    };

    generateRecommendations();
  }, []);

  const handleInvestRedirect = () => {
    window.open('https://copymai.ai/invest', '_blank');
  };

  return (
    <section 
      id="demo" 
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32"
      style={{
        background: 'black'
      }}
    >
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(74, 222, 128, 0.03) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="brand-section-title mb-4 sm:mb-6 text-white flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span>CopymAgent AI Workspace</span>
            <div className="filter drop-shadow-lg">
              <SmartToy sx={{ fontSize: '1.5rem', color: '#10b981' }} />
            </div>
          </h2>
          <p className="brand-description max-w-2xl mx-auto text-gray-300 px-4">
            Experience the future of AI-powered asset tokenization and investment management
          </p>
        </motion.div>

        {/* Demo Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 flex-wrap">
          {[
            { id: 'tokenization', icon: <Token />, label: 'AI Tokenization' },
            { id: 'advisor', icon: <SmartToy />, label: 'CopymAgent AI' },
            { id: 'portfolio', icon: <Assessment />, label: 'Portfolio AI' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveDemo(tab.id)}
              className={`px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl cursor-pointer transition-all duration-300 ease-out font-semibold flex items-center gap-2 min-w-32 sm:min-w-40 lg:min-w-48 justify-center text-sm sm:text-base ${activeDemo === tab.id
                  ? 'btn-gradient text-black shadow-lg shadow-green-400/30 -translate-y-1'
                  : 'btn-gradient-secondary text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/20'
              }`}
            >
              <div className={`transition-all duration-300 ease-out ${activeDemo === tab.id ? 'scale-110' : 'group-hover:scale-110'
              }`}>
                {tab.icon}
              </div>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <div className="space-y-8 sm:space-y-12 mb-8 sm:mb-12">
          
          {/* Tokenization Panel */}
          {activeDemo === 'tokenization' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8 sm:space-y-12"
            >
              <h3 className="brand-card-title text-white text-center mb-8 sm:mb-12">
                AI-Powered Asset Tokenization Process
              </h3>
              
              {/* Asset Selection Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
                {demoAssets.map((asset, index) => (
                  <motion.div
                    key={asset.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 cursor-pointer group"
                    onClick={() => startTokenization(asset)}
                  >
                    <div className="text-center">
                      <div className="mb-4">
                        {asset.type === 'Luxury Watch' && <Diamond sx={{ fontSize: 32, color: '#10b981' }} />}
                        {asset.type === 'Real Estate' && <Apartment sx={{ fontSize: 32, color: '#10b981' }} />}
                        {asset.type === 'Fine Art' && <Star sx={{ fontSize: 32, color: '#10b981' }} />}
                        {asset.type === 'Wine Investment' && <LocalBar sx={{ fontSize: 32, color: '#10b981' }} />}
                      </div>
                      <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">{asset.name}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm mb-3">{asset.type}</p>
                      <div className="text-green-400 font-bold text-lg sm:text-xl">${asset.value.toLocaleString()}</div>
                      <div className="text-green-400 text-sm">{asset.change}</div>
                      <div className="mt-3 text-xs text-gray-500">AI Score: {asset.aiScore}%</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tokenization Progress */}
              {isTokenizing && selectedAsset && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 sm:p-8"
                >
                  <h4 className="text-white font-semibold mb-6 text-center">Tokenizing: {selectedAsset.name}</h4>
                  
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Progress</span>
                      <span>{Math.round(tokenizationProgress)}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <motion.div
                        ref={progressRef}
                        className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${tokenizationProgress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Tokenization Steps */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {[
                      { icon: <Verified sx={{ color: '#10b981' }} />, title: 'Asset Verification', status: tokenizationProgress >= 20 },
                      { icon: <Speed sx={{ color: '#10b981' }} />, title: 'Smart Valuation', status: tokenizationProgress >= 40 },
                      { icon: <Token sx={{ color: '#10b981' }} />, title: 'Blockchain Deploy', status: tokenizationProgress >= 60 },
                      { icon: <MonetizationOn sx={{ color: '#10b981' }} />, title: 'Token Generation', status: tokenizationProgress >= 80 },
                      { icon: <Storefront sx={{ color: '#10b981' }} />, title: 'Market Listing', status: tokenizationProgress >= 100 }
                    ].map((step, index) => (
                      <div key={index} className="text-center">
                        <div className={`mb-2 transition-all duration-300 ${step.status ? 'scale-110' : 'opacity-50'}`}>
                          {step.icon}
                        </div>
                        <div className={`text-xs sm:text-sm ${step.status ? 'text-green-400' : 'text-gray-500'}`}>
                          {step.title}
                        </div>
                        {step.status && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-green-400 rounded-full mx-auto mt-1"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* AI Analysis Results */}
              {aiAnalysis && !isAnalyzing && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 sm:p-8"
                >
                  <h4 className="text-white font-semibold mb-6">AI Analysis Results</h4>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Technical Analysis */}
                    <div>
                      <h5 className="text-green-400 font-semibold mb-3">Technical Analysis</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Trend:</span>
                          <span className="text-green-400">{aiAnalysis.technicalAnalysis.trend}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">RSI:</span>
                          <span className="text-green-400">{aiAnalysis.technicalAnalysis.rsi}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">MACD:</span>
                          <span className="text-green-400">{aiAnalysis.technicalAnalysis.macd}</span>
                        </div>
                      </div>
                    </div>

                    {/* Risk Assessment */}
                    <div>
                      <h5 className="text-yellow-400 font-semibold mb-3">Risk Assessment</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Market Risk:</span>
                          <span className="text-yellow-400">{aiAnalysis.riskAssessment.marketRisk}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Liquidity Risk:</span>
                          <span className="text-green-400">{aiAnalysis.riskAssessment.liquidityRisk}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Regulatory Risk:</span>
                          <span className="text-green-400">{aiAnalysis.riskAssessment.regulatoryRisk}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI Recommendations */}
                  <div className="mt-6">
                    <h5 className="text-blue-400 font-semibold mb-3">AI Recommendations</h5>
                    <div className="space-y-2">
                      {aiAnalysis.recommendations.map((rec, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle sx={{ fontSize: 16, color: '#10b981', marginTop: '2px' }} />
                          <span className="text-gray-300">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* AI Advisor Panel */}
          {activeDemo === 'advisor' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <h3 className="brand-card-title text-white text-center mb-12">
                CopymAgent AI Investment Advisor
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* AI Recommendations */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
                  <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                    <SmartToy sx={{ color: '#10b981' }} />
                    AI Recommendations
                  </h4>
                  
                  <div className="space-y-4">
                    {aiRecommendations.map((rec, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-gray-700 rounded-lg border-l-4"
                        style={{
                          borderLeftColor: rec.type === 'buy' ? '#10b981' : rec.type === 'hold' ? '#f59e0b' : '#ef4444'
                        }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h5 className="text-white font-medium">{rec.asset.name}</h5>
                            <p className="text-gray-400 text-sm">{rec.asset.type}</p>
                          </div>
                          <div className="text-right">
                            <div className={`font-bold text-sm ${
                              rec.type === 'buy' ? 'text-green-400' : 
                              rec.type === 'hold' ? 'text-yellow-400' : 'text-red-400'
                            }`}>
                              {rec.type.toUpperCase()}
                            </div>
                            <div className="text-green-400 text-sm">{rec.expectedReturn}%</div>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm">{rec.reason}</p>
                        <div className="mt-2 text-xs text-gray-400">Confidence: {rec.confidence}%</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Market Data */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
                  <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                    <Analytics sx={{ color: '#3b82f6' }} />
                    Market Overview
                  </h4>
                  
                  {marketData && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-gray-700 rounded-lg">
                          <div className="text-green-400 font-bold text-lg">${(marketData.totalMarketCap / 1000000000).toFixed(1)}B</div>
                          <div className="text-gray-400 text-sm">Total Market Cap</div>
                        </div>
                        <div className="text-center p-3 bg-gray-700 rounded-lg">
                          <div className="text-blue-400 font-bold text-lg">{marketData.averageReturn}%</div>
                          <div className="text-gray-400 text-sm">Avg Return</div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-gray-700 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-400 text-sm">Market Sentiment</span>
                          <span className={`text-sm font-semibold ${
                            marketData.marketSentiment === 'bullish' ? 'text-green-400' : 
                            marketData.marketSentiment === 'bearish' ? 'text-red-400' : 'text-yellow-400'
                          }`}>
                            {marketData.marketSentiment}
                          </span>
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-2">
                          <div className={`h-2 rounded-full ${
                            marketData.marketSentiment === 'bullish' ? 'bg-green-400' : 
                            marketData.marketSentiment === 'bearish' ? 'bg-red-400' : 'bg-yellow-400'
                          }`} style={{ width: '75%' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Portfolio AI Panel */}
          {activeDemo === 'portfolio' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <h3 className="brand-card-title text-white text-center mb-12">
                AI-Powered Portfolio Management
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Portfolio Summary */}
                <div className="lg:col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
                  <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                    <Dashboard sx={{ color: '#10b981' }} />
                    Portfolio Overview
                  </h4>
                  
                  {portfolioData ? (
                    <>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div className="text-center p-3 bg-gray-700 rounded-lg">
                          <div className="text-green-400 font-bold text-lg">${(portfolioData.totalValue / 1000000).toFixed(1)}M</div>
                          <div className="text-gray-400 text-sm">Total Value</div>
                        </div>
                        <div className="text-center p-3 bg-gray-700 rounded-lg">
                          <div className="text-green-400 font-bold text-lg">+{portfolioData.totalReturn}%</div>
                          <div className="text-gray-400 text-sm">Total Return</div>
                        </div>
                        <div className="text-center p-3 bg-gray-700 rounded-lg">
                          <div className="text-blue-400 font-bold text-lg">{portfolioData.riskScore}</div>
                          <div className="text-gray-400 text-sm">Risk Score</div>
                        </div>
                        <div className="text-center p-3 bg-gray-700 rounded-lg">
                          <div className="text-purple-400 font-bold text-lg">{portfolioData.diversification}%</div>
                          <div className="text-gray-400 text-sm">Diversification</div>
                        </div>
                      </div>

                      {/* Asset Allocation */}
                      <div>
                        <h5 className="text-white font-medium mb-4">Asset Allocation</h5>
                        <div className="space-y-3">
                          {portfolioData.assetAllocation.map((allocation, index) => (
                            <div key={index} className="flex items-center gap-4">
                              <div className="flex-1 bg-gray-700 rounded-full h-3">
                                <div 
                                  className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-1000"
                                  style={{ width: `${allocation.percentage}%` }}
                                />
                              </div>
                              <div className="text-right min-w-[120px]">
                                <div className="text-white text-sm">{allocation.name}</div>
                                <div className="text-green-400 text-sm">{allocation.change}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <button
                      onClick={analyzePortfolio}
                      disabled={isAnalyzing}
                      className="w-full btn-gradient py-3 px-6 rounded-lg font-semibold transition-all duration-300 ease-out hover:-translate-y-1"
                    >
                      {isAnalyzing ? 'Analyzing Portfolio...' : 'Analyze Portfolio'}
                    </button>
                  )}
                </div>

                {/* Performance Comparison */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
                  <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                    <CompareArrows sx={{ color: '#3b82f6' }} />
                    Performance vs Benchmarks
                  </h4>
                  
                  {portfolioData && (
                    <div className="space-y-4">
                      {Object.entries(portfolioData.performance).map(([benchmark, performance]) => (
                        <div key={benchmark} className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                          <span className="text-gray-300 text-sm">{benchmark}</span>
                          <span className={`font-semibold ${
                            performance.includes('+') ? 'text-green-400' : 
                            performance.includes('-') ? 'text-red-400' : 'text-gray-400'
                          }`}>
                            {performance}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <button 
            onClick={handleInvestRedirect}
            className="btn-gradient py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 ease-out hover:-translate-y-1 mb-4"
          >
            Start Your AI Investment Journey
          </button>
          <p className="text-gray-400">
            Join 5,000+ investors already using CopymAgent AI to grow their wealth
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection; 