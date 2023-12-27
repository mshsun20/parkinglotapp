const express = require('express')
const router = express.Router()
const AccController = require('../controllers/accController')
const DivmController = require('../controllers/divmController')
const DrvrmController = require('../controllers/drvrmController')
const TicketController = require('../controllers/ticketController')
const TrnsprmController = require('../controllers/trnsprmController')
const UsrController = require('../controllers/usrController')
const VclmController = require('../controllers/vclmController')
const VtypmController = require('../controllers/vtypmController')


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

router.get('/admin/fetch', AccController.fetch)


// master data
router.get('/usr/fetch', UsrController.read)
// router.route('/divmgt').get(async (req, res) => {})
// router.route('/vtypmgt').get(async (req, res) => {})
// router.route('/trnsprmgt').get(async (req, res) => {})
// router.route('/vclmgt').get(async (req, res) => {})
// router.route('/drvrmgt').get(async (req, res) => {})

// client data
// router.route('/tckgt').post(async (req, res) => {})


// ---------------------------------------------------------------------------------
// CREATE

router.post('/admin/register', AccController.reg)
router.post('/admin/login', AccController.log)

// master data
router.post('/usr/add', UsrController.create)
// router.route('/divmpsh').post(async (req, res) => {})
// router.route('/vtypmpsh').post(async (req, res) => {})
// router.route('/trnsprmpsh').post(async (req, res) => {})
// router.route('/vclmpsh').post(async (req, res) => {})
// router.route('/drvrmpsh').post(async (req, res) => {})

// client data
router.post('/usr/login', UsrController.login)
// router.route('/tckpsh').post(async (req, res) => {})


// ---------------------------------------------------------------------------------
// UPDATE

// master data
router.put('/usr/edit', UsrController.update)
// router.route('/divmupd').put(async (req, res) => {})
// router.route('/vtypmupd').put(async (req, res) => {})
// router.route('/trnsprmupd').put(async (req, res) => {})
// router.route('/vclmupd').put(async (req, res) => {})
// router.route('/drvrmupd').put(async (req, res) => {})

// client data
// router.route('/tckupd').put(async (req, res) => {})


// ---------------------------------------------------------------------------------
// DELETE

// master data
router.delete('/usr/remove', UsrController.delete)
// router.route('/divmdlt').delete(async (req, res) => {})
// router.route('/vtypmdlt').delete(async (req, res) => {})
// router.route('/trnsprmdlt').delete(async (req, res) => {})
// router.route('/vclmdlt').delete(async (req, res) => {})
// router.route('/drvrmdlt').delete(async (req, res) => {})

// client data
// router.route('/tckdlt').delete(async (req, res) => {})



module.exports = router