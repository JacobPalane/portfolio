export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
          <p className="text-blue-100 text-lg mt-4">
            MSc Chemistry Researcher | University of the Free State
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-primary">My Journey</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              I am an MSc Chemistry researcher at University of the Free State specializing in hydrometallurgy, biomining, and Rare Earth Element (REE) recovery from mine tailings and acidic leach systems.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              My research focuses on <strong>sustainable extraction and selective recovery of critical minerals</strong> using solvent extraction, selective precipitation, acid leaching, and analytical characterization techniques. I work with REE-bearing systems and investigate impurity removal, process optimization, and metal recovery pathways relevant to modern energy and advanced material technologies.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-primary">Laboratory & Analytical Expertise</h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              I have academic and practical exposure to analytical instrumentation and laboratory methods including:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>ICP-OES (Inductively Coupled Plasma Optical Emission Spectroscopy)</li>
              <li>XRD (X-Ray Diffraction)</li>
              <li>XRF (X-Ray Fluorescence)</li>
              <li>SEM-EDS (Scanning Electron Microscopy - Energy Dispersive X-ray Spectroscopy)</li>
              <li>UV-Vis Spectroscopy</li>
              <li>FTIR (Fourier Transform Infrared Spectroscopy)</li>
              <li>TGA/DSC (Thermogravimetric Analysis / Differential Scanning Calorimetry)</li>
              <li>AAS (Atomic Absorption Spectroscopy)</li>
              <li>Chromatography techniques</li>
              <li>Sample preparation and characterization</li>
            </ul>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-primary">Research Interests</h3>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Beyond laboratory research, I am also interested in scientific computing, data analysis, and process automation using <strong>Python</strong>, particularly for:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Experimental modeling and simulation</li>
              <li>Data visualization and interpretation</li>
              <li>Predictive analysis in chemical systems</li>
              <li>Automation of repetitive data processing</li>
              <li>Technical reporting and documentation</li>
            </ul>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-primary">Career Goals</h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              My long-term goal is to contribute to the advancement of <strong>critical minerals, sustainable metallurgy, and applied analytical science</strong> within both research and industry environments. I aim to bridge the gap between fundamental laboratory research and practical process optimization, making complex chemical systems more efficient and sustainable.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-primary">Core Areas of Interest</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-light p-4 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Hydrometallurgy</li>
                  <li>✓ Rare Earth Elements (REEs)</li>
                  <li>✓ Biomining & Biometallurgy</li>
                  <li>✓ Analytical Chemistry</li>
                </ul>
              </div>
              <div className="bg-light p-4 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Critical Minerals</li>
                  <li>✓ Process Optimization</li>
                  <li>✓ Scientific Data Analysis</li>
                  <li>✓ Python for Research & Engineering</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-10 mb-4 text-primary">Why This Matters</h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Rare Earth Elements are critical for modern technologies—from renewable energy systems to advanced electronics. However, sustainable extraction and processing remain major global challenges. My research contributes to solving these challenges through a combination of chemistry, analytical instrumentation, and data-driven optimization—making me uniquely positioned to work on globally important problems.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">At a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">10+</div>
              <p className="text-gray-700 mt-2">Analytical Techniques</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">3+</div>
              <p className="text-gray-700 mt-2">Years Research</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">50+</div>
              <p className="text-gray-700 mt-2">Experiments Conducted</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">100%</div>
              <p className="text-gray-700 mt-2">Dedicated</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
