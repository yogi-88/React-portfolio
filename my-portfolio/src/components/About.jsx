import React from 'react'

const About = () => {
  return (
      <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
              <div className='max-w-[1000px] w-full-grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                      <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                      </p>
                </div>
                <div></div>
                <div className='max-w-[1000px] w-full-grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Yogita, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>As a recent graduate of a bootcamp program in front end development,
                           I have honed my skills in HTML, CSS, JavaScript, and React.
                           Through the bootcamp program, I have gained experience working on a variety of projects,
                           ranging from basic websites to more complex applications.
                           I am excited to begin my journey as a professional front end developer
                           and look forward to working with clients who value creativity and innovation. 
                           I understand the importance of collaboration and communication when working with clients, 
                           and I am committed to providing excellent customer service.</p>
                    </div>
                </div>


              </div>

          </div>
      </div>
  )
}

export default About