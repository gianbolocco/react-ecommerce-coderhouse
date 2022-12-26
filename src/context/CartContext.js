import { useContext, useState, useEffect, createContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  //VerCantidad - Agregar productos - Eliminar producto -
  //Vaciar el carrito - FinalizarCompra - Buscar producto

  const isInCart = (id) => {
    //Retorna producto (V) o undefined (F)
    return cart.find((producto) => producto.id === id);
  };

  const addItem = (producto, cantidad) => {
    if (isInCart(producto.id)) {
      const indice = cart.findIndex((prod) => prod.id === producto.id);
      const aux = [...cart];
      aux[indice].cant = cantidad;
      setCart(aux);
    } else {
      const nuevoProducto = {
        ...producto,
        cant: cantidad,
      };
      setCart([...cart, nuevoProducto]);
    }
  };

  const emptyCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const getItemQuantity = () => {
    return cart.reduce((acum, prod) => acum += prod.cant, 0);
  };

  const totalPrice = () => {
    return cart.reduce((acum, prod) => acum += prod.cant * prod.price, 0);
  };

  console.log(cart);

  // Guardar el estado actual del carrito en el almacenamiento local cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Cargar el estado del carrito desde el almacenamiento local al inicializar el componente
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, isInCart, addItem, removeItem, emptyCart, getItemQuantity, totalPrice }}
    >
      {props.children}
    </CartContext.Provider>
  )
}