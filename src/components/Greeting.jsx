function Greeting(props)
{
   //child component of app 
    return(
      <>
      <h1>Hello ,{props.loggedInUser}</h1>
      <p>This is my first component</p>

      </>
    )
}

export default Greeting;