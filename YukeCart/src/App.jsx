import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainNav from './Components/NavBar/MainNav'
import LoginPage from './Components/Main/LoginPage'
import Register from './Components/Main/Register'
import Cart from './Components/CART/Cart'
import Banner from './Components/Banner/Banner'
import Categories from './Components/Categories/Categories'
import Pages from '../Params/Pages'
import HomePage from './Components/HomePage/HomePage'

let router = createBrowserRouter([
  {
    path: "/",
    element: <MainNav></MainNav>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>

      },
      {
        path: "/register",
        element: <Register></Register>

      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>

      }, {
        path: "/cart",
        element: <Cart></Cart>
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