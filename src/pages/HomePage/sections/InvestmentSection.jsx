import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Shield, Zap, RefreshCw, Building, Coins, PieChart, Gem, BarChart3, DollarSign, ArrowUpRight, Repeat, Globe, Home, Briefcase, Palette } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const RealEstateInvestmentSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef(null);
  const visualRef = useRef(null);
  const contentRef = useRef(null);
  const sectionsRef = useRef([]);

  const sections = [
    {
      id: 0,
      title: "Own Fractions of High-Performing Assets",
      subtitle: "Real World Assets, Digitized",
      content: "Own fractions of high-performing assets and earn from yield, rent, and long-term value growth. Access institutional-grade real estate, commodities, and alternative investments previously available only to large investors.",
      highlight: "Fractional Ownership",
      visual: "asset-fractionalization"
    },
    {
      id: 1,
      title: "Earn Passively",
      subtitle: "Professional Management",
      content: "Skip the paperwork and management stress. Let our experts handle property management, tenant relations, and maintenance while you earn consistent returns from your fractional ownership.",
      highlight: "16.3% Annual Return",
      visual: "passive-earning"
    },
    {
      id: 2,
      title: "High Returns",
      subtitle: "AI-Powered Analytics",
      content: "Invest monthly and earn up to 16.3% annual rental return. Our AI agent analyzes market trends, property performance, and investment opportunities to help you make informed decisions.",
      highlight: "AI Investment Insights",
      visual: "high-returns"
    },
    {
      id: 3,
      title: "Flexible Exit",
      subtitle: "Secondary Market Trading",
      content: "Sell your property shares on the secondary market with just a few clicks. Complete liquidity powered by blockchain technology and smart contracts for instant settlements.",
      highlight: "Instant Liquidity",
      visual: "flexible-exit"
    },
    {
      id: 4,
      title: "World of Real Assets",
      subtitle: "AI-Curated Portfolio",
      content: "Access institutional-grade opportunities in real estate, gold, private equity, commodities, and fine art. Our AI agent provides market insights, performance analytics, and portfolio recommendations.",
      highlight: "Smart Diversification",
      visual: "world-assets"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      let ctx = gsap.context(() => {
        // Kill any existing ScrollTriggers
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Pin the visual panel ONLY within this section
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${contentRef.current.scrollHeight - window.innerHeight}`,
          pin: visualRef.current,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        // Create ScrollTrigger for each content section to change visual
        sectionsRef.current.forEach((section, index) => {
          if (section) {
            ScrollTrigger.create({
              trigger: section,
              start: "top center",
              end: "bottom center",
              onEnter: () => {
                setActiveSection(index);
                // Add smooth visual transition
                const visualContent = visualRef.current?.querySelector('.visual-content');
                if (visualContent) {
                  gsap.fromTo(visualContent,
                    { scale: 0.95, opacity: 0.8 },
                    { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }
                  );
                }
              },
              onEnterBack: () => {
                setActiveSection(index);
                // Add smooth visual transition
                const visualContent = visualRef.current?.querySelector('.visual-content');
                if (visualContent) {
                  gsap.fromTo(visualContent,
                    { scale: 0.95, opacity: 0.8 },
                    { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }
                  );
                }
              },
            });
          }
        });

      }, containerRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const renderAssetFractionalization = (isAnimating = false) => (
    <div className="w-full h-full flex items-center justify-center">
      {/* Main building */}
      <div className="relative">
        <div className={`w-48 h-80 bg-gradient-to-t from-blue-600 to-blue-400 rounded-lg shadow-2xl relative overflow-hidden visual-element ${
          isAnimating ? 'stagger-in' : ''
        }`} style={{ animationDelay: '0.1s' }}>
          {/* Building windows */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-4 h-4 bg-yellow-300 rounded-sm visual-element ${
                isAnimating ? 'stagger-in' : 'animate-pulse'
              }`}
              style={{
                left: `${15 + (i % 3) * 20}px`,
                top: `${10 + Math.floor(i / 3) * 15}px`,
                animationDelay: isAnimating ? `${0.3 + i * 0.05}s` : `${i * 0.2}s`
              }}
            />
          ))}
          
          {/* Fraction lines */}
          <div className="absolute inset-0 grid grid-cols-4 gap-0">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className={`border border-white/40 visual-element ${
                  isAnimating ? 'stagger-in' : 'animate-pulse'
                }`}
                style={{ animationDelay: isAnimating ? `${0.4 + i * 0.02}s` : `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>

        {/* Floating percentage tokens */}
        {['25%', '12.5%', '6.25%', '31.25%'].map((percent, i) => (
          <div
            key={i}
            className={`absolute w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg visual-element ${
              isAnimating ? 'stagger-in' : 'animate-bounce'
            }`}
            style={{
              left: `${-30 + i * 40}px`,
              top: `${60 + Math.sin(i) * 25}px`,
              animationDelay: isAnimating ? `${0.2 + i * 0.1}s` : `${i * 0.3}s`,
              animationDuration: isAnimating ? '0.6s' : '2s'
            }}
          >
            {percent}
          </div>
        ))}

        {/* AI Agent indicator */}
        <div className={`absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center visual-element ${
          isAnimating ? 'stagger-in' : 'animate-pulse'
        }`} style={{ animationDelay: isAnimating ? '0.5s' : '0s' }}>
          <span className="text-white text-lg">📊</span>
        </div>
      </div>
    </div>
  );

  const renderPassiveEarning = (isAnimating = false) => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        {/* Central money flow */}
        <div className={`w-48 h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl visual-element ${
          isAnimating ? 'stagger-in' : ''
        }`} style={{ animationDelay: '0.1s' }}>
          <DollarSign className={`w-24 h-24 text-white ${isAnimating ? '' : 'animate-pulse'}`} />
        </div>

        {/* Orbiting coins */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-base font-bold visual-element ${
              isAnimating ? 'stagger-in' : ''
            }`}
            style={{
              left: '50%',
              top: '50%',
              marginLeft: '-20px',
              marginTop: '-20px',
              transformOrigin: `${Math.cos(i * Math.PI / 3) * 70}px ${Math.sin(i * Math.PI / 3) * 70}px`,
              animation: isAnimating ? 'staggerSlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards' : 'spin 8s linear infinite',
              animationDelay: isAnimating ? `${0.2 + i * 0.1}s` : `${i * 0.3}s`
            }}
          >
            $
          </div>
        ))}

        {/* Yield streams */}
        {['+16.3%', '+12.8%', '+18.2%'].map((yield_, i) => (
          <div
            key={i}
            className={`absolute bg-green-500 text-white px-4 py-2 rounded-full text-base font-medium visual-element ${
              isAnimating ? 'stagger-in' : 'animate-bounce'
            }`}
            style={{
              left: `${-50 + i * 50}px`,
              top: `${-80 + i * 25}px`,
              animationDelay: isAnimating ? `${0.3 + i * 0.1}s` : `${i * 0.4}s`
            }}
          >
            {yield_}
          </div>
        ))}

        {/* Professional management indicator */}
        <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-3 rounded-lg text-sm visual-element ${
          isAnimating ? 'stagger-in' : 'animate-pulse'
        }`} style={{ animationDelay: isAnimating ? '0.5s' : '0s' }}>
          Expert Management
        </div>
      </div>
    </div>
  );

  const renderHighReturns = (isAnimating = false) => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        {/* Chart container */}
        <div className={`w-64 h-40 bg-white rounded-lg shadow-2xl p-6 relative overflow-hidden visual-element ${
          isAnimating ? 'stagger-in' : ''
        }`} style={{ animationDelay: '0.1s' }}>
          {/* Animated chart bars */}
          <div className="flex items-end justify-between h-full">
            {[65, 45, 80, 35, 90, 70, 95].map((height, i) => (
              <div
                key={i}
                className={`bg-gradient-to-t from-blue-500 to-green-400 w-6 rounded-t visual-element ${
                  isAnimating ? 'stagger-in' : ''
                }`}
                style={{
                  height: `${height}%`,
                  animationDelay: isAnimating ? `${0.2 + i * 0.05}s` : `${i * 0.2}s`,
                  transition: 'height 1s ease-out'
                }}
              />
            ))}
          </div>

          {/* Trend line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path
              d="M10 80 Q50 60 80 40 T140 20"
              stroke="#10B981"
              strokeWidth="3"
              fill="none"
              className={isAnimating ? '' : 'animate-pulse'}
              strokeDasharray="5,5"
            />
          </svg>
        </div>

        {/* Percentage indicators */}
        <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full font-bold text-xl visual-element ${
          isAnimating ? 'stagger-in' : 'animate-bounce'
        }`} style={{ animationDelay: isAnimating ? '0.3s' : '0s' }}>
          16.3%
        </div>

        {/* Performance metrics */}
        {[
          { label: 'ROI', value: '16.3%', color: 'bg-green-500' },
          { label: 'Growth', value: '+24%', color: 'bg-blue-500' },
          { label: 'Yield', value: '8.2%', color: 'bg-purple-500' }
        ].map((metric, i) => (
          <div
            key={i}
            className={`absolute ${metric.color} text-white px-4 py-2 rounded text-sm visual-element ${
              isAnimating ? 'stagger-in' : 'animate-pulse'
            }`}
            style={{
              left: `${-40 + i * 40}px`,
              bottom: `${-50 + i * 15}px`,
              animationDelay: isAnimating ? `${0.4 + i * 0.1}s` : `${i * 0.3}s`
            }}
          >
            <div className="font-bold">{metric.value}</div>
            <div className="text-xs opacity-80">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFlexibleExit = (isAnimating = false) => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        {/* Trading interface mockup */}
        <div className={`w-56 h-64 bg-gray-900 rounded-2xl p-4 shadow-2xl visual-element ${
          isAnimating ? 'stagger-in' : ''
        }`} style={{ animationDelay: '0.1s' }}>
          <div className="bg-white rounded-lg p-4 h-full">
            {/* Header */}
            <div className={`text-center mb-6 visual-element ${
              isAnimating ? 'stagger-in' : ''
            }`} style={{ animationDelay: '0.2s' }}>
              <div className="text-base font-bold text-gray-800">Secondary Market</div>
              <div className="text-sm text-gray-500">Instant Liquidity</div>
            </div>

            {/* Asset tokens */}
            <div className="space-y-3 mb-6">
              {[
                { name: 'NYC Apt #123', price: '$2,450', change: '+5.2%' },
                { name: 'Gold ETF', price: '$1,890', change: '+2.1%' },
                { name: 'Art Token', price: '$950', change: '+8.7%' }
              ].map((asset, i) => (
                <div key={i} className={`bg-gray-50 rounded p-3 text-sm visual-element ${
                  isAnimating ? 'stagger-in' : ''
                }`} style={{ animationDelay: isAnimating ? `${0.3 + i * 0.1}s` : '0s' }}>
                  <div className="font-medium text-gray-800">{asset.name}</div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{asset.price}</span>
                    <span className="text-green-600">{asset.change}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Sell button */}
            <button className={`w-full bg-red-500 text-white py-3 rounded font-medium text-sm visual-element ${
              isAnimating ? 'stagger-in' : 'animate-pulse'
            }`} style={{ animationDelay: isAnimating ? '0.6s' : '0s' }}>
              Sell Instantly
            </button>
          </div>
        </div>

        {/* Blockchain indicators */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 bg-blue-400 rounded-full visual-element ${
              isAnimating ? 'stagger-in' : 'animate-ping'
            }`}
            style={{
              left: `${Math.cos(i * Math.PI / 3) * 100}px`,
              top: `${Math.sin(i * Math.PI / 3) * 100}px`,
              animationDelay: isAnimating ? `${0.4 + i * 0.05}s` : `${i * 0.2}s`
            }}
          />
        ))}

        {/* Transaction speed indicator */}
        <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm visual-element ${
          isAnimating ? 'stagger-in' : 'animate-bounce'
        }`} style={{ animationDelay: isAnimating ? '0.7s' : '0s' }}>
          ⚡ 2-second settlement
        </div>
      </div>
    </div>
  );

  const renderWorldAssets = (isAnimating = false) => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        {/* Central globe */}
        <div className={`w-48 h-48 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl relative visual-element ${
          isAnimating ? 'stagger-in' : ''
        }`} style={{ animationDelay: '0.1s' }}>
          <Globe className={`w-24 h-24 text-white ${isAnimating ? '' : 'animate-spin'}`} style={{ animationDuration: '10s' }} />
          
          {/* Orbiting asset icons */}
          {[
            { icon: Home, color: 'bg-blue-500', label: 'Real Estate' },
            { icon: Coins, color: 'bg-yellow-500', label: 'Gold' },
            { icon: Briefcase, color: 'bg-purple-500', label: 'Private Equity' },
            { icon: BarChart3, color: 'bg-green-500', label: 'Commodities' }
          ].map((asset, i) => {
            const angle = (i * Math.PI / 2); // 0, 90, 180, 270 degrees
            const radius = 120;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <div
                key={i}
                className={`absolute w-14 h-14 ${asset.color} rounded-full flex items-center justify-center shadow-lg visual-element ${
                  isAnimating ? 'stagger-in' : ''
                }`}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  marginLeft: '-28px',
                  marginTop: '-28px',
                  animation: isAnimating ? 'staggerSlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards' : 'spin 12s linear infinite',
                  animationDelay: isAnimating ? `${0.2 + i * 0.1}s` : `${i * 0.5}s`
                }}
              >
                <asset.icon className="w-7 h-7 text-white" />
              </div>
            );
          })}
        </div>

        {/* Asset class labels */}
        {['Real Estate', 'Gold', 'Commodities', 'Private Equity'].map((asset, i) => (
          <div
            key={i}
            className={`absolute bg-white shadow-lg rounded-full px-4 py-2 text-sm font-medium text-gray-900 visual-element ${
              isAnimating ? 'stagger-in' : 'animate-pulse'
            }`}
            style={{
              left: `${-60 + i * 45}px`,
              top: `${-90 + Math.sin(i) * 40}px`,
              animationDelay: isAnimating ? `${0.3 + i * 0.1}s` : `${i * 0.4}s`,
              animationDuration: isAnimating ? '0.6s' : '3s'
            }}
          >
            {asset}
          </div>
        ))}

        {/* AI insights badge */}
        <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm visual-element ${
          isAnimating ? 'stagger-in' : 'animate-bounce'
        }`} style={{ animationDelay: isAnimating ? '0.5s' : '0s' }}>
          📈 AI Investment Insights
        </div>
      </div>
    </div>
  );

  const renderVisualContent = (sectionIndex) => {
    const isCurrentlyAnimating = activeSection === sectionIndex;
    
    switch (sections[sectionIndex]?.visual) {
      case 'asset-fractionalization':
        return renderAssetFractionalization(isCurrentlyAnimating);
      case 'passive-earning':
        return renderPassiveEarning(isCurrentlyAnimating);
      case 'high-returns':
        return renderHighReturns(isCurrentlyAnimating);
      case 'flexible-exit':
        return renderFlexibleExit(isCurrentlyAnimating);
      case 'world-assets':
        return renderWorldAssets(isCurrentlyAnimating);
      default:
        return renderAssetFractionalization(isCurrentlyAnimating);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-green-50 to-green-100" ref={containerRef}>
      <style jsx>{`
        @keyframes textShine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes staggerSlideIn {
          0% { 
            transform: translateX(-100px) rotateZ(-10deg);
            opacity: 0;
          }
          60% { 
            transform: translateX(10px) rotateZ(2deg);
            opacity: 0.8;
          }
          100% { 
            transform: translateX(0px) rotateZ(0deg);
            opacity: 1;
          }
        }
        
        .text-shine {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          background-size: 200% 100%;
          animation: textShine 2s infinite;
          -webkit-background-clip: text;
          background-clip: text;
        }
        
        .stagger-in {
          animation: staggerSlideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .visual-element {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .sticky-visual {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 50% !important;
          height: 100vh !important;
          z-index: 10 !important;
          background: linear-gradient(to bottom right, #f0fdf4, #dcfce7) !important;
        }
      `}</style>
      
      {/* Main Container with proper flex layout */}
      <div className="flex">
        {/* Left Side - Visual Panel (will be pinned by GSAP) */}
        <div
          ref={visualRef}
          className="w-1/2 h-screen flex items-center justify-center p-12 bg-gradient-to-br from-green-50 to-green-100"
        >
          <div
            className="visual-content relative w-96 h-[500px] flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${2 + Math.random()}s`
                  }}
                />
              ))}
            </div>

            {/* Main visual content */}
            <div className="relative z-10" style={{ overflow: 'visible' }}>
              {renderVisualContent(activeSection)}
            </div>

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-pink-400 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
          </div>
        </div>

        {/* Right Side - Scrollable Content */}
        <div ref={contentRef} className="w-1/2">
            {sections.map((section, index) => (
              <div
                key={section.id}
                ref={el => sectionsRef.current[index] = el}
              className="min-h-screen flex items-center px-12 py-20"
              >
                <div className="max-w-lg">
                  <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">AI</span>
                    </div>
                  <div className="text-sm font-medium text-green-600">
                      COPYM • 0{index + 1}
                    </div>
                  </div>
                  
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 transition-all duration-500 ${
                    activeSection === index 
                    ? 'bg-green-500/20 text-green-700 border border-green-500/30' 
                    : 'bg-gray-200/50 text-gray-600 border border-gray-300/30'
                  }`}>
                    {section.highlight}
                  </div>
                  
                  <h2 className={`text-5xl font-bold mb-4 transition-all duration-700 leading-tight ${
                    activeSection === index 
                    ? 'text-gray-900' 
                      : 'text-gray-500'
                  }`}>
                    {section.title}
                  </h2>
                  
                  <h3 className={`text-2xl font-semibold mb-6 transition-all duration-500 ${
                    activeSection === index 
                    ? 'text-blue-600' 
                      : 'text-gray-600'
                  }`}>
                    {section.subtitle}
                  </h3>
                  
                  <p className={`text-lg leading-relaxed transition-all duration-500 ${
                    activeSection === index 
                    ? 'text-gray-700' 
                      : 'text-gray-500'
                  }`}>
                    {section.content}
                  </p>

                  {activeSection === index && (
                    <div className="mt-8 space-y-4">
                      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        AI Investment Assistant • Market Analytics
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RealEstateInvestmentSection;