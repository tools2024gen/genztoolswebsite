import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleWhatsAppClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/9136614978`
      : `https://web.whatsapp.com/send?phone=9136614978`;
    window.open(url, "_blank");
  };

  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between w-full md:w-auto">
          <Link
            to="/"
            className="text-2xl font-bold mb-4 md:mb-0 whitespace-nowrap"
          >
            WhatsApp Marketing Tool
          </Link>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`w-full md:flex md:space-x-4 ${
            isOpen ? "block" : "hidden"
          } md:block md:justify-end`}
        >
          <li className="text-center md:text-left">
            <Link
              to="/"
              className="block md:inline-block hover:underline p-2"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              to="/features"
              className="block md:inline-block hover:underline p-2"
              onClick={closeMenu}
            >
              Features
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              to="/how-it-works"
              className="block md:inline-block hover:underline p-2"
              onClick={closeMenu}
            >
              How It Works
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              to="/tutorials"
              className="block md:inline-block hover:underline p-2"
              onClick={closeMenu}
            >
              Tutorials
            </Link>
          </li>
          <li className="text-center md:text-left">
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center md:inline-block hover:underline p-2"
            >
               Contact Us 
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
