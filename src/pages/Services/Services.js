import React from 'react'
import {Bathroom, Exterior, Flooring} from "../../components/index.js"
import "./Services.css"
import { Link } from 'react-scroll'
import {motion} from 'framer-motion'

const Services = () => {
  return (
    <div className='ServicesPageContainer flex flex-col justify-center items-center bg-black'>
       
       {/**services splash */}
       <div className='ServicesSplashContainer text-white 
            flex flex-col justify-center items-center mt-32 rounded-xl'>
            <motion.div
                whileInView={{ opacity: [0, 3] }}
                transition={{ duration: 1 }}>
            <h1 className='text-4xl uppercase mb-4 p-4'>Services</h1>
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
            <Link
                activeClass="active"
                to="bathroom"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}><button 
                className='p-4 m-4 text-white rounded-xl uppercase'>
                Bathroom
                </button></Link>
                <Link
                activeClass="active"
                to="flooring"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}><button 
                className='p-4 m-4 text-white rounded-xl uppercase'>
                Flooring
                </button></Link>
                <Link
                activeClass="active"
                to="exterior"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>
                <button 
                className='p-4 m-4 text-white rounded-xl uppercase'>
                Exterior
                </button></Link>
            </div>
            </motion.div>
        </div>

      <div id="bathroom" className='mb-40'></div>
      <div className='SectionContainer'>
      <motion.div className='SectionContainer'
                whileInView={{ opacity: [0, 3] }}
                transition={{ duration: 1 }}><Bathroom/></motion.div>
      </div>

      <div id="flooring" className='mb-40'></div>
      <motion.div 
      whileInView={{ opacity: [0, 3] }}
      transition={{ duration: 1 }}
      className='SectionContainer'>
        <Flooring/>
      </motion.div>

      <div id="exterior" className='mb-40'></div>
      <motion.div 
      whileInView={{ opacity: [0, 3] }}
      transition={{ duration: 1 }}
      className='SectionContainer'>
        <Exterior/>
      </motion.div>
      
    </div>
    )
}

export default Services
