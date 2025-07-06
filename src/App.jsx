// import React, { useEffect, useState } from 'react'
// import Note from './components/Note';

// function App() {
//   const [notes,setNote]=useState([]);
  
//   useEffect(()=>{
//     fetch(`https://68457069fc51878754db59b6.mockapi.io/notes`)
//   .then(response=>response.json())
//   .then(data=>setNote(data))

//   },[])

//   console.log(notes);
//   return(
//     <div>
//       <h1>NoteApp</h1>
//       <ul>
//         {
//           notes.map((note,index)=>{
//            return <Note note={note} key={note.id}/>
//           })
           
//         }
       
//      </ul>

//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'

//uncontrolled component in react ? beacause we are not using state to manage the form input
//using use state is controlled component
function App() {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handleLogin=(event)=>
  {
    event.preventDefault();
   console.log(email,password)
  }
  useEffect(()=>
  {
    console.log(email,password)
  },[email])
  return (
    <div>
      <h1>login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input type='text'name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email..'></input>

        </div>
        <br/>
        <div>
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password..' name="password"></input>
        </div>
        <br/>
        <button>Login</button>
      </form>

    </div>
  )
}

export default App
