import React from 'react'
import ProjectComponents from '../project-components'

function Projects() {
  return (
    <div className='mt-20 lg:w-11/12 xl:w-9/12 mx-auto'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl'><span className='text-primary'>#</span>projects <span className='text-primary'>--------------------------</span></h1>

        <p className=' justify-self-end'>View all</p>
      </div>

      <div>
        <ProjectComponents />
      </div>
    </div>  
  )
}

export default Projects