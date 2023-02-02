import { EmailJSResponseStatus } from 'emailjs-com';
import React, { useState, useRef } from 'react';
import {MdEmail, MdPhone} from 'react-icons/md'
import emailjs from 'emailjs-com'
import './ContactForm.css';

const ContactForm = () => {

    const form = useRef();
    const [formSubmitted, setFormSubmission] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_USER_ID
        ).then(
            result => console.log(result.text),
            error => console.log(error.text)
        )
        e.target.reset();
        setFormSubmission(true);
    }

    return(
        <div className='ContactFormContainer p-4'>
            {!formSubmitted ? ( <div>
            <h1 className='text-white pt-2 text-3xl'>Contact Us</h1>
            <form ref={form} onSubmit={sendEmail} className='text-white flex flex-col p-4'>
                <label className='text-white text-left pb-2'>Name</label>
                <input className='text-black mb-4 rounded-md' type="text" name="user_name" required/>
                <label className='text-white text-left pb-2'>Email</label>
                <input className='text-black mb-4 rounded-md' type="email" name="user_email" required/>
                <label className='text-white text-left pb-2'>Message</label>
                <textarea className='text-black mb-4 h-44 rounded-md' name='message' required/>
                <input id='formSubmitButton' className='form-submit-button' type='submit' value='Send'/>
            </form> </div>) : (
                <h3>Thank you for getting in touch!</h3>
            )
            }
        </div>
    )
};

export default ContactForm;