import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "../../styles/About/AboutHelp.scss";

const AboutHelp = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("enter");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  const aboutHelpVars = {
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

  return (
    <div className="about-help">
      <motion.h1
        ref={ref}
        variants={aboutHelpVars}
        initial="initial"
        animate={controls}
      >
        Профессиональная помощь в вопросах покупки авто в Германии.
      </motion.h1>
      <p>
        {" "}
        Получить авто из Германии под заказ отличного качества по доступной цене
        больше не проблема. Компания предоставляет комплексные услуги по
        приобретению транспортных средств за границей. Мы:{" "}
      </p>
      <ul>
        <li> производим тщательный осмотр. </li>
        <li> помогаем в оформлении документов. </li>
        <li>
          {" "}
          оказываем помощь в доставке автомобиля к клиенту, так как сотрудничаем
          с рядом транспортных компаний и знаем, что Вам посоветовать.{" "}
        </li>
      </ul>
      <p>
        {" "}
        Каждый клиент выбирает, приехать ему для выбора автомобиля
        самостоятельно, чтобы осмотреть и участвовать в тест-драйве, или
        заказать у нас услугу под ключ и осмотреть автомобиль в режиме онлайн не
        выходя из дома.{" "}
      </p>
      <p>
        {" "}
        За время осуществления деятельности мы успели продать свыше 1000
        автомобилей. И многие из клиентов обращаются к нам по несколько раз, так
        как покупают по 3-4 машины, обеспечивая транспортом каждого члена семьи.{" "}
      </p>
    </div>
  );
};

export default AboutHelp;
