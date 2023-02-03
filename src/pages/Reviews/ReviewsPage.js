import React from 'react'
import "./ReviewsPage.css"
import "../../assets/styles/colors.css"
import { reviews } from './Reviews'
import {motion} from 'framer-motion'

const ReviewsPage = () => {


  return (
    <div className='ReviewsPageContainer flex flex-col justify-center items-center bg-black'>
      <motion.div className='flex flex-col justify-center items-center'
      whileInView={{ opacity: [0, 3] }}
      transition={{ duration: 1 }}>

   
      <div className='ReviewsSplashContainer text-white
        flex flex-col justify-center items-center mt-32 mb-16 rounded-xl '>
        <h1 className='text-4xl uppercase mb-4'>Reviews</h1>
        <p className='ReviewsDescription'>At Task Remodeling and Home Repair, customer satisfaction is our 
          top priority. We take pride in the work we do and strive to exceed our clients' 
          expectations on every project. We invite you to take a look at some of the reviews 
          from our satisfied clients. These reviews are a testament to the quality of our work 
          and the dedication of our team. We are grateful for the trust our clients have placed 
          in us and we look forward to helping you create the home of your dreams.</p>
      </div>

      <div className='reviewsDisplay mb-64 w-3/4'>
        {reviews.map((review) => {
            return(
                <div key={review.id} className='text-white flex flex-col text-center mb-8'>
                    <p className='text-white'>★★★★★</p>
                    <p className='text-white text-2xl'>{review.name}</p>
                    <p className=''>{review.text} </p>
                </div>
            )
        })}
      </div>  
      </motion.div>
    </div>
  )
}

export default ReviewsPage
