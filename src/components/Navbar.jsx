import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin,  } from 'react-icons/fa'
import Logo from '../assets/Dhruv.png'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLine, BsFillPersonLinesFill } from 'react-icons/bs'
import { RiTwitterFill } from "react-icons/ri"; 
import {Link} from 'react-scroll'




const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-gray-300 z-50">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>
      {/* menu */}

      <ul className="hidden md:flex ">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="skill" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="exp" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0A192F] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="skill" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="exp" smooth={true} duration={500}>
            Experience
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              href="https://www.linkedin.com/in/dhruvdabhi101/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700">
            <a
              href="https://github.com/dhruvdabhi101"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#089975]">
            <a
              href="#"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="#"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Twitter <RiTwitterFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
