import {useState} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);

    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)

    const addToCart = () => onAdd(contador)
    
    return (
        <div className='flex flex-col justify-center align-middle m-5'>
            <div className='flex flex-row align-middle justify-center mb-5'>
                <button onClick={sumar} className='p-5 rounded-md hover:bg-gray-500 hover:shadow-md duration-200 bg-dark text-white' >+</button>
                <p className=' font-extralight text-3xl m-5'>{contador}</p>
                <button onClick={restar} className='p-5 rounded-md hover:bg-gray-500 hover:shadow-md duration-200 bg-dark text-white'>-</button>
            </div>
            
            <button onClick={addToCart} className='bg-dark font-thin text-white p-6 text-3xl rounded-md hover:bg-indigo-500 hover:shadow-md duration-200'>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;