import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { FaLeaf, FaUtensils, FaHistory } from "react-icons/fa";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="about-section" id="about">
    <div className="about-overlay">
      <img src={images.G} alt="G_overlay" className="overlay-image" />
    </div>

    <div className="floating-accent left"></div>
    <div className="floating-accent right"></div>

    <div className="floating-spice spice1">
      <FaLeaf className="spice-icon" />
    </div>
    <div className="floating-spice spice2">
      <FaUtensils className="spice-icon" />
    </div>
    <div className="floating-spice spice3">
      <FaHistory className="spice-icon" />
    </div>

    <div className="about-content">
      {/* About Us Section */}
      <div className="about-left">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="header-accent"></div>
            <h2 className="subtitle">Discover</h2>
            <h1 className="title">
              About <span className="highlight">Us</span>
            </h1>
            <div className="decorative-spoon">
              <img src={images.spoon} alt="about_spoon" />
            </div>
          </div>
          <div className="content-divider"></div>
          <p className="description">
            Welcome to{" "}
            <span className="highlight">Langano Ethiopian Restaurant</span>,
            where every meal is an invitation to experience the flavors, aromas,
            and hospitality of Ethiopia. Our mission is to bring you authentic
            dishes, made with traditional spices and served with the warmth of
            our heritage.
          </p>
          <button type="button" className="about-button">
            <span>Explore Our Story</span>
            <div className="button-underline"></div>
            <div className="button-accent"></div>
          </button>
        </div>
      </div>

      {/* Center Knife Image */}
      <div className="about-center">
        <div className="knife-container">
          <div className="knife-background"></div>
          <div className="knife-glow"></div>
          <img src={images.knife} alt="about_knife" className="knife-image" />
          <div className="knife-reflection"></div>
        </div>
      </div>

      {/* History Section */}
      <div className="about-right">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="header-accent"></div>
            <h2 className="subtitle">Our Legacy</h2>
            <h1 className="title">
              Our <span className="highlight">History</span>
            </h1>
            <div className="decorative-spoon">
              <img src={images.spoon} alt="about_spoon" />
            </div>
          </div>
          <div className="content-divider"></div>
          <p className="description">
            <span className="highlight">Langano Ethiopian Restaurant</span>{" "}
            began as a vision to share Ethiopia's rich culinary history. Our
            recipes have been passed down through generations, and each dish
            reflects our journey, from our roots in Ethiopia to our warm
            presence here.
          </p>
          <button type="button" className="about-button">
            <span>Read More</span>
            <div className="button-underline"></div>
            <div className="button-accent"></div>
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

    <div className="floating-particles">
      {[...Array(20)].map((_, i) => (
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
  </div>
);

export default AboutUs;
