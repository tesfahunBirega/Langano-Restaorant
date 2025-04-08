import React from "react";
import { motion } from "framer-motion";
import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import {
  FaUtensils,
  FaGlassCheers,
  FaLeaf,
  FaPepperHot,
  FaStar,
  FaSpinner,
} from "react-icons/fa";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="menu-section" id="menu">
    <div className="menu-overlay"></div>

    {/* Decorative Elements */}
    <div className="floating-spice one">
      <FaLeaf className="spice-icon" />
    </div>
    <div className="floating-spice two">
      <FaPepperHot className="spice-icon" />
    </div>
    <div className="floating-spice three">
      <FaUtensils className="spice-icon" />
    </div>

    {/* Floating Particles */}
    <div className="floating-particles">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            "--delay": `${Math.random() * 5}s`,
            "--size": `${Math.random() * 6 + 2}px`,
            "--left": `${Math.random() * 100}%`,
            "--top": `${Math.random() * 100}%`,
          }}
        ></div>
      ))}
    </div>

    <div className="menu-header">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="menu-title">
        Our <span className="highlight">Special</span> Menu
      </h1>
      <div className="title-underline"></div>
    </div>

    <div className="menu-content">
      {/* Meals Section */}
      <div className="menu-column meals">
        <div className="column-header">
          <div className="header-icon">
            <FaUtensils className="icon" />
          </div>
          <h2 className="column-title">
            Traditional <span className="highlight">Meals</span>
          </h2>
          <div className="column-accent"></div>
        </div>
        <div className="menu-items">
          {data.food.map((food, index) => (
            <div className="menu-item-wrapper" key={food.title + index}>
              <MenuItem
                title={food.title}
                price={food.price}
                tags={food.tags}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Menu Images */}
      <div className="menu-images">
        <div className="image-container">
          <div className="image-frame">
            <img
              src={images.menu2}
              alt="Signature Dish"
              className="menu-image"
              loading="lazy"
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <span className="overlay-text">Signature Dish</span>
              </div>
            </div>
            <div className="image-glow"></div>
          </div>
        </div>
        <div className="image-container">
          <div className="image-frame">
            <img
              src={images.menu3}
              alt="Chef's Special"
              className="menu-image"
              loading="lazy"
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <span className="overlay-text">Chef's Special</span>
              </div>
            </div>
            <div className="image-glow"></div>
          </div>
        </div>
        <div className="image-container">
          <div className="image-frame">
            <img
              src={images.menu4}
              alt="Traditional Favorite"
              className="menu-image"
              loading="lazy"
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <span className="overlay-text">Traditional Favorite</span>
              </div>
            </div>
            <div className="image-glow"></div>
          </div>
        </div>
      </div>

      {/* Drinks Section */}
      <div className="menu-column drinks">
        <div className="column-header">
          <div className="header-icon">
            <FaGlassCheers className="icon" />
          </div>
          <h2 className="column-title">Beverages</h2>
          <div className="column-accent"></div>
        </div>
        <div className="menu-items">
          {data.drinks.map((drink, index) => (
            <div className="menu-item-wrapper" key={drink.title + index}>
              <MenuItem
                title={drink.title}
                price={drink.price}
                tags={drink.tags}
              />
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="menu-footer">
      <button type="button" className="view-more-button">
        <span>View Complete Menu</span>
        <div className="button-glow"></div>
        <div className="button-accent"></div>
      </button>
    </div>

    {/* Corner Decorations */}
    <div className="corner-decoration top-left"></div>
    <div className="corner-decoration top-right"></div>
    <div className="corner-decoration bottom-left"></div>
    <div className="corner-decoration bottom-right"></div>

    {/* Decorative Patterns */}
    <div className="decorative-pattern left"></div>
    <div className="decorative-pattern right"></div>
  </div>
);

export default SpecialMenu;
