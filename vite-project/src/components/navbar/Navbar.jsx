import React, { useState } from 'react'
import "./Navbar.scss"
import { Link, NavLink  } from 'react-router-dom'
import Burger from "../../img/menu-burger.svg"


const Navbar = () => {

	const [open, setOpen] = useState(false)
	return (
		<div className='name container'>
			<h1>Elbek</h1>
			<ul className={open ? "nav-burger-mobile"  : "nav-burger"} onClick={() => setOpen(false)}>
				<NavLink to="/"><li>Home</li></NavLink>
				<NavLink to="/about"><li>About</li></NavLink>
				<NavLink to="/contact"><li>Contact</li></NavLink>
			</ul>

			<div className='burger' onClick={() => setOpen(!open)}>
				<img src={Burger} alt="burger" />
			</div>
		</div>
	)
}

export default Navbar