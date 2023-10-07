import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import Routes from './router/Routes.jsx'
import AuthProvider from './Auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={Routes}> </RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
