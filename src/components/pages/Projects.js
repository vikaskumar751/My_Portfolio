import React from 'react';
import Project1Img from '../assets/todo.jpg';
import Project2Img from '../assets/movieshub.JPG';
import '../../index.css';
import { FiArrowRight } from 'react-icons/fi';

const Projects = () => {


  return (
    <div id="projects" className="w-full min-h-screen text-gray-300 bg-gradient-to-b from-blue-900 to-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-bold text-yellow-300 mb-6 my-10 text-center">My <span className="text-red-500">Projects</span></h2>
        <p className="text-white mb-8 text-lg text-center">
        Here are my projects,  these projects are available on GitHub
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <div className="bg-white rounded-lg shadow-lg">
            <img src={Project1Img} alt="Property" className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66" />
              <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">To-Do List</h3>
                  <p className="mt-2 text-gray-500 text-sm">Created a user friendly To-Do List app with interactive features for adding, deleting and editing tasks.</p>
                  <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                <a
                  id
                  href='https://github.com/TheMostafax/My_Anime_App'
                >
                  more info on GitHub    <FiArrowRight className="mr-2 inline-block" />
                </a>
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
            <img src={Project2Img} alt="Property" className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66" />
               <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">MoviesHub</h3>
                   <p className="mt-2 text-gray-500 text-sm">Created a professional web app for Movies using ReactJS and Tailwind CSS.</p>             
                   <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                <a
                  id
                  href='https://github.com/vikaskumar751/MoviesHub'
                >
                  more info on GitHub    <FiArrowRight className="mr-2 inline-block" />
                </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;