import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router'
import Layout from './layout'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'

const router =  createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
                path: "",
                element: <Home />
              },
              {
                path: "about",
                element: <About />
              }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
