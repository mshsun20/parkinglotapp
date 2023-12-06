import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import server from '../Server'

const Home = () => {
  return (
    <>
      <div className="wbpg">
        <Header/>

        <div className="main">
          <div className="home">Home page</div>
        </div>
        
        <Footer/>
      </div>
    </>
  )
}

export default Home