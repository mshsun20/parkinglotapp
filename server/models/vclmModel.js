const mongoose = require('mongoose')

const VclmSchema = new mongoose.Schema({
    vcl_name: {
        type: String,
        required: true,
    },
    vcl_no: {
        type: String,
        required: true,
    },
    vcl_det: {
        type: String,
        required: true,
    },
    drvrid: {
        type: String,
        required: true,
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Vehicle', VclmSchema)
