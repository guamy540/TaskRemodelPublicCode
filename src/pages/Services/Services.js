import React from 'react'
import {Bathroom, Exterior, Flooring} from "../../components/index.js"
import "./Services.css"

const Services = () => {
  return (
    <div className='ServicesPageContainer flex flex-col justify-center items-center bg-black'>
       
       {/**services splash */}
       <div className='ServicesSplashContainer text-white secondaryColorBackground
            flex flex-col justify-center items-center mt-32 rounded-xl'>
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
            <div className='ServicesPageLinks flex flex-wrap flex-row justify-center'>
              <a href="#bathroom"><button 
                className='p-4 m-4 bg-black text-white rounded-xl uppercase'>
                Bathroom
                </button></a>
                <a href="#flooring"><button 
                className='p-4 m-4 bg-black text-white rounded-xl uppercase'>
                Flooring
                </button></a>
                <a href="#exterior"><button 
                className='p-4 m-4 bg-black text-white rounded-xl uppercase'>
                Exterior
                </button></a>
            </div>
        </div>

      <div id="bathroom" className='mb-40'></div>
      <div className='SectionContainer'>
        <Bathroom/>
      </div>

      <div id="flooring" className='mb-40'></div>
      <div className='SectionContainer'>
        <Flooring/>
      </div>

      <div id="exterior" className='mb-40'></div>
      <div className='SectionContainer'>
        <Exterior/>
      </div>
      
    </div>
    )
}

export default Services
