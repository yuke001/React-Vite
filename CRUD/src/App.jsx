import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'

let router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [{
      path: "/login",
      element: <LoginPage></LoginPage>
    }]

  }
])
const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App