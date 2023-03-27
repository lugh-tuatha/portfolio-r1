import React from 'react'

import * as Ai from "react-icons/ai";

import skills from '../../data/skills'

function ProjectComponents() {
  return (
    <div className='border-1 border-gray w-1/5 my-10 min-w-min'>
      <img src="https://th.bing.com/th/id/OIG.RjM3NEEyRUY2RUVDMDNG?pcl=1b1a19&pid=ImgGn" className='w-full h-40 border-b-1 border-gray'/>

      <div className='border-b-1 border-gray p-2 font-thin'>
        React Vanilla CSS Vite
      </div>

      <div className='p-4'>
        <h2 className='text-xl font-semibold mb-2'>Nft.azriel</h2> 

        <p className='font-thin mb-2'>Nft marketplace</p>

        <div className="flex">
          <button className='border-1 border-primary py-1 px-4 mr-4 flex items-center gap-2 hover:bg-primary hover:bg-opacity-20'><span>Live</span><Ai.AiOutlineLink /> </button>
          <button className='border-1 border-gray py-1 px-4 flex items-center gap-2 hover:bg-gray hover:bg-opacity-20'><span>Repo</span><Ai.AiFillGithub /></button>
        </div>
      </div>
    </div>
  )
}

export default ProjectComponents