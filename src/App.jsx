import { createBrowserRouter, RouterProvider } from "react-router";

const routes=[
{
    path:'/',
    element:<h1>Hello World</h1>
},
{
    path:'/about',
    element:<h1>About Us</h1>
},
{
    path:'/contactus',
    element:<h1>Contact US</h1>
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