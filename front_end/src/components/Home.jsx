import { Link } from 'react-router-dom'
import sohanImage from '../assets/sohan.png'

function Home() {
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

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center pt-16 px-4">
        <div className="max-w-7xl mx-auto w-full">
          {/* Mobile: Image on top, Content below */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Section - Top on mobile, Right on desktop */}
            <div className="order-1 lg:order-2 relative animate-fade-in px-4 lg:px-0" style={{animationDelay: '0.6s'}}>
              <div className="relative w-full max-w-sm lg:max-w-xl mx-auto">
                <div className="relative w-full max-w-lg mx-auto overflow-hidden">
                  <img
                    src={sohanImage}
                    alt="Sohan Metil"
                    className="w-full h-auto max-h-[50rem] object-contain rounded-5xl shadow-4xl"
                  />
                </div>
              </div>
            </div>

            {/* Content Section - Bottom on mobile, Left on desktop */}
            <div className="order-2 lg:order-1 space-y-6 lg:space-y-8 text-center lg:text-left px-4 lg:px-0">
              <div className="animate-fade-in">
                <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-6">
                  <span className="text-blue-400">Hi, I'm </span>
                  <span className="text-white">Sohan Metil</span>
                </h1>
                <p className="text-xl sm:text-2xl lg:text-2xl text-blue-300 mb-4 lg:mb-6">
                  Full Stack Developer & UI/UX Designer
                </p>
                <p className="text-lg lg:text-lg text-blue-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  I create beautiful, functional, and user-centered digital experiences that bring ideas to life through code and design.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:gap-4 justify-center lg:justify-start animate-fade-in" style={{animationDelay: '0.2s'}}>
                <span className="bg-blue-600/20 text-blue-300 px-4 lg:px-4 py-2 rounded-full text-sm border border-blue-500/30">
                  React
                </span>
                <span className="bg-blue-600/20 text-blue-300 px-4 lg:px-4 py-2 rounded-full text-sm border border-blue-500/30">
                  Node.js
                </span>
                <span className="bg-blue-600/20 text-blue-300 px-4 lg:px-4 py-2 rounded-full text-sm border border-blue-500/30">
                  TypeScript
                </span>
                <span className="bg-blue-600/20 text-blue-300 px-4 lg:px-4 py-2 rounded-full text-sm border border-blue-500/30">
                  Tailwind CSS
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{animationDelay: '0.4s'}}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 lg:px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                  View My Work
                </button>
                <a
                  href="https://www.linkedin.com/in/sohan-metil-b56083289/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-400 hover:border-blue-300 text-blue-400 hover:text-blue-300 px-8 lg:px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Get In Touch
                </a>
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

export default Home