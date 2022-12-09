import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { consultarBDD } from '../assets/funciones';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);


    const {id} = useParams()

    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos => {
            console.log(producto.productName)
            const prod = productos.find(product => product.id === parseInt(id) )
            setProducto(prod)
        })
        
    }, []);

  return (
    <div>
        <ItemDetail item={producto} />
    </div>
  )
}

export default ItemDetailContainer