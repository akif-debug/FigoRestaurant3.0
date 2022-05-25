import React from 'react'
import './Testi.css'
import {ImQuotesLeft} from 'react-icons/im'
import {ImQuotesRight} from 'react-icons/im'
import TestiData from './TestiData'

const Testi = () => {
  return (
    <div className='container testi-container'>
      <div className="row testi-container_row">
      <h3 className='testi-heading-1'>Testimonials</h3>
        <h3 className='testi-heading-2'>food lover's say</h3>
      {TestiData.map((item, index) => {
        return(
        <div className="col-lg-3 testi-container_col">
          <div className="testi-container_box">
            <img src={item.img} className='testi-container_img' />
            <div className="testi-container_text_box">
              <h4 className='testi-container_col_h4'>{item.name}</h4>
              <p className='testi-container_col_p'><ImQuotesLeft className='quote-icon'/> {item.heading} <ImQuotesRight className='quote-icon'/></p>
            </div>
          </div>
        </div>
        )
      })}
      </div>
    </div>
  )
}

export default Testi