import React from 'react'

import SectionHeader from '../section-header'
import TestimonialBox from '../testimonial-box'

function Testimonial() {
  return (
    <div className='mt-20 w-11/12 xl:w-9/12 mx-auto'>
      <SectionHeader>Testimonial</ SectionHeader>
      <div className="mt-12 grid grid-cols-4">
        <TestimonialBox />
      </div>
    </div>
  )
}

export default Testimonial