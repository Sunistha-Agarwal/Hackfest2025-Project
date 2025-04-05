import React, { useState, useEffect } from 'react';
import { NavLink,Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
      const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loginStatus);
    }, []);

    const handleSignIn = () => {
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
    };
    
    const handleSignOut = () => {
      localStorage.setItem('isLoggedIn', 'false');
      setIsLoggedIn(false);
    };

  return (
    <nav className="flex justify-between items-center p-5 bg-[#05111d]/95 sticky top-0 z-10 shadow-lg backdrop-blur-md flex-col md:flex-row gap-5 md:gap-0">
      <div className="bg-gradient-to-r from-[#EE964B] to-[#F95738] w-12 h-12 rounded-full flex justify-center items-center font-bold text-lg shadow-lg shadow-[coral]/50">
        HC
      </div>
      
      <ul className="hidden md:flex list-none">
        <li className="mx-5">
          <NavLink to="/" className="text-white no-underline font-medium transition-all duration-300 py-2.5 relative hover:text-[coral] hover:shadow-text-md">
            Home
          </NavLink>
        </li>
        <li className="mx-5">
          <NavLink to="/leaderboard" className="text-white no-underline font-medium transition-all duration-300 py-2.5 relative hover:text-[coral] hover:shadow-text-md">
            Leaderboard
          </NavLink>
        </li>
      </ul>
      
      {!isLoggedIn ? (
      <NavLink to="/signin">
      <button 
      onClick={handleSignIn}
        className="bg-gradient-to-br from-[#EE964B] to-[#F95738] text-white border-none py-3 px-7 rounded-md font-bold cursor-pointer transition-all duration-300 text-base tracking-wider shadow-md shadow-[#F95738]/30 no-underline hover:translate-y-[-3px] hover:scale-105 hover:shadow-lg hover:shadow-[#F95738]/500"
      >
        Sign In
      </button>
      </NavLink>
      ) : (<div><NavLink to="/Profile"> <button 
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-md mx-2"
      >
       Profile
      </button>
      </NavLink>
      <button 
      onClick={handleSignOut}
      className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-md"
    >
     Sign Out
    </button>
    </div>
      )}
    </nav>
  );
};

export default Navbar;