import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import HomeWrapper from "./wrappers/HomeWrapper";
import Dashboard from "./pages/Dashboard";
import Todo from "./components/Todo";

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
    children:[
      {
        path:'todo',
        element:<Todo/>
      }
    ]

  }
]);

const App=()=>{

  return(
    <RouterProvider router={router}/>
  )
}
export default App;