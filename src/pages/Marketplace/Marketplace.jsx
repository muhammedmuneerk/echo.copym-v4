import Hero from "./sections/Hero";
import MarketSlider from "./sections/MarketSlider";
import AppPeekSection from "./sections/AppPeekSection";
import TestimonialsSection from "./sections/TestimonialsSection";

export default function Marketplace() {
  return (
    <div className="bg-white">
      <Hero />
      <AppPeekSection />
      <div
        className="py-12 text-center"
        style={{
          backgroundImage: 'linear-gradient(to right, #15a36e10, #255f9910)', // subtle gradient with low opacity (hex-based)
        }}
      >
        <MarketSlider />
      </div>

      <TestimonialsSection />
    </div>
  );
}
