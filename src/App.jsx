import React, { useState } from 'react'

function App() {
  const [likes,setlikes]=useState(0);
  const [dislikes,setdislikes]=useState(0);

  const handleLike=()=>{
      setlikes(likes+1)
  }
  const handleDislike=()=>{
    setdislikes(dislikes+1)
  }
  return (
    <>
    <button onClick={handleLike}>Like {likes}</button>
    <button onClick={handleDislike}>Dislike {dislikes}</button>
    
    </>
    
  )
}

export default App
