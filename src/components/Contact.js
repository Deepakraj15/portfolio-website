import React, { useRef, useState } from 'react';
import env from "react-dotenv";
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Alert from '@mui/material/Alert';

export const Contact = () => {
  const [isSuccess, setSuccess] = useState(false);

  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
     
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(env.SERVICE_ID,env.SERVICE_TEMPLATE_ID, form.current, {
        publicKey: env.PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setTimeout(() => {
            setSuccess(true);
          }, 3000);
          setSuccess(false);

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
  <div className='contact-page section w-full h-screen'>
    {isSuccess && (
        <motion.div
          initial={{ y: -100,opacity:0 }}
          animate={{ y: 0, opacity:1 }}
          className="success-popup fixed top-0 start-2/4"
          transition={{ ease: 'easeIn', duration: 1.5 }}
        >
          <Alert variant="filled" severity="success">Email sent successfully</Alert>
        </motion.div>
      )}
    <div className="w-full h-screen grid grid-cols-2 items-center" id="section3">
      
      <motion.div
        initial={{ x: -300 }}
        whileInView={{ x: 0 }}
        className="heading-white w-100 m-10"
      >
        Contact Me
        <p className="sub-heading">Send me an Email.</p>
      </motion.div>
        <motion.form
          initial={{ x:'100%'}}
          whileInView={{x:0}}
          ref={form} onSubmit={sendEmail} className="flex flex-col gap-y-9">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-2/5"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-2/5"
          />
        </div>
        <div>
          <textarea
            autoComplete="on"
            
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="submit-btn w-2/5 h-8"
          >
            Send
          </button>
        </div>
      </motion.form>
      </div>
    </div>
  );
}; export default Contact;