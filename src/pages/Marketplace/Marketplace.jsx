export default function Marketplace() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="min-h-screen bg-white">
        <Hero />
        <Features />
        <Dashboard />
      </div>
      <h1 className="text-4xl font-bold text-center mb-8">Marketplace</h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Explore the future of asset tokenization. Discover how we are
        transforming traditional assets into digital tokens, making them more
        accessible and efficient.
      </p>
    </div>
  );
}