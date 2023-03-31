import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Projects from './pages/Projects'
import About from './pages/About'
import Certification from './pages/Certification'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/certification",
    element: <Certification />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)