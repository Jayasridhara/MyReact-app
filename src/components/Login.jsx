import React from 'react'
import { Link, useNavigate } from 'react-router'

function Login() {
      const navigate=useNavigate();
    const handlelogin=(event)=>
    {
        event.preventDefault();
        alert("user logged in ");
        setTimeout(() => {
            // Redirect to home page after login
            navigate('/dashboard');
        }, 500);
    }
  return (
    <div>
        <h1>Login</h1>
        <form action="" onSubmit={handlelogin}>
            <div >

                <input type="text" name="email" id="" />

            </div>
            <div className="">
                <input type="password" name="password" id="" />
            </div>
             <button type='submit'>Login</button>
            <div className="">
                Don't have an account?
                <Link to={"/register"}>Register</Link>
            </div>
        </form>
    </div>
  )
}

export default Login