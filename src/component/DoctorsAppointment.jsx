import React from 'react'
import "../App.css"
import useAuth from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";

function DoctorAppointment() {
  const { user, handleAuthLogout } = useAuth()
  const navigate = useNavigate();
   const handleLogout = async () => {
    const res = await handleAuthLogout()
    if (!res) {
      alert("There was an error logging you out. Try again later")
      return
    }

    navigate('/');
     alert("you are logging out")
  }
  
  return (
    
    <div>
      {
        user ?
        <div>
          
          <p>Hi {user.firstName}</p>
      <h1> Book a doctor's appointment here </h1>
          <div className="container"></div>
          
          <div>
             {user ? (
                <p>
                  <span>{user?.firstName} {user?.lastName}</span>
                  <button
                    className="btn"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </p>
              ) : (
                <span>
                  <Link to="/login" >
                    Login
                  </Link>
                </span>  )
             }
          </div>
 </div>
        
        :
        <div>
           <h1>Please login to book an appointment</h1>
          <Link className="btn" to="/login"><p>Login here</p></Link>
        </div>
       
      }
      


      
    </div>

    )
}

export default DoctorAppointment;
