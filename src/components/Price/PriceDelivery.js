import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Parallax } from "react-parallax";

import BgPicture from "../../assets/price/delivery/2.jpg";

import "../../styles/Price/PriceDelivery.scss";

const PriceDelivery = () => {
  const { priceListData, priceSocialData, parallaxStr } = useContext(Context);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("enter");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  const priceDeliveryTitleVars = {
    initial: { x: "-100%", opacity: 0 },
    enter: {
      x: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        type: "linear",
      },
    },
    exit: { x: "-100%", opacity: 0 },
  };

  const priceListItem = priceListData.map((i, index) => (
    <li key={index} className="price-delivery-list-item">
      {" "}
      {i}{" "}
    </li>
  ));

  const priceSocialItem = priceSocialData.map((i, index) => (
    <li className="price-where-to-find-list-item" key={index}>
      <motion.a
        href="/"
        className="price-where-to-find-list-item-link"
        style={{
          background: `url(${i.bwLogo}) no-repeat center`,
          transition: "all 0.4s ease-in-out",
        }}
        whileHover={{
          background: `url(${i.logo}) no-repeat center`,
          scale: 0.9,
        }}
      ></motion.a>
    </li>
  ));

  return (
    <div className="price-delivery">
      <Parallax
        bgImage={BgPicture}
        bgImageAlt="BGPIC"
        strength={parallaxStr}
        className="price-delivery-parallax"
      >
        <div className="price-delivery-box">
          <motion.h1
            ref={ref}
            variants={priceDeliveryTitleVars}
            initial="initial"
            animate={controls}
          >
            Что необходимо для покупки и доставки машины из Германии?
          </motion.h1>
        </div>
      </Parallax>

      <h2 className="price-delivery-title">
        Доставка автомобилей осуществляется транспортной компанией. Мы можем
        порекомендовать Вам компании, о которых у нас сложилось хорошее
        впечатление. <br />
        Самостоятельно мы не доставляем автомобили.
      </h2>

      <div className="price-delivery-cost">
        <h1> Что входит в стоимость? </h1>
        <h3> Мы нацелены на продуктивное и долгосрочное сотрудничество. </h3>

        <ul className="price-delivery-list">{priceListItem}</ul>

        <div className="price-where-to-find">
          <h1> НА ЭТИХ САЙТАХ ВЫ НАЙДЕТЕ ПОДХОДЯЩИЙ АВТО ДЛЯ ВАС. </h1>

          <ul className="price-where-to-find-list">{priceSocialItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default PriceDelivery;
