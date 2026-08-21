import React from 'react'
import './Home.css'
import { SlBookOpen } from "react-icons/sl";
import { BiCategory } from "react-icons/bi";
import { MdSupervisorAccount } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <div className='gh'>
        <div className='ui'>
        
           
        
        <div className='uu'>
            <span ><b>Welcome to MyLibrary</b> </span><br />
            <span>Your one-stop place to discover,<br />read and explore books.</span><br />
            <button style={{backgroundColor:'darkblue',color:'white',alignItems:'center',textAlign:'center',justifyContent:'center'}}>Browser Books<FaArrowRightLong /></button><br />
            </div>
            <div className='yy'>
            <img src="https://png.pngtree.com/png-vector/20231020/ourmid/pngtree-watercolor-library-book-clip-art-png-image_10285452.png" alt="books img" />
        </div>
        
        
        </div>
        <div className='lo'>
        <div className='hh'>
            <SlBookOpen className='fuc'/><br />
            <span><b>Huge Collection</b></span><br />
            <span>Thousands of books for every reader.</span>
        </div>
        <div className='hh'>
            <BiCategory className='fuc'/><br />
            <span><b>All Categories</b></span><br />
            <span>Fiction,non.fiction,Academic and more.</span>
        </div>
        <div className='hh'>
            <MdSupervisorAccount className='fuc'/><br />
            <span><b>Always Available</b></span><br />
            <span>Access anytime,anywhere.</span>
        </div>
        
        </div>
    </div>
  )
}

export default Home