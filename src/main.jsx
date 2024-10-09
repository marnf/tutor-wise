import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Dashboard from './Components/Dashboard.jsx';
import Jobs from './Components/Jobs.jsx';
import Experiment from './Components/Experiment.jsx';
import Profile from './Components/Profile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Dashboard></Dashboard>
      },
      {
        path:'/jobs',
        element:<Jobs></Jobs>
      },
      {path:"/experiment",
        element:<Experiment></Experiment>
      },
      {path:"/profile",
        element:<Profile></Profile>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
