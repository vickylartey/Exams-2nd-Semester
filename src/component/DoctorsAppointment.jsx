import React from 'react'
import "../App.css"
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

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
          <h1>Hello {user.firstName}</h1>
      <h1> Book a doctor's appointment here </h1>



          

          
          
          
          <div>
             {user ? (
                <span>
                  <span>{user?.firstName} {user?.lastName}</span>
                  <button
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </span>
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
        <p>Please login to book an appointment</p>
      }
      


      
    </div>

    )
}

export default DoctorAppointment;
