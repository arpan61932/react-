import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[10vh] flex items-center justify-between px-18'>
      <h1 className='text-white font-bold text-2xl'>Logo</h1>
      <nav className='flex gap-6'>
        <a href="#" className='text-white'>Home</a>
        <a href="#" className='text-white'>About</a>
        <a href="#" className='text-white'>Contact</a>
      </nav>
    </div>
  )
}

export default Navbar