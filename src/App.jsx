import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import HomeWrapper from "./wrappers/HomeWrapper";
import Dashboard from "./pages/Dashboard";
import Todo from "./components/Todo";
import todosLoader from "./Loader/unit/todosLoader";
import todoLoader from "./Loader/unit/todoLoader";


const  router=createBrowserRouter([
  {
  path:'/',
  element:<HomeWrapper/>,
  children:[
    {
  path:'',
  element:<Home/>
  },
  {
    path:'login',
    element:<Login/>
  },
  {
    path:'register',
    element:<Register/>
  },
  ]
  },
  {
    path:"dashboard",
    element:<Dashboard/>,
    loader:todosLoader,
    hydrateFallbackElement:<p>Loading Todos..</p>
   
  },
   {
        path:'todo/:id',
        element:<Todo/>,
        loader:todoLoader,
         hydrateFallbackElement:<p>Loading Todos content..</p>
  }

]);

const App=()=>{

  return(
    <RouterProvider router={router}/>
  )
}
export default App;