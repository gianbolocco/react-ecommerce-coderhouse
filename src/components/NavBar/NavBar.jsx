import "./NavBar.css"
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar2() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3 className="text-3xl font-bold">Foot Locker</h3>
			<nav ref={navRef}>
                <Link to={'/'}><p className='lg:m-5 hover:text-blue cursor-pointer'>Inicio</p></Link>
                <p className='lg:m-5 cursor-pointer'>Productos</p>
                <p className='lg:m-5 cursor-pointer'>Nostros</p>
                <Link to={'/brand/Jordan'}><p className='lg:m-5 cursor-pointer'>Jordan</p></Link>
                <Link to={'/brand/Nike'}><p className='lg:m-5 cursor-pointer'>Nike</p></Link>
                <Link to={'/brand/Adidas'}><p className='lg:m-5 cursor-pointer'>Adidas</p></Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
                <CartWidget />
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar2;