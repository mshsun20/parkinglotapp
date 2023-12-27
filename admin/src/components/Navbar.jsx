import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="navmanu">
          <NavLink to='/'>Home</NavLink>
        </div>
        {/* <div className="navmanu">
          <NavLink to='/account'>Account</NavLink>
        </div> */}
        <div className="navmanu">
          <NavLink to='/usr'>Users</NavLink>
        </div>
        <div className="navmanu">
          <NavLink to='/div'>Divisions</NavLink>
        </div>
        <div className="navmanu">
          <NavLink to='/vtyp'>Vehicle Type</NavLink>
        </div>
        <div className="navmanu">
          <NavLink to='/trnspr'>Transporters</NavLink>
        </div>
        <div className="navmanu">
          <NavLink to='/vcl'>Vehicles</NavLink>
        </div>
        <div className="navmanu">
          <NavLink to='/drvr'>Drivers</NavLink>
        </div>
        <div className="navmanu">
          <NavLink to='/ticket'>Tickets</NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar