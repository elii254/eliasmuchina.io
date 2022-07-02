import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'



function Contact() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_snhabwi', 'template_qzch43g', form.current, '57uidZDOhHwL1r52o')


      e.target.reset()
  };

  return (
    <section id='contacts'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>
      
      
      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>eliasmuchina254@gmail.com</h5>
            <a href="mailto:eliasmuchina254@gmail.com" target='-blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>@Elii254</h5>
            <a href="mailto:eliasmuchina254@gmail.com" target='-blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+254 796 284 552 </h5>
            <a href="https://api.whatsapp.com/send?phone+254 796 284 552 " target='-blank'>Send a message</a>
          </article>
        </div>

        {/*END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your email' required/>
          <textarea name="message"  rows="7" placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      
      </section>
  )
}

export default Contact