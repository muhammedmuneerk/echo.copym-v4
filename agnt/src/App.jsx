// src/App.jsx
import React, { useState, useEffect } from 'react';
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
  // Additional professional icons
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
import './index.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeDemo, setActiveDemo] = useState('tokenization');
  const [activeMatrixTab, setActiveMatrixTab] = useState('performance');

  const [demoData, setDemoData] = useState({
    assetValue: 500000,
    investmentAmount: 1000,
    predictionAccuracy: 87,
    portfolioValue: 15420,
    selectedAsset: 'luxury-watch'
  });

  // Handle matrix tab switching
  useEffect(() => {
    const handleTabClick = (e) => {
      if (e.target.classList.contains('matrix-tab')) {
        const tab = e.target.getAttribute('data-tab');
        setActiveMatrixTab(tab);
        
        // Update active tab styling
        document.querySelectorAll('.matrix-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        
        // Show/hide corresponding metrics
        document.querySelectorAll('.matrix-grid').forEach(grid => {
          grid.classList.add('hidden');
        });
        const targetGrid = document.getElementById(`${tab}-metrics`);
        if (targetGrid) {
          targetGrid.classList.remove('hidden');
        }
      }
    };

    document.addEventListener('click', handleTabClick);
    return () => document.removeEventListener('click', handleTabClick);
  }, []);


  const handleInvestRedirect = () => {
    // Redirect to CopymAI investment platform
    window.open('https://copymai.ai/invest', '_blank');
  };

  const handleContactRedirect = () => {
    // Redirect to contact/partnership page
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
      icon: <Link sx={{ fontSize: 40, color: '#10b981' }} />,
      title: 'AI Tokenization Engine',
      description: 'Converts real-world assets into secure, blockchain-based tokens using advanced AI'
    },
    {
      icon: <ShoppingCart sx={{ fontSize: 40, color: '#f59e0b' }} />,
      title: 'Integrated Marketplace',
      description: 'Buy/sell/trade fractional ownership instantly with AI-powered matching'
    },
    {
      icon: <SmartToy sx={{ fontSize: 40, color: '#3b82f6' }} />,
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
    <div className="app">
      {/* Scroll progress bar */}
      <motion.div className="progress-bar" style={{ scaleX }} />



      {/* Hero Section */}
      <section id="hero" className="hero">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1>Introducing CopymAI</h1>
          <h2>Revolutionizing Real-World Asset Investment</h2>
          <p className="hero-description">
            We're building a next-gen AI-powered investment platform that uses artificial intelligence and blockchain to make investing in high-value real-world assets 
            (like real estate, art, or rare collectibles) easy, accessible, and profitable — even for everyday investors.
          </p>
          <div className="hero-buttons">
            <button onClick={handleInvestRedirect} className="cta-button primary">
              Invest in Assets
            </button>
            <button className="cta-button secondary" onClick={handleContactRedirect}>
              Partner With CopymAI
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <strong>$16T</strong>
              <span>Total RWA Market</span>
            </div>
            <div className="stat-item">
              <strong>$100</strong>
              <span>Min Investment</span>
            </div>
            <div className="stat-item">
              <strong>23%</strong>
              <span>Better AI Accuracy</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="problem">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2><Extension sx={{ mr: 1, verticalAlign: 'middle' }} /> The Problem We Solve</h2>
            <p>Traditional RWA (Real-World Asset) investment is broken:</p>
          </motion.div>
          
          <div className="problems-grid">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="problem-card"
              >
                <div className="problem-icon">{problem.icon}</div>
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="problem-result"
          >
            <p><strong>Result?</strong> Great opportunities are missed by everyday investors.</p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="solution">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2><AutoAwesome sx={{ mr: 1, verticalAlign: 'middle' }} /> Our Solution: CopymAI-Powered Tokenization + Marketplace</h2>
            <p>We've built an AI-first platform that solves all this with three key components:</p>
          </motion.div>
          
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="solution-card"
              >
                <div className="solution-icon">{solution.icon}</div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>
              <Launch sx={{ mr: 1, verticalAlign: 'middle' }} />
              Key Features
            </h2>
            <p>Advanced AI and blockchain technology powering your investment journey</p>
          </motion.div>
          
          <div className="timeline-container">
            <div className="timeline-line">
              <div className="timeline-progress"></div>
            </div>
            
            <div className="timeline-features">
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="timeline-feature feature-1"
              >
                <div className="feature-icon">
                  <Verified sx={{ fontSize: 32, color: '#4ade80' }} />
                </div>
                <div className="feature-content">
                  <h3>Smart Asset Verification</h3>
                  <p>CopymAI + human experts verify every asset's value and authenticity</p>
                </div>
                <div className="feature-connector"></div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="timeline-feature feature-2"
              >
                <div className="feature-icon">
                  <Percent sx={{ fontSize: 32, color: '#f59e0b' }} />
          </div>
                <div className="feature-content">
                  <h3>Fractional Ownership</h3>
                  <p>Start investing with as little as $100 through AI-powered tokenization</p>
                </div>
                <div className="feature-connector"></div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="timeline-feature feature-3"
              >
                <div className="feature-icon">
                  <Security sx={{ fontSize: 32, color: '#ef4444' }} />
                </div>
                <div className="feature-content">
                  <h3>Secure AI Wallet</h3>
                  <p>Bank-level security for storing your tokens with AI-powered fraud detection</p>
                </div>
                <div className="feature-connector"></div>
              </motion.div>

              {/* Feature 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="timeline-feature feature-4"
              >
                <div className="feature-icon">
                  <Assessment sx={{ fontSize: 32, color: '#3b82f6' }} />
                </div>
                <div className="feature-content">
                  <h3>Predictive AI Analytics</h3>
                  <p>Our AI predicts which assets will grow in value with 23% better accuracy</p>
                </div>
                <div className="feature-connector"></div>
              </motion.div>
            </div>

            {/* Timeline Progress Indicators */}
            <div className="timeline-indicators">
              <div className="indicator active" data-step="1"></div>
              <div className="indicator" data-step="2"></div>
              <div className="indicator" data-step="3"></div>
              <div className="indicator" data-step="4"></div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="ai-accuracy"
          >
            <div className="accuracy-highlight">
              <h3>CopymAI has shown 23% better accuracy in predicting asset appreciation vs top market tools.</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="demo">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="demo-header"
          >
            <h2>Try CopymAI Demo</h2>
            <p>Experience the power of AI-driven asset investment</p>
          </motion.div>

          <div className="demo-tabs">
            <button
              className={`tab ${activeDemo === 'tokenization' ? 'active' : ''}`}
              onClick={() => setActiveDemo('tokenization')}
            >
              <Link sx={{ mr: 1, verticalAlign: 'middle' }} /> AI Tokenization
            </button>
            <button
              className={`tab ${activeDemo === 'advisor' ? 'active' : ''}`}
              onClick={() => setActiveDemo('advisor')}
            >
              <SmartToy sx={{ mr: 1, verticalAlign: 'middle' }} /> CopymAgent
            </button>
            <button
              className={`tab ${activeDemo === 'portfolio' ? 'active' : ''}`}
              onClick={() => setActiveDemo('portfolio')}
            >
              <Assessment sx={{ mr: 1, verticalAlign: 'middle' }} /> Portfolio Dashboard
            </button>
          </div>

          <div className="demo-content">
            {activeDemo === 'tokenization' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="demo-panel tokenization"
              >
                <h3>AI Asset Tokenization Process</h3>
                <div className="tokenization-steps">
                  <div className="step completed">
                    <div className="step-icon"><Verified sx={{ color: '#4ade80' }} /></div>
                    <div className="step-content">
                      <h4>Asset Verification</h4>
                      <p>AI analyzes and verifies asset authenticity</p>
                    </div>
                  </div>
                  <div className="step completed">
                    <div className="step-icon"><Speed sx={{ color: '#3b82f6' }} /></div>
                    <div className="step-content">
                      <h4>Smart Valuation</h4>
                      <p>AI determines current market value</p>
                    </div>
                  </div>
                  <div className="step active">
                    <div className="step-icon"><Link sx={{ color: '#4ade80' }} /></div>
                    <div className="step-content">
                      <h4>Tokenization</h4>
                      <p>Converting asset into blockchain tokens</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-icon"><ShoppingCart sx={{ color: '#3b82f6' }} /></div>
                    <div className="step-content">
                      <h4>Marketplace Listed</h4>
                      <p>Available for fractional investment</p>
                    </div>
                  </div>
                </div>
                <div className="tokenization-result">
                  <div className="asset-metrics-grid">
                    <div className="metric-card">
                      <div className="metric-icon">
                        <Diamond sx={{ fontSize: 32, color: '#4ade80' }} />
                      </div>
                      <div className="metric-content">
                        <h4>Selected Asset</h4>
                        <p className="metric-value">{demoAssets.find(a => a.id === demoData.selectedAsset)?.name}</p>
                      </div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-icon">
                        <AccountBalance sx={{ fontSize: 32, color: '#3b82f6' }} />
                      </div>
                      <div className="metric-content">
                        <h4>Total Value</h4>
                        <p className="metric-value">${demoData.assetValue.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-icon">
                        <Token sx={{ fontSize: 32, color: '#4ade80' }} />
                      </div>
                      <div className="metric-content">
                        <h4>Available Tokens</h4>
                        <p className="metric-value">{(demoData.assetValue / 100).toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-icon">
                        <MonetizationOn sx={{ fontSize: 32, color: '#3b82f6' }} />
                      </div>
                      <div className="metric-content">
                        <h4>Token Price</h4>
                        <p className="metric-value">$100 each</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeDemo === 'advisor' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="demo-panel advisor"
              >
                <h3>CopymAgent AI Recommendations</h3>
                <div className="advisor-interface">
                  <div className="chat-interface">
                    <div className="message bot">
                      <div className="avatar"><SmartToy sx={{ color: '#3b82f6' }} /></div>
                      <div className="content">
                        <p>Hello! I'm CopymAgent, your AI investment advisor. Based on your risk profile and investment goals, I've analyzed the market and found these recommendations:</p>
                      </div>
                    </div>
                    <div className="recommendations">
                      {demoAssets.map((asset) => (
                        <div key={asset.id} className="recommendation-card">
                          <div className="asset-info">
                            <h4>{asset.name}</h4>
                            <p className="asset-type">{asset.type}</p>
                          </div>
                          <div className="asset-metrics">
                            <div className="metric">
                              <span className="label">AI Score</span>
                              <span className="value">{asset.aiScore}/100</span>
                            </div>
                            <div className="metric">
                              <span className="label">Performance</span>
                              <span className={`value ${asset.change.includes('+') ? 'positive' : 'negative'}`}>
                                {asset.change}
                              </span>
                            </div>
                            <div className="metric">
                              <span className="label">Risk Level</span>
                              <span className={`value risk-${asset.risk.toLowerCase()}`}>{asset.risk}</span>
                            </div>
                          </div>
                          <button 
                            className="invest-btn"
                            onClick={() => setDemoData({ ...demoData, selectedAsset: asset.id })}
                          >
                            View Details
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeDemo === 'portfolio' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="demo-panel portfolio"
              >
                <h3>AI-Powered Portfolio Dashboard</h3>
                <div className="portfolio-dashboard">
                  <div className="portfolio-summary">
                    <div className="summary-card">
                      <div className="summary-icon">
                        <AccountBalance sx={{ fontSize: 32, color: '#4ade80' }} />
                      </div>
                      <div className="summary-content">
                      <h4>Total Portfolio Value</h4>
                      <p className="value">${demoData.portfolioValue.toLocaleString()}</p>
                      <p className="change positive">+8.7% this month</p>
                      </div>
                    </div>
                    <div className="summary-card">
                      <div className="summary-icon">
                        <Analytics sx={{ fontSize: 32, color: '#3b82f6' }} />
                      </div>
                      <div className="summary-content">
                      <h4>AI Accuracy</h4>
                      <p className="value">{demoData.predictionAccuracy}%</p>
                      <p className="change positive">+23% vs traditional</p>
                      </div>
                    </div>
                    <div className="summary-card">
                      <div className="summary-icon">
                        <TrendingUp sx={{ fontSize: 32, color: '#4ade80' }} />
                      </div>
                      <div className="summary-content">
                      <h4>Active Investments</h4>
                      <p className="value">12</p>
                      <p className="change">Across 4 asset classes</p>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-breakdown">
                    <h4>Asset Allocation</h4>
                    <div className="allocation-chart">
                      <div className="allocation-item">
                        <div className="allocation-bar">
                          <div className="bar real-estate" style={{ width: '40%' }}></div>
                        </div>
                        <span>Real Estate (40%)</span>
                      </div>
                      <div className="allocation-item">
                        <div className="allocation-bar">
                          <div className="bar luxury-goods" style={{ width: '30%' }}></div>
                        </div>
                        <span>Luxury Goods (30%)</span>
                      </div>
                      <div className="allocation-item">
                        <div className="allocation-bar">
                          <div className="bar art" style={{ width: '20%' }}></div>
                        </div>
                        <span>Fine Art (20%)</span>
                      </div>
                      <div className="allocation-item">
                        <div className="allocation-bar">
                          <div className="bar wine" style={{ width: '10%' }}></div>
                        </div>
                        <span>Wine Investment (10%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="demo-cta"
          >
            <button className="cta-button primary" onClick={handleInvestRedirect}>
              Start Investing with CopymAI
            </button>
            <p>Join 5,000+ investors already using AI to grow their wealth</p>
          </motion.div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="stats">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2><TrendingUp sx={{ mr: 1, verticalAlign: 'middle' }} /> Massive Market Potential</h2>
          </motion.div>
          
          <div className="stats-grid">
            {marketStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="stat-card"
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="business-model">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2><MonetizationOn sx={{ mr: 1, verticalAlign: 'middle' }} /> Business Model</h2>
            <p>Multiple AI-powered revenue streams with projected $18M/year by Year 3</p>
          </motion.div>
          
          <div className="revenue-grid">
            {revenueStreams.map((stream, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="revenue-card"
              >
                <div className="revenue-percentage">{stream.percentage}</div>
                <h3>{stream.title}</h3>
                <p>{stream.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="profitability"
          >
            <p><strong>Projected to be profitable by Q3 2025 with CopymAI's AI-driven efficiency</strong></p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="roadmap">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>
              <Public sx={{ fontSize: 32, marginRight: 1, color: '#4ade80' }} />
              Roadmap
            </h2>
            <p>Our strategic plan for CopymAI growth and AI advancement</p>
          </motion.div>
          
          <div className="roadmap-grid">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="roadmap-card"
              >
                <h3>{item.quarter}</h3>
                <ul>
                  {item.items.map((task, taskIndex) => (
                    <li key={taskIndex}>
                      {task.icon} {task.text}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Comparison Section */}
      <section id="comparison" className="comparison">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Why CopymAI is Different</h2>
            <p>Advanced AI-Powered Platform vs Traditional Investment Systems</p>
          </motion.div>
          
          <div className="comparison-container">
            {/* Advanced AI Comparison Matrix */}
            <div className="ai-comparison-matrix">
              <div className="matrix-header">
                <div className="matrix-title">
                  <WorkspacePremium sx={{ fontSize: 32, color: '#4ade80', marginRight: 1 }} />
                  <h3>AI-Powered Investment Matrix</h3>
                </div>
                <div className="matrix-controls">
                  <button className="matrix-tab active" data-tab="performance">
                    <TrendingUp sx={{ fontSize: 16, marginRight: 0.5 }} />
                    Performance
                  </button>
                  <button className="matrix-tab" data-tab="efficiency">
                    <Speed sx={{ fontSize: 16, marginRight: 0.5 }} />
                    Efficiency
                  </button>
                  <button className="matrix-tab" data-tab="security">
                    <Shield sx={{ fontSize: 16, marginRight: 0.5 }} />
                    Security
                  </button>
                  <button className="matrix-tab" data-tab="accessibility">
                    <Group sx={{ fontSize: 16, marginRight: 0.5 }} />
                    Accessibility
                  </button>
                </div>
              </div>
              
              <div className="matrix-content">
                <div className="matrix-grid" id="performance-metrics">
                  {/* Performance Metrics */}
                  <div className="metric-row performance-metrics">
                    <div className="metric-label">
                      <TrendingUp sx={{ fontSize: 20, color: '#4ade80', marginRight: 0.5 }} />
                      <span>Return on Investment</span>
                    </div>
                    <div className="metric-bars">
                      <div className="metric-bar copymai">
                        <div className="bar-fill" style={{ width: '87%' }}>
                          <span className="bar-value">23% Better</span>
                        </div>
                        <span className="bar-label">CopymAI</span>
                      </div>
                      <div className="metric-bar traditional">
                        <div className="bar-fill" style={{ width: '64%' }}>
                          <span className="bar-value">Standard</span>
                        </div>
                        <span className="bar-label">Traditional</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="metric-row performance-metrics">
                    <div className="metric-label">
                      <Speed sx={{ fontSize: 20, color: '#4ade80', marginRight: 0.5 }} />
                      <span>Transaction Speed</span>
                    </div>
                    <div className="metric-bars">
                      <div className="metric-bar copymai">
                        <div className="bar-fill instant" style={{ width: '95%' }}>
                          <span className="bar-value">Instant</span>
                        </div>
                        <span className="bar-label">CopymAI</span>
                      </div>
                      <div className="metric-bar traditional">
                        <div className="bar-fill" style={{ width: '25%' }}>
                          <span className="bar-value">Weeks</span>
                        </div>
                        <span className="bar-label">Traditional</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="metric-row performance-metrics">
                    <div className="metric-label">
                      <PsychologyAlt sx={{ fontSize: 20, color: '#4ade80', marginRight: 0.5 }} />
                      <span>AI Intelligence</span>
                    </div>
                    <div className="metric-bars">
                      <div className="metric-bar copymai">
                        <div className="bar-fill" style={{ width: '92%' }}>
                          <span className="bar-value">Advanced AI</span>
                        </div>
                        <span className="bar-label">CopymAI</span>
                      </div>
                      <div className="metric-bar traditional">
                        <div className="bar-fill" style={{ width: '15%' }}>
                          <span className="bar-value">Basic</span>
                        </div>
                        <span className="bar-label">Traditional</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Efficiency Metrics */}
                <div className="matrix-grid hidden" id="efficiency-metrics">
                  <div className="metric-row efficiency-metrics">
                    <div className="metric-label">
                      <Bolt sx={{ fontSize: 20, color: '#4ade80', marginRight: 0.5 }} />
                      <span>Processing Speed</span>
                    </div>
                    <div className="metric-bars">
                      <div className="metric-bar copymai">
                        <div className="bar-fill" style={{ width: '98%' }}>
                          <span className="bar-value">Real-time</span>
                        </div>
                        <span className="bar-label">CopymAI</span>
                      </div>
                      <div className="metric-bar traditional">
                        <div className="bar-fill" style={{ width: '35%' }}>
                          <span className="bar-value">Hours</span>
                        </div>
                        <span className="bar-label">Traditional</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="metric-row efficiency-metrics">
                    <div className="metric-label">
                      <MonetizationOn sx={{ fontSize: 20, color: '#4ade80', marginRight: 0.5 }} />
                      <span>Cost Efficiency</span>
                    </div>
                    <div className="metric-bars">
                      <div className="metric-bar copymai">
                        <div className="bar-fill" style={{ width: '85%' }}>
                          <span className="bar-value">90% Lower</span>
                        </div>
                        <span className="bar-label">CopymAI</span>
                      </div>
                      <div className="metric-bar traditional">
                        <div className="bar-fill" style={{ width: '45%' }}>
                          <span className="bar-value">High Fees</span>
                        </div>
                        <span className="bar-label">Traditional</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="metric-row efficiency-metrics">
                    <div className="metric-label">
                      <Assessment sx={{ fontSize: 20, color: '#4ade80', marginRight: 0.5 }} />
                      <span>Resource Utilization</span>
                    </div>
                    <div className="metric-bars">
                      <div className="metric-bar copymai">
                        <div className="bar-fill" style={{ width: '94%' }}>
                          <span className="bar-value">Optimized</span>
                        </div>
                        <span className="bar-label">CopymAI</span>
                      </div>
                      <div className="metric-bar traditional">
                        <div className="bar-fill" style={{ width: '28%' }}>
                          <span className="bar-value">Wasteful</span>
                        </div>
                        <span className="bar-label">Traditional</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Metrics */}
                <div className="matrix-grid hidden" id="security-metrics">
                  <div className="metric-row security-metrics">
                    <div className="metric-label">
                      <Shield sx={{ fontSize: 20, color: '#4ade80', marginRight: 0.5 }} />
                      <span>Fraud Detection</span>
                    </div>
                    <div className="metric-bars">
                      <div className="metric-bar copymai">
                        <div className="bar-fill" style={{ width: '99%' }}>
                          <span className="bar-value">AI-Powered</span>
                        </div>
                        <span className="bar-label">CopymAI</span>
                      </div>
                      <div className="metric-bar traditional">
                        <div className="bar-fill" style={{ width: '52%' }}>
                          <span className="bar-value">Manual</span>
                        </div>
                        <span className="bar-label">Traditional</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="metric-row security-metrics">
                    <div className="metric-label">
                      <VerifiedUser sx={{ fontSize: 20, color: '#4ade80', marginRight: 0.5 }} />
                      <span>Identity Verification</span>
                    </div>
                    <div className="metric-bars">
                      <div className="metric-bar copymai">
                        <div className="bar-fill" style={{ width: '96%' }}>
                          <span className="bar-value">Multi-Factor</span>
                        </div>
                        <span className="bar-label">CopymAI</span>
                      </div>
                      <div className="metric-bar traditional">
                        <div className="bar-fill" style={{ width: '38%' }}>
                          <span className="bar-value">Basic</span>
                        </div>
                        <span className="bar-label">Traditional</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="metric-row security-metrics">
                    <div className="metric-label">
                      <Security sx={{ fontSize: 20, color: '#4ade80', marginRight: 0.5 }} />
                      <span>Data Protection</span>
                    </div>
                    <div className="metric-bars">
                      <div className="metric-bar copymai">
                        <div className="bar-fill" style={{ width: '100%' }}>
                          <span className="bar-value">Bank-Level</span>
                        </div>
                        <span className="bar-label">CopymAI</span>
                      </div>
                      <div className="metric-bar traditional">
                        <div className="bar-fill" style={{ width: '67%' }}>
                          <span className="bar-value">Standard</span>
                        </div>
                        <span className="bar-label">Traditional</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accessibility Metrics */}
                <div className="matrix-grid hidden" id="accessibility-metrics">
                  <div className="metric-row accessibility-metrics">
                    <div className="metric-label">
                      <Group sx={{ fontSize: 20, color: '#4ade80', marginRight: 0.5 }} />
                      <span>User Accessibility</span>
                    </div>
                    <div className="metric-bars">
                      <div className="metric-bar copymai">
                        <div className="bar-fill" style={{ width: '100%' }}>
                          <span className="bar-value">Global</span>
                        </div>
                        <span className="bar-label">CopymAI</span>
                      </div>
                      <div className="metric-bar traditional">
                        <div className="bar-fill" style={{ width: '23%' }}>
                          <span className="bar-value">Limited</span>
                        </div>
                        <span className="bar-label">Traditional</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="metric-row accessibility-metrics">
                    <div className="metric-label">
                      <AccountBalanceWallet sx={{ fontSize: 20, color: '#4ade80', marginRight: 0.5 }} />
                      <span>Minimum Investment</span>
                    </div>
                    <div className="metric-bars">
                      <div className="metric-bar copymai">
                        <div className="bar-fill" style={{ width: '95%' }}>
                          <span className="bar-value">$100</span>
                        </div>
                        <span className="bar-label">CopymAI</span>
                      </div>
                      <div className="metric-bar traditional">
                        <div className="bar-fill" style={{ width: '8%' }}>
                          <span className="bar-value">$10K+</span>
                        </div>
                        <span className="bar-label">Traditional</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="metric-row accessibility-metrics">
                    <div className="metric-label">
                      <Language sx={{ fontSize: 20, color: '#4ade80', marginRight: 0.5 }} />
                      <span>Language Support</span>
                    </div>
                    <div className="metric-bars">
                      <div className="metric-bar copymai">
                        <div className="bar-fill" style={{ width: '88%' }}>
                          <span className="bar-value">Multi-Lang</span>
                        </div>
                        <span className="bar-label">CopymAI</span>
                      </div>
                      <div className="metric-bar traditional">
                        <div className="bar-fill" style={{ width: '31%' }}>
                          <span className="bar-value">English</span>
                        </div>
                        <span className="bar-label">Traditional</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Feature Showcase */}
            <div className="feature-showcase">
              <div className="showcase-header">
                <h3>Live AI Capabilities</h3>
                <p>Experience CopymAI's advanced features in real-time</p>
              </div>
              
              <div className="showcase-grid">
                <div className="showcase-card ai-analysis">
                  <div className="card-header">
                    <Analytics sx={{ fontSize: 24, color: '#4ade80' }} />
                    <h4>Real-Time AI Analysis</h4>
                  </div>
                  <div className="card-content">
                    <div className="ai-metrics">
                      <div className="metric-item">
                        <span className="metric-label">Market Sentiment</span>
                        <div className="metric-value positive">Bullish</div>
                        <div className="metric-bar">
                          <div className="bar-fill" style={{ width: '78%' }}></div>
                        </div>
                      </div>
                      <div className="metric-item">
                        <span className="metric-label">Risk Assessment</span>
                        <div className="metric-value">Low</div>
                        <div className="metric-bar">
                          <div className="bar-fill safe" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div className="metric-item">
                        <span className="metric-label">Growth Potential</span>
                        <div className="metric-value positive">+15.3%</div>
                        <div className="metric-bar">
                          <div className="bar-fill" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="showcase-card smart-matching">
                  <div className="card-header">
                    <CompareArrows sx={{ fontSize: 24, color: '#3b82f6' }} />
                    <h4>Smart Asset Matching</h4>
                  </div>
                  <div className="card-content">
                    <div className="matching-interface">
                      <div className="match-item">
                        <div className="match-icon">
                          <Diamond sx={{ fontSize: 20, color: '#4ade80' }} />
                        </div>
                        <div className="match-info">
                          <span className="match-name">Luxury Watch Portfolio</span>
                          <span className="match-score">Match: 94%</span>
                        </div>
                        <div className="match-status">
                          <CheckCircle sx={{ fontSize: 16, color: '#4ade80' }} />
                        </div>
                      </div>
                      <div className="match-item">
                        <div className="match-icon">
                          <AccountBalance sx={{ fontSize: 20, color: '#3b82f6' }} />
                        </div>
                        <div className="match-info">
                          <span className="match-name">Commercial Real Estate</span>
                          <span className="match-score">Match: 87%</span>
                        </div>
                        <div className="match-status">
                          <CheckCircle sx={{ fontSize: 16, color: '#4ade80' }} />
                        </div>
                      </div>
                      <div className="match-item">
                        <div className="match-icon">
                          <Palette sx={{ fontSize: 20, color: '#8b5cf6' }} />
                        </div>
                        <div className="match-info">
                          <span className="match-name">Fine Art Collection</span>
                          <span className="match-score">Match: 76%</span>
                        </div>
                        <div className="match-status">
                          <CheckCircle sx={{ fontSize: 16, color: '#4ade80' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="showcase-card predictive-analytics">
                  <div className="card-header">
                    <ShowChart sx={{ fontSize: 24, color: '#f59e0b' }} />
                    <h4>Predictive Analytics</h4>
                  </div>
                  <div className="card-content">
                    <div className="prediction-chart">
                      <div className="chart-line">
                        <div className="line-segment current" style={{ height: '60%' }}></div>
                        <div className="line-segment predicted" style={{ height: '85%' }}></div>
                      </div>
                      <div className="chart-labels">
                        <span>Current</span>
                        <span>Predicted</span>
                      </div>
                      <div className="prediction-stats">
                        <div className="stat">
                          <span className="stat-label">Confidence</span>
                          <span className="stat-value">89%</span>
                        </div>
                        <div className="stat">
                          <span className="stat-label">Timeframe</span>
                          <span className="stat-value">12 months</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Platform Comparison */}
            <div className="platform-comparison">
              <div className="comparison-header">
                <h3>Platform Architecture Comparison</h3>
                <p>See how CopymAI's AI-first approach transforms investment</p>
              </div>
              
              <div className="comparison-table">
            <div className="table-header">
                  <div className="header-cell feature">Feature</div>
                  <div className="header-cell copymai">CopymAI</div>
                  <div className="header-cell traditional">Traditional</div>
                  <div className="header-cell advantage">Advantage</div>
            </div>
                
                <div className="table-body">
                  <div className="table-row">
                    <div className="cell feature">
                      <Shield sx={{ fontSize: 16, color: '#4ade80', marginRight: 0.5 }} />
                      Security Protocol
              </div>
                    <div className="cell copymai">
                      <div className="feature-detail">
                        <span className="feature-name">AI + Blockchain</span>
                        <span className="feature-desc">Multi-layer security with AI fraud detection</span>
                      </div>
                    </div>
                    <div className="cell traditional">
                      <div className="feature-detail">
                        <span className="feature-name">Basic Encryption</span>
                        <span className="feature-desc">Standard security measures</span>
                      </div>
                    </div>
                    <div className="cell advantage">
                      <span className="advantage-badge superior">Superior</span>
                    </div>
                  </div>
                  
                  <div className="table-row">
                    <div className="cell feature">
                      <MonetizationOn sx={{ fontSize: 16, color: '#4ade80', marginRight: 0.5 }} />
                      Minimum Investment
                    </div>
                    <div className="cell copymai">
                      <div className="feature-detail">
                        <span className="feature-name">$100</span>
                        <span className="feature-desc">Fractional ownership enabled</span>
                      </div>
                    </div>
                    <div className="cell traditional">
                      <div className="feature-detail">
                        <span className="feature-name">$10,000+</span>
                        <span className="feature-desc">High barrier to entry</span>
                      </div>
                    </div>
                    <div className="cell advantage">
                      <span className="advantage-badge revolutionary">Revolutionary</span>
                    </div>
                  </div>
                  
                  <div className="table-row">
                    <div className="cell feature">
                      <Bolt sx={{ fontSize: 16, color: '#4ade80', marginRight: 0.5 }} />
                      Transaction Speed
                    </div>
                    <div className="cell copymai">
                      <div className="feature-detail">
                        <span className="feature-name">Instant</span>
                        <span className="feature-desc">AI-powered matching engine</span>
                      </div>
                    </div>
                    <div className="cell traditional">
                      <div className="feature-detail">
                        <span className="feature-name">Weeks/Months</span>
                        <span className="feature-desc">Manual processing required</span>
                      </div>
                    </div>
                    <div className="cell advantage">
                      <span className="advantage-badge game-changing">Game-Changing</span>
                    </div>
                  </div>
                  
                  <div className="table-row">
                    <div className="cell feature">
                      <PsychologyAlt sx={{ fontSize: 16, color: '#4ade80', marginRight: 0.5 }} />
                      Investment Guidance
                    </div>
                    <div className="cell copymai">
                      <div className="feature-detail">
                        <span className="feature-name">CopymAgent AI</span>
                        <span className="feature-desc">Personalized AI recommendations</span>
                      </div>
                    </div>
                    <div className="cell traditional">
                      <div className="feature-detail">
                        <span className="feature-name">Human Advisor</span>
                        <span className="feature-desc">Limited availability & high cost</span>
                      </div>
                    </div>
                    <div className="cell advantage">
                      <span className="advantage-badge innovative">Innovative</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Performance Dashboard */}
            <div className="ai-performance-dashboard">
              <div className="dashboard-header">
                <h3>CopymAI Performance Metrics</h3>
                <p>Real-time data showing our AI's superior performance</p>
              </div>
              
              <div className="dashboard-grid">
                <div className="metric-card primary">
                  <div className="metric-icon">
                    <TrendingUp sx={{ fontSize: 32, color: '#4ade80' }} />
                  </div>
                  <div className="metric-content">
                    <div className="metric-value">23%</div>
                    <div className="metric-label">Better Accuracy</div>
                    <div className="metric-trend positive">+5.2% vs last month</div>
                  </div>
                </div>
                
                <div className="metric-card secondary">
                  <div className="metric-icon">
                    <Speed sx={{ fontSize: 32, color: '#3b82f6' }} />
                  </div>
                  <div className="metric-content">
                    <div className="metric-value">99.9%</div>
                    <div className="metric-label">Uptime</div>
                    <div className="metric-trend positive">Zero downtime</div>
                  </div>
                </div>
                
                <div className="metric-card tertiary">
                  <div className="metric-icon">
                    <Security sx={{ fontSize: 32, color: '#f59e0b' }} />
                  </div>
                  <div className="metric-content">
                    <div className="metric-value">100%</div>
                    <div className="metric-label">Security Score</div>
                    <div className="metric-trend positive">Bank-level security</div>
                  </div>
                </div>
                
                <div className="metric-card quaternary">
                  <div className="metric-icon">
                    <Group sx={{ fontSize: 32, color: '#8b5cf6' }} />
                  </div>
                  <div className="metric-content">
                    <div className="metric-value">5,000+</div>
                    <div className="metric-label">Active Users</div>
                    <div className="metric-trend positive">+15% growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2><Star sx={{ mr: 1, verticalAlign: 'middle' }} /> What Industry Leaders Say</h2>
            <p>Trusted by investment professionals and financial institutions worldwide</p>
          </motion.div>
          
          <div className="testimonials-showcase">
            {/* Featured Testimonial */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="featured-testimonial"
            >
              <div className="featured-content">
                <div className="quote-icon">
                  <Star sx={{ fontSize: 48, color: '#4ade80' }} />
                </div>
                <blockquote>
                  "CopymAI democratizes high-value asset investment. The AI predictions have consistently outperformed traditional analysis by 23%. This is the future of investment platforms."
                </blockquote>
                <div className="featured-author">
                  <div className="author-avatar featured">
                    <AccountBalance sx={{ fontSize: 48, color: '#4ade80' }} />
                  </div>
                  <div className="author-info">
                    <h4>Sarah Chen</h4>
                    <p className="author-role">Investment Director</p>
                    <p className="author-company">Venture Capital Partners</p>
                    <div className="author-credentials">
                      <span className="credential-badge">15+ Years Experience</span>
                      <span className="credential-badge">$2B+ AUM</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonials Grid */}
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="testimonial-card"
                >
                  <div className="testimonial-header">
                    <div className="testimonial-rating">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} sx={{ fontSize: 16, color: '#fbbf24' }} />
                      ))}
                    </div>
                    <div className="testimonial-icon">
                      {testimonial.avatar}
                    </div>
                  </div>
                  
                  <div className="testimonial-content">
                    <blockquote>"{testimonial.content}"</blockquote>
                  </div>
                  
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p className="author-role">{testimonial.role}</p>
                      <p className="author-company">{testimonial.company}</p>
                    </div>
                    <div className="author-verification">
                      <Verified sx={{ fontSize: 16, color: '#4ade80' }} />
                      <span>Verified Professional</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="trust-indicators"
            >
              <div className="trust-header">
                <h3>Trusted by Industry Leaders</h3>
                <p>Join thousands of professionals already using CopymAI</p>
              </div>
              
              <div className="trust-stats">
                <div className="trust-stat">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Investment Professionals</div>
                </div>
                <div className="trust-stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Financial Institutions</div>
                </div>
                <div className="trust-stat">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Satisfaction Rate</div>
                </div>
                <div className="trust-stat">
                  <div className="stat-number">4.9/5</div>
                  <div className="stat-label">Average Rating</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="cta">
        <div className="container">
          <div className="cta-showcase">
            {/* Main CTA Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="cta-main"
            >
              <div className="cta-header">
                <div className="cta-icon">
                  <TrendingUp sx={{ fontSize: 64, color: '#4ade80' }} />
                </div>
                <h2><RocketLaunch sx={{ mr: 1, verticalAlign: 'middle' }} /> Investment Opportunity</h2>
                <p className="cta-subtitle">Join the Future of AI-Powered Asset Investment</p>
              </div>
              
              <div className="cta-description">
                <p>We're raising <strong>$3.5M seed funding</strong> to accelerate CopymAI development, ensure full regulatory compliance, and acquire premium assets for our growing platform.</p>
              </div>

              {/* Funding Goals Grid */}
              <div className="funding-goals-grid">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="goal-card primary"
                >
                  <div className="goal-icon">
                    <Group sx={{ fontSize: 32, color: '#4ade80' }} />
                  </div>
                  <div className="goal-content">
                    <div className="goal-number">50,000</div>
                    <div className="goal-label">Target Users</div>
                    <div className="goal-timeline">by End 2024</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="goal-card secondary"
                >
                  <div className="goal-icon">
                    <AccountBalance sx={{ fontSize: 32, color: '#3b82f6' }} />
                  </div>
                  <div className="goal-content">
                    <div className="goal-number">$50M</div>
                    <div className="goal-label">Tokenized Assets</div>
                    <div className="goal-timeline">Portfolio Value</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="goal-card tertiary"
                >
                  <div className="goal-icon">
                    <TrendingUp sx={{ fontSize: 32, color: '#f59e0b' }} />
                  </div>
                  <div className="goal-content">
                    <div className="goal-number">23%</div>
                    <div className="goal-label">Better Returns</div>
                    <div className="goal-timeline">vs Traditional</div>
                  </div>
                </motion.div>
              </div>

              {/* Investment Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="investment-benefits"
              >
                <h3><Help sx={{ mr: 1, verticalAlign: 'middle' }} /> Why Invest in CopymAI?</h3>
                <div className="benefits-grid">
                  <div className="benefit-item">
                    <CheckCircle sx={{ fontSize: 20, color: '#4ade80' }} />
                    <span>First-mover advantage in AI-powered RWA investment</span>
                  </div>
                  <div className="benefit-item">
                    <CheckCircle sx={{ fontSize: 20, color: '#4ade80' }} />
                    <span>Proven AI technology with 23% better accuracy</span>
                  </div>
                  <div className="benefit-item">
                    <CheckCircle sx={{ fontSize: 20, color: '#4ade80' }} />
                    <span>Massive $16T market opportunity by 2025</span>
                  </div>
                  <div className="benefit-item">
                    <CheckCircle sx={{ fontSize: 20, color: '#4ade80' }} />
                    <span>Experienced team with deep fintech expertise</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="cta-actions"
            >
              <div className="cta-buttons-container">
                <button onClick={handleInvestRedirect} className="cta-button primary large">
                  <TrendingUp sx={{ mr: 1, fontSize: 20 }} />
                  Join CopymAI Investment Round
                </button>
                <button onClick={handleContactRedirect} className="cta-button secondary large">
                  <Handshake sx={{ mr: 1, fontSize: 20 }} />
                  Schedule Partnership Meeting
                </button>
              </div>
              
              <div className="investment-requirements">
                <div className="requirement-badges">
                  <span className="requirement-badge">
                    <Verified sx={{ fontSize: 16, mr: 0.5 }} />
                    Accredited Investors Only
                  </span>
                  <span className="requirement-badge">
                    <MonetizationOn sx={{ fontSize: 16, mr: 0.5 }} />
                    Minimum $25,000 Investment
                  </span>
                  <span className="requirement-badge">
                    <Security sx={{ fontSize: 16, mr: 0.5 }} />
                    SEC Compliant
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Urgency Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="urgency-section"
            >
              <div className="urgency-content">
                <div className="urgency-icon">
                  <Timer sx={{ fontSize: 32, color: '#ef4444' }} />
                </div>
                <div className="urgency-text">
                  <h4><Warning sx={{ mr: 0.5, verticalAlign: 'middle' }} /> Limited Time Opportunity</h4>
                  <p>Only 15 spots remaining in this funding round. Join the elite group of investors shaping the future of asset investment.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>





    </div>
  );
}

export default App;