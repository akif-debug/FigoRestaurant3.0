import React from 'react'
import './Home.css'
import heroImg from '../../assets/heroImg.png'

const Home = () => {
	return (
		<div className='container hero-container'>
			<div className="row hero-container_row">
				<div className="col-lg-6 hero-container_col">
					<h2 className='hero-h2'>All in Good Taste Food With Figo.</h2>
					<p className='hero-p'>Quickly predominate standard compliant architecture
					and may have prospective internal or organic sources.</p>
					<form action="/">
						<input className='hero-input' type="text" required placeholder='Enter Your Address'/>
						<button type="submit" className='form-btn'>get started</button>
					</form>
				</div>
				{/*Another------------------------------------------------------------*/}
				<div className="col-lg-6 hero-container_col"><img src={heroImg} /></div>
			</div>
		</div>
	)
}

export default Home