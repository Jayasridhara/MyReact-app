import React, { useState } from 'react'

function App() {
  const [count,setCount]=useState(0);
  


  const handleIncrease=(args)=>
  {
    setCount(count+1);
    console.log("Count increased:",count);
    console.log("Args",args)
  }

   const handleDecrease=()=>
  {
    setCount(count-1);
    console.log("Count Decrease:",count);
    
  }
   const handleReset=()=>
  {
    setCount(0);
    console.log("Count Reset:",count);
    
  }
  return (
    <>
    <h1>Counter:{count}</h1>
    <button onClick={()=>handleIncrease("Increase by")}>Increase</button>
    <button onClick={handleDecrease}>Decrease</button>
    <button onClick={handleReset}>Reset</button>
    </>
    
  )
}

export default App
