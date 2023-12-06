import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { NavLink } from 'react-router-dom'

const Vehicletype = () => {
  return (
    <div className="wbpg">
        <Header/>

        <div className="main">
          <div className="vehicletype">Vehicle Types</div>
          <div className="addpg">
            <NavLink to='/addvtyp'>Add Vehicle Type</NavLink>
          </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Vehicletype