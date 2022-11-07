import React from 'react'

import { useState, useEffect } from 'react';
import "../App.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Login() {
  let location = useLocation();
  let success = location.state?.success;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { handleAuthLogin } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (success) {
      alert('success')
      navigate("/login", { state: undefined });
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await handleAuthLogin(username, password);
    if (res.success) {
      navigate("/book-appointment", {
        state: {
          username,
        },
      });
      setUsername("");
      setPassword("");
    } else {
      console.log(res.error);
      alert(res.error);
    }
  };

return (
  <div>

    <form 
      onSubmit={(e) => handleSubmit(e)} 
    className='form'>
      <h1>Login</h1>
      <div>
      <label>Username:</label>
      <input 
      type='text'
      onChange={(e) => setUsername(e.target.value)}
      value={username}
      />
      <label>Password:</label>
      <input 
      type='password'
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      />
    </div>

      <button>Login</button>
  </form>
    <Link to="/signup" >
              Dont have an account yet? Signup
            </Link>
  </div>
  
)
}

export default Login