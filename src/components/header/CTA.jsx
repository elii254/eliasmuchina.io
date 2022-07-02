import React from 'react'
import CV from '../../assets/cv.pdf'

function CTA() {
  return (
    <div className='cta'>
       <a href={CV}download className='btn'>Download CV</a>
       <a href="#contacts" className='btn btn-primary'>Lets Talk</a>

       
    </div>
  )
}

export default CTA