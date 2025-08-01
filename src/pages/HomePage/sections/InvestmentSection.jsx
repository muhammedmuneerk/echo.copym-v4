import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, Shield, Zap, RefreshCw, Building, Coins, PieChart, Gem, BarChart3, 
  DollarSign, ArrowUpRight, Repeat, Globe, Home, Briefcase, Palette, Plus, 
  Send, MessageCircle, ArrowUp, ArrowDown, ArrowLeftRight, CreditCard, 
  Wallet, Banknote, Activity, Target, Star, Award, CheckCircle, Clock, 
  Calendar, Users, Settings, Bell, Search, Filter, Download, Upload, 
  Share, Heart, Bookmark, Eye, EyeOff, Lock, Unlock, Key, Database, 
  Server, Cpu, HardDrive, Wifi, Signal, Battery, Volume2, VolumeX, 
  Play, Pause, SkipBack, SkipForward, RotateCcw, RotateCw, Maximize2, 
  Minimize2, X, Check, AlertCircle, Info, HelpCircle, ExternalLink
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const RealEstateInvestmentSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const visualRef = useRef(null);
  const contentRef = useRef(null);
  const sectionsRef = useRef([]);

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      highlight: "+16.3% Annual Return",
      visual: "passive-earning"
    },
    {
      id: 2,
      title: "High Returns",
      subtitle: "AI-Powered Analytics",
      content: "Invest monthly and earn up to +16.3% annual rental return. Our AI agent analyzes market trends, property performance, and investment opportunities to help you make informed decisions.",
      highlight: "AI Investment Insights",
      visual: "high-returns"
    },
    {
      id: 3,
      title: "Flexible Exit and Buy",
      subtitle: "Secondary Market Trading",
      content: "Buy and sell your property shares on the secondary market with just a few clicks. Complete liquidity powered by blockchain technology and smart contracts for instant settlements and purchases.",
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
    },
    {
      id: 5,
      title: "Embedded Stablecoin Wallet",
      subtitle: "Instant, Programmable, Multi-Currency",
      content: "Users can deposit, send, receive, or swap stablecoins like USDC in real-time — all from a single, secure wallet. Built-in support for fiat ramps and multi-chain operations ensures seamless experiences across borders.",
      highlight: "Fintech Evolution",
      visual: "stablecoin-wallet"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      let ctx = gsap.context(() => {
        // Kill any existing ScrollTriggers
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        if (!isMobile) {
          // Desktop layout - Pin the visual panel ONLY within this section
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: () => contentRef.current ? `+=${contentRef.current.scrollHeight - window.innerHeight}` : "+=100vh",
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
        } else {
          // Mobile layout - Simple scroll triggers for each section
          sectionsRef.current.forEach((section, index) => {
            if (section) {
              ScrollTrigger.create({
                trigger: section,
                start: "top center",
                end: "bottom center",
                onEnter: () => {
                  setActiveSection(index);
                },
                onEnterBack: () => {
                  setActiveSection(index);
                },
              });
            }
          });
        }

      }, containerRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [isMobile]);

  const renderAssetFractionalization = (isAnimating = false) => (
    <div className="w-full h-full flex items-center justify-center">
      <img
        src="/assets/Images/fractions.png"
        alt="Fractional Ownership Visualization"
        className={`${isMobile ? 'w-76' : 'w-96'} h-auto object-contain visual-element ${isAnimating ? 'stagger-in' : ''}`}
              style={{
          animationDelay: '0.1s',
          filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
          maxWidth: '100%',
          height: 'auto'
        }}
      />
    </div>
  );

  const renderPassiveEarning = (isAnimating = false) => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        {/* Custom SVG coin with premium styling */}
        <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" 
             className={`${isMobile ? 'w-56 h-56' : 'w-72 h-72'} visual-element drop-shadow-2xl ${isAnimating ? 'stagger-in' : ''}`}
          style={{
            animationDelay: '0.1s',
               filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))',
            maxWidth: '100%',
               height: 'auto'
             }}>
          <defs>
            {/* Premium gold coin gradients */}
            <radialGradient id="coinBaseGradient" cx="0.35" cy="0.25" r="0.9">
              <stop offset="0%" style={{stopColor:"#fffbf0",stopOpacity:1}} />
              <stop offset="20%" style={{stopColor:"#fff8dc",stopOpacity:1}} />
              <stop offset="45%" style={{stopColor:"#ffd700",stopOpacity:1}} />
              <stop offset="70%" style={{stopColor:"#daa520",stopOpacity:1}} />
              <stop offset="90%" style={{stopColor:"#b8860b",stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#8b6914",stopOpacity:1}} />
            </radialGradient>
            {/* Outer rim gradient */}
            <radialGradient id="rimGradient" cx="0.3" cy="0.2" r="0.95">
              <stop offset="0%" style={{stopColor:"#fffbf0",stopOpacity:1}} />
              <stop offset="30%" style={{stopColor:"#ffd700",stopOpacity:1}} />
              <stop offset="60%" style={{stopColor:"#daa520",stopOpacity:1}} />
              <stop offset="85%" style={{stopColor:"#b8860b",stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#8b6914",stopOpacity:1}} />
            </radialGradient>
            {/* Dollar sign gradient - clean white */}
            <linearGradient id="dollarSignGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#ffffff",stopOpacity:1}} />
              <stop offset="25%" style={{stopColor:"#f8f8f8",stopOpacity:1}} />
              <stop offset="50%" style={{stopColor:"#e8e8e8",stopOpacity:1}} />
              <stop offset="75%" style={{stopColor:"#d0d0d0",stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#b8b8b8",stopOpacity:1}} />
            </linearGradient>
            {/* Rope/chain pattern gradient */}
            <linearGradient id="ropeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#fffbf0",stopOpacity:1}} />
              <stop offset="40%" style={{stopColor:"#ffd700",stopOpacity:1}} />
              <stop offset="70%" style={{stopColor:"#daa520",stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#b8860b",stopOpacity:1}} />
            </linearGradient>
            {/* Edge detail gradient */}
            <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#daa520",stopOpacity:1}} />
              <stop offset="50%" style={{stopColor:"#b8860b",stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#8b6914",stopOpacity:1}} />
            </linearGradient>
            {/* Soft highlight gradients */}
            <radialGradient id="highlightGradient" cx="0.25" cy="0.15" r="0.6">
              <stop offset="0%" style={{stopColor:"#ffffff",stopOpacity:0.4}} />
              <stop offset="40%" style={{stopColor:"#ffffff",stopOpacity:0.2}} />
              <stop offset="70%" style={{stopColor:"#ffffff",stopOpacity:0.1}} />
              <stop offset="100%" style={{stopColor:"#ffffff",stopOpacity:0}} />
            </radialGradient>
            {/* Secondary highlight for depth */}
            <radialGradient id="secondaryHighlight" cx="0.7" cy="0.3" r="0.4">
              <stop offset="0%" style={{stopColor:"#ffffff",stopOpacity:0.3}} />
              <stop offset="60%" style={{stopColor:"#ffffff",stopOpacity:0.1}} />
              <stop offset="100%" style={{stopColor:"#ffffff",stopOpacity:0}} />
            </radialGradient>
            {/* Shadow filter */}
            <filter id="coinShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="8" dy="12" stdDeviation="8" floodColor="#000000" floodOpacity="0.3"/>
            </filter>
            {/* Inner shadow filter */}
            <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#000000" floodOpacity="0.2"/>
            </filter>
            {/* Emboss filter for raised effect */}
            <filter id="embossFilter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
              <feSpecularLighting result="specOut" in="blur" specularConstant="2" specularExponent="20" lightingColor="white">
                <fePointLight x="-50" y="-50" z="200"/>
              </feSpecularLighting>
              <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut2"/>
              <feComposite in="SourceGraphic" in2="specOut2" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
            </filter>
            {/* Texture pattern for metallic surface */}
            <pattern id="metallicTexture" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="0.5" fill="rgba(255,255,255,0.1)"/>
              <circle cx="2" cy="2" r="0.3" fill="rgba(255,255,255,0.05)"/>
              <circle cx="6" cy="6" r="0.3" fill="rgba(255,255,255,0.05)"/>
            </pattern>
          </defs>
          {/* Transparent background - only coin visible */}
          <circle cx="200" cy="200" r="190" fill="url(#coinBaseGradient)" filter="url(#coinShadow)"/>
          {/* Outer rim with rope/chain pattern */}
          <circle cx="200" cy="200" r="190" fill="none" stroke="url(#rimGradient)" strokeWidth="8"/>
          {/* Sharp decorative pattern on outer rim */}
          <g id="ropePattern" stroke="url(#ropeGradient)" strokeWidth="2" fill="none" opacity="0.9">
            {/* Clean dotted pattern around the edge */}
            <circle cx="200" cy="200" r="185" strokeDasharray="4,6" opacity="0.7"/>
            <circle cx="200" cy="200" r="182" strokeDasharray="2,8" opacity="0.5"/>
            {/* Sharp geometric pattern */}
            <g transform="translate(200,200)">
              <g id="patternSegment">
                <rect x="-185" y="-2" width="4" height="4" fill="url(#ropeGradient)" opacity="0.8"/>
                <rect x="-175" y="-1" width="3" height="3" fill="url(#ropeGradient)" opacity="0.6"/>
              </g>
              {/* Repeat sharp pattern around circumference */}
              <use href="#patternSegment" transform="rotate(15)"/>
              <use href="#patternSegment" transform="rotate(30)"/>
              <use href="#patternSegment" transform="rotate(45)"/>
              <use href="#patternSegment" transform="rotate(60)"/>
              <use href="#patternSegment" transform="rotate(75)"/>
              <use href="#patternSegment" transform="rotate(90)"/>
              <use href="#patternSegment" transform="rotate(105)"/>
              <use href="#patternSegment" transform="rotate(120)"/>
              <use href="#patternSegment" transform="rotate(135)"/>
              <use href="#patternSegment" transform="rotate(150)"/>
              <use href="#patternSegment" transform="rotate(165)"/>
              <use href="#patternSegment" transform="rotate(180)"/>
              <use href="#patternSegment" transform="rotate(195)"/>
              <use href="#patternSegment" transform="rotate(210)"/>
              <use href="#patternSegment" transform="rotate(225)"/>
              <use href="#patternSegment" transform="rotate(240)"/>
              <use href="#patternSegment" transform="rotate(255)"/>
              <use href="#patternSegment" transform="rotate(270)"/>
              <use href="#patternSegment" transform="rotate(285)"/>
              <use href="#patternSegment" transform="rotate(300)"/>
              <use href="#patternSegment" transform="rotate(315)"/>
              <use href="#patternSegment" transform="rotate(330)"/>
              <use href="#patternSegment" transform="rotate(345)"/>
            </g>
          </g>
          {/* Reeded edge */}
          <g transform="translate(200,200)">
            <g id="ridge">
              <rect x="188" y="-2" width="4" height="4" fill="url(#edgeGradient)" />
            </g>
            {/* 72 ridges (5° apart) */}
            <use href="#ridge" transform="rotate(0)"/><use href="#ridge" transform="rotate(5)"/><use href="#ridge" transform="rotate(10)"/>
            <use href="#ridge" transform="rotate(15)"/><use href="#ridge" transform="rotate(20)"/><use href="#ridge" transform="rotate(25)"/>
            <use href="#ridge" transform="rotate(30)"/><use href="#ridge" transform="rotate(35)"/><use href="#ridge" transform="rotate(40)"/>
            <use href="#ridge" transform="rotate(45)"/><use href="#ridge" transform="rotate(50)"/><use href="#ridge" transform="rotate(55)"/>
            <use href="#ridge" transform="rotate(60)"/><use href="#ridge" transform="rotate(65)"/><use href="#ridge" transform="rotate(70)"/>
            <use href="#ridge" transform="rotate(75)"/><use href="#ridge" transform="rotate(80)"/><use href="#ridge" transform="rotate(85)"/>
            <use href="#ridge" transform="rotate(90)"/><use href="#ridge" transform="rotate(95)"/><use href="#ridge" transform="rotate(100)"/>
            <use href="#ridge" transform="rotate(105)"/><use href="#ridge" transform="rotate(110)"/><use href="#ridge" transform="rotate(115)"/>
            <use href="#ridge" transform="rotate(120)"/><use href="#ridge" transform="rotate(125)"/><use href="#ridge" transform="rotate(130)"/>
            <use href="#ridge" transform="rotate(135)"/><use href="#ridge" transform="rotate(140)"/><use href="#ridge" transform="rotate(145)"/>
            <use href="#ridge" transform="rotate(150)"/><use href="#ridge" transform="rotate(155)"/><use href="#ridge" transform="rotate(160)"/>
            <use href="#ridge" transform="rotate(165)"/><use href="#ridge" transform="rotate(170)"/><use href="#ridge" transform="rotate(175)"/>
            <use href="#ridge" transform="rotate(180)"/><use href="#ridge" transform="rotate(185)"/><use href="#ridge" transform="rotate(190)"/>
            <use href="#ridge" transform="rotate(195)"/><use href="#ridge" transform="rotate(200)"/><use href="#ridge" transform="rotate(205)"/>
            <use href="#ridge" transform="rotate(210)"/><use href="#ridge" transform="rotate(215)"/><use href="#ridge" transform="rotate(220)"/>
            <use href="#ridge" transform="rotate(225)"/><use href="#ridge" transform="rotate(230)"/><use href="#ridge" transform="rotate(235)"/>
            <use href="#ridge" transform="rotate(240)"/><use href="#ridge" transform="rotate(245)"/><use href="#ridge" transform="rotate(250)"/>
            <use href="#ridge" transform="rotate(255)"/><use href="#ridge" transform="rotate(260)"/><use href="#ridge" transform="rotate(265)"/>
            <use href="#ridge" transform="rotate(270)"/><use href="#ridge" transform="rotate(275)"/><use href="#ridge" transform="rotate(280)"/>
            <use href="#ridge" transform="rotate(285)"/><use href="#ridge" transform="rotate(290)"/><use href="#ridge" transform="rotate(295)"/>
            <use href="#ridge" transform="rotate(300)"/><use href="#ridge" transform="rotate(305)"/><use href="#ridge" transform="rotate(310)"/>
            <use href="#ridge" transform="rotate(315)"/><use href="#ridge" transform="rotate(320)"/><use href="#ridge" transform="rotate(325)"/>
            <use href="#ridge" transform="rotate(330)"/><use href="#ridge" transform="rotate(335)"/><use href="#ridge" transform="rotate(340)"/>
            <use href="#ridge" transform="rotate(345)"/><use href="#ridge" transform="rotate(350)"/><use href="#ridge" transform="rotate(355)"/>
          </g>
          {/* Dollar sign - main body */}
          <g id="dollarSign" transform="translate(200,200)">
            {/* Top bar of dollar sign */}
            <rect x="-3" y="-95" width="6" height="20" rx="3" fill="url(#dollarSignGradient)" />
            
            {/* Bottom bar of dollar sign */}
            <rect x="-3" y="75" width="6" height="20" rx="3" fill="url(#dollarSignGradient)" />
            
            {/* Main 3D Dollar Sign - perfectly centered */}
            <text
              x="0"
              y="-5"
              fontFamily="Arial Black, sans-serif"
              fontSize="140"
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="central"
              fill="url(#dollarSignGradient)"
              filter="url(#embossFilter)"
            >
              $
            </text>
          </g>
          {/* Edge ridges/reeding */}
          <g id="edgeRidges" opacity="0.4">
            {/* Create ridged edge pattern */}
            <g transform="translate(200,200)">
              <g id="ridge">
                <rect x="188" y="-2" width="4" height="4" fill="url(#edgeGradient)" transform="rotate(0)"/>
              </g>
              {/* Repeat ridges around the edge */}
              <g id="ridgePattern">
                <use href="#ridge" transform="rotate(0)"/>
                <use href="#ridge" transform="rotate(5)"/>
                <use href="#ridge" transform="rotate(10)"/>
                <use href="#ridge" transform="rotate(15)"/>
                <use href="#ridge" transform="rotate(20)"/>
                <use href="#ridge" transform="rotate(25)"/>
                <use href="#ridge" transform="rotate(30)"/>
                <use href="#ridge" transform="rotate(35)"/>
                <use href="#ridge" transform="rotate(40)"/>
                <use href="#ridge" transform="rotate(45)"/>
                <use href="#ridge" transform="rotate(50)"/>
                <use href="#ridge" transform="rotate(55)"/>
                <use href="#ridge" transform="rotate(60)"/>
                <use href="#ridge" transform="rotate(65)"/>
                <use href="#ridge" transform="rotate(70)"/>
                <use href="#ridge" transform="rotate(75)"/>
                <use href="#ridge" transform="rotate(80)"/>
                <use href="#ridge" transform="rotate(85)"/>
                <use href="#ridge" transform="rotate(90)"/>
                <use href="#ridge" transform="rotate(95)"/>
                <use href="#ridge" transform="rotate(100)"/>
                <use href="#ridge" transform="rotate(105)"/>
                <use href="#ridge" transform="rotate(110)"/>
                <use href="#ridge" transform="rotate(115)"/>
                <use href="#ridge" transform="rotate(120)"/>
                <use href="#ridge" transform="rotate(125)"/>
                <use href="#ridge" transform="rotate(130)"/>
                <use href="#ridge" transform="rotate(135)"/>
                <use href="#ridge" transform="rotate(140)"/>
                <use href="#ridge" transform="rotate(145)"/>
                <use href="#ridge" transform="rotate(150)"/>
                <use href="#ridge" transform="rotate(155)"/>
                <use href="#ridge" transform="rotate(160)"/>
                <use href="#ridge" transform="rotate(165)"/>
                <use href="#ridge" transform="rotate(170)"/>
                <use href="#ridge" transform="rotate(175)"/>
                <use href="#ridge" transform="rotate(180)"/>
                <use href="#ridge" transform="rotate(185)"/>
                <use href="#ridge" transform="rotate(190)"/>
                <use href="#ridge" transform="rotate(195)"/>
                <use href="#ridge" transform="rotate(200)"/>
                <use href="#ridge" transform="rotate(205)"/>
                <use href="#ridge" transform="rotate(210)"/>
                <use href="#ridge" transform="rotate(215)"/>
                <use href="#ridge" transform="rotate(220)"/>
                <use href="#ridge" transform="rotate(225)"/>
                <use href="#ridge" transform="rotate(230)"/>
                <use href="#ridge" transform="rotate(235)"/>
                <use href="#ridge" transform="rotate(240)"/>
                <use href="#ridge" transform="rotate(245)"/>
                <use href="#ridge" transform="rotate(250)"/>
                <use href="#ridge" transform="rotate(255)"/>
                <use href="#ridge" transform="rotate(260)"/>
                <use href="#ridge" transform="rotate(265)"/>
                <use href="#ridge" transform="rotate(270)"/>
                <use href="#ridge" transform="rotate(275)"/>
                <use href="#ridge" transform="rotate(280)"/>
                <use href="#ridge" transform="rotate(285)"/>
                <use href="#ridge" transform="rotate(290)"/>
                <use href="#ridge" transform="rotate(295)"/>
                <use href="#ridge" transform="rotate(300)"/>
                <use href="#ridge" transform="rotate(305)"/>
                <use href="#ridge" transform="rotate(310)"/>
                <use href="#ridge" transform="rotate(315)"/>
                <use href="#ridge" transform="rotate(320)"/>
                <use href="#ridge" transform="rotate(325)"/>
                <use href="#ridge" transform="rotate(330)"/>
                <use href="#ridge" transform="rotate(335)"/>
                <use href="#ridge" transform="rotate(340)"/>
                <use href="#ridge" transform="rotate(345)"/>
                <use href="#ridge" transform="rotate(350)"/>
                <use href="#ridge" transform="rotate(355)"/>
              </g>
            </g>
          </g>
          {/* Premium lighting effects */}
          {/* Primary highlight - soft and realistic */}
          <ellipse cx="160" cy="140" rx="50" ry="70" fill="url(#highlightGradient)" opacity="0.5" transform="rotate(-25 160 140)"/>
          
          {/* Secondary highlight for depth */}
          <ellipse cx="180" cy="130" rx="25" ry="35" fill="url(#secondaryHighlight)" opacity="0.4" transform="rotate(-20 180 130)"/>
          
          {/* Subtle depth shadow */}
          <ellipse cx="220" cy="220" rx="120" ry="120" fill="rgba(0,0,0,0.08)" opacity="0.4"/>
          
          {/* Edge bevel highlight */}
          <circle cx="200" cy="200" r="190" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" opacity="0.8"/>
          
          {/* Inner bevel for depth */}
          <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" opacity="0.6"/>
        </svg>

        {/* Subtle glow effect behind coin */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200/30 to-gray-300/30 rounded-full blur-3xl -z-10 scale-110"></div>

        {/* Growth percentage bubbles - clean monochromatic styling */}
        {[
          { value: '+18.2%', position: { left: '-80px', top: '-50px' }, icon: TrendingUp },
          { value: '+12.8%', position: { left: '-60px', top: '-100px' }, icon: Target },
          { value: '+16.3%', position: { left: '-40px', top: '-150px' }, icon: Star }
        ].map((item, i) => (
          <div
            key={i}
            className={`absolute bg-gradient-to-r mt-6 from-white to-gray-50 text-gray-800 px-6 py-3 rounded-full text-sm font-bold shadow-xl visual-element backdrop-blur-sm border border-gray-200 ${isAnimating ? 'stagger-in' : 'animate-pulse'
              }`}
            style={{
              ...item.position,
              animationDelay: isAnimating ? `${0.2 + i * 0.1}s` : `${i * 0.3}s`,
              boxShadow: '0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.06)'
            }}
          >
            <div className="flex items-center gap-2">
              <item.icon className="w-3 h-3 text-gray-600" />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
            {item.value}
            </div>
          </div>
        ))}

        {/* Clean Expert Management badge */}
        {/* <div className={`absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-xl text-sm font-medium shadow-2xl visual-element backdrop-blur-sm ${isAnimating ? 'stagger-in' : ''
          }`} style={{
            animationDelay: isAnimating ? '0.5s' : '0s',
            boxShadow: '0 15px 35px rgba(0,0,0,0.15), 0 5px 15px rgba(0,0,0,0.1)'
          }}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <Award className="w-4 h-4" />
              <div className="font-bold text-lg">Expert Management</div>
            </div>
          </div>
        </div> */}

        {/* Subtle decorative elements */}
        <div className="absolute -bottom-12 -left-12 w-4 h-4 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-60 animate-pulse shadow-lg"></div>
        <div className="absolute -bottom-12 -right-12 w-4 h-4 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full opacity-60 animate-pulse shadow-lg"></div>
        <div className="absolute -top-8 -right-8 w-3 h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full opacity-70 animate-bounce shadow-md"></div>
        <div className="absolute -top-8 -left-8 w-3 h-3 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-70 animate-bounce shadow-md"></div>
      </div>
    </div>
  );

  const renderHighReturns = (isAnimating = false) => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* 3D Bar Chart SVG - Centered */}
        <div className="relative mb-8">
          <svg width="500" height="350" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" className={`${isMobile ? 'w-80 h-56' : 'w-full h-auto'} visual-element ${isAnimating ? 'stagger-in' : ''}`} style={{ animationDelay: '0.1s' }}>
            <defs>
              {/* Background gradient */}
              <radialGradient id="backgroundGradient" cx="50%" cy="30%" r="70%">
                <stop offset="0%" style={{stopColor: "#f0f8ff", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#e6f3f0", stopOpacity: 1}} />
              </radialGradient>
              
              {/* Bar gradients for 3D effect */}
              {/* Dark Blue bars */}
              <linearGradient id="darkBlueFront" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: "#4a90e2", stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: "#2563eb", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#1e40af", stopOpacity: 1}} />
              </linearGradient>
              
              <linearGradient id="darkBlueTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "#7bb3f0", stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: "#4a90e2", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#2563eb", stopOpacity: 1}} />
              </linearGradient>
              
              <linearGradient id="darkBlueSide" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "#2563eb", stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: "#1e40af", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#1e3a8a", stopOpacity: 1}} />
              </linearGradient>
              
              {/* Light Blue bars */}
              <linearGradient id="lightBlueFront" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: "#7dd3fc", stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: "#38bdf8", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#0ea5e9", stopOpacity: 1}} />
              </linearGradient>
              
              <linearGradient id="lightBlueTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "#bae6fd", stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: "#7dd3fc", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#38bdf8", stopOpacity: 1}} />
              </linearGradient>
              
              <linearGradient id="lightBlueSide" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "#38bdf8", stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: "#0ea5e9", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#0284c7", stopOpacity: 1}} />
              </linearGradient>
              
              {/* Green bars */}
              <linearGradient id="greenFront" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: "#4ade80", stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: "#22c55e", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#16a34a", stopOpacity: 1}} />
              </linearGradient>
              
              <linearGradient id="greenTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "#86efac", stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: "#4ade80", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#22c55e", stopOpacity: 1}} />
              </linearGradient>
              
              <linearGradient id="greenSide" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "#22c55e", stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: "#16a34a", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#15803d", stopOpacity: 1}} />
              </linearGradient>
              
              {/* Teal bars */}
              <linearGradient id="tealFront" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: "#2dd4bf", stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: "#14b8a6", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#0f766e", stopOpacity: 1}} />
              </linearGradient>
              
              <linearGradient id="tealTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "#7dd3fc", stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: "#2dd4bf", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#14b8a6", stopOpacity: 1}} />
              </linearGradient>
              
              <linearGradient id="tealSide" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "#14b8a6", stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: "#0f766e", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#0d5858", stopOpacity: 1}} />
              </linearGradient>
              
              {/* Shadow filter */}
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.2"/>
              </filter>
              
              {/* Reflection gradient for base */}
              <linearGradient id="reflection" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: "#ffffff", stopOpacity: 0.3}} />
                <stop offset="100%" style={{stopColor: "#ffffff", stopOpacity: 0}} />
              </linearGradient>
            </defs>
            
            {/* Background */}
            {/* Removed white background for transparency */}
            
            {/* Base/Floor reflection */}
            <ellipse cx="300" cy="360" rx="250" ry="20" fill="url(#reflection)" opacity="0.4"/>
            
            {/* Purple accent dot (top-left) */}
            <circle cx="50" cy="50" r="6" fill="#a855f7" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite"/>
            </circle>
            
            {/* Bar 1 - Shortest (dark blue) */}
            <g id="bar1" transform="translate(80,320)" filter="url(#shadow)">
              {/* Front face */}
              <rect x="0" y="0" width="25" height="40" fill="url(#darkBlueFront)" stroke="#1e40af" strokeWidth="0.5">
                <animate attributeName="height" values="0;40" dur="0.8s" begin="0s" fill="freeze"/>
                <animate attributeName="y" values="40;0" dur="0.8s" begin="0s" fill="freeze"/>
              </rect>
              {/* Right side face */}
              <polygon points="25,0 35,-8 35,32 25,40" fill="url(#darkBlueSide)" stroke="#1e3a8a" strokeWidth="0.5">
                <animate attributeName="points" values="25,40 35,32 35,32 25,40;25,0 35,-8 35,32 25,40" dur="0.8s" begin="0s" fill="freeze"/>
              </polygon>
              {/* Beveled top */}
              <polygon points="0,0 25,0 35,-8 10,-8" fill="url(#darkBlueTop)" stroke="#4a90e2" strokeWidth="0.5">
                <animate attributeName="points" values="0,40 25,40 35,32 10,32;0,0 25,0 35,-8 10,-8" dur="0.8s" begin="0s" fill="freeze"/>
              </polygon>
            </g>
            
            {/* Bar 2 - Short (teal) */}
            <g id="bar2" transform="translate(120,290)" filter="url(#shadow)">
              {/* Front face */}
              <rect x="0" y="0" width="25" height="70" fill="url(#tealFront)" stroke="#0f766e" strokeWidth="0.5">
                <animate attributeName="height" values="0;70" dur="0.8s" begin="0.1s" fill="freeze"/>
                <animate attributeName="y" values="70;0" dur="0.8s" begin="0.1s" fill="freeze"/>
              </rect>
              {/* Right side face */}
              <polygon points="25,0 35,-8 35,62 25,70" fill="url(#tealSide)" stroke="#0d5858" strokeWidth="0.5">
                <animate attributeName="points" values="25,70 35,62 35,62 25,70;25,0 35,-8 35,62 25,70" dur="0.8s" begin="0.1s" fill="freeze"/>
              </polygon>
              {/* Beveled top */}
              <polygon points="0,0 25,0 35,-8 10,-8" fill="url(#tealTop)" stroke="#2dd4bf" strokeWidth="0.5">
                <animate attributeName="points" values="0,70 25,70 35,62 10,62;0,0 25,0 35,-8 10,-8" dur="0.8s" begin="0.1s" fill="freeze"/>
              </polygon>
            </g>
            
            {/* Bar 3 - Medium (dark blue) */}
            <g id="bar3" transform="translate(160,250)" filter="url(#shadow)">
              {/* Front face */}
              <rect x="0" y="0" width="25" height="110" fill="url(#darkBlueFront)" stroke="#1e40af" strokeWidth="0.5">
                <animate attributeName="height" values="0;110" dur="0.8s" begin="0.2s" fill="freeze"/>
                <animate attributeName="y" values="110;0" dur="0.8s" begin="0.2s" fill="freeze"/>
              </rect>
              {/* Right side face */}
              <polygon points="25,0 35,-8 35,102 25,110" fill="url(#darkBlueSide)" stroke="#1e3a8a" strokeWidth="0.5">
                <animate attributeName="points" values="25,110 35,102 35,102 25,110;25,0 35,-8 35,102 25,110" dur="0.8s" begin="0.2s" fill="freeze"/>
              </polygon>
              {/* Beveled top */}
              <polygon points="0,0 25,0 35,-8 10,-8" fill="url(#darkBlueTop)" stroke="#4a90e2" strokeWidth="0.5">
                <animate attributeName="points" values="0,110 25,110 35,102 10,102;0,0 25,0 35,-8 10,-8" dur="0.8s" begin="0.2s" fill="freeze"/>
              </polygon>
            </g>
            
            {/* Bar 4 - Medium-tall (light blue) */}
            <g id="bar4" transform="translate(200,230)" filter="url(#shadow)">
              {/* Front face */}
              <rect x="0" y="0" width="25" height="130" fill="url(#lightBlueFront)" stroke="#0ea5e9" strokeWidth="0.5">
                <animate attributeName="height" values="0;130" dur="0.8s" begin="0.3s" fill="freeze"/>
                <animate attributeName="y" values="130;0" dur="0.8s" begin="0.3s" fill="freeze"/>
              </rect>
              {/* Right side face */}
              <polygon points="25,0 35,-8 35,122 25,130" fill="url(#lightBlueSide)" stroke="#0284c7" strokeWidth="0.5">
                <animate attributeName="points" values="25,130 35,122 35,122 25,130;25,0 35,-8 35,122 25,130" dur="0.8s" begin="0.3s" fill="freeze"/>
              </polygon>
              {/* Beveled top */}
              <polygon points="0,0 25,0 35,-8 10,-8" fill="url(#lightBlueTop)" stroke="#7dd3fc" strokeWidth="0.5">
                <animate attributeName="points" values="0,130 25,130 35,122 10,122;0,0 25,0 35,-8 10,-8" dur="0.8s" begin="0.3s" fill="freeze"/>
              </polygon>
            </g>
            
            {/* Bar 5 - Small (green) */}
            <g id="bar5" transform="translate(240,310)" filter="url(#shadow)">
              {/* Front face */}
              <rect x="0" y="0" width="25" height="50" fill="url(#greenFront)" stroke="#16a34a" strokeWidth="0.5">
                <animate attributeName="height" values="0;50" dur="0.8s" begin="0.4s" fill="freeze"/>
                <animate attributeName="y" values="50;0" dur="0.8s" begin="0.4s" fill="freeze"/>
              </rect>
              {/* Right side face */}
              <polygon points="25,0 35,-8 35,42 25,50" fill="url(#greenSide)" stroke="#15803d" strokeWidth="0.5">
                <animate attributeName="points" values="25,50 35,42 35,42 25,50;25,0 35,-8 35,42 25,50" dur="0.8s" begin="0.4s" fill="freeze"/>
              </polygon>
              {/* Beveled top */}
              <polygon points="0,0 25,0 35,-8 10,-8" fill="url(#greenTop)" stroke="#4ade80" strokeWidth="0.5">
                <animate attributeName="points" values="0,50 25,50 35,42 10,42;0,0 25,0 35,-8 10,-8" dur="0.8s" begin="0.4s" fill="freeze"/>
              </polygon>
            </g>
            
            {/* Bar 6 - Tall (green) */}
            <g id="bar6" transform="translate(280,180)" filter="url(#shadow)">
              {/* Front face */}
              <rect x="0" y="0" width="25" height="180" fill="url(#greenFront)" stroke="#16a34a" strokeWidth="0.5">
                <animate attributeName="height" values="0;180" dur="0.8s" begin="0.5s" fill="freeze"/>
                <animate attributeName="y" values="180;0" dur="0.8s" begin="0.5s" fill="freeze"/>
              </rect>
              {/* Right side face */}
              <polygon points="25,0 35,-8 35,172 25,180" fill="url(#greenSide)" stroke="#15803d" strokeWidth="0.5">
                <animate attributeName="points" values="25,180 35,172 35,172 25,180;25,0 35,-8 35,172 25,180" dur="0.8s" begin="0.5s" fill="freeze"/>
              </polygon>
              {/* Beveled top */}
              <polygon points="0,0 25,0 35,-8 10,-8" fill="url(#greenTop)" stroke="#4ade80" strokeWidth="0.5">
                <animate attributeName="points" values="0,180 25,180 35,172 10,172;0,0 25,0 35,-8 10,-8" dur="0.8s" begin="0.5s" fill="freeze"/>
              </polygon>
            </g>
            
            {/* Bar 7 - Very tall (teal) */}
            <g id="bar7" transform="translate(320,120)" filter="url(#shadow)">
              {/* Front face */}
              <rect x="0" y="0" width="25" height="240" fill="url(#tealFront)" stroke="#0f766e" strokeWidth="0.5">
                <animate attributeName="height" values="0;240" dur="0.8s" begin="0.6s" fill="freeze"/>
                <animate attributeName="y" values="240;0" dur="0.8s" begin="0.6s" fill="freeze"/>
              </rect>
              {/* Right side face */}
              <polygon points="25,0 35,-8 35,232 25,240" fill="url(#tealSide)" stroke="#0d5858" strokeWidth="0.5">
                <animate attributeName="points" values="25,240 35,232 35,232 25,240;25,0 35,-8 35,232 25,240" dur="0.8s" begin="0.6s" fill="freeze"/>
              </polygon>
              {/* Beveled top */}
              <polygon points="0,0 25,0 35,-8 10,-8" fill="url(#tealTop)" stroke="#2dd4bf" strokeWidth="0.5">
                <animate attributeName="points" values="0,240 25,240 35,232 10,232;0,0 25,0 35,-8 10,-8" dur="0.8s" begin="0.6s" fill="freeze"/>
              </polygon>
            </g>
            
            {/* Bar 8 - Medium (light blue) */}
            <g id="bar8" transform="translate(360,200)" filter="url(#shadow)">
              {/* Front face */}
              <rect x="0" y="0" width="25" height="160" fill="url(#lightBlueFront)" stroke="#0ea5e9" strokeWidth="0.5">
                <animate attributeName="height" values="0;160" dur="0.8s" begin="0.7s" fill="freeze"/>
                <animate attributeName="y" values="160;0" dur="0.8s" begin="0.7s" fill="freeze"/>
              </rect>
              {/* Right side face */}
              <polygon points="25,0 35,-8 35,152 25,160" fill="url(#lightBlueSide)" stroke="#0284c7" strokeWidth="0.5">
                <animate attributeName="points" values="25,160 35,152 35,152 25,160;25,0 35,-8 35,152 25,160" dur="0.8s" begin="0.7s" fill="freeze"/>
              </polygon>
              {/* Beveled top */}
              <polygon points="0,0 25,0 35,-8 10,-8" fill="url(#lightBlueTop)" stroke="#7dd3fc" strokeWidth="0.5">
                <animate attributeName="points" values="0,160 25,160 35,152 10,152;0,0 25,0 35,-8 10,-8" dur="0.8s" begin="0.7s" fill="freeze"/>
              </polygon>
            </g>
            
            {/* Bar 9 - Short (green) */}
            <g id="bar9" transform="translate(400,270)" filter="url(#shadow)">
              {/* Front face */}
              <rect x="0" y="0" width="25" height="90" fill="url(#greenFront)" stroke="#16a34a" strokeWidth="0.5">
                <animate attributeName="height" values="0;90" dur="0.8s" begin="0.8s" fill="freeze"/>
                <animate attributeName="y" values="90;0" dur="0.8s" begin="0.8s" fill="freeze"/>
              </rect>
              {/* Right side face */}
              <polygon points="25,0 35,-8 35,82 25,90" fill="url(#greenSide)" stroke="#15803d" strokeWidth="0.5">
                <animate attributeName="points" values="25,90 35,82 35,82 25,90;25,0 35,-8 35,82 25,90" dur="0.8s" begin="0.8s" fill="freeze"/>
              </polygon>
              {/* Beveled top */}
              <polygon points="0,0 25,0 35,-8 10,-8" fill="url(#greenTop)" stroke="#4ade80" strokeWidth="0.5">
                <animate attributeName="points" values="0,90 25,90 35,82 10,82;0,0 25,0 35,-8 10,-8" dur="0.8s" begin="0.8s" fill="freeze"/>
              </polygon>
            </g>
            
            {/* Bar 10 - Medium-short (light blue) */}
            <g id="bar10" transform="translate(440,240)" filter="url(#shadow)">
              {/* Front face */}
              <rect x="0" y="0" width="25" height="120" fill="url(#lightBlueFront)" stroke="#0ea5e9" strokeWidth="0.5">
                <animate attributeName="height" values="0;120" dur="0.8s" begin="0.9s" fill="freeze"/>
                <animate attributeName="y" values="120;0" dur="0.8s" begin="0.9s" fill="freeze"/>
              </rect>
              {/* Right side face */}
              <polygon points="25,0 35,-8 35,112 25,120" fill="url(#lightBlueSide)" stroke="#0284c7" strokeWidth="0.5">
                <animate attributeName="points" values="25,120 35,112 35,112 25,120;25,0 35,-8 35,112 25,120" dur="0.8s" begin="0.9s" fill="freeze"/>
              </polygon>
              {/* Beveled top */}
              <polygon points="0,0 25,0 35,-8 10,-8" fill="url(#lightBlueTop)" stroke="#7dd3fc" strokeWidth="0.5">
                <animate attributeName="points" values="0,120 25,120 35,112 10,112;0,0 25,0 35,-8 10,-8" dur="0.8s" begin="0.9s" fill="freeze"/>
              </polygon>
            </g>
            
            {/* Bar 11 - Tallest (teal) */}
            <g id="bar11" transform="translate(480,80)" filter="url(#shadow)">
              {/* Front face */}
              <rect x="0" y="0" width="25" height="280" fill="url(#tealFront)" stroke="#0f766e" strokeWidth="0.5">
                <animate attributeName="height" values="0;280" dur="0.8s" begin="1.0s" fill="freeze"/>
                <animate attributeName="y" values="280;0" dur="0.8s" begin="1.0s" fill="freeze"/>
              </rect>
              {/* Right side face */}
              <polygon points="25,0 35,-8 35,272 25,280" fill="url(#tealSide)" stroke="#0d5858" strokeWidth="0.5">
                <animate attributeName="points" values="25,280 35,272 35,272 25,280;25,0 35,-8 35,272 25,280" dur="0.8s" begin="1.0s" fill="freeze"/>
              </polygon>
              {/* Beveled top */}
              <polygon points="0,0 25,0 35,-8 10,-8" fill="url(#tealTop)" stroke="#2dd4bf" strokeWidth="0.5">
                <animate attributeName="points" values="0,280 25,280 35,272 10,272;0,0 25,0 35,-8 10,-8" dur="0.8s" begin="1.0s" fill="freeze"/>
              </polygon>
            </g>
            
            {/* Bar 12 - Medium (light blue) */}
            <g id="bar12" transform="translate(520,210)" filter="url(#shadow)">
              {/* Front face */}
              <rect x="0" y="0" width="25" height="150" fill="url(#lightBlueFront)" stroke="#0ea5e9" strokeWidth="0.5">
                <animate attributeName="height" values="0;150" dur="0.8s" begin="1.1s" fill="freeze"/>
                <animate attributeName="y" values="150;0" dur="0.8s" begin="1.1s" fill="freeze"/>
              </rect>
              {/* Right side face */}
              <polygon points="25,0 35,-8 35,142 25,150" fill="url(#lightBlueSide)" stroke="#0284c7" strokeWidth="0.5">
                <animate attributeName="points" values="25,150 35,142 35,142 25,150;25,0 35,-8 35,142 25,150" dur="0.8s" begin="1.1s" fill="freeze"/>
              </polygon>
              {/* Beveled top */}
              <polygon points="0,0 25,0 35,-8 10,-8" fill="url(#lightBlueTop)" stroke="#7dd3fc" strokeWidth="0.5">
                <animate attributeName="points" values="0,150 25,150 35,142 10,142;0,0 25,0 35,-8 10,-8" dur="0.8s" begin="1.1s" fill="freeze"/>
              </polygon>
            </g>
            
            {/* Subtle sparkle effects */}
            <g id="sparkles" opacity="0.6">
              <circle cx="300" cy="100" r="1.5" fill="#ffffff">
                <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="450" cy="140" r="1" fill="#ffffff">
                <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="0.5s"/>
              </circle>
              <circle cx="200" cy="180" r="1.2" fill="#ffffff">
                <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="1s"/>
              </circle>
              <circle cx="380" cy="120" r="0.8" fill="#ffffff">
                <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="1.5s"/>
              </circle>
            </g>
            
            {/* Ambient lighting */}
            <g id="ambientLight" opacity="0.1">
              <radialGradient id="lightGlow" cx="30%" cy="20%" r="60%">
                <stop offset="0%" style={{stopColor: "#ffffff", stopOpacity: 0.8}} />
                <stop offset="100%" style={{stopColor: "#ffffff", stopOpacity: 0}} />
              </radialGradient>
              <rect width="600" height="400" fill="url(#lightGlow)"/>
            </g>
          </svg>
        </div>

        {/* Performance indicators positioned around the chart */}
        <div className="absolute top-4 right-4">
          {/* Main Performance Indicator */}
          <div className={`bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-bold text-lg visual-element shadow-lg ${isAnimating ? 'stagger-in' : 'animate-bounce'
          }`} style={{ animationDelay: isAnimating ? '0.3s' : '0s' }}>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              +16.3%
            </div>
          </div>
        </div>

        {/* Stacked Performance Metrics - Left Side */}
        <div className="absolute pb-32 -left-8 top-1/2 transform -translate-y-1/2 space-y-3">
          {[
            { label: 'ROI', value: '+16.3%', color: 'from-green-500 to-green-600', icon: Target },
            { label: 'Growth', value: '+24%', color: 'from-blue-500 to-blue-600', icon: TrendingUp },
            { label: 'Yield', value: '+8.2%', color: 'from-purple-500 to-purple-600', icon: BarChart3 }
        ].map((metric, i) => (
          <div
            key={i}
              className={`bg-gradient-to-r ${metric.color} text-white px-4 py-2 rounded-lg text-sm visual-element shadow-md ${isAnimating ? 'stagger-in' : 'animate-pulse'
              }`}
            style={{
                animationDelay: isAnimating ? `${0.4 + i * 0.1}s` : `${i * 0.3}s`,
                transform: `translateX(${i * -6}px)`
              }}
            >
              <div className="flex items-center gap-2">
                <metric.icon className="w-4 h-4" />
                <div className="font-semibold">{metric.value}</div>
                <div className="text-xs opacity-90">{metric.label}</div>
              </div>
          </div>
        ))}
        </div>

        {/* AI Analytics Badge - Bottom Center */}
        <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-2xl visual-element ${isAnimating ? 'stagger-in' : ''
          }`} style={{ animationDelay: isAnimating ? '0.6s' : '0s' }}>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            AI Analytics
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full animate-pulse shadow-md"></div>
        <div className="absolute top-12 right-12 w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-bounce shadow-sm"></div>
        <div className="absolute bottom-8 right-8 w-2 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-ping shadow-sm"></div>
        <div className="absolute bottom-12 left-12 w-3 h-3 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full animate-pulse shadow-md"></div>
      </div>
    </div>
  );

  const renderFlexibleExit = (isAnimating = false) => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        {/* Trading interface mockup */}
        <div className={`${isMobile ? 'w-56 h-72' : 'w-64 h-80'} bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-2 shadow-2xl visual-element ${isAnimating ? 'stagger-in' : ''
          }`} style={{ animationDelay: '0.1s' }}>
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-2 h-full flex flex-col border border-gray-200">
            {/* Header */}
            <div className={`text-center mb-2 visual-element ${isAnimating ? 'stagger-in' : ''
              }`} style={{ animationDelay: '0.2s' }}>
              <div className="text-base font-bold text-gray-800 flex items-center justify-center gap-2">
                <Activity className="w-4 h-4 text-blue-600" />
                Secondary Market
              </div>
              <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
                <Zap className="w-3 h-3" />
                Instant Liquidity
              </div>
            </div>

            {/* Asset tokens */}
            <div className="flex-1 space-y-1.5 mb-2">
              {[
                { name: 'NYC Apt #123', price: '$2,450', change: '+5.2%', icon: Building },
                { name: 'Gold ETF', price: '$1,890', change: '+2.1%', icon: Gem },
                { name: 'Art Token', price: '$950', change: '+8.7%', icon: Palette }
              ].map((asset, i) => (
                <div key={i} className={`bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-2 text-xs visual-element border border-gray-200 hover:shadow-md transition-all duration-300 ${isAnimating ? 'stagger-in' : ''
                  }`} style={{ animationDelay: isAnimating ? `${0.3 + i * 0.1}s` : '0s' }}>
                  <div className="font-semibold text-gray-800 flex items-center gap-2">
                    <asset.icon className="w-3 h-3 text-blue-600" />
                    {asset.name}
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-gray-600 font-medium">{asset.price}</span>
                    <span className="text-green-600 font-bold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {asset.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Settlement indicator */}
            <div className={`bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2 py-1 rounded-lg text-xs text-center mb-2 visual-element ${isAnimating ? 'stagger-in' : 'animate-pulse'
              }`} style={{ animationDelay: isAnimating ? '0.6s' : '0s' }}>
              <div className="flex items-center justify-center gap-1">
                <Zap className="w-3 h-3" />
                2-second settlement
              </div>
            </div>

            {/* Buy and Sell buttons in single line */}
            <div className="flex gap-1.5 mt-6 md:mt-0">
              <button className={`flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-1.5 rounded-lg font-semibold text-xs visual-element hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${isAnimating ? 'stagger-in' : 'animate-pulse'
                }`} style={{ animationDelay: isAnimating ? '0.7s' : '0s' }}>
                <div className="flex items-center justify-center gap-1">
                  <Plus className="w-3 h-3" />
                  Buy Instantly
                </div>
              </button>
              <button className={`flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white py-1.5 rounded-lg font-semibold text-xs visual-element hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${isAnimating ? 'stagger-in' : 'animate-pulse'
                }`} style={{ animationDelay: isAnimating ? '0.8s' : '0s' }}>
                <div className="flex items-center justify-center gap-1">
                  <ArrowDown className="w-3 h-3" />
              Sell Instantly
                </div>
            </button>
            </div>
          </div>
        </div>

        {/* Blockchain indicators */}
      

        {/* Subtle decorative elements */}
       
      </div>
    </div>
  );

  const renderWorldAssets = (isAnimating = false) => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className={`${isMobile ? 'w-80 h-80' : 'w-full h-auto'} visual-element ${isAnimating ? 'stagger-in' : ''}`} style={{ animationDelay: '0.1s' }}>
          {/* Definitions for gradients and patterns */}
          <defs>
            {/* Main globe gradient with blockchain theme */}
            <radialGradient id="globeGradient" cx="0.3" cy="0.3" r="0.8">
              <stop offset="0%" style={{stopColor: "#f8f9fa", stopOpacity: 1}} />
              <stop offset="40%" style={{stopColor: "#e3f2fd", stopOpacity: 1}} />
              <stop offset="80%" style={{stopColor: "#bbdefb", stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: "#64b5f6", stopOpacity: 1}} />
            </radialGradient>
            
            {/* Token gradient */}
            <radialGradient id="tokenGradient" cx="0.3" cy="0.3" r="0.7">
              <stop offset="0%" style={{stopColor: "#ffd700", stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: "#ffa000", stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: "#ff6f00", stopOpacity: 1}} />
            </radialGradient>
            
            {/* Digital asset gradient */}
            <linearGradient id="digitalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: "#4caf50", stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: "#2e7d32", stopOpacity: 1}} />
            </linearGradient>
            
            {/* Blockchain grid pattern */}
            <pattern id="blockchainGrid" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
              <rect width="25" height="25" fill="none" stroke="#4dabf7" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="12.5" cy="12.5" r="1.5" fill="#4dabf7" opacity="0.4"/>
            </pattern>
            
            {/* Token flow animation */}
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: "#4dabf7", stopOpacity: 0}} />
              <stop offset="50%" style={{stopColor: "#4dabf7", stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: "#4dabf7", stopOpacity: 0}} />
              <animateTransform attributeName="gradientTransform" attributeType="XML" type="translate" values="-100 0;400 0;-100 0" dur="3s" repeatCount="indefinite"/>
            </linearGradient>
          </defs>
          
          {/* Background circle (digital globe) */}
          <circle cx="250" cy="250" r="220" fill="url(#globeGradient)" stroke="#4dabf7" strokeWidth="2"/>
          
          {/* Blockchain grid overlay */}
          <circle cx="250" cy="250" r="220" fill="url(#blockchainGrid)" opacity="0.6"/>
          
          {/* Tokenized Real Estate (North America) */}
          <g id="realEstate">
            <path d="M 120 150 Q 110 140 105 130 Q 110 120 120 115 Q 130 110 140 115 Q 150 120 155 130 Q 160 140 165 150 Q 170 160 168 170 Q 165 180 160 190 Q 150 195 140 198 Q 130 200 120 198 Q 110 195 105 190 Q 100 180 105 170 Q 110 160 120 150 Z" 
                  fill="url(#digitalGradient)" opacity="0.8" stroke="#4caf50" strokeWidth="1.5"/>
            {/* Real Estate Tokens */}
            <circle cx="130" cy="140" r="6" fill="url(#tokenGradient)" stroke="#ffd700" strokeWidth="1"/>
            <text x="130" y="144" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6" fill="#fff" fontWeight="bold">RE</text>
            <circle cx="150" cy="165" r="5" fill="url(#tokenGradient)" stroke="#ffd700" strokeWidth="1"/>
            <text x="150" y="168" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5" fill="#fff">$</text>
          </g>
          
          {/* Tokenized Commodities (South America) */}
          <g id="commodities">
            <path d="M 150 260 Q 140 245 145 230 Q 150 215 155 205 Q 160 200 165 205 Q 170 215 175 230 Q 180 245 185 260 Q 190 275 185 290 Q 180 305 175 320 Q 170 335 160 340 Q 150 345 140 340 Q 135 325 138 310 Q 142 295 145 280 Q 148 265 150 260 Z" 
                  fill="url(#digitalGradient)" opacity="0.8" stroke="#4caf50" strokeWidth="1.5"/>
            {/* Commodity Tokens */}
            <circle cx="165" cy="280" r="6" fill="url(#tokenGradient)" stroke="#ffd700" strokeWidth="1"/>
            <text x="165" y="284" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6" fill="#fff" fontWeight="bold">OIL</text>
            <circle cx="150" cy="305" r="4" fill="url(#tokenGradient)" stroke="#ffd700" strokeWidth="1"/>
            <text x="150" y="308" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="4" fill="#fff">AU</text>
          </g>
          
          {/* Tokenized Art & IP (Europe) */}
          <g id="artIP">
            <path d="M 230 130 Q 225 125 228 120 Q 235 118 240 120 Q 245 122 248 125 Q 250 130 248 135 Q 245 140 240 142 Q 235 145 230 142 Q 228 138 230 135 Q 232 130 230 130 Z" 
                  fill="url(#digitalGradient)" opacity="0.8" stroke="#4caf50" strokeWidth="1.5"/>
            {/* Art/IP Tokens */}
            <circle cx="240" cy="135" r="5" fill="url(#tokenGradient)" stroke="#ffd700" strokeWidth="1"/>
            <text x="240" y="138" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5" fill="#fff" fontWeight="bold">NFT</text>
          </g>
          
          {/* Tokenized Carbon Credits (Africa) */}
          <g id="carbon">
            <path d="M 240 165 Q 238 160 240 155 Q 245 152 250 155 Q 255 158 258 162 Q 260 167 262 172 Q 264 177 263 182 Q 262 187 258 190 Q 255 193 250 192 Q 245 190 242 185 Q 240 180 241 175 Q 242 170 243 165 Q 244 160 240 165 Z" 
                  fill="url(#digitalGradient)" opacity="0.8" stroke="#4caf50" strokeWidth="1.5"/>
            {/* Carbon Credit Tokens */}
            <circle cx="255" cy="175" r="6" fill="url(#tokenGradient)" stroke="#ffd700" strokeWidth="1"/>
            <text x="255" y="179" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5" fill="#fff" fontWeight="bold">CO₂</text>
            <circle cx="245" cy="190" r="4" fill="url(#tokenGradient)" stroke="#ffd700" strokeWidth="1"/>
            <text x="245" y="193" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="4" fill="#fff">C</text>
          </g>
          
          {/* Tokenized Infrastructure (Asia) */}
          <g id="infrastructure">
            <path d="M 280 115 Q 275 110 278 105 Q 285 102 295 105 Q 305 108 310 115 Q 315 122 318 130 Q 320 138 318 145 Q 315 152 310 158 Q 305 164 295 167 Q 285 170 278 167 Q 275 164 272 158 Q 270 152 271 145 Q 272 138 274 130 Q 276 122 280 115 Z" 
                  fill="url(#digitalGradient)" opacity="0.8" stroke="#4caf50" strokeWidth="1.5"/>
            {/* Infrastructure Tokens */}
            <circle cx="295" cy="130" r="6" fill="url(#tokenGradient)" stroke="#ffd700" strokeWidth="1"/>
            <text x="295" y="134" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5" fill="#fff" fontWeight="bold">INFR</text>
            <circle cx="280" cy="150" r="5" fill="url(#tokenGradient)" stroke="#ffd700" strokeWidth="1"/>
            <text x="280" y="153" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5" fill="#fff">₿</text>
          </g>
          
          {/* Tokenized Resources (Australia) */}
          <g id="resources">
            <path d="M 315 285 Q 312 280 315 278 Q 320 276 325 278 Q 330 280 332 285 Q 335 290 334 295 Q 332 300 328 302 Q 325 305 320 303 Q 318 300 319 297 Q 320 295 320 290 Q 321 285 315 285 Z" 
                  fill="url(#digitalGradient)" opacity="0.8" stroke="#4caf50" strokeWidth="1.5"/>
            {/* Resource Tokens */}
            <circle cx="325" cy="290" r="5" fill="url(#tokenGradient)" stroke="#ffd700" strokeWidth="1"/>
            <text x="325" y="293" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5" fill="#fff" fontWeight="bold">MIN</text>
          </g>
          
          {/* Floating Token Clusters */}
          <g id="floatingTokens">
            {/* DeFi Token Cluster */}
            <circle cx="375" cy="100" r="10" fill="url(#tokenGradient)" stroke="#ffd700" strokeWidth="1.5" opacity="0.9"/>
            <text x="375" y="104" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7" fill="#fff" fontWeight="bold">DeFi</text>
            
            {/* Stablecoin Cluster */}
            <circle cx="125" cy="325" r="8" fill="url(#tokenGradient)" stroke="#ffd700" strokeWidth="1.5" opacity="0.9"/>
            <text x="125" y="329" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6" fill="#fff" fontWeight="bold">USDT</text>
            
            {/* Governance Token */}
            <circle cx="415" cy="315" r="7" fill="url(#tokenGradient)" stroke="#ffd700" strokeWidth="1.5" opacity="0.9"/>
            <text x="415" y="319" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6" fill="#fff" fontWeight="bold">GOV</text>
            
            {/* Utility Token */}
            <circle cx="85" cy="165" r="6" fill="url(#tokenGradient)" stroke="#ffd700" strokeWidth="1.5" opacity="0.9"/>
            <text x="85" y="169" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5" fill="#fff" fontWeight="bold">UTL</text>
          </g>
          
          {/* Blockchain Connection Lines */}
          <g id="blockchainConnections" stroke="#4dabf7" strokeWidth="1.5" fill="none" opacity="0.6">
            {/* Connecting tokens to main blockchain network */}
            <path d="M 250 250 Q 210 210 170 170 Q 130 130 120 140" strokeDasharray="4,4">
              <animate attributeName="strokeDashoffset" values="0;-16" dur="2s" repeatCount="indefinite"/>
            </path>
            <path d="M 250 250 Q 265 235 280 220 Q 295 205 295 130"/>
            <path d="M 250 250 Q 235 265 220 280 Q 205 295 165 280"/>
            <path d="M 250 250 Q 285 265 315 280 Q 345 295 325 290"/>
            <path d="M 250 250 Q 330 210 375 100"/>
          </g>
          
          {/* Token Flow Animation Lines */}
          <g id="tokenFlows">
            <line x1="40" y1="250" x2="460" y2="250" stroke="url(#flowGradient)" strokeWidth="2" opacity="0.8"/>
            <line x1="250" y1="40" x2="250" y2="460" stroke="url(#flowGradient)" strokeWidth="2" opacity="0.8"/>
          </g>
          
          {/* Central Tokenization Hub */}
          <g id="centralhub">
            <circle cx="250" cy="250" r="25" fill="url(#tokenGradient)" stroke="#ffd700" strokeWidth="2" opacity="0.95"/>
            <circle cx="250" cy="250" r="20" fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.7"/>
            <text x="250" y="245" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="8" fill="#fff" fontWeight="bold">TOKEN</text>
            <text x="250" y="256" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6" fill="#fff" fontWeight="bold">HUB</text>
            
            {/* Pulsing effect */}
            <circle cx="250" cy="250" r="30" fill="none" stroke="#ffd700" strokeWidth="1.5" opacity="0.5">
              <animate attributeName="r" values="30;38;30" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2s" repeatCount="indefinite"/>
            </circle>
          </g>
          
          {/* Latitude/Longitude Grid (Blockchain Network) */}
          <g id="blockchainGrid" stroke="#4dabf7" strokeWidth="0.8" fill="none" opacity="0.4">
            <ellipse cx="250" cy="250" rx="220" ry="220"/>
            <ellipse cx="250" cy="250" rx="220" ry="165"/>
            <ellipse cx="250" cy="250" rx="220" ry="110"/>
            <ellipse cx="250" cy="250" rx="220" ry="55"/>
            <ellipse cx="250" cy="250" rx="165" ry="220"/>
            <ellipse cx="250" cy="250" rx="110" ry="220"/>
            <ellipse cx="250" cy="250" rx="55" ry="220"/>
            <line x1="250" y1="30" x2="250" y2="470"/>
            <line x1="30" y1="250" x2="470" y2="250"/>
          </g>
          
          {/* Asset Category Labels */}
          <g id="categoryLabels" fontFamily="Arial, sans-serif" fontSize="8" fill="#2e7d32" fontWeight="bold">
            <text x="120" y="110" textAnchor="middle">REAL ESTATE</text>
            <text x="165" y="360" textAnchor="middle">COMMODITIES</text>
            <text x="240" y="105" textAnchor="middle">ART & IP</text>
            <text x="255" y="200" textAnchor="middle">CARBON</text>
            <text x="295" y="85" textAnchor="middle">INFRASTRUCTURE</text>
            <text x="325" y="320" textAnchor="middle">RESOURCES</text>
          </g>
          
          {/* Tokenization Stats */}
          <g id="stats" fontFamily="Arial, sans-serif" fontSize="7" fill="#4dabf7">
            <text x="40" y="450">Total Value Locked: $2.4T</text>
            <text x="40" y="460">Active Tokens: 847,293</text>
            <text x="40" y="470">Global Coverage: 195 Countries</text>
            
            <text x="360" y="450">Market Cap: $1.8T</text>
            <text x="360" y="460">Daily Volume: $127B</text>
            <text x="360" y="470">Network: Multi-Chain</text>
          </g>
          
          {/* Shine effect */}
          <ellipse cx="210" cy="180" rx="65" ry="95" fill="rgba(255,255,255,0.2)" opacity="0.6" transform="rotate(-20 210 180)"/>
          
          {/* Outer border */}
          <circle cx="250" cy="250" r="220" fill="none" stroke="#4dabf7" strokeWidth="2" opacity="0.8"/>
        </svg>
              </div>
        </div>
  );

  const renderStablecoinWallet = (isAnimating = false) => (
    <div className="w-full h-full flex items-center justify-center">
      <div className={`visual-element ${isAnimating ? 'stagger-in' : ''}`} style={{ animationDelay: '0.1s' }}>
        {/* Main Wallet Container */}
        <div className={`relative ${isMobile ? 'w-64 h-80' : 'w-72 h-96'} bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-6 border border-gray-200`}>
          {/* Currency Selection Tags */}
          <div className="absolute -top-3 -left-2 flex space-x-1">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg">
              USD
          </div>
            <div className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-200">
              EUR
            </div>
            <div className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-200">
              GBP
            </div>
          </div>

          {/* Balance Section */}
          <div className="text-center mb-6">
            <div className="text-gray-500 text-xs font-medium uppercase tracking-wide mb-2 flex items-center justify-center gap-2">
              <Wallet className="w-3 h-3" />
              Balance
        </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
              $150.00
      </div>
            <div className="text-green-600 text-sm font-semibold flex items-center justify-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +2.3% today
    </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mb-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Plus className="w-5 h-5 text-white" />
              </div>
              <div className="text-xs text-gray-700 font-medium">Deposit</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Send className="w-5 h-5 text-white" />
              </div>
              <div className="text-xs text-gray-700 font-medium">Send</div>
          </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <MessageCircle className="w-5 h-5 text-white" />
                </div>
              <div className="text-xs text-gray-700 font-medium">Receive</div>
              </div>
          </div>

          {/* Transaction History */}
          <div className="space-y-3 mt-4">
            {/* Transaction 1 */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-3 flex items-center border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3 shadow-md">
                <ArrowUp className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                <div className="text-sm font-semibold text-gray-800">Sent $14.00 USDC</div>
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Just now
                </div>
              </div>
            </div>

            {/* Transaction 2 */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-3 flex items-center border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3 shadow-md">
                <ArrowLeftRight className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                <div className="text-sm font-semibold text-gray-800">100 USDC → 91.82 EUR</div>
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  2 minutes ago
              </div>
            </div>
          </div>
        </div>

          {/* Multi-Currency Wallet Badge */}
          {/* <div className="absolute -bottom-8 -right-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-xl border border-gray-700">
            <div className="flex items-center gap-2">
              <CreditCard className="w-3 h-3" />
              Multi-Currency Wallet
          </div>
          </div> */}

          {/* Decorative Elements */}
          {/* <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-8 left-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute top-8 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div> */}
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
      case 'stablecoin-wallet':
        return renderStablecoinWallet(isCurrentlyAnimating);
      default:
        return renderAssetFractionalization(isCurrentlyAnimating);
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      <style>{`
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

      {isMobile ? (
        /* Mobile Layout - Vertical alternating animation and content */
        <div className="w-full">
          {sections.map((section, index) => (
            <div
              key={section.id}
              ref={el => sectionsRef.current[index] = el}
              className="w-full"
            >
              {/* Animation Section */}
              <div className="min-h-[60vh] flex items-center justify-center p-6 bg-gradient-to-br from-green-50 to-green-100">
                <div
                  className="visual-content relative flex items-center justify-center"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '20px',
                    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    width: '100%',
                    maxWidth: '320px',
                    height: '400px',
                  }}
                >
                  {/* Animated background particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    {Array.from({ length: 10 }).map((_, i) => (
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
                    {renderVisualContent(index)}
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-pink-400 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="min-h-[60vh] flex items-center px-6 py-12 bg-white">
                <div className="w-full max-w-md mx-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">AI</span>
                    </div>
                    <div className="text-sm font-medium text-green-600">
                      COPYM • 0{index + 1}
                    </div>
                  </div>

                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 transition-all duration-500 border ${activeSection === index
                    ? 'bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-700 border-green-500/30 shadow-lg'
                    : 'bg-gray-200/50 text-gray-600 border-gray-300/30'
                    }`}>
                    <div className="flex items-center gap-2">
                      {index === 0 && <Building className="w-4 h-4" />}
                      {index === 1 && <TrendingUp className="w-4 h-4" />}
                      {index === 2 && <BarChart3 className="w-4 h-4" />}
                      {index === 3 && <Zap className="w-4 h-4" />}
                      {index === 4 && <Globe className="w-4 h-4" />}
                      {index === 5 && <Wallet className="w-4 h-4" />}
                      {section.highlight}
                    </div>
                  </div>

                  <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 leading-tight ${activeSection === index
                      ? 'text-gray-900'
                      : 'text-gray-500'
                    }`}>
                    {section.title}
                  </h2>

                  <h3 className={`text-xl font-semibold mb-6 transition-all duration-500 ${activeSection === index
                      ? 'text-blue-600'
                      : 'text-gray-600'
                    }`}>
                    {section.subtitle}
                  </h3>

                  <p className={`text-base leading-relaxed transition-all duration-500 ${activeSection === index
                      ? 'text-gray-700'
                      : 'text-gray-500'
                    }`}>
                    {section.content}
                  </p>

                  {activeSection === index && (
                    <div className="mt-8 space-y-4">
                      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <div className="flex items-center gap-1">
                            <Cpu className="w-3 h-3" />
                            AI Investment Assistant
                          </div>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center gap-1">
                          <BarChart3 className="w-3 h-3" />
                          Market Analytics
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Desktop Layout - Original side-by-side layout */
      <div className="flex">
        {/* Left Side - Visual Panel (will be pinned by GSAP) */}
        <div
          ref={visualRef}
          className="w-1/2 h-screen flex items-center justify-center p-12"
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

                <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 transition-all duration-500 border ${activeSection === index
                  ? 'bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-700 border-green-500/30 shadow-lg'
                  : 'bg-gray-200/50 text-gray-600 border-gray-300/30'
                  }`}>
                  <div className="flex items-center gap-2">
                    {index === 0 && <Building className="w-4 h-4" />}
                    {index === 1 && <TrendingUp className="w-4 h-4" />}
                    {index === 2 && <BarChart3 className="w-4 h-4" />}
                    {index === 3 && <Zap className="w-4 h-4" />}
                    {index === 4 && <Globe className="w-4 h-4" />}
                    {index === 5 && <Wallet className="w-4 h-4" />}
                  {section.highlight}
                  </div>
                </div>

                <h2 className={`text-5xl font-bold mb-4 transition-all duration-700 leading-tight ${activeSection === index
                    ? 'text-gray-900'
                    : 'text-gray-500'
                  }`}>
                  {section.title}
                </h2>

                <h3 className={`text-2xl font-semibold mb-6 transition-all duration-500 ${activeSection === index
                    ? 'text-blue-600'
                    : 'text-gray-600'
                  }`}>
                  {section.subtitle}
                </h3>

                <p className={`text-lg leading-relaxed transition-all duration-500 ${activeSection === index
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
                      <div className="flex items-center gap-1">
                        <Cpu className="w-3 h-3" />
                        AI Investment Assistant
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <BarChart3 className="w-3 h-3" />
                        Market Analytics
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      )}
    </div>
  );
};

export default RealEstateInvestmentSection;


// bg-gradient-to-br from-green-50 to-green-100