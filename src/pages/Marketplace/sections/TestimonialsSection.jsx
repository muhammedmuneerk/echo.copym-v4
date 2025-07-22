export default function TestimonialsSection() {
  return (
    <section className="py-12 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Gradient Title */}
        <h2 className="brand-section-title text-[#255f99] sm:text-4xl font-bold mb-10 bg-clip-text">
          What Investors Are Saying
        </h2>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              quote:
                "The AI investment insights helped me rebalance and boost ROI significantly.",
              name: "Sophia R.",
            },
            {
              quote:
                "Tokenized real estate access through this platform is a game changer.",
              name: "Daniel M.",
            },
            {
              quote:
                "Everything from KYC to portfolio management is seamless and secure.",
              name: "Arjun K.",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <p className="text-gray-600 italic mb-4 leading-relaxed">
                “{testimonial.quote}”
              </p>
              <p className="text-sm text-gray-500 font-medium">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
