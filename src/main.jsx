import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './router/route.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './context/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
     <ToastContainer/>
    <AuthProvider>
      <RouterProvider router={router}>
    </RouterProvider>
    </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
