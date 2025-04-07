import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import { FaQuoteLeft, FaHeart } from "react-icons/fa";
import "./Chef.css";

const Chef = () => (
  <div className="chef-section" id="chef">
    <div className="chef-overlay"></div>

    {/* Decorative Elements */}
    <div className="floating-spice one"></div>
    <div className="floating-spice two"></div>
    <div className="floating-spice three"></div>
    <div className="floating-spice four"></div>
    <div className="floating-spice five"></div>

    <div className="chef-content">
      <div className="chef-image">
        <div className="image-frame">
          <img src={images.chef} alt="chef_image" />
          <div className="image-accent"></div>
          <div className="image-overlay">
            <div className="overlay-content">
              <FaHeart className="heart-icon" />
              <span>Passion for Food</span>
            </div>
          </div>
        </div>
        <div className="image-decoration left"></div>
        <div className="image-decoration right"></div>
      </div>

      <div className="chef-info">
        <div className="section-header">
          <SubHeading title="Langano Restaurant" />
          <h1 className="chef-title">
            <span className="title-highlight">What we</span> believe in
          </h1>
          <div className="title-accent"></div>
        </div>

        <div className="chef-quote">
          <div className="quote-header">
            <div className="quote-icon-wrapper">
              <FaQuoteLeft className="quote-icon" />
            </div>
            <p className="quote-text">
              At LEMA and Beletu Ethiopian Flavor Restaurant, we are dedicated
              to providing an authentic and delightful dining experience.
            </p>
          </div>

          <p className="philosophy-text">
            Our passion for Ethiopian cuisine drives us to use the freshest
            ingredients and traditional recipes, ensuring every dish is a
            celebration of flavor and culture.
          </p>
        </div>

        <div className="chef-signature">
          <div className="signature-text">
            <h3 className="chef-name">
              <span className="name-highlight">Lema</span> and{" "}
              <span className="name-highlight">Beletu</span>
            </h3>
            <p className="chef-role">Chef & Founder</p>
          </div>
          <div className="signature-image">
            <img src={images.sign} alt="sign_image" />
            <div className="signature-accent"></div>
          </div>
        </div>
      </div>
    </div>

    {/* Corner Decorations */}
    <div className="corner-accent top-left"></div>
    <div className="corner-accent top-right"></div>
    <div className="corner-accent bottom-left"></div>
    <div className="corner-accent bottom-right"></div>

    {/* Additional Decorative Elements */}
    <div className="pattern-overlay"></div>
  </div>
);

export default Chef;
