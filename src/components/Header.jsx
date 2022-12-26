import React from 'react'
import { useDarkModeContext } from '../context/DarkModeContext';

// codigo de gpt3
const images = [
    'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-coder-1c951.appspot.com/o/nike-air-huarache.jpg?alt=media&token=95b16a4a-d88c-4432-9aec-00cd981b9cbe',
    'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-coder-1c951.appspot.com/o/nike-blazer-mid.jpg?alt=media&token=4cde408e-ba02-44e3-af34-deed0830326b',
    'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-coder-1c951.appspot.com/o/nike-dunk-hi.jpg?alt=media&token=b5894cf6-4911-42ce-a7e6-54e6cec335d9',
    'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-coder-1c951.appspot.com/o/jordan-retro-4.jpg?alt=media&token=930c55c5-9f19-47db-890b-d9dac4008749',
    'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-coder-1c951.appspot.com/o/jordan-retro-1.jpg?alt=media&token=4ac8e973-4ea7-4547-b7de-0b138a86e34a',
    'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-coder-1c951.appspot.com/o/nike-air-force-1.jpg?alt=media&token=b4d500ca-3f4e-4f23-b70e-55bdd1f84423',
    'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-coder-1c951.appspot.com/o/nike-air-max-90.jpg?alt=media&token=663364e5-149d-4041-9d3b-5913e23a48ce',
    'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-coder-1c951.appspot.com/o/adidas-forum-low.jpg?alt=media&token=a449e432-9246-4e9e-901a-7f29cf0594b2',
    'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-coder-1c951.appspot.com/o/adidas-astir.jpg?alt=media&token=f26c19d7-ced1-41c8-944b-20aa43cbe377',
    'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-coder-1c951.appspot.com/o/nike-air-max-97.jpg?alt=media&token=d1cf26f5-4b96-4a40-b77e-4cb254f77d73',
    'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-coder-1c951.appspot.com/o/nike-lebron-xix.jpg?alt=media&token=779793d8-d12f-4ef9-b7fe-5e1369d055f9',
    'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-coder-1c951.appspot.com/o/nike-kyrie-infinity.jpg?alt=media&token=20125567-7155-4fa4-87f1-473f21bb152c',
    'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-coder-1c951.appspot.com/o/nike-kd-15.jpg?alt=media&token=8f623303-a334-4aa4-b814-306c557762cd',
    'https://firebasestorage.googleapis.com/v0/b/react-ecommerce-coder-1c951.appspot.com/o/adidas-harden.jpg?alt=media&token=e6173502-6a78-437d-bf75-b816b30de991'
]
  
  const selectedImageIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[selectedImageIndex];

const Header = () => {

    const {darkMode}=useDarkModeContext()



  return (
    <div className={`p-20 pt-40 flex flex-col lg:flex-row items-center justify-evenly duration-300 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
        <div className={`rounded-full flex justify-center align-middle duration-300 ${darkMode ? "bg-white" : "bg-black"}`}>
            <img src={selectedImage} className=' lg:rotate-45 duration-300 hover:rotate-0' alt="" />
        </div>

        <div className='flex flex-col justify-center align-middle'>
            <h1 className=' text-5xl font-serif font-bold'>"We are what we wear"</h1>
            <h3 className='text-2xl font-thin'>Explore the new collections of sneakers</h3>
        </div>
    </div>
  )
}

export default Header

