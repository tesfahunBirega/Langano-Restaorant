import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="relative app__bg flex__center section__padding" id="about">
    <div className="absolute inset-0 flex__center">
      <img
        src={images.G}
        alt="G_overlay"
        className="z-0 h-1/4 sm:h-2/6 lg:w-96 lg:h-96"
      />
    </div>

    <div className="w-full z-2 flex__center flex-col lg:flex-row">
      <div className=" flex-one flex justify-end items-end flex-col text-right">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans mx-0 my-6 text-primary-gray">
          Welcome to Langano Ethiopian Restaurant, where every meal is an
          invitation to experience the flavors, aromas, and hospitality of
          Ethiopia. Our mission is to bring you authentic dishes, made with
          traditional spices and served with the warmth of our heritage. Join us
          and discover the heart of Ethiopian cuisine!
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="my-1 mx-4 lg:my-6 lg:mx-16 lg:rotate-0 rotate-90 flex__center">
        <img
          src={images.knife}
          alt="about_knife"
          className="h-60vwh lg:h-80vh 2xl:h-60vh"
        />
      </div>

      <div className=" flex-one flex justify-start items-start flex-col text-left">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans mx-0 my-6 text-primary-gray">
          Langano Ethiopian Restaurant began as a vision to share Ethiopia’s
          rich culinary history. Our recipes have been passed down through
          generations, and each dish reflects our journey, from our roots in
          Ethiopia to our warm presence here. We invite you to taste the
          tradition and become a part of our story.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
