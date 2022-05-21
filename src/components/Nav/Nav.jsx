import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import {BsHandbag} from 'react-icons/bs'
import bag from '../../assets/bag.png'

const Nav = () => {
	return (
		<>
				<div className="nav-container">
			<nav className="nav">
					<div className="nav-left-side">
						<Link to='Home' className='nav-brand'>Figo</Link>
					</div>
					<div className="nav-right-side">
						<Link to='Home' className='nav-links'>home</Link>
						<Link to='Menu' className='nav-links'>menu</Link>
						<Link to='' className='nav-links'>service</Link>
						<Link to='' className='nav-links'>sign in</Link>
						<Link to='' className='nav-links nav-icon'><img src={bag} /></Link>
					</div>
			</nav>	
				</div>
		</>
	)
}

export default Nav