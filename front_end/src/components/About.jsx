import { Link } from 'react-router-dom'

function About() {
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

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 pt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            <span className="text-blue-400">About </span>
            <span className="text-white">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-blue-200 leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design and user experience.
                With expertise in modern web technologies, I create digital solutions that are both
                beautiful and functional.
              </p>
              <p className="text-lg text-blue-200 leading-relaxed">
                My journey in tech started with curiosity and has evolved into a career dedicated to
                crafting exceptional digital experiences. I believe in the power of clean code,
                intuitive design, and meaningful user interactions.
              </p>

              {/* Competitive Programming Achievements */}
              <div className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Competitive Programming</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-600/20 rounded-full flex items-center justify-center">
                        <span className="text-orange-400 text-sm font-bold">LC</span>
                      </div>
                      <div>
                        <p className="text-blue-300 font-medium">LeetCode</p>
                        <a href="https://leetcode.com/u/SohanMetil15/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-400 text-sm transition-colors">
                          @SohanMetil15
                        </a>
                      </div>
                    </div>
                    <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full text-sm border border-orange-500/30">
                      500+ Problems Solved
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-yellow-600/20 rounded-full flex items-center justify-center">
                        <span className="text-yellow-400 text-sm font-bold">CC</span>
                      </div>
                      <div>
                        <p className="text-blue-300 font-medium">CodeChef</p>
                        <a href="https://www.codechef.com/users/smetil1515" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-400 text-sm transition-colors">
                          @smetil1515
                        </a>
                      </div>
                    </div>
                    <span className="bg-yellow-600/20 text-yellow-300 px-3 py-1 rounded-full text-sm border border-yellow-500/30">
                      5★ Rating
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/30">
                  React
                </span>
                <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/30">
                  Node.js
                </span>
                <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/30">
                  TypeScript
                </span>
                <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/30">
                  Tailwind CSS
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                {/* Profile placeholder - you can replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-6xl text-white font-bold">SM</span>
                </div>

                {/* Decorative circles */}
                <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-blue-400/30 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-purple-400/30 rounded-full animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
              </div>
            </div>
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

export default About