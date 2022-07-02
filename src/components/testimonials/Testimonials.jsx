import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';





const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: '"Amazing work, great communication. Fast learner and picked up the business quickly. Looking forward to working with Elias again in the future!" ',
 },
 {
  avatar:AVTR2,
  name: 'John Doe',
  review: 'Elias was an A++ freelancer and team member and I would highly recommend to anyone. I will definitely hire him again and look forward to further and future collaboration!',
},
{
  avatar: AVTR3,
  name: 'Godana Mamo',
  review: 'Elias is a very talented fullstack developer, he takes the time to understand the requirements and gets it done right the first time.  Very polite and professional.  Great talent who I will continue to work with in the future. Thanks Elias ',
},
{
  avatar:AVTR4,
  name: 'Ethan Masuella',
  review: 'Elias was a critical part of our team and I would highly recommend him to anyone looking for a reliable and experienced software engineer.  I would definitely work with him again! ',
}
  

]






function Testimonials() {
  return (
    <section id='testmonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      
      <Swiper className="container testimonials__container"
      
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}

      >

       {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avater">
              <img src={avatar}  />
              
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'> {review}</small>
          </SwiperSlide>
          )
        })
       }

        

      </Swiper>
      </section>
  )
}

export default Testimonials