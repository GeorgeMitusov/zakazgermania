import React, { useContext } from "react";
import { Context } from "../../context/Context";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

import "../../styles/Contacts/ContactForm.scss";

const ContactForm = () => {
  const { successMsg, setSuccessMsg, contactFormData } = useContext(Context);

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const serviceId = "service_kxmglya";
    const templateId = "zakazgerm_gmail";
    const userId = "X6BZThkDbGkN2NKjC";

    emailjs.send(serviceId, templateId, values, userId).then(
      (result) => {
        console.log(result.text);
        setSuccessMsg(true);
        resetForm();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const formVars = {
    initial: { scale: 0, opacity: 0 },
    enter: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
        type: "linear",
      },
    },
  };

  const sucMsg = (
    <div className="message-success">
      <p className="success-msg">
        Ваше сообщение было отправлено! <br />
        Наша служба поддержки свяжется с вами в ближайшее время!
      </p>
    </div>
  );

  const contactFormItem = contactFormData.map((i, id) => (
    <div className="contact-form-box" key={id}>
      <Field
        className="contact-form-box-field"
        type={i.type}
        id={i.id}
        name={i.name}
        placeholder={i.placeholder}
      />
      <ErrorMessage
        name={i.name}
        component="div"
        className="contact-form-box-error"
      />
    </div>
  ));

  const form = successMsg ? (
    sucMsg
  ) : (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ touched, errors }) => (
        <Form className="contact-form">
          {contactFormItem}

          <div className="contact-form-box">
            <Field
              className="contact-form-box-field textarea"
              as="textarea"
              id="message"
              name="message"
              placeholder="Ваше сообщение"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="contact-form-box-error"
            />
          </div>

          <div className="contact-form-box">
            <button
              className="contact-form-submit-btn"
              type="submit"
              disabled={
                Object.keys(errors).length > 0 ||
                Object.keys(touched).length === 0
              }
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );

  return (
    <div className="contact-form-wrap">
      <motion.div
        className="contact-form-container"
        variants={formVars}
        initial="initial"
        animate="enter"
      >
        {form}
      </motion.div>
    </div>
  );
};

export default ContactForm;
