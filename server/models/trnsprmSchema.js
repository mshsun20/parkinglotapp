const mongoose = require('mongoose')

const trnsprmSchema = new mongoose.Schema({
    trnspr_name: {
        type: String,
        required: true,
    },
    trnspr_phn: {
        type: String,
        required: true,
        unique: true,
    },
    trnspr_eml: {
        type: String,
        required: true,
        unique: true,
    },
    trnspr_addrss: {
        type: String,
        required: true,
    },
    trnspr_pincode: {
        type: String,
        required: true,
    },
    trnspr_dt: {
        type: String,
        default: Date.now,
    }
})

const Transporterm = mongoose.model('transporter', trnsprmSchema)

module.exports = Transporterm
