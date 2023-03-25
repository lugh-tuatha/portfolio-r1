import React from 'react'
import ProjectComponents from '../project-components'
import SectionHeader from '../section-header'

function Projects() {
  return (
    <div className='mt-20 w-11/12 xl:w-9/12 mx-auto'>
      <div className='flex items-center justify-between'>
        <SectionHeader>Projects</ SectionHeader>

        <p className=' justify-self-end'>View all</p>
      </div>

      <div>
        <ProjectComponents />
      </div>
    </div>  
  )
}

export default Projects