import React, { useEffect, useState } from 'react'

function App() {
  const [state,setState]=useState(0);
  
  useEffect(()=>{
    fetch(`https://68457069fc51878754db59b6.mockapi.io/notes`)
  .then(response=>response.json())
  .then(data=>console.log(data))

  },[state])

  return(
    <div>
      <h1>App</h1>
      <button onClick={()=>setState(state+1)}>
      Re-Render
      </button>
    </div>
  )
}

export default App
