import React from 'react'
import UserProvider from './context/UserProvider'
import Cart from './context/Cart'
import Home from './context/Home'

const App = () => {
  return (
    <div>
      <UserProvider>
        <Cart></Cart>
        <Home></Home>
      </UserProvider>
    </div>
  )
}

export default App