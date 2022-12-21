import React from 'react'
import {useState, useEffect} from 'react';
import ItemList from './ItemList';
import { consultarBDD } from '../assets/funciones';
import { useParams } from 'react-router-dom';
import { useDarkModeContext } from '../context/DarkModeContext';
import { cargarBDD } from '../assets/firebase';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  const {darkMode} = useDarkModeContext()

  const {brand, category} = useParams()

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

useEffect(() => {

  if(category){
    consultarBDD('../json/productos.json').then(products => {
      const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.category === category)
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



},[category]);
        
  return (
    <div className={`pt-32 duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <h1 className=' pb-10 font-extrabold text-5xl text-center'>Productos: <span className='font-light'>{category}{brand}</span></h1>
      <div className={` grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-10 lg:px-20 `}>
        {productos}
      </div>
    </div>
    
  )
}

// cargarBDD().then(productos => console.log(productos))

export default ItemListContainer