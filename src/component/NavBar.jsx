import React from 'react'
import "../App.css"
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    
    <div>
      

      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/book-appointment'>Book Appointment</Link>
      <Link to='/login'>Login</Link>
      <Link to='signup'>Signup</Link>
      
    </div>

    )
}

export default NavBar;