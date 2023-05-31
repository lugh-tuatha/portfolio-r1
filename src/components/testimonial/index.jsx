import React from 'react'

import SectionHeader from '../section-header'
import TestimonialBox from '../testimonial-box'

function Testimonial() {
  return (
    <div className='content-width'>
      <SectionHeader>Testimonial</ SectionHeader>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        <TestimonialBox />
      </div>
    </div>
  )
}

export default Testimonial