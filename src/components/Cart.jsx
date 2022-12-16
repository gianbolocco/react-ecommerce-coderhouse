import { Link } from "react-router-dom";

import { useCartContext } from '../context/CartContext';

const Cart = () => {

    const {cart, emptyCart, totalPrice, removeItem} = useCartContext()

    return (
        <div className="pt-20">
        {
            cart.length === 0 ?
                <>    
                    <h1>Carrito vacio</h1>
                    <button className="btn btn-dark"><Link to={'/'}>Continuar contando</Link></button>
                </>
                :
                <>
                    <div className="flex flex-col justify-center align-middle items-center">
                        {
                        cart.map(prod => 
                            <div className="mb-3" key={prod.id}>
                                <div className="">
                                    <div>
                                        <img src={`./images/${prod.img}`} alt="" />
                                    </div>
                                    <p>{prod.productName}</p>
                                    <p>Cantidad: {prod.cant}</p>
                                    <p>Precio unitario: ${prod.price}</p>
                                    <p>Precio total: ${prod.price * prod.cant}</p>
                                </div>
                                <button onClick={() => removeItem(prod.id)}>Eliminar producto</button>
                            </div>
                        )}
                        <div>
                            <p>Total: ${totalPrice()}</p>
                            <button onClick={emptyCart}>Vaciar carrito</button>
                            <button className="btn btn-dark"><Link to={'/checkout'}>Finalizar Compra</Link></button>
                            <button className="btn btn-dark"><Link to={'/'}>Continuar contando</Link></button>
                        </div>
                    </div>
                    
                </>
        }
        </div>
    );
}

export default Cart;


{/* <div className="pt-20">
            <h1>Imaginen productos</h1>
            <button className="btn btn-dark"><Link to={'/checkout'}>Finalizar Compra</Link></button>
        </div> */}