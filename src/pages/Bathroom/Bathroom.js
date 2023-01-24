import React from 'react'
import "./Bathroom.css"

const Bathroom = () => {
  return (
    <div>
      <div className='BathroomPageContainer h-screen flex flex-col justify-center items-center bg-black'>
            <div className='BathroomSplashContainer text-white secondaryColorBackground
                flex flex-col justify-center items-center mt-32 mb-16 rounded-xl'>
                <h1 className='text-4xl uppercase mb-4'>Bathroom</h1>
                <p>Transform your bathroom with Task Remodeling and Home Repair! 
                  Our team of experienced professionals specializes in bathroom remodels 
                  of all sizes and styles. We understand that the bathroom is one of the 
                  most important rooms in the house, and we work closely with our clients 
                  to create a design that fits their needs, style and budget. From modernizing 
                  the look of your bathroom to increasing its functionality, we have the expertise 
                  to make it happen. Browse through our gallery of bathroom projects and let us help 
                  you create the bathroom of your dreams. Contact us today to schedule a consultation.</p>
            </div>
        </div>
    </div>
  )
}

export default Bathroom
