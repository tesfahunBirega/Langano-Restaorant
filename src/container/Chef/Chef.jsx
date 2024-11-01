import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info flex justify-start items-start">
      <SubHeading title="Langano Restourant" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content flex flex-col w-full mt-10">
        <div className="app__chef-content_quote flex justify-start items-end">
          <img
            src={images.quote}
            alt="quote_image"
            className="w-[47px] h-[40px] mt-0 mr-4 mb-4 ml-0"
          />
          <p className="p__opensans">
            At LEMA and Beletu Ethiopian Flavor Restaurant, we are dedicated to
            providing an authentic and delightful dining experience.{" "}
          </p>
        </div>

        <p className="p__opensans">
          {" "}
          Our passion for Ethiopian cuisine drives us to use the freshest
          ingredients and traditional recipes, ensuring every dish is a
          celebration of flavor and culture..{" "}
        </p>
      </div>

      <div className="app__chef-sign wi-full mt-10">
        <p className=" font-CormorantUpright font-normal text-[32px] leading-9 tracking-wider capitalize text-primary-golden ">
          Lema and Beletu
        </p>
        <p className="p__opensans">Chef & Founder</p>
        <img
          src={images.sign}
          alt="sign_image"
          className="w-4/5 mobile:w-[250px] mt-12 2xl:w-[370px]"
        />
      </div>
    </div>
  </div>
);

export default Chef;
