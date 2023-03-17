import React from 'react'

const Skills = () => {
  return (
      <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
              <div className='max-w-[1000px] w-full-grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                      <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        Skills section
                      </p>
                </div>
                <div></div>
                <div className='max-w-[1000px] w-full-grid sm:grid-cols-2 gap-8 px-4 space-x-8'>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex justify-center"> <button class="rounded-lg bg-red-400 hover:bg-blue-700 font-bold py-4 px-8">HTML</button></div>
                      <div className="flex justify-center"><button class="rounded-lg bg-red-400 hover:bg-blue-700 font-bold py-4 px-8">CSS</button></div>
                      <div className="flex justify-center"><button class="rounded-lg bg-red-400 hover:bg-blue-700 font-bold py-4 px-8">Javascript</button></div>
                      <div className="flex justify-center"><button class="rounded-lg bg-red-400 hover:bg-blue-700 font-bold py-4 px-8">Bootstrap</button></div>
                      <div className="flex justify-center"><button class="rounded-lg bg-red-400 hover:bg-blue-700 font-bold py-4 px-8">React</button></div>
                      <div className="flex justify-center"><button class="rounded-lg bg-red-400 hover:bg-blue-700 font-bold py-4 px-8">Github</button></div>
                    </div>

                </div>


              </div>

          </div>
      </div>
  )
}

export default Skills;