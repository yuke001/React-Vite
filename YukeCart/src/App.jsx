import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainNav from './Components/NavBar/MainNav'
import LoginPage from './Components/Main/LoginPage'
import Register from './Components/Main/Register'
import Cart from './Components/CART/Cart'
import Banner from './Components/Banner/Banner'
import Categories from './Components/Categories/Categories'
import Pages from '../Params/Pages'

let router = createBrowserRouter([
  {
    path: "/",
    element: <MainNav></MainNav>,
    children: [
      // {
      //   path: "/pages:id",
      //   element: <Pages></Pages>

      // },
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
      {/* <Banner></Banner>
      <Categories></Categories> */}

    </div>
  )
}

export default App