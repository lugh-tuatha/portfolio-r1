import React from 'react'

import * as Fa from "react-icons/fa";

function Footer() {
  return (
    <div className='mt-10 border-t-2 border-gray'>
      <div className='mt-8 w-11/12 xl:w-9/12 mx-auto'>

        <div className=" sm:flex justify-between">
          <div>
            <h1>LOGO <span className='text-gray'>acegabriel0710@gmail.com</span></h1>
            <p className='my-2 sm:mt-6'>front-end developer</p>
          </div>

          <div>
            <h1 className='text-xl'>Media</h1>

            <div className="flex gap-2 mt-2 sm:mt-4">
              <Fa.FaGithubSquare size={36} className="text-gray cursor-pointer"/>
              <Fa.FaLinkedin size={36} className="text-gray cursor-pointer"/>
              <Fa.FaTwitterSquare size={36} className="text-gray cursor-pointer"/>
            </div>
          </div>
        </div>

        <p className='text-center mt-20 mb-4 text-gray'>© Copyright 2023. Made by Ace</p>
      </div>
    </div>
  )
}

export default Footer