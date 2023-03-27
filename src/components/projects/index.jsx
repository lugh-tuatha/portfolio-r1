import React from 'react'
import ProjectComponents from '../project-components'
import SectionHeader from '../section-header'

import { Link } from "react-router-dom";

import * as Bs from "react-icons/bs";

function Projects() {
  return (
    <div className='mt-20 w-11/12 xl:w-9/12 mx-auto' id='works'>
      <div className='flex items-center justify-between'>
        <SectionHeader>projects</ SectionHeader>

        <Link to="/projects"><p className=' justify-self-end flex items-center gap-2'>View all <Bs.BsArrowRight size={22}/></p></Link>
      </div>

      <div>
        <ProjectComponents />
      </div>
    </div>  
  )
}

export default Projects