import React, { useContext, useState } from "react";
import { Context } from "../context/Context.js";
import { Link } from "react-router-dom";

import { bubble as Menu } from "react-burger-menu";

import "../styles/SideMenu.scss";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { headerLinksData } = useContext(Context);

  function closeMenu() {
    setIsOpen(false);
  }

  const menuLink = headerLinksData.map((i, id) => (
    <li key={id} className="side-menu-item">
      <Link
        to={`/${i.link}`}
        id={i.title}
        className="side-menu-item-link"
        onClick={closeMenu}
      >
        {i.title}
      </Link>
    </li>
  ));

  return (
    <>
      <Menu
        className="side-menu"
        right
        isOpen={isOpen}
        onStateChange={(state) => setIsOpen(state.isOpen)}
      >
        <ul className="side-menu-list">{menuLink}</ul>
      </Menu>
    </>
  );
};

export default SideMenu;
