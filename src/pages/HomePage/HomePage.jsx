import Dashboard from "./sections/Dashboard";
import Features from "./sections/Features";
import Hero from "./sections/Hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Dashboard />
    </div>
  );
}