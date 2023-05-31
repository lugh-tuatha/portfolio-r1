import React from 'react'
import ProjectComponents from '../project-components'
import SectionHeader from '../section-header'

import { Link } from "react-router-dom";

import * as Bs from "react-icons/bs";

import project from '../../data/projects';

function Projects() {
  return (
    <div className='content-width' id='works'>
      <div className='flex items-center justify-between'>
        <SectionHeader>projects</ SectionHeader>

        <Link to="/projects"><p className=' justify-self-end flex items-center gap-2'>View all <Bs.BsArrowRight size={22}/></p></Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
        {project.map(projects => (
          <ProjectComponents languages={projects.languages} title={projects.title} desc={projects.desc} live={projects.live} repo={projects.repo} cover={projects.cover}/>
        ))}
      </div>
    </div>  
  )
}

export default Projects