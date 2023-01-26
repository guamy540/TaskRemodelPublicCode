import React from 'react'
import "./Bathroom.css"
import {placeHolderSmall} from '../../assets/index.js'

const Bathroom = () => {
  return (
    <div className='BathroomSplashContainer text-white secondaryColorBackground
      flex flex-col justify-center items-center mb-16 rounded-xl'>
      <h1 className='text-4xl uppercase mb-4 pt-8'>Bathroom</h1>
      <div className='BathroomTextImageContainer row'>
        <div className='TextContainer column'>
          <p>Transform your bathroom with Task Remodeling and Home Repair! 
            Our team of experienced professionals specializes in bathroom remodels 
            of all sizes and styles. We understand that the bathroom is one of the 
            most important rooms in the house, and we work closely with our clients 
            to create a design that fits their needs, style and budget. From modernizing 
            the look of your bathroom to increasing its functionality, we have the expertise 
            to make it happen. Browse through our gallery of bathroom projects and let us help 
            you create the bathroom of your dreams. Contact us today to schedule a consultation.</p>
          <a href='/Gallery'><button className='mt-4 p-4 bg-black text-white uppercase w-32 rounded-xl'>
            Gallery
          </button></a>
        </div>
        <div className='ImageContainer column p-4'>
          <img src = {placeHolderSmall} alt='bathroomImage'/>
        </div>
      </div>
    </div>
  )
}

export default Bathroom
