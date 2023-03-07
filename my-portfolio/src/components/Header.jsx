import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Header = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        {/* menu */}
        <div>
            <ul>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
        </div>
        {/* Hamburger */}
        <div>
            <FaBars />
        </div>

    </div>
  )
}

export default Header