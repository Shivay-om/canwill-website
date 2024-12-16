import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-lg font-bold">
          <a href="#" className="text-white">
            <img src={logo} alt="" className="w-24 h-16"/>
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          className="focus:outline-none"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl" />
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-[250px] md:w-[350px] z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-600">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            className=" focus:outline-none"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faTimes} className="text-2xl" />
          </button>
        </div>
        <nav className="flex flex-col px-4 py-6">
          <a href="#" className="block py-2  hover:text-blue-400">
            Home
          </a>
          <a href="#" className="block py-2  hover:text-blue-400">
            About Us
          </a>
          <a href="#" className="block py-2  hover:text-blue-400">
            Portfolio
          </a>
          <a href="#" className="block py-2  hover:text-blue-400">
            Testimonials
          </a>
          <a href="#" className="block py-2  hover:text-blue-400">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
