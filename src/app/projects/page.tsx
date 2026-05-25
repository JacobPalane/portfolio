export default function Projects() {
  const projects = [
    {
      title: 'REE Recovery Process Optimization',
      description: 'Python-based optimization of hydrometallurgical extraction processes for Rare Earth Element recovery from mine tailings using solvent extraction modeling.',
      tags: ['Python', 'Data Analysis', 'Optimization', 'REEs', 'Hydrometallurgy'],
      link: 'https://github.com/JacobPalane',
    },
    {
      title: 'Analytical Data Visualization Dashboard',
      description: 'Interactive Python dashboard for visualizing and analyzing ICP-OES, XRD, and SEM-EDS spectroscopic data from multiple experimental runs with trend analysis.',
      tags: ['Python', 'Data Visualization', 'Jupyter', 'Analytics', 'Plotly'],
      link: 'https://github.com/JacobPalane',
    },
    {
      title: 'Solvent Extraction Modeling & Simulation',
      description: 'Computational modeling of D2EHPA solvent extraction processes using Python for predicting extraction efficiency, pH optimization, and process parameters.',
      tags: ['Python', 'Chemical Modeling', 'Simulation', 'Process Design', 'NumPy/SciPy'],
      link: 'https://github.com/JacobPalane',
    },
    {
      title: 'Laboratory Data Management System',
      description: 'Automated Python system for organizing, storing, and retrieving experimental data from analytical instruments with Excel export and statistical reporting.',
      tags: ['Python', 'Database', 'Automation', 'Lab Management', 'Data Processing'],
      link: 'https://github.com/JacobPalane',
    },
    {
      title: 'Biomining Process Analysis',
      description: 'Research on biomining approaches for sustainable REE recovery using bacterial leaching with microbiological and chemical analysis data integration.',
      tags: ['Biomining', 'Research', 'Biometallurgy', 'Data Analysis'],
      link: 'https://github.com/JacobPalane',
    },
    {
      title: 'Impurity Removal Strategy Optimization',
      description: 'Systematic evaluation of selective precipitation methods for removing impurities from REE leach solutions with experimental design and statistical analysis.',
      tags: ['Process Optimization', 'Precipitation', 'Chemistry', 'Experimental Design'],
      link: 'https://github.com/JacobPalane',
    },
  ]

  const publications = [
    {
      title: 'MSc Research Poster',
      description: 'Conference poster presentation on Rare Earth Element recovery from mine tailings using biomining approaches.',
      type: 'Research Poster',
    },
    {
      title: 'Analytical Chemistry Methods Paper',
      description: 'Technical documentation of analytical methods for REE characterization and quality assessment.',
      type: 'Technical Documentation',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Featured Projects</h1>
          <p className="text-blue-100 text-lg mt-4">
            Research, Data Science & Technical Projects
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Projects Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Python & Data Science Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="project-card border-l-4 border-accent">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-primary transition text-sm font-semibold"
                    >
                      View →
                    </a>
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="skill-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Highlights */}
          <div className="bg-light rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Research Highlights</h2>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="border-l-4 border-accent pl-6 pb-6 last:pb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold">
                      {pub.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{pub.title}</h3>
                  <p className="text-gray-700">{pub.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Demonstrated */}
          <div className="bg-primary text-white rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6">Skills Demonstrated Through Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-4">Technical Skills</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>✓ Python programming for scientific computing</li>
                  <li>✓ Data analysis and statistical modeling</li>
                  <li>✓ Data visualization with Matplotlib & Plotly</li>
                  <li>✓ Jupyter Notebook development</li>
                  <li>✓ Laboratory data management</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Chemistry & Research</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>✓ Hydrometallurgical process modeling</li>
                  <li>✓ Analytical chemistry problem-solving</li>
                  <li>✓ Experimental design optimization</li>
                  <li>✓ REE recovery process development</li>
                  <li>✓ Scientific documentation & communication</li>
                </ul>
              </div>
            </div>
          </div>

          {/* GitHub Section */}
          <div className="border-2 border-accent rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">More on GitHub</h2>
            <p className="text-gray-700 mb-6">
              Explore more projects, code examples, and research implementations on my GitHub profile.
            </p>
            <a
              href="https://github.com/JacobPalane"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent transition"
            >
              Visit GitHub Profile
            </a>
          </div>

          {/* Collaboration */}
          <div className="mt-16 p-8 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold text-primary mb-3">Open to Collaboration</h3>
            <p className="text-gray-700 mb-4">
              I'm interested in collaborating on projects related to:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Rare Earth Element recovery and processing</li>
              <li>• Scientific data analysis and visualization</li>
              <li>• Chemical and metallurgical process optimization</li>
              <li>• Python tools for laboratory automation</li>
              <li>• Critical minerals and sustainable chemistry</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
