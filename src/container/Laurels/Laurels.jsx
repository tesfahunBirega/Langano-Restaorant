import React from "react";

import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="award-card">
    <div className="award-icon">
      <div className="icon-glow"></div>
      <img src={imgUrl} alt="awards" />
    </div>
    <div className="award-content">
      <h3 className="award-title">{title}</h3>
      <p className="award-subtitle">{subtitle}</p>
      <div className="award-accent"></div>
    </div>
  </div>
);

const Laurels = () => (
  <div className="laurels-section" id="awards">
    <div className="laurels-overlay"></div>

    {/* Decorative Elements */}
    <div className="floating-star one"></div>
    <div className="floating-star two"></div>
    <div className="floating-star three"></div>

    {/* Food Gallery Section */}
    <div className="food-gallery">
      <div className="gallery-grid">
        <div className="gallery-item main">
          <img src={images.gallery02} alt="Ethiopian Traditional Food" />
          <div className="gallery-overlay">
            <h3>Traditional Platter</h3>
            <p>Experience authentic Ethiopian flavors</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={images.welcome} alt="Ethiopian Cuisine" />
          <div className="gallery-overlay">
            <h3>Special Combo</h3>
            <p>A feast of colors and tastes</p>
          </div>
        </div>
      </div>
    </div>

    <div className="laurels-content">
      <div className="laurels-info">
        <div className="section-header">
          <SubHeading title="Awards & recognition" />
          <h1 className="laurels-title">Our Laurels</h1>
          <div className="title-accent"></div>
        </div>

        <div className="awards-grid">
          {data.awards.map((award, index) => (
            <div
              className="award-wrapper"
              key={award.title}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <AwardCard award={award} />
            </div>
          ))}
        </div>
      </div>

      <div className="laurels-image">
        <div className="image-frame">
          <img src={images.welcome} alt="laurels_img" />
          <div className="image-glow"></div>
        </div>
      </div>
    </div>

    {/* Corner Decorations */}
    <div className="corner-accent top-left"></div>
    <div className="corner-accent top-right"></div>
    <div className="corner-accent bottom-left"></div>
    <div className="corner-accent bottom-right"></div>
  </div>
);

export default Laurels;
