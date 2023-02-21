import React from 'react';

import SideMenu from './SideMenu.js';

import Logo from '../assets/logo/1.jpeg';

import '../styles/Header.scss';

const Header = () => {

  return (
    <section className='header'>
      
      <nav className="navbar">

        <div className="navbar-container container">

          <img src={Logo} className="header-logo" alt="header-logo" />

          <SideMenu />

        </div>

      </nav>

    </section>
  )
}

export default Header;