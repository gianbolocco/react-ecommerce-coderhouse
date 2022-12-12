import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='bg-dark flex flex-col justify-evenly lg:flex-row'>
        <div className='flex flex-col m-10'>
            <p className='text-white font-black text-4xl mb-2'>EXPLORE</p>
            <p className='text-white text-xl mb-2'>About Us</p>
            <p className='text-white text-xl mb-2'>Home</p>
            <p className='text-white text-xl mb-2'>Nike</p>
            <p className='text-white text-xl mb-2'>Adidas</p>
            <p className='text-white text-xl mb-2'>Jordan</p>
        </div>
        <div className='flex flex-col m-10'>
            <p className='text-white font-black text-4xl mb-2'>SUPPORT</p>
            <p className='text-white text-xl mb-2'>Product Help</p>
            <p className='text-white text-xl mb-2'>Customer Care</p>
            <p className='text-white text-xl mb-2'>Athorized Service</p>
        </div>
        <div className='flex flex-col m-10'>
            <p className='text-white font-black text-4xl mb-2'>SOCIAL</p>
            <p className='text-white text-xl mb-2'><InstagramIcon /></p>
            <p className='text-white text-xl mb-2'><FacebookIcon/></p>
            <p className='text-white text-xl mb-2'><YouTubeIcon/></p>
        </div>
    </div>
  )
}

export default Footer