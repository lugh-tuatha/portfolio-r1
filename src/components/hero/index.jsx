import React from 'react'

import HeroImg from '../../assets/img/avatar.gif'

import Button from '../button'
import Quote from '../quote'

function Hero() {
  return (
    <div className='sm:mt-20 mt-4'>
      <div className='lg:flex gap-8 xl:gap-0 lg:w-11/12 xl:w-9/12 mx-auto mb-4 mt-24 xl:mt-0 '>
        
        <div className='md:w-10/12 lg:auto w-11/12 m-auto'>
          <h2 className='lg:text-4xl text-3xl font-semibold'>Ace is a <span className='text-primary'>front-end developer</span> with a passion for creating stunning and responsive websites.</h2>
          <p className='lg:text-2xl text-xl font-thin my-4'>He crafts responsive websites where technologies meet creativity</p>
          <Button>Contact me</Button>
        </div>

        <div className='mx-auto mt-8 w-11/12 '>
          <div className='flex justify-end w'>
            <img src={HeroImg} className='md:w-8/12 w-full self-end'/>
          </div>
          <div className="flex justify-end">
            <div className='w-76 text-lg font-thin h-8 flex items-center border-1 border-gray'> 
              <div className='w-4 h-4 bg-primary mx-1'></div>
              <p className='text-gray text-sm '>Currently working on <span className='text-white'>Portfolio</span> </p>
            </div>
          </div>
        </div>
      </div>
      <Quote />
    </div>
  )
}

export default Hero