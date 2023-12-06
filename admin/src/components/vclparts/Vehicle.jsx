import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { NavLink } from 'react-router-dom'

const Vehicle = () => {
  return (
    <div className="wbpg">
        <Header/>

        <div className="main">
          <div className="vehicle">Vehicle</div>
          <div className="addpg">
            <NavLink to='/addvcl'>Add Vehicle</NavLink>
          </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Vehicle