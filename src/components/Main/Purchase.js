import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "../../styles/Main/Purchase.scss";

const Purchase = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("enter");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  const mainPurchaseVars = {
    initial: { x: "-100%", opacity: 0 },
    enter: {
      x: "0",
      opacity: 1,
      transition: {
        type: "tween",
        duration: 2,
        ease: "easeOut",
      },
    },
    exit: { x: "-100%", opacity: 0 },
  };

  return (
    <div className="purchase">
      <motion.div
        className="purchase-container"
        ref={ref}
        variants={mainPurchaseVars}
        initial="initial"
        animate={controls}
      >
        <div className="purchase-top">
          <h1> Самостоятельное приобретение: оправдан ли риск? </h1>
          <p>
            {" "}
            Если Вы желаете купить авто бу в Германии самостоятельно,
            задумайтесь о возможных последствиях столь опрометчивого шага. Даже
            в столь развитой стране встречаются «черные овцы» («Schwarze
            Schafen») – недобросовестные продавцы, желающие продать угнанную,
            находящуюся под арестом либо машину без документов, со скрытыми
            дефектами, а может просто не вернут Вам НДС после вывоза авто. Чтобы
            не попасться на таких, не чистых на руку, автодилеров, советуем
            обратиться в проверенную компанию-посредника.{" "}
          </p>
          <p>
            {" "}
            Также Вам не нужно беспокоиться о самостоятельном осмотре
            автомобиля, месте проведения его технического осмотра, правильности
            оформления сделки и прочих нюансов. Мы все берем на себя!{" "}
          </p>
          <p>
            {" "}
            Остались еще вопросы о том, как купить машину в Германии? Свяжитесь
            с нами, и вопрос будет решен!{" "}
          </p>
          <Link to="/contacts">
            <button> Связаться </button>
          </Link>
        </div>
        <div className="purchase-bottom">
          <h1> Мы знаем, как пригнать авто из Германии просто! </h1>
          <p>
            {" "}
            Популярность авто из Германии с каждым годом неумолимо растет, что
            совершенно не удивительно. Ведь эта страна занимает ведущие позиции
            в сфере автомобилестроения, а выпускаемые с конвейера машины
            славятся своей надежностью, безопасностью и повышенным уровнем
            комфорта. Отличным доказательством этих слов служат марки
            автомобилей Porsche, Mercedes Benz, BMW, Audi, Volkswagen. Но купить
            новое транспортное средство далеко не каждому по карману. Поэтому
            многие желают пригнать авто из Германии на заказ. Компания Destacar
            компетентна в этом деле и готова предложить помощь своих сотрудников
            в решении всех вопросов.{" "}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Purchase;
