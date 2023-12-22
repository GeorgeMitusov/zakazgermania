import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./Header";
import Main from "./Main/Main";
import About from "./About/About";
import Price from "./Price/Price";
import Contacts from "./Contacts/Contacts";

import ScrollToTopBtn from "./ScrollToTopBtn";

const AnimatedRoutes = ({ error }) => {
  const location = useLocation();

  return (
    <>
      <Header />

      <ScrollToTopBtn />

      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Main />} />

          <Route path="/about" element={<About />} />

          <Route path="/price" element={<Price />} />

          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
