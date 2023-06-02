import React from 'react'

import SectionHeader from '../section-header'

import skillHero from '../../assets/svg/skills-hero.svg'


function Skills() {
  return (
    <div className='content-width'>
      <SectionHeader>skills</ SectionHeader>
      
      <div className='md:flex mt-4 justify-between'>
        <div className="w-full mb-4 md:mb-0 md:w-1/3">
          <img src={skillHero} className="w-full"/>
        </div>

        <div className='grid gap-4 grid-rows-3 grid-flow-col'>
          <div className='border-1 border-primary sm:w-52 sm:row-span-3 h-auto sm:h-28'>
            <h1 className='border-b-1 border-primary p-2 font-bold text-white'>Languages</h1>
            <p className='p-2 font-thin text-gray'>Javascript, Java, PHP</p>
          </div>

          <div className='border-1 border-gray sm:w-52 h-auto sm:h-28'>
            <h1 className='border-b-1  p-2 font-bold text-white'>Database</h1>
            <p className='p-2 font-thin text-gray'>MySql, Mongo</p>
          </div>

          <div className='border-1 border-primary sm:w-52 h-auto sm:h-28 sm:row-span-2'>
            <h1 className='border-b-1 border-primary p-2 font-bold text-white'>Other</h1>
            <p className='p-2 font-thin text-gray'>HTML, CSS, SCSS, EJS, Vite, UnoCSS</p>
          </div>

          <div className='border-1 border-primary sm:w-52 h-auto sm:h-28'>
            <h1 className='border-b-1 p-2 border-primary  font-bold text-white'>Server side</h1>
            <p className='p-2 font-thin text-gray'>Node, Express</p>
          </div>

          <div className='border-1 border-gray sm:w-52 h-auto sm:h-28'>
            <h1 className='border-b-1 p-2 font-bold text-white'>Frameworks</h1>
            <p className='p-2 font-thin text-gray'>React, Tailwind, Bootstrap, Laravel</p>
          </div>

          <div className='border-1  border-primary sm:w-52 h-auto sm:h-28'>
            <h1 className='border-b-1 border-primary p-2 font-bold text-white'>Tools</h1>
            <p className='p-2 font-thin text-gray'>VSCode, Git, Postman, Xampp</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills