import React from 'react'
import "../App.css"
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    
    <div className="nav">
      

      <Link to='/'><p>Home</p></Link>
      <Link to='/about'><p>About</p></Link>
      <Link to='/book-appointment'><p>Book Appointment</p></Link>
      <Link to='/login'><p>Login</p></Link>
      <Link to='signup'><p>Signup</p></Link>
      
    </div>

    )
}

export default NavBar;