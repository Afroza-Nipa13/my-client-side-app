import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,
    RouterProvider
 } from "react-router";
import MainLayOut from './LayOuts/MainLayOut.jsx';
import Home from './Components/Home.jsx';
import Add from './Components/Add.jsx';
import Details from './Components/Details.jsx';
import Update from './Components/Update.jsx';

 const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      { index: true, Component:Home},
      { path:'add', Component:Add},
      { path:'details', Component:Details},
      { path:'update', Component:Update}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
