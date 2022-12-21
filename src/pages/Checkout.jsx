import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDarkModeContext } from '../context/DarkModeContext';


const Checkout = () => {

  const {darkMode} = useDarkModeContext()
  
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosFormulario)
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
        console.log(cliente)
        e.target.reset()
        navigate("/")
    }

    return (

      <div class={`flex flex-col justify-center items-center p-20 pt-40 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
        <form className='w-[90%] lg:w-[75%]' onSubmit={consultarFormulario} ref={datosFormulario}>
          <div class="relative z-0 mb-6 group">
            <div class="relative z-0 mb-6 w-full group">
              <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_last_name" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre Y Apellido</label>
            </div>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <input type="text" name="floating_email" class="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_email" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-mail</label>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <div class="relative z-0 mb-6 w-full group">
              <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_last_name" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DNI</label>
            </div>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <div class="relative z-0 mb-6 w-full group">
              <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_phone" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero Telefonico (123-456-7890)</label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_company" class="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Direccion</label>
            </div>
          </div>
          <button type="submit" class="text-white bg-gray-700 p-10 rounded-md text-xl font-bold duration-300 hover:bg-indigo-500">Finalizar Compra</button>
        </form>
      </div>
    );
}

export default Checkout;