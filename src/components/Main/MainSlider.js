import React, { useContext } from "react";
import { Context } from "../../context/Context.js";

import { motion } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../styles/Main/MainSlider.scss";

const MainSlider = () => {
  const { slickSliderData } = useContext(Context);

  const slider = slickSliderData.map((i, index) => (
    <div key={index} className="slide">
      <img src={i.src} alt={i.href} />
      <div className="slide-overlay">
        <div className="slide-overlay-container">
          <h1> AUTO EXPRESS </h1>
          <h4> 100'S OF NEW OFFERS: DRIVE AWAY IN YOUR DREAM CAR TODAY </h4>
          <span></span>
        </div>
      </div>
    </div>
  ));

  const sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  return (
    <motion.div
      className="slick-slider"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, type: "linear" }}
    >
      <Slider className="slider" {...sliderSettings}>
        {slider}
      </Slider>
    </motion.div>
  );
};

export default MainSlider;
