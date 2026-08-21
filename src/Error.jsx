import React from 'react'
import './Error.css'
import { FaHome } from "react-icons/fa";

const Error = () => {
  return (
    <div className='zx'>
      <div className='ck'>
        
        <div className='tf'>
          <div className='er'>
          <span style={{color:'DarkBlue'}}><b>404</b></span>
        </div>
          <span style={{color:'Red'}}>Oops! Page Not Found</span><br />
          <span>The page you're looking for dosen't exist or has been moved.</span><br />
          <button style={{backgroundColor:'Darkblue',color:'white',border:'2px solid black'}}><FaHome /> Go To Home</button>
        </div>
        <div className='aq'>
              <img src="https://i.pinimg.com/736x/9a/7c/58/9a7c58b1532f43d69be0dcaec9130495.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Error