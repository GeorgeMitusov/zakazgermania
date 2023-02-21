import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/Context';

import { Link } from 'react-router-dom';

import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import  '../../styles/Main/HowToBuy.scss';

const HowToBuy = () => {

  const { mainHowToBuyData } = useContext(Context);

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

  const howToBuyVars = {
    initial: { x: '-100%' },
    enter: { 
      x: '0%',
      transition: {
        duration: 1.5,
        staggerChildren: .5,
        delayChildren: .5,
      }
    },
    exit: { x: '100%' }
  };

  const linksVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1 }
  };

  const howToBuyItem = mainHowToBuyData.map( ( i, id ) => (
    <motion.div 
      key={id}
      variants={linksVariants}
      className={`main-how-to-buy-section ${i.number}`}
    >
      <img src={i.img} alt={i.img} />
      <div className='main-how-to-buy-section-descr'>
        <h1> { i.title } </h1>
        <p> { i.descr } </p>
      </div>
      <Link to={i.link}>
        <button> { i.button } </button>
      </Link>
    </motion.div>
  ));

  return (
    <div className='main-how-to-buy'>

      <h1> Как найти и купить автомобиль в Германии? </h1>

      <motion.div 
        className='main-how-to-buy-wrap'
        ref={ref}
        variants={howToBuyVars}
        initial="initial"
        animate={controls}
      >

        { howToBuyItem }

      </motion.div>

    </div>
  )
}

export default HowToBuy