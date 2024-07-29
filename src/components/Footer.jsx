import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="text-center mb-6 lg:text-left lg:mb-0">
          <h2 className="text-2xl font-bold">WhatsApp Marketing Tool</h2>
          <p className="mt-2">
            Boost your business with our powerful WhatsApp marketing software.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <ul className="flex flex-col items-center space-y-2 lg:flex-row lg:space-y-0 lg:space-x-4 mb-6 lg:mb-0">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:underline">
                Features
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="hover:underline">
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/tutorials" className="hover:underline">
                Tutorials
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>
          &copy; {new Date().getFullYear()} WhatsApp Marketing Tool. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
