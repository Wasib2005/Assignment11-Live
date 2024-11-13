import { DarkThemeToggle } from "flowbite-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Menu and close icons

const NavBar = () => {
  const [isUserOwner, setIsUserOwner] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `w-full md:w-[130px] p-1 md:p-3 md:rounded-lg ${
      isActive
        ? "border-2 border-green-500 dark:bg-[#1f2937]"
        : "hover:bg-green-500 transition delay-50 duration-700 hover:scale-105 "
    }`;

  const navLinks = (
    <>
      <li className="p-4">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>
      <li className="p-4">
        <NavLink to="/foods" className={navLinkClass}>
          Foods
        </NavLink>
      </li>
      {!isUserOwner && (
        <li className="p-4">
          <NavLink to="/card" className={navLinkClass}>
            Card
          </NavLink>
        </li>
      )}
      <li className="p-4">
        <NavLink to="/foods-gallery" className={navLinkClass}>
          Foods Gallery
        </NavLink>
      </li>
      {isUserOwner && (
        <>
          <li className="p-4">
            <NavLink to="/foods-list" className={navLinkClass}>
              Foods List
            </NavLink>
          </li>
          <li className="p-4">
            <NavLink to="/upload-foods" className={navLinkClass}>
              Upload Foods
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <nav className="header sticky top-0 z-[999] bg-white dark:bg-slate-900 shadow-md flex items-center justify-between px-8 py-2 ">
        {/* Logo */}
        <h1 className="w-3/12 flex items-center gap-2 text-2xl md:text-3xl font-semibold md:font-bold">
          <Link to="/">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 122.88"
              className="w-14"
            >
              <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0ZM52.55,58.42c2.92-2,4.39-4.61,4.14-10.58V32.49c0-2.14-3.92-2.4-4.11,0l-.15,12.45a1.75,1.75,0,1,1-3.5,0l.15-12.88c0-2.3-3.77-2.53-3.81,0,0,3.58-.15,9.31-.15,12.88a1.52,1.52,0,1,1-3,0l.15-12.79A2.09,2.09,0,0,0,39,30.61c-1.38.88-1.1,2.65-1.16,4.15l-.48,14.69c.07,4.27,1.19,7.74,4.54,9.22a8.37,8.37,0,0,0,2,.52L42.77,89.25a3.76,3.76,0,0,0,3.71,3.86h.46a4.24,4.24,0,0,0,4.17-4.34l-1-29.59a6.61,6.61,0,0,0,2.45-.76Zm18,29.75-.05-26.41c-11.29-6.52-7.69-31.64,3.6-31.5,13.72.16,15.35,28.31,3.55,31.4l.87,26.64c.17,6.13-8,6.7-8-.13ZM99.29,23.59A53.52,53.52,0,1,0,115,61.44,53.36,53.36,0,0,0,99.29,23.59Z" />
            </svg>
          </Link>
          <span>Foody</span>
        </h1>

        {/* Navigation Links - Desktop only */}
        <div className="hidden lg:flex lg:w-auto nav font-semibold text-lg">
          <ul className="flex items-center">{navLinks}</ul>
        </div>

        {/* Buttons and Menu Toggle */}
        <div className="w-3/12 flex justify-end items-center gap-4">
          <DarkThemeToggle />

          {/* Sign Up Button for Small Screens (Dropdown) */}
          <div className="hidden md:inline">
            <Link onClick={() => setIsUserOwner(!isUserOwner)}>
              <button className="w-[100px] rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-blue-600 text-blue-600 text-white">
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-blue-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease" />
                <span className="relative text-blue-600 transition duration-300 group-hover:text-white ease">
                  Sing Up
                </span>
              </button>
            </Link>
          </div>

          {/* Toggle Menu Icon */}
          <button
            className="text-3xl lg:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Dropdown Menu - Mobile and Medium Devices */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg transition-transform duration-300 ease-in-out transform origin-top z-10 lg:hidden">
            <ul className="flex flex-col items-center p-4 space-y-2">
              {navLinks}
              {/* Add Sign Up Button inside the dropdown */}
              <li className="md:hidden">
                <Link onClick={() => setIsUserOwner(!isUserOwner)}>
                  <button className=" rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-blue-600 text-blue-600 text-white">
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-blue-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease" />
                    <span className="relative text-blue-600 transition duration-300 group-hover:text-white ease">
                      Sing Up
                    </span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
