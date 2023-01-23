import React from 'react'
import "./Home.css"
import "../../assets/styles/colors.css"

const Home = () => {
  return (
    <main className='HomePageContainer'>
        <div className='SplashContainer background-tint h-screen text-right flex flex-col items-end justify-center'>
            <div className='pr-4 flex flex-col items-end justify-center'>
               <h1 className='text-white text-5xl uppercase'>Bringing your home renovation dreams to life</h1>
                <h2 className='text-white text-3xl pt-8 pb-8 uppercase'>Serving the community with pride</h2>
                <button className='secondaryColorBackground text-white p-4 
                    rounded-xl drop-shadow-xl w-36'
                    style={{zIndex:1}}>
                    CONTACT US
                </button>
            </div>
        </div>
        <div className='SplashDescriptionContainer w-full flex flex-col p-8 items-center text-center'>
                <h3 className='uppercase text-white text-2xl'>Start your dream home today!</h3>
                <h4 className='uppercase text-white text-xl pt-4'>Have your needs met with an experienced contractor</h4>
                <p className='HomeDescription 
                    text-white pt-4'> 
                    Welcome to Task Remodeling and Home Repair, your one-stop shop for 
                    all your home renovation needs. Our team of experienced professionals is 
                    dedicated to providing you with the highest quality workmanship and exceptional 
                    customer service. We understand that remodeling your home can be a daunting task, 
                    which is why we work closely with you to create a design that fits your style, 
                    budget, and timeline. From outside to inside renovations to additions and exterior 
                    updates, we have the expertise to bring your home renovation dreams to life. 
                    Trust us to handle all your home remodeling needs, from start to finish. 
                    Contact us today to schedule a consultation and let us help you create the home of 
                    your dreams!</p>
            </div>
    </main>
  )
}

export default Home
