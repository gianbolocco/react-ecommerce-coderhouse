

import { useContext, useState, createContext  } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    
    //VerCantidad - Agregar productos - Eliminar producto - 
    //Vaciar el carrito - FinalizarCompra - Buscar producto

    const isInCart = (id) => {
        //Retorna producto (V) o undefined (F)
        return cart.find(producto => producto.id === id)    
    }

    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)) {
            const indice = cart.findIndex(prod => prod.id === producto.id)
            const aux = [...cart]
            aux[indice].cant = cantidad
            setCart(aux)
        } else {
            const nuevoProducto = {
                ...producto,
                cant : cantidad
            }
            /*const aux = carrito
            aux.push(nuevoProducto)
            setCarrito(aux)*/
            setCart([...cart,nuevoProducto])
        }
    }

    const emptyCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        /*const aux = [...carrito]
        const indice = aux.findIndex(prod => prod.id === id)
        setCarrito(aux.splice(indice,1))*/
        setCart(cart.filter(prod => prod.id !== id))
    }

    const getItemQuantity = () => {
        return cart.reduce((acum,prod) => acum += prod.cant, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acum, prod) => acum += (prod.cant * prod.price), 0)
    }

    console.log(cart)
    return (
        <CartContext.Provider value={{cart, isInCart, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
            {props.children}
        </CartContext.Provider>
    )

}