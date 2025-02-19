import { assets } from '@/assets/assets';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

const menuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { duration: 0.4, ease: "easeInOut" } // 🔥 Smooth animation
  },
  exit: { 
    x: "100%", 
    opacity: 0, 
    transition: { duration: 0.3, ease: "easeInOut" } // 🔥 Smooth exit
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav 
      className='navbar' 
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} 
    >
      <a href="/" className="block md:hidden mr-auto">
        <Image 
          src={assets.logo}
          alt='logo'
          className='w-28 cursor-pointer mr-14'
        />
      </a>

      {/* Desktop Menu */}
      <ul className='nav-links md:flex'>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      {/* Toggle Button */}
      <button className='block md:hidden relative z-50' onClick={toggleMenu}>
        <Image 
          src={isMenuOpen ? assets.close_black : assets.menu_black}  
          alt={isMenuOpen ? 'close' : 'menu'}
          className='w-6'
        />
      </button>

      {/* Animated Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul 
            className="mobile-menu" 
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#work" onClick={toggleMenu}>Work</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
