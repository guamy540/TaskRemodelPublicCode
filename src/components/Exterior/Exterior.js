import React from 'react'
import "./Exterior.css"
import { placeHolderSmall } from '../../assets'

const Exterior = () => {
  return (
    <div className='ExteriorSplashContainer text-white secondaryColorBackground
      flex flex-col justify-center items-center mb-16 rounded-xl'>
      <h1 className='text-4xl uppercase mb-4 pt-8'>Exterior</h1>
      <div className='BathroomTextImageContainer row'>
        <div className='TextContainer column'>
          <p>Enhance the curb appeal of your home with exterior services from Task Remodeling 
          and Home Repair! Our team of experienced professionals specializes in exterior 
          updates, including siding, roofing, windows, and more. We understand that the exterior 
          of your home is the first thing people see, and we work closely with our clients to create 
          a design that fits their style and budget. Whether you're looking to update the look of your 
          home or improve its energy efficiency, we have the expertise to make it happen. Browse through 
          our gallery of exterior projects and let us help you create the perfect exterior for your home. 
          Contact us today to schedule a consultation.</p>
          <a href='/Gallery'><button className='mt-4  p-4 bg-black text-white uppercase w-32 rounded-xl'>
            Gallery
          </button></a>
        </div>
        <div className='ImageContainer column p-4' >
          <img src = {placeHolderSmall} alt='bathroomImage'/>
        </div>
      </div>
    </div>
  )
}

export default Exterior
