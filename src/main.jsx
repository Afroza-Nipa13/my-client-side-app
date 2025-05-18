import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,
    RouterProvider
 } from "react-router";
import MainLayOut from './LayOuts/MainLayOut.jsx';
import Home from './Components/Home.jsx';
import Add from './Components/Add.jsx';
import Details from './Components/Details.jsx';
import Update from './Components/Update.jsx';
import SignUp from './Components/SignUp.jsx';
import SignIn from './Components/SignIn.jsx';
import Error from './Components/Error.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import Users from './Pages/Users.jsx';

 const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement:<Error></Error>,
    children:[
      { index: true, Component:Home},
      { path:'add', Component:Add},
      { path:'details', Component:Details},
      { path:'update', Component:Update},
      {path:"/signup", Component:SignUp},
      {path:"/signin", Component:SignIn},
      {path:'/users',
      loader:()=>fetch("https://clients-management-server.vercel.app/users"),
      Component:Users}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
