import React from 'react'
import './Join.css'
const Join = () => {
  return (
    <div className="join" id='join-us'>
        <div className="left-j">
           
        <form action="" className='email-container'>
            <input type="email" name='user_email' placeholder='Enter you Email' />
            <button className='btn btn-j'>JOIN NOW</button>
        </form>
        </div>
    </div>
  )
}

export default Join