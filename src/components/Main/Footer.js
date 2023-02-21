import React, { useContext } from 'react';
import { Context } from '../../context/Context';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import NavMap from './NavMap';

import '../../styles/Main/Footer.scss';

const Footer = () => {

    const { footerData, footerSocialsData } = useContext(Context); 

    const footerInfoItem = footerData.map( ( i, id ) => (
        <div className='footer-info-item' key={id}>
            <div className='footer-info-item-left'>
                <FontAwesomeIcon 
                    className='footer-info-item-left-icon' 
                    icon={i.icon} 
                />
            </div>
            <div className='footer-info-item-right'>
                <p> { i.text } </p>
                <p> { i.text2 } </p>
            </div>
        </div>
    ))

    const footerSocialItem = footerSocialsData.map( ( i, id ) => (
        <div className='footer-socials-item' key={id}>
            <a href="/contacts" className='footer-socials-item-link'>
                <FontAwesomeIcon 
                    className='footer-socials-item-icon' 
                    icon={i} 
                />
            </a>
        </div>
    ))

    return (
        <div className='footer'>

            <div className='footer-container'>

                <div className='footer-title'>
                    <h1> Приезжайте к нам! </h1>
                    <p> И УЕЗЖАЙТЕ НА СВОЕМ НОВОМ АВТОМОБИЛЕ! </p>
                    <Link to="/contacts">
                        <button> Связаться </button>
                    </Link>
                </div>

                <div className='footer-info'>
                    { footerInfoItem }
                </div>

                <div className='footer-map'>
                    <NavMap />
                </div>

                <div className='footer-socials'>
                    { footerSocialItem }
                </div>

            </div>

            <div className='footer-rights'>
                <h4> © 2023 Все права защищены </h4>
            </div>
            
        </div>
    )
}

export default Footer;