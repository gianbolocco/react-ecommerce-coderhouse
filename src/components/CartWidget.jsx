import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

import { useCartContext } from '../context/CartContext';


const CartWidget = () => {

  const {getItemQuantity} = useCartContext()
 
  return (
    <div className='flex flex-row justify-center align-middle'>
      <Link to={'/cart'}><ShoppingCartIcon/></Link>
      {getItemQuantity() > 0 && <span className='text-gray-500 font-black'>{getItemQuantity()}</span>}
    </div>
    
  )
}

export default CartWidget