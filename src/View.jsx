import { useState } from "react";

function View()
{

    const [count,setCount]=useState(0);


    const handleIncrese=(plus)=>
    {
        setCount(count+1);
        console.log("Increase",plus)
    }
    const handleDecrease=(minus)=>
    {
        setCount(count-1);
        console.log("Increase",minus)
    }
    const handleReset=(zero)=>
    {
        setCount(0);
        console.log("Reset",zero)
    }
    return (
        <>
            <h1>Count:{count}</h1>
            <button onClick={()=>handleIncrese("plus")}>Increase</button>
            <button onClick={()=>handleDecrease("minus")}>Decrease</button>
            <button onClick={()=>handleReset("zero")}>Reset</button>

        </>
    )
}

export default View;