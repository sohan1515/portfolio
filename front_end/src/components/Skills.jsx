import { Link } from 'react-router-dom'

function Skills() {
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

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 pt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            <span className="text-blue-400">My </span>
            <span className="text-white">Skills</span>
          </h2>

          <div className="space-y-8">
            {/* Web Development */}
            <div className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 hover:border-blue-400/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-400 text-xl">🌐</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Web Development</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-blue-300 font-semibold mb-2">Core Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">HTML</span>
                    <span className="text-sm bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">CSS</span>
                    <span className="text-sm bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">JavaScript</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-blue-300 font-semibold mb-2">Frameworks & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">React.js</span>
                    <span className="text-sm bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">Responsive Design</span>
                    <span className="text-sm bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">DOM Manipulation</span>
                    <span className="text-sm bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">UI/UX Design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Programming & Problem Solving */}
            <div className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 hover:border-blue-400/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-400 text-xl">🧠</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Programming & Problem Solving</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-green-300 font-semibold mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-green-600/20 text-green-300 px-3 py-1 rounded-full">C</span>
                    <span className="text-sm bg-green-600/20 text-green-300 px-3 py-1 rounded-full">C++</span>
                    <span className="text-sm bg-green-600/20 text-green-300 px-3 py-1 rounded-full">Python</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-green-300 font-semibold mb-2">Data Structures & Algorithms</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-green-600/20 text-green-300 px-3 py-1 rounded-full">Linked Lists</span>
                    <span className="text-sm bg-green-600/20 text-green-300 px-3 py-1 rounded-full">Queues & Stacks</span>
                    <span className="text-sm bg-green-600/20 text-green-300 px-3 py-1 rounded-full">Trees</span>
                    <span className="text-sm bg-green-600/20 text-green-300 px-3 py-1 rounded-full">Sorting Algorithms</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-green-300 font-semibold mb-2">Competitive Programming</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full">LeetCode</span>
                  <span className="text-sm bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full">CodeChef</span>
                  <span className="text-sm bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full">Logic Building</span>
                  <span className="text-sm bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full">Optimization</span>
                </div>
              </div>
            </div>

            {/* Artificial Intelligence */}
            <div className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 hover:border-blue-400/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-400 text-xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Artificial Intelligence (Agetic AI)</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full">AI Concepts</span>
                <span className="text-sm bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full">Model Training</span>
                <span className="text-sm bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full">Analytical Thinking</span>
                <span className="text-sm bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full">AI-driven Solutions</span>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 hover:border-blue-400/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-400 text-xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Tools & Technologies</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-blue-300 font-semibold mb-2">Development Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">Git & GitHub</span>
                    <span className="text-sm bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">VS Code</span>
                    <span className="text-sm bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">Netlify</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-blue-300 font-semibold mb-2">Design Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">Canva</span>
                    <span className="text-sm bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">Figma</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 hover:border-blue-400/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-yellow-400 text-xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Achievements & Profiles</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
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
                      443 C++ + 10 Python + 1 Java
                    </span>
                  </div>
                  <p className="text-blue-200 text-sm">Strong in dynamic programming, hash tables, arrays, strings</p>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
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
                      Rating ~1827
                    </span>
                  </div>
                  <p className="text-blue-200 text-sm">Global rank ~4723, active in contests</p>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center">
                      <span className="text-purple-400 text-sm font-bold">AI</span>
                    </div>
                    <div>
                      <p className="text-blue-300 font-medium">Agetic AI</p>
                      <p className="text-blue-200 text-sm">Completed multiple AI and Web-based learning challenges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 hover:border-blue-400/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-600/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-400 text-xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-pink-600/20 text-pink-300 px-3 py-1 rounded-full">Team Collaboration</span>
                <span className="text-sm bg-pink-600/20 text-pink-300 px-3 py-1 rounded-full">Leadership</span>
                <span className="text-sm bg-pink-600/20 text-pink-300 px-3 py-1 rounded-full">Problem-Solving</span>
                <span className="text-sm bg-pink-600/20 text-pink-300 px-3 py-1 rounded-full">Debugging</span>
                <span className="text-sm bg-pink-600/20 text-pink-300 px-3 py-1 rounded-full">Creativity</span>
                <span className="text-sm bg-pink-600/20 text-pink-300 px-3 py-1 rounded-full">Project Planning</span>
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

export default Skills