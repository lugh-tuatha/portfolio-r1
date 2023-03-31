import React from 'react'


import * as Ai from "react-icons/ai";

function CertificationContainer({title, issueDate, credentialLink, certImg}) {
  return (
    <div className='border-1 cert'>
      <img src={certImg} alt="intro to front-end cert" className='border-b-1'/>

      <div className='p-3'>
        <p className='text-xl font-bold'>{title}</p>
        <p className='text-md font-thin text-gray'>{issueDate}</p>

        <a href={credentialLink}><button className='border-1 mt-2 border-primary py-1 px-4 mr-4 flex items-center gap-2 hover:bg-primary hover:bg-opacity-20'><span>Show credential</span><Ai.AiOutlineLink /> </button></a>
      </div>
    </div>
  )
}

export default CertificationContainer