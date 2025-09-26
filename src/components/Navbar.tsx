import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">
              Code<span className="text-purple-400">X</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-purple-300 transition-colors">
              Home
            </Link>
            <a href="#features" className="text-white hover:text-purple-300 transition-colors">
              Features
            </a>
            <a href="#reviews" className="text-white hover:text-purple-300 transition-colors">
              Reviews
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-purple-300 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/30 backdrop-blur-md border-t border-white/10"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2 text-white hover:text-purple-300 transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <a
                  href="#features"
                  className="block px-3 py-2 text-white hover:text-purple-300 transition-colors"
                  onClick={toggleMenu}
                >
                  Features
                </a>
                <a
                  href="#reviews"
                  className="block px-3 py-2 text-white hover:text-purple-300 transition-colors"
                  onClick={toggleMenu}
                >
                  Reviews
                </a>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-left bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors"
                  onClick={toggleMenu}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}