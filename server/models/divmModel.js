const mongoose = require('mongoose')

const DivmSchema = new mongoose.Schema({
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
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Division', DivmSchema)
