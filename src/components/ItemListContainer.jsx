import React from 'react'
import {useState, useEffect} from 'react';
import ItemList from './ItemList';
import { consultarBDD } from '../assets/funciones';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarBDD().then(products => {
        const productsList= products.filter(prod => prod.stock > 0)
        const cardProductos = ItemList({productsList})
        setProductos(cardProductos)
    })

},[]);
        
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
      {productos}
    </div>
  )
}

export default ItemListContainer