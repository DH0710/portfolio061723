import React from 'react'
import { MdDoubleArrow } from "react-icons/md"

const Home = () => {
    return (
        <div name='home'
            className='h-screen w-full bg-gradient-to-b
    from-black to-stone-700 text-white md:flex-row'>

            <div className='max-w-screen-lg mx auto flex flex col
      items-center justify-center h-full px-4 md:flex-row'>

                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-gray-500 py-4 max-w-md'>Software Developer</h2>
                    <p className='text-gray-500'>
                        Hello! Im Damien Hebert, I am a software developer currently based in Houston, Tx.
                        I am currently working with technologies such as Javascript, React, Tailwind, and Node/Express.js
                    </p>

                    <div>
                        <button className='group text-gray-500 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-taupe-600 to-black-400 cursor-pointer'> Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdDoubleArrow size={25} className='ml-1' />
                            </span>
                        </button>
                    </div>
                </div>

                <div>
                    <img src="" alt="" className='' />
                </div>


            </div>
        </div>
    )
}

export default Home
