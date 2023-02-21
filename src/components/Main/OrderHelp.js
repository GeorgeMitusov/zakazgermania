import React, { useEffect } from 'react'

import { Link } from 'react-router-dom';

import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

import  '../../styles/Main/OrderHelp.scss';

const OrderHelp = () => {

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

  const mainOrderVars = {
    initial: { x: "-100%",  opacity: 0 },
    enter: { 
      x: '0', 
      opacity: 1,
      transition: {
        duration: 2
      }
    },
    exit: { x: '100%', opacity: 0 }
  };

  return (
    <div className='main-order-help-wrap'>
      <motion.div 
        className='main-order-help'
        ref={ref}
        variants={mainOrderVars}
        initial="initial"
        animate={controls}
      >
        <div className='main-order-help-box'>
          <h1> Мы поможем купить Вам автомобиль и запчасти в Германии. </h1>
          <Link to="/contacts">
            <button> Заказать осмотр </button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default OrderHelp