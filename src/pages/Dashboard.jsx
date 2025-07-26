import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLoaderData, useNavigate } from 'react-router';
import todoServices from '../service/todoServices';
import Todoitem from '../components/Todoitem';

function Dashboard() {
    const navigate=useNavigate();
    const todos=useLoaderData();
    const [newTodo,setNewTodo]=useState('');
    const [filter,setFilter]=useState("all");
    const [isEditing,setIsEditing]=useState('false');
    const [isEditingTodo,setIsEditingTodo]=useState({});

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
   const handleEditTodo = (event) => {
          event.preventDefault();

        todoServices.editAndUpdateTodo(isEditingTodo.id, { content: newTodo })
            .then(() => {
                alert('Todo updated successfully!');

                // clear the input field
                setNewTodo('');

                // reset editing state
                setIsEditing(false);
                setIsEditingTodo({});

                // reload the todos
                navigate('/dashboard');
            })
            .catch(error => {
                console.error("Error updating todo:", error);
            });
        setIsEditing(false);
        setIsEditingTodo({});
        setNewTodo(''); // Clear input after editing
   }
  const toggleEditMode = () => {
        setIsEditing(true);
        setNewTodo(''); // Clear input when toggling edit mode
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
                                   <Todoitem todo={todo} key={todo.id} handleUpdateTodo={handleUpdateTodo} toggleEditMode={toggleEditMode}
                                        setNewTodo={setNewTodo}
                                        setIsEditingTodo={setIsEditingTodo}/>
                                ))
                        }
                </div>
            ):(
                <p>No todos found</p>
            )
        }   
       

       <div>
        <form onSubmit={isEditing ? handleEditTodo : handleAddTodo}>
                    <input
                        type="text"
                        placeholder={isEditing ? 'Update your todo...' : 'Add a new todo...'}
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        size={50}
                    />
                    <input
                        type="submit"
                        value={isEditing ? 'Update Todo' : 'Add Todo'}
                    />
                </form>
       </div>
    </div>
  )
}

export default Dashboard