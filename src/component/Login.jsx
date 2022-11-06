import React from 'react'
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log(email, password)
  }

return (
  <div>
    <Header />
    <form onSubmit={handleSubmit} className='form'>
      <h1>Login</h1>
      <label>Email:</label>
      <input 
      type='email'
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      />
      <label>Password:</label>
      <input 
      type='password'
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      />


      <button>Login</button>
  </form>
  </div>
  
)
}

export default Login