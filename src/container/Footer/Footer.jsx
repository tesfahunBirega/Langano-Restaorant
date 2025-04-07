import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter, SubHeading } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="footer-section" id="footer">
    <div className="footer-overlay"></div>

    {/* Decorative Elements */}
    <div className="floating-spice one"></div>
    <div className="floating-spice two"></div>
    <div className="floating-spice three"></div>

    <FooterOverlay />
    <Newsletter />

    <div className="footer-content">
      {/* Contact Information */}
      <div className="footer-column">
        <div className="section-header">
          <SubHeading title="Contact Us" />
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-accent"></div>
        </div>

        <div className="contact-info">
          <div className="info-item">
            <span className="info-label">Address</span>
            <p>9 W 53rd St, New York, NY 10019, USA</p>
          </div>
          <div className="info-item">
            <span className="info-label">Phone</span>
            <p>+1 212-344-1230</p>
            <p>+1 212-555-1230</p>
          </div>
          <div className="info-item">
            <span className="info-label">Email</span>
            <p>info@langano.com</p>
          </div>
          <div className="info-item">
            <span className="info-label">USt-ID</span>
            <p>DE123456789</p>
          </div>
        </div>
      </div>

      {/* Logo & Social */}
      <div className="footer-column center">
        <div className="logo-section">
          <h1 className="restaurant-name">Langano</h1>
          <div className="logo-accent"></div>
          <p className="restaurant-quote">
            "The best way to find yourself is to lose yourself in the service of
            others."
          </p>
          <div className="spoon-decoration">
            <img src={images.spoon} alt="spoon" />
          </div>
          <div className="social-icons">
            <a href="#" className="social-link">
              <div className="icon-accent"></div>
              <FiFacebook />
            </a>
            <a href="#" className="social-link">
              <div className="icon-accent"></div>
              <FiTwitter />
            </a>
            <a href="#" className="social-link">
              <div className="icon-accent"></div>
              <FiInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Working Hours */}
      <div className="footer-column">
        <div className="section-header">
          <SubHeading title="Working Hours" />
          <h2 className="section-title">Visit Us</h2>
          <div className="title-accent"></div>
        </div>

        <div className="hours-info">
          <div className="hours-group">
            <h3>Monday - Friday</h3>
            <p>Lunch: 11:00 am - 2:30 pm</p>
            <p>Dinner: 5:30 pm - 10:00 pm</p>
          </div>
          <div className="hours-group">
            <h3>Saturday - Sunday</h3>
            <p>Brunch: 10:00 am - 3:00 pm</p>
            <p>Dinner: 5:00 pm - 11:00 pm</p>
          </div>
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="footer-bottom">
      <div className="copyright">
        <p>&copy; 2024 Langano. All Rights Reserved.</p>
        <div className="copyright-accent"></div>
        <p className="disclaimer">
          This website is for demonstration purposes only. All images and
          content are used for illustrative purposes.
        </p>
      </div>
    </div>

    {/* Corner Decorations */}
    <div className="corner-accent top-left"></div>
    <div className="corner-accent top-right"></div>
    <div className="corner-accent bottom-left"></div>
    <div className="corner-accent bottom-right"></div>
  </div>
);

export default Footer;
