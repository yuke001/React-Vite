import React from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Home from './compnents/Home'
import Cart from './compnents/Cart'
import Order from './compnents/Order'
import "./App.css"
import Shoes from './compnents/Shoes'
import About from './compnents/About'
import Routers from './compnents/Routers'


let router = createBrowserRouter([
  {
    path: "/",
    element: <Routers></Routers>,
    children: [
      {
        path: "/home",
        element: <Home></Home>

      }
      ,
      {
        path: "/cart",
        element: <Cart></Cart>
      },

      {
        path: "/order",
        element: <Order></Order>,
        children: [
          {
            path: "/order/shoes",
            element: <Shoes></Shoes>
          }
        ]
      },
      {
        path:"/about",
        element:<About></About>
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