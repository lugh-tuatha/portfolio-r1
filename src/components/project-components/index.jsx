import React from 'react'

import * as Ai from "react-icons/ai";

function ProjectComponents() {
  return (
    <div className='border-1 border-gray w-1/5 my-10'>
      <img src="https://th.bing.com/th/id/OIG.RjM3NEEyRUY2RUVDMDNG?pcl=1b1a19&pid=ImgGn" className='w-full h-40 border-b-1 border-gray'/>

      <div className='border-b-1 border-gray p-2 font-thin'>
        HTML SCSS Javascript Node
      </div>

      <div className='p-4'>
        <h2 className='text-xl font-semibold mb-2'>ChertNodes</h2> 

        <p className='font-thin mb-2'>Minecraft servers </p>

        <div className="flex">
          <button className='border-1 border-primary py-1 px-4 mr-4 flex items-center gap-2 hover:bg-primary hover:bg-opacity-20'><span>Live</span><Ai.AiOutlineLink /> </button>
          <button className='border-1 border-gray py-1 px-4 flex items-center gap-2 hover:bg-gray hover:bg-opacity-20'><span>Repo</span><Ai.AiFillGithub /></button>
        </div>
      </div>
    </div>
  )
}

export default ProjectComponents