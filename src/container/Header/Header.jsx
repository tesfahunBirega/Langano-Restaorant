import React from "react";
import { FaUtensils } from "react-icons/fa";
import { BsClock, BsTelephone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

import { images } from "../../constants";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container" id="home">
      <div className="header-overlay"></div>

      {/* Left circular image */}
      <div className="circular-image left">
        <img src={images.welcome} alt="Ethiopian Dish" />
      </div>

      <div className="header-content">
        <div className="header-text">
          <div className="welcome-text">
            <span className="welcome-line">WELCOME TO</span>
          </div>
          <h1 className="header-title">LANGANO</h1>
          <p className="header-description">
            Experience the authentic flavors of Ethiopian cuisine in a warm and
            inviting atmosphere. Our chefs prepare traditional dishes with the
            finest ingredients, bringing the rich culinary heritage of Ethiopia
            to your table.
          </p>

          <div className="header-buttons">
            <a href="#menu" className="header-button menu-button">
              <FaUtensils className="button-icon" />
              View Menu
            </a>
            <a href="#contact" className="header-button reserve-button">
              <BsTelephone className="button-icon" />
              Reserve a Table
            </a>
          </div>

          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">
                <BsClock />
              </div>
              <div className="info-content">
                <h3>Opening Hours</h3>
                <p>Mon-Sun: 11:00 AM - 10:00 PM</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <GoLocation />
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>123 Restaurant Street, City</p>
              </div>
            </div>
          </div>
        </div>

        <div className="header-image">
          <div className="main-image-container">
            <img
              src={images.welcome}
              alt="Ethiopian Cuisine"
              className="main-image"
            />
          </div>
        </div>
      </div>

      {/* Right circular image */}
      <div className="circular-image right">
        <img src={images.welcome} alt="Ethiopian Dish" />
      </div>
    </div>
  );
};

export default Header;
