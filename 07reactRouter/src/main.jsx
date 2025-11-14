import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout/>,
    Children: [
      { 
        path: '/', 
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
