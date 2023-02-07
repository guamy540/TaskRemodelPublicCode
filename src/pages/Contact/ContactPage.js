import React from 'react'
import "./ContactPage.css"
import "../../assets/styles/colors.css"
import {motion} from 'framer-motion'
import ContactForm from '../../components/ContactForm/ContactForm'

const ContactPage = () => {
  return (
    <div className='ContactPageContainer pt-16 min-h-screen flex flex-col 
    justify-center text-center items-center bg-black'>
    
      <motion.div 
      whileInView={{ opacity: [0, 3] }}
      transition={{ duration: 1 }}
      
      className='ContactDescContainer text-white text-center
        flex flex-col justify-center items-center mt-32 mb-16 rounded-xl'>
        <h1 className='text-4xl uppercase mb-4'>Contact</h1>
        <p className='ContactDescription'>
          Thank you for considering Task Remodeling and Home Repair for your home 
          renovation needs. We would be happy to provide you with a free consultation and 
          estimate for your project. If you have any questions or would like to schedule a 
          consultation, please don't hesitate to contact us. You can reach us by phone, email, 
          or by filling out the contact form on this page. We look forward to hearing from you 
          and helping you create the home of your dreams.</p>

          {/**Service areas include Mt. Vernon, Bellingham, Sedro-Woolley, Burlington, Arlington */}
      
          <div className='ContactSplashContainer w-3/4 text-white 
        flex flex-col justify-center items-center rounded-md pt-8 pb-8'>
        <h2 className='uppercase text-2xl'>Task Remodeling and Home Repair</h2>
        <p>_____________</p>
        <p className='mb-4'>Mt. Vernon, WA 98273</p>
        <p className='uppercase'>Give us a call!</p>
        <a href="tel: +4253217015"><p>Phone: (425) 321-7015</p></a>
        <p className='mt-4'>Hours:</p>
        <ul>
          <li>Mon: 8:00AM - 7:00 PM</li>
          <li>Tue: 8:00AM - 7:00 PM</li>
          <li>Wed: 8:00AM - 7:00 PM</li>
          <li>Thu: 8:00AM - 7:00 PM</li>
          <li>Fri: 8:00AM - 7:00 PM</li>
          <li>Sat: 8:00AM - 7:00 PM</li>
          <li>Sun: 8:00AM - 7:00 PM</li>
        </ul>
      </div>
      
        <ContactForm/>
      </motion.div>
      
      <div className='MessageContainer'>

      </div>

      <div className='ContactForm mb-32'>
      </div>

    </div>
  )
}

export default ContactPage
