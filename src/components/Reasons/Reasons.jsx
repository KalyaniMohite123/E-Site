import React from 'react'
import './Reasons.css'
import photo2 from '../../assets/photo2.jpg'
import photo3 from '../../assets/photo3.jpg'
import photo4 from '../../assets/photo4.jpg'
import photo5 from '../../assets/photo5.jpg'

import app1 from '../../assets/app1.png'
import app2 from '../../assets/app2.png'
import app4 from '../../assets/app4.png'


const Reasons = () => {
  return (
    <div className="Reasons" id='reasons'>
      <div className="left-r">
        <img src={photo2} alt="" width={500}/>
        <img src={photo3} alt=""  width={500} />
        <img src={photo4} alt=""  width={500}/>
        <img src={photo5} alt=""  width={500} />

      </div>
      <div className="right-r">
        <span>Some Reasons</span>
        <div>
          <span className="stroke-text">Why </span>
          <span>Choose Us??</span>
        </div>
        <div className="details-r">
          <div>
            <i class="fa fa-check-square-o" ></i>
            <span className='over'>OVER STANT FOR THR THE +REST 45%</span>
          </div>
            
          <div>
            <i class="fa fa-check-square-o" ></i>
            <span className='over'>OVER STANT FOR THR THE +REST 45%</span>
          </div>          
          <div>
            <i class="fa fa-check-square-o" ></i>
            <span className='over'>OVER STANT FOR THR THE +REST 45%</span>
          </div>
          <div>
            <i class="fa fa-check-square-o" ></i>
            <span className='over'>OVER STANT FOR THR THE +REST 45%</span>
          </div>       
      </div>
      <div>  
       
      </div>
      <h2>OUR PARNERSHIP</h2>    
        <div className="parters">
           <img src={app1} alt="" />
           <img src={app2} alt="" />

           <img src={app4} alt="" />

        </div>
      </div>
    </div>
  )
}

export default Reasons