import React from 'react'

import HeroImg from '../../assets/svg/hero.svg'

import Button from '../button'

function Hero() {
  return (
    <div className='m-auto h-screen'>
      <div className='flex justify-center'>
        <div className='w-1/2 my-auto'>
          <h2 className='text-4xl font-semibold'>Ace is a <span className='text-primary'>front-end developer</span> with a passion for creating stunning and responsive websites.</h2>
          <p className='text-2xl font-thin my-8'>He crafts responsive websites where technologies meet creativity</p>
          <Button>Contact me</Button>
        </div>

        <div>
          <img src={HeroImg} className='w-100 flex flex-row'/>
          <div className="flex justify-end">
            <div className='w-76 text-lg font-thin h-8 flex items-center border-1'> 
              <div className='w-4 h-4 bg-primary mx-1'></div>
              <p className='text-gray text-sm '>Currently working on <span className='text-white'>Portfolio</span> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero