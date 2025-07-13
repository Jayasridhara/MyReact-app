import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div>
        <h1>ToDoApp</h1>
        <p>
            Welcome to ToDO app
        </p>
        <ul>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
    </div>
  )
}

export default Home