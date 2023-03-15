import React from 'react'

const Projects = () => {
  return (
      <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
              <div className='max-w-[1000px] w-full-grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                      <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        Projects section
                      </p>
                </div>
                <div></div>
                <div className='max-w-[1000px] w-full-grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Projects</p>
                    </div>
                    <div>
                        <p>list of Projects</p>
                    </div>
                </div>


              </div>

          </div>
      </div>
  )
}

export default Projects;