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

        <motion.div 
        whileInView={{ opacity: [0, 3] }}
        transition={{ duration: 1 }}
        className='GallerySplashContainer text-white
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
        </motion.div>

        <div className='GalleryCollectionContainer text-center'>
          {GalleryData.data.initialdata.map((item, index) => {
            return(
              <motion.div
             whileInView={{ opacity: [0, 3] }}
             transition={{ duration: 1 }}
              key={index} className="GalleryImageContainer">
                <img src={item.image} alt="work" onClick={() => getImg(item.image)}/>
              </motion.div>
            )
          })}
          <p className='text-white text-xs m-4 '>Be advised some of the photos above were taken while the owner was employed at another company.</p>
        </div>

        <div className= {model? "model open" : "model"}>
          <img src={tempimgSrc} alt="enlarged"/>
          <TfiClose onClick={() => setModel(false)}/>
      </div>

      </div>
  )
}

export default Gallery
