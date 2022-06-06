import React from 'react'
import './Footer.css' 
import {Link} from 'react-router-dom'
import {AiFillInstagram, AiFillGoogleCircle, AiFillTwitterCircle} from 'react-icons/ai'
import {MdOutlineFacebook} from 'react-icons/md' 
import FooterData from './FooterData.json'

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
				{FooterData.map((item, index) => {
					return(
					<div className="col-lg-3 footer-container_col">
						<li className='footer-box-heading'>{item.headlink}</li>
						<li className='footer-link'>{item.link1}</li>
						<li className='footer-link'>{item.link2}</li>
						<li className='footer-link'>{item.link3}</li>
					</div>
					)
				})}
			</div>
		</div>
		</section>
	)
}

export default Footer