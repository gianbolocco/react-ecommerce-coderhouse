import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom'

const ProductCard = ({prod}) => {
  return (
    <Link to={`/product/${prod.id}`}>
      <div class="bg-gray-50 m-5 rounded-md hover:bg-gray-200 hover:shadow-lg duration-300">
          <img src={`../images/${prod.img}`} alt="plant" class=" rotate-45 h-auto p-10" />
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