import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header flex justify-between items-center p-4">
      {/* Logo */}
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
      >
        <p className="blue-gradient_text">SO</p>
      </NavLink>
      {/* Navigation Links */}
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about">
          {({ isActive }) => (
            <div className="group relative">
              <span
                className={`transition-colors duration-300 ${
                  isActive ? "text-blue-500" : "text-black group-hover:text-blue-500"
                }`}
              >
                About
              </span>
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </div>
          )}
        </NavLink>
        <NavLink to="/projects">
          {({ isActive }) => (
            <div className="group relative">
              <span
                className={`transition-colors duration-300 ${
                  isActive ? "text-blue-500" : "text-black group-hover:text-blue-500"
                }`}
              >
                Projects
              </span>
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </div>
          )}
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
