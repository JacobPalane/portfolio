import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Jacob Bolai Palane
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              MSc Chemistry Researcher | Rare Earth Elements (REEs) | Hydrometallurgy & Biomining
            </p>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Emerging analytical chemist and hydrometallurgy researcher with practical REE recovery, biomining, analytical instrumentation, and data/automation capability
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/about" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Learn More
              </Link>
              <a href="https://www.linkedin.com/in/jacob-palane-37b44316a/" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                LinkedIn
              </a>
              <a href="https://github.com/JacobPalane" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-primary mb-4">🧪 Research Focus</h3>
              <p className="text-gray-700">
                Hydrometallurgical and biomining research focused on REE recovery from mine tailings and acidic leach systems
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-primary mb-4">⚗️ Instrumentation</h3>
              <p className="text-gray-700">
                Hands-on exposure to ICP-OES, XRD, SEM-EDS, UV-Vis, FTIR, TGA/DSC and advanced analytical techniques
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-primary mb-4">📊 Data & Code</h3>
              <p className="text-gray-700">
                Python-based data analysis, visualization, and process automation for experimental modeling and insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Multidisciplinary Researcher</h2>
          <p className="text-lg text-blue-100 mb-8">
            Combining chemistry, hydrometallurgy, analytical instrumentation, and computational/data skills for critical mineral recovery
          </p>
          <Link href="/research" className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block">
            View Research & Experience
          </Link>
        </div>
      </section>
    </div>
  )
}
