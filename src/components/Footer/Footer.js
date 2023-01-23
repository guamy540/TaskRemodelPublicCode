import React from 'react'
import "./Footer.css"
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {MdCopyright} from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='FooterContainer flex flex-row text-white justify-between items-center'>
      <div className='flex flex-row pl-4'>
        <FaFacebook className='mr-2'/>
        <FiInstagram/>
      </div>
      <div className='flex flex-col items-center justify-center pt-2 pb-2'>
        <p className='text-xs'>Copyright © 2023 Task Remodeling, all rights reserved </p>
        <p className='text-xs'> Mt. Vernon, WA 98273</p>
      </div>
      {/*The placeholder is used for centering purposes*/}
      <div className='placeholder'></div>
    </footer>
  )
}

export default Footer
