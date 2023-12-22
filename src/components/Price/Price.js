import React, { useEffect } from "react";
import { motion } from "framer-motion";

import FrontPage from "../FrontPage";
import OrderHelp from "../Main/OrderHelp";
import PricePickUp from "./PricePickUp";
import PriceDelivery from "./PriceDelivery";
import Footer from "../Main/Footer";

import FrontPageBgImg from "../../assets/price/delivery/1.jpg";

import "../../styles/Price/Price.scss";

const Price = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="price"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <FrontPage bgImg={FrontPageBgImg} title="Стоимость услуг" />

      <OrderHelp />

      <PricePickUp />

      <PriceDelivery />

      <Footer />
    </motion.div>
  );
};

export default Price;
