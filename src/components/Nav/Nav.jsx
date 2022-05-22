import React, {useRef} from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import {BsHandbag} from 'react-icons/bs'
import bag from '../../assets/bag.png'
import {BiArrowToBottom} from 'react-icons/bi'
import {FaBars, FaTimes} from 'react-icons/fa'

const Nav = () => {
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav")
	}
	return (
		<header className='nav-header'>
			<h3 className='nav-brand'>Figo</h3>
			<nav ref={navRef}>
				<Link to='Home' className='nav-links'>Home</Link>
				<Link to='Menu' className='nav-links'>Menu</Link>
				<Link to='Menu' className='nav-links'>Service</Link>
				<Link to='Menu' className='nav-links'>Sign in</Link>
				<Link to='Menu' className='nav-links nav-icon'><img src={bag} /></Link>
				<button className='nav-btn nav-close-btn' onClick={showNavbar}>
					<FaTimes/>
				</button>
			</nav>
			<button className='nav-btn' onClick={showNavbar}>
				<FaBars/>
			</button>
		</header>
	)
}

export default Nav