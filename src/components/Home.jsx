import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f]" name="home">
          <div className="flex flex-col max-w-[1000px] mx-auto px-8 justify-center h-full">
              <p className='text-pink-600 text-2xl'>Hi, My Name is</p>
              <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Dhruv Dabhi</h1>
              <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am Web Developer</h2>
              <p className='text-[#8892b0] py-4 max-w-[700px] '>I am Web Developer in the Path of learning and
                  building love for competitive programming. Having passion for Data Science and Machine Learing
              </p>
              <div>
                    <Link to="skill" smooth={true}  duration={500}>
                <button className='text-white border-2 px-6 py-3 my-2 hover:bg-pink-600 hover:border-pink-600 duration-300]'>Click For Skills</button>
              </Link>
              </div>
      </div>
    </div>
  );
}

export default Home