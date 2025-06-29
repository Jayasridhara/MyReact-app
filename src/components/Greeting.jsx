function Greeting(props)
{
   //child component of app 
   
    const name="jaya";
     const email="jaya@gmail.com";
     props.childToParent(name,email);
     console.log(props);
    return(
      <>
      <h1>Hello ,{props.name}</h1>
      <p>Your are loged in as {props.email}</p>
       <p>{props.childToParent(name,email)}</p>
      </>
    )
}

export default Greeting;