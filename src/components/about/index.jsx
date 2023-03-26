import React from 'react'

import SectionHeader from '../section-header'
import Button from '../button'

import AboutHero from '../../assets/svg/about-hero.svg'

import { Link } from "react-router-dom";

function About() {
  return (
    <div className='mt-20 w-11/12 xl:w-9/12 mx-auto'>
      <SectionHeader>about-me</SectionHeader>

      <div className='lg:flex lg:justify-between '>
        <div className='lg:w-1/2 text-lg text-gray mt-12 text-justify'>
          <p className='mb-8'>Hello, i'm Ace!</p>
          <p className='mb-8'>My journey as a self-taught developer began in 9th grade with HTML and CSS, and although my learning wasn't consistent at first, my passion for coding was reignited in August 2022 and since then, I have continued to expand my skills in both front-end and back-end development, leading me to successfully complete the KodeGo Bootcamp and now looking forward to my next adventure as a developer.</p>

          <Link to="/about"><Button>Readmore</Button></Link>
        </div>

        <img src={AboutHero} className='w-9/12 lg:w-1/3 mx-auto lg:mx-0'/>
      </div>
    </div>
  )
}

export default About