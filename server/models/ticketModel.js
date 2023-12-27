const mongoose = require('mongoose')

const TicketSchema = new mongoose.Schema({
    ticketno: {
        type: String,
        required: true,
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
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Ticket', TicketSchema)
