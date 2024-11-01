import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div
    className="bg-primary-black app__wrapper section__padding font-CormorantUpright text-primary-golden"
    id="home"
  >
    <div className="flex-1 w-full flex items-start justify-center flex-col">
      <SubHeading title="Chase the new flavour" />
      <h1 className="headtext__cormorant font-bold mb-4">Restourant Langano</h1>
      <p className="p__opensans mb-4">
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Amaseganalo, penatibus etibus!
        Alemash Ethiopian Restaurant invites you to come and experience the
        vibrant tastes of Ethiopia. Come, eat, and enjoy a cultural journey with
        every bite.{" "}
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img w-full p-4">
      <img
        src={images.welcome}
        alt="header_img"
        className="w-full h-[300px] lg:w-[100%] lg:h-[100px] xl:w-[65%] xl:h-[300px] 2xl:w-[76.67%] 2xl:h-[300px] object-cover"
      />
    </div>
  </div>
);

export default Header;
