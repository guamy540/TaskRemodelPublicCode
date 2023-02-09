import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTelephoneFill} from 'react-icons/bs'
import "./Header.css"

const Header = () => {
  return (
    <div className='HeaderContainer flex flex-row justify-center
      h-10 items-center' style={{zIndex:100}}>
       <a href="tel: 4253217015"><div className='NumberContainer flex flex-row items-center'>
        <BsTelephoneFill className='text-white mr-2'/>
        <p className='text-white'>(425) 321-7015</p>
      </div></a>
    </div>
  )
}

export default Header
