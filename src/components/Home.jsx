import React from 'react'
import blurprofilepic from "../assets/blurprofilepic.jpg"
import {MdDoubleArrow} from "react-icons/md"

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b
    from-black to-stone-700'>
      
      <div className='max-w-screen-lg mx auto flex flex col
      items-center justify-center h-full px-4 md:flex-row'>

        <div>
            <h2>I'm a Front End Developer</h2>
            <p>
                I am actively pursuing a career within software development. 
                I am currently working with technologies such as Javascript, React, Tailwind, and Node/Express.js
            </p>

            <div>
                <button> Portfolio
                    <span>
                    <MdDoubleArrow/>
                    </span>
                     </button>
            </div>
        </div>

        <div>
            <img src={blurprofilepic} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full'></img>
        </div>
      </div>
    </div>
  )
}

export default Home
