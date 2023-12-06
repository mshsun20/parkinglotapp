import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { NavLink } from 'react-router-dom'

const Driver = () => {
  return (
    <div className="wbpg">
        <Header/>

        <div className="main">
          <div className="driver">Driver</div>
          <div className="addpg">
            <NavLink to='/adddrvr'>Add Driver</NavLink>
          </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Driver