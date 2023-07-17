import React from 'react'
import glowingLamp from "../assets/portfolio/IMG-7897.jpg"
import genPass from "../assets/portfolio/IMG-7898.jpg"
import toDo from "../assets/portfolio/IMG-7899.jpg"
import firstPortfolio from "../assets/portfolio/IMG-8859.jpg"

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      name: "Weather App",
      src: glowingLamp,
      link: "https://dh0710.github.io/glowing-lamp/"

    },
    {
      id: 2,
      name: "Password Generator",
      src: genPass,
      link: "https://dh0710.github.io/Challenge-3-passwordgen/"
    },
    {
      id: 3,
      name: "To Do App",
      src: toDo,
      link: "https://dh0710.github.io/taskinator/"
    },
    {
      id: 4,
      name: "First Portfolio",
      src: firstPortfolio,
      link: "https://dh0710.github.io/dh07-portfolio/"
    }

  ]




  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-stone-700 w-full text-gray-500 h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, link, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={link}>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 cursor-pointer "
              />
              </a>
               
              <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-8 py-2 sm:px-0 ">
                <a href={link}>
                <button className="font-bold w-1/2 px-16 py-1 m-2 duration-200 hover:scale-105">
                  {name}
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>





  )

}

export default Portfolio
