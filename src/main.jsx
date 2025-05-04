import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomeLayout from './Layouts/HomeLayout.jsx'
import Home from './Pages/Home/Home.jsx'
import CategoryNews from './Pages/CategoryNews/CategoryNews.jsx'

const router = createBrowserRouter([
  {
    path: '/', Component: HomeLayout,
    children: [
      {index: true, Component: Home},
      {
        path: '/category/:id',
        Component: CategoryNews,
        loader: (()=>fetch('/news.json'))
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
