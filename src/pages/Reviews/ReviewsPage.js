import React from 'react'
import "./ReviewsPage.css"
import "../../assets/styles/colors.css"
import { reviews } from './Reviews'

const ReviewsPage = () => {


  return (
    <div className='ReviewsPageContainer flex flex-col justify-center items-center bg-black'>
      
      <div className='ReviewsSplashContainer text-white secondaryColorBackground text-justify
        flex flex-col justify-center items-center mt-32 mb-16 rounded-xl w-3/4'>
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
                    <p className='text-white'>{review.name}</p>
                    <p className=''>{review.text} </p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ReviewsPage
