const mongoose = require('mongoose')

const divmSchema = new mongoose.Schema({
    divsn: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    div_dt: {
        type: String,
        default: Date.now,
    }
})

const Divisionm = mongoose.model('division', divmSchema)

module.exports = Divisionm
