import React from 'react'
import "./About.css"
import { deckOutside } from '../../assets'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div>
      <section className='AboutPageContainer flex flex-col justify-center items-center bg-black'>
            <div className='AboutSplashContainer text-white 
                flex flex-col justify-center items-center mt-32 rounded-xl'>
                <motion.div
                whileInView={{ opacity: [0, 3] }}
                transition={{ duration: 1 }}>

                <h1 className='text-4xl uppercase mb-4'>About</h1>
                <p className=''>Task Remodeling and Home Repair is a family-owned and operated home remodeling 
                  company located in Washington state. Our owner has been in the business of 
                  remodeling houses for years, and has developed a deep understanding of the industry 
                  and the needs of his clients. We pride ourselves on providing the highest quality 
                  workmanship and exceptional customer service. Our team of experienced professionals 
                  is dedicated to creating the perfect home renovation for each of our clients. 
                  We understand that remodeling your home can be a daunting task, which is why we work 
                  closely with our clients to create a design that fits their style, budget, and timeline. 
                  Trust us to handle all your home remodeling needs, from start to finish. Contact us 
                  today to schedule a consultation and let us help you create the home of your dreams.</p>
                </motion.div>
            </div>
        </section>

        
      <section className='flex flex-col justify-center items-center bg-black'>
            <div className='AboutSplashContainer text-white 
                flex flex-col justify-center items-center mb-16 mt-16 rounded-xl'>
                <motion.div
                whileInView={{ opacity: [0, 3] }}
                transition={{ duration: 1 }}>
                <h1 className='text-4xl uppercase mb-4'>Meet Rob</h1>
                <div className='row'>
                  <div className='meetRobText column'>
                    <p className=''>Rob Macfarlane is the founder of Task Remodeling and Home Repair, a company dedicated to transforming living spaces in the community. With years of experience in the home remodeling industry, Rob has a passion for bringing new life to homes, and a talent for creating beautiful and functional spaces that exceed his clients' expectations.
                    <br/><br/>
                    Rob's expertise extends to a wide range of home remodeling services, including kitchen and bathroom remodeling, home additions, and complete home renovations. He is a master at working with different styles and budgets, and is always up for a challenge.
                    <br/><br/>
                    In addition to his technical skills, Rob is known for his attention to detail and commitment to customer service. He takes the time to understand his clients' needs and preferences, and works closely with them to bring their vision to life.
                    <br/><br/>
                    When he's not busy transforming homes, Rob enjoys spending time with his family and giving back to the community. He is active in local organizations and is always looking for new ways to make a positive impact in the lives of those around him.
                    </p>
                  </div>
                  <div className='column'>
                    <img src={deckOutside} alt='profile' className='rounded-lg'/>
                  </div>          
                </div>
                </motion.div>
            </div>
        </section>
    </div>
  )
}

export default About