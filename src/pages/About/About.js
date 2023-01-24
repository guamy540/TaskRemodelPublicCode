import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div>
      <div className='AboutPageContainer h-screen flex flex-col justify-center items-center bg-black'>
            <div className='AboutSplashContainer text-white secondaryColorBackground
                flex flex-col justify-center items-center mt-32 mb-16 rounded-xl'>
                <h1 className='text-4xl uppercase mb-4'>About</h1>
                <p>Task Remodeling and Home Repair is a family-owned and operated home remodeling 
                  company located in Washington state. Our owner has been in the business of 
                  remodeling houses for years, and has developed a deep understanding of the industry 
                  and the needs of his clients. We pride ourselves on providing the highest quality 
                  workmanship and exceptional customer service. Our team of experienced professionals 
                  is dedicated to creating the perfect home renovation for each of our clients. 
                  We understand that remodeling your home can be a daunting task, which is why we work 
                  closely with our clients to create a design that fits their style, budget, and timeline. 
                  Trust us to handle all your home remodeling needs, from start to finish. Contact us 
                  today to schedule a consultation and let us help you create the home of your dreams.</p>
            </div>
        </div>
    </div>
  )
}

export default About