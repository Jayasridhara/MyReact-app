import React from 'react'

function App() {
  let count=0;
  const handleIncrease=()=>
  {
    count=count+1;
    console.log("Count increased:",count);
  }
  return (
    <>
    <h1>Counter:{count}</h1>
    <button onClick={handleIncrease}>Increase</button>
    </>
    
  )
}

export default App
