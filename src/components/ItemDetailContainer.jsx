import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
// import { consultarBDD } from '../assets/funciones';
import { getProduct } from '../assets/firebase';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);


    const {id} = useParams()

    useEffect(() => {
      getProduct(id).then(prod => setProduct(prod))
      
    }, []);

  return (
    <div>
        <ItemDetail item={product} />
    </div>
  )
}

export default ItemDetailContainer