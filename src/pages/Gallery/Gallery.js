import React, {useState} from 'react'
import "./Gallery.css"
import GalleryData from './GalleryData'
import {TfiClose} from 'react-icons/tfi'
import {motion} from 'framer-motion'

const Gallery = () => {

  const [model, setModel] = useState(false);
  const[tempimgSrc, setTempImgSrc] = useState('');

  const getImg=(imgBig)=>{
      setTempImgSrc(imgBig);
      setModel(true);
  }

  return (
      <div className='GalleryPageContainer flex flex-col justify-center items-center bg-black'>

        <div className='GallerySplashContainer text-white
            flex flex-col justify-center items-center mt-32 mb-16 rounded-xl'>
         <h1 className='text-4xl uppercase mb-4'>Gallery</h1>
          <p className='GalleryDescription'>At Task Remodeling and Home Repair, we take great pride in the work we do. 
            We invite you to take a look at our portfolio and see for yourself the quality 
            of our work. From kitchen and bathroom renovations to additions and exterior updates, 
            our team has the experience and expertise to bring your home renovation dreams to life.
            Each project is unique and we work closely with our clients to ensure that the final
            product is exactly what they envisioned. Browse through our gallery and let us know 
            if you have any questions or would like to schedule a consultation for your next 
            project.</p>
        </div>

      </div>
  )
}

export default Gallery
