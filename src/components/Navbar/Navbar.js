import React, { useState } from "react";
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTelephoneFill} from 'react-icons/bs'
import "./Navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
        <nav className="Navbar" style={{zIndex:100}}>
          <a href= "/"><span className="nav-logo text-white pl-4">TASK_LOGO</span></a>
          <div className={`nav-items ${isOpen && "open"}`}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/bathroom">Bathroom</a>
            <a href="/flooring">Flooring</a>
            <a href="/exterior">Exterior</a>
            <a href="/services">Services</a>
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