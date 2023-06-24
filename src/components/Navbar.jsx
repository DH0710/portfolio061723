import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import blurprofilepic from "../assets/blurprofilepic.jpg"


const Navbar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "about"
        },
        {
            id: 3,
            link: "portfolio"
        },
        {
            id: 4,
            link: "experience"
        },
        {
            id: 5,
            link: "contact"
        },

    ]

    return (


        <div className='flex justify-between items-center w-full 
    h-20 px-4 text-white bg-taupe-600 fixed'>


<div>
        <img src={blurprofilepic} alt="my profile" className='rounded-full h-16 w-16 mx-auto w-2/3 w-full mt-4  cursor-pointer hover:scale-110 duration-300'></img>
    </div>

           

           






            <ul className='hidden md:flex'>



                {links.map(({ id, link }) => (

                    <li key={id} className='px-4 cursor-pointer capitalize font-medium 
                     hover:scale-105 duration-200 text-gray-500'>
                        {link}
                    </li>
                ))}
            </ul>


            <div
                onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center 
            absolute top-0 left-0 w-full h-screen bg-gradient-to-b 
            from-black to-taupe-800 text-gray-500">

                    {links.map(({ id, link }) => (

                        <li
                            key={id}
                            className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200'>
                            {link}
                        </li>
                    ))}

                </ul>

            )}






        </div>


    );
};

export default Navbar
