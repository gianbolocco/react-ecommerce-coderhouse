import "./NavBar.css"
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import DarkModeButton from "./DarkModeButton";
import { useDarkModeContext } from "../../context/DarkModeContext";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const {darkMode} = useDarkModeContext()

	return (
		<header className={` shadow-md duration-300 ${darkMode ? 'text-white bg-black' : 'text-black bg-white'}`}>
			<Link to={'/'}><h3 className={`text-3xl font-bold`}>Foot Locker</h3></Link>
			<nav ref={navRef}>
                <Link to={'/'}><p className='lg:m-5 cursor-pointer text-xl font-bold hover:text-indigo-500 duration-300'>Inicio</p></Link>
                <Link to={'/productos'}><p className='lg:m-5 cursor-pointer text-xl font-bold hover:text-indigo-500 duration-300'>Productos</p></Link>
               	<Link to={'/Nosotros'}> <p className='lg:m-5 cursor-pointer text-xl font-bold hover:text-indigo-500 duration-300'>Nostros</p></Link>
                <Link to={'/brand/Jordan'}><p className='lg:m-5 cursor-pointer text-xl font-bold hover:text-indigo-500 duration-300'>Jordan</p></Link>
                <Link to={'/brand/Nike'}><p className='lg:m-5 cursor-pointer text-xl font-bold hover:text-indigo-500 duration-300'>Nike</p></Link>
                <Link to={'/brand/Adidas'}><p className='lg:m-5 cursor-pointer text-xl font-bold hover:text-indigo-500 duration-300'>Adidas</p></Link>


				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
                <CartWidget />
			</nav>
			<DarkModeButton />
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;