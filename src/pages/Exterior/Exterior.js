import React from 'react'
import "./Exterior.css"

const Exterior = () => {
  return (
    <div>
      <div className='ExteriorPageContainer h-screen flex flex-col justify-center items-center bg-black'>
            <div className='ExteriorSplashContainer text-white secondaryColorBackground
                flex flex-col justify-center items-center mt-32 mb-16 rounded-xl'>
                <h1 className='text-4xl uppercase mb-4'>Exterior</h1>
                <p>Enhance the curb appeal of your home with exterior services from Task Remodeling 
                  and Home Repair! Our team of experienced professionals specializes in exterior 
                  updates, including siding, roofing, windows, and more. We understand that the exterior 
                  of your home is the first thing people see, and we work closely with our clients to create 
                  a design that fits their style and budget. Whether you're looking to update the look of your 
                  home or improve its energy efficiency, we have the expertise to make it happen. Browse through 
                  our gallery of exterior projects and let us help you create the perfect exterior for your home. 
                  Contact us today to schedule a consultation.</p>
            </div>
        </div>
    </div>
  )
}

export default Exterior
