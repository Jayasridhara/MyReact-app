import { useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData, useNavigate } from 'react-router';

const Dashboard = () => {

    const navigate = useNavigate();
   const todos = useLoaderData();

    

    const handleLogout = () => {
        alert('User Logged Out!');

        setTimeout(() => {
            navigate('/login');
        }, 500);
    }
   console.log(todos);
    return (
        <div>
            <h1>Dashboard</h1>
            <p>User logged in! <button onClick={handleLogout}>logout</button></p>
            {
                todos.length > 0 ? (
                    <ul>
                        {
                            todos.map(todo => (
                                <li key={todo.id}>
                                    <Link to={`/todo/${todo.id}`}>
                                        {todo.content}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                ) : (
                    <p>No todos found.</p>
                )
            }
        </div>
    )
}

export default Dashboard