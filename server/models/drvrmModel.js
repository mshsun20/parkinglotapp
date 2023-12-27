const mongoose = require('mongoose')

const DrvrmSchema = new mongoose.Schema({
    drvr_name: {
        type: String,
        required: true,
    },
    drvr_phn: {
        type: String,
        required: true,
    },
    drvr_eml: {
        type: String,
        required: true,
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
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Driver', DrvrmSchema)
