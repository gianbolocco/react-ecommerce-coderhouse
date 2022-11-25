import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <div className='bg-dark rounded-lg flex flex-row items-center justify-evenly'>
      <h3 className='text-white text-2xl font-bold'>FootLocker</h3>
      <div className='text-white flex flex-row'>
        <p className='m-5 cursor-pointer'>Inicio</p>
        <p className='m-5 cursor-pointer'>Productos</p>
        <p className='m-5 cursor-pointer'>Nostros</p>
      </div>
      <CartWidget />
    </div>
  );
}