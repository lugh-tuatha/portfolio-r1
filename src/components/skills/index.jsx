import React from 'react'

import SectionHeader from '../section-header'

import skillsHero from '../../assets/svg/skillsHero.svg'

function Skills() {
  return (
    <div className='mt-20 w-11/12 xl:w-9/12 mx-auto'>
      <SectionHeader>skills</ SectionHeader>
      
      <div className='flex mt-12 justify-between'>
        <div className="w-1/3 lg:block hidden">
          <img src={skillsHero} className="w-full"/>
        </div>

        <div className='grid gap-4 grid-rows-3 grid-flow-col'>
          <div className='border-1 border-gray sm:w-52 sm:row-span-3 h-auto sm:h-28'>
            <h1 className='border-b-1 p-2 font-bold text-white'>Languages</h1>
            <p className='p-2 font-thin text-gray'>Javascript, Java</p>
          </div>

          <div className='border-1 border-gray sm:w-52 h-auto sm:h-28'>
            <h1 className='border-b-1 p-2 font-bold text-white'>Database</h1>
            <p className='p-2 font-thin text-gray'>MySql, Mongo</p>
          </div>

          <div className='border-1 border-gray sm:w-52 h-auto sm:h-28 sm:row-span-2'>
            <h1 className='border-b-1 p-2 font-bold text-white'>Other</h1>
            <p className='p-2 font-thin text-gray'>HTML, CSS, SCSS</p>
          </div>

          <div className='border-1 border-gray sm:w-52 h-auto sm:h-28'>
            <h1 className='border-b-1 p-2 font-bold text-white'>Server side</h1>
            <p className='p-2 font-thin text-gray'>Node, Express</p>
          </div>

          <div className='border-1 border-gray sm:w-52 h-auto sm:h-28'>
            <h1 className='border-b-1 p-2 font-bold text-white'>Frameworks</h1>
            <p className='p-2 font-thin text-gray'>React, Tailwind, Bootstrap, Vite</p>
          </div>

          <div className='border-1 border-gray sm:w-52 h-auto sm:h-28'>
            <h1 className='border-b-1 p-2 font-bold text-white'>Tools</h1>
            <p className='p-2 font-thin text-gray'>VSCode, Git</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills