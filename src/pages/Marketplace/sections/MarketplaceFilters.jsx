import React from "react";
import { motion } from "framer-motion";

export default function MarketplaceFilters({ searchParams, updateSearchParams, categories }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
      className="mb-12"
    >
      <div className="backdrop-blur-xl bg-white/10 p-6 rounded-2xl shadow-2xl border border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Search assets..."
            value={searchParams.query}
            onChange={(e) => updateSearchParams({ query: e.target.value })}
            className="col-span-2 w-full p-3 bg-white/20 rounded-lg border border-white/30 text-white"
          />
          <select
            value={searchParams.category}
            onChange={(e) => updateSearchParams({ category: e.target.value })}
            className="w-full p-3 bg-white/20 rounded-lg border border-white/30 text-white"
          >
            {categories.map((category) => <option key={category}>{category}</option>)}
          </select>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-white/70">${searchParams.priceRange[1].toLocaleString()}</span>
            <input
              type="range"
              min="0"
              max="1000000"
              step="10000"
              value={searchParams.priceRange[1]}
              onChange={(e) => updateSearchParams({ priceRange: [0, Number(e.target.value)] })}
              className="w-full h-2 bg-white/30 rounded-full"
            />
          </div>
          <select
            value={searchParams.sortBy}
            onChange={(e) => updateSearchParams({ sortBy: e.target.value })}
            className="w-full p-3 bg-white/20 rounded-lg border border-white/30 text-white"
          >
            {["Latest", "ROI", "Price: Low to High", "Price: High to Low"].map(option => <option key={option}>{option}</option>)}
          </select>
        </div>
      </div>
    </motion.div>
  );
}
