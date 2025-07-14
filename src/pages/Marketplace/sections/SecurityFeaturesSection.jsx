export default function SecurityFeaturesSection() {
  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Built on Secure Foundations</h2>
          <p className="text-gray-600 mb-6">
            Your investments are safeguarded with MPC wallets and enterprise-grade custody via Fireblocks. Security and transparency are our top priorities.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Fireblocks-powered MPC wallets</li>
            <li>Multi-party signature for every transaction</li>
            <li>Non-custodial infrastructure, audit-ready</li>
          </ul>
        </div>

        {/* Right: Security Illustration */}
        <div className="w-full h-[400px] bg-white border border-gray-200 rounded-2xl shadow-inner flex items-center justify-center">
          <span className="text-gray-400 text-xl">[MPC / Security Graph]</span>
        </div>
      </div>
    </section>
  );
}
