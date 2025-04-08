import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaUser, FaUtensils } from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

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

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setToggleMenu(false);
  };

  const handleBookTable = (e) => {
    e.preventDefault();
    // Add your booking functionality here
    console.log("Booking table...");
    // You can add a modal or redirect to a booking page
  };

  return (
    <nav className={`app__navbar ${isScrolled ? "glass-effect" : ""}`}>
      <div className="app__navbar-logo">
        <div className="logo-container">
          <FaUtensils className="logo-icon" />
          <h1 className="logo-text">LANGANO</h1>
        </div>
      </div>

      <ul className="app__navbar-links">
        <li className={activeLink === "home" ? "active" : ""}>
          <a href="#home" onClick={() => handleLinkClick("home")}>
            <span className="nav-text">Home</span>
            <div className="nav-accent"></div>
          </a>
        </li>
        <li className={activeLink === "about" ? "active" : ""}>
          <a href="#about" onClick={() => handleLinkClick("about")}>
            <span className="nav-text">About</span>
            <div className="nav-accent"></div>
          </a>
        </li>
        <li className={activeLink === "menu" ? "active" : ""}>
          <a href="#menu" onClick={() => handleLinkClick("menu")}>
            <span className="nav-text">Menu</span>
            <div className="nav-accent"></div>
          </a>
        </li>
        <li className={activeLink === "awards" ? "active" : ""}>
          <a href="#awards" onClick={() => handleLinkClick("awards")}>
            <span className="nav-text">Awards</span>
            <div className="nav-accent"></div>
          </a>
        </li>
        <li className={activeLink === "contact" ? "active" : ""}>
          <a href="#contact" onClick={() => handleLinkClick("contact")}>
            <span className="nav-text">Contact</span>
            <div className="nav-accent"></div>
          </a>
        </li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="login-link">
          <FaUser className="login-icon" />
          <span>Login</span>
          <div className="link-accent"></div>
        </a>
        <div className="line" />
        <a href="#book" className="nav-button" onClick={handleBookTable}>
          <BsCalendarCheck className="button-icon" />
          <span>Book Table</span>
          <div className="button-accent"></div>
        </a>
      </div>

      <div className="mobile-toggle">
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="toggle-button"
        >
          {toggleMenu ? (
            <MdOutlineRestaurantMenu className="toggle-icon" />
          ) : (
            <GiHamburgerMenu className="toggle-icon" />
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
            <div className="mobile-header">
              <div className="mobile-logo">
                <FaUtensils className="mobile-logo-icon" />
                <h2 className="mobile-logo-text">LANGANO</h2>
              </div>
              <button
                onClick={() => setToggleMenu(false)}
                className="mobile-close"
              >
                <MdOutlineRestaurantMenu className="close-icon" />
              </button>
            </div>
            <div className="mobile-nav-links">
              <a
                href="#home"
                className={`mobile-nav-link ${
                  activeLink === "home" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </a>
              <a
                href="#about"
                className={`mobile-nav-link ${
                  activeLink === "about" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("about")}
              >
                About
              </a>
              <a
                href="#menu"
                className={`mobile-nav-link ${
                  activeLink === "menu" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("menu")}
              >
                Menu
              </a>
              <a
                href="#awards"
                className={`mobile-nav-link ${
                  activeLink === "awards" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("awards")}
              >
                Awards
              </a>
              <a
                href="#contact"
                className={`mobile-nav-link ${
                  activeLink === "contact" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("contact")}
              >
                Contact
              </a>
              <div className="mobile-auth">
                <a href="#login" className="mobile-login">
                  <FaUser className="mobile-icon" />
                  <span>Login</span>
                </a>
                <a
                  href="#book"
                  className="mobile-book"
                  onClick={handleBookTable}
                >
                  <BsCalendarCheck className="mobile-icon" />
                  <span>Book Table</span>
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
