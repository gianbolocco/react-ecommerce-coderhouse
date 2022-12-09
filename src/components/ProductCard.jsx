import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({prod}) => {
  return (
    <div class="bg-gray-300 m-5 rounded-xl drop-shadow-lg">
        <img src={`../images/${prod.img}`} alt="plant" class="h-auto w-full p-5" />
        <div class=" bg-white rounded-xl p-5">
        <p class=" text-lg text-center mb-2 text-gray-700 font-bold">{prod.productName}</p>
        <p className='text-base mb-2 text-gray-400'>{prod.brand}</p>
        <p class="text-medium mb-2 text-gray-700">Price: <span>${prod.price}</span></p>
        <Link to={`/product/${prod.id}`}><button class="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">See More</button></Link>
        </div>
    </div>
  )
}

export default ProductCard