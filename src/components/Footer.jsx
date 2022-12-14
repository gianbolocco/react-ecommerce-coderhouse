import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='bg-black flex flex-col justify-evenly lg:flex-row'>
        <div className='flex flex-col m-10'>
            <p className='text-white font-black text-4xl mb-2'>EXPLORE</p>
            <p className='text-white text-xl mb-2 hover:text-indigo-500 duration-300 cursor-pointer'>About Us</p>
            <p className='text-white text-xl mb-2 hover:text-indigo-500 duration-300 cursor-pointer'>Home</p>
            <p className='text-white text-xl mb-2 hover:text-indigo-500 duration-300 cursor-pointer'>Nike</p>
            <p className='text-white text-xl mb-2 hover:text-indigo-500 duration-300 cursor-pointer'>Adidas</p>
            <p className='text-white text-xl mb-2 hover:text-indigo-500 duration-300 cursor-pointer'>Jordan</p>
        </div>
        <div className='flex flex-col m-10'>
            <p className='text-white font-black text-4xl mb-2'>SUPPORT</p>
            <p className='text-white text-xl mb-2 hover:text-indigo-500 duration-300  cursor-pointer'>Product Help</p>
            <p className='text-white text-xl mb-2 hover:text-indigo-500 duration-300  cursor-pointer'>Customer Care</p>
            <p className='text-white text-xl mb-2 hover:text-indigo-500 duration-300  cursor-pointer'>Athorized Service</p>
        </div>
        <div className='flex flex-col m-10'>
            <p className='text-white font-black text-4xl mb-2'>SOCIAL</p>
            <p className='text-white text-xl mb-2 hover:text-indigo-500 duration-300  cursor-pointer'><InstagramIcon /></p>
            <p className='text-white text-xl mb-2 hover:text-indigo-500 duration-300  cursor-pointer'><FacebookIcon/></p>
            <p className='text-white text-xl mb-2 hover:text-indigo-500 duration-300  cursor-pointer'><YouTubeIcon/></p>
        </div>
    </div>
  )
}

export default Footer