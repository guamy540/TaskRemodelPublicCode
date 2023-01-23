import React from 'react'
import "./ContactPage.css"
import "../../assets/styles/colors.css"

const ContactPage = () => {
  return (
    <div className='ContactPageContainer mt-16 min-h-screen flex flex-col justify-center text-center items-center bg-black'>
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

      <div className='ContactForm'>
        
      </div>

    </div>
  )
}

export default ContactPage
