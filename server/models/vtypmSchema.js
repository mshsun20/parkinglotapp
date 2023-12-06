const mongoose = require('mongoose')

const vtypmSchema = new mongoose.Schema({
    vtypname: {
        type: String,
        required: true,
    },
    vtypinfo: {
        type: String,
        required: true,
    },
    vtyp_dt: {
        type: String,
        default: Date.now,
    }
})

const Vehicletypem = mongoose.model('vehicletype', vtypmSchema)

module.exports = Vehicletypem
