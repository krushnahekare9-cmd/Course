import React from 'react'
import './Books.css'
import { FaShoppingCart } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";

const Books = () => {
  return (
    <div className='lp'>
        <div className='rt'>
            <span style={{color:'white'}}><b>All Books</b></span>
        </div>
        
        <div className='tata'>
            <div className='gg'>
                <div className='vv'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS522ehNM6_Igmm8PKHyDECvC0ZRWsUmhOYzSX-zXPk0g&s=10" alt="" />
                </div>
                <b>The Alchemist</b><br />
                <span>Paulo Coelho</span><br />
                <button style={{width:'100px',backgroundColor:'blue',color:'white',border:'3px black',borderRadius:'2px'}}><FaShoppingCart /> Add to Cart</button><br />
                <button style={{width:'100px',color:'red',marginTop:'10px'}}><FcLikePlaceholder /> Interested </button>
            </div>
            <div className='gg'>
                <div className='vv'>
                    <img src="https://i0.wp.com/freedom.to/blog/wp-content/uploads/2018/10/Atomic_Habits-2.png?fit=1024%2C1012&ssl=1" alt="" />
                </div>
                <b>Atomic Habits</b><br />
                <span>James Clear</span>
                <button style={{width:'100px',backgroundColor:'blue',color:'white',border:'3px black',borderRadius:'2px'}}><FaShoppingCart /> Add to Cart</button><br />
                <button style={{width:'100px',color:'red',marginTop:'10px'}}><FcLikePlaceholder /> Interested </button>
            </div>
            <div className='gg'>
                <div className='vk'>
                    <img src="https://m.media-amazon.com/images/I/71A8N5mbebL._AC_UF1000,1000_QL80_.jpg" alt="" />
                </div>
                <b>Chhava</b><br />
                <span>Shivaji Savant</span><br />
                <button style={{width:'100px',backgroundColor:'blue',color:'white',border:'3px black',borderRadius:'2px'}}> <FaShoppingCart /> Add to Cart</button><br />
                <button style={{width:'100px',color:'red',marginTop:'10px'}}><FcLikePlaceholder /> Interested </button>
            </div>
            <div className='gg'>
                <div className='vv'>
                    <img src="https://m.media-amazon.com/images/I/81vpUexhTLL._AC_UF1000,1000_QL80_.jpg" alt="" />
                </div>
                <b>Mahabharata</b><br />
                <span>the sage Vyasa</span>
                <button style={{width:'100px',backgroundColor:'blue',color:'white',border:'1px black',borderRadius:'2px'}}><FaShoppingCart /> Add to Cart</button><br />
                <button style={{width:'100px',color:'red',marginTop:'10px'}}><FcLikePlaceholder /> Interested </button>
            </div>
        </div>
    </div>
  )
}

export default Books