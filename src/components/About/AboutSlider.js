import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context.js";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../styles/About/AboutSlider.scss";

const AboutSlider = () => {
  const { aboutSliderData } = useContext(Context);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("enter");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  const aboutSliderVars = {
    initial: { scale: 0, opacity: 0 },
    enter: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        type: "tween",
      },
    },
    exit: { scale: 0, opacity: 0 },
  };

  const slider = aboutSliderData.map((i, index) => (
    <div key={index} className="about-slide">
      <img src={i.src} alt={i.href} />
      <div className="about-slide-overlay">
        <div className="about-slide-overlay-container">
          <h1> {i.name} </h1>
          <h4> {i.position} </h4>
          <p> {i.descr} </p>
          <span></span>
        </div>
      </div>
    </div>
  ));

  const sliderSettings = {
    dots: true,
    dotsClass: "about-slick-dots",
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  return (
    <motion.div
      className="about-slider-wrap"
      ref={ref}
      variants={aboutSliderVars}
      initial="initial"
      animate={controls}
    >
      <Slider className="about-slider" {...sliderSettings}>
        {slider}
      </Slider>
    </motion.div>
  );
};

export default AboutSlider;
