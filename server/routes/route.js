const express = require('express')
const router = express.Router()
// const mongoose = require('mongoose')
require('../dbms/dbcon')
const Account = require('../models/accountSchema')
const User = require('../models/userSchema')
const Ticket = require('../models/ticketSchema')
const Divisionm = require('../models/divmSchema')
const Vehicletypem = require('../models/vtypmSchema')
const Transporterm = require('../models/trnsprmSchema')
const Vehiclem = require('../models/vclmSchema')
const Driverm = require('../models/drvrmSchema')


// ---------------------------------------------------------------------------------
// Server Checking Route
router.get('/', (req, res) => {
    res.json({success:'Server is Online...', statuscode: 200})
})
// ---------------------------------------------------------------------------------
// =================================================================================
// =================================================================================
// ---------------------------------------------------------------------------------
// READ

router.route('/admgt').get(async (req, res) => {
    try {
        const accnt = await Account.find()
        res.json({success:`All Accounts data fetched...`, data:accnt})
    } catch (error) {
        console.error(error)
    }
})


// master data
router.route('/usrgt').get(async (req, res) => {})
router.route('/divmgt').get(async (req, res) => {})
router.route('/vtypmgt').get(async (req, res) => {})
router.route('/trnsprmgt').get(async (req, res) => {})
router.route('/vclmgt').get(async (req, res) => {})
router.route('/drvrmgt').get(async (req, res) => {})

// client data
router.route('/tckgt').post(async (req, res) => {})


// ---------------------------------------------------------------------------------
// CREATE

// router.route('/admpsh').post((req, res) => {
//     // console.log(req.body)
//     const {accname, accphn, accemail, accpass, accaddrss, accpincode, company, empcode, dept, desig, roles} = req.body
//     try {
//         const accnt = new Account({accname, accphn, accemail, accpass, accaddrss, accpincode, company, empcode, dept, desig, roles})
//         accnt.save().then(() => {
//             res.json({success:`Account details stored...`, statuscode:200})
//         }).catch(() => {
//             res.json({error:`Account details couldn't be stored.!!!`, statuscode:500})
//         })
//     } catch (error) {
//         console.error(error)
//     }
// })
router.route('/admlg').post(async (req, res) => {
    const {accemail, accpass} = req.body
    try {
        const Accntexst = await Account.findOne({accemail})
        if (!Accntexst) {
            res.json({error:`Account doesn't Exist !!!`, statuscode: 400})
        }
        else {
            // const accnt = await Account.findOne({accemail, accpass})
            // console.log(accnt)
            if (accpass!==Accntexst.accpass) {
                res.json({error: `Wrong Password !!!`, statuscode: 400})
            }
            else {
                res.json({success:`Account Successfully Logged In...`, statuscode: 200, data: Accntexst._id.toString()})
            }
        }
    } catch (error) {
        console.error(error)
    }
})

// master data
router.route('/usrpsh').post(async (req, res) => {})
router.route('/divmpsh').post(async (req, res) => {})
router.route('/vtypmpsh').post(async (req, res) => {})
router.route('/trnsprmpsh').post(async (req, res) => {})
router.route('/vclmpsh').post(async (req, res) => {})
router.route('/drvrmpsh').post(async (req, res) => {})

// client data
router.route('/usrlg').post((req, res) => {})
router.route('/tckpsh').post(async (req, res) => {})


// ---------------------------------------------------------------------------------
// UPDATE

// master data
router.route('/usrupd').put(async (req, res) => {})
router.route('/divmupd').put(async (req, res) => {})
router.route('/vtypmupd').put(async (req, res) => {})
router.route('/trnsprmupd').put(async (req, res) => {})
router.route('/vclmupd').put(async (req, res) => {})
router.route('/drvrmupd').put(async (req, res) => {})

// client data
router.route('/tckupd').put(async (req, res) => {})


// ---------------------------------------------------------------------------------
// DELETE

// master data
router.route('/usrdlt').delete(async (req, res) => {})
router.route('/divmdlt').delete(async (req, res) => {})
router.route('/vtypmdlt').delete(async (req, res) => {})
router.route('/trnsprmdlt').delete(async (req, res) => {})
router.route('/vclmdlt').delete(async (req, res) => {})
router.route('/drvrmdlt').delete(async (req, res) => {})

// client data
router.route('/tckdlt').delete(async (req, res) => {})



module.exports = router