import React, {useState} from 'react'
import {motion} from 'framer-motion'
import "./Home.css"
import "../../assets/styles/colors.css"
import HomeGalleryData from './HomeGalleryData'
import {TfiClose} from 'react-icons/tfi'

const Home = () => {
  
  const [model, setModel] = useState(false);
  const[tempimgSrc, setTempImgSrc] = useState('');

  const getImg=(imgBig)=>{
      setTempImgSrc(imgBig);
      setModel(true);
  }

  return (
    <main className='HomePageContainer'>
      <div className='SplashContainer background-tint h-screen text-right flex flex-col items-end justify-center'>
          <div className='pr-4 flex flex-col items-end justify-center'>
              <h1 className='text-white text-5xl uppercase'>Bringing your home renovation dreams to life</h1>
              <h2 className='text-white text-3xl pt-8 pb-8 uppercase'>Serving the community with pride</h2>
              <a href="/contact"><button className='secondaryColorBackground text-white p-4 
                  rounded-xl drop-shadow-xl w-36'
                  style={{zIndex:1}}>
                  CONTACT US
              </button></a>
          </div>
      </div>

      <div className='SplashDescriptionContainer w-full flex flex-col p-8 items-center text-justify'>
        <h3 className='uppercase text-white text-center text-3xl'>Start your dream home today!</h3>
        <h4 className='uppercase text-white text-2xl pt-4 text-center'>Have your needs met with an experienced contractor</h4>
        <p className='HomeDescription 
            text-white pt-4'> 
            Welcome to Task Remodeling and Home Repair, where we turn your home renovation 
            nightmares into dreams come true! Our team of experienced professionals will work 
            with you to turn your ordinary home into something extraordinary. With our years 
            of experience, we've seen it all - and we're not scared! From kitchen and bathroom 
            remodels, to roofing and decking, we've got you covered. Don't believe us? Take a 
            look at our portfolio and see for yourself. We promise not to disappoint. So why wait? 
            Contact us today and let's make your home the envy of the neighborhood!
            {/*Alternate Description: Welcome to Task Remodeling and Home Repair, your one-stop shop for 
            all your home renovation needs. Our team of experienced professionals is 
            dedicated to providing you with the highest quality workmanship and exceptional 
            customer service. We understand that remodeling your home can be a daunting task, 
            which is why we work closely with you to create a design that fits your style, 
            budget, and timeline. From outside to inside renovations to additions and exterior 
            updates, we have the expertise to bring your home renovation dreams to life. 
            Trust us to handle all your home remodeling needs, from start to finish. 
            Contact us today to schedule a consultation and let us help you create the home of 
            your dreams!*/}</p>
        </div>

      <section className='bg-black text-center pb-4'>  
        <h2 className='text-white pt-8 text-4xl uppercase'>Take a look at some of our work!</h2>
        <div className='HomeGalleryContainer'>
          {HomeGalleryData.data.initialdata.map((item, index) => {
            return (
              <motion.div key={index} 
              className='HomeGalleryImages' 
              whileHover={{scale: 1.5,}}
              onClick={() => getImg(item.image)}>
                <img src={item.image} className='rounded-md hgImage' alt={item.text}/>
              </motion.div>
            )
          })}
        </div>
        <p className='text-white text-xl'>Still not convinced? Check out our 
          <span><a href="./gallery">
            <button className='secondaryColorBackground p-4 uppercase rounded-xl ml-4 mr-4'>
            Gallery
            </button></a></span>
          to see more!
        </p>
      </section>

      <div className= {model? "model open" : "model"}>
          <img src={tempimgSrc} alt="enlarged"/>
          <TfiClose onClick={() => setModel(false)}/>
      </div>

    </main>
  )
}

export default Home
