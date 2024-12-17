import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/logo.png'
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-8 py-3">
        {/* Logo */}
        <div className="text-lg font-bold">
          <a href="#" className="text-white">
            <img src={logo} alt="" className="w-32 h-20" />
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
      <div>
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 z-40"
            onClick={toggleMenu}
          />
        )}

        <div
          className={`fixed top-0 right-0 h-full bg-white w-[250px] md:w-[380px] z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300`}
        >
          <div className="flex justify-end items-center px-4 py-3  border-gray-600">
            {/* <h2 className="text-lg font-bold">Menu</h2> */}
            <button
              className=" focus:outline-none"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button>
          </div>
          <nav className="flex flex-col px-10 py-6 ">
            <a href="#" className="block py-2  hover:text-[#0093dd]">
              Home
            </a>
            <a href="#" className="block py-2  hover:text-[#0093dd]">
              About Us
            </a>
            <a href="#" className="block py-2  hover:text-[#0093dd]">
              Portfolio
            </a>
            <a href="#" className="block py-2  hover:text-[#0093dd]">
              Testimonials
            </a>
            <a href="#" className="block py-2  hover:text-[#0093dd]">
              Contact Us
            </a>
          </nav>
          <button className="border ml-8 px-8 p-2 flex justify-center items-center gap-2 bg-black text-white hover:bg-[#0093dd] rounded-md">Get a Quote
            <GoArrowUpRight size={20} className="font-bold " />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
