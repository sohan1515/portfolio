import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Loader from './Loader'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  const [currentPhase, setCurrentPhase] = useState('loading') // 'loading', 'welcome', 'portfolio'

  const handleLoaderComplete = () => {
    setCurrentPhase('welcome')
    // Show welcome for 3 seconds, then show portfolio
    setTimeout(() => {
      setCurrentPhase('portfolio')
    }, 3000)
  }

  if (currentPhase === 'loading') {
    return <Loader onComplete={handleLoaderComplete} />
  }

  if (currentPhase === 'welcome') {
    return (
      <div className="fixed inset-0 h-screen w-screen bg-black flex items-center justify-center z-50 relative overflow-hidden">
        {/* Animated Grid background */}
        <div className="absolute inset-0 opacity-30">
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
          {[...Array(20)].map((_, i) => (
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

        <div className="text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-pulse">
            <span className="text-blue-400">Welcome to </span>
            <span className="text-white">Sohan Metil </span>
            <span className="text-blue-400">Portfolio</span>
            <span className="animate-blink text-blue-400">|</span>
          </h1>
          <p className="text-xl text-blue-200 animate-pulse">
            Preparing your experience...
          </p>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
