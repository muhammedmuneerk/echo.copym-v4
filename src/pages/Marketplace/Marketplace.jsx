import Hero from "./sections/Hero";
import MarketSlider from "./sections/MarketSlider";
import AppPeekSection from "./sections/AppPeekSection";
import TestimonialsSection from "./sections/TestimonialsSection";

export default function Marketplace() {
  return (
    <div className="bg-green-50">
      <Hero />
      <AppPeekSection />
      <div
        className="py-12 text-center"
      >
        <MarketSlider />
      </div>

      <TestimonialsSection />
    </div>
  );
}
