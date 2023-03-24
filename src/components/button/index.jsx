import React from 'react'

function Button(props) {
  return (
    <button className='border-2 border-primary py-2 px-8'>{props.children}</button>
  )
}

export default Button