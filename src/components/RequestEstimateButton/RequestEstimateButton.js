import React from 'react'
import "./RequestEstimateButton.css"
import {BsTelephoneFill} from 'react-icons/bs'

const RequestEstimateButton = () => {
  return (
    <div>
      <a href="/contact" className='RequestEstimateLink'><button className='quoteButton text-white uppercase'>
        Request Estimate
      </button></a>
      <a href='tel: 4253217015'>
        <div className='CallNowContainer' style={{zIndex:1000}}>
          <button className='CallNowButton uppercase'>Call Now</button>
          <div>
            <BsTelephoneFill className='CallNowPhoneIcon'/>
          </div>
        </div>
      </a>
    </div>
  )
}

export default RequestEstimateButton
