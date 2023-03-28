import React from 'react'

function SkillContainer({category, list}) {
  return (
    <div className='flex gap-3 mb-12'>
      <div className='border-1 border-gray sm:w-52 sm:row-span-3 h-auto sm:h-28 mt-8'>
        <h1 className='border-b-1 p-2 font-bold text-white'>{category}</h1>
        <p className='p-2 font-thin text-gray'>{list}</p>
      </div>
    </div>
  )
}

export default SkillContainer