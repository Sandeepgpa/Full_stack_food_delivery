import React from 'react'
import {assets} from '../assets/assets.js'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="logo" />
        <img className='w-10' src={assets.profile_image} alt="Profile" />
    </div>
  )
}

export default Navbar