import { useState } from 'react'
import server from '../Server'
import axios from 'axios'

const Account = () => {
    let name, value
    const [vl, setVl] = useState({})

    const hndlinp = (e) => {
        name = e.target.name
        value = e.target.value
        setVl({...vl, [name]:value})
    }
    const hndlsub = async (e) => {
        e.preventDefault()
        const {accname, accphn, accemail, accpass, acnfps, accaddrss, accpincode, company, empcode, dept, desig, roles} = vl

        try {
            if (accpass===acnfps) {
                const res = await axios.post(`${server}/admin/register`, {accname, accphn, accemail, accpass, accaddrss, accpincode, company, empcode, dept, desig, roles})
                const data = await res.data
                console.log(data)
                if (data.statuscode === 200) {
                    alert(data.success)
                }
                else {
                    alert(data.error)
                }
            }
            else {
                alert('Confirm Password Must be Same !!!')
            }
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
        <div>
            <div className="acc">
                <div className="hdr">Add New Admin Account</div>
                <div className="frm">
                    <form>
                        <div className="frmgrp">
                            <label htmlFor="accname">Full Name</label>
                            <input type="text" name="accname" id="accname" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accphn">Phone Number</label>
                            <input type="text" name="accphn" id="accphn" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accemail">Email Id</label>
                            <input type="text" name="accemail" id="accemail" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accpass">Password</label>
                            <input type="password" name="accpass" id="accpass" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="acnfps">Confirm Password</label>
                            <input type="password" name="acnfps" id="acnfps" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accaddrss">Address Details</label>
                            <input type="text" name="accaddrss" id="accaddrss" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="accpincode">Pin Code</label>
                            <input type="text" name="accpincode" id="accpincode" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="company">Company</label>
                            <input type="text" name="company" id="company" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="empcode">Employee Code</label>
                            <input type="text" name="empcode" id="empcode" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="dept">Department</label>
                            <input type="text" name="dept" id="dept" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="desig">Designation</label>
                            <input type="text" name="desig" id="desig" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <label htmlFor="roles">Roles</label>
                            <input type="text" name="roles" id="roles" onChange={hndlinp} />
                        </div>
                        <div className="frmgrp">
                            <input type="submit" value="Add" onClick={hndlsub} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Account