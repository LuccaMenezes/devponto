import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Frequencia from './pages/Frequencia/Frequencia';
import Espelho from './pages/Espelho/Espelho';
import User from './pages/User/User';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/frequencia",
        element: <Frequencia />
      },
      {
        path: "/espelho",
        element: <Espelho />
      },
      {
        path: "/user",
        element: <User />
      }
    ]
  },
 
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

