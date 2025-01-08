import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import './App.css'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import TopNav from './Components/TopNav/TopNav'
import Forgot from './Components/FogotPassword/Forgot'
import Bulb from './Components/Game/Bulb/Bulp'
import Footer from './Components/Footer/Footer'
import Game from './Components/Game/Game'
import Color from './Components/Game/Color/Color'
import Youtube from './Components/Youtube/Youtube'


let router = createBrowserRouter([
  {
    path: "/",
    element: <Nav></Nav>,
    children: [
    
      {
        path: "/",
        element: <Home></Home>
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
      },
      {
        path: "/game",
        element: <Game></Game>,
        children: [
          {
            path: "/game/bulb",
            element: <Bulb></Bulb>
          }, {
            path: "/game/color",
            element: <Color></Color>
          }
        ]
      },
      {
        path: "/youtube",
        element: <Youtube></Youtube>

      }
    ]
  }
])

const App = () => {

  return (
    <div id='app'>
      <TopNav>
      <RouterProvider router={router}></RouterProvider>
      </TopNav> <br />
      <RouterProvider router={router}></RouterProvider>
      <br />
      <Footer></Footer>
    </div>

  )
}

export default App