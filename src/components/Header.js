import React from "react";

import SideMenu from "./SideMenu.js";

import Logo from "../assets/logo/1.jpeg";

import "../styles/Header.scss";

const Header = () => {
  return (
    <section className="header">
      <nav className="navbar">
        <img src={Logo} className="header-logo" alt="header-logo" />

        <SideMenu />
      </nav>
    </section>
  );
};

export default Header;
