import React, { useState, useEffect } from 'react';
import { LINKS } from '../constants/data';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className={`max-w-6xl mx-auto px-6`}>
        <div className={`flex justify-between items-center bg-transparent rounded-2xl p-4 md:p-6 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
          <div className='text-white font-bold text-xl tracking-tighter'>
            <a href='#Profile' className='hover:opacity-80 transition-opacity'>
              SV<span className='text-blue-400'>.</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className='hidden md:flex space-x-8'>
            {LINKS.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className='text-stone-300 hover:text-white text-sm font-medium transition-colors'
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='text-white focus:outline-none cursor-pointer'
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <RiCloseFill size={24} /> : <RiMenu3Fill size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='md:hidden mt-4 glass rounded-2xl p-6 flex flex-col space-y-4'
            >
              {LINKS.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className='text-stone-300 hover:text-white text-lg font-medium transition-colors'
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Header;
