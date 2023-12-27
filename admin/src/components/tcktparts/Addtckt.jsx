import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { NavLink } from 'react-router-dom'

const Addtckt = () => {
  return (
    <>
        <div className="wbpg">
            <Header/>

            <div className="main">
                <div className="tckt">Add Tickets</div>
            </div>

            <Footer/>
        </div>
    </>
  )
}

export default Addtckt