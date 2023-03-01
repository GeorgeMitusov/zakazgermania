import React, { useEffect } from 'react';

import { motion } from 'framer-motion';

import MainSlider from './MainSlider';
import OrderHelp from './OrderHelp.js';
import Offer from './Offer.js';
import HowToBuy from './HowToBuy.js';
import Trust from './Trust.js';
import Signs from './Signs';
import Purchase from './Purchase';
import PreFooter from './PreFooter';
import Footer from './Footer';

import '../../styles/Main/Main.scss';

const Main = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className='main'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >

      <MainSlider />

      <OrderHelp />

      <Offer />

      <HowToBuy />

      <Trust />

      <Signs />

      <Purchase />
      
      <PreFooter />

      <Footer />
      
    </motion.div>
  )
}

export default Main;