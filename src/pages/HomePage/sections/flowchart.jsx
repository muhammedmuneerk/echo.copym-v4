// Flowchart.jsx
import React, { useState, useRef, useEffect } from 'react';
import './flowchart.css';

// Icon imports – mix of MUI Icons and lucide-react with green/blue colors
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LinkIcon from '@mui/icons-material/Link';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';

import { Search as LucideSearch, TrendingUp as LucideTrendingUp } from 'lucide-react';

// --------------------------------------------------------------------------------
// Enhanced Journey data with green/blue colored icons
// --------------------------------------------------------------------------------

const journeyData = {
  issuer: {
    nodes: [
      {
        id: 'marketplace',
        x: 50,
        y: 50,
        icon: <StorefrontIcon sx={{ fontSize: 48 }} className="text-green-400" />,
        label: 'RWA Marketplace',
        central: true,
        color: 'green'
      },
      { 
        id: 'register', 
        x: 20, 
        y: 20, 
        icon: <PersonAddIcon fontSize="large" className="text-blue-400" />, 
        label: 'Register & KYB',
        color: 'blue'
      },
      { 
        id: 'submit', 
        x: 80, 
        y: 15, 
        icon: <UploadFileIcon fontSize="large" className="text-green-400" />, 
        label: 'Submit Assets',
        color: 'green'
      },
      { 
        id: 'compliance', 
        x: 85, 
        y: 50, 
        icon: <CheckCircleIcon fontSize="large" className="text-blue-400" />, 
        label: 'Compliance Check',
        color: 'blue'
      },
      { 
        id: 'tokenize', 
        x: 70, 
        y: 80, 
        icon: <LinkIcon fontSize="large" className="text-green-400" />, 
        label: 'Tokenization',
        color: 'green'
      },
      { 
        id: 'list', 
        x: 30, 
        y: 85, 
        icon: <ShowChartIcon fontSize="large" className="text-blue-400" />, 
        label: 'List on Market',
        color: 'blue'
      },
      { 
        id: 'manage', 
        x: 15, 
        y: 60, 
        icon: <AttachMoneyIcon fontSize="large" className="text-green-400" />, 
        label: 'Manage & Distribute',
        color: 'green'
      },
    ],
    connections: [
      ['register', 'marketplace'], ['register', 'submit'], ['submit', 'compliance'],
      ['compliance', 'tokenize'], ['tokenize', 'list'], ['list', 'marketplace'],
      ['marketplace', 'manage'], ['manage', 'register']
    ],
    details: {
      marketplace: {
        title: 'RWA Marketplace',
        description: 'Central hub connecting asset issuers with global investors',
        points: ['Secure trading platform', 'Real-time pricing', 'Global accessibility', 'Regulatory compliance'],
        gradient: 'from-green-500 to-green-600'
      },
      register: {
        title: 'Registration & KYB',
        description: 'Complete business verification to start tokenizing',
        points: ['Business documentation', 'Legal entity verification', 'Platform onboarding', 'Account setup'],
        gradient: 'from-blue-500 to-blue-600'
      },
      submit: {
        title: 'Asset Submission',
        description: 'Upload comprehensive documentation for your assets',
        points: ['Ownership documents', 'Valuation reports', 'Financial statements', 'Legal clearances'],
        gradient: 'from-green-500 to-green-600'
      },
      compliance: {
        title: 'Compliance & Verification',
        description: 'Thorough due diligence and regulatory checks',
        points: ['Asset authentication', 'Third-party valuation', 'Legal compliance', 'Smart contract audit'],
        gradient: 'from-blue-500 to-blue-600'
      },
      tokenize: {
        title: 'Asset Tokenization',
        description: 'Convert physical assets into digital tokens',
        points: ['Define token parameters', 'Set fractional ownership', 'Deploy smart contracts', 'Mint tokens'],
        gradient: 'from-green-500 to-green-600'
      },
      list: {
        title: 'Marketplace Listing',
        description: 'List tokenized assets for investor purchase',
        points: ['Set pricing strategy', 'Define terms', 'Launch offering', 'Marketing activation'],
        gradient: 'from-blue-500 to-blue-600'
      },
      manage: {
        title: 'Manage & Distribute',
        description: 'Ongoing management and profit distribution',
        points: ['Track performance', 'Investor relations', 'Distribute profits', 'Compliance reporting'],
        gradient: 'from-green-500 to-green-600'
      }
    }
  },
  investor: {
    nodes: [
      {
        id: 'marketplace',
        x: 50,
        y: 50,
        icon: <StorefrontIcon sx={{ fontSize: 48 }} className="text-green-400" />,
        label: 'RWA Marketplace',
        central: true,
        color: 'green'
      },
      { 
        id: 'signup', 
        x: 20, 
        y: 25, 
        icon: <PersonAddIcon fontSize="large" className="text-blue-400" />, 
        label: 'Sign Up & KYC',
        color: 'blue'
      },
      { 
        id: 'browse', 
        x: 75, 
        y: 20, 
        icon: <LucideSearch size={32} className="text-green-400" />, 
        label: 'Browse Assets',
        color: 'green'
      },
      { 
        id: 'analyze', 
        x: 85, 
        y: 55, 
        icon: <LucideTrendingUp size={32} className="text-blue-400" />, 
        label: 'Analyze Returns',
        color: 'blue'
      },
      { 
        id: 'invest', 
        x: 65, 
        y: 80, 
        icon: <CreditCardIcon fontSize="large" className="text-green-400" />, 
        label: 'Make Investment',
        color: 'green'
      },
      { 
        id: 'receive', 
        x: 30, 
        y: 80, 
        icon: <MonetizationOnIcon fontSize="large" className="text-blue-400" />, 
        label: 'Receive Tokens',
        color: 'blue'
      },
      { 
        id: 'portfolio', 
        x: 15, 
        y: 50, 
        icon: <WorkIcon fontSize="large" className="text-green-400" />, 
        label: 'Manage Portfolio',
        color: 'green'
      },
    ],
    connections: [
      ['signup', 'marketplace'], ['marketplace', 'browse'], ['browse', 'analyze'],
      ['analyze', 'invest'], ['invest', 'receive'], ['receive', 'portfolio'],
      ['portfolio', 'marketplace'], ['portfolio', 'signup']
    ],
    details: {
      marketplace: {
        title: 'RWA Marketplace',
        description: 'Explore diverse tokenized investment opportunities',
        points: ['Browse listings', 'Compare assets', 'View performance', 'Access research'],
        gradient: 'from-green-500 to-green-600'
      },
      signup: {
        title: 'Sign Up & KYC',
        description: 'Quick and secure account creation process',
        points: ['Email verification', 'Identity verification', 'AML screening', 'Wallet connection'],
        gradient: 'from-blue-500 to-blue-600'
      },
      browse: {
        title: 'Browse Assets',
        description: 'Discover tokenized real world assets',
        points: ['Filter by type', 'Sort by returns', 'View details', 'Read documentation'],
        gradient: 'from-green-500 to-green-600'
      },
      analyze: {
        title: 'Analyze Returns',
        description: 'Deep dive into investment metrics',
        points: ['Historical performance', 'Risk assessment', 'Projected returns', 'Market comparison'],
        gradient: 'from-blue-500 to-blue-600'
      },
      invest: {
        title: 'Make Investment',
        description: 'Simple and secure investment process',
        points: ['Choose amount', 'Review terms', 'Complete payment', 'Confirm transaction'],
        gradient: 'from-green-500 to-green-600'
      },
      receive: {
        title: 'Receive Tokens',
        description: 'Digital ownership tokens in your wallet',
        points: ['Instant delivery', 'Blockchain verified', 'Ownership certificate', 'Trading enabled'],
        gradient: 'from-blue-500 to-blue-600'
      },
      portfolio: {
        title: 'Manage Portfolio',
        description: 'Track and optimize your investments',
        points: ['Performance tracking', 'Dividend collection', 'Secondary trading', 'Tax reporting'],
        gradient: 'from-green-500 to-green-600'
      }
    }
  }
};

export default function Flowchart() {
  const [journey, setJourney] = useState('issuer');
  const [active, setActive] = useState(null);
  const [tooltip, setTooltip] = useState(null);
  const [animationStep, setAnimationStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  // Data for the currently selected journey
  const { nodes, connections } = journeyData[journey];

  // Auto-play animation effect
  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setAnimationStep((prev) => {
          if (prev >= nodes.length - 1) {
            setIsAnimating(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isAnimating, nodes.length]);

  // Reset animation when journey changes
  useEffect(() => {
    setAnimationStep(0);
    setIsAnimating(false);
    setActive(null);
    setTooltip(null);
  }, [journey]);

  const handleNodeClick = (node, event) => {
    if (!isAnimating) {
      // Toggle tooltip - show if not showing, hide if already showing
      if (tooltip && tooltip.nodeId === node.id) {
        setTooltip(null);
        setActive(null);
      } else {
        setActive(node.id);
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const nodeRect = event.currentTarget.getBoundingClientRect();
          
          // Smart tooltip positioning within container bounds
          const tooltipWidth = 320;
          const tooltipHeight = 200;
          
          let tooltipX = nodeRect.left - rect.left + nodeRect.width / 2;
          let tooltipY = nodeRect.top - rect.top - 10;
          
          // Keep tooltip within horizontal bounds
          if (tooltipX - tooltipWidth/2 < 20) {
            tooltipX = tooltipWidth/2 + 20;
          } else if (tooltipX + tooltipWidth/2 > rect.width - 20) {
            tooltipX = rect.width - tooltipWidth/2 - 20;
          }
          
          // Keep tooltip within vertical bounds
          if (tooltipY - tooltipHeight < 20) {
            tooltipY = nodeRect.top - rect.top + nodeRect.height + 20;
          }
          
          setTooltip({
            nodeId: node.id,
            x: tooltipX,
            y: Math.max(20, tooltipY)
          });
        }
      }
    }
  };

  const handleNodeHover = (node, event) => {
    if (!isAnimating && !tooltip) {
      setActive(node.id);
    }
  };

  const handleNodeLeave = () => {
    if (!isAnimating && !tooltip) {
      setActive(null);
    }
  };

  // Close tooltip when clicking outside
  const handleContainerClick = (event) => {
    if (!event.target.closest('.node')) {
      setTooltip(null);
      setActive(null);
    }
  };

  const startAnimation = () => {
    setIsAnimating(true);
    setAnimationStep(0);
    setActive(null);
    setTooltip(null);
  };

  const stopAnimation = () => {
    setIsAnimating(false);
    setAnimationStep(0);
  };

  return (
    <div className="flowchart-container" ref={containerRef}>
      {/* Enhanced Header - Outside the box */}
      <div className="header">
        <h1 className="brand-section-title mb-4">
          HOW COPYM WORKS!
        </h1>
        <p className="brand-description max-w-3xl mx-auto">
          Transform Real World Assets into Digital Investment Opportunities
        </p>
      </div>

      {/* Bordered Container with green-50 background */}
      <div className="rounded-2xl shadow-lg border border-gray-200 bg-green-50 p-8">
        {/* Enhanced Toggle with Animation Controls */}
        <div className="journey-controls">
        <div className="journey-toggle">
          <button
            className={`toggle-btn ${journey === 'issuer' ? 'active' : ''}`}
            onClick={() => setJourney('issuer')}
          >
            <BusinessIcon className="toggle-icon" />
            ASSET ISSUER FLOW
          </button>
          <button
            className={`toggle-btn ${journey === 'investor' ? 'active' : ''}`}
            onClick={() => setJourney('investor')}
          >
            <PersonIcon className="toggle-icon" />
            INVESTOR FLOW
          </button>
        </div>
        
        {/* Animation Controls */}
        <div className="animation-controls">
          {!isAnimating ? (
            <button className="animation-btn play" onClick={startAnimation}>
              <PlayArrowIcon className="animation-icon" />
              Play Animation
            </button>
          ) : (
            <button className="animation-btn stop" onClick={stopAnimation}>
              <StopIcon className="animation-icon" />
              Stop Animation
            </button>
          )}
        </div>
      </div>

      {/* Enhanced Flowchart Area */}
      <div className="flow-container" onClick={handleContainerClick}>
        {/* Enhanced Background Grid */}
        <div className="background-grid"></div>
        
        {/* Enhanced Connections */}
        <svg className="svg-container" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          
          {connections.map(([from, to], idx) => {
            const fromNode = nodes.find((n) => n.id === from);
            const toNode = nodes.find((n) => n.id === to);
            if (!fromNode || !toNode) return null;
            
            const isActive = active && (active === from || active === to);
            const isAnimated = isAnimating && (animationStep >= idx);
            const strokeColor = fromNode.color === 'green' ? 'url(#greenGradient)' : 'url(#blueGradient)';
            
            // Calculate control points for curved path
            const dx = toNode.x - fromNode.x;
            const dy = toNode.y - fromNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Create control points for smooth curves
            // Offset perpendicular to the line direction
            const offset = Math.min(distance * 0.3, 8); // Limit maximum curve
            const angle = Math.atan2(dy, dx) + Math.PI / 2;
            
            const controlX1 = fromNode.x + Math.cos(angle) * offset;
            const controlY1 = fromNode.y + Math.sin(angle) * offset;
            const controlX2 = toNode.x + Math.cos(angle) * offset;
            const controlY2 = toNode.y + Math.sin(angle) * offset;
            
            // Create curved path using cubic Bézier curves
            const pathData = `M ${fromNode.x} ${fromNode.y} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${toNode.x} ${toNode.y}`;
            
            return (
              <path
                key={idx}
                d={pathData}
                className={`connection ${isActive ? 'active' : ''} ${isAnimated ? 'animated' : ''}`}
                stroke={isActive || isAnimated ? strokeColor : undefined}
                strokeWidth={isActive || isAnimated ? 3 : 2}
                fill="none"
              />
            );
          })}
        </svg>

        {/* Enhanced Nodes */}
        <div className="nodes-container">
          {nodes.map((node, index) => {
            const isActiveNode = active === node.id;
            const isAnimatedNode = isAnimating && animationStep >= index;
            const nodeColorClass = node.color === 'green' ? 'node-green' : 'node-blue';
            
            return (
              <div
                key={node.id}
                className={`node ${node.central ? 'central' : ''} ${nodeColorClass} ${isActiveNode ? 'active' : ''} ${isAnimatedNode ? 'animated' : ''}`}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: 'translate(-50%, -50%)',
                  animationDelay: isAnimating ? `${index * 0.2}s` : '0s'
                }}
                onClick={(e) => handleNodeClick(node, e)}
                onMouseEnter={(e) => handleNodeHover(node, e)}
                onMouseLeave={handleNodeLeave}
              >
                <div className="node-circle">
                  {node.central && (
                    <div className="pulse-rings">
                      <span className="pulse-ring"></span>
                      <span className="pulse-ring delay-1"></span>
                      <span className="pulse-ring delay-2"></span>
                    </div>
                  )}
                  <div className="node-icon">
                    {node.icon}
                  </div>
                </div>
                <span className="node-label">{node.label}</span>
                {(isActiveNode || isAnimatedNode) && (
                  <div className="node-number">{index + 1}</div>
                )}
              </div>
            );
          })}
        </div>

                 {/* Enhanced Tooltip */}
         {tooltip && (
           <div
             className={`tooltip show bg-gradient-to-br ${journeyData[journey].details[tooltip.nodeId].gradient}`}
             style={{ 
               left: tooltip.x, 
               top: tooltip.y,
               transform: 'translateX(-50%)'
             }}
           >
             <div className="tooltip-content">
               <h3 className="tooltip-title">{journeyData[journey].details[tooltip.nodeId].title}</h3>
               <p className="tooltip-description">{journeyData[journey].details[tooltip.nodeId].description}</p>
               <ul className="tooltip-points">
                 {journeyData[journey].details[tooltip.nodeId].points.map((point, i) => (
                   <li key={i} className="tooltip-point">{point}</li>
                 ))}
               </ul>
             </div>
             <div className="tooltip-arrow"></div>
           </div>
         )}
      </div>

      {/* Journey Progress Indicator */}
      {isAnimating && (
        <div className="progress-indicator">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${(animationStep / (nodes.length - 1)) * 100}%` }}
            ></div>
          </div>
          <span className="progress-text">
            Step {animationStep + 1} of {nodes.length}
          </span>
        </div>
      )}
      </div>
    </div>
  );
}
