import { StrictMode } from 'react'      
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import ReactDOM from 'react-dom/client'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout/>,
    Children: [
      { 
        path: '', 
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
