import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { NavLink } from 'react-router-dom'

const Edittckt = () => {
  return (
    <>
        <div className="wbpg">
            <Header/>

            <div className="main">
                <div className="tckt">Edit Tickets</div>
            </div>

            <Footer/>
        </div>
    </>
  )
}

export default Edittckt