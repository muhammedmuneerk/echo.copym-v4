import { motion, AnimatePresence } from "framer-motion";
import AssetCard from "./AssetCard";

export default function AssetGrid({ assets, getAssetPath }) {
  return (
    <AnimatePresence>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.1
            }
          }
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center"
      >
        {assets.map((asset, index) => (
          <AssetCard key={asset.id} asset={asset} index={index} getAssetPath={getAssetPath} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
