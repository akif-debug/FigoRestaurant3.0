import React from 'react'
import './Reason.css'  
import ReasonData from './ReasonData'

const Reason = () => {
	return (
		<div className='container reason-container'>
			<div className="row reason-container_row">
				<h3 className='reason-heading-1'>Reason</h3>
				<h3 className='reason-heading-2'>why choose us?</h3>
				{ReasonData.map((item ,index) => {
					return(	
					<div className="col-lg-4 reason-container_col">
						<div className="reason-container_box">
							<img src={item.icon} />
							<h2 className='reason-h2'>{item.heading}</h2>
							<p className='reason-p'>Etiam feugiat eleifend est, odio tempor 
							vitaeVivamus maximus scelerisque ipsum nec commodo.</p>
						</div>
					</div>	
					)
				})}
			</div>
		</div>
	)
}

export default Reason