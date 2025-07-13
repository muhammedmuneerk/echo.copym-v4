// Flowchart.jsx
import React, { useState, useRef } from 'react';
import './flowchart.css';

const journeyData = {
  issuer: {
    nodes: [
      { id: 'marketplace', x: 50, y: 50, icon: '🏛️', label: 'RWA Marketplace', central: true },
      { id: 'register', x: 20, y: 20, icon: '👤', label: 'Register & KYB' },
      { id: 'submit', x: 80, y: 15, icon: '📋', label: 'Submit Assets' },
      { id: 'compliance', x: 85, y: 50, icon: '✅', label: 'Compliance Check' },
      { id: 'tokenize', x: 70, y: 80, icon: '🔗', label: 'Tokenization' },
      { id: 'list', x: 30, y: 85, icon: '📊', label: 'List on Market' },
      { id: 'manage', x: 15, y: 60, icon: '💵', label: 'Manage & Distribute' }
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
        points: ['Secure trading platform', 'Real-time pricing', 'Global accessibility', 'Regulatory compliance']
      },
      register: {
        title: 'Registration & KYB',
        description: 'Complete business verification to start tokenizing',
        points: ['Business documentation', 'Legal entity verification', 'Platform onboarding', 'Account setup']
      },
      submit: {
        title: 'Asset Submission',
        description: 'Upload comprehensive documentation for your assets',
        points: ['Ownership documents', 'Valuation reports', 'Financial statements', 'Legal clearances']
      },
      compliance: {
        title: 'Compliance & Verification',
        description: 'Thorough due diligence and regulatory checks',
        points: ['Asset authentication', 'Third-party valuation', 'Legal compliance', 'Smart contract audit']
      },
      tokenize: {
        title: 'Asset Tokenization',
        description: 'Convert physical assets into digital tokens',
        points: ['Define token parameters', 'Set fractional ownership', 'Deploy smart contracts', 'Mint tokens']
      },
      list: {
        title: 'Marketplace Listing',
        description: 'List tokenized assets for investor purchase',
        points: ['Set pricing strategy', 'Define terms', 'Launch offering', 'Marketing activation']
      },
      manage: {
        title: 'Manage & Distribute',
        description: 'Ongoing management and profit distribution',
        points: ['Track performance', 'Investor relations', 'Distribute profits', 'Compliance reporting']
      }
    }
  },
  investor: {
    nodes: [
      { id: 'marketplace', x: 50, y: 50, icon: '🏛️', label: 'RWA Marketplace', central: true },
      { id: 'signup', x: 20, y: 25, icon: '🔐', label: 'Sign Up & KYC' },
      { id: 'browse', x: 75, y: 20, icon: '🔍', label: 'Browse Assets' },
      { id: 'analyze', x: 85, y: 55, icon: '📈', label: 'Analyze Returns' },
      { id: 'invest', x: 65, y: 80, icon: '💳', label: 'Make Investment' },
      { id: 'receive', x: 30, y: 80, icon: '🪙', label: 'Receive Tokens' },
      { id: 'portfolio', x: 15, y: 50, icon: '💼', label: 'Manage Portfolio' }
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
        points: ['Browse listings', 'Compare assets', 'View performance', 'Access research']
      },
      signup: {
        title: 'Sign Up & KYC',
        description: 'Quick and secure account creation process',
        points: ['Email verification', 'Identity verification', 'AML screening', 'Wallet connection']
      },
      browse: {
        title: 'Browse Assets',
        description: 'Discover tokenized real world assets',
        points: ['Filter by type', 'Sort by returns', 'View details', 'Read documentation']
      },
      analyze: {
        title: 'Analyze Returns',
        description: 'Deep dive into investment metrics',
        points: ['Historical performance', 'Risk assessment', 'Projected returns', 'Market comparison']
      },
      invest: {
        title: 'Make Investment',
        description: 'Simple and secure investment process',
        points: ['Choose amount', 'Review terms', 'Complete payment', 'Confirm transaction']
      },
      receive: {
        title: 'Receive Tokens',
        description: 'Digital ownership tokens in your wallet',
        points: ['Instant delivery', 'Blockchain verified', 'Ownership certificate', 'Trading enabled']
      },
      portfolio: {
        title: 'Manage Portfolio',
        description: 'Track and optimize your investments',
        points: ['Performance tracking', 'Dividend collection', 'Secondary trading', 'Tax reporting']
      }
    }
  }
};

export default function Flowchart() {
  const [journey, setJourney] = useState('issuer');
  const [active, setActive] = useState(null);
  const [tooltip, setTooltip] = useState(null); // { nodeId, x, y }
  const containerRef = useRef(null);

  // Data for the currently selected journey (issuer or investor)
  const { nodes, connections } = journeyData[journey];

  return (
    <div className="container relative py-8">
      {/* Header */}
      <div className="header">
        <h1>HOW COPYM WORKS!</h1>
        <p>Transform Real World Assets into Digital Investment Opportunities</p>
      </div>

      {/* Toggle */}
      <div className="journey-toggle">
        <button
          className={`toggle-btn ${journey === 'issuer' ? 'active' : ''}`}
          onClick={() => setJourney('issuer')}
        >
          ASSET ISSUER FLOW
        </button>
        <button
          className={`toggle-btn ${journey === 'investor' ? 'active' : ''}`}
          onClick={() => setJourney('investor')}
        >
          INVESTOR FLOW
        </button>
      </div>

      {/* Flowchart area */}
      <div className="flow-container" style={{ height: '600px' }}>
        {/* Connections */}
        <svg className="svg-container" viewBox="0 0 100 100" preserveAspectRatio="none">
          {connections.map(([from, to], idx) => {
            const fromNode = nodes.find((n) => n.id === from);
            const toNode = nodes.find((n) => n.id === to);
            if (!fromNode || !toNode) return null;
            return (
              <line
                key={idx}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                className={`connection ${active && (active === from || active === to) ? 'active' : ''}`}
              />
            );
          })}
        </svg>

        {/* Nodes */}
        <div className="nodes-container">
          {nodes.map((node) => (
            <div
              key={node.id}
              className={`node ${node.central ? 'central' : ''} ${active === node.id ? 'active' : ''}`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={(e) => {
                setActive(node.id);
                if (containerRef.current) {
                  const rect = containerRef.current.getBoundingClientRect();
                  const nodeRect = e.currentTarget.getBoundingClientRect();
                  // position tooltip above the node
                  setTooltip({
                    nodeId: node.id,
                    x: nodeRect.left - rect.left + nodeRect.width / 2,
                    y: nodeRect.top - rect.top - 10 // 10px above
                  });
                }
              }}
              onMouseLeave={() => {
                setActive(null);
                setTooltip(null);
              }}
            >
              <div className="node-circle">
                {node.central && <span className="pulse-ring" />}
                {node.icon}
              </div>
              <span className="node-label">{node.label}</span>
            </div>
          ))}
        </div>
        {/* Tooltip */}
        {tooltip && (
          <div
            className={`tooltip show`}
            style={{ left: tooltip.x, top: tooltip.y }}
          >
            <h3>{journeyData[journey].details[tooltip.nodeId].title}</h3>
            <p>{journeyData[journey].details[tooltip.nodeId].description}</p>
            <ul>
              {journeyData[journey].details[tooltip.nodeId].points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
