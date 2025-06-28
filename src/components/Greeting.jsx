function Greeting(props)
{
   //child component of app 
   
    const name="jaya";
     const email="jaya@gmail.com";
     props.childToParent(name,email);
    return(
      <>
      <h1>Hello ,{props.name}</h1>
      <p>Your are loged in as {props.email}</p>

      </>
    )
}

export default Greeting;