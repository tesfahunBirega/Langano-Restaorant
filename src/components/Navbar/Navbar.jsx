import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`app__navbar ${isScrolled ? "glass-effect" : ""}`}>
      <div className="app__navbar-logo">
        <h1 className="font-serif text-4xl font-bold text-white tracking-wider hover:text-[#D4AF37] transition-colors duration-300">
          LANGANO
        </h1>
      </div>

      <ul className="app__navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#awards">Awards</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="flex items-center space-x-2">
          <FaUser className="text-lg" />
          <span>Login</span>
        </a>
        <div className="line" />
        <a href="#book" className="nav-button flex items-center space-x-2">
          <BsCalendarCheck className="text-lg" />
          <span>Book Table</span>
        </a>
      </div>

      <div className="lg:hidden">
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="text-white hover:text-[#D4AF37] transition-colors duration-300"
        >
          {toggleMenu ? (
            <MdOutlineRestaurantMenu className="h-8 w-8" />
          ) : (
            <GiHamburgerMenu className="h-8 w-8" />
          )}
        </button>
      </div>

      {toggleMenu && (
        <>
          <div
            className="mobile-backdrop"
            onClick={() => setToggleMenu(false)}
          />
          <div className="mobile-menu mobile-menu-enter">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setToggleMenu(false)}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300"
              >
                <MdOutlineRestaurantMenu className="h-8 w-8" />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              <a href="#home" className="mobile-nav-link">
                Home
              </a>
              <a href="#about" className="mobile-nav-link">
                About
              </a>
              <a href="#menu" className="mobile-nav-link">
                Menu
              </a>
              <a href="#awards" className="mobile-nav-link">
                Awards
              </a>
              <a href="#contact" className="mobile-nav-link">
                Contact
              </a>
              <div className="pt-6 border-t border-gray-700">
                <a href="#login" className="mobile-nav-link">
                  Login
                </a>
                <a href="#book" className="mobile-nav-link">
                  Book Table
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
