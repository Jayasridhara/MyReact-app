import React from 'react'
import { Link, useNavigate } from 'react-router'

function Register() {
    const navigate=useNavigate();
    const handleregister=(event)=>
    {
        event.preventDefault();
        alert("user Registed");
        navigate('/login')
    }
  return (
    <div><form action="" onSubmit={handleregister}>
        <div >
<h1>Register</h1>
          <input type="text" name="email" id="" />

            </div>
            <div className="">
                <input type="password" name="password" id="" />
            </div>
            <button type='submit'>Register</button>
            <div className="">

                Already  have an accout
                <Link to="/login">Login</Link>
            </div>


        </form></div>
  )
}

export default Register