const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    accname: {
        type: String,
        required: true,
    },
    accphn: {
        type: String,
        required: true,
        unique: true,
    },
    accemail: {
        type: String,
        required: true,
        unique: true,
    },
    accpass: {
        type: String,
        required: true,
    },
    accaddrss: {
        type: String,
    },
    accpincode: {
        type: String,
    },
    company: {
        type: String,
        required: true,
    },
    empcode: {
        type: String,
        required: true,
        unique: true,
    },
    dept: {
        type: String,
        required: true,
    },
    desig: {
        type: String,
    },
    roles: {
        type: String,
    },
})

const Account = mongoose.model('account', accountSchema)

module.exports = Account
