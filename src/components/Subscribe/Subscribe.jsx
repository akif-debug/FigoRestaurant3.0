import React from 'react'
import './Subscribe.css'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const Subscribe = () => {
	return (
		<div className='container subs-container'>
			<div className="row subs-container_row">
				<h3 className="subs-heading-1">subcription</h3>
				<h3 className="subs-heading-2">Wants to Get Update?</h3>
				<div className="col-lg-12 subs-container_col">
					<input className='subs-input' type="email" placeholder='enter your email address'/>
					<BsFillArrowRightCircleFill className='subs-input-icon'/>
				</div>
			</div>
		</div>
	)
}

export default Subscribe