import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom'

import { useDarkModeContext } from '../context/DarkModeContext';

const ProductCard = ({prod}) => {

  const {darkMode} = useDarkModeContext();

  return (
    <Link to={`/product/${prod.id}`}>
      <div class={`m-5 rounded-md hover:shadow-lg duration-300 ${darkMode ? 'bg-gray-900 hover:bg-gray-800 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
          <img src={`${prod.img}`} alt="plant" class="rotate-45 h-auto p-5" />
          <div class="flex flex-col justify-center align-middle">
          <p class=" text-2xl text-center mb-5 font-black">{prod.productName}</p>
          <p class="text-5xl font-black text-center"><span>${prod.price}</span></p>
         <p class=" text-center text-xl font-black p-10">See More <ArrowForwardIosIcon/></p>
          </div>
      </div>
    </Link>
  )
}

export default ProductCard