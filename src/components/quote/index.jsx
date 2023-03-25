import React from 'react'

import quote from '../../assets/svg/quote.svg'

function Quote() {
  return (
    <div className='w-11/12 lg:w-1/2 mx-auto'>

      <img src={quote} className='relative w-8 left-2 top-4'/>
      <div className='px-6 py-6 border-2 border-gray'>
        <p>With great power comes great electricity bill</p>
      </div>
      <div className="flex justify-end">
        <img src={quote} className='w-8 relative -top-6 right-4'/>
        <div className='px-3 py-3 border-r-2 border-l-2 border-b-2 border-gray text-end'>
          - Dr. Who
        </div>
      </div>
    </div>
  )
}

export default Quote