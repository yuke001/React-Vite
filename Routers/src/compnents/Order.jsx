import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Order = () => {
  return (
    <div>
      <Link to="/order/shoes">SHOES</Link>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Order