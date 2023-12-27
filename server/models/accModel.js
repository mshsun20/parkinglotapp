const mongoose = require('mongoose')

const AccSchema = new mongoose.Schema({
    accname: {
        type: String,
        required: true
    },
    accphn: {
        type: String,
        required: true
    },
    accemail: {
        type: String,
        required: true
    },
    accpass: {
        type: String,
        required: true
    },
    accaddrss: {
        type: String
    },
    accpincode: {
        type: String
    },
    company: {
        type: String,
        required: true
    },
    empcode: {
        type: String,
        required: true
    },
    dept: {
        type: String
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Department'
    },
    desig: {
        type: String
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Designation'
    },
    roles: {
        type: String
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Account', AccSchema)

