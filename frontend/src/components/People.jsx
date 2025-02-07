import React from 'react'
import { data } from 'react-router'

function People() {



  return (
    <div className='flex h-20 bg-zinc-100 items-center'>
      <img className='ml-5 h-15 w-15 object-fill rounded-full object-center' src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" alt="" />
      <h1 className=' text-2xl ml-5 -mt-5 text-sl '>name</h1>
    </div>
  )
}

export default People