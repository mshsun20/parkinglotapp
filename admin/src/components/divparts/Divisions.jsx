import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { NavLink } from 'react-router-dom'

const Divisions = () => {
  return (
    <div className="wbpg">
        <Header/>

        <div className="main">
          <div className="division">Division</div>
          <div className="addpg">
            <NavLink to='/adddiv'>Add Divisions</NavLink>
          </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Divisions