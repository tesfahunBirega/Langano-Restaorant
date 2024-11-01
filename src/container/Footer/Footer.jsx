import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div
    className="app__footer section__padding w-full relative z-1 flex justify-start items-center flex-col bg-primary-black pt-0 sm:px-0 sm:pb-8"
    id="footer"
  >
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links w-full flex flex-col lg:flex-row items-start justify-between mt-20 py-0 px-8">
      {/* Contact Us Section */}
      <div className="app__footer-links_contact flex-one my-8 mx-0 xl:m-4 text-left lg:text-center">
        <h2 className="app__footer-headtext text-primary-golden">Contact Us</h2>
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <p className="p__opensans">Phone: 0151/16672365</p>
        <p className="p__opensans">Email: langanomigibbet@web.de</p>
        <p className="p__opensans">USt-ID: 14/230/63/101</p>
      </div>

      {/* Logo Section */}
      <div className="app__footer-links_logo flex-one my-8 mx-0 xl:m-4 text-left lg:text-center">
        <h1 className="text-primary-golden text-4xl font-bold">LANGANO</h1>
        <p className="p__opensans lg:text-center text-left italic">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          alt="spoon decoration"
          className="spoon__img lg:mx-auto my-4"
        />
        <div className="app__footer-links_icons flex flex-row lg:justify-center">
          <FiFacebook className="text-primary-white m-2 text-2xl cursor-pointer hover:text-primary-golden" />
          <FiTwitter className="text-primary-white m-2 text-2xl cursor-pointer hover:text-primary-golden" />
          <FiInstagram className="text-primary-white m-2 text-2xl cursor-pointer hover:text-primary-golden" />
        </div>
      </div>

      {/* Working Hours Section */}
      <div className="app__footer-links_work flex-one my-8 mx-0 xl:m-4 text-left lg:text-center">
        <h2 className="app__footer-headtext font-CormorantUpright text-primary-golden">
          Opening Hours
        </h2>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">10:00 am - 02:00 am</p>
        <p className="p__opensans">Saturday - Sunday:</p>
        <p className="p__opensans">10:00 am - 03:00 am</p>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="footer__copyright mt-12 text-center">
      <p className="p__opensans">2024 Lemma Birra. All Rights Reserved.</p>
      <p className="p__opensans text-sm mt-1">
        Disclaimer: We do not guarantee the accuracy, completeness, or
        timeliness of the content provided. For external links, we are not
        responsible for their content.
      </p>
    </div>
  </div>
);

export default Footer;
