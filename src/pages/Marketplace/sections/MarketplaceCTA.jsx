export default function MarketplaceCTA() {
  return (
    <section className="py-20 bg-gray-800 text-white text-center">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future of Investing?</h2>
        <p className="text-gray-300 mb-6">
          Explore AI-powered tokenized assets and manage your portfolio in real time.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-white text-gray-800 rounded-md font-semibold hover:bg-gray-100">
            Launch App
          </button>
          <button className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-gray-800 transition">
            Explore AI Features
          </button>
        </div>
      </div>
    </section>
  );
}
