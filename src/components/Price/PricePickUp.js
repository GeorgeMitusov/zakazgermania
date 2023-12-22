import React, { useContext } from "react";
import { Context } from "../../context/Context";

import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../styles/Price/PricePickUp.scss";

const PricePickUp = () => {
  const { pickUpData } = useContext(Context);

  const pricePickUpVars = {
    hidden: { x: "-100%", opacity: 0 },
    show: {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 1,
        type: "linear",
      },
    },
  };

  const pickUpBoxVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.5,
        type: "linear",
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const pricePickUpItem = pickUpData.map((i, id) => (
    <motion.div key={id} className="pick-up-item" variants={pricePickUpVars}>
      <FontAwesomeIcon className="pick-up-item-icon" icon={i.icon} />
      <div className="pick-up-item-descr">
        <h1> {i.title} </h1>
        <p> {i.descr} </p>
      </div>
    </motion.div>
  ));

  return (
    <div className="price-pick-up">
      <h1 className="price-pick-up-title">
        {" "}
        Профессиональный подбор и оценка автомобиля в Германии.{" "}
      </h1>

      <motion.ul
        className="price-pick-up-list"
        variants={pickUpBoxVars}
        initial="hidden"
        animate="show"
      >
        {pricePickUpItem}
      </motion.ul>

      <h1 className="price-check-title">
        {" "}
        Для расчета расстояния пользуйтесь ГУГЛ картами. Наш индекс 50354 Hürth.{" "}
      </h1>
    </div>
  );
};

export default PricePickUp;
