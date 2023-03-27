import React from 'react'

import ProjectComponents from '../components/project-components'
import Navbar from '../components/navbar'


function Projects() {
  return (
    <>
    <Navbar />
    <div className='mt-10 w-11/12 xl:w-9/12 mx-auto'>

      <h1 className='text-3xl mb-3'><span className='text-primary'>/</span>projects</h1>
      <p>List of my projects</p>

      <h1 className="text-3xl mt-16 "><span className='text-primary'>#</span>complete-websites</h1>
      <ProjectComponents />
    </div>
    </>
  )
}

export default Projects