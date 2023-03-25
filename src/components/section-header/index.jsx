import React from 'react'

function SectionHeader(props) {
  return (
    <div>
      <h1 className='text-3xl'><span className='text-primary'>#</span>{props.children} <span className='text-primary'>--------------</span></h1>
    </div>
  )
}

export default SectionHeader