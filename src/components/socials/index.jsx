import React from 'react'

import * as Hi from "react-icons/hi2";
import * as Fa from "react-icons/fa";

function Socials() {
  return (
    <div>
      <div className='w-0.1 h-40 bg-gray ml-11 absolute top-0'></div>

    <div className='absolute top-40 left-7.5 mt-1'>
      <Fa.FaGithubSquare size={36} className="text-gray cursor-pointer"/>
      <Fa.FaLinkedin size={36} className="text-gray cursor-pointer mt-1"/>
    </div>

    </div>

    
  )
}

export default Socials