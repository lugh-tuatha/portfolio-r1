import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import Socials from './components/socials'
import Hero from './components/hero'
import Projects from './components/projects'
import Skills from './components/skills'
import About from './components/about'
import Contacts from './components/contacts'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Socials />
      <Hero />
      <Projects/>
      <Skills />
      <About />
      <Contacts />
    </div>
  )
}

export default App
