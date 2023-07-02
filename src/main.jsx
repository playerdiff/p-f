import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "./index.js"
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"
import './pages/homePage'

const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/nextpage',
      element: <NextPage />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);
  