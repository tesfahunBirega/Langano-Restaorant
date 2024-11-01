import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div
    className="flex-col bg-primary-black flex__center section__padding"
    id="menu"
  >
    <div className="mb-12 m-auto flex flex-col justify-center items-center">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Our&apos; Special</h1>
    </div>

    <div className="app__specialMenu-menu w-full mt-8 mx-0 flex justify-center items-center flex-col lg:items-start lg:flex-row">
      <div className="app__specialMenu-menu_food  flex__center flex-one w-full flex-col">
        <p className="app__specialMenu-menu_heading font-CormorantUpright font-semibold text-4xl leading-9 tracking-wider text-primary-white md:text-5xl">
          Meals
        </p>
        <div className="app__specialMenu_menu_items mb-50 flex flex-col mx-0 my-8 w-full mb-12">
          {data.food.map((food, index) => (
            <MenuItem
              key={food.title + index}
              title={food.title}
              price={food.price}
              tags={food.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img w-full mt-2 mb-10 mx-10 lg:w-[100px] lg:mx-6 lg:my-0 2xl:w-[350px] flex flex-col items-center">
        {/* First Image */}
        <img
          src={images.menu2}
          alt="menu__img"
          className="m-auto w-3/4 h-auto mb-4 lg:w-3/4 lg:h-[700px] 2xl:h-[150px]"
        />

        {/* Second Image */}
        <img
          src={images.menu3}
          alt="menu__img_2"
          className="m-auto w-3/4 h-auto mb-4 lg:w-3/4 lg:h-[700px] 2xl:h-[150px]"
        />

        {/* Third Image */}
        <img
          src={images.menu4}
          alt="menu__img_3"
          className="m-auto w-3/4 h-auto lg:w-3/4 lg:h-[700px] 2xl:h-[150px]"
        />
      </div>

      <div className="app__specialMenu-menu_drinks  flex__center flex-one w-full flex-col">
        <p className="app__specialMenu-menu_heading font-CormorantUpright font-semibold text-4xl leading-9 tracking-wider text-primary-white md:text-5xl">
          Drinks
        </p>
        <div className="app__specialMenu_menu_items flex flex-col mx-0 my-8 w-full">
          {data.drinks.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div className="mt-4">
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
