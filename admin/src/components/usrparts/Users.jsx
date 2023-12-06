import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { NavLink } from 'react-router-dom'

const Users = () => {
  return (
    <>
        <div className="wbpg">
            <Header/>

            <div className="main">
                <div className="user">Users</div>
                <div className="addpg">
                  <NavLink to='/addusr'>Add Users</NavLink>
                </div>
            </div>

            <Footer/>
        </div>
    </>
  )
}

export default Users