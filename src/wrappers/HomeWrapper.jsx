import React from 'react'
import { Link } from 'react-router'
import { Outlet } from 'react-router'

function HomeWrapper() {
  return (
    <div>
      <h1><Link to={"/"}
      style={{textDecoration:"none",color:"black"}}>Todo App</Link></h1>
         <p>Welcome to ToDO App here you can manage effectively </p>
      <Outlet/>
    </div>
  )
}

export default HomeWrapper