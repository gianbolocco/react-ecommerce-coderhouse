import React from 'react'
import { Link } from 'react-router-dom'
import './ShortCuts.css'
import { useDarkModeContext } from '../../context/DarkModeContext'
const ShortCuts = () => {

  const {darkMode} = useDarkModeContext()

  return (
    <div className={`flex justify-center items-center duration-300 flex-col lg:flex-row ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <Link to={'/category/running'} ><div className='duration-300 hover:shadow-2xl lg:mx-10 my-5 h-80 w-80 RN flex justify-center items-center rounded-full'><span className='p-2 text-3xl bg-black text-white rounded-md'>RUNNING</span></div></Link>
        <Link to={'/category/basketball'} ><div className='duration-300 hover:shadow-2xl lg:mx-5 my-10  h-80 w-80 BK flex justify-center items-center rounded-full'><span className='p-2 text-3xl bg-black text-white rounded-md'>BASKETBALL</span></div></Link>
        <Link to={'/category/casual'} ><div className='duration-300 hover:shadow-2xl lg:mx-10 my-5 h-80 w-80 CS flex justify-center items-center rounded-full'><span className='p-2 text-3xl bg-black text-white rounded-md'>CASUAL</span></div></Link>
    </div>
  )
}

export default ShortCuts 