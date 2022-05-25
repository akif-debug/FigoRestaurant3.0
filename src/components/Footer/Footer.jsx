import React from 'react'
import './Footer.css' 
import {Link} from 'react-router-dom'
import {AiFillInstagram, AiFillGoogleCircle, AiFillTwitterCircle} from 'react-icons/ai'
import {MdOutlineFacebook} from 'react-icons/md' 

const Footer = () => {
	return (
		<section id="footer">
		<div className='container footer-container'>
			<div className="row footer-container_row">
				<div className="col-lg-3 footer-container_col">
					<div className="footer-col_box">
						<li><Link to='/' className='footer-brand'>Figo</Link></li>
						<li><p className="footer-para">Don't miss to subscribe to our news feeds, Kindly fill the form bellow</p></li>
						<li><span className="footer-icon"><AiFillInstagram/></span> <span className="footer-icon"><AiFillGoogleCircle/></span> <span className="footer-icon"><MdOutlineFacebook/></span> <span className="footer-icon"><AiFillTwitterCircle/></span></li>
					</div>	
				</div>
				{/*///////////////////////////////////////////////*/}
				<div className="col-lg-3 footer-container_col">
					<li className='footer-box-heading'>our menu</li>
					<li className='footer-link'>Lunch</li>
					<li className='footer-link'>Dinner</li>
					<li className='footer-link'>Catering</li>
				</div>
				<div className="col-lg-3 footer-container_col">
					<li className='footer-box-heading'>Links</li>
					<li className='footer-link'>About Us</li>
					<li className='footer-link'>Terms of Use</li>
					<li className='footer-link'>Privacy Policy</li>
				</div>
				<div className="col-lg-3 footer-container_col">
					<li className='footer-box-heading'>Contact</li>
					<li className='footer-link'>+91-9717931735</li>
					<li className='footer-link'>13.5coder@gmail.com</li>
					<li className='footer-link'>Delhi, Kashmiri Gate</li>
				</div>
			</div>
		</div>
		</section>
	)
}

export default Footer