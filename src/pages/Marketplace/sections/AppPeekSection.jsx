export default function AppPeekSection() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image/Mockup */}
        <div className="w-full h-[400px] bg-gray-100 rounded-2xl shadow-inner flex items-center justify-center">
          {/* Replace with wallet or dashboard UI mockup */}
          <span className="text-gray-400 text-xl">[Wallet/Portfolio UI]</span>
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Peek Into Your Web3 Investment Hub</h2>
          <p className="text-gray-600 mb-6">
            Manage your assets, monitor real-time performance, and view tokenized ownership — all through an intuitive interface built for next-gen investors.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Unified dashboard for tokenized assets</li>
            <li>Real-time portfolio performance</li>
            <li>On-chain wallet balance tracking</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
