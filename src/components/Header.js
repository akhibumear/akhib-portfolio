import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const timelineSection = document.getElementById('timeline-section');
      if (timelineSection) {
        const rect = timelineSection.getBoundingClientRect();
        setIsScrolled(rect.top <= 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Navigation Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isScrolled ? 0 : -100, 
          opacity: isScrolled ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-lg border-b border-white/10 dark:border-purple-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Name */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-xl font-heading font-bold text-gray-900 dark:text-white">
                  Akhib Umear
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Full Stack Developer & AI/ML Engineer
                </p>
              </div>
            </motion.div>

            {/* Navigation & Actions */}
            <div className="flex items-center space-x-4">
              {/* Contact Link */}
              <div className="hidden md:flex items-center space-x-3">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:akhibumearshaik@gmail.com"
                  className="p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <FaEnvelope size={20} />
                </motion.a>
              </div>

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-3 rounded-full bg-gray-200/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-200 hover:bg-gray-300/80 dark:hover:bg-gray-600/80 transition-colors backdrop-blur-sm"
                aria-label="Toggle theme"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDark ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
                </motion.div>
              </motion.button>

              {/* Mobile menu button - for future enhancement */}
              <div className="md:hidden">
                <button className="p-2 text-gray-600 dark:text-gray-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section (Non-sticky) */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass backdrop-blur-lg border-b border-white/10 dark:border-purple-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Name */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-xl font-heading font-bold text-gray-900 dark:text-white">
                  Akhib Umear
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Full Stack Developer & AI/ML Engineer
                </p>
              </div>
            </motion.div>

            {/* Navigation & Actions */}
            <div className="flex items-center space-x-4">
              {/* Contact Link */}
              <div className="hidden md:flex items-center space-x-3">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:akhibumearshaik@gmail.com"
                  className="p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <FaEnvelope size={20} />
                </motion.a>
              </div>

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-3 rounded-full bg-gray-200/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-200 hover:bg-gray-300/80 dark:hover:bg-gray-600/80 transition-colors backdrop-blur-sm"
                aria-label="Toggle theme"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDark ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
                </motion.div>
              </motion.button>

              {/* Mobile menu button - for future enhancement */}
              <div className="md:hidden">
                <button className="p-2 text-gray-600 dark:text-gray-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-8">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-4"
            >
              My Journey in
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}Technology
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            >
              From analytical foundations to cutting-edge AI/ML solutions and full-stack development. 
              Explore my career timeline and the projects that shaped my expertise.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {['React.js', 'AI/ML', 'Flask', 'Fintech', 'Full-Stack'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/20 dark:bg-purple-800/30 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-white/30 dark:border-purple-500/30"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header; 