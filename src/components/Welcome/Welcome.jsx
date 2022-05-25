import React from 'react'
import './Welcome.css'
import Chef from '../../assets/Chef1.png'

const Welcome = () => {
	return (
		<div className='container welcome-container'>
			<div className="row welcome-container_row">
				<div className="col-lg-6 welcome-container_col"><img src={Chef} /></div>
				<div className="col-lg-6 welcome-container_col">
					<h3 className='welcome-h3'>Welcome</h3>
					<h2 className="welcome-h2">Welcome to Figo Restaurant</h2>
					<p className="welcome-p">Quickly predominate standards compliants architectures and 
					prospective internal or "organic" sources. Synergistically mesh quality quality 
					vectors for one-to-one leadership.</p>
					<p className="welcome-p">Quickly predominate standards compliants architectures and 
					prospective internal or "organic" sources. Synergistically mesh quality quality 
					vectors for one-to-one leadership.</p>
					<button className='welcome-btn'>explore our story</button>
				</div>
			</div>
		</div>
	)
}

export default Welcome