import React, { useState } from "react";
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTelephoneFill} from 'react-icons/bs'
import "./Navbar.css";
import { logoText } from "../../assets";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
        <nav className="Navbar" style={{zIndex:100}}>
          <a href= "/"><img src={logoText}/></a>
          <div className={`nav-items ${isOpen && "open"}`}>
            <a href="/">Home</a>
            <a href="/about">Why Us</a>
            <a href="/services">Services</a>
            <a href="/gallery">Gallery</a>
            <a href="/reviews">Reviews</a>
            <a href="/contact">Contact</a>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"} mr-4`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </nav>  
  );
};

export default Navbar;