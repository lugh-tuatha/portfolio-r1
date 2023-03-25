import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import Socials from './components/socials'
import Hero from './components/hero'
import Projects from './components/projects'
import Skills from './components/skills'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Socials />
      <Hero />
      <Projects />
      <Skills />
    </div>
  )
}

export default App
