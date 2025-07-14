import { useState, useMemo } from "react";
import Hero from "./sections/Hero";
import MarketplaceFilters from "./sections/MarketplaceFilters";
import AssetGrid from "./sections/AssetGrid";
import MarketSlider from "./sections/MarketSlider";
import AppPeekSection from "./sections/AppPeekSection";
import SecurityFeaturesSection from "./sections/SecurityFeaturesSection";
import AICopilotSection from "./sections/AICopilotSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import MarketplaceCTA from "./sections/MarketplaceCTA";
// ... mockAssets and categories as before
const mockAssets = [
  {
    id: 1,
    title: "Premium Office Building",
    category: "Real Estate",
    location: "New York, USA",
    expectedRoi: "8.5%",
    price: 250000,
    availableTokens: 750,
    totalTokens: 1000,
    image: "/assets/images/premium-office-building-1.png",
  },
  {
    id: 2,
    title: "Digital Art Collection",
    category: "Art",
    location: "Digital",
    expectedRoi: "Variable",
    price: 15000,
    availableTokens: 65,
    totalTokens: 100,
    image: "/assets/images/digital-art-collection-1.png",
  },
  {
    id: 3,
    title: "Gold Reserve",
    category: "Commodities",
    location: "Secure Vault, Switzerland",
    expectedRoi: "5.2%",
    price: 50000,
    availableTokens: 320,
    totalTokens: 500,
    image: "/assets/images/gold-reserve.png",
  },
  {
    id: 4,
    title: "Solar Farm Project",
    category: "Infrastructure",
    location: "Arizona, USA",
    expectedRoi: "7.3%",
    price: 120000,
    availableTokens: 1800,
    totalTokens: 2000,
    image: "/assets/images/solar-farm-project-2.png",
  },
  {
    id: 5,
    title: "Tech Startup Equity",
    category: "Startups",
    location: "San Francisco, USA",
    expectedRoi: "High Risk/Reward",
    price: 75000,
    availableTokens: 210,
    totalTokens: 300,
    image: "/assets/images/tech-2.png",
  },
  {
    id: 6,
    title: "Luxury Apartment Complex",
    category: "Real Estate",
    location: "Miami, USA",
    expectedRoi: "6.8%",
    price: 350000,
    availableTokens: 1200,
    totalTokens: 1500,
    image: "/assets/images/apartment-complex.png",
  },
];

const categories = [
  "All Categories",
  "Real Estate",
  "Art",
  "Commodities",
  "Infrastructure",
  "Startups",
];

// Map asset categories to navigation paths
const categoryToPath = {
  "Real Estate": "/market/real-estate",
  "Art": "/market/art",
  "Commodities": "/market/gold",
  "Infrastructure": "/market/carbon-credits", // Closest match from navigation
  "Startups": "/market/private-equity", // Closest match from navigation
  // Default fallback
  "default": "/tokenization"
};
export default function Marketplace() {
  const [searchParams, setSearchParams] = useState({ query: "", category: "All Categories", priceRange: [0, 1000000], sortBy: "Latest" });

  const updateSearchParams = (updates) => setSearchParams(prev => ({ ...prev, ...updates }));

  const filteredAssets = useMemo(() => {
    return mockAssets
      .filter(asset => {
        const matchSearch = asset.title.toLowerCase().includes(searchParams.query.toLowerCase());
        const matchCategory = searchParams.category === "All Categories" || asset.category === searchParams.category;
        const matchPrice = asset.price >= searchParams.priceRange[0] && asset.price <= searchParams.priceRange[1];
        return matchSearch && matchCategory && matchPrice;
      })
      .sort(/* same sort logic */);
  }, [searchParams]);

  const getAssetPath = (asset) => categoryToPath[asset.category] || "/tokenization";

  return (
  <div className="min-h-screen relative bg-white text-gray-800">
    {/* Optional: remove or use a soft gray pattern instead */}
    {/* <div className="marketplace-bg fixed inset-0 -z-10 bg-white"></div> */}

    <div className="container mx-auto px-4 max-w-7xl pt-10">
      {/* Hero Section */}
      <Hero />
    <AppPeekSection />
      <SecurityFeaturesSection />
      <AICopilotSection />
      <MarketSlider />
      <TestimonialsSection />
      <MarketplaceCTA />
    
    </div>
  </div>
);

}
