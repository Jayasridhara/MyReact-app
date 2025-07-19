import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div>
   
    use the navigation to login or register if you are new user
    <ul>
      <li><Link to={"/register"}>Register</Link></li>
      <li><Link to={"/login"}>Login</Link></li>
    </ul>
    </div>
  )
}

export default Home