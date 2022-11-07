import React from 'react'
import "../App.css"
import {Link} from "react-router-dom" 


function ErrorPage() {
  return (
    
    <div>
      <h1>404 Error</h1>
      <p>The URL you are searching for does not exist here</p>

      <Link to='/'>Go Back</Link>
      
      
    </div>

    )
}

export default ErrorPage;