import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import Socials from './components/socials'
import Hero from './components/hero'
import Projects from './components/projects'
import Skills from './components/skills'
import About from './components/about'
import Contacts from './components/contacts'
import Footer from './components/footer'
import Education from './components/education'
import Certification from './components/certification'
import Testimonial from './components/testimonial'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Socials />
      <Hero />
      <Projects/>
      <Skills />
      <About />
      <Education />
      <Certification />
      <Testimonial />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
