import React from 'react'
import { Link, useNavigate } from 'react-router'

function Login() {

    const navigate=useNavigate();
    const handleLogin=(event)=>{
        event.preventDefault();
        alert('User Logged In!');
       setTimeout(()=>{
        navigate('/dashboard');
       },500) 
    }

  return (
    <div>
        <form action="" onSubmit={handleLogin}>
            <div>
                <input type="email" placeholder='email..'/>
            </div>
            <br />
            <div>
                <input type="password" placeholder='password..' />
            </div>
            <br />
            <div><button type='submit'>Login</button></div>
            <p>
                Don't have an account?<Link to={'/register'}>Register</Link>
            </p>
        </form>

    </div>
  )
}

export default Login