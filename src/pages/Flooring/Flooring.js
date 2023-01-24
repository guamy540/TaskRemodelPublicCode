import React from 'react'
import "./Flooring.css"

const Flooring = () => {
  return (
    <div className='FloorPageContainer h-screen flex flex-col justify-center items-center bg-black'>
        <div className='FloorSplashContainer text-white secondaryColorBackground
            flex flex-col justify-center items-center mt-32 mb-16 rounded-xl'>
            <h1 className='text-4xl uppercase mb-4'>Flooring</h1>
            <p>Improve the look and durability of your home with new flooring from Task Remodeling 
              and Home Repair! We offer a wide variety of flooring options, including hardwood, 
              tile, laminate and more, to fit any style and budget. Our team of experienced professionals 
              will work with you to choose the perfect flooring for your home and install it 
              with precision and care. We take pride in our attention to detail and strive to 
              exceed our clients' expectations. Browse through our gallery of flooring projects 
              and let us help you create the floors of your dreams. Contact us today to schedule 
              a consultation.</p>
        </div>
    </div>
  )
}

export default Flooring
