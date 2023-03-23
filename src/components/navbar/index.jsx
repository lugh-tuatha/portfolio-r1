import React, { useState } from 'react'
import './navbar.css'

import * as Hi from "react-icons/hi2";

function Navbar() {
  return (
    <div className='container mx-auto '>
      <nav className='justify-between mt-6 hidden sm:flex'>
        <h1 className='self-center'>LOGO</h1>

        <ul className='flex gap-10'>
          <li className='text-lg font-light text-gray'><span className='text-primary font-bold'>#</span>home</li>
          <li className='text-lg font-light text-gray'><span className='text-primary font-bold'>#</span>works</li>
          <li className='text-lg font-light text-gray'><span className='text-primary font-bold'>#</span>about me</li>
          <li className='text-lg font-light text-gray'><span className='text-primary font-bold'>#</span>contacts</li>
        </ul>
      </nav>

      <nav className='flex sm:hidden justify-between mx-4 mt-6'>
        <h1 className='self-center'>LOGO</h1>
        
        <Hi.HiBars3BottomRight size={30}/>

        <ul className='hidden'>
          <li className='text-lg font-light text-gray'><span className='text-primary font-bold'>#</span>home</li>
          <li className='text-lg font-light text-gray'><span className='text-primary font-bold'>#</span>works</li>
          <li className='text-lg font-light text-gray'><span className='text-primary font-bold'>#</span>about me</li>
          <li className='text-lg font-light text-gray'><span className='text-primary font-bold'>#</span>contacts</li>
        </ul>
      </nav>
    
    </div>
  )
}

export default Navbar