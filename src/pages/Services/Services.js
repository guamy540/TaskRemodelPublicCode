import React from 'react'
import "./Services.css"

const Services = () => {
  return (
    <div className='ServicesPageContainer h-screen flex flex-col justify-center items-center bg-black'>
        <div className='ServicesSplashContainer text-white secondaryColorBackground
            flex flex-col justify-center items-center mt-32 mb-16 rounded-xl'>
            <h1 className='text-4xl uppercase mb-4'>Services</h1>
            <p>Task Remodeling and Home Repair offers a wide range of services to meet all of 
                your home renovation needs. Our team of experienced professionals specializes 
                in bathroom remodels, painting, roofing, decking, drywall, plumbing, tile, flooring, 
                doors, windows, and trim work. We understand that remodeling your home can be a daunting 
                task, which is why we work closely with our clients to create a design that fits their 
                style, budget, and timeline. From small updates to full-scale renovations, we have the 
                expertise to bring your home renovation dreams to life. Browse through our services and 
                let us know how we can help you create the home of your dreams. Contact us today to 
                schedule a consultation.</p>
        </div>
    </div>
    )
}

export default Services
