export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-4xl px-6 text-center">
        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Crack IELTS with <span className="text-blue-400">Confidence</span>
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-gray-300 text-lg md:text-xl">
          Master IELTS with expert trainers, AI-powered feedback, and proven strategies.  
          Your journey to a higher band score starts here.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#features"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg font-medium transition"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-400 hover:border-blue-400 rounded-lg font-medium transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
