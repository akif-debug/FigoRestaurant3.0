import React, {useRef} from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import {BsHandbag} from 'react-icons/bs'
import bag from '../../assets/bag.png'
import {BiArrowToBottom} from 'react-icons/bi'
import {FaBars, FaTimes} from 'react-icons/fa'
import Home from '../Home/Home'
import Welcome from '../Welcome/Welcome'
import Reason from '../Reason/Reason'
import Menu from '../Menu/Menu'
import History from '../History/History'
import Testi from '../Testi/Testi'
import News from '../News/News'
import Subscribe from '../Subscribe/Subscribe'
import Footer from '../Footer/Footer'

const Nav = () => {
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav")
	}
	return (
		<>
		<header className='nav-header'>
			<Link to='/' className='nav-brand'>Figo</Link>
			<nav ref={navRef}>
				<Link to='Home' className='nav-links'>Home</Link>
				<Link to='Menu' className='nav-links'>Menu</Link>
				<Link to='Menu' className='nav-links'>Service</Link>	
				<Link to='Menu' className='nav-links'>Sign in</Link>
				<Link to='/' className='nav-links nav-icon'><img src={bag} /></Link>
				<button className='nav-btn nav-close-btn' onClick={showNavbar}>
					<FaTimes className='navbar-bars'/>
				</button>
			</nav>
			<button className='nav-btn' onClick={showNavbar}>
				<FaBars className='navbar-bars'/>
			</button>
		</header>
		{/*Home-----------------------------------------------*/}
		<Home/>
		{/*Welcome--------------------------------------------*/}
		<Welcome/>
		{/*Reason---------------------------------------------*/}
		<Reason/>
		{/*Menu-----------------------------------------------*/}
		<Menu/>
		{/*History--------------------------------------------*/}
		<History/>
		{/*Testi----------------------------------------------*/}
		<Testi/>
		{/*News-----------------------------------------------*/}
		<News/>
		{/*Subscribe------------------------------------------*/}
		<Subscribe/>
		{/*Footer---------------------------------------------*/}
		<Footer/>
		</>
	)
}

export default Nav