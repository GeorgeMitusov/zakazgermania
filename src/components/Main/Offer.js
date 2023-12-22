import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "../../styles/Main/Offer.scss";

const Offer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("enter");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  const mainOfferVars = {
    initial: { scaleX: "400%", x: "100%" },
    enter: {
      scaleX: "100%",
      x: "0%",
      transition: {
        duration: 2,
      },
    },
    exit: { scaleX: "300%", x: "100%" },
  };

  return (
    <div className="main-offer">
      <h1> ZAKAZGERMANIA - автомобили на заказ из Германии. </h1>

      <div className="main-offer-wrap">
        <motion.div
          className="main-offer-left"
          ref={ref}
          variants={mainOfferVars}
          initial="initial"
          animate={controls}
        >
          <h1> ОСМОТР </h1>
          <p> Все это вживую, реальные осмотры для реальных клиентов. </p>
        </motion.div>

        <div className="main-offer-right">
          <h1> ОТКРЫТ ДЛЯ НОВОГО </h1>
          <p>
            Мы всегда в курсе всех последних нововведений или изменений в
            законодательстве Германии <br />
            по вопросам автомобильной жизни. Стремимся к чему-то новому,
            интересному и перспективному. <br />
            Наш современный мир меняется по секундам, и за ним нужно успевать.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
