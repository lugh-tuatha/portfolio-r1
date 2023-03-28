import React from 'react'

import * as Ai from "react-icons/ai";

function ProjectComponents({languages, title, desc, live, repo, cover}) {
  return (
    <div className='border-1 border-gray mt-12'>
      <img src={cover} className='w-full h-64 border-b-1 border-gray'/>

      <div className='border-b-1 border-gray p-2 font-thin h-15 sm:h-24 md:h-20'>
        {languages}
      </div>

      <div className='p-4 h-32'>
        <h2 className='text-xl font-semibold mb-2'>{title}</h2> 

        <p className='font-thin mb-2'>{desc}</p>
      </div>

      <div className="flex p-4">
        <a href={live}><button className='border-1 border-primary py-1 px-4 mr-4 flex items-center gap-2 hover:bg-primary hover:bg-opacity-20'><span>Live</span><Ai.AiOutlineLink /> </button></a>
        <a href={repo}><button className='border-1 border-gray py-1 px-4 flex items-center gap-2 hover:bg-gray hover:bg-opacity-20'><span>Repo</span><Ai.AiFillGithub /></button></a>
      </div>
    </div>
  )
}

export default ProjectComponents