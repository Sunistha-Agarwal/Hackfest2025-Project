import React from 'react';
import { NavLink,Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-[#05111d]/95 sticky top-0 z-10 shadow-lg backdrop-blur-md flex-col md:flex-row gap-5 md:gap-0">
      <div className="bg-gradient-to-r from-[#EE964B] to-[#F95738] w-12 h-12 rounded-full flex justify-center items-center font-bold text-lg shadow-lg shadow-coral/50">
        HC
      </div>
      
      <ul className="hidden md:flex list-none">
        <li className="mx-5">
          <NavLink to="/" className="text-white no-underline font-medium transition-all duration-300 py-2.5 relative hover:text-coral hover:shadow-text-md">
            Home
          </NavLink>
        </li>
        <li className="mx-5">
          <NavLink to="/features" className="text-white no-underline font-medium transition-all duration-300 py-2.5 relative hover:text-coral hover:shadow-text-md">
            Features
          </NavLink>
        </li>
        <li className="mx-5">
          <NavLink to="/about" className="text-white no-underline font-medium transition-all duration-300 py-2.5 relative hover:text-coral hover:shadow-text-md">
            About
          </NavLink>
        </li>
        <li className="mx-5">
          <NavLink to="/contact" className="text-white no-underline font-medium transition-all duration-300 py-2.5 relative hover:text-coral hover:shadow-text-md">
            Contact
          </NavLink>
        </li>
      </ul>
      
      <button 
        className="bg-gradient-to-br from-[#EE964B] to-[#F95738] text-white border-none py-3 px-7 rounded-md font-bold cursor-pointer transition-all duration-300 text-base tracking-wider shadow-md shadow-[#F95738]/30 no-underline hover:translate-y-[-3px] hover:scale-105 hover:shadow-lg hover:shadow-[#F95738]/500"
      >
        Sign Up
      </button>
    </nav>
  );
};

export default Navbar;