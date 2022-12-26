import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

import { useCartContext } from '../context/CartContext';
import { useDarkModeContext } from '../context/DarkModeContext';


const CartWidget = () => {

  const {darkMode} = useDarkModeContext()

  const {getItemQuantity} = useCartContext()
 
  return (
    <div className={`flex flex-row justify-center align-middle duration-300 hover:text-indigo-500 `}>
      <Link to={'/cart'}><ShoppingCartIcon/></Link>
      {getItemQuantity() > 0 && <span className={` font-black duration-300 px-2 ${darkMode ? "text-white" : "text-black"}`}>{getItemQuantity()}</span>}
    </div>
    
  )
}

export default CartWidget