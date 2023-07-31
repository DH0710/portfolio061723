import React from 'react'

import css from "../assets/icons8-css-48.png"
import html from "../assets/icons8-html-240.png"
import javascript from "../assets/icons8-javascript-48.png"
import react from "../assets/icons8-react-js-40.png"
import tailwind from "../assets/tailwind-css.png"
import node from "../assets/node-js.png"

const Experience = () => {

  const techs = [
    {

      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: node,
      title: "Node JS",
      style: "shadow-white",
    },
   
  ];



  return (
    <div name='experience' className='bg-gradient-to-b from-stone-700 
    to-black w-full h-screen'>

      <div className='max-w-screen-lg mx-auto p-4 flex flex-col 
      justify-center w-full h-full text-gray-500'>

        <div>

          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 
          inline'>Experience</p>
          <p className='py-6'> These are some of the technologies I've worked with</p>
        </div>



        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 cursor-pointer">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  

  );
};



export default Experience
