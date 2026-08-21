import React from 'react'
import './About.css'
import { IoBook } from "react-icons/io5";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const About = () => {
  return (
    <div className='re'>
        <div className='vg'>
            <div className='we'>
                <b style={{fontSize:'30px'}}>About MyLibrary</b><br /><br />
            <span>My Library is a digital library platform that connects <br /> readers with a vast collection of books <br /> 
                from various genres and categories.
            </span>
            </div>
            <div className='io'>
                <img src="https://t4.ftcdn.net/jpg/12/31/98/59/240_F_1231985994_qk988SSb9Ie2iAoUpKELQO966iNK4aG3.jpg" alt="" />
            </div>
        </div>
        <div className='jj'>
            <div className='ff'>
                <IoBook className='yac'/><br />
                <b>Our Collection</b><br />
                <span>We offer thousand of books accross multiple categories.</span>
            </div>
            <div className='ff'>
                <MdOutlineSupervisorAccount className='yac'/><br />
                <b>Our Vision</b><br />
                <span>To build a community of lifelong readers</span>
            </div>
            <div className='ff'>
                <MdOutlineVerifiedUser className='yac'/><br />
                <b>Quality & Trust</b><br />
                <span>We ensure quality content and  a safe reading experiance.</span>
            </div>
            <div className='ff'>
                <BiSupport className='yac'/><br />
                <b>24/7 Support</b><br />
                <span>We are here to help you anything,anywhere.</span>
            </div>
        </div>
    </div>
  )
}

export default About