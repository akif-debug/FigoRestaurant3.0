import React from 'react'
import './Menu.css'
import MenuData from './MenuData.js'
import {GiRoundStar} from 'react-icons/gi'

const Menu = () => {
	return (
		<div className='container menu-container'>
			<div className="row menu-container_row">
				<h3 className='menu-heading-1'>browse</h3>
				<h3 className='menu-heading-2'>Explore our menu</h3>
				{MenuData.map((item, index) => {
					return(
					<div className="col-lg-3 menu-container_col">
						<div className="menu-col_box">
							<img src={item.img} />
							<h2 className="box-h2">{item.heading}</h2>
							<span><GiRoundStar className='star-icon'/>
								<GiRoundStar className='star-icon'/><GiRoundStar className='star-icon'/>
								<GiRoundStar className='star-icon'/><GiRoundStar className='star-icon'/>
							</span>
							<p className="box-price">{item.price} <del className='box-del'>20</del></p>
						</div>
					</div>
					)
				})}
			</div>
		</div>
	)
}

export default Menu