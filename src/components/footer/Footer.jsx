import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


function Footer() {
  return (
    <footer>
      <a href="" className="footer__logo">@ELii254</a>

      <ul className="permalinks">

       <li><a href="#">Home</a></li> 
       <li><a href="#about">About</a></li>
       <li><a href="#experience">Experience</a></li>
       <li><a href="#services">Services</a></li>
       <li><a href="#portfolio">Portfolio</a></li>
       <li><a href="#testmonials">Testmonials</a></li>
       <li><a href="#contacts">Contacts</a></li>

      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Elii254. All rights reserved</small>
      </div>


    </footer>
  )
}

export default Footer