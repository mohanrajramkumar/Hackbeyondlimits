import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import Spline from "@splinetool/react-spline";

export const Hero = () => {
  const [launch, setLaunch] = useState(false);
  const [showMascot, setShowMascot] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const handleRegister = () => {
    setLaunch(true);
    setTimeout(() => {
      window.location.href =
        "https://unstop.com/hackathons/hackbeyondlimits-rathinam-college-of-arts-and-sciences-1353196";
    }, 2500);
  };

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const mascotWidth = 400; // Approx mascot width
        const textWidth = 600; // Approx text width
        const padding = 64; // Total padding left + right

        if (containerWidth < textWidth + mascotWidth + padding) {
          setShowMascot(false);
        } else {
          setShowMascot(true);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full flex flex-col items-center justify-center px-4 md:px-20 overflow-hidden"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          particles: {
            number: { value: 100, density: { enable: true, area: 800 } },
            color: { value: ["#9333EA", "#3B82F6", "#ff007f"] },
            shape: { type: "circle" },
            opacity: { value: 0.7 },
            size: { value: { min: 1, max: 5 } },
            move: { enable: true, speed: 1, direction: "none" },
          },
          detectRetina: true,
        }}
      />

      {launch && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-50">
          <div className="text-white text-lg font-bold">Redirecting...</div>
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: -500, opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute bottom-10"
          >
            <Rocket size={80} className="text-white" />
          </motion.div>
        </div>
      )}

      {/* The flex container now moves 100px to the right only on extra-large screens (xl and above) */}
      <div
        className="relative z-20 w-full flex flex-col md:flex-row items-center justify-center text-center px-4 md:px-16 xl:translate-x-[100px]" // translate-x is applied for xl screens only
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex flex-col items-center text-center"
        >
          {/* Horizontal Heading for Medium Screens (iPads, tablets, etc.) and Above */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 hidden sm:flex justify-center space-x-4">
            <span>{`<`}</span>
            <span>HACK</span>
            <span>BEYOND</span>
            <span>LIMIT$</span>
            <span>{`>`}</span>
          </h1>

          {/* Vertical Heading for Small Screens (Mobile Only) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 sm:hidden flex flex-col items-center justify-center">
            <span className="flex items-center justify-center">
              {"<"} <span className="ml-2">HACK</span>
            </span>
            <span>BEYOND</span>
            <span className="flex items-center justify-center">
              <span>LIMIT$</span> <span>{">"}</span>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mt-4 whitespace-nowrap">
            Go beyond. Hack beyond!
          </p>
          <motion.button
            className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-bold text-white mt-6 shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-transform duration-300"
            onClick={handleRegister}
            animate={{ scale: 1.05 }}
          >
            <span className="flex items-center gap-2 text-sm md:text-base">
              Register Now
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                <Rocket className="w-4 h-4 md:w-5 md:h-5" />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>

        {showMascot && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="hidden lg:flex md:w-[400px] md:h-[500px] justify-end items-center mt-8 md:ml-40 relative right-[-50px]" // The mascot remains shifted 50px to the right
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Spline scene="https://prod.spline.design/rIu9arkSBJUeSYcZ/scene.splinecode" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
