import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">

          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>

          <li>
               <BiCheck className='service__list-icon' />
              <p> Information architecture.</p> 
          </li>

          <li>
               <BiCheck className='service__list-icon' />
              <p> User Research - Focuses on understanding user behaviors, needs through observations.</p> 
          </li>

          <li>
               <BiCheck className='service__list-icon' />
              <p> UX Strategy.</p> 
          </li>

          <li>
               <BiCheck className='service__list-icon' />
              <p> Usability Testing - consists of evaluating a product by testing it with your target users .</p> 
          </li>

          

         

          </ul>

        </article>

         {/* END OF UI/UX*/}

         <article className="service">

          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>

          <li>
               <BiCheck className='service__list-icon' />
              <p> Custom Website Development.</p> 
          </li>

          <li>
               <BiCheck className='service__list-icon' />
              <p> Website Maintenance.</p> 
          </li>

          <li>
               <BiCheck className='service__list-icon' />
              <p> E-commerce Website Development.</p> 
          </li>

          <li>
               <BiCheck className='service__list-icon' />
              <p> Blog Customization or Management.</p> 
          </li>

          <li>
               <BiCheck className='service__list-icon' />
              <p> Graphic Design.</p> 
          </li>

          <li>
               <BiCheck className='service__list-icon' />
              <p> Word processing software.</p> 
          </li>

         

          </ul>

        </article>

         {/* END OF WEB DEVELOPMENT*/}


         <article className="service">

          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>

          <li>
               <BiCheck className='service__list-icon' />
              <p> Competitor Gap Content Outlines.</p> 
          </li>

          <li>
               <BiCheck className='service__list-icon' />
              <p> Long-form content.</p> 
          </li>

          <li>
               <BiCheck className='service__list-icon' />
              <p> Animated Explainer Videos.</p> 
          </li>

          <li>
               <BiCheck className='service__list-icon' />
              <p> Competitor Content Gap Intelligence Report.</p> 
          </li>

          <li>
               <BiCheck className='service__list-icon' />
              <p> Online project management schedule.</p> 
          </li>

          <li>
               <BiCheck className='service__list-icon' />
              <p> Inforgrapgics .</p> 
          </li>

         

          </ul>

        </article>
      

         {/* END OF CONTENT CREATION*/}

      </div>

      

      </section>
  )
}

export default Services