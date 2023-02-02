import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTelephoneFill} from 'react-icons/bs'
import "./Header.css"

const Header = () => {
  return (
    <div className='HeaderContainer flex flex-row bg-amber-800 justify-between 
      h-10 items-center' style={{zIndex:100}}>
      <div className='SocialContainer flex flex-row pl-4'>
        <FaFacebook className='FacebookLogo mr-2 text-white'/>
        <FiInstagram className='InstagramLogo text-white'/>
      </div>
      <div className='NumberContainer flex flex-row mr-8'>
        <a href="tel: +4253217015"><BsTelephoneFill className='text-white mr-2'/>
        <p className='text-white'>(425) 321-7015</p></a>
      </div>
    </div>
  )
}

export default Header
