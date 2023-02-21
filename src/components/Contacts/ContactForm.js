import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { motion } from "framer-motion"

import emailjs from '@emailjs/browser';

import '../../styles/Contacts/ContactForm.scss';

const ContactForm = () => {

    const [ successMsg, setSuccessMsg ] = useState(false);

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        reset
    } = useForm();

    const form = useRef();

    const formVars = {
        initial: { scale: 0,  opacity: 0 },
        enter: { 
            scale: 1, 
            opacity: 1,
            transition: {
                duration: 2,
                type: 'linear'
            }
        }
    };
    
    const sendEmail = e => {

        e.preventDefault();

        emailjs.sendForm("service_l3d7iwl", 'glint_email_reply', form.current, 'X6BZThkDbGkN2NKjC')
        .then( result => {
            console.log("EMAIL_SUCCESS", result.status, result.text);
        }, error => {
            console.log("EMAIL_ERROR", error.text);
        })
        
        e.target.reset();
    }

    const onSubmit = e => {
        sendEmail(e);
        setSuccessMsg(true);
        reset();
    }

    const formContent = (
        <>

            <div className="contact-form-box">
                <input
                    { 
                        ...register( "name", { 
                            maxLength: 20, 
                            pattern: /^[A-Za-z]+$/i,
                            minLength: 2,
                            required: true,
                        })
                    }  
                    id="contactName" 
                    placeholder='Ваше имя'
                    name="name"
                />

                { errors?.name?.type === "required" && (
                    <label className='contact-form-box-title require'> Это поле не может быть пустым. </label>
                )}
                { errors?.name?.type === "maxLength" && (
                    <label className='contact-form-box-title'> Имя не может превышать 20 символов. </label>
                )}
                { errors?.name?.type === "minLength" && (
                    <label className='contact-form-box-title'> Пожалуйста, введите не менее 2 символов. </label>
                )}
                { errors?.name?.type === "pattern" && (
                    <label className='contact-form-box-title'> Только буквы. </label>
                )} 

             </div> 

            <div className="contact-form-box">
                 <input
                    type="text"
                    id="contactEmail" 
                    placeholder='Ваша почта'
                    name="email"
                    { 
                        ...register( "email", { 
                            required: true,
                            maxLength: 20, 
                            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            minLength: 8,
                        })
                    }
                />
                { errors?.email?.type === "required" && (
                    <label className='contact-form-box-title require'> Это поле не может быть пустым. </label>
                )}
                { errors?.email?.type === "maxLength" && (
                    <label className='contact-form-box-title'> Почта не может превышать 20 символов. </label>
                )}
                { errors?.email?.type === "minLength" && (
                    <label className='contact-form-box-title'> Пожалуйста, введите не менее 8 символов. </label>
                )}
                { errors?.email?.type === "pattern" && (
                    <label className='contact-form-box-title'> Пожалуйста, укажите почту корректно. </label>
                )}
            </div> 

            <div className="contact-form-box">
                <input
                    { ...register( "subject")}  
                    id="contactSubject" 
                    placeholder='Тема сообщения'
                    name="subject"
                />
            </div>
            <div className="contact-form-box">

                 <textarea
                    { 
                        ...register( "message", 
                        { 
                            required: 'This is required',
                            minLength: 15,
                        })
                    } 
                    className='contactMessage'
                    id='contactMessage'
                    placeholder='Ваше сообщение'
                    name="message"
                />

                { errors?.message?.type === "required" && (
                    <label className='contact-form-box-title textarea require '> Это поле не может быть пустым. </label>
                )}
                { errors?.message?.type === "minLength" && (
                    <label className='contact-form-box-title textarea'> Пожалуйста, введите не менее 15 символов. </label>
                )}

            </div>

            <div className="contact-form-box">

                <button className='contact-form-submit-btn'> 
                    отправить
                </button>

            </div>
        </>
    );

    const sucMsg = (
        <div className='message-success'>
            <p className="success-msg"> 
                Ваше сообщение было отправлено! <br />
                Наша служба поддержки свяжется с вами в ближайшее время! 
            </p> 
        </div>
    );        

    return (
        <div className='contact-form-wrap'>
            <motion.form 
                className='contact-form'
                ref={form}
                variants={formVars}
                initial="initial"
                animate='enter'
                onSubmit={ e => handleSubmit(onSubmit(e))}
            >

                { successMsg ? sucMsg : formContent }

            </motion.form>
        </div>
    )
}

export default ContactForm