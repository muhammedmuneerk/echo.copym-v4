import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Link,
  SmartToy,
  Assessment,
  Verified,
  Speed,
  ShoppingCart,
  Diamond,
  AccountBalance,
  Token,
  MonetizationOn,
  Analytics,
  TrendingUp
} from '@mui/icons-material';

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState('tokenization');

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

  const demoData = {
    selectedAsset: 'luxury-watch',
    assetValue: 500000,
    portfolioValue: 1250000,
    predictionAccuracy: 94
  };

  const handleInvestRedirect = () => {
    window.open('https://copymai.ai/invest', '_blank');
  };

  return (
    <section 
      id="demo" 
      className="relative overflow-hidden py-20"
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

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="brand-section-title mb-6 text-white flex items-center justify-center gap-4">
            Try CopymAI Demo
            <div className="filter drop-shadow-lg animate-pulse">
              <Link sx={{ fontSize: '2rem', color: '#4ade80' }} />
            </div>
          </h2>
          <p className="brand-description max-w-2xl mx-auto text-gray-300">
            Experience the power of AI-driven asset investment
          </p>
        </motion.div>

        {/* Demo Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {[
            { id: 'tokenization', icon: <Link />, label: 'AI Tokenization' },
            { id: 'advisor', icon: <SmartToy />, label: 'CopymAgent' },
            { id: 'portfolio', icon: <Assessment />, label: 'Portfolio Dashboard' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveDemo(tab.id)}
              className={`px-8 py-4 rounded-xl cursor-pointer transition-all duration-300 ease-out font-semibold flex items-center gap-2 min-w-48 justify-center ${
                activeDemo === tab.id
                  ? 'btn-gradient text-black shadow-lg shadow-green-400/30 -translate-y-1'
                  : 'btn-gradient-secondary text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/20'
              }`}
            >
              <div className={`transition-all duration-300 ease-out ${
                activeDemo === tab.id ? 'scale-110' : 'group-hover:scale-110'
              }`}>
                {tab.icon}
              </div>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <div className="space-y-12 mb-12">
          {/* Tokenization Panel */}
          {activeDemo === 'tokenization' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <h3 className="brand-card-title text-white text-center mb-12">
                AI Asset Tokenization Process
              </h3>
              
              {/* Tokenization Steps */}
              <div className="space-y-8">
                {[
                  { icon: <Verified sx={{ color: '#4ade80' }} />, title: 'Asset Verification', desc: 'AI analyzes and verifies asset authenticity', status: 'completed' },
                  { icon: <Speed sx={{ color: '#3b82f6' }} />, title: 'Smart Valuation', desc: 'AI determines current market value', status: 'completed' },
                  { icon: <Link sx={{ color: '#4ade80' }} />, title: 'Tokenization', desc: 'Converting asset into blockchain tokens', status: 'active' },
                  { icon: <ShoppingCart sx={{ color: '#3b82f6' }} />, title: 'Marketplace Listed', desc: 'Available for fractional investment', status: 'pending' }
                ].map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-8 p-8 rounded-2xl border-2 transition-all duration-300 ease-out ${
                      step.status === 'completed'
                        ? 'border-green-500 bg-gradient-to-br from-green-500/10 to-green-500/5'
                        : step.status === 'active'
                        ? 'border-blue-500 bg-gradient-to-br from-blue-500/10 to-blue-500/5 animate-pulse'
                        : 'border-gray-600 bg-gradient-to-br from-gray-700 to-gray-800'
                    }`}
                  >
                    <div className="flex items-center justify-center transition-all duration-300 ease-out">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="brand-card-title text-white mb-3">{step.title}</h4>
                      <p className="text-gray-300 text-lg">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Asset Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: <Diamond sx={{ fontSize: 32, color: '#4ade80' }} />, title: 'Selected Asset', value: demoAssets.find(a => a.id === demoData.selectedAsset)?.name },
                  { icon: <AccountBalance sx={{ fontSize: 32, color: '#3b82f6' }} />, title: 'Total Value', value: `$${demoData.assetValue.toLocaleString()}` },
                  { icon: <Token sx={{ fontSize: 32, color: '#4ade80' }} />, title: 'Available Tokens', value: `${(demoData.assetValue / 100).toLocaleString()}` },
                  { icon: <MonetizationOn sx={{ fontSize: 32, color: '#3b82f6' }} />, title: 'Token Price', value: '$100 each' }
                ].map((metric, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 rounded-2xl p-8 flex items-center gap-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 group"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300 ease-out">
                      {metric.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">{metric.title}</h4>
                      <p className="text-xl font-bold text-white">{metric.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Advisor Panel */}
          {activeDemo === 'advisor' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <h3 className="brand-card-title text-white text-center mb-12">
                CopymAgent AI Recommendations
              </h3>
              
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 border border-gray-600">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center">
                    <SmartToy sx={{ color: '#3b82f6', fontSize: 28 }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Hello! I'm CopymAgent, your AI investment advisor. Based on your risk profile and investment goals, I've analyzed the market and found these recommendations:
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {demoAssets.map((asset) => (
                    <div
                      key={asset.id}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 rounded-xl p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20"
                    >
                      <div className="mb-6">
                        <h4 className="text-xl font-bold text-white mb-2">{asset.name}</h4>
                        <p className="text-gray-400">{asset.type}</p>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-6 mb-6">
                        <div>
                          <span className="text-xs text-gray-400 block mb-1">AI Score</span>
                          <span className="text-lg font-semibold text-white">{asset.aiScore}/100</span>
                        </div>
                        <div>
                          <span className="text-xs text-gray-400 block mb-1">Performance</span>
                          <span className={`text-lg font-semibold ${asset.change.includes('+') ? 'text-green-400' : 'text-red-400'}`}>
                            {asset.change}
                          </span>
                        </div>
                        <div>
                          <span className="text-xs text-gray-400 block mb-1">Risk Level</span>
                          <span className={`text-lg font-semibold ${
                            asset.risk === 'Low' ? 'text-green-400' : 
                            asset.risk === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                          }`}>
                            {asset.risk}
                          </span>
                        </div>
                      </div>
                      
                      <button 
                        className="w-full btn-gradient py-3 px-6 rounded-lg font-semibold transition-all duration-300 ease-out hover:-translate-y-1"
                        onClick={() => console.log('View details for:', asset.id)}
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Portfolio Panel */}
          {activeDemo === 'portfolio' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <h3 className="brand-card-title text-white text-center mb-12">
                AI-Powered Portfolio Dashboard
              </h3>
              
              {/* Portfolio Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: <AccountBalance sx={{ fontSize: 32, color: '#4ade80' }} />, title: 'Total Portfolio Value', value: `$${demoData.portfolioValue.toLocaleString()}`, change: '+8.7% this month', changeType: 'positive' },
                  { icon: <Analytics sx={{ fontSize: 32, color: '#3b82f6' }} />, title: 'AI Accuracy', value: `${demoData.predictionAccuracy}%`, change: '+23% vs traditional', changeType: 'positive' },
                  { icon: <TrendingUp sx={{ fontSize: 32, color: '#4ade80' }} />, title: 'Active Investments', value: '12', change: 'Across 4 asset classes', changeType: 'neutral' }
                ].map((summary, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 rounded-2xl p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20"
                  >
                    <div className="flex items-center gap-6 mb-6">
                      <div className="group-hover:scale-110 transition-transform duration-300 ease-out">
                        {summary.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">{summary.title}</h4>
                        <p className="text-3xl font-bold text-white">{summary.value}</p>
                        <p className={`text-sm ${
                          summary.changeType === 'positive' ? 'text-green-400' : 
                          summary.changeType === 'negative' ? 'text-red-400' : 'text-gray-400'
                        }`}>
                          {summary.change}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Asset Allocation */}
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 border border-gray-600">
                <h4 className="brand-card-title text-white mb-8">Asset Allocation</h4>
                <div className="space-y-6">
                  {[
                    { name: 'Real Estate', percentage: 40, color: 'bg-blue-500' },
                    { name: 'Luxury Goods', percentage: 30, color: 'bg-green-500' },
                    { name: 'Fine Art', percentage: 20, color: 'bg-purple-500' },
                    { name: 'Wine Investment', percentage: 10, color: 'bg-red-500' }
                  ].map((allocation, index) => (
                    <div key={index} className="flex items-center gap-6">
                      <div className="flex-1 bg-gray-600 rounded-full h-4">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${allocation.color}`}
                          style={{ width: `${allocation.percentage}%` }}
                        />
                      </div>
                      <span className="text-lg font-semibold text-white min-w-40">
                        {allocation.name} ({allocation.percentage}%)
                      </span>
                    </div>
                  ))}
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
            Start Investing with CopymAI
          </button>
          <p className="text-gray-400">
            Join 5,000+ investors already using AI to grow their wealth
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection; 