import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from  './components/portfolio/Portfolio'
import Testmonials from './components/testimonials/Testimonials'
import Contacts from './components/contacts/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <Header/>
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testmonials />
    <Contacts />
    <Footer />
    
    </>
  )
}

export default App