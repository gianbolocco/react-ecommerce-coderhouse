import {useState} from 'react';

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1);

    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)
    
    return (
        <div className='flex flex-col justify-center align-middle m-5'>
            <div className='flex flex-row align-middle justify-center mb-5'>
                <button className='p-5 rounded-md hover:bg-gray-500 hover:shadow-md duration-200 bg-dark text-white' onClick={() => sumar()}>+</button>
                <p className=' font-extrabold text-3xl m-5'>{contador}</p>
                <button className='p-5 rounded-md hover:bg-gray-500 hover:shadow-md duration-200 bg-dark text-white' onClick={() => restar()}>-</button>
            </div>
            
            <button className='bg-dark text-white p-6 text-3xl rounded-md hover:bg-indigo-500 hover:shadow-md duration-200'>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;