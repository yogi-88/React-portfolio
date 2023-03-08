import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
      <div name='home' className='w-full h-screen bg-[#0a192f]'>
          {/* Container */}
          <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
              <p className='text-pink-600'>Hi, my name is</p>
              <h1 className='text-2xl sm:text-4xl font-bold text-[#ccd6f6]'>Yogita Negi</h1>
              <h2 className='text-2xl sm:text-4xl font-bold text-[#8892b0]'>I'm a Frontend developer specializing in HTML, CSS, and JavaScript.</h2>
              <p className='text-[#8892b0] py-4 max-w-[700px]'>I recently completed a front end development bootcamp and am eager to put my skills to use.</p>
              <p className='text-[#8892b0] py-4 max-w-[700px]'>My passion for clean and functional design motivates me to create websites that are both
                  visually appealing and easy to navigate. I'm a quick learner and am always looking for new
                  challenges to improve my skills.
              </p>
              <p className='text-[#8892b0] py-4 max-w-[700px]'>When I'm not coding, you can find me reading or practicing yoga. I believe in the
                  importance of balance and am committed to delivering projects on time and within budget.
              </p>
              <p className='text-[#8892b0] py-4 max-w-[700px]'>Let's work together to create a website that meets your unique needs and exceeds your expectations.</p>
              <div>
                  <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                      View Work
                      <span className='hover:rotate-90 duration-300'>
                          <HiArrowNarrowRight className='ml-3' />

                      </span>
                  </button>
              </div>
          </div>
      </div>
  )
}

export default Home