import React from 'react'
import "./ReviewsPage.css"
import "../../assets/styles/colors.css"
import { reviews } from './Reviews'

const ReviewsPage = () => {


  return (
    <div className='ReviewsPageContainer flex flex-col justify-center items-center bg-black'>
      <div className='ReviewsSplashContainer text-white secondaryColorBackground
        flex flex-col justify-center items-center mt-32 mb-16 rounded-xl'>
        <h1 className='text-4xl uppercase'>Reviews</h1>
      </div>
      <div className='reviewsDisplay mb-16 w-3/4'>
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
