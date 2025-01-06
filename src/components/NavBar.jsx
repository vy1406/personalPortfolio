
import React, { useRef, useState } from 'react';
import useClickOutside from '../hooks/useClickOutside';

const routes = [
  {
    name: 'Experience',
    link: '#experience',
  },
  {
    name: 'Certificates',
    link: '#certificates',
  },
  {
    name: 'Skills',
    link: '#skills',
  },
  {
    name: 'Education',
    link: '#education',

  },
  {
    name: 'Random',
    link: '#random',
  },
]

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
            {routes.map((route, index) => (
              <a
                key={index}
                href={route.link}
                className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
              >
                {route.name}
              </a>
            ))}

          </div>
          <div>
            <button
              className="py-2 px-2 text-sm font-medium text-center text-white rounded-lg bg-indigo-800 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300"
              onClick={() => handleCloseMenu()}
            >
              CV
            </button>

          </div>
        </div>
        <div className="md:hidden flex w-full items-center justify-between">
          <div
            className="cursor-pointer"
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
          <button
            className="py-2 px-2 text-sm font-medium text-center text-white rounded-lg bg-indigo-800 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300"
            onClick={() => handleCloseMenu()}
          >
            CV
          </button>

        </div>


      </div>

      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          id="mobilemenu"
          className="bg-white border-gray-200 dark:bg-gray-900 fixed inset-0 z-70 p-4 md:hidden "
        >
          <div className="flex flex-col gap-4">
            <ul className="space-y-4">
              {routes.map((route, index) => (
                <li key={index}>
                  <a
                    href={route.link}
                    className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-500"
                    onClick={() => handleCloseMenu()}
                  >
                    {route.name}
                  </a>
                </li>
              ))}
            
            </ul>
          </div>
        </div>
      )}

    </div>
  );
};

export default NavBar;
