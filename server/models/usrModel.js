const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    uname: {
        type: String,
        required: true,
    },
    uphn: {
        type: String,
        required: true,
    },
    uemail: {
        type: String,
        required: true,
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
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)
