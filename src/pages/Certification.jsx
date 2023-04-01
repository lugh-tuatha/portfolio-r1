import React from 'react'

import CertificationContainer from '../components/certification-container'
import Navbar from '../components/navbar'
import Socials from '../components/socials'

import certificate from '../data/certificate'

function Certification() {
  return (
    <>
      <Navbar />
      <Socials />
      <div className='mt-10 w-11/12 xl:w-9/12 mx-auto'>

        <h1 className='text-3xl mb-3'><span className='text-primary'>/</span>certification</h1>
        <p>List of my certificate</p>

        <h1 className="text-3xl mt-16 "><span className='text-primary'>#</span>completed course</h1>

      <div className='grid my-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4'>
        {certificate.map(certificates => (
          <CertificationContainer title={certificates.title} issueDate={certificates.issueDate} credentialLink={certificates.credentialLink} certImg={certificates.certImg}/>
        ))}
      </div>

      </div>
    </>
  )
}

export default Certification