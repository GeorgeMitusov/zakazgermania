import React from 'react';

import ContactForm from './ContactForm';

import '../../styles/Contacts/ContactPage.scss';

const ContactPage = () => {

  return (
    <div className='contact-page'>

        <div className='contact-page-wrap'>

            <div className='contact-page-info'></div>

            <ContactForm />

        </div>

    </div>
  )
}

export default ContactPage