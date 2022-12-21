import { Link } from "react-router-dom";

import { useCartContext } from '../context/CartContext';

import { useDarkModeContext } from '../context/DarkModeContext';

const Cart = () => {

    const {cart, emptyCart, totalPrice, removeItem} = useCartContext()

    const {darkMode} = useDarkModeContext()

    return (
        <div className={`pt-20 duration-300 ${darkMode ? "bg-black" : "bg-white"}`}>

        {
            cart.length === 0 ?
                <div className={`flex flex-col justify-center items-center min-h-[60vh] duration-300 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>  
                    <h1 className="text-6xl mb-10 font-thin">Carrito vacio</h1>
                    <button className="p-5 duration-300 text-2xl bg-gray-900 text-white hover:bg-indigo-500 rounded-md"><Link to={'/'}>Continuar contando</Link></button>
                </div>
                :
                <>
                    <div className=" min-h-[60vh] flex flex-col lg:flex-row justify-center align-middle items-center">

                        <div>
                            {cart.map(prod => 
                                <div key={prod.id} className={`lg:w-[75%] px-5 mb-3 duration-300 m-5 rounded-md hover:shadow-lg flex flex-col lg:flex-row justify-evenly items-center ${darkMode ? 'bg-gray-900 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-black'}`}>

                                    <img className=" w-64 lg:w-[25%]" src={`${prod.img}`} alt="" />
                                    <div>
                                        <p className="my-5 text-2xl font-bold">{prod.productName}</p>
                                        <p className="mb-5"><span className=" font-extrabold">Cantidad:</span> {prod.cant}</p>
                                        <p className="mb-5"><span className=" font-extrabold">Precio unitario:</span> ${prod.price}</p>
                                        <p className="mb-5"><span className=" font-extrabold">Precio total:</span> ${prod.price * prod.cant}</p>
                                    </div>
                                    <button className="text-red-500 pb-5 lg:pb-0 font-bold text-lg" onClick={() => removeItem(prod.id)}>Eliminar producto</button>
                                </div>
                            )}
                        </div>
                        
                        <div className={`p-10 m-5 rounded-md duration-300 flex flex-col justify-evenly items-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
                            <p className="mb-10 text-5xl">Total: <span className=" font-extralight">${totalPrice()}</span> </p>
                            <button className="text-red-500 font-bold text-xl mb-10" onClick={emptyCart}>Vaciar carrito</button>
                            <button className="font-bold text-xl duration-300 bg-black text-white rounded-md hover:bg-indigo-500 p-5"><Link to={'/checkout'}>Finalizar Compra</Link></button>
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