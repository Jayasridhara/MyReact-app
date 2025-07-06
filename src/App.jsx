import React, { useEffect, useState } from 'react'
import Note from './components/Note';

function App() {
  const [notes,setNote]=useState([]);
  
  useEffect(()=>{
    fetch(`https://68457069fc51878754db59b6.mockapi.io/notes`)
  .then(response=>response.json())
  .then(data=>setNote(data))

  },[])

  console.log(notes);
  return(
    <div>
      <h1>NoteApp</h1>
      <ul>
        {
          notes.map((note,index)=>{
           return <Note note={note} key={note.id}/>
          })
           
        }
       
     </ul>

    </div>
  )
}

export default App
