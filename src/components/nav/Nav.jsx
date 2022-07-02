import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdContactPhone} from 'react-icons/md'
import {useState} from 'react'


function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>

    <a href='#'  onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>

    <a href='#about'  onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>

    <a href='#experience'  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>

    <a href='#services'  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
    
    <a href='#contacts'  onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><MdContactPhone /></a>



   </nav>
  )
}

export default Nav