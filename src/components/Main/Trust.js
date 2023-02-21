import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/Context';

import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import  '../../styles/Main/Trust.scss';

const Trust = () => {
  
  const { secondSliderData } = useContext(Context);

  const controls = useAnimation();
  const [ ref, inView ] = useInView();

  useEffect(() => {
    if ( inView ) {
      controls.start('enter')
    }
    else {
      controls.start('exit')
    }
  }, [ controls, inView ])

  const slider = secondSliderData.map( ( i, index ) => (
    <div key={index} className={`main-trust-slide ${i.className}`}>

      <div className='main-trust-slide-overlay'>

        <div className='slide-overlay-container'>
          <div className='slide-overlay-left'>
            <FontAwesomeIcon className='slide-overlay-icon' icon={i.icon} />
          </div>
          <div className='slide-overlay-right'>
            <h1> { i.title } </h1>
            <h4> { i.descr } </h4>
          </div>
        </div>

      </div>

    </div>
  ))

  const sliderSettings = {
    className: 'main-trust-slider-custom',
    vertical: true,
    verticalSwiping: true,
    dots: true,
    dotsClass: "slick-dots",
    arrows: false,
    fade: true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear' 
  }

  const mainTrustVars = {
    initial: { scale: 0, opacity: 0 },
    enter: { 
      scale: 1, opacity: 1,
      transition: {
        type: 'spring',
        duration: 3
      }
    },
    exit: { scale: 0, opacity: 0 }
  };

  return (
    <div className='main-trust'>
        <motion.div 
          className='main-trust-box'
          ref={ref}
          variants={mainTrustVars}
          initial="initial"
          animate={controls}
        >
          <h1> Стоит ли доверять Zakazgermania? </h1>

          <div className='main-trust-slider-box'>
            <Slider {...sliderSettings}>
              { slider }
            </Slider>
          </div>

        </motion.div>
      </div>
  )
}

export default Trust;