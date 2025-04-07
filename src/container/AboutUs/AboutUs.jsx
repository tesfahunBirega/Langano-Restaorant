import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="about-section" id="about">
    <div className="about-overlay">
      <img src={images.G} alt="G_overlay" className="overlay-image" />
    </div>

    <div className="floating-accent left"></div>
    <div className="floating-accent right"></div>

    <div className="about-content">
      {/* About Us Section */}
      <div className="about-left">
        <div className="content-wrapper">
          <div className="section-header">
            <h2 className="subtitle">Discover</h2>
            <h1 className="title">About Us</h1>
            <div className="decorative-spoon">
              <img src={images.spoon} alt="about_spoon" />
            </div>
          </div>
          <div className="content-divider"></div>
          <p className="description">
            Welcome to Langano Ethiopian Restaurant, where every meal is an
            invitation to experience the flavors, aromas, and hospitality of
            Ethiopia. Our mission is to bring you authentic dishes, made with
            traditional spices and served with the warmth of our heritage.
          </p>
          <button type="button" className="about-button">
            <span>Explore Our Story</span>
            <div className="button-underline"></div>
          </button>
        </div>
      </div>

      {/* Center Knife Image */}
      <div className="about-center">
        <div className="knife-container">
          <div className="knife-background"></div>
          <img src={images.knife} alt="about_knife" className="knife-image" />
        </div>
      </div>

      {/* History Section */}
      <div className="about-right">
        <div className="content-wrapper">
          <div className="section-header">
            <h2 className="subtitle">Our Legacy</h2>
            <h1 className="title">Our History</h1>
            <div className="decorative-spoon">
              <img src={images.spoon} alt="about_spoon" />
            </div>
          </div>
          <div className="content-divider"></div>
          <p className="description">
            Langano Ethiopian Restaurant began as a vision to share Ethiopia's
            rich culinary history. Our recipes have been passed down through
            generations, and each dish reflects our journey, from our roots in
            Ethiopia to our warm presence here.
          </p>
          <button type="button" className="about-button">
            <span>Read More</span>
            <div className="button-underline"></div>
          </button>
        </div>
      </div>
    </div>

    {/* Decorative Elements */}
    <div className="decorative-pattern left"></div>
    <div className="decorative-pattern right"></div>

    <div className="corner-accent top-left"></div>
    <div className="corner-accent top-right"></div>
    <div className="corner-accent bottom-left"></div>
    <div className="corner-accent bottom-right"></div>
  </div>
);

export default AboutUs;
