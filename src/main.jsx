import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {App} from './App.jsx'
import './styles/index.css';

//import components
import About from './About.jsx';
import ProjectPage from './components/ProjectPage.jsx';
import Creative from './components/Creative.jsx'
import CreativePage from './components/CreativePage.jsx';

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
    path: '/projects/:id',
    element: <ProjectPage />,
  },
  {
    path: '/creative',
    element: <Creative />,
  },
  {
    path: '/creative/:id',
    element: <CreativePage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
