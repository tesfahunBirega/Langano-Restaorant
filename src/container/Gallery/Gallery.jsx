import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="gallery-section">
      <div className="gallery-overlay"></div>

      {/* Decorative Elements */}
      <div className="floating-accent one"></div>
      <div className="floating-accent two"></div>
      <div className="floating-accent three"></div>

      <div className="gallery-content">
        <div className="gallery-info">
          <div className="section-header">
            <SubHeading title="Photo Gallery" />
            <h1 className="gallery-title">Moments of Delight</h1>
            <div className="title-accent"></div>
          </div>

          <p className="gallery-description">
            Experience the vibrant colors and authentic flavors of Ethiopian
            cuisine through our carefully curated collection of memorable
            moments at Langano Restaurant.
          </p>

          <button type="button" className="gallery-button">
            <span>Explore Gallery</span>
            <div className="button-accent"></div>
          </button>
        </div>

        <div className="gallery-images">
          <div className="images-container" ref={scrollRef}>
            {[
              images.gallery01,
              images.gallery02,
              images.gallery03,
              images.gallery04,
            ].map((image, index) => (
              <div className="image-card" key={`gallery_image-${index + 1}`}>
                <div className="image-frame">
                  <img src={image} alt={`gallery_image_${index + 1}`} />
                  <div className="image-overlay">
                    <BsInstagram className="instagram-icon" />
                    <span className="view-text">View on Instagram</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-navigation">
            <button className="nav-button prev" onClick={() => scroll("left")}>
              <BsArrowLeftShort />
            </button>
            <button className="nav-button next" onClick={() => scroll("right")}>
              <BsArrowRightShort />
            </button>
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
};

export default Gallery;
