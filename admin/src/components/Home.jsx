import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import server from '../Server'
import axios from 'axios'

const Home = () => {
  const [vl, setVl] = useState()

  const getAcc = async () => {
    try {
      const res = await axios.get(`${server}/admin/fetch`)
      const data = await res.data
      console.log(data)
      setVl(data.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getAcc()
  }, [])

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