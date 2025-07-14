// src/App.jsx
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import AssetTokenizationWizard from './components/AssetTokenizationWizard';
import AuthModal from './components/AuthModal';
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
  TrendingDown
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
  const [showTokenizationWizard, setShowTokenizationWizard] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState(null);
  const [demoData, setDemoData] = useState({
    assetValue: 500000,
    investmentAmount: 1000,
    predictionAccuracy: 87,
    portfolioValue: 15420,
    selectedAsset: 'luxury-watch'
  });

  // Check for existing user on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
  }, []);

  const handleInvestRedirect = () => {
    // Redirect to CopymAI investment platform
    window.open('https://copymai.ai/invest', '_blank');
  };

  const handleContactRedirect = () => {
    // Redirect to contact/partnership page
    window.open('https://copymai.ai/contact', '_blank');
  };

  const handleStartTokenization = () => {
    if (!user) {
      setShowAuthModal(true);
    } else {
      setShowTokenizationWizard(true);
    }
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setShowAuthModal(false);
    setShowTokenizationWizard(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const handleTokenizationComplete = (tokenizedAsset) => {
    console.log('Tokenization completed:', tokenizedAsset);
    setShowTokenizationWizard(false);
    // You could redirect to a success page or show success message
    alert('Asset tokenization completed successfully!');
  };

  const handleTokenizationCancel = () => {
    setShowTokenizationWizard(false);
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
      items: ['✔ Raise $3.5M Seed', '🚀 CopymAI MVP launch', '💎 First 10 assets onboarded']
    },
    {
      quarter: 'Q3 2024',
      items: ['🤖 CopymAgent Beta Release', '🎯 100+ tokenized assets', '👥 5,000 active users']
    },
    {
      quarter: 'Q1 2025',
      items: ['💰 Raise $12M Series A', '📱 CopymAI mobile app launch', '🌐 Add more asset classes']
    },
    {
      quarter: 'Q4 2025',
      items: ['🌍 Global expansion', '🤝 Enterprise partnerships', '📊 Advanced AI portfolio tools']
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
      <section className="hero">
        {/* User Menu */}
        <div className="user-menu">
          {user ? (
            <div className="user-info">
              <span>Welcome, {user.firstName || user.username}</span>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </div>
          ) : (
            <button onClick={() => setShowAuthModal(true)} className="login-button">
              Login
            </button>
          )}
        </div>

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
            <button onClick={handleStartTokenization} className="cta-button primary">
              Start Asset Tokenization
            </button>
            <button onClick={handleInvestRedirect} className="cta-button secondary">
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
      <section className="problem">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>🧩 The Problem We Solve</h2>
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
      <section className="solution">
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
      <section className="features">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2><Launch sx={{ mr: 1, verticalAlign: 'middle' }} /> Key Features</h2>
            <p>Advanced AI and blockchain technology powering your investment journey</p>
          </motion.div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="feature-card"
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
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
      <section className="demo">
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
            <button
              className={`tab ${activeDemo === 'calculator' ? 'active' : ''}`}
              onClick={() => setActiveDemo('calculator')}
            >
              <AttachMoney sx={{ mr: 1, verticalAlign: 'middle' }} /> Investment Calculator
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
                    <div className="step-icon"><Verified sx={{ color: '#10b981' }} /></div>
                    <div className="step-content">
                      <h4>Asset Verification</h4>
                      <p>AI analyzes and verifies asset authenticity</p>
                    </div>
                  </div>
                  <div className="step completed">
                    <div className="step-icon"><Speed sx={{ color: '#f59e0b' }} /></div>
                    <div className="step-content">
                      <h4>Smart Valuation</h4>
                      <p>AI determines current market value</p>
                    </div>
                  </div>
                  <div className="step active">
                    <div className="step-icon"><Link sx={{ color: '#3b82f6' }} /></div>
                    <div className="step-content">
                      <h4>Tokenization</h4>
                      <p>Converting asset into blockchain tokens</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-icon"><ShoppingCart sx={{ color: '#8b5cf6' }} /></div>
                    <div className="step-content">
                      <h4>Marketplace Listed</h4>
                      <p>Available for fractional investment</p>
                    </div>
                  </div>
                </div>
                <div className="tokenization-result">
                  <div className="asset-card">
                    <h4>Selected Asset: {demoAssets.find(a => a.id === demoData.selectedAsset)?.name}</h4>
                    <p>Total Value: ${demoData.assetValue.toLocaleString()}</p>
                    <p>Available Tokens: {(demoData.assetValue / 100).toLocaleString()}</p>
                    <p>Token Price: $100 each</p>
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
                            onClick={() => setDemoData({...demoData, selectedAsset: asset.id})}
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
                      <h4>Total Portfolio Value</h4>
                      <p className="value">${demoData.portfolioValue.toLocaleString()}</p>
                      <p className="change positive">+8.7% this month</p>
                    </div>
                    <div className="summary-card">
                      <h4>AI Accuracy</h4>
                      <p className="value">{demoData.predictionAccuracy}%</p>
                      <p className="change positive">+23% vs traditional</p>
                    </div>
                    <div className="summary-card">
                      <h4>Active Investments</h4>
                      <p className="value">12</p>
                      <p className="change">Across 4 asset classes</p>
                    </div>
                  </div>
                  <div className="portfolio-breakdown">
                    <h4>Asset Allocation</h4>
                    <div className="allocation-chart">
                      <div className="allocation-item">
                        <div className="allocation-bar">
                          <div className="bar real-estate" style={{width: '40%'}}></div>
                        </div>
                        <span>Real Estate (40%)</span>
                      </div>
                      <div className="allocation-item">
                        <div className="allocation-bar">
                          <div className="bar luxury-goods" style={{width: '30%'}}></div>
                        </div>
                        <span>Luxury Goods (30%)</span>
                      </div>
                      <div className="allocation-item">
                        <div className="allocation-bar">
                          <div className="bar art" style={{width: '20%'}}></div>
                        </div>
                        <span>Fine Art (20%)</span>
                      </div>
                      <div className="allocation-item">
                        <div className="allocation-bar">
                          <div className="bar wine" style={{width: '10%'}}></div>
                        </div>
                        <span>Wine Investment (10%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeDemo === 'calculator' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="demo-panel calculator"
              >
                <h3>Investment Calculator</h3>
                <div className="calculator-interface">
                  <div className="input-section">
                    <div className="input-group">
                      <label>Investment Amount</label>
                      <input
                        type="range"
                        min="100"
                        max="10000"
                        value={demoData.investmentAmount}
                        onChange={(e) => setDemoData({...demoData, investmentAmount: parseInt(e.target.value)})}
                        className="slider"
                      />
                      <span className="value">${demoData.investmentAmount}</span>
                    </div>
                    <div className="input-group">
                      <label>Select Asset</label>
                      <select
                        value={demoData.selectedAsset}
                        onChange={(e) => setDemoData({...demoData, selectedAsset: e.target.value})}
                        className="asset-select"
                      >
                        {demoAssets.map((asset) => (
                          <option key={asset.id} value={asset.id}>
                            {asset.name} ({asset.change})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="calculation-results">
                    <div className="result-card">
                      <h4>Projected Returns (1 Year)</h4>
                      <div className="projections">
                        <div className="projection">
                          <span className="label">Conservative</span>
                          <span className="value">
                            ${Math.round(demoData.investmentAmount * 1.06).toLocaleString()}
                          </span>
                        </div>
                        <div className="projection">
                          <span className="label">AI Optimized</span>
                          <span className="value highlight">
                            ${Math.round(demoData.investmentAmount * 1.12).toLocaleString()}
                          </span>
                        </div>
                        <div className="projection">
                          <span className="label">Best Case</span>
                          <span className="value">
                            ${Math.round(demoData.investmentAmount * 1.18).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="result-card">
                      <h4>Investment Details</h4>
                      <div className="investment-details">
                        <div className="detail">
                          <span className="label">Tokens to Purchase</span>
                          <span className="value">{Math.floor(demoData.investmentAmount / 100)}</span>
                        </div>
                        <div className="detail">
                          <span className="label">Ownership Percentage</span>
                          <span className="value">
                            {((demoData.investmentAmount / demoAssets.find(a => a.id === demoData.selectedAsset)?.value) * 100).toFixed(4)}%
                          </span>
                        </div>
                        <div className="detail">
                          <span className="label">AI Risk Assessment</span>
                          <span className={`value risk-${demoAssets.find(a => a.id === demoData.selectedAsset)?.risk.toLowerCase()}`}>
                            {demoAssets.find(a => a.id === demoData.selectedAsset)?.risk}
                          </span>
                        </div>
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
            <h2>📈 Massive Market Potential</h2>
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
            <h2>💰 Business Model</h2>
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
            <h2>🗺 Roadmap</h2>
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
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>🏆 Why CopymAI is Different</h2>
            <p>CopymAI vs Traditional Platforms</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="comparison-table"
          >
            <div className="table-header">
              <div className="header-item">Feature</div>
              <div className="header-item">CopymAI</div>
              <div className="header-item">Traditional Platforms</div>
            </div>
            {comparisonData.map((item, index) => (
              <div key={index} className="table-row">
                <div className="table-cell">{item.feature}</div>
                <div className="table-cell copymai">{item.copymAI}</div>
                <div className="table-cell traditional">{item.traditional}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>What Industry Leaders Say</h2>
            <p>Trusted by investment professionals and financial institutions</p>
          </motion.div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="testimonial-card"
              >
                <div className="testimonial-content">
                  <p>"{testimonial.content}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="cta-content"
          >
            <h2>🎯 Our Ask</h2>
            <p>We're raising $3.5M seed funding to accelerate CopymAI development, ensure full regulatory compliance, and acquire premium assets.</p>
            <div className="funding-goals">
              <div className="goal-item">
                <strong>50,000</strong>
                <span>Target Users by End 2024</span>
              </div>
              <div className="goal-item">
                <strong>$50M</strong>
                <span>In Tokenized Assets</span>
              </div>
            </div>
            <div className="cta-buttons">
              <button onClick={handleInvestRedirect} className="cta-button primary large">
                Join CopymAI Investment Round
              </button>
              <button onClick={handleContactRedirect} className="cta-button secondary large">
                Schedule Partnership Meeting
              </button>
            </div>
            <p className="cta-note">Accredited investors only • Minimum investment $25,000</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>CopymAI</h3>
              <p>Revolutionizing real-world asset investment through AI and blockchain technology.</p>
            </div>
            <div className="footer-section">
              <h4>Platform</h4>
              <ul>
                <li><a href="#features">AI Features</a></li>
                <li><a href="#invest">Start Investing</a></li>
                <li><a href="#marketplace">AI Marketplace</a></li>
                <li><a href="#wallet">Secure Wallet</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#whitepaper">AI Whitepaper</a></li>
                <li><a href="#blog">CopymAI Blog</a></li>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#api">API Docs</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About CopymAI</a></li>
                <li><a href="#team">AI Team</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#investors">Investors</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 CopymAI. All rights reserved. | Securities offered through registered broker-dealers.</p>
          </div>
        </div>
      </footer>

      {/* Asset Tokenization Wizard */}
      {showTokenizationWizard && (
        <AssetTokenizationWizard
          onComplete={handleTokenizationComplete}
          onCancel={handleTokenizationCancel}
        />
      )}

             {/* Auth Modal */}
       {showAuthModal && (
         <AuthModal
           isOpen={showAuthModal}
           onLoginSuccess={handleLoginSuccess}
           onClose={() => setShowAuthModal(false)}
         />
       )}
    </div>
  );
}

export default App;