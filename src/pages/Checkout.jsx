import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDarkModeContext } from '../context/DarkModeContext';
import { useCartContext } from '../context/CartContext';
import { createPurchaseOrder, getPurchaseOrder, getProduct, updateProduct } from '../assets/firebase';
import { toast } from 'react-toastify';

const Checkout = () => {

    const {totalPrice, cart, emptyCart} = useCartContext()
    const {darkMode} = useDarkModeContext()
    const formData = React.useRef()
    let navigate = useNavigate()

    const consultForm = (e) => {
        e.preventDefault()
        const datForm = new FormData(formData.current)
        const client = Object.fromEntries(datForm)


        const aux = [...cart]
        aux.forEach(prodCart => {
          getProduct(prodCart.id).then(prodBDD => {
            if(prodBDD.stock >= prodCart.cant){
              prodBDD.stock -= prodCart.cant
              updateProduct(prodCart.id, prodBDD)
            }else{
              console.log("stock No valido")
            }
          }) 
        })

        createPurchaseOrder(client, totalPrice(), new Date().toISOString()).then(purchaseOrder => {
          getPurchaseOrder(purchaseOrder.id).then(item => {
            toast.success(`¡Muchas por su compra! su orden de compra es: ${item.id}`)
            emptyCart()
            navigate("/")
          }).catch(error => {
            toast.error("Su orden no fue generada con exito")
            console.error(error)
        })
        })

        console.log(formData)
    }

    return (

      <div class={`flex flex-col justify-center items-center duration-300 p-20 pt-40 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
        <form className='w-[90%] lg:w-[75%]' onSubmit={consultForm} ref={formData}>
              <input type="text" name='name' class="py-2 w-full text-xl text-gray-500 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600" placeholder="Nombre Y Apellido" required />
              <input type="text" name='email' class="py-2 w-full text-xl text-gray-500 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600" placeholder="E-mail" required />
              <input type="text" name='dni' class="py-2 w-full text-xl text-gray-500 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"  placeholder="DNI" required />
              <input type="tel" name='phoneNumber' class="py-2 w-full text-xl text-gray-500 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600" placeholder="Numero Telefonico" required />
              <input type="text" name='address' class="py-2 w-full text-xl text-gray-500 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600" placeholder="Direccion" required />
              
          <button type="submit" class="text-white bg-gray-700 p-5 mt-5 rounded-md text-xl font-bold duration-300 hover:bg-indigo-500">Finalizar Compra</button>
        </form>
      </div>
    );
}

export default Checkout;