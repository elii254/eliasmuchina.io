import React from 'react'
import './about.css'
import ME from '../../assets/mee.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />

          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
            <FaAward className='about__icon'/> 
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>

            <article className='about__card'>
            <FiUsers className='about__icon'/> 
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>

            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/> 
              <h5>Projects</h5>
              <small>80+ Completed </small>
            </article>

          </div>

          <p>
          I am a full-stack software developer with experience building applications for both mobile and web platforms. 
          My technology stack includes Angular, Python, React JS, Vue JS, YII2, Laravel,  and Spring.
          I am also a seasoned UI/UX designer who has a keen eye for appealing, functional and easy to use interfaces. 
          I love applying both design and technical skills in every project I take on.
          </p>

          <a href='#contacts' className='btn btn-primary'>lets Talk</a>

        </div>

      </div>
    
    
    </section>
  )
}

export default About