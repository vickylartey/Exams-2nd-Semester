import React, { useState } from 'react'
//import Header from './Header'

function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault();

    console.log(username, password)
    }

  return (
    <div>
      <form className='form' >
        <h1>SignUp</h1>
        <label>Username:</label>
        <input 
        type='text'
        onChange={(e) => setEmail(e.target.value)}
        value={username}
        />
        <label>Password:</label>
        <input 
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />


        <button onClick={handleSubmit}>SignUp</button>
    </form>
    </div>
    
  )
}

export default SignUp