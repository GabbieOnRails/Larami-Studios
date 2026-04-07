import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/#rooms" },
    { name: "About", path: "/about" },
    { name: "Policy", path: "/booking-policy" },
    { name: "Gallery", path: "/#gallery" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-light/80 backdrop-blur-md border-b border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex flex-col items-start">
            <span className="text-2xl font-serif font-semibold tracking-widest text-brand-dark">LARAMI</span>
            <span className="text-[10px] tracking-[0.3em] font-sans text-brand-primary uppercase -mt-1">Content Studio</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-brand-dark/70 hover:text-brand-primary transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/#rooms"
              className="bg-brand-dark text-white px-6 py-2 text-sm font-medium hover:bg-brand-primary transition-all duration-300 rounded-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-light border-b border-brand-primary/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-brand-dark hover:text-brand-primary"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/#rooms"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-brand-dark text-white py-3 text-lg font-medium rounded-sm"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
