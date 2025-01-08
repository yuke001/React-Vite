import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Cart from './Components/Nav/Cart'
import Order from './Components/Nav/Order'
import Shoes from './Components/Nav/Shoes'
import './App.css'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import TopNav from './Components/TopNav/TopNav'
import Forgot from './Components/FogotPassword/Forgot'


let router = createBrowserRouter([
  {
    path: "/",
    element: <Nav></Nav>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>
      },
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "order",
        element: <Order></Order>,
        children: [
          {
            path: "shoes",
            element: <Shoes></Shoes>
          }
        ]
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Signup></Signup>

      },
      {
        path: "/forgot",
        element: <Forgot></Forgot>
      }
    ]
  }
])

const App = () => {
  return (
    <div>
      <TopNav></TopNav> <br />
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App