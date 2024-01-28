import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';

const router = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"",
      element:<About/>
    },
    {
      path:"projects",
      element:<Projects/>
    },
    {
      path:"resume",
      element:<Resume/>
    },
    {
      path:"contact",
      element:<Contact/>
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
