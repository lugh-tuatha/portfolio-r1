import React from 'react'
import { Link } from 'react-router-dom'
import * as Bs from "react-icons/bs";

import SectionHeader from '../section-header'
import CertificationContainer from '../certification-container'

import certificate from '../../data/certificate'

function Certification() {
  return (
    <div className='content-width'>
      <div className='flex items-center justify-between'>
        <SectionHeader>certification</ SectionHeader>

        <Link to="/certification"><p className=' justify-self-end flex items-center gap-2'>View all <Bs.BsArrowRight size={22}/></p></Link>
      </div>

      
      <div className='grid mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4'>
        {certificate.slice(0, 3).map(certificates => (
          <CertificationContainer title={certificates.title} issueDate={certificates.issueDate} credentialLink={certificates.credentialLink} certImg={certificates.certImg}/>
        ))}
      </div>
    </div>
  )
}

export default Certification