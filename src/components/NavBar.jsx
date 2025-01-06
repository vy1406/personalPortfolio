
import React, { useRef, useState } from 'react';
import useClickOutside from '../hooks/useClickOutside';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useClickOutside(mobileMenuRef, handleCloseMenu);

  return (
    <div className="sticky top-0 z-50 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200" >
      <div className="flex w-full items-center px-4 py-2">
        <div className="hidden w-full flex-row justify-between text-xl font-extralight md:flex">
          <div className="flex gap-4">
            <a href="#about" className="hover:text-blue-500" onClick={() => handleCloseMenu()}>About</a>
            <a href="#pricing" className="hover:text-blue-500" onClick={() => handleCloseMenu()}>Pricing</a>
          </div>
          <div>
            <button
              className="store-login-btn text-xl font-extralight hover:text-blue-500"
              onClick={() => handleCloseMenu()}
            >
              Login
            </button>
          </div>
        </div>
        <div
          className="md:hidden cursor-pointer"
          onClick={handleToggleMenu}
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          id="mobilemenu"
          className="flex flex-col bg-slate-50 p-8 justify-center items-start gap-2 md:hidden"
        >
          <a href="#about" className="hover:text-blue-500" onClick={() => handleCloseMenu()}>About</a>
          <a href="#pricing" className="hover:text-blue-500" onClick={() => handleCloseMenu()}>Pricing</a>
          <button
            className="hover:text-blue-500"
            onClick={() => { }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
