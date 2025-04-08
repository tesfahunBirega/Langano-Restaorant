import React from "react";
import { FaUtensils, FaHeart } from "react-icons/fa";
import { BsClock, BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

import { images } from "../../constants";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container" id="home">
      <div className="header-overlay"></div>

      {/* Decorative Elements */}
      <div className="floating-spice one"></div>
      <div className="floating-spice two"></div>
      <div className="floating-spice three"></div>

      {/* Corner Decorations */}
      <div className="corner-accent top-left"></div>
      <div className="corner-accent top-right"></div>
      <div className="corner-accent bottom-left"></div>
      <div className="corner-accent bottom-right"></div>

      {/* Left circular image */}
      <div className="circular-image left">
        <div className="image-frame">
          <img src={images.welcome} alt="Ethiopian Dish" />
          <div className="image-overlay">
            <FaHeart className="overlay-icon" />
          </div>
        </div>
      </div>

      <div className="header-content">
        <div className="header-text">
          <div className="welcome-text">
            <span className="welcome-line">WELCOME TO</span>
            <div className="welcome-accent"></div>
          </div>
          <h1 className="header-title">LANGANO</h1>
          <div className="title-accent"></div>
          <p className="header-description">
            Experience the authentic flavors of Ethiopian cuisine in a warm and
            inviting atmosphere. Our master chefs prepare traditional dishes
            with the finest ingredients, bringing the rich culinary heritage of
            Ethiopia to your table. Every meal is a journey through centuries of
            tradition.
          </p>

          <div className="header-buttons">
            <a href="#menu" className="header-button menu-button">
              <FaUtensils className="button-icon" />
              <span>View Menu</span>
              <div className="button-accent"></div>
            </a>
            <a href="#contact" className="header-button reserve-button">
              <BsTelephone className="button-icon" />
              <span>Reserve a Table</span>
              <div className="button-accent"></div>
            </a>
          </div>

          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">
                <BsClock />
              </div>
              <div className="info-content">
                <h3>Opening Hours</h3>
                <p>Mon-Fri: 11:00 AM - 10:00 PM</p>
                <p>Sat-Sun: 10:00 AM - 11:00 PM</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <GoLocation />
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>9 W 53rd St, New York, NY 10019</p>
                <p>Near Central Park</p>
              </div>
            </div>
          </div>
        </div>

        <div className="header-image">
          <div className="main-image-container">
            <div className="image-frame">
              <img
                src={images.welcome}
                alt="Ethiopian Cuisine"
                className="main-image"
              />
              <div className="image-overlay">
                <div className="overlay-text">Authentic Ethiopian Cuisine</div>
              </div>
            </div>
            <div className="image-accent top"></div>
            <div className="image-accent bottom"></div>
          </div>
        </div>
      </div>

      {/* Right circular image */}
      <div className="circular-image right">
        <div className="image-frame">
          <img src={images.welcome} alt="Ethiopian Dish" />
          <div className="image-overlay">
            <FaHeart className="overlay-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
