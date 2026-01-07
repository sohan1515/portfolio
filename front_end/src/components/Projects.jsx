import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className="h-screen bg-black relative overflow-y-auto">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'gridMove 4s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Transparent Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">
                <span className="text-blue-400">Sohan</span>
                <span className="text-white">Metil</span>
              </h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className="text-blue-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                  Home
                </Link>
                <Link to="/about" className="text-blue-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                  About
                </Link>
                <Link to="/skills" className="text-blue-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                  Skills
                </Link>
                <Link to="/projects" className="text-blue-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                  Projects
                </Link>
                <Link to="/certifications" className="text-blue-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                  Certifications
                </Link>
                <Link to="/achievements" className="text-blue-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                  Achievements
                </Link>
                <Link to="/contact" className="text-blue-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => {
                  const mobileMenu = document.getElementById('mobile-menu');
                  mobileMenu.classList.toggle('hidden');
                }}
                className="text-blue-300 hover:text-blue-400 p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden bg-black/95 backdrop-blur-md border-t border-blue-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-blue-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-blue-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              About
            </Link>
            <Link to="/skills" className="text-blue-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Skills
            </Link>
            <Link to="/projects" className="text-blue-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Projects
            </Link>
            <Link to="/certifications" className="text-blue-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Certifications
            </Link>
            <Link to="/achievements" className="text-blue-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Achievements
            </Link>
            <Link to="/contact" className="text-blue-300 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 pt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            <span className="text-blue-400">My </span>
            <span className="text-white">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105">
                <div className="w-full h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-blue-400 text-4xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Project {project}</h3>
                <p className="text-blue-200 mb-4">A amazing project showcasing modern web technologies and creative design solutions.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-blue-600/20 text-blue-300 px-2 py-1 rounded">Tailwind</span>
                </div>
                <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300">
                  View Project →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-blue-500/20 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-blue-300">
            © 2024 Sohan Metil. Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Projects