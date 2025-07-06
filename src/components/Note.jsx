import React from 'react'

function Note({note}) {
  
return <li>{note.title} && {note.important&&'✔️'}</li>
//return note.important? <li> {'✔️'}</li>:<li>{note.title} </li>

}

export default Note