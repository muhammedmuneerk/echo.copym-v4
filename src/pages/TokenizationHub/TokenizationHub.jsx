import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Dashboard from "./sections/Dashboard";

export default function TokenizationHub() {
  return (
      <div className="min-h-screen bg-white">
        <Hero />
        <Features />
        <Dashboard />
      </div>
  );
}