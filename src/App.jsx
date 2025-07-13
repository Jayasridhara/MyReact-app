import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";

const routes=[
{
    path:'/',
    element:<Home/>
},
{
    path:'/login',
    element:<Login/>
},
{
    path:'/register',
    element:<Register/>
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