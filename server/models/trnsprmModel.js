const mongoose = require('mongoose')

const TrnsprmSchema = new mongoose.Schema({
    trnspr_name: {
        type: String,
        required: true,
    },
    trnspr_phn: {
        type: String,
        required: true,
    },
    trnspr_eml: {
        type: String,
        required: true,
    },
    trnspr_addrss: {
        type: String,
        required: true,
    },
    trnspr_pincode: {
        type: String,
        required: true,
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Transporter', TrnsprmSchema)
