import React from 'react'
import profileimage from "../assets/newphoto.jpg"
import { MdDoubleArrow } from "react-icons/md"

const Home = () => {
    return (
        <div name='home'
            className='h-screen w-full bg-gradient-to-b
    from-black to-stone-700 text-white md:flex-row'>

            <div className='max-w-screen-lg mx auto flex flex col
      items-center justify-center h-full px-4 md:flex-row'>

                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-gray-500 py-4 max-w-md'>Front End Developer</h2>
                    <p className='text-gray-500'>
                        Hello! Im Damien Hebert, I am actively pursuing a career within software development.
                        I am currently working with technologies such as Javascript, React, Tailwind, and Node/Express.js
                    </p>

                    <div>
                        <button className='text-gray-500 w-fit px-6 py-3 my-2 flex items-center rounded-md'> Portfolio
                            <span>
                                <MdDoubleArrow />
                            </span>
                        </button>
                    </div>
                </div>

                <div>
                    <img src={profileimage} alt="my profile" className='' />
                </div>


            </div>
        </div>
    )
}

export default Home
