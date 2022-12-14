import React from 'react'
import ItemCount from './ItemCount'

import { useDarkModeContext } from '../context/DarkModeContext'

const ItemDetail = ({item}) => {

  const {darkMode} = useDarkModeContext()

  return (
      <div className={`pt-20 flex flex-col lg:flex-row justify-evenly ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <img className='m-5' src={`../images/${item.img}`} alt="" />
        <div className={`rounded-xl p-5 flex flex-col justify-evenly lg:m-3 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}>
          <p className='mb-5 text-center font-bold text-5xl'>{item.productName}</p>
          <p className='mb-5 text-gray-500 text-xl'>{item.brand} / {item.category}</p>
          <p className='mb-5 text-5xl font-semibold'>${item.price}</p>
          <ItemCount stock= {item.stock} />
        </div>
        
      </div>
  )
}

export default ItemDetail