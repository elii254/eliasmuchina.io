import React from 'react'
import './header.css'
import CTA  from './CTA'
import ME from '../../assets/mm.png'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Elias Muchina</h1>
       <h1 className="text-light">Fullstack Developer</h1>

       <CTA />

       <HeaderSocial />

       <div className="me">
        <img src={ME} alt="me" />
       </div>


      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>


    </header>
  )
}

export default Header