import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Routing from './components/Routing'

function App() {
  return(
    <div className='flex bg-zinc-100'>
    <Navbar></Navbar>
    <div className=' w-1800 h-screen'>
    < Routing></Routing>
    </div>

  </div>
  )
}


export default App
