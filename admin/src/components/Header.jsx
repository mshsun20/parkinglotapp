import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="icon">ParkingLot Admin</div>
        <div className="menu">
          <div className="navbar"><Navbar/></div>
          <div className="logout">Logout</div>
        </div>
      </div>
    </>
  )
}

export default Header