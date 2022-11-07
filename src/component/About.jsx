import React from "react"
import {Link, Outlet} from "react-router-dom"





export default function About() {
  return (
    <main>
        <h1>About Us</h1>
      <div className="container"></div>
      <Link className="btn" to="/about/nested"><p>View more</p></Link>
      <Outlet/>
    </main>
  )
}