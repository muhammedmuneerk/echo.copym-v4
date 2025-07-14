export default function AICopilotSection() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: AI Mockup */}
        <div className="w-full h-[400px] bg-gray-100 rounded-2xl shadow-inner flex items-center justify-center">
          <span className="text-gray-400 text-xl">[AI Chat / Recommendation UI]</span>
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Meet Your AI Investment Copilot</h2>
          <p className="text-gray-600 mb-6">
            Our AI models help you optimize your investment strategy with smart scores, predictive analysis, and portfolio health checks.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Asset Smart Scores & ROI projections</li>
            <li>Personalized asset recommendations</li>
            <li>AI-powered alerts & insights</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
