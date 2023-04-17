import React from 'react'

import SectionHeader from '../section-header'

import EducationContainer from '../../assets/img/education-hero.png'

function Education() {
  return (
    <div className='mt-10 w-11/12 xl:w-9/12 mx-auto'>
      <SectionHeader>bootcamp experience</SectionHeader>

      <div className='mt-12 sm:flex justify-between'>
        <img src={EducationContainer} className='mb-8 sm:mb-0 lg:w-1/3 h-full' />

        <div className='sm:w-1/2'> 
          <div className='border-1 border-gray p-4 '>
            <p className='text-end text-primary text-sm font-thin opacity-70'>March 2023 - Present</p>
            <h1>Blockchain Developer Program</h1>
            <div className='w-20 bg-primary h-0.2 mt-1'></div>
            <p className='mt-4 text-gray'>Web3 developer bootcamp</p>
            <p className='mt-3 text-justify font-thin'>I am currently undertaking a Blockchain Development Bootcamp by Nas Daily to enhance my skills and knowledge in the field.</p>
          </div>

          <div className='border-1 border-gray p-4 mt-4'>
            <p className='text-end text-primary text-sm font-thin opacity-70'>Dec 2022 - March 2023</p>
            <h1>Kodego Bootcamp</h1>
            <div className='w-20 bg-primary h-0.2 mt-1'></div>
            <p className='mt-4 text-gray'>FullStack web development bootcamp</p>
            <p className='mt-3 text-justify font-thin'>I successfully completed a comprehensive and intensive bootcamp program where I gained a solid foundation in both front-end and back-end development, as well as valuable experience collaborating with other aspiring developers on challenging real-world projects.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education