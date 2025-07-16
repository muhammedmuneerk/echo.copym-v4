// How It Works - Split for Investors & Issuers
import React, { useState } from 'react';

// Modern icon imports
import { 
  Search, 
  CreditCard, 
  TrendingUp, 
  ArrowRight,
  Building2,
  Shield,
  Store,
  Users,
  Building,
  ArrowRight as ArrowIcon
} from 'lucide-react';

// Investor Path Data
const investorSteps = [
  {
    id: 1,
    icon: <Search className="w-7 h-7" />,
    title: "Browse Listed Assets",
    description: "Explore diverse tokenized real-world assets in our marketplace",
    color: "blue"
  },
  {
    id: 2,
    icon: <CreditCard className="w-7 h-7" />,
    title: "Buy Fractional Tokens",
    description: "Purchase fractional ownership with secure payment processing",
    color: "green"
  },
  {
    id: 3,
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Earn Dividends",
    description: "Receive regular dividend payments and profit sharing",
    color: "purple"
  },
  {
    id: 4,
    icon: <Store className="w-7 h-7" />,
    title: "Trade in Secondary Market",
    description: "Buy and sell tokens in our liquid secondary marketplace",
    color: "orange"
  }
];

// Issuer Path Data (Minimal focus, concise)
const issuerSteps = [
  {
    id: 1,
    icon: <Building2 className="w-7 h-7" />,
    title: "Tokenize Your Asset",
    description: "Convert your real-world asset into digital tokens in 3 simple steps",
    color: "blue"
  },
  {
    id: 2,
    icon: <Shield className="w-7 h-7" />,
    title: "KYC/Compliance",
    description: "Complete integrated onboarding with automated compliance checks",
    color: "green"
  },
  {
    id: 3,
    icon: <Store className="w-7 h-7" />,
    title: "List in Marketplace",
    description: "Your asset gets listed and available for global investors",
    color: "purple"
  }
];

// Inline Styles
const styles = {
  container: {
    width: '100%',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    color: '#1f2937',
    padding: '80px 20px',
    position: 'relative',
    overflow: 'hidden'
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: '50px',
    position: 'relative',
    zIndex: 10
  },
  headerLine: {
    width: '60px',
    height: '4px',
    background: 'linear-gradient(90deg, #15a36e, #255f99)',
    margin: '0 auto 20px',
    borderRadius: '2px'
  },
  mainTitle: {
    fontFamily: "'Genos', sans-serif",
    fontSize: '48px',
    fontWeight: 700,
    background: 'linear-gradient(90deg, #15a36e, #255f99)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '20px',
    letterSpacing: '-0.025em'
  },
  subtitle: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: '18px',
    color: '#6b7280',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
    fontWeight: 400
  },
  pathTabs: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '50px'
  },
  pathTab: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 32px',
    background: 'linear-gradient(135deg, #ffffff, #fafbfc)',
    border: '2px solid #e0f2fe',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.06)',
    minWidth: '200px',
    position: 'relative',
    overflow: 'hidden'
  },
  pathTabActive: {
    borderColor: '#15a36e',
    boxShadow: '0 8px 24px rgba(21, 163, 110, 0.15)',
    background: 'linear-gradient(135deg, #15a36e, #255f99)',
    color: '#ffffff'
  },
  tabIcon: {
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    border: 'none',
    borderRadius: 0,
    color: 'inherit'
  },
  tabIconActive: {
    color: '#ffffff'
  },
  tabContent: {
    flex: 1
  },
  tabTitle: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: '16px',
    fontWeight: 600,
    color: 'inherit',
    marginBottom: '0px',
    marginRight: '8px'
  },
  tabDescription: {
    display: 'none'
  },
  flowchartWrapper: {
    maxWidth: '1800px',
    width: '100%',
    margin: '0 auto',
    position: 'relative'
  },
  flowchartContainer: {
    background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)',
    borderRadius: '24px',
    padding: '60px 120px',
    position: 'relative',
    border: '1px solid #d1fae5',
    boxShadow: '0 20px 40px rgba(21, 163, 110, 0.08)',
    width: '100%',
    overflow: 'visible'
  },
  stepsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 5,
    marginBottom: '50px',
    gap: '40px',
    flexWrap: 'nowrap',
    width: '100%',
    overflow: 'visible',
    padding: '0 40px'
  },
  stepWrapper: {
    display: 'flex',
    alignItems: 'center',
    flex: '0 0 auto'
  },
  stepCard: {
    background: 'linear-gradient(135deg, #ffffff, #fafbfc)',
    borderRadius: '20px',
    padding: '28px 20px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    border: '1px solid #e5e7eb',
    boxShadow: '0 4px 20px rgba(21, 163, 110, 0.08)',
    height: '280px',
    width: '240px',
    minWidth: '240px',
    maxWidth: '240px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: '0 0 240px',
    overflow: 'visible'
  },
  stepCardHover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(21, 163, 110, 0.15)',
    borderColor: '#d1fae5'
  },
  stepCardActive: {
    borderColor: '#15a36e',
    boxShadow: '0 8px 30px rgba(21, 163, 110, 0.2)',
    transform: 'translateY(-2px)'
  },
  stepIcon: {
    width: '56px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    transition: 'all 0.3s ease',
    position: 'relative',
    background: '#f3f4f6',
    border: 'none',
    borderRadius: '12px',
    padding: '14px'
  },
  stepIconBlue: {
    color: '#255f99',
    background: '#f3f4f6'
  },
  stepIconGreen: {
    color: '#15a36e',
    background: '#f3f4f6'
  },
  stepIconPurple: {
    color: '#8b5cf6',
    background: '#f3f4f6'
  },
  stepIconOrange: {
    color: '#f59e0b',
    background: '#f3f4f6'
  },
  stepContent: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  stepTitle: {
    fontFamily: "'Genos', sans-serif",
    fontSize: '18px',
    fontWeight: 700,
    color: '#111827',
    marginBottom: '12px',
    lineHeight: 1.3,
    textAlign: 'center'
  },
  stepDescription: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: '14px',
    color: '#6b7280',
    lineHeight: 1.6,
    fontWeight: 400,
    textAlign: 'center',
    maxWidth: '200px'
  },
  connectionArrow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 8px',
    color: '#15a36e',
    opacity: 0.8,
    transition: 'all 0.3s ease',
    flexShrink: 0,
    minWidth: '24px'
  },
  // Responsive styles
  responsive: {
    '@media (max-width: 1024px)': {
      stepsContainer: {
        flexDirection: 'column',
        gap: '40px'
      },
      stepWrapper: {
        flexDirection: 'column',
        width: '100%'
      },
      connectionArrow: {
        transform: 'rotate(90deg)',
        padding: '20px 0'
      },
      pathTabs: {
        flexDirection: 'column',
        alignItems: 'center'
      },
      pathTab: {
        minWidth: '320px'
      }
    },
    '@media (max-width: 768px)': {
      container: {
        padding: '60px 20px'
      },
      mainTitle: {
        fontSize: '36px'
      },
      subtitle: {
        fontSize: '16px'
      },
      flowchartContainer: {
        padding: '40px 20px'
      },
      stepCard: {
        padding: '24px 16px',
        height: '240px',
        width: '200px',
        minWidth: '200px',
        maxWidth: '200px',
        flex: '0 0 200px'
      },
      stepIcon: {
        width: '44px',
        height: '44px',
        marginBottom: '18px',
        padding: '10px'
      },
      stepTitle: {
        fontSize: '18px'
      },
      stepDescription: {
        fontSize: '14px'
      },
      pathTab: {
        minWidth: '280px',
        padding: '20px 24px'
      }
    },
    '@media (max-width: 480px)': {
      container: {
        padding: '40px 16px'
      },
      mainTitle: {
        fontSize: '28px'
      },
      flowchartContainer: {
        padding: '30px 15px'
      },
      stepsContainer: {
        flexDirection: 'column',
        gap: '20px',
        padding: '0 10px'
      },
      stepCard: {
        padding: '20px 16px',
        height: 'auto',
        width: '100%',
        minWidth: 'auto',
        maxWidth: '100%',
        flex: '1 1 auto'
      },
      stepWrapper: {
        flexDirection: 'column',
        width: '100%'
      },
      connectionArrow: {
        transform: 'rotate(90deg)',
        padding: '10px 0'
      },
      stepIcon: {
        width: '40px',
        height: '40px',
        marginBottom: '16px',
        padding: '8px'
      },
      pathTab: {
        minWidth: '260px',
        padding: '16px 20px'
      },
      tabIcon: {
        width: '40px',
        height: '40px'
      }
    }
  }
};

export default function Flowchart() {
  const [activePath, setActivePath] = useState('issuer');
  const [activeStep, setActiveStep] = useState(0);

  const currentSteps = activePath === 'investor' ? investorSteps : issuerSteps;

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  const getStepIconStyle = (color) => {
    switch (color) {
      case 'blue': return { ...styles.stepIcon, ...styles.stepIconBlue };
      case 'green': return { ...styles.stepIcon, ...styles.stepIconGreen };
      case 'purple': return { ...styles.stepIcon, ...styles.stepIconPurple };
      case 'orange': return { ...styles.stepIcon, ...styles.stepIconOrange };
      default: return styles.stepIcon;
    }
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.headerSection}>
        <div style={styles.headerLine}></div>
        <h1 style={styles.mainTitle}>How It Works</h1>
        <p style={styles.subtitle}>
          Discover how tokenization revolutionizes asset ownership. From fractional investments to global liquidity, see how our platform bridges traditional assets with blockchain innovation.
        </p>
      </div>

      {/* Path Selection Tabs */}
      <div style={styles.pathTabs}>
        <button
          style={{
            ...styles.pathTab,
            ...(activePath === 'issuer' ? styles.pathTabActive : {})
          }}
          onClick={() => {
            setActivePath('issuer');
            setActiveStep(0);
          }}
        >
          <div style={{
            ...styles.tabIcon,
            ...(activePath === 'issuer' ? styles.tabIconActive : {})
          }}>
            <Building className="w-5 h-5" />
          </div>
          <div style={styles.tabContent}>
            <h3 style={styles.tabTitle}>Issuer Path</h3>
          </div>
        </button>
        
        <button
          style={{
            ...styles.pathTab,
            ...(activePath === 'investor' ? styles.pathTabActive : {})
          }}
          onClick={() => {
            setActivePath('investor');
            setActiveStep(0);
          }}
        >
          <div style={{
            ...styles.tabIcon,
            ...(activePath === 'investor' ? styles.tabIconActive : {})
          }}>
            <Users className="w-5 h-5" />
          </div>
          <div style={styles.tabContent}>
            <h3 style={styles.tabTitle}>Investor Path</h3>
          </div>
        </button>
      </div>

      {/* Main Flowchart Container */}
      <div style={styles.flowchartWrapper}>
        <div style={styles.flowchartContainer}>
          {/* Steps Container */}
          <div style={styles.stepsContainer}>
            {currentSteps.map((step, index) => (
              <div key={step.id} style={styles.stepWrapper}>
                {/* Step Card */}
                <div 
                  style={{
                    ...styles.stepCard,
                    ...(activeStep === index ? styles.stepCardActive : {}),
                    ...(activeStep === index ? styles.stepCardHover : {})
                  }}
                  onClick={() => handleStepClick(index)}
                >
                  {/* Step Icon */}
                  <div style={getStepIconStyle(step.color)}>
                    {step.icon}
                  </div>
                  
                  {/* Step Content */}
                  <div style={styles.stepContent}>
                    <h3 style={styles.stepTitle}>{step.title}</h3>
                    <p style={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>

                {/* Connection Arrow */}
                {index < currentSteps.length - 1 && (
                  <div style={styles.connectionArrow}>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
