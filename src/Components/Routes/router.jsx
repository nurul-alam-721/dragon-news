import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../../Layouts/HomeLayout';
import Home from '../../Pages/Home/Home';
import CategoryNews from '../../Pages/CategoryNews/CategoryNews';
import Login from '../Login/Login';
import Register from '../Register/Register';
import AuthLayout from '../../Layouts/AuthLayout';
import NewsDetails from '../../Pages/NewsDetails/NewsDetails';
import PrivateRoute from '../../Provider/PrivateRoute';

const router = createBrowserRouter([
    {
      path: '/', Component: HomeLayout,
      children: [
        {index: true, Component: Home},
        {
          path: '/category/:id',
          Component: CategoryNews,
          loader: (()=>fetch('/news.json'))
        },
      ]
    },
   {
     path: '/auth', Component: AuthLayout,
     children: [
        {
            path: '/auth/login', Component: Login
        },
        {
            path: '/auth/register', Component: Register
        }
     ]
    },
    {
        path: '/news-details/:id', 
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: (()=>fetch('/news.json'))
    },
    {
        path: '/*', element: <h3>Error 404</h3>
    }
    
  ]);
  

export default router;