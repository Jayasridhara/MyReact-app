import React from 'react'
import { Link, useNavigate } from 'react-router'

function Register() {
    const navigate=useNavigate();
    const handleRegister=(event)=>{
        event.preventDefault();
        alert('User Registered!');
       setTimeout(()=>{
        navigate('/login');
       },500) 
    }
  return (
    <div>
        <form action="" onSubmit={handleRegister}>
            <div>
                <input type="email" placeholder='email..'/>
            </div>
            <br />
            <div>
                <input type="password" placeholder='password..' />
            </div>
            <br />
            <div><button type='submit'>Register</button></div>
            <p>
                Already have an account?<Link to={'/login'}>Login</Link>
            </p>
        </form>
        
        
    </div>
  )
}

export default Register