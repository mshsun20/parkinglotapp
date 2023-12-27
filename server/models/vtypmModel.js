const mongoose = require('mongoose')

const VtypmSchema = new mongoose.Schema({
    vtypname: {
        type: String,
        required: true,
    },
    vtypinfo: {
        type: String,
        required: true,
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Vehicletype', VtypmSchema)
