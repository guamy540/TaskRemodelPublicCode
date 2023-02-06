import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {frontHouse} from '../../assets/index.js'
import './Carousel.css'

const ImageCarousel = (props) => {

    const images = props.images;

    console.log(props, images);

  return (
    <div className='CarouselContainer'>
    <Carousel autoPlay interval ='5000' transitionTime="500" infiniteLoop
        dynamicHeight width={'75%'} >
        {images.data.initialdata.map((image, index) => (
            <div key={index} className="CarouselItemContainer">
                    <img src = {image.image}/>
            </div>
        ))}
    </Carousel>
    </div>
    
  )
}

export default ImageCarousel
