import React from 'react'
import { useDarkModeContext } from '../context/DarkModeContext';

// codigo de gpt3
const images = [
    'adidas-ozweego.jpg',
    'adidas-ozelia.jpg',
    'adidas-forum-low.jpg',
    'adidas-originals.jpg',
    'jordan-retro-3.jpg',
    'jordan-retro-4.jpg',
    'jordan-retro-6.jpg',
    'jordan-retro-13.jpg',
    'nike-air-force-1.jpg',
    'nike-air-huarache.jpg',
    'nike-air-max-90.jpg',
    'nike-dunk-hi.jpg',
    'nike-blazer-mid.jpg',
    'nike-lebron-xix.jpg'
]
  
  const selectedImageIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[selectedImageIndex];

const Header = () => {

    const {darkMode}=useDarkModeContext()



  return (
    <div className={`p-20 pt-40 flex flex-col lg:flex-row items-center justify-evenly duration-300 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
        <div className={`rounded-full flex justify-center align-middle duration-50 ${darkMode ? "bg-white" : "bg-black"}`}>
            <img src={`../images/${selectedImage}`} className=' lg:rotate-45 duration-300 hover:rotate-0' alt="" />
        </div>

        <div className='flex flex-col justify-center align-middle'>
            <h1 className=' text-5xl font-serif font-bold'>"We are what we wear"</h1>
            <h3 className='text-2xl font-thin'>Explore the new collections of sneakers</h3>
        </div>
    </div>
  )
}

export default Header

