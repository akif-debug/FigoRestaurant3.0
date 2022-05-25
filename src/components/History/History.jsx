import React from 'react'
import './History.css'
import burgerImg from '../../assets/burgerImage1.png'

const History = () => {
	return(
		<div className="container history-container">
			<div className="row history-container_row">
				<div className="col-lg-6 history-container_col">
					<h2 className="history-h3">History of Figo</h2>
					<h3 className='history-h2'>we cook traditional & family recipes</h3>
					<p className="history-p">Quickly predominate standards compliants architectures and 
					prospective internal or "organic" sources. Synergistically mesh quality quality 
					vectors for one-to-one leadership.</p>
					<p className="history-p">Quickly predominate standards compliants architectures and 
					prospective internal or "organic" sources. Synergistically mesh quality quality 
					vectors for one-to-one leadership.</p>
					<button className='history-btn'>explore our story</button>
				</div>	
				<div className="col-lg-6 history-container_col"><img src={burgerImg} /></div>
			</div>
		</div>
	)
}

export default History