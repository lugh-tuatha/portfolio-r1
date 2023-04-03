import React from 'react'

import ProjectComponents from '../components/project-components'
import Navbar from '../components/navbar'
import Socials from '../components/socials'

import project from '../data/projects'

function Projects() {
  return (  
    <>
    <Navbar />
    <Socials />
    <div className='mt-10 w-11/12 xl:w-9/12 mx-auto'>

      <h1 className='text-3xl mb-3'><span className='text-primary'>/</span>projects</h1>
      <p>List of my projects</p>

      <h1 className="text-3xl mt-16 "><span className='text-primary'>#</span>complete-websites</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {project.map(projects => (
          <ProjectComponents languages={projects.languages} title={projects.title} desc={projects.desc} live={projects.live} repo={projects.repo} cover={projects.cover}/>
        ))}
      </div>

    </div>
    </>
  )
}

export default Projects