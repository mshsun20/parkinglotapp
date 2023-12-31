import { useState } from 'react'
import server from '../Server'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let name, value
    const [vl, setVl] = useState({})
    const [adm, setAdm] = useState()
    const navig = useNavigate()

    const hndlinp = (e) => {
        name = e.target.name
        value = e.target.value
        setVl({...vl, [name]:value})
    }
    const hndlsub = async (e) => {
        e.preventDefault()
        const {accemail, accpass} = vl

        try {
            const res = await axios.post(`${server}/admin/login`, {accemail, accpass})
            const data = await res.data
            console.log(data)
            setAdm(data.data)
            if (data.statuscode === 200) {
                window.alert(data.success)
                navig('/')
            }
            else {
                window.alert(data.error)
            }
        } catch (error) {
            console.error(error)
        }
    }
 
  return (
    <>
        <div>
            <div className="acc">
                <div className="hdr">Log In</div>
                <div className="frm">
                    <form>
                        <div className="frmgrp">
                            <label htmlFor="accemail">Email Id</label>
                            <input type="text" name="accemail" id="accemail" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accpass">Password</label>
                            <input type="password" name="accpass" id="accpass" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <input type="submit" value="Sign In" onClick={hndlsub} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login