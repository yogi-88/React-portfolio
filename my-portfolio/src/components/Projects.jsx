// import React from 'react'

// const Projects = () => {
//   return (
//       <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
//           <div className='flex flex-col justify-center items-center w-full h-full'>
//               <div className='max-w-[1000px] w-full-grid grid-cols-2 gap-8'>
//                 <div className='sm:text-right pb-8 pl-4'>
//                       <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
//                         Projects section
//                       </p>
//                 </div>
//                 <div></div>
//                 <div className='max-w-[1000px] w-full-grid sm:grid-cols-2 gap-8 px-4'>
//                     <div className='sm:text-right text-4xl font-bold'>
//                         <p>Projects</p>
//                     </div>
//                     <div>
//                         <p>list of Projects</p>
//                     </div>
//                 </div>


//               </div>

//           </div>
//       </div>
//   )
// }

// export default Projects;

import React from 'react';

const projects = [
  {
    name: 'Work Day Planner',
    description: 'The purpose of this project is to allow user to save events for each hour of the day, and when user refreshed the page , user can only see events which were saved.',
    link: 'https://yogi-88.github.io/workday-planner-app/',
    image: './dayplanner.webp'
  },
  {
    name: 'Coding Quiz Channel',
    description: 'A timed coding quiz with multiple-choice questions. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code . It will have a clean, polished, and responsive user interface.',
    link: 'https://yogi-88.github.io/code-quiz-challenge/',
    image: './codingquizchallenge.webp'
  },
  {
    name: 'Password Generator',
    description: 'The purpose of this project is to allow user to generate a random password based on their preferences for length of password and characters types required. The character type option includes lowercase letters, uppercase letters, numeric character and special charaters.',
    link: 'https://yogi-88.github.io/password-generator/',
    image: './passwordgenerator.jpg'
  },
];

const Projects = () => {
  return (
    <div className="bg-[#0a192f] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-4">Projects</h2>
        <div className="max-w-xl mx-auto">
          {projects.map((project) => (
            <div key={project.name} className="bg-white rounded-md shadow-md p-6 mb-4">
              <img src={project.image} alt={project.name} className="mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">{project.name}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;