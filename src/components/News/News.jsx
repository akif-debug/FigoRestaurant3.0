import React from 'react'
import './News.css'
import News1 from '../../assets/news1.png'
import NewsData from './NewsData'

const News = () => {
	return (
		<div className='container news-container'>
			<div className="row news-container_row">
				<h3 className="news-heading-1">News</h3>
				<h3 className="news-heading-2">latest news</h3>
				{NewsData.map((item, index) => {
					return(
					<div className="col-lg-4 news-container_col">
						<div className="news-col_box">
							<img src={item.img} className='news-img'/>
							<div className="news-container_text_box">
								<h4 className='news-container_col_h4'>{item.heading}</h4>
	              				<p className='news-container_col_p'>{item.para}</p>
	              				<button className='news-btn'>read more</button>
							</div>	
						</div>		
					</div>
					)
				})}
			{/*/////////////////////////*/}
			</div>	
		</div>
	)
}

export default News