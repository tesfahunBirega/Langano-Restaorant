import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import "./FindUs.css";

const FindUs = () => (
  <div className="findus-section" id="contact">
    <div className="findus-overlay"></div>

    {/* Decorative Elements */}
    <div className="floating-spice one"></div>
    <div className="floating-spice two"></div>
    <div className="floating-spice three"></div>
    <div className="floating-spice four"></div>
    <div className="floating-spice five"></div>

    <div className="findus-content">
      <div className="findus-info">
        <div className="section-header">
          <SubHeading title="Contact" />
          <h1 className="findus-title">
            <span className="title-highlight">Find</span> Us
          </h1>
          <div className="title-accent"></div>
        </div>

        <div className="contact-details">
          <div className="contact-item">
            <div className="icon-wrapper">
              <FaMapMarkerAlt className="contact-icon" />
            </div>
            <div className="contact-text">
              <h3>Location</h3>
              <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
              <div className="contact-accent"></div>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-wrapper">
              <FaPhone className="contact-icon" />
            </div>
            <div className="contact-text">
              <h3>Phone</h3>
              <p>0151/16672365</p>
              <div className="contact-accent"></div>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-wrapper">
              <FaEnvelope className="contact-icon" />
            </div>
            <div className="contact-text">
              <h3>Email</h3>
              <p>langanomigibbet@web.de</p>
              <div className="contact-accent"></div>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-wrapper">
              <FaClock className="contact-icon" />
            </div>
            <div className="contact-text">
              <h3>Opening Hours</h3>
              <div className="hours-grid">
                <div className="hours-item">
                  <span className="days">Monday - Friday</span>
                  <span className="time">10:00 am - 02:00 am</span>
                </div>
                <div className="hours-item">
                  <span className="days">Saturday - Sunday</span>
                  <span className="time">10:00 am - 03:00 am</span>
                </div>
              </div>
              <div className="contact-accent"></div>
            </div>
          </div>
        </div>

        <button type="button" className="findus-button">
          <span>Visit Us</span>
          <FaArrowRight className="button-icon" />
          <div className="button-accent"></div>
        </button>
      </div>

      <div className="findus-image">
        <div className="image-frame">
          <img src={images.findus} alt="findus" />
          <div className="image-overlay">
            <span>Visit Our Restaurant</span>
          </div>
          <div className="image-accent"></div>
        </div>
        <div className="image-decoration left"></div>
        <div className="image-decoration right"></div>
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

export default FindUs;
