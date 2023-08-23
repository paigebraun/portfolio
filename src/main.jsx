import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {App} from './App.jsx'
import './styles/index.css';

//import components
import About from './About.jsx';
import CoolLinks from './CoolLinks.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/projects',
    element: <App />,
  },
  {
    path: '/projects/cool-links',
    element: <CoolLinks />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
