import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import Pages from './components/Params/Pages'

let router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
      {
        path: "/pages/:id",
        element: <Pages></Pages>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      }
    ]
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