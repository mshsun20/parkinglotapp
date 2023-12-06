import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { NavLink } from 'react-router-dom'

const Transporter = () => {
  return (
    <div className="wbpg">
        <Header/>

        <div className="main">
          <div className="transporter">Transporter</div>
          <div className="addpg">
            <NavLink to='/addtrnspr'>Add Transporter</NavLink>
          </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Transporter