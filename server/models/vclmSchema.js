const mongoose = require('mongoose')

const vclmSchema = new mongoose.Schema({
    vcl_name: {
        type: String,
        required: true,
    },
    vcl_no: {
        type: String,
        required: true,
        unique: true,
    },
    vcl_det: {
        type: String,
        required: true,
    },
    drvrid: {
        type: String,
        required: true,
    },
    vcl_dt: {
        type: String,
        default: Date.now,
    }
})

const Vehiclem = mongoose.model('vehicle', vclmSchema)

module.exports = Vehiclem
