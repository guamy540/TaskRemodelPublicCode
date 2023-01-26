import React from 'react'
import "./ContactPage.css"
import "../../assets/styles/colors.css"

const ContactPage = () => {
  return (
    <div className='ContactPageContainer mt-16 min-h-screen flex flex-col 
    justify-center text-center items-center bg-black'>
    
      <div className='ContactDescContainer text-white secondaryColorBackground text-center
        flex flex-col justify-center items-center mt-32 mb-16 rounded-xl w-3/4'>
        <h1 className='text-4xl uppercase mb-4'>Contact</h1>
        <p className='ContactDescription'>
          Thank you for considering Task Remodeling and Home Repair for your home 
          renovation needs. We would be happy to provide you with a free consultation and 
          estimate for your project. If you have any questions or would like to schedule a 
          consultation, please don't hesitate to contact us. You can reach us by phone, email, 
          or by filling out the contact form on this page. We look forward to hearing from you 
          and helping you create the home of your dreams.</p>
      </div>
      
      <div className='ContactSplashContainer w-3/4 secondaryColorBackground text-white 
        flex flex-col justify-center items-center rounded-md pt-8 pb-8'>
        <h2 className='uppercase text-2xl'>Task Remodeling and Home Repair</h2>
        <p>_____________</p>
        <p className='mb-4'>Mt. Vernon, WA 98273</p>
        <p className='uppercase'>Give us a call!</p>
        <p>Phone: (425) 321-7015</p>
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

      <div className='MessageContainer'>

      </div>

      <div className='ContactForm mb-32'>
        
      </div>

    </div>
  )
}

export default ContactPage