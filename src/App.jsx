import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import Socials from './components/socials'
import Hero from './components/hero'
import Projects from './components/projects'
import Skills from './components/skills'
import About from './components/about'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Socials />
      <Hero />
      <Projects/>
      <Skills />
      <About />
    </div>
  )
}

export default App
