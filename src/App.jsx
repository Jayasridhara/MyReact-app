import Greeting from "./components/Greeting";

//parent Component
function App()
{
  const loggedInUser="Jaya";
  return<>
      <Greeting loggedInUser={loggedInUser}/>

     </>

  
 
}
export default App;