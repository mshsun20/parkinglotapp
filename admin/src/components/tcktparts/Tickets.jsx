import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { NavLink } from 'react-router-dom'

const Tickets = () => {
  return (
    <>
        <div className="wbpg">
            <Header/>

            <div className="main">
                <div className="tckt">Tickets</div>
                <div className="addpg">
                  <NavLink to='/addtckt'>Add Tickets</NavLink>
                </div>
            </div>

            <Footer/>
        </div>
    </>
  )
}

export default Tickets