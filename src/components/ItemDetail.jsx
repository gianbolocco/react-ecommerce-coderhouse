import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
    console.log(item)
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col m-5 rounded-xl drop-shadow-lg bg-gray-300 lg:flex-row justify-center'>
        <img className='m-5' src={`../images/${item.img}`} alt="" />
        <div className='bg-white rounded-xl p-5 flex flex-col justify-evenly lg:m-3'>
          <p className='mb-5 text-center font-bold text-5xl'>{item.productName}</p>
          <p className='mb-5 text-gray-500 text-xl'>{item.brand} / {item.category}</p>
          <p className='mb-5 text-5xl'>${item.price}</p>
          <ItemCount stock= {item.stock} />
        </div>
        
      </div>
        
    </div>
  )
}

export default ItemDetail