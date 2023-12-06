const mongoose = require('mongoose')

const drvrmSchema = new mongoose.Schema({
    drvr_name: {
        type: String,
        required: true,
    },
    drvr_phn: {
        type: String,
        required: true,
        unique: true,
    },
    drvr_eml: {
        type: String,
        required: true,
        unique: true,
    },
    drvr_addrss: {
        type: String,
        required: true,
    },
    drvr_pincode: {
        type: String,
        required: true,
    },
    drv_lic_no: {
        type: String,
        required: true,
        unique: true,
    },
    drvr_dt: {
        type: String,
        default: Date.now,
    }
})

const Driverm = mongoose.model('driver', drvrmSchema)

module.exports = Driverm
