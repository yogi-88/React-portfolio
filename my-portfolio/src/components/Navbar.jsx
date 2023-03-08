import React , {useState} from 'react'
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
  return (
      <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <h1>Yogita Negi</h1>
        </div>
          {/* menu */}

          <ul className='hidden md:flex'>
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
          </ul>

          {/* hamburger*/}
          <div className='md:hidden z-10'>
              <FaBars />
          </div>

          {/* mobile menu */}
          <ul className='hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center'>
              <li className='py-6' text-4xl>About</li>
              <li className='py-6' text-4xl>Skills</li>
              <li className='py-6' text-4xl>Home</li>
              <li className='py-6' text-4xl>Projects</li>
              <li className='py-6' text-4xl>Contact</li>
          </ul>
      </div>
  )
}

export default Navbar