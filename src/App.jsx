import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import Socials from './components/socials'
import Hero from './components/hero'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Socials />
      <Hero />
    </div>
  )
}

export default App
