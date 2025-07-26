import React from 'react'
import { Link } from 'react-router'

function Todoitem({todo, handleUpdateTodo, toggleEditMode, setNewTodo, setIsEditingTodo}) {
 const handleEditTodo=async (todo) => {
        toggleEditMode();
        setNewTodo(todo.content);
        setIsEditingTodo(todo);
    }
  
  return (<div>
         <div>
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
                                        {
                                            <span className="material-symbols-outlined" onClick={() => handleEditTodo(todo)}>
                                                        edit
                                        </span>
                                        }
                                    </div>
    </div>
  )
}

export default Todoitem