import React, { useState } from 'react'

import * as Hi from "react-icons/hi2";
import * as Fa from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='container mx-auto'>
      <nav className='justify-between mt-6 hidden sm:flex'>
        <h1 className='self-center'>LOGO</h1>

        <ul className='flex gap-10'>
          <li className='text-lg font-light text-gray'><a href='#home'><span className='text-primary font-bold'>#</span>home</a></li>
          <li className='text-lg font-light text-gray'><a href='#works'><span className='text-primary font-bold'>#</span>works</a></li>
          <li className='text-lg font-light text-gray'><a href='#about'><span className='text-primary font-bold'>#</span>about me</a></li>
          <li className='text-lg font-light text-gray'><a href='#contacts'><span className='text-primary font-bold'>#</span>contacts</a></li>
        </ul>
      </nav>

      <nav className='flex sm:hidden justify-between mx-4 mt-6'>
        <h1 className='self-center'>LOGO</h1>

        <button>
          <Hi.HiBars3BottomRight size={30} onClick={toggleMenu} />
        </button>

        <ul className={`absolute top-16 left-0 w-full h-screen bg-background ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li className='ml-4'><a href='#home' onClick={toggleMenu} className='font-light text-gray text-2xl'><span className='text-primary font-bold'>#</span>home</a></li>
          <li className='mt-2 ml-4'><a href='#works' onClick={toggleMenu} className='font-light text-gray text-2xl'><span className='text-primary font-bold'>#</span>works</a></li>
          <li className='mt-2 ml-4'><a href='#about' onClick={toggleMenu} className='font-light text-gray text-2xl'><span className='text-primary font-bold'>#</span>about me</a></li>
          <li className='mt-2 ml-4'><a href='#contacts' onClick={toggleMenu} className='font-light text-gray text-2xl'><span className='text-primary font-bold'>#</span>contacts</a></li>
        
          <div className='flex justify-center'>
            <Fa.FaGithubSquare size={36} className="mt-4 text-gray cursor-pointer"/>
            <Fa.FaLinkedin size={36} className="mt-4 text-gray cursor-pointer"/>
          </div>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar
