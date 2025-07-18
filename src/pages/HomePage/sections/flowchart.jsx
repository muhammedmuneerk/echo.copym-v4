// How It Works - Split for Investors & Issuers
import React, { useState, useEffect } from 'react';

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
  ArrowRight as ArrowIcon,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import AnimatedCard from "../../../ui/AnimatedCard.jsx"

// Custom hook for responsive design
const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return { isMobile, isTablet };
};

// Investor Path Data
const investorSteps = [
  {
    id: 1,
    icon: <Search className="w-7 h-7 text-blue-500" />,
    title: "Browse Listed Assets",
    description: "Explore diverse tokenized real-world assets in our marketplace",
    color: "blue"
  },
  {
    id: 2,
    icon: <CreditCard className="w-7 h-7 text-blue-500" />,
    title: "Buy Fractional Tokens",
    description: "Purchase fractional ownership with secure payment processing",
    color: "green"
  },
  {
    id: 3,
    icon: <TrendingUp className="w-7 h-7 text-blue-500" />,
    title: "Earn Dividends",
    description: "Receive regular dividend payments and profit sharing",
    color: "purple"
  },
  {
    id: 4,
    icon: <Store className="w-7 h-7 text-blue-500" />,
    title: "Trade in Secondary Market",
    description: "Buy and sell tokens in our liquid secondary marketplace",
    color: "orange"
  }
];

// Issuer Path Data
const issuerSteps = [
  {
    id: 1,
    icon: <Building2 className="w-7 h-7 text-blue-500" />,
    title: "Tokenize Your Asset",
    description: "Convert your real-world asset into digital tokens in 3 simple steps",
    color: "blue"
  },
  {
    id: 2,
    icon: <Shield className="w-7 h-7 text-blue-500" />,
    title: "KYC/Compliance",
    description: "Complete integrated onboarding with automated compliance checks",
    color: "green"
  },
  {
    id: 3,
    icon: <Store className="w-7 h-7 text-blue-500" />,
    title: "List in Marketplace",
    description: "Your asset gets listed and available for global investors",
    color: "purple"
  }
];

// Desktop Styles
const desktopStyles = {
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
    borderRadius: '20px',
    padding: '28px 20px',
    textAlign: 'center',
    cursor: 'pointer',
    position: 'relative',
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
  }
};

// Mobile Styles
const mobileStyles = {
  container: {
    width: '100%',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    color: '#1f2937',
    padding: '40px 16px',
    position: 'relative',
    overflow: 'hidden'
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: '30px',
    position: 'relative',
    zIndex: 10
  },
  headerLine: {
    width: '40px',
    height: '3px',
    background: 'linear-gradient(90deg, #15a36e, #255f99)',
    margin: '0 auto 15px',
    borderRadius: '2px'
  },
  mainTitle: {
    fontFamily: "'Genos', sans-serif",
    fontSize: '28px',
    fontWeight: 700,
    background: 'linear-gradient(90deg, #15a36e, #255f99)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '15px',
    letterSpacing: '-0.025em'
  },
  subtitle: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: '16px',
    color: '#6b7280',
    maxWidth: '100%',
    margin: '0 auto',
    lineHeight: 1.5,
    fontWeight: 400,
    padding: '0 10px'
  },
  pathTabs: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '30px',
    padding: '0 10px'
  },
  pathTab: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 20px',
    background: 'linear-gradient(135deg, #ffffff, #fafbfc)',
    border: '2px solid #e0f2fe',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(59, 130, 246, 0.06)',
    width: '100%',
    position: 'relative',
    overflow: 'hidden'
  },
  pathTabActive: {
    borderColor: '#15a36e',
    boxShadow: '0 4px 16px rgba(21, 163, 110, 0.15)',
    background: 'linear-gradient(135deg, #15a36e, #255f99)',
    color: '#ffffff'
  },
  tabIcon: {
    width: '20px',
    height: '20px',
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
    marginBottom: '0px'
  },
  flowchartWrapper: {
    width: '100%',
    margin: '0 auto',
    position: 'relative'
  },
  flowchartContainer: {
    background: 'linear-gradient(135deg, #f0fdf4, #ecfdf5)',
    borderRadius: '20px',
    padding: '30px 20px',
    position: 'relative',
    border: '1px solid #d1fae5',
    boxShadow: '0 10px 30px rgba(21, 163, 110, 0.08)',
    width: '100%',
    overflow: 'visible'
  },
  stepsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
    overflow: 'visible'
  },
  stepWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative'
  },
  stepCard: {
    borderRadius: '16px',
    padding: '20px 16px',
    textAlign: 'left',
    cursor: 'pointer',
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '16px',
    background: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid #e5e7eb',
    transition: 'all 0.3s ease'
  },
  stepCardActive: {
    borderColor: '#15a36e',
    boxShadow: '0 4px 16px rgba(21, 163, 110, 0.15)',
    background: 'rgba(255, 255, 255, 0.95)'
  },
  stepIcon: {
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    position: 'relative',
    background: '#f3f4f6',
    border: 'none',
    borderRadius: '12px',
    padding: '12px',
    flexShrink: 0
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left'
  },
  stepTitle: {
    fontFamily: "'Genos', sans-serif",
    fontSize: '16px',
    fontWeight: 700,
    color: '#111827',
    marginBottom: '6px',
    lineHeight: 1.3,
    textAlign: 'left'
  },
  stepDescription: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: '14px',
    color: '#6b7280',
    lineHeight: 1.5,
    fontWeight: 400,
    textAlign: 'left',
    margin: 0
  },
  connectionArrow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 0',
    color: '#15a36e',
    opacity: 0.6,
    transition: 'all 0.3s ease',
    alignSelf: 'center'
  },
  stepNumber: {
    position: 'absolute',
    top: '-8px',
    left: '-8px',
    width: '24px',
    height: '24px',
    background: 'linear-gradient(135deg, #15a36e, #255f99)',
    color: '#ffffff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 700,
    border: '2px solid #ffffff'
  }
};

// Mobile Step Component
const MobileStep = ({ step, index, isActive, onClick, isLast }) => {
  const getStepIconStyle = (color) => {
    switch (color) {
      case 'blue': return { ...mobileStyles.stepIcon, ...mobileStyles.stepIconBlue };
      case 'green': return { ...mobileStyles.stepIcon, ...mobileStyles.stepIconGreen };
      case 'purple': return { ...mobileStyles.stepIcon, ...mobileStyles.stepIconPurple };
      case 'orange': return { ...mobileStyles.stepIcon, ...mobileStyles.stepIconOrange };
      default: return mobileStyles.stepIcon;
    }
  };

  return (
    <div style={mobileStyles.stepWrapper}>
      <div 
        style={{
          ...mobileStyles.stepCard,
          ...(isActive ? mobileStyles.stepCardActive : {})
        }}
        onClick={() => onClick(index)}
      >
        {/* Step number removed for mobile view */}
        <div style={getStepIconStyle(step.color)}>
          {step.icon}
        </div>
        <div style={mobileStyles.stepContent}>
          <h3 style={mobileStyles.stepTitle}>{step.title}</h3>
          <p style={mobileStyles.stepDescription}>{step.description}</p>
        </div>
      </div>

      {!isLast && (
        <div style={mobileStyles.connectionArrow}>
          <ChevronDown className="w-5 h-5" />
        </div>
      )}
    </div>
  );
};

// Desktop Step Component
const DesktopStep = ({ step, index, isActive, onClick, isLast }) => {
  const getStepIconStyle = (color) => {
    switch (color) {
      case 'blue': return { ...desktopStyles.stepIcon, ...desktopStyles.stepIconBlue };
      case 'green': return { ...desktopStyles.stepIcon, ...desktopStyles.stepIconGreen };
      case 'purple': return { ...desktopStyles.stepIcon, ...desktopStyles.stepIconPurple };
      case 'orange': return { ...desktopStyles.stepIcon, ...desktopStyles.stepIconOrange };
      default: return desktopStyles.stepIcon;
    }
  };

  return (
    <div style={desktopStyles.stepWrapper}>
      <AnimatedCard>
        <div 
          style={{
            ...desktopStyles.stepCard,
            ...(isActive ? { borderColor: '#15a36e', boxShadow: '0 8px 30px rgba(21, 163, 110, 0.2)', transform: 'translateY(-2px)' } : {})
          }}
          onClick={() => onClick(index)}
        >
          <div style={getStepIconStyle(step.color)}>
            {step.icon}
          </div>
          
          <div style={desktopStyles.stepContent}>
            <h3 style={desktopStyles.stepTitle}>{step.title}</h3>
            <p style={desktopStyles.stepDescription}>{step.description}</p>
          </div>
        </div>
      </AnimatedCard>

      {!isLast && (
        <div style={desktopStyles.connectionArrow}>
          <ArrowRight className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};

export default function Flowchart() {
  const [activePath, setActivePath] = useState('issuer');
  const [activeStep, setActiveStep] = useState(0);
  const { isMobile } = useResponsive();

  const currentSteps = activePath === 'investor' ? investorSteps : issuerSteps;
  const styles = isMobile ? mobileStyles : desktopStyles;

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  return (
    <div style={styles.container}>
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
              isMobile ? (
                <MobileStep
                  key={step.id}
                  step={step}
                  index={index}
                  isActive={activeStep === index}
                  onClick={handleStepClick}
                  isLast={index === currentSteps.length - 1}
                />
              ) : (
                <DesktopStep
                  key={step.id}
                  step={step}
                  index={index}
                  isActive={activeStep === index}
                  onClick={handleStepClick}
                  isLast={index === currentSteps.length - 1}
                />
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}