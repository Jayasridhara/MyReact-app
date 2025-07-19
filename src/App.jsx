import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import HomeWrapper from "./wrappers/HomeWrapper";
import Dashboard from "./pages/Dashboard";
import Todo from "./components/Todo";
import todosLoader from "./Loader/unit/todosLoader";
import todosLoad from "./Loader/unit/todoLoad";



const routes=[
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
      }
    ]
},
{
          path:'dashboard',
          element:<Dashboard/>,
          loader:todosLoader,
          hydrateFallbackElement:<p>Loading Dashboard..</p>
},
{
 
              path:"todo/:id",
              element:<Todo/> ,
               loader:todosLoad,
                hydrateFallbackElement:<p>Loading TodoApp..</p>       
}

];
//create a router object
const router=createBrowserRouter(routes,{
  future: {
  v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});
function App() {
  return (
    <RouterProvider router={router}
    future={{
        v7_startTransition: true,
      }} />
  )
}

export default App