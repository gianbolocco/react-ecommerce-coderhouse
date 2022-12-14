import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


const CartWidget = () => {
  return (
    <div className='flex flex-row justify-center align-middle'>
      <Link to={'/cart'}><ShoppingCartIcon/></Link>
      <span className='text-gray-500 font-black'>0</span>
    </div>
    
  )
}

export default CartWidget