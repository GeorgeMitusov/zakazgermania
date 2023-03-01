import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import OrderHelp from '../Main/OrderHelp';
import AboutSlider from './AboutSlider';
import Footer from '../Main/Footer';
import AboutHelp from './AboutHelp';
import AboutRequire from './AboutRequire';
import FrontPage from '../FrontPage';

import FrontPageBgImg from '../../assets/about/about-page/6.jpg';

import '../../styles/About/About.scss';

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className='about'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    > 

      <FrontPage bgImg={FrontPageBgImg} title='О нас' /> 

      <OrderHelp />

      <AboutSlider />

      <AboutHelp />

      <AboutRequire />

      <Footer />
      
    </motion.div>
  )
}

export default About