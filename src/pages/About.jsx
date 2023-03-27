import React from 'react'

import Navbar from '../components/navbar'
import SectionHeader from '../components/section-header'
import Footer from '../components/footer'
import Socials from '../components/socials'

import AboutHero from '../assets/svg/about-hero.svg'


function About() {
  return (
    <>
    <Navbar />
    <Socials />
    <div className='mt-10 w-11/12 xl:w-9/12 mx-auto'>
      <h1 className='text-3xl mb-3'><span className='text-primary'>/</span>about-me</h1>
      <p>Who am i?</p>

      <div className='lg:flex lg:justify-between mb-8'>
        <div className='lg:w-1/2 text-lg text-gray mt-12 text-justify'>
          <p className='mb-8'>Hello, i'm Ace!</p>
          <p className='mb-8'>My journey as a self-taught developer began in 9th grade with HTML and CSS, and although my learning wasn't consistent at first, my passion for coding was reignited in August 2022 and since then, I have continued to expand my skills in both front-end and back-end development, leading me to successfully complete the KodeGo Bootcamp and now looking forward to my next adventure as a developer.</p>

        </div>

        <img src={AboutHero} className='w-9/12 lg:w-1/3 mx-auto lg:mx-0'/>
      </div>

      <SectionHeader>skills</SectionHeader>
      <div className='flex gap-3 mb-12'>
        <div className='border-1 border-gray sm:w-52 sm:row-span-3 h-auto sm:h-28 mt-8'>
          <h1 className='border-b-1 p-2 font-bold text-white'>Languages</h1>
          <p className='p-2 font-thin text-gray'>Javascript, Java</p>
        </div>
      </div>

      <SectionHeader>my-fun-facts</SectionHeader>
      <div className="flex gap-3">
        <p className='border-1 p-2 mt-8'>I like winter more than summer</p>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default About