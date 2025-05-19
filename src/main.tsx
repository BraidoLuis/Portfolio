import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.tsx'

import Home from '../src/Screens/Home.tsx'
import Contact from '../src/Screens/Contact.tsx';
import Portfolio from '../src/Screens/Portfolio.tsx';
import ErrorPage from '../src/Screens/ErrorPage.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
 
 const router = createBrowserRouter([
 {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
 {
    path:"/",
    element: <Home />
 },
 {
    path:"/contatos",
    element: <Contact />
 },
 {
    path:"/portfolio",
    element: <Portfolio />
      },
    ]
  }
 ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
