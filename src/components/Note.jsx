import React from 'react'
import "./Note.css"
function Note({note}) {
  

let itemStyle
return <li className='item'><input type='checkbox'/><p style={{textDecoration:note.important?'line-through':'none'}}>{note.title}</p> </li>
//return note.important? <li> {'✔️'}</li>:<li>{note.title} </li>

}

export default Note