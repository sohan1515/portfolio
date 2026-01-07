import { useEffect, useState, useRef } from 'react';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 75);

    return () => {
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  // Mouse interaction for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Show welcome text after 90% progress with perfect animation
  const showWelcome = progress >= 90;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black flex items-center justify-center z-50 relative overflow-hidden cursor-pointer"
      onClick={() => {
        // Speed up loading on click
        setProgress(prev => Math.min(100, prev + 10));
      }}
    >
      {/* Animated Grid background - Full screen */}
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

      {/* Floating particles - Full screen */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
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

      {/* Full screen loader container */}
      <div className="w-full h-full flex flex-col items-center justify-center text-center relative z-10">
        <div className="fixed inset-0 h-screen w-screen bg-black flex items-center justify-center z-50 relative overflow-hidden">
          <div className="relative w-[1000px] h-[1000px]">
            {/* Outer most circle - 500px diameter - Interactive */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`w-[500px] h-[500px] border-2 border-blue-500/10 rounded-full transition-all duration-300 ${isHovered ? 'scale-110 border-blue-400/20' : 'animate-spin'}`}
                style={{
                  animationDuration: isHovered ? '5s' : '10s',
                  transform: isHovered ? `scale(1.1) rotate(${mousePosition.x}deg)` : undefined
                }}
              >
                <div className="w-full h-full rounded-full border-2 border-transparent border-t-blue-300/50"></div>
              </div>
            </div>

            {/* Second circle - 400px diameter - Pulse effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`w-[400px] h-[400px] border-3 border-blue-400/15 rounded-full transition-all duration-500 ${isHovered ? 'animate-pulse scale-105' : 'animate-spin'}`}
                style={{
                  animationDuration: '8s',
                  animationDirection: isHovered ? 'normal' : 'reverse'
                }}
              >
                <div className="w-full h-full rounded-full border-3 border-transparent border-t-blue-400/70"></div>
              </div>
            </div>

            {/* Third circle - 320px diameter - Color shift */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`w-80 h-80 border-4 rounded-full transition-all duration-300 ${isHovered ? 'border-purple-500/30 scale-110' : 'border-blue-500/20 animate-spin'}`}
                style={{
                  animationDuration: isHovered ? '3s' : '6s',
                  transform: isHovered ? `scale(1.1) rotate(${mousePosition.y * 0.1}deg)` : undefined
                }}
              >
                <div className={`w-full h-full rounded-full border-4 border-transparent transition-all duration-300 ${isHovered ? 'border-t-purple-500' : 'border-t-blue-500'}`}></div>
              </div>
            </div>

            {/* Fourth circle - 240px diameter - Speed change */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`w-60 h-60 border-2 rounded-full transition-all duration-300 ${isHovered ? 'border-cyan-400/40 scale-105 animate-ping' : 'border-blue-300/30 animate-spin'}`}
                style={{
                  animationDuration: isHovered ? '1s' : '4s',
                  animationDirection: 'reverse'
                }}
              >
                <div className="w-full h-full rounded-full border-2 border-transparent border-t-blue-300"></div>
              </div>
            </div>

            {/* Fifth circle - 160px diameter - Bounce effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`w-40 h-40 border-3 rounded-full transition-all duration-300 ${isHovered ? 'border-green-400/50 scale-110 animate-bounce' : 'border-blue-400/40 animate-spin'}`}
                style={{
                  animationDuration: isHovered ? '2s' : '3s'
                }}
              >
                <div className="w-full h-full rounded-full border-3 border-transparent border-t-blue-400"></div>
              </div>
            </div>


            {/* Center content - Interactive */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className={`text-5xl font-bold mb-2 transition-all duration-300 ${isHovered ? 'text-cyan-400 scale-110 animate-bounce' : 'text-blue-400 animate-pulse'}`}
              >
                {progress}%
              </span>
              <span
                className={`text-lg font-medium transition-all duration-300 ${isHovered ? 'text-cyan-300 animate-pulse' : 'text-blue-300 animate-pulse'}`}
              >
                {isHovered ? 'Click to speed up!' : 'Loading...'}
              </span>
            </div>
          </div>
        </div>

        {/* Welcome text appears after 90% progress with perfect animation */}
        {showWelcome && (
          <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-pulse">
                <span className="text-blue-400 animate-pulse">Welcome to </span>
                <span className="text-white animate-pulse" style={{animationDelay: '0.2s'}}>Sohan Metil </span>
                <span className="text-blue-400 animate-pulse" style={{animationDelay: '0.4s'}}>Portfolio</span>
                <span className="animate-blink text-blue-400 ml-2">|</span>
              </h1>
              <p className="text-2xl text-blue-200 animate-pulse" style={{animationDelay: '0.6s'}}>
                Preparing your experience...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loader;
