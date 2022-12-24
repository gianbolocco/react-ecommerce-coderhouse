import React from 'react'
import {useState, useEffect} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useDarkModeContext } from '../context/DarkModeContext';
import {getProducts } from '../assets/firebase';
// import { cargarBDD } from '../assets/firebase';

const ItemListContainer = () => {

  // cargarBDD().then(products => console.log(products))

  const [products, setProducts] = useState([]);

  const {darkMode} = useDarkModeContext()

  const {brand, category} = useParams()

  useEffect(() => {

    if(brand){
      getProducts().then(products => {
        const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.brand === brand)
        const cardProducts = ItemList({productsList})
        setProducts(cardProducts)
    })
    }else{
      getProducts().then(products => {
        const productsList= products.filter(prod => prod.stock > 0)
        const cardProducts = ItemList({productsList})
        setProducts(cardProducts)
    })
    }



},[brand]);


useEffect(() => {

  if(category){
    getProducts().then(products => {
      const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.category === category)
      const cardProducts = ItemList({productsList})
      setProducts(cardProducts)
  })
  }else{
    getProducts().then(products => {
      const productsList= products.filter(prod => prod.stock > 0)
      const cardProducts = ItemList({productsList})
      setProducts(cardProducts)
  })
  }

},[category]);

  // getProducts().then(products => console.log(products))

  return (
    <div className={`pt-32 duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <h1 className=' pb-10 font-extrabold text-5xl text-center'>Productos: <span className='font-light'>{category}{brand}</span></h1>
      <div className={` grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-10 lg:px-20 `}>
        {products}
      </div>
    </div>
    
  )
}




export default ItemListContainer