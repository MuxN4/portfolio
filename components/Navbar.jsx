import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
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

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${isMenuOpen ? 'visible' : 'hidden'}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#work" onClick={toggleMenu}>Work</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
