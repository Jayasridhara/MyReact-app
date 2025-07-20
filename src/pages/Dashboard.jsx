import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLoaderData, useNavigate } from 'react-router';
import todoServices from '../service/todoServices';
import instance from '../instance/instance';

function Dashboard() {
    const navigate=useNavigate();
    const todos=useLoaderData();
    const [newTodo,setNewTodo]=useState('');
    const [filter,setFilter]=useState("all");
    const handleLogout=(event)=>{
        event.preventDefault();
        alert("User Logged Out")
       setTimeout(()=>{
        navigate('/login');
       },500) 
    }
   console.log(todos);
   
   const handleAddTodo=async (event)=>
   {
    event.preventDefault();
   
    await todoServices.createTodo(newTodo)
    .then('TODO addded successfully');
    setNewTodo('');
    navigate('/dashboard');
   }
   const handleUpdateTodo=async (id,todo)=>{
        await todoServices.updateTodo(id,todo)
        .then(()=>{
            navigate('/dashboard')
        })
   }
  return (
    <div>
        <h2>Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
        <div>
            Filter:
            <select value={filter}  onChange={(e)=>{setFilter(e.target.value)}}>
                <option value="all">all</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>

            </select>
            &nbsp;&nbsp;
            <p>{todos.filter(todo=>todo.isCompleted).length} out of {todos.length}  tasks done</p>
        </div>
        {
            todos.length>0?(
                <div>
                    {
                            todos
                                .filter(todo => {
                                    if (filter === 'completed') {
                                        return todo.isCompleted;
                                    } else if (filter === 'pending') {
                                        return !todo.isCompleted;
                                    }
                                    return true; // 'all' case
                                })
                                .sort((a, b) => a.isCompleted - b.isCompleted)
                                .map(todo => (
                                    <div key={todo.id}>
                                        <input
                                            type="checkbox"
                                            checked={todo.isCompleted}
                                            onChange={() => handleUpdateTodo(todo.id, todo)}
                                        />&nbsp;&nbsp;
                                        <Link to={`/todo/${todo.id}`}
                                            style={{
                                                textDecoration: todo.isCompleted ? 'line-through' : 'none',
                                                color: todo.isCompleted ? 'gray' : 'black'
                                            }}
                                        >
                                            {todo.content}
                                        </Link>
                                    </div>
                                ))
                        }
                </div>
            ):(
                <p>No todos found</p>
            )
        }
       

       <div>
        <form onSubmit={handleAddTodo}>
                    <input
                        type="text"
                        placeholder="Add a new todo"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        size={50}
                    />
                    <input
                        type="submit"
                        value="Add Todo"
                    />
                </form>
       </div>
    </div>
  )
}

export default Dashboard