import React, { useEffect } from "react";
import { motion } from "framer-motion";

import ContactForm from "./ContactForm";
import Footer from "../Main/Footer";

import "../../styles/Contacts/Contacts.scss";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="contacts"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ContactForm />

      <Footer />
    </motion.div>
  );
};

export default Contacts;
