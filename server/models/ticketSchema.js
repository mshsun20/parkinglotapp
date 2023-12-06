const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    ticketno: {
        type: String,
        required: true,
        unique: true,
    },
    pstatus: {
        type: String,
        required: true,
    },
    so_no: {
        type: String,
        required: true,
    },
    divid: {
        type: String,
        required: true,
    },
    vtypeid: {
        type: String,
        required: true,
    },
    trnsprid: {
        type: String,
        required: true,
    },
    vclid: {
        type: String,
        required: true,
    },
    tck_dt: {
        type: String,
        default: Date.now,
    }
})

const Ticket = mongoose.model('ticket', ticketSchema)

module.exports = Ticket
