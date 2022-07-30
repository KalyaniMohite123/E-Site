import React from 'react'
import './Header.css'
import link7 from '../../assets/link7.png'

const Header = () => {
  return (
    <div className="header">
        <img src={link7} alt="" className='logo'/>
        <ul className='header-menu'>
        <li >HOME</li>
        <li>PROGRAM</li>
        <li>WHY US</li>
        <li><span>PLANS</span></li>
        <li>TESTIMONIALS</li>


    </ul>
    </div>
   
  )
}

export default Header