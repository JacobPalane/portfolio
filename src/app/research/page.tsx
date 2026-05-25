export default function Research() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Research & Experience</h1>
          <p className="text-blue-100 text-lg mt-4">
            MSc Chemistry Research at University of the Free State
          </p>
        </div>
      </section>

      {/* Main Experience */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="experience-card mb-12">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h2 className="text-3xl font-bold text-primary">MSc Chemistry Researcher</h2>
                <p className="text-lg text-gray-600">University of the Free State</p>
              </div>
              <span className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-semibold">Current</span>
            </div>
            <p className="text-gray-600 mb-6">Research specializing in hydrometallurgy and Rare Earth Element recovery</p>

            <h3 className="text-xl font-bold text-primary mb-4">Research Focus</h3>
            <p className="text-gray-700 mb-4">
              Worked on hydrometallurgical and biomining-related research focused on the recovery and selective separation of Rare Earth Elements (REEs) from mine tailings and acidic leach liquors.
            </p>

            <h3 className="text-xl font-bold text-primary mb-4">Key Research Activities</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span className="text-gray-700"><strong>Sulfuric acid leaching</strong> of REE-bearing materials under controlled conditions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span className="text-gray-700"><strong>Solvent extraction</strong> using D2EHPA and related extractants for selective REE recovery</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span className="text-gray-700"><strong>Selective precipitation</strong> of REEs and impurity removal strategies</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span className="text-gray-700"><strong>Experimental design and laboratory optimization</strong> of extraction processes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span className="text-gray-700"><strong>Analytical characterization and interpretation</strong> of results using advanced instruments</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span className="text-gray-700"><strong>Scientific data analysis and visualization</strong> using Python and statistical tools</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-primary mb-4">Analytical Instrumentation Experience</h3>
            <p className="text-gray-700 mb-4">
              Hands-on laboratory and analytical experience includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-light p-4 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>ICP-OES</strong> - Elemental analysis</li>
                  <li>• <strong>XRD</strong> - Crystal structure identification</li>
                  <li>• <strong>XRF</strong> - Elemental composition</li>
                  <li>• <strong>SEM-EDS</strong> - Morphology & elemental mapping</li>
                  <li>• <strong>UV-Vis</strong> - Spectroscopic analysis</li>
                </ul>
              </div>
              <div className="bg-light p-4 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>FTIR</strong> - Functional group identification</li>
                  <li>• <strong>TGA/DSC</strong> - Thermal properties</li>
                  <li>• <strong>AAS</strong> - Metal concentration determination</li>
                  <li>• <strong>Chromatography</strong> - Separation techniques</li>
                  <li>• <strong>Sample preparation</strong> - Advanced techniques</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-primary mb-4">Additional Focus Areas</h3>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>✓ <strong>Sustainable mineral processing</strong> - Environmentally conscious approaches</li>
              <li>✓ <strong>Critical minerals and clean-energy materials</strong> - Global relevance</li>
              <li>✓ <strong>Process efficiency and recovery optimization</strong> - Maximizing yield</li>
              <li>✓ <strong>Research documentation and technical reporting</strong> - Clear communication</li>
              <li>✓ <strong>Data-driven decision making</strong> - Statistical analysis and modeling</li>
            </ul>
          </div>

          {/* Research Methodologies */}
          <div className="bg-light rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Research Methodologies</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Hydrometallurgical Processing</h4>
                <p className="text-gray-700">Design and optimization of leaching, extraction, and precipitation stages for REE recovery</p>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <h4 className="font-bold text-gray-800 mb-2">Analytical Characterization</h4>
                <p className="text-gray-700">Multi-technique approach to quantify and identify chemical species, crystal phases, and impurities</p>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <h4 className="font-bold text-gray-800 mb-2">Data Science & Automation</h4>
                <p className="text-gray-700">Python-based tools for experimental data processing, visualization, and predictive modeling</p>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <h4 className="font-bold text-gray-800 mb-2">Process Optimization</h4>
                <p className="text-gray-700">Systematic evaluation of process parameters to improve recovery rates and reduce environmental impact</p>
              </div>
            </div>
          </div>

          {/* Impact */}
          <div className="mt-12 p-8 border-l-4 border-accent bg-blue-50 rounded-r-lg">
            <h3 className="text-xl font-bold text-primary mb-3">Research Impact & Relevance</h3>
            <p className="text-gray-700">
              This research addresses a critical global challenge: sustainable recovery of Rare Earth Elements from secondary sources. REEs are essential for renewable energy systems, modern electronics, and advanced materials. Developing efficient, sustainable extraction methods contributes to circular economy principles and reduces reliance on primary mining.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
