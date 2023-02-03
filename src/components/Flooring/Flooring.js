import React from 'react'
import "./Flooring.css"
import { floorDarkBrown } from '../../assets'

const Flooring = () => {
  return (
    <div className='FloorSplashContainer text-white secondaryColorBackground
        flex flex-col justify-center items-center rounded-xl'>
        <h1 className='text-4xl uppercase mb-4 pt-8'>Flooring</h1>
        <div className='BathroomTextImageContainer row'>
          <div className='TextContainer column'>
            <p>Improve the look and durability of your home with new flooring from Task Remodeling 
            and Home Repair! We offer a wide variety of flooring options, including hardwood, 
            tile, laminate and more, to fit any style and budget. Our team of experienced professionals 
            will work with you to choose the perfect flooring for your home and install it 
            with precision and care. We take pride in our attention to detail and strive to 
            exceed our clients' expectations. Browse through our gallery of flooring projects 
            and let us help you create the floors of your dreams. Contact us today to schedule 
            a consultation.</p>
          </div>
          <div className='ImageContainer column p-4'>
            <img classname='Image' src = {floorDarkBrown} alt='bathroomImage' className='rounded-lg'/>
            <a href='/Gallery'><button className='mt-4 p-4 text-white uppercase w-32 rounded-xl'>
            Gallery
            </button></a>
          </div>
        </div>
    </div>
  )
}

export default Flooring
