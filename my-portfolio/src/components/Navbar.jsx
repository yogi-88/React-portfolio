import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
    {/* declares a state variable 'nav' that represents whether the navigation bar is open or close. and function 'setnav' that can be used to update the 'nav' variable */}
    const [nav, setNav] = useState(false) 
    const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h1>Yogita Negi</h1>
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* toggleable mobile menu that is displayed when the user clicks on the hamburger menu icon, and is hidden when the icon is clicked again or the user clicks outside the menu area. */}
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6" text-4xl="true">
          <Link to="/">Home</Link>
        </li>
        <li className="py-6" text-4xl="true">
          <Link to="/">About</Link>
        </li>
        <li className="py-6" text-4xl="true">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="py-6" text-4xl="true">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="py-6" text-4xl="true">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar

