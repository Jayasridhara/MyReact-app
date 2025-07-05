import { useState } from "react";

function View()
{
    
 const [reactions,setReaction]=useState({likes:0,dislikes:0})
 
   console.log(reactions);
   const handleLike=()=>{
       setReaction({...reactions,likes:reactions.likes+1});
   }
   const handleDislike=()=>{
     setReaction({...reactions,dislikes:reactions.dislikes+1});
   }
   return (
     <>
     <button onClick={handleLike}>Like {reactions.likes}</button>
     <button onClick={handleDislike}>Dislike {reactions.dislikes}</button>
     
     </>
     
   )
}

export default View;