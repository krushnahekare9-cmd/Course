import React from 'react'
import Home from './Home'
import Books from './Books'
import About from './About'
import Error from './Error'
import { FaBookReader } from "react-icons/fa";

import './Class.css'
import { Route,Routes,NavLink } from 'react-router-dom'
const App = () => {
  return (
    <div>
      
      <div className='aa'>
        <div className='fu'>
        <b><FaBookReader /> MyLibrary</b>
        </div>

        <div className='bb'>
        <NavLink to='/home'className="sx">Home</NavLink>
        <NavLink to='/books'className="sx">Books</NavLink>
        <NavLink to='/about'className="sx">AboutUs</NavLink>
        </div>
      </div>
      <div>
        <Routes>
          <Route path='*' element={<Error></Error>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/books' element={<Books></Books>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          
        </Routes>
        </div>
    </div>
  )
}

export default App