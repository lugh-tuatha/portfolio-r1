import React from 'react'

import SectionHeader from '../section-header'
import Button from '../button'

import AboutHero from '../../assets/svg/about-hero.svg'

function About() {
  return (
    <div className='mt-20 w-11/12 xl:w-9/12 mx-auto'>
      <SectionHeader>about-me</SectionHeader>

      <div className='lg:flex lg:justify-between '>
        <div className='lg:w-1/2 text-lg text-gray mt-12 text-justify'>
          <p className='mb-8'>Hello, i'm Ace!</p>
          <p className='mb-8'>I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </p>
          <p className='mb-8'>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>

          <Button>Readmore</Button>
        </div>

        <img src={AboutHero} className='w-9/12 lg:w-1/3 mx-auto lg:mx-0'/>
      </div>
    </div>
  )
}

export default About