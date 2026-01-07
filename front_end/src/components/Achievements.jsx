import { Link } from 'react-router-dom'

function Achievements() {
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

      {/* Achievements Section */}
      <section id="achievements" className="relative py-20 px-4 pt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            <span className="text-blue-400">My </span>
            <span className="text-white">Achievements</span>
          </h2>

          <div className="space-y-8">
            {/* Competitive Programming Achievements */}
            <div className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-400 text-2xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Competitive Programming</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black/30 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center">
                        <span className="text-orange-400 text-lg font-bold">LC</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">LeetCode</h4>
                        <p className="text-blue-300">@SohanMetil15</p>
                      </div>
                    </div>
                    <span className="bg-orange-600/20 text-orange-300 px-4 py-2 rounded-full text-sm border border-orange-500/30">
                      443+ Problems Solved
                    </span>
                  </div>
                  <div className="space-y-2 text-blue-200">
                    <p>• Strong in Dynamic Programming, Hash Tables, Arrays, Strings</p>
                    <p>• Active problem solver with consistent performance</p>
                    <p>• Focus on algorithmic efficiency and optimization</p>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-600/20 rounded-full flex items-center justify-center">
                        <span className="text-yellow-400 text-lg font-bold">CC</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">CodeChef</h4>
                        <p className="text-blue-300">@smetil1515</p>
                      </div>
                    </div>
                    <span className="bg-yellow-600/20 text-yellow-300 px-4 py-2 rounded-full text-sm border border-yellow-500/30">
                      5★ Rating
                    </span>
                  </div>
                  <div className="space-y-2 text-blue-200">
                    <p>• Rating: ~1827</p>
                    <p>• Global Rank: ~4723</p>
                    <p>• Active participant in coding contests</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning & Development Achievements */}
            <div className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-400 text-2xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Learning & Development</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-black/30 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-400 text-2xl">🤖</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Agetic AI</h4>
                  <p className="text-purple-300 mb-2">AI & Web Development</p>
                  <p className="text-blue-200 text-sm">Completed multiple AI and Web-based learning challenges</p>
                </div>

                <div className="bg-black/30 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-400 text-2xl">💻</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Continuous Learning</h4>
                  <p className="text-blue-300 mb-2">Self-Taught Developer</p>
                  <p className="text-blue-200 text-sm">Dedicated to mastering modern technologies and best practices</p>
                </div>

                <div className="bg-black/30 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-400 text-2xl">🚀</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Project Development</h4>
                  <p className="text-green-300 mb-2">Full-Stack Projects</p>
                  <p className="text-blue-200 text-sm">Building real-world applications with modern tech stacks</p>
                </div>
              </div>
            </div>

            {/* Soft Skills & Leadership */}
            <div className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-600/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-400 text-2xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Soft Skills & Leadership</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <span className="text-2xl mb-2 block">🤝</span>
                  <h4 className="text-white font-semibold">Team Collaboration</h4>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <span className="text-2xl mb-2 block">🎯</span>
                  <h4 className="text-white font-semibold">Problem Solving</h4>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <span className="text-2xl mb-2 block">💡</span>
                  <h4 className="text-white font-semibold">Creativity</h4>
                </div>
                <div className="bg-black/30 rounded-lg p-4 text-center">
                  <span className="text-2xl mb-2 block">📋</span>
                  <h4 className="text-white font-semibold">Project Management</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-blue-200 mb-4">Want to know more about my journey?</p>
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 inline-block">
              Get In Touch
            </Link>
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

export default Achievements