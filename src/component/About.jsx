import React from "react"
import {Link, Outlet} from "react-router-dom"





export default function About() {
  return (
    <main>
        <h1>This is my about page</h1>
      <Link to="/about/nested"><p>View more</p></Link>
      <Outlet/>
    </main>
  )
}