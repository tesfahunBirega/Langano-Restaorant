import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="menu-section" id="menu">
    <div className="menu-overlay"></div>

    {/* Decorative Elements */}
    <div className="floating-spice one"></div>
    <div className="floating-spice two"></div>
    <div className="floating-spice three"></div>

    <div className="menu-header">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="menu-title">Our Special Menu</h1>
      <div className="title-underline"></div>
    </div>

    <div className="menu-content">
      {/* Meals Section */}
      <div className="menu-column meals">
        <div className="column-header">
          <h2 className="column-title">Traditional Meals</h2>
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
            <img src={images.menu2} alt="menu__img" className="menu-image" />
            <div className="image-overlay"></div>
          </div>
        </div>
        <div className="image-container">
          <div className="image-frame">
            <img src={images.menu3} alt="menu__img_2" className="menu-image" />
            <div className="image-overlay"></div>
          </div>
        </div>
        <div className="image-container">
          <div className="image-frame">
            <img src={images.menu4} alt="menu__img_3" className="menu-image" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>

      {/* Drinks Section */}
      <div className="menu-column drinks">
        <div className="column-header">
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
      </button>
    </div>

    {/* Corner Decorations */}
    <div className="corner-decoration top-left"></div>
    <div className="corner-decoration top-right"></div>
    <div className="corner-decoration bottom-left"></div>
    <div className="corner-decoration bottom-right"></div>
  </div>
);

export default SpecialMenu;
