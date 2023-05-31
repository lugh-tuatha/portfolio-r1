import React from 'react'

import SectionHeader from '../section-header'
import Button from '../button'

import AboutHero from '../../assets/img/me.jpg'

import { Link } from "react-router-dom";

import * as Bs from "react-icons/bs";

function About() {
  return (
    <div className='content-width' id='about'>
      <SectionHeader>about-me</SectionHeader>

      <div className='lg:flex lg:justify-between '>
        <div className='lg:w-4/6 text-lg text-gray mt-12 text-justify'>
          <p className='mb-8'>Hello, i'm Ace!</p>
          <p className='mb-8'>My journey as a self-taught developer began in 9th grade with HTML and CSS, and although my learning wasn't consistent at first, my passion for coding was reignited in August 2022 and since then, I have continued to expand my skills in both front-end and back-end development, leading me to successfully complete the KodeGo Bootcamp and now looking forward to my next adventure as a developer.</p>

          <Link to="/about"><Button>Readmore <Bs.BsArrowRight size={22} className="inline"/></Button></Link>
        </div>

        <img src={AboutHero} className='w-11/12 lg:w-1/4 mx-auto mt-4 lg:mt-0 lg:mx-0 rounded-xl'/>
      </div>
    </div>
  )
}

export default About