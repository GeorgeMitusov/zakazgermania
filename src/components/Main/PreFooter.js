import React  from 'react';

import BgPicture from '../../assets/pre-footer/1.jpg';

import { Parallax } from 'react-parallax';

import '../../styles/Main/PreFooter.scss';

const PreFooter = () => {
  return (
    <div className='pre-footer'>
        <Parallax 
            blur={{ min: 0, max: 5 }} 
            bgImage={BgPicture} 
            bgImageAlt="the cat" 
            strength={-400}
            className="pre-footer-parallax"
        />
    </div>
  )
}

export default PreFooter