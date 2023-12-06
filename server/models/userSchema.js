const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    uname: {
        type: String,
        required: true,
    },
    uphn: {
        type: String,
        required: true,
        unique: true,
    },
    uemail: {
        type: String,
        required: true,
        unique: true,
    },
    upass: {
        type: String,
        required: true,
    },
    uaddrss: {
        type: String,
    },
    upincode: {
        type: String,
    },
    company: {
        type: String,
        required: true,
    },
    empcode: {
        type: String,
        required: true,
    },
    usr_dt: {
        type: String,
        default: Date.now,
    }
})

const User = mongoose.model('user', userSchema)

module.exports = User
