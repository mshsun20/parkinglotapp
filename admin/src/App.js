import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
// import Account from './components/Account'
import Login from './components/Login'
import User from './components/usrparts/Users'
import Addusr from './components/usrparts/Addusr'
import Editusr from './components/usrparts/Editusr'
import Divisions from './components/divparts/Divisions'
import Adddiv from './components/divparts/Adddiv'
import Vehicletype from './components/vtypparts/Vehicletype'
import Addvtyp from './components/vtypparts/Addvtyp'
import Transporter from './components/trnsprparts/Transporter'
import Addtrnspr from './components/trnsprparts/Addtrnspr'
import Vehicle from './components/vclparts/Vehicle'
import Addvcl from './components/vclparts/Addvcl'
import Driver from './components/drvrparts/Driver'
import Adddrvr from './components/drvrparts/Adddrvr'
import Tickets from './components/tcktparts/Tickets'
import Addtckt from './components/tcktparts/Addtckt'
import Edittckt from './components/tcktparts/Edittckt'


const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>}/>
            {/* <Route path='/account' element={<Account/>}/> */}
            <Route path='/usr' element={<User/>}/>
            <Route path='/addusr' element={<Addusr/>}/>
            <Route path='/editusr' element={<Editusr/>}/>
            <Route path='/div' element={<Divisions/>}/>
            <Route path='/adddiv' element={<Adddiv/>}/>
            <Route path='/vtyp' element={<Vehicletype/>}/>
            <Route path='/addvtyp' element={<Addvtyp/>}/>
            <Route path='/trnspr' element={<Transporter/>}/>
            <Route path='/addtrnspr' element={<Addtrnspr/>}/>
            <Route path='/vcl' element={<Vehicle/>}/>
            <Route path='/addvcl' element={<Addvcl/>}/>
            <Route path='/drvr' element={<Driver/>}/>
            <Route path='/adddrvr' element={<Adddrvr/>}/>
            <Route path='/ticket' element={<Tickets/>}/>
            <Route path='/addtckt' element={<Addtckt/>}/>
            <Route path='/edttckt' element={<Edittckt/>}/>
        </Routes>
    </>
  )
}

export default App