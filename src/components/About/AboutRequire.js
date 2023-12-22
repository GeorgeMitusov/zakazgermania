import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import BgPicture from "../../assets/about/about-require/2.jpg";

import { Parallax } from "react-parallax";

import "../../styles/About/AboutRequire.scss";

const AboutRequire = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("enter");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  const aboutRequireVars = {
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
    <div className="about-require">
      <Parallax
        bgImage={BgPicture}
        bgImageAlt="the cat"
        strength={300}
        className="about-require-parallax"
      >
        <div className="about-require-box">
          <motion.h1
            ref={ref}
            variants={aboutRequireVars}
            initial="initial"
            animate={controls}
          >
            Что необходимо для покупки и доставки машины из Германии?
          </motion.h1>
        </div>
      </Parallax>

      <hr />

      <div className="about-require-container">
        <div className="about-require-container-top">
          <h6>
            {" "}
            С помощью компании Destacar для Вас покупка автомобиля в Германии не
            составит труда. Также мы можем посоветовать ряд проверенных
            транспортных компаний, которые окажут квалифицированную помощь по
            легальному перегону купленного транспортного средства по территории
            Германии и за её пределами, возможна так же авиа доставка. При этом
            Вы можете контролировать любой этап сделки, ведь наши приоритеты –
            прозрачность и чистота ведения бизнеса.{" "}
          </h6>
          <h6>
            {" "}
            Также не нужно беспокоиться о состоянии выбранного транспортного
            средства. Мы выявим все имеющиеся недочеты, проведем фото и
            видеофиксацию осмотра, чтобы Вы могли увидеть реальную картину.{" "}
          </h6>
          <ul>
            <li> процедуру детального осмотра. </li>
            <li> полный тест-драйв. </li>
            <li> определение наличия любых ошибок, неисправностей. </li>
            <li> отзывы реальных клиентов. </li>
          </ul>
        </div>

        <div className="about-require-container-bottom">
          <h1> Что мы предоставляем? </h1>
          <p> Перечень предоставляемых услуг состоит из: </p>
          <ul>
            <li> подготовки перечня комплектации автомобиля. </li>
            <li> проведения ТО для оценки машины. </li>
            <li> проверки истории ТС, его юридической чистоты. </li>
            <li>
              {" "}
              установления подлинности и наличия необходимых документов.{" "}
            </li>
            <li> проверки возможных неисправностей и аварийности. </li>
            <li> создания поэтапного фотоотчета. </li>
            <li> подписания документа купли/продажи. </li>
            <li>
              {" "}
              организация доставки автомобиля клиенту посредством привлечения
              транспортных компаний.{" "}
            </li>
          </ul>
          <p>
            {" "}
            Хотелось бы отметить один достаточно важный момент. Мы никогда не
            утаиваем от Вас размер скидки, которую предоставляет предыдущий
            владелец машины. Да, мы ведем торг относительно цены, но только для
            Вас. В чем наша выгода? 50% от выторгованной скидки, и говорим мы от
            этом открыто. Честно и максимально прозрачно – вот как мы работаем!{" "}
          </p>
          <p>
            {" "}
            Мы знаем, насколько приобретение машины – важный шаг, поэтому
            стараемся сделать его для Вас максимально простым и легким. Звоните,
            и Вы больше не будете беспокоиться о том, как заказать авто из
            Германии.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutRequire;
