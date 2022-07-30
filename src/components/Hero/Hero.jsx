import React from 'react'
import Header from '../Header/Header';
import photo7 from '../Hero/photo7.jpg'

import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      {/* <img src={photo7} alt="" className="hero-image"/> */}

      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="" style={{width:30}}>
          <div></div>
          <span></span>
        </div>
<br />
        <div className="hero-text">
          <div>
            <span>LET'S DO </span><span className="stroke-text">SHOPPING</span>

          </div>
          <div>
            {/* <span>
              Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur adipisicing elit. Sit ab a optio.
            </span> */}
          </div>
        </div>
        <br />
       <div className="figures">
         <div>
              <span>+14000</span>
              <span>Our Services</span>
        </div>
         <div>
              <span>+9780</span>
              <span>Our Branches</span>
          </div>

         <div>
              <span>+50</span>
              <span>Our Destination</span>
        </div>

       </div>
       <div className="hero-bottons">
        <buttons className="btn" style={{width:30}}>GET STARTED</buttons>
        {/* <buttons className="btn">LEARN MORE</buttons> */}

      </div>
      </div>
     
    
       {/* <button className='btn'>JOIN NOW</button> */}

       {/* <div className="heart-rate">
        {/* <img src={heart} alt="" /> */}
        {/* <i className="fa fa-heart"></i>
        <i className="red fa fa-heart"></i>
        <i className="fa fa-heart"></i>  */}


        {/* <span>Heart Rate</span> */}
       {/* </div> */}

       {/* <img src={link7} alt="" className="hero-image"/> */}
     </div>
 
  )
}

export default Hero;