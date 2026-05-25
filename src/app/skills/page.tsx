export default function Skills() {
  const technicalSkills = [
    'Hydrometallurgy',
    'Rare Earth Elements (REEs)',
    'Analytical Chemistry',
    'Biomining',
    'Solvent Extraction',
    'ICP-OES',
    'XRD',
    'SEM-EDS',
    'UV-Vis Spectroscopy',
    'FTIR',
    'Scientific Research',
    'Process Optimization',
    'Sample Preparation',
    'Data Analysis',
    'Python',
    'Jupyter Notebook',
    'Metallurgy',
    'Mineral Processing',
    'Chemical Analysis',
    'Experimental Design',
    'Acid Leaching',
    'D2EHPA Extractants',
    'Selective Precipitation',
    'XRF',
    'TGA/DSC',
    'AAS',
    'Chromatography',
    'Process Modeling',
    'Statistical Analysis',
  ]

  const softSkills = [
    'Problem Solving',
    'Technical Reporting',
    'Laboratory Safety',
    'Scientific Communication',
    'Collaboration',
    'Critical Thinking',
  ]

  const tools = [
    { name: 'Python', level: 'Proficient' },
    { name: 'Jupyter Notebook', level: 'Proficient' },
    { name: 'ICP-OES', level: 'Proficient' },
    { name: 'XRD Analysis', level: 'Proficient' },
    { name: 'SEM-EDS', level: 'Proficient' },
    { name: 'XRF', level: 'Intermediate' },
    { name: 'UV-Vis Spectroscopy', level: 'Proficient' },
    { name: 'FTIR Spectroscopy', level: 'Proficient' },
    { name: 'TGA/DSC', level: 'Proficient' },
    { name: 'AAS', level: 'Intermediate' },
    { name: 'Data Visualization (Matplotlib, Plotly)', level: 'Proficient' },
    { name: 'Statistical Analysis (SciPy, NumPy, Pandas)', level: 'Proficient' },
    { name: 'Microsoft Office Suite', level: 'Advanced' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Technical Skills</h1>
          <p className="text-blue-100 text-lg mt-4">
            Chemistry, Analytical Instrumentation & Data Science
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Technical Skills */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Technical & Domain Skills</h2>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-badge hover:bg-accent hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Software */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Tools & Software</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="bg-light p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-primary">{tool.name}</span>
                    <span className="text-sm bg-accent text-white px-3 py-1 rounded">
                      {tool.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Professional Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-light rounded-lg">
                  <span className="text-accent text-2xl">✓</span>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Analytical Instrumentation */}
          <div className="bg-light rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Analytical Instrumentation Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-primary mb-3">Spectroscopic Methods</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>ICP-OES</strong> - Elemental quantification</li>
                  <li>• <strong>UV-Vis</strong> - Absorption spectroscopy</li>
                  <li>• <strong>FTIR</strong> - Functional group identification</li>
                  <li>• <strong>AAS</strong> - Atomic absorption spectroscopy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-3">Structural & Surface Analysis</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>XRD</strong> - Crystal phase identification</li>
                  <li>• <strong>XRF</strong> - Elemental composition</li>
                  <li>• <strong>SEM-EDS</strong> - Morphology & elemental mapping</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-3">Thermal Analysis</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>TGA</strong> - Thermogravimetric analysis</li>
                  <li>• <strong>DSC</strong> - Differential scanning calorimetry</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-3">Separation & Characterization</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Chromatography</strong> - Various techniques</li>
                  <li>• <strong>Sample Preparation</strong> - Advanced methods</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Research Skills */}
          <div className="bg-primary text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Research & Laboratory Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-4">Hydrometallurgical Processes</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Acid leaching optimization</li>
                  <li>• Solvent extraction design</li>
                  <li>• Selective precipitation</li>
                  <li>• Recovery pathway development</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Data & Computation</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Python data analysis</li>
                  <li>• Statistical modeling</li>
                  <li>• Data visualization</li>
                  <li>• Process automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
