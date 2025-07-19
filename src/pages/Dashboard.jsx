import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router';

function Dashboard() {
    const navigate=useNavigate();
    const [todos,setTodos]=useState([]);
    const handleLogout=(event)=>{
        event.preventDefault();
        alert("User Logged Out")
       setTimeout(()=>{
        navigate('/login');
       },500) 
    }
    useEffect(()=>{
        fetch(`https://687b37adb4bc7cfbda8502db.mockapi.io/todos`)
        .then(response=>response.json())
        .then(data=>setTodos(data));
    },[]);
   
  return (
    <div>
        <h2>Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>

        {
            todos.length>0?(
                <ul>
                   {
                     todos.map(todo=>(
                         <li key={todo.id}><Link to={`/dashboard/todo?id=${todo.id}`}>{todo.content}</Link></li>
                     ))
                   }
                </ul>
            ):(
                <p>No todos found</p>
            )
        }
        <Outlet/>
    </div>
  )
}

export default Dashboard