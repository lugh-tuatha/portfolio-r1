import React from 'react'

import SectionHeader from '../section-header'

import * as Bs from "react-icons/bs";
import * as Gr from "react-icons/gr";

function Contacts() {
  return (
    <div className='mt-10 w-11/12 xl:w-9/12 mx-auto mb-80'>
      <SectionHeader>contacts</SectionHeader>

      <div className='mt-12 flex justify-between'>
        <p className='w-1/2 text-gray'>I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me</p>

        <div className='border-1 border-gray w-56 p-6'>
          <p className='font-bold text-white mb-2'>Message me here</p>
          <p className='flex items-center text-lg text-gray'><Bs.BsDiscord size={26}/><span className='ml-2'>acee#2916</span></p>
          <p className='flex items-center text-lg text-gray'><Gr.GrMail size={26}/><span className='ml-2'>acegabriasdom</span></p>
        </div>
      </div>
    </div>
  )
}

export default Contacts