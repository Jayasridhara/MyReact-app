import React from 'react'
import { Link } from 'react-router'
import { Outlet } from 'react-router'

function HomeWrapper() {
  return (
    <div>  <h1 ><Link to={"/"}> To DO App</Link></h1>
    <p> Welcome to ToDO app</p>
    <Outlet/>
     </div>
    
  )
}

export default HomeWrapper