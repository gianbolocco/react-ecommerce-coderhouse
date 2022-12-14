import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

import { useDarkModeContext } from '../context/DarkModeContext'
import {useCartContext} from '../context/CartContext'

const ItemDetail = ({item}) => {

  const {addItem} = useCartContext()

  const {darkMode} = useDarkModeContext()

  const onAdd = (contador) => {
    addItem(item, contador)
  }  


  return (
      <div className={`py-10 pt-32 flex flex-col lg:flex-row justify-evenly duration-300 ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <img className='m-5' src={`${item.img}`} alt="" />
        <div className={`rounded-xl p-5 flex flex-col justify-evenly lg:m-3 duration-300  ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}>
          <p className='mb-5 text-center font-bold text-5xl'>{item.productName}</p>
          <p className='mb-1 text-gray-500 text-xl'><Link to={`/brand/${item.brand}`}>{item.brand}</Link> / <Link to={`/category/${item.category}`}>{item.category}</Link></p>
          <p className='mb-5 text-gray-500 text-xl'>Stock: {item.stock}</p>
          <p className='mb-5 text-5xl font-semibold'>${item.price}</p>
          <ItemCount stock= {item.stock} onAdd={onAdd} initial={1} />
        </div>
        
      </div>
  )
}

export default ItemDetail