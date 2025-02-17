import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import hbl from "../images/hbllogo.png";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-purple-500/20"
          : ""
      }`}
    >
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img
              src={hbl}
              alt="HBL logo"
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
            <span
              className="text-xl md:text-2xl font-bold text-white hidden sm:block"
              style={{ fontFamily: "Tomorrow, sans-serif" }}
            >
              {"< HACK BEYOND LIMIT$ >"}
            </span>
          </div>

          {/* Navigation for Larger Screens (Only if screen width > 950px) */}
          {screenWidth > 950 && (
            <nav className="flex items-center gap-8">
              {["About", "Timeline", "Prizes", "Sponsors"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-purple-400 transition-colors text-lg"
                >
                  {item}
                </a>
              ))}
            </nav>
          )}

          {/* Hamburger Menu for Small Screens (Only if screen width ≤ 950px) */}
          {screenWidth <= 950 && (
            <button
              className="text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && screenWidth <= 950 && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-lg border-t border-purple-500/20"
            >
              <ul className="flex flex-col items-center py-4 space-y-4">
                {["About", "Timeline", "Prizes", "Sponsors"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-purple-400 transition-colors text-lg"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
