import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  AttachMoney,
  AcUnit,
  Psychology,
  Link,
  ShoppingCart,
  SmartToy,
  CheckCircle,
  Percent,
  Assessment,
  Security,
  TrendingUp,
  Business,
  Palette,
  LocalBar,
  AccountBalance,
  Diamond,
  AutoAwesome,
  Speed,
  Group,
  Construction,
  Verified,
  Launch,
  TrendingDown,
  Star,
  Warning,
  Schedule,
  AccessTime,
  Bolt,
  TrendingUp as TrendingUpIcon,
  CheckCircleOutline,
  Cancel,
  FlashOn,
  Timer,
  MonetizationOn,
  PsychologyAlt,
  Speed as SpeedIcon,
  Shield,
  Analytics,
  Dashboard,
  CompareArrows,
  ShowChart,
  Timeline,
  Assessment as AssessmentIcon,
  AccountBalanceWallet,
  VerifiedUser,
  Security as SecurityIcon,
  WorkspacePremium,
  VerifiedUser as VerifiedUserIcon,
  AccountBalance as AccountBalanceIcon,
  Speed as SpeedIconAlt,
  Psychology as PsychologyIcon,
  Assessment as AssessmentIconAlt,
  Security as SecurityIconAlt,
  TrendingUp as TrendingUpIconAlt,
  MonetizationOn as MonetizationOnIcon,
  FlashOn as FlashOnIcon,
  Warning as WarningIcon,
  Timer as TimerIcon,
  PsychologyAlt as PsychologyAltIcon,
  Bolt as BoltIcon,
  Shield as ShieldIcon,
  Analytics as AnalyticsIcon,
  Dashboard as DashboardIcon,
  CompareArrows as CompareArrowsIcon,
  ShowChart as ShowChartIcon,
  Timeline as TimelineIcon,
  Assessment as AssessmentIconAlt2,
  AccountBalanceWallet as AccountBalanceWalletIcon,
  VerifiedUser as VerifiedUserIconAlt,
  Security as SecurityIconAlt2,
  CorporateFare,
  Architecture,
  PrecisionManufacturing,
  Science,
  Biotech,
  Psychology as PsychologyIconAlt,
  School,
  Work,
  BusinessCenter,
  Apartment,
  Storefront,
  Factory,
  LocalShipping,
  Inventory,
  Assessment as AssessmentIconAlt3,
  TrendingUp as TrendingUpIconAlt2,
  TrendingDown as TrendingDownIcon,
  Speed as SpeedIconAlt2,
  Security as SecurityIconAlt3,
  VerifiedUser as VerifiedUserIconAlt2,
  AccountBalance as AccountBalanceIconAlt,
  MonetizationOn as MonetizationOnIconAlt,
  PsychologyAlt as PsychologyAltIconAlt,
  Bolt as BoltIconAlt,
  Shield as ShieldIconAlt,
  Analytics as AnalyticsIconAlt,
  Dashboard as DashboardIconAlt,
  CompareArrows as CompareArrowsIconAlt,
  ShowChart as ShowChartIconAlt,
  Timeline as TimelineIconAlt,
  Assessment as AssessmentIconAlt4,
  AccountBalanceWallet as AccountBalanceWalletIconAlt,
  VerifiedUser as VerifiedUserIconAlt3,
  Security as SecurityIconAlt4,
  MyLocation,
  PhoneAndroid,
  Language,
  Public,
  Handshake,
  BarChart,
  Token,
  Extension,
  RocketLaunch,
  Help
} from '@mui/icons-material';

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleInvestRedirect = () => {
    window.open('https://copymai.ai/invest', '_blank');
  };

  const handleContactRedirect = () => {
    window.open('https://copymai.ai/contact', '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const problems = [
    {
      icon: <AttachMoney sx={{ fontSize: 40, color: '#ef4444' }} />,
      title: 'Too Expensive',
      description: 'Most people can\'t afford the high minimum investment (e.g., $10,000+)'
    },
    {
      icon: <AcUnit sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Illiquid',
      description: 'You can\'t buy or sell easily; it takes weeks/months'
    },
    {
      icon: <Psychology sx={{ fontSize: 40, color: '#8b5cf6' }} />,
      title: 'Complex',
      description: 'Requires deep knowledge and manual analysis'
    }
  ];

  const solutions = [
    {
      icon: <Token sx={{ fontSize: 40, color: '#10b981' }} />,
      title: 'AI Tokenization Engine',
      description: 'Converts real-world assets into secure, blockchain-based tokens using advanced AI'
    },
    {
      icon: <Storefront sx={{ fontSize: 40, color: '#f59e0b' }} />,
      title: 'Integrated Marketplace',
      description: 'Buy/sell/trade fractional ownership instantly with AI-powered matching'
    },
    {
      icon: <Psychology sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'CopymAgent Advisor',
      description: 'Our AI agent recommends the best assets for you using smart analytics'
    }
  ];

  const features = [
    {
      icon: <CheckCircle sx={{ fontSize: 40, color: '#10b981' }} />,
      title: 'Smart Asset Verification',
      description: 'CopymAI + human experts verify every asset\'s value and authenticity'
    },
    {
      icon: <Percent sx={{ fontSize: 40, color: '#f59e0b' }} />,
      title: 'Fractional Ownership',
      description: 'Start investing with as little as $100 through AI-powered tokenization'
    },
    {
      icon: <Assessment sx={{ fontSize: 40, color: '#3b82f6' }} />,
      title: 'Predictive AI Analytics',
      description: 'Our AI predicts which assets will grow in value with 23% better accuracy'
    },
    {
      icon: <Security sx={{ fontSize: 40, color: '#ef4444' }} />,
      title: 'Secure AI Wallet',
      description: 'Bank-level security for storing your tokens with AI-powered fraud detection'
    }
  ];

  const revenueStreams = [
    {
      title: 'AI Tokenization Fee',
      percentage: '2.5%',
      description: 'Fee for AI-powered asset conversion to tokens'
    },
    {
      title: 'Transaction Fee',
      percentage: '1%',
      description: 'Marketplace trading fee with AI optimization'
    },
    {
      title: 'CopymAgent Premium',
      percentage: '$29–$299/month',
      description: 'Advanced AI insights and personalized recommendations'
    },
    {
      title: 'Asset Management',
      percentage: '0.75%',
      description: 'Annual AI-powered portfolio management fee'
    }
  ];

  const marketStats = [
    { number: '$16T', label: 'Total RWA Value by 2025' },
    { number: '43%', label: 'CAGR Growth Rate' },
    { number: '$1.5B', label: 'Year 1 Target Market' },
    { number: '23%', label: 'Better AI Accuracy' }
  ];

  const roadmapItems = [
    {
      quarter: 'Q1 2024',
      items: [
        { icon: <CheckCircle sx={{ fontSize: 20, color: '#4ade80' }} />, text: 'Raise $3.5M Seed' },
        { icon: <Launch sx={{ fontSize: 20, color: '#3b82f6' }} />, text: 'CopymAI MVP launch' },
        { icon: <Diamond sx={{ fontSize: 20, color: '#4ade80' }} />, text: 'First 10 assets onboarded' }
      ]
    },
    {
      quarter: 'Q3 2024',
      items: [
        { icon: <SmartToy sx={{ fontSize: 20, color: '#3b82f6' }} />, text: 'CopymAgent Beta Release' },
        { icon: <MyLocation sx={{ fontSize: 20, color: '#4ade80' }} />, text: '100+ tokenized assets' },
        { icon: <Group sx={{ fontSize: 20, color: '#3b82f6' }} />, text: '5,000 active users' }
      ]
    },
    {
      quarter: 'Q1 2025',
      items: [
        { icon: <AccountBalance sx={{ fontSize: 20, color: '#4ade80' }} />, text: 'Raise $12M Series A' },
        { icon: <PhoneAndroid sx={{ fontSize: 20, color: '#3b82f6' }} />, text: 'CopymAI mobile app launch' },
        { icon: <Language sx={{ fontSize: 20, color: '#4ade80' }} />, text: 'Add more asset classes' }
      ]
    },
    {
      quarter: 'Q4 2025',
      items: [
        { icon: <Public sx={{ fontSize: 20, color: '#3b82f6' }} />, text: 'Global expansion' },
        { icon: <Handshake sx={{ fontSize: 20, color: '#4ade80' }} />, text: 'Enterprise partnerships' },
        { icon: <BarChart sx={{ fontSize: 20, color: '#3b82f6' }} />, text: 'Advanced AI portfolio tools' }
      ]
    }
  ];

  const comparisonData = [
    {
      feature: 'AI-Powered Guidance',
      copymAI: '✅ CopymAgent Advanced',
      traditional: '❌ None or Basic'
    },
    {
      feature: 'Min Investment',
      copymAI: '💲$100',
      traditional: '💲10K+'
    },
    {
      feature: 'Asset Verification',
      copymAI: '✅ AI + Experts',
      traditional: '❌ Manual / Basic'
    },
    {
      feature: 'Liquidity',
      copymAI: '⚡ Instant AI trades',
      traditional: '🕓 Weeks/months'
    },
    {
      feature: 'Portfolio Tools',
      copymAI: '🔁 CopymAgent Optimized',
      traditional: '🧍Manual or Limited'
    }
  ];

  const demoAssets = [
    {
      id: 'luxury-watch',
      name: 'Rolex Submariner Collection',
      type: 'Luxury Watch',
      value: 500000,
      change: '+12.5%',
      risk: 'Low',
      aiScore: 87,
      description: 'Premium timepiece collection with strong historical performance'
    },
    {
      id: 'real-estate',
      name: 'Manhattan Commercial Property',
      type: 'Real Estate',
      value: 2500000,
      change: '+8.2%',
      risk: 'Medium',
      aiScore: 92,
      description: 'Prime location commercial real estate with stable income'
    },
    {
      id: 'art-collection',
      name: 'Modern Art Portfolio',
      type: 'Fine Art',
      value: 750000,
      change: '+15.3%',
      risk: 'High',
      aiScore: 78,
      description: 'Curated collection of contemporary artworks'
    },
    {
      id: 'wine-collection',
      name: 'Bordeaux Wine Collection',
      type: 'Wine Investment',
      value: 300000,
      change: '+6.8%',
      risk: 'Medium',
      aiScore: 84,
      description: 'Premium vintage wines with appreciation potential'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Investment Director',
      company: 'Venture Capital Partners',
      content: 'CopymAI democratizes high-value asset investment. The AI predictions have consistently outperformed traditional analysis by 23%.',
      avatar: <AccountBalance sx={{ fontSize: 40 }} />
    },
    {
      name: 'Michael Rodriguez',
      role: 'Portfolio Manager',
      company: 'Wealth Management Group',
      content: 'Finally, a platform that makes RWA investment accessible to everyone. CopymAI\'s tokenization process is seamless and secure.',
      avatar: <AutoAwesome sx={{ fontSize: 40 }} />
    },
    {
      name: 'Emily Thompson',
      role: 'Chief Technology Officer',
      company: 'FinTech Solutions',
      content: 'The CopymAgent AI provides unprecedented insights into asset performance. This is the future of investment platforms.',
      avatar: <Palette sx={{ fontSize: 40 }} />
    }
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 to-pink-500 origin-left z-50 shadow-lg shadow-green-400/50"
        style={{ scaleX }} 
      />

      {/* Hero Section */}
      <section 
        id="hero" 
        className="min-h-screen flex items-center justify-center text-center px-8 py-16 relative overflow-hidden"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto relative z-10"
        >
          <h1 
            className="brand-title mb-6 leading-tight tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #e0e0e0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
              animation: 'heroTitleGlow 3s ease-in-out infinite alternate'
            }}
          >
            Introducing CopymAI
          </h1>
          
          <h2 className="brand-section-title mb-10 text-green-400 leading-tight tracking-tight">
            Revolutionizing Real-World Asset Investment
          </h2>
          
          <p className="brand-description mb-16 text-gray-300 max-w-4xl mx-auto leading-relaxed tracking-wide">
            We're building a next-gen AI-powered investment platform that uses artificial intelligence and blockchain to make investing in high-value real-world assets 
            (like real estate, art, or rare collectibles) easy, accessible, and profitable — even for everyday investors.
          </p>
          
          <div className="flex gap-6 justify-center mb-20 flex-wrap">
            <button 
              onClick={handleInvestRedirect} 
              className="btn-gradient min-w-[200px] relative overflow-hidden transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-green-400/40 active:scale-95"
            >
              <span className="relative z-10">Invest in Assets</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-full" />
            </button>
            
            <button 
              className="btn-gradient-secondary min-w-[200px] relative overflow-hidden transition-all duration-400 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 active:scale-95"
              onClick={handleContactRedirect}
            >
              <span className="relative z-10">Partner With CopymAI</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-full" />
            </button>
          </div>
          

        </motion.div>
      </section>

      <style jsx>{`
        @keyframes heroTitleGlow {
          0% {
            filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
          }
          100% {
            filter: drop-shadow(0 0 40px rgba(74, 222, 128, 0.5));
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
