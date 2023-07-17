import React from 'react'
import { MdDoubleArrow } from "react-icons/md"
import { Link } from "react-scroll";
import HeroImage from "../assets/homeprofilepic.png"

const Home = () => {
    return (
        <div name='home'
            className='h-screen w-full bg-gradient-to-b
    from-black to-stone-700 text-white'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify center h-full px-4 md:flex-row'>

                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>
                        Software Developer
                    </h2>

                    <p className='text-gray-500 max-w-md'>
                        Currently working with programming technologies such as Javascript, React, Tailwind, and Node/Express.js
                    </p>

                    <div>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className='group text-gray-500 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-taupe-600 to-black-400 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdDoubleArrow size={25} className='ml-1' />
                            </span>
                        </Link>
                    </div>




                </div>


                <div className=''>
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="rounded-3xl mx-auto w-2/3 md:w-full md:scale-50"
                    />

                </div>







            </div>






        </div>
    )
}

export default Home
