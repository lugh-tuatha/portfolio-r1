import React from 'react'

import SectionHeader from '../section-header'

import * as Bs from "react-icons/bs";
import * as Gr from "react-icons/gr";

function Contacts() {
  return (
    <div className='mt-10 w-11/12 xl:w-9/12 mx-auto'>
      <SectionHeader>contacts</SectionHeader>

      <div className='mt-12 md:flex justify-between'>
        <p className='w-full mb-8 md:mb-0 md:w-1/2 text-gray'>I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me</p>

        <div className='border-1 border-gray w-72 p-6 h-32'>
          <p className='font-bold text-white mb-2'>Message me here</p>
          <p className='flex items-center text-lg text-gray'><Bs.BsDiscord size={26}/><span className='ml-2'>acee#2916</span></p>
          <p className='flex items-center text-lg text-gray'><Gr.GrMail size={26}/><span className='ml-2'>acegabriel0710@g..</span></p>
        </div>
      </div>
    </div>
  )
}

export default Contacts