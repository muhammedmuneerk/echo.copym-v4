import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MapPin, TrendingUp, X } from "lucide-react";

// --- Asset data (scalable to any number) ----
const mockAssets = [
  { id: "real-estate-1", title: "Premium Office Building", category: "Real Estate", location: "New York, USA", expectedRoi: "8.5%", price: 250000, image: "/assets/Images/premium-office-building-1.png", },
  { id: "art-1", title: "Digital Art Collection", category: "Art", location: "Digital", expectedRoi: "Variable", price: 15000, image: "/assets/Images/digital-art-collection-1.png", },
  { id: "commodities-1", title: "Gold Reserve", category: "Commodities", location: "Secure Vault, Switzerland", expectedRoi: "5.2%", price: 50000, image: "/assets/Images/gold-reserve.png", },
  { id: "infrastructure-1", title: "Solar Farm Project", category: "Infrastructure", location: "Arizona, USA", expectedRoi: "7.3%", price: 120000, image: "/assets/Images/solar-farm-project-2.png", },
  { id: "startups-1", title: "Tech Startup Equity", category: "Startups", location: "San Francisco, USA", expectedRoi: "High Risk/Reward", price: 75000, image: "/assets/Images/tech-2.png", },
  { id: "real-estate-2", title: "Luxury Apartment Complex", category: "Real Estate", location: "Miami, USA", expectedRoi: "6.8%", price: 350000, image: "/assets/Images/apartment-complex.png" },
];

// --- Theme and Routing ---
const theme = {
  greenIcon: '#15a36e',
  blueButton: '#255f99',
  whiteText: '#ffffff',
};
const categoryToPath = {
    "Real Estate": "/market/real-estate/",
    Art: "/market/art/",
    Commodities: "/market/gold/",
    Infrastructure: "/market/carbon-credits/",
    Startups: "/market/private-equity/",
};
const allCardData = mockAssets.map((asset) => ({ ...asset, link: categoryToPath[asset.category] || "/marketplace" }));


// ====================================================================
// --- THE FULLY RESPONSIVE ASSET CARD COMPONENT (UNCHANGED) ---
// ====================================================================
const AssetCard = ({ card, layoutId, isPopup = false }) => {
  const navigate = useNavigate();
  // This component remains exactly as you approved it.
  return (
    <motion.div
      layoutId={layoutId}
      className="w-[340px] h-[500px] rounded-2xl flex flex-col justify-end overflow-hidden shadow-2xl relative bg-black"
    >
      <motion.img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className={`absolute inset-0 bg-gradient-to-t z-10 ${isPopup ? 'from-black/90 via-black/60' : 'from-black/80 via-black/40'} to-transparent`} />
      <div className="absolute top-3 left-3 py-1 px-3 rounded-full text-white text-sm font-semibold z-30" style={{ backgroundColor: theme.blueButton }}>{card.category}</div>
      <div className="relative z-20 p-4 space-y-4 text-white">
        <h3 className="brand-card-title leading-tight">{card.title}</h3>
        <div className="flex flex-col gap-2 text-base font-semibold border-t border-b border-white/20 py-3">
          <p className="flex items-center gap-2"><MapPin size={30} style={{ color: theme.greenIcon }} />{card.location}</p>
          <p className="flex items-center gap-2"><TrendingUp size={30} style={{ color: theme.greenIcon }} />{card.expectedRoi} ROI</p>
        </div>
        <div className="flex items-end justify-between pt-2">
          <div>
            <p className="text-sm opacity-70">Price</p>
            <p className="text-2xl font-bold">${card.price.toLocaleString()}</p>
          </div>
          <motion.button className="px-5 py-2 text-white rounded-lg font-semibold shadow-md text-sm" style={{ backgroundColor: theme.blueButton }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={(e) => { e.stopPropagation(); navigate(card.link); }}>Invest</motion.button>
        </div>
      </div>
    </motion.div>
  );
};


// ====================================================================
// --- THE MAIN IMMERSIVE FOCUS LANE COMPONENT (FIXED AND CORRECTED) ---
// ====================================================================
const FocusLane = () => {
    const [index, setIndex] = useState(0);
    const [selectedCard, setSelectedCard] = useState(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (selectedCard) {
            clearInterval(intervalRef.current);
            return;
        }
        intervalRef.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % allCardData.length);
        }, 4000);
        return () => clearInterval(intervalRef.current);
    }, [index, selectedCard]);

    const getOffset = (i, currentIndex, total) => {
        const diff = i - currentIndex;
        if (Math.abs(diff) > total / 2) {
            return diff - (Math.sign(diff) * total);
        }
        return diff;
    };

    // ==================== CHANGE #1: THE ANIMATION LOGIC ====================
    // This function now handles both the centering and the 3D lane animation.
    const getCardStyle = (i) => {
        const offset = getOffset(i, index, allCardData.length);
        
        if (Math.abs(offset) > 1) { // Only render immediate neighbors
            return { opacity: 0, scale: 0, zIndex: 0 };
        }

        return {
            x: `calc(-50% + ${offset * 60}%)`, // Combines centering with the slide
            y: '-50%', // Handles vertical centering
            z: -Math.abs(offset) * 200,
            rotateY: offset * -25,
            zIndex: allCardData.length - Math.abs(offset),
            filter: Math.abs(offset) === 0 ? 'grayscale(0%)' : 'grayscale(80%)',
            opacity: Math.abs(offset) === 0 ? 1 : 0.5,
        };
    };

    return (
        <div className="w-full h-full p-2 sm:p-4 md:p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h1 className="brand-section-title">
                  <span className="text-[#255f99]">Marketplace </span>
                  <span className="text-[#15a36e]">Spotlight</span>
              </h1>  
              <p className="brand-description max-w-3xl mx-auto text-slate-600 px-4">
                  Click an asset to see more details.
              </p>
            </div>

            <div
                className="relative w-full h-[550px]"
                style={{ perspective: '1500px' }}
            >
                <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
                    {allCardData.map((card, i) => (
                        <motion.div
                            key={card.id}
                            // ==================== CHANGE #2: THE CLASSNAME ====================
                            // This simplified className only sets the position, not the transform.
                            className="absolute top-1/2 left-1/2"
                            animate={getCardStyle(i)}
                            transition={{ type: 'spring', stiffness: 150, damping: 25 }}
                            onClick={() => {
                                const offset = getOffset(i, index, allCardData.length);
                                if (offset === 0) {
                                    setSelectedCard(card);
                                } else {
                                    setIndex(prev => (prev + offset + allCardData.length) % allCardData.length);
                                }
                            }}
                        >
                            <AssetCard card={card} layoutId={`card-container-${card.id}`} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* THE TAKEOVER POPUP MODAL (UNCHANGED) */}
            <AnimatePresence>
                {selectedCard && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
                        animate={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
                        exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
                        onClick={() => setSelectedCard(null)}
                    >
                        {/* The popup now uses the same w/h as the card for a perfect animation */}
                        <div className="w-[340px] h-[500px] sm:w-full sm:max-w-xl sm:h-[90vh] sm:max-h-[800px]" onClick={(e) => e.stopPropagation()}>
                            <AssetCard card={selectedCard} layoutId={`card-container-${selectedCard.id}`} isPopup={true} />
                        </div>
                        <motion.button className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white" onClick={() => setSelectedCard(null)} initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: -90 }}>
                            <X size={24} />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FocusLane;