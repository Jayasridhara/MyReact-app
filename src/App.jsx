import Greeting from "./components/Greeting";

//parent Component
function App()
{
  // const loggedInUser={
  //  name: "Jaya",
  //  email:"jaya@gmail.com"
  // }
  //craete a carrer
 function childToParent(name,email)
 {
  console.log("Function from parent to child");

  console.log(name,email);
 }
  return<>
      <Greeting childToParent={childToParent}/>

     </>

  
 
}
export default App;