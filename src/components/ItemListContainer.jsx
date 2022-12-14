import React from 'react'
import {useState, useEffect} from 'react';
import ItemList from './ItemList';
import { consultarBDD } from '../assets/funciones';
import { useParams } from 'react-router-dom';
import { useDarkModeContext } from '../context/DarkModeContext';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  const {darkMode} = useDarkModeContext()

  const {brand} = useParams()

  useEffect(() => {

    if(brand){
      consultarBDD('../json/productos.json').then(products => {
        const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.brand === brand)
        const cardProductos = ItemList({productsList})
        setProductos(cardProductos)
    })
    }else{
      consultarBDD('./json/productos.json').then(products => {
        const productsList= products.filter(prod => prod.stock > 0)
        const cardProductos = ItemList({productsList})
        setProductos(cardProductos)
    })
    }

},[brand]);
        
  return (
    <div className={`duration-300 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-10 lg:px-20 ${darkMode ? 'bg-black' : 'bg-white'} `}>
      {productos}
    </div>
  )
}

export default ItemListContainer