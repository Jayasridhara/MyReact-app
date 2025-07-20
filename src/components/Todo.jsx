import { useLoaderData, useNavigate, useParams, useSearchParams } from 'react-router'
import todoServices from '../service/todoServices';

function Todo() {
   const navigate=useNavigate();
   const todo=useLoaderData();

const handleback=(event)=>{

navigate(-1);
}

 const handleDelete = () => {
        confirm("Are you sure you want to delete this todo?") && todoServices.deleteTodos(todo.id)
            .then(() => {
                alert("Todo deleted successfully");

                setTimeout(() => {
                    navigate('/dashboard'); // Navigate to the todos list after deletion
                }, 500);
            })
    }
  return (
    <div>
        <p><strong>ID:</strong>{todo.id}</p>
        <p><strong>Content:</strong>{todo.content}</p>
        <p><strong>IsComplete:</strong>{todo.isCompleted?'true':'false'}</p>
        <p>{todo.createdAt}</p>
        <div>
            <button onClick={handleback}>Back</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default Todo