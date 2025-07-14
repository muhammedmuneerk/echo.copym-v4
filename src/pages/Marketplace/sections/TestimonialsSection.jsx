export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">What Investors Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((id) => (
            <div key={id} className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 italic mb-4">
                “The AI investment insights helped me rebalance and boost ROI significantly.”
              </p>
              <p className="text-sm text-gray-500">— Investor #{id}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
