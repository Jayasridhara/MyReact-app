import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router'

function Todo() {
    const [params]=new useSearchParams();
    console.log(params);
   const id=params.get('id');
   const [todo, setTodo] = useState(null);
   useEffect(()=>{
    if (!id) return;
    setTodo(null);
        fetch(`https://687b37adb4bc7cfbda8502db.mockapi.io/todos/${id}`)
        .then(response=>response.json())
        .then(setTodo)
        .catch(err => {
        console.error('Error fetching todo', err);
       
      });

   },[id])

    if (todo === null) {
    return <p>Loading...</p>;
  }
 


  return (
    <div>
        <p><strong>ID:</strong>{todo.id}</p>
        <p><strong>Content:</strong>{todo.content}</p>
        <p><strong>IsComplete</strong>{todo.isCompleted}</p>
        <p>{todo.createdAt}</p>
        
    </div>
  )
}

export default Todo